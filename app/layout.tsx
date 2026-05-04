import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HARTS | Consulting Home",
  description:
    "A polished HARTS consulting homepage for strategy, transformation, and growth advisory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
