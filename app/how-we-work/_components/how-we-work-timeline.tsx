"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Search, PencilRuler, Hammer, Rocket, Infinity as InfinityIcon } from "lucide-react";

const PHASE_ICON_SIZE = 20;
const PHASE_ICON_STROKE = 1.7;

const phases: {
  title: string;
  focus: string;
  desc: string;
  points: string[];
  icon: ReactNode;
}[] = [
  {
    title: "Diagnose",
    focus: "We do not prescribe before we understand.",
    desc: "We begin by interrogating organisational priorities, leadership conviction, operational constraints, and long-term ambitions. The result is a grounded baseline before a single recommendation is made.",
    points: [
      "Organizational diagnostic",
      "Leadership alignment mapping",
      "Operational constraint review",
      "Strategic horizon setting",
    ],
    icon: <Search size={PHASE_ICON_SIZE} strokeWidth={PHASE_ICON_STROKE} aria-hidden="true" />,
  },
  {
    title: "Design",
    focus: "Designing transformation with intention.",
    desc: "We design transformation strategies that bring people, operations, systems, and long-term organisational goals into one connected direction.",
    points: [
      "Human-centered thinking",
      "Strategic clarity",
      "Scalable frameworks",
      "Adaptive transformation",
    ],
    icon: <PencilRuler size={PHASE_ICON_SIZE} strokeWidth={PHASE_ICON_STROKE} aria-hidden="true" />,
  },
  {
    title: "Collaborative Engagement",
    focus: "Transformation through collaboration.",
    desc: "We work closely with organisations through continuous alignment, shared visibility, and iterative engagement across every phase of transformation.",
    points: [
      "Leadership Collaboration",
      "Strategic Planning",
      "Team Alignment",
      "Continuous Guidance",
    ],
    icon: <Hammer size={PHASE_ICON_SIZE} strokeWidth={PHASE_ICON_STROKE} aria-hidden="true" />,
  },
  {
    title: "Outcomes Over Deliverables",
    focus: "Transformation should create measurable organizational progress.",
    desc: "We focus on improving visibility, alignment, adaptability, and strategic decision-making, not on producing reports or frameworks.",
    points: [
      "Operational Visibility",
      "Strategic Alignment",
      "Cross-functional Collaboration",
      "Sustainable Transformation",
      "Future-ready Decision Systems",
    ],
    icon: <Rocket size={PHASE_ICON_SIZE} strokeWidth={PHASE_ICON_STROKE} aria-hidden="true" />,
  },
  {
    title: "Sustain",
    focus: "Transformation is not a one-time initiative.",
    desc: "We continue supporting organisations through optimisation, adaptation, strategic evolution, and ongoing guidance well beyond implementation.",
    points: [
      "Continuous Optimization",
      "Strategic Evolution",
      "Operational Adaptability",
      "Long-Term Advisory",
    ],
    icon: <InfinityIcon size={PHASE_ICON_SIZE} strokeWidth={PHASE_ICON_STROKE} aria-hidden="true" />,
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export function HowWeWorkTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(72);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateMeasurements = () => {
      const header = document.querySelector<HTMLElement>(".site-header");

      setViewportHeight(window.innerHeight);
      setHeaderHeight(header?.offsetHeight ?? 72);
    };

    const animateProgress = () => {
      const nextProgress =
        progressRef.current +
        (targetProgressRef.current - progressRef.current) * 0.16;

      if (Math.abs(targetProgressRef.current - nextProgress) < 0.001) {
        progressRef.current = targetProgressRef.current;
        setProgress(targetProgressRef.current);
        frameRef.current = null;
        return;
      }

      progressRef.current = nextProgress;
      setProgress(nextProgress);
      frameRef.current = window.requestAnimationFrame(animateProgress);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = Math.max(1, rect.height - window.innerHeight);
      const scrolled = -rect.top;
      targetProgressRef.current = clamp(scrolled / totalHeight, 0, 1);

      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(animateProgress);
      }
    };

    setMounted(true);
    updateMeasurements();
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateMeasurements);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMeasurements);
      window.removeEventListener("resize", handleScroll);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  if (!mounted) {
    return <div className="work-timeline-placeholder" />;
  }

  const ballSize = 32;
  const stageHeight = Math.max(360, viewportHeight - headerHeight);
  const timelineEndTop = clamp(
    stageHeight * 0.78,
    ballSize / 2,
    stageHeight - ballSize / 2 - 24,
  );
  const ballScrollProgress = clamp(progress, 0, 1);
  const ballProgress = ballScrollProgress * ballScrollProgress * (3 - 2 * ballScrollProgress);
  const ballTop = ballSize / 2 + ballProgress * (timelineEndTop - ballSize / 2);
  const lineHeight = ballTop;
  const scrollHintOpacity = clamp(1 - progress / 0.035, 0, 1);
  const contentProgress = clamp(progress, 0, 1);
  const phaseTravel = stageHeight * 1.32;

  return (
    <div ref={containerRef} className="work-timeline">
      <div
        className="work-timeline-stage"
        style={{
          top: `${headerHeight}px`,
          minHeight: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        <div
          aria-hidden="true"
          className="work-timeline-line"
          style={{ height: `${lineHeight}px` }}
        />
        <div
          aria-hidden="true"
          className="work-timeline-ball"
          style={{
            width: `${ballSize}px`,
            height: `${ballSize}px`,
            top: `${ballTop}px`,
          }}
        />
        <div
          aria-hidden="true"
          className="work-timeline-scroll-hint"
          style={{
            opacity: scrollHintOpacity,
            top: `${ballTop + ballSize / 2 + 18}px`,
          }}
        >
          Scroll down
        </div>

        <div className="work-timeline-content">
          <div className="work-timeline-inner">
            {phases.map((phase, index) => {
              const phaseProgress =
                contentProgress * (phases.length - 1) + 0.5 - index;
              const centerOffset = phaseProgress - 0.5;
              const distanceFromCenter = Math.abs(centerOffset);
              const centeredOffset =
                distanceFromCenter < 0.1
                  ? centerOffset * 0.24
                  : Math.sign(centerOffset) * (distanceFromCenter - 0.076);
              const verticalOffset = -centeredOffset * phaseTravel;
              const edgeSoftness = clamp((distanceFromCenter - 0.36) / 0.46, 0, 1);
              const visible = phaseProgress > -0.28 && phaseProgress < 1.28;
              const opacity = visible ? 1 - edgeSoftness * 0.18 : 0;
              const blur = edgeSoftness * 2.4;
              const scale = 1 - Math.min(distanceFromCenter, 0.72) * 0.014;
              const side = index % 2 === 0 ? "left" : "right";

              return (
                <article
                  className={`work-phase work-phase-${side} work-phase--has-underlay`}
                  key={phase.title}
                  style={{
                    opacity,
                    filter: `blur(${blur}px)`,
                    transform: `translate3d(0, ${verticalOffset}px, 0) scale(${scale})`,
                  }}
                >
                  <div
                    className="work-phase-underlay work-phase-underlay--mesh"
                    aria-hidden="true"
                  />
                  <div className="work-phase-copy">
                    <p className="work-phase-kicker">
                      <span className="work-phase-kicker-icon">{phase.icon}</span>
                      Phase {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2>{phase.title}</h2>
                    <strong>{phase.focus}</strong>
                    <p>{phase.desc}</p>
                    <ul>
                      {phase.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
