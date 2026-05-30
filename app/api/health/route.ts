import { NextResponse } from "next/server";

export const runtime = "nodejs";
// Always evaluate fresh — never cached by Next, CloudFront, or ALB.
export const dynamic = "force-dynamic";

// Liveness probe for ALB target groups / ECS health checks / App Runner.
// Intentionally does NOT touch Postgres — the goal is "is the process up and
// serving HTTP?" so a DB blip doesn't kill every container at once. For a
// deeper readiness check, hit /api/health?deep=1.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const deep = url.searchParams.get("deep") === "1";

  if (!deep) {
    return NextResponse.json(
      { status: "ok", ts: Date.now() },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  // Deep check — verify the DB is reachable. Only call this from a private
  // monitor (e.g. CloudWatch synthetic) so a flood of /health?deep=1 from
  // the public internet can't exhaust the connection pool.
  try {
    const { getPostgresPool } = await import("../../_lib/postgres");
    const pool = getPostgresPool();
    const start = Date.now();
    await pool.query("SELECT 1");
    return NextResponse.json(
      { status: "ok", db: "ok", dbLatencyMs: Date.now() - start, ts: Date.now() },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "degraded",
        db: "error",
        error: error instanceof Error ? error.message : "unknown",
        ts: Date.now(),
      },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
