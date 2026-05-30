import nodemailer, { type Transporter } from "nodemailer";

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
};

declare global {
  // Reuse the SMTP transporter during local Next.js reloads and warm serverless invocations.
  // eslint-disable-next-line no-var
  var nodemailerTransporter: Transporter | undefined;
}

function requireEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getSmtpConfig(): SmtpConfig {
  return {
    host: requireEnv("SMTP_HOST"),
    port: Number(requireEnv("SMTP_PORT")),
    user: requireEnv("SMTP_USER"),
    pass: requireEnv("SMTP_PASS"),
  };
}

export function getMailTransporter() {
  if (!globalThis.nodemailerTransporter) {
    const config = getSmtpConfig();

    globalThis.nodemailerTransporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: false,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });
  }

  return globalThis.nodemailerTransporter;
}
