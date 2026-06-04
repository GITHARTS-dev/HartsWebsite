"use client";

import { useEffect, useRef } from "react";

/**
 * Animated hero composition — light-theme, replicating the reference:
 *
 *   Left half:   dense field of fine wavy contour lines, like
 *                topographic strata, stacked vertically with subtle
 *                horizontal undulation.
 *   Right half:  three overlapping rounded curved shapes (organic
 *                "leaf" forms) layered on top of each other with soft
 *                drop shadows, creating depth.
 *
 * Brand red is folded in as a small accent on one of the curved
 * shapes and on a handful of wave strands so the identity carries.
 *
 * Three depth layers parallax with the cursor at different rates,
 * eased at 6% per frame for slow subtle motion.
 *
 * Decorative; aria-hidden on the wrapper.
 */
export function HomeHeroArt() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const host = svg.closest(".page-hero") as HTMLElement | null;
    if (!host) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width - 0.5;
      targetY = (e.clientY - rect.top) / rect.height - 0.5;
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };
    const tick = () => {
      const EASE = 0.06;
      currentX += (targetX - currentX) * EASE;
      currentY += (targetY - currentY) * EASE;
      host.style.setProperty("--cursor-x", currentX.toFixed(4));
      host.style.setProperty("--cursor-y", currentY.toFixed(4));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      host.style.removeProperty("--cursor-x");
      host.style.removeProperty("--cursor-y");
    };
  }, []);

  // ── Wave strand generation ────────────────────────────────────────
  // 26 horizontal wavy strands across the LEFT 60% of the canvas.
  // Each strand is a smooth cubic bezier; slight per-strand variance.
  const STRAND_COUNT = 26;
  const strands = Array.from({ length: STRAND_COUNT }, (_, i) => {
    const t = i / (STRAND_COUNT - 1);
    const y0 = 60 + t * 980;
    const cy1 = y0 + 20 + ((i * 13) % 30) - 15;
    const cy2 = y0 + 30 + ((i * 19) % 36) - 18;
    const y1 = y0 + 18 + ((i * 7) % 14) - 7;
    return {
      d: `M -80 ${y0.toFixed(1)} C 320 ${cy1.toFixed(1)}, 720 ${cy2.toFixed(1)}, 1180 ${y1.toFixed(1)}`,
      // Subtle per-strand opacity ripple
      opacity: 0.18 + ((i * 11) % 100) / 600,
      // Every 7th strand is brand red (soft) — keeps brand identity
      isAccent: i % 7 === 3,
    };
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label=""
      focusable="false"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        {/* Pale blue-grey base — same airy palette as the reference. */}
        <linearGradient id="hh-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#F4F6FB" />
          <stop offset="55%"  stopColor="#EAEEF5" />
          <stop offset="100%" stopColor="#DDE3EE" />
        </linearGradient>

        {/* Subtle shadow filter for the layered curved shapes. */}
        <filter id="hh-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="14" />
          <feOffset dx="0" dy="10" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.18" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner-glow / subtle bevel on the white front shape */}
        <linearGradient id="hh-shape-white" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5F7FB" />
        </linearGradient>
        <linearGradient id="hh-shape-pale" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#E2E8F2" />
          <stop offset="100%" stopColor="#D2DBEA" />
        </linearGradient>
        <linearGradient id="hh-shape-red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FBE4E2" />
          <stop offset="100%" stopColor="#F4CFCB" />
        </linearGradient>

        {/* Fade mask for wave strands so they don't butt the canvas edges. */}
        <linearGradient id="hh-strand-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#fff" stopOpacity="0" />
          <stop offset="10%"  stopColor="#fff" stopOpacity="1" />
          <stop offset="78%"  stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="hh-strand-mask">
          <rect width="1920" height="1080" fill="url(#hh-strand-fade)" />
        </mask>
      </defs>

      {/* 1 — base wash */}
      <rect width="1920" height="1080" fill="url(#hh-bg)" />

      {/* 2 — LEFT field of wavy contour strands.
              Two stacked groups so we can parallax at slightly different
              rates (far + mid) and create depth in the wave field itself. */}
      <g className="hh-far">
        <g mask="url(#hh-strand-mask)">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 6 -3; -3 4; 0 0"
            dur="44s"
            repeatCount="indefinite"
          />
          {strands.filter((_, i) => i % 2 === 0).map((s, i) => (
            <path
              key={`f-${i}`}
              d={s.d}
              fill="none"
              stroke={s.isAccent ? "#E7473C" : "#4A5B7E"}
              strokeOpacity={s.isAccent ? s.opacity * 1.4 : s.opacity * 0.85}
              strokeWidth={s.isAccent ? 0.9 : 0.7}
              strokeLinecap="round"
            />
          ))}
        </g>
      </g>

      <g className="hh-mid">
        <g mask="url(#hh-strand-mask)">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; -8 4; 4 -3; 0 0"
            dur="38s"
            repeatCount="indefinite"
          />
          {strands.filter((_, i) => i % 2 === 1).map((s, i) => (
            <path
              key={`m-${i}`}
              d={s.d}
              fill="none"
              stroke={s.isAccent ? "#E7473C" : "#3A4C70"}
              strokeOpacity={s.isAccent ? s.opacity * 1.6 : s.opacity}
              strokeWidth={s.isAccent ? 1 : 0.7}
              strokeLinecap="round"
            />
          ))}
        </g>
      </g>

      {/* 3 — RIGHT cluster of overlapping curved shapes.
              Three shapes layered back-to-front:
                1. Largest pale-blue back shape (broadest curve)
                2. Mid pale shape, slightly inset, lifted
                3. Front white shape with the soft drop shadow
              Plus one small brand-red accent shape behind the front. */}
      <g className="hh-near">
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 -6; 0 6; 0 -6"
            dur="32s"
            repeatCount="indefinite"
            additive="sum"
          />

          {/* 3a — back: large pale-blue curved shape */}
          <path
            d="
              M 1080 80
              C 1240 -40, 1640 -20, 1880 120
              C 2080 260, 2020 760, 1880 940
              C 1700 1140, 1340 1100, 1180 980
              C 1020 860, 980 280, 1080 80
              Z
            "
            fill="url(#hh-shape-pale)"
            opacity="0.85"
          />

          {/* 3b — small brand-red accent peeking from behind */}
          <path
            d="
              M 1300 480
              C 1380 380, 1640 380, 1760 480
              C 1860 580, 1820 760, 1700 820
              C 1560 900, 1340 880, 1280 780
              C 1220 680, 1240 540, 1300 480
              Z
            "
            fill="url(#hh-shape-red)"
            opacity="0.85"
          />

          {/* 3c — mid pale shape */}
          <path
            d="
              M 1180 200
              C 1320 100, 1700 100, 1880 220
              C 2020 320, 1980 720, 1820 880
              C 1660 1020, 1340 1000, 1220 880
              C 1080 760, 1080 320, 1180 200
              Z
            "
            fill="url(#hh-shape-pale)"
            opacity="0.65"
          />

          {/* 3d — front: white shape with soft shadow.
                  This is the "focal" shape — sits in front, casts the
                  deepest shadow, has the cleanest white. */}
          <g filter="url(#hh-shadow)">
            <path
              d="
                M 1280 280
                C 1400 200, 1700 200, 1840 300
                C 1960 380, 1920 660, 1780 800
                C 1640 920, 1380 920, 1260 800
                C 1140 700, 1180 360, 1280 280
                Z
              "
              fill="url(#hh-shape-white)"
            />
          </g>
        </g>

        {/* Two tiny "Welcome" callout marks on the front shape — just
            decorative dots that pulse very gently to imply life. */}
        <g transform="translate(1560 520)">
          <circle r="3" fill="#E7473C" fillOpacity="0.72">
            <animate
              attributeName="r"
              values="2.8;4;2.8"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
}
