"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "../_shared/layout/page-shell";
import { HomeExperience } from "./home-experience";

type Phase = "idle" | "exiting" | "gone";

const PORTAL_EASE = [0.32, 0.04, 0.16, 1] as const;
const PORTAL_DURATION = 1.5;
const PORTAL_UNMOUNT_MS = 1750;

const GPU_LAYER = {
  willChange: "clip-path, transform, opacity",
  transform: "translateZ(0)",
  backfaceVisibility: "hidden" as const,
  WebkitBackfaceVisibility: "hidden" as const,
  contain: "paint" as const,
};

const GPU_LAYER_LIGHT = {
  willChange: "transform, opacity",
  transform: "translateZ(0)",
  backfaceVisibility: "hidden" as const,
  WebkitBackfaceVisibility: "hidden" as const,
};

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
    }, PORTAL_UNMOUNT_MS);
  }, []);

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
      <AnimatePresence>
        {phase !== "gone" && (
          <PortalOverlay
            key="harts-portal"
            phase={phase}
            onBegin={begin}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function PortalOverlay({
  phase,
  onBegin,
}: {
  phase: "idle" | "exiting";
  onBegin: () => void;
}) {
  const isExiting = phase === "exiting";

  return (
    <motion.div
      className="pr-root"
      aria-hidden={isExiting ? "true" : undefined}
      initial={{
        clipPath: "circle(150% at 50% 50%)",
        opacity: 1,
      }}
      animate={
        isExiting
          ? { clipPath: "circle(0% at 50% 50%)", opacity: 0 }
          : { clipPath: "circle(150% at 50% 50%)", opacity: 1 }
      }
      transition={{
        clipPath: { duration: PORTAL_DURATION, ease: PORTAL_EASE },
        opacity: {
          duration: PORTAL_DURATION * 0.30,
          ease: PORTAL_EASE,
          delay: PORTAL_DURATION * 0.70,
        },
      }}
      style={{ ...GPU_LAYER, backgroundColor: "#E7473C" }}
    >
      <div className="pr-orbs" aria-hidden="true">
        <span className="pr-orb pr-orb-1" />
        <span className="pr-orb pr-orb-2" />
        <span className="pr-orb pr-orb-3" />
      </div>

      <motion.div
        className="pr-content"
        initial={{ opacity: 1, y: 0, scale: 1 }}
        animate={
          isExiting
            ? { opacity: 0, y: -18, scale: 0.97 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={{
          duration: PORTAL_DURATION * 0.42,
          ease: PORTAL_EASE,
          delay: PORTAL_DURATION * 0.04,
        }}
        style={GPU_LAYER_LIGHT}
      >
        <p className="pr-eyebrow">Welcome to</p>

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
      </motion.div>

      <motion.button
        type="button"
        className="pr-scroll-hint"
        onClick={onBegin}
        aria-label="Enter site"
        initial={{ opacity: 1, y: 0 }}
        animate={
          isExiting ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }
        }
        transition={{
          duration: PORTAL_DURATION * 0.28,
          ease: PORTAL_EASE,
        }}
        style={{ ...GPU_LAYER_LIGHT, color: "#FFFFFF" }}
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
      </motion.button>
    </motion.div>
  );
}
