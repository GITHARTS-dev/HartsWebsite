import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    // Run on every route except Next's static asset paths and image optimizer.
    // Those are hashed/immutable and don't benefit from inspection.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2|ttf|otf|js|css|map)$).*)",
  ],
};

// Sliding-window in-memory rate limiter. Per-instance — adequate for single
// task / small ASG. If horizontally scaled, swap the store for Redis later.
const WINDOW_MS = 60_000;
const PAGE_LIMIT = 120; // 2 req/s avg per IP on pages
const API_LIMIT = 20;   // 1 req/3s avg per IP on API routes
const buckets = new Map<string, number[]>();

function clientIp(req: NextRequest): string {
  // ALB / CloudFront / API Gateway all forward via X-Forwarded-For.
  // First entry is the original client.
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "anon";
}

function rateLimited(key: string, limit: number): boolean {
  const now = Date.now();
  const cutoff = now - WINDOW_MS;
  const arr = buckets.get(key) ?? [];
  // Drop expired timestamps.
  let i = 0;
  while (i < arr.length && arr[i]! < cutoff) i++;
  const recent = i === 0 ? arr : arr.slice(i);
  if (recent.length >= limit) {
    buckets.set(key, recent);
    return true;
  }
  recent.push(now);
  buckets.set(key, recent);
  // Opportunistic GC so the Map can't grow unbounded.
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      if (v[v.length - 1]! < cutoff) buckets.delete(k);
    }
  }
  return false;
}

// Block obvious abusive UAs. Real browsers + legitimate crawlers (Googlebot,
// Bingbot) pass through. Empty UA is suspicious but allowed — some health
// checks omit it.
const BLOCKED_UA = /(\b(?:curl|wget|python-requests|libwww-perl|nikto|sqlmap|nmap|masscan|fuzz|acunetix|nessus|wpscan|gobuster|dirbuster|httpx)\b)/i;

const IS_PROD = process.env.NODE_ENV === "production";

function buildCsp(nonce: string): string {
  if (!IS_PROD) {
    // Dev needs 'unsafe-eval' for React/Turbopack HMR + better stack traces,
    // 'unsafe-inline' for the dev overlay, and ws: for the HMR socket. A CSP
    // here doesn't add real defense — keep it loose so localhost works as
    // expected. Prod gets the strict nonce-based CSP below.
    return [
      "default-src 'self' 'unsafe-eval' 'unsafe-inline' blob: data: https:",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: data:",
      "style-src 'self' 'unsafe-inline' https:",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https:",
      "connect-src 'self' ws: wss: https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join("; ");
  }

  // 'strict-dynamic' lets nonced scripts load their dependencies without us
  // listing every CDN. Connect-src kept tight; extend as third parties are added.
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: 'unsafe-inline'`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' https:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}

function securityHeaders(res: NextResponse, nonce: string) {
  res.headers.set("Content-Security-Policy", buildCsp(nonce));
  res.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()",
  );
  res.headers.set("X-DNS-Prefetch-Control", "on");
  res.headers.set("Cross-Origin-Opener-Policy", "same-origin");
}

// Paths exempted from rate limiting + UA filter. ALB / ECS hit /api/health
// from inside the VPC with no UA at sub-second intervals — throttling them
// would mark every task unhealthy.
const EXEMPT = new Set(["/api/health", "/robots.txt", "/sitemap.xml"]);

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (EXEMPT.has(pathname)) {
    return NextResponse.next();
  }

  const ua = req.headers.get("user-agent") ?? "";

  if (BLOCKED_UA.test(ua)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const ip = clientIp(req);
  const isApi = pathname.startsWith("/api/");
  const key = `${ip}:${isApi ? "api" : "page"}`;
  const limit = isApi ? API_LIMIT : PAGE_LIMIT;

  if (rateLimited(key, limit)) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: { "Retry-After": "30" },
    });
  }

  // Per-request nonce — server components can read it from the
  // `x-nonce` request header (forwarded by Next via requestHeaders below).
  const nonce = crypto.randomUUID().replace(/-/g, "");
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-nonce", nonce);

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  securityHeaders(res, nonce);
  return res;
}
