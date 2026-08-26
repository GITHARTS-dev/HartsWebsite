import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Maintenance | HARTS Consulting",
  description: "Our website is currently undergoing scheduled maintenance.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        color: "#1a1a1a",
        fontFamily: "var(--font-dm-sans), sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          padding: "3rem",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "0.5rem 1rem",
            background: "rgba(231, 71, 60, 0.1)",
            color: "#E7473C",
            borderRadius: "50px",
            fontSize: "0.875rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          System Update
        </div>
        
        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          Currently Under Maintenance
        </h1>
        
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.6,
            color: "#5f6368",
          }}
        >
          We are currently updating our website. Please check back soon.
        </p>
      </div>
    </div>
  );
}
