"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PageShell } from "../_shared/layout/page-shell";
import { HomeExperience } from "./home-experience";

type Phase = "idle" | "exiting" | "gone";

export function HomePortalPage() {
  const [phase, setPhase] = useState<Phase>("idle");
  const startedRef = useRef(false);

  const begin = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    setPhase("exiting");
    setTimeout(() => {
      document.documentElement.style.overflow = "";
      setPhase("gone");
    }, 1600);
  }, []);

  // Skip animation entirely on reduced-motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.style.overflow = "";
      setPhase("gone");
    }
  }, []);

  useEffect(() => {
    if (phase !== "idle") return;

    document.documentElement.style.overflow = "hidden";
    window.scrollTo(0, 0);

    // passive:false required to preventDefault on wheel
    const onWheel = (e: WheelEvent) => { e.preventDefault(); begin(); };
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", "Space", " ", "Enter"].includes(e.key)) {
        e.preventDefault();
        begin();
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0]!.clientY; };
    const onTouchMove = (e: TouchEvent) => {
      if (touchStartY - e.touches[0]!.clientY > 8) { e.preventDefault(); begin(); }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [phase, begin]);

  return (
    <>
      <PageShell>
        <HomeExperience />
      </PageShell>
      {phase !== "gone" && (
        <PortalOverlay phase={phase} onBegin={begin} />
      )}
    </>
  );
}

/* ─── Overlay ─────────────────────────────────────────────────────────────── */

function PortalOverlay({
  phase,
  onBegin,
}: {
  phase: "idle" | "exiting";
  onBegin: () => void;
}) {
  const ex = phase === "exiting";

  return (
    <div
      className={`pr-root${ex ? " pr-root--exiting" : ""}`}
      aria-hidden={ex ? "true" : undefined}
    >
      {/* GPU-composited ambient orbs — depth only, no layout impact */}
      <div className="pr-orbs" aria-hidden="true">
        <span className="pr-orb pr-orb-1" />
        <span className="pr-orb pr-orb-2" />
        <span className="pr-orb pr-orb-3" />
      </div>

      {/* Foreground content — single composited layer */}
      <div className={`pr-content${ex ? " pr-content--exiting" : ""}`}>
        <p className="pr-eyebrow">Welcome to</p>

        {/* Full-color logo on white card so it reads on dark background */}
        <div className="pr-logo-wrap">
          <div className="pr-logo-card">
            <img
              src="/HARTS Consulting LBG.png"
              alt="HARTS Consulting"
              className="pr-logo-img"
              draggable={false}
            />
          </div>
        </div>

        <p className="pr-tagline">
          Strategy.&nbsp;&nbsp;Transformation.&nbsp;&nbsp;Clarity.
        </p>
      </div>

      {/* Scroll hint */}
      <button
        type="button"
        className={`pr-scroll-hint${ex ? " pr-scroll-hint--exiting" : ""}`}
        onClick={onBegin}
        aria-label="Enter site"
      >
        <span className="pr-scroll-label">Scroll to enter</span>
        <svg
          className="pr-scroll-chevron"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 5v14M6 13l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
