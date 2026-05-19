import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./styles/about.css";

export const metadata: Metadata = {
  title: "HARTS Consulting | Strategy, Transformation & Digital Enablement",
  description:
    "HARTS partners with senior leadership teams to navigate complexity, accelerate transformation, and deliver measurable outcomes across strategy, operations, and digital enablement.",
  icons: {
    icon: "/logo (1).png",
    shortcut: "/logo (1).png",
    apple: "/logo (1).png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
