/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['127.0.0.1', '192.168.29.131', '172.28.192.1'],

  // Build a self-contained server bundle. Required for the Docker image we
  // push to ECR / run on Fargate / App Runner — copies only the deps the
  // server actually uses, slimming the image by ~80%.
  output: 'standalone',

  // Compression is done at the edge (CloudFront) in production; gzip from
  // Node would just burn CPU and reduce keep-alive throughput.
  compress: false,

  // Don't leak framework version in headers.
  poweredByHeader: false,

  reactStrictMode: true,

  // Smaller production bundles — drop console.* calls except errors / warns.
  compiler: {
    removeConsole: {
      exclude: ['error', 'warn'],
    },
  },

  // Modern formats first — saves 30–60% over JPEG/PNG on supported browsers.
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Permanent redirects for renamed routes so existing bookmarks and
  // search-engine-cached links don't 404.
  //
  // The second block maps the pre-2026 manufacturing/sourcing site (WordPress,
  // same domain) onto the consulting site. Those URLs are still in Google's
  // index and still drive the sitelinks under a "harts" search, so every one
  // of them has to answer 308 -> nearest live page instead of 404. Remove an
  // entry only once Search Console shows zero impressions for it.
  async redirects() {
    return [
      { source: '/where-we-deliver', destination: '/where-you-stand', permanent: true },
      { source: '/where-we-deliver/:path*', destination: '/where-you-stand/:path*', permanent: true },

      // --- legacy site: company ---
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/about-harts', destination: '/about-us', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },

      // --- legacy site: offering pages -> the consulting service index ---
      // /services had children (/services/capabilities, /services/innai,
      // /services/our-services), so the :path* rule collapses the whole
      // subtree rather than mapping it onto /what-we-deliver/:slug, which
      // would just 404 again on a slug that no longer exists.
      { source: '/services', destination: '/what-we-deliver', permanent: true },
      { source: '/services/:path*', destination: '/what-we-deliver', permanent: true },
      { source: '/capabilities', destination: '/what-we-deliver', permanent: true },
      { source: '/capabilities/:path*', destination: '/what-we-deliver', permanent: true },
      { source: '/consulting', destination: '/what-we-deliver', permanent: true },
      { source: '/consulting/:path*', destination: '/what-we-deliver', permanent: true },
      { source: '/consulting-service', destination: '/what-we-deliver', permanent: true },
      { source: '/engineering-services', destination: '/what-we-deliver', permanent: true },
      { source: '/electronics', destination: '/what-we-deliver', permanent: true },
      { source: '/electronics/:path*', destination: '/what-we-deliver', permanent: true },
      { source: '/innai', destination: '/what-we-deliver', permanent: true },
      { source: '/innai/:path*', destination: '/what-we-deliver', permanent: true },
      { source: '/expert-fabrication', destination: '/what-we-deliver', permanent: true },
      { source: '/expert-fabrication/:path*', destination: '/what-we-deliver', permanent: true },
      { source: '/sheet-metal', destination: '/what-we-deliver', permanent: true },
      { source: '/machining', destination: '/what-we-deliver', permanent: true },
      { source: '/castings', destination: '/what-we-deliver', permanent: true },
      { source: '/manufacturing-lines-and-sites', destination: '/what-we-deliver', permanent: true },
      { source: '/manufacturing-lines-and-sites/:path*', destination: '/what-we-deliver', permanent: true },

      // WordPress left a duplicate About page behind at /about-2.
      { source: '/about-2', destination: '/about-us', permanent: true },

      // --- legacy site: sections with no successor on the consulting site ---
      // Nothing on the new site covers a news archive, so these land on the
      // homepage. Google may still class a homepage redirect as a soft 404;
      // that is fine here -- the point is that a visitor arriving from a
      // stale result sees the company, not an error.
      { source: '/news', destination: '/', permanent: true },
      { source: '/news/:path*', destination: '/', permanent: true },
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:path*', destination: '/', permanent: true },
      { source: '/category/:path*', destination: '/', permanent: true },
      { source: '/tag/:path*', destination: '/', permanent: true },
      { source: '/author/:path*', destination: '/', permanent: true },
      // Old posts also sat at the root, not under /news — e.g.
      // /lets-connect-in-hannover. Root-level slugs can't be pattern-matched
      // without swallowing the real routes, so anything not listed here falls
      // through to app/not-found.tsx, which returns a real 404 with links to
      // the live sections. Add a rule here if Search Console reports traffic
      // on a specific one.
      { source: '/lets-connect-in-hannover', destination: '/', permanent: true },
    ];
  },

  async headers() {
    return [
      // Security headers applied to every response as a baseline.
      // The middleware (middleware.ts → proxy.ts) also sets these per-request
      // with a stricter nonce-based CSP; this config-level layer acts as a
      // fallback for paths the middleware matcher excludes (static assets,
      // images) and for environments where middleware doesn't run.
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',       value: 'nosniff' },
          { key: 'X-Frame-Options',               value: 'DENY' },
          { key: 'Referrer-Policy',               value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()' },
          { key: 'Cross-Origin-Opener-Policy',    value: 'same-origin' },
          { key: 'Cross-Origin-Resource-Policy',  value: 'same-origin' },
          { key: 'Strict-Transport-Security',     value: 'max-age=63072000; includeSubDomains; preload' },
          // Broad CSP fallback — middleware overrides this with a tighter
          // nonce-based policy on dynamic responses.
          { key: 'Content-Security-Policy',       value: "default-src 'self'; frame-ancestors 'none'; base-uri 'self'; object-src 'none'" },
        ],
      },

      // Long-cache static hero / team images (originals served from /public).
      {
        source: '/hero/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/team/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // /_next/image and /_next/static are already served with
      // Cache-Control: public, max-age=31536000, immutable by Next 16 — no
      // override needed. CloudFront honors origin cache headers by default.

      // Don't let CloudFront or browsers cache API responses by default.
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate' },
        ],
      },
    ];
  },
};

export default nextConfig;
