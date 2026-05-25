import { Pool } from "pg";

type PostgresConfig = {
  connectionString?: string;
  host?: string;
  port?: number;
  database?: string;
  user?: string;
  password?: string;
  ssl?: { rejectUnauthorized: false };
};

declare global {
  // Reuse the same pool during local Next.js reloads.
  // eslint-disable-next-line no-var
  var postgresPool: Pool | undefined;
}

function getPostgresConfig(): PostgresConfig {
  const ssl =
    process.env.POSTGRES_SSL === "true"
      ? { rejectUnauthorized: false as const }
      : undefined;

  if (process.env.DATABASE_URL) {
    return {
      connectionString: process.env.DATABASE_URL,
      ssl,
    };
  }

  const host = process.env.PGHOST;
  const database = process.env.PGDATABASE;
  const user = process.env.PGUSER;

  if (!host || !database || !user) {
    throw new Error(
      "PostgreSQL is not configured. Set DATABASE_URL or PGHOST, PGDATABASE, and PGUSER."
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
  };
}

export function getPostgresPool() {
  if (!globalThis.postgresPool) {
    globalThis.postgresPool = new Pool(getPostgresConfig());
  }

  return globalThis.postgresPool;
}
