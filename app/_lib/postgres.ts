import { Pool, type PoolConfig } from "pg";

declare global {
  // Reuse the same pool across hot-reloads in dev and across module instances
  // when bundlers re-evaluate this file in production.
  // eslint-disable-next-line no-var
  var postgresPool: Pool | undefined;
}

function getPostgresConfig(): PoolConfig {
  // RDS Postgres uses TLS; default to verify-skipped CA chain (rds-ca bundle
  // is not always present in container images). Set POSTGRES_SSL=false only
  // for local dev against a non-TLS Postgres.
  const sslEnabled = process.env.POSTGRES_SSL !== "false";
  const ssl = sslEnabled ? { rejectUnauthorized: false as const } : undefined;

  // Pool sizing: each task / Fargate container gets its own pool. Keep it small
  // so RDS connection limits aren't blown by ASG scale-out. Tune via env.
  const max = Number(process.env.PG_POOL_MAX ?? 10);
  const idleTimeoutMillis = Number(process.env.PG_IDLE_TIMEOUT_MS ?? 30_000);
  const connectionTimeoutMillis = Number(process.env.PG_CONNECT_TIMEOUT_MS ?? 5_000);
  // Server-side statement timeout — prevents a hung query from holding a
  // connection forever during a traffic spike.
  const statement_timeout = Number(process.env.PG_STATEMENT_TIMEOUT_MS ?? 10_000);
  const query_timeout = Number(process.env.PG_QUERY_TIMEOUT_MS ?? 15_000);

  const common = {
    max,
    idleTimeoutMillis,
    connectionTimeoutMillis,
    statement_timeout,
    query_timeout,
    keepAlive: true,
    application_name: "harts-website",
  } satisfies Partial<PoolConfig>;

  if (process.env.DATABASE_URL) {
    return { connectionString: process.env.DATABASE_URL, ssl, ...common };
  }

  const host = process.env.PGHOST;
  const database = process.env.PGDATABASE;
  const user = process.env.PGUSER;

  if (!host || !database || !user) {
    throw new Error(
      "PostgreSQL is not configured. Set DATABASE_URL or PGHOST, PGDATABASE, and PGUSER.",
    );
  }

  if (process.env.PGPASSWORD === "your-postgres-password") {
    throw new Error("Set your real PostgreSQL password in .env.local.");
  }

  return {
    host,
    port: Number(process.env.PGPORT || 5432),
    database,
    user,
    password: process.env.PGPASSWORD,
    ssl,
    ...common,
  };
}

export function getPostgresPool() {
  if (!globalThis.postgresPool) {
    const pool = new Pool(getPostgresConfig());
    // Without an error handler, an idle-client error (RDS failover, network
    // blip) crashes the Node process. Log and let the pool replace the client.
    pool.on("error", (err: Error) => {
      console.error("Postgres idle client error:", err);
    });
    globalThis.postgresPool = pool;
  }
  return globalThis.postgresPool;
}
