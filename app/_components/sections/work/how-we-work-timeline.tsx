"use client";

import { useEffect, useRef, useState } from "react";

const phases = [
  {
    title: "Diagnose",
    side: "left",
    focus: "Clarity before motion",
    desc: "We study how your teams, tools, data, and customers interact today so every recommendation is grounded in the realities of your business.",
    points: [
      "Stakeholder interviews and operating model review",
      "Process, platform, and data-flow assessment",
      "Opportunity map with risk, effort, and value signals",
    ],
  },
  {
    title: "Design",
    side: "right",
    focus: "Architecture with intent",
    desc: "We turn the diagnosis into an actionable blueprint, shaping journeys, governance, and technical choices around measurable outcomes.",
    points: [
      "Future-state journey and service design",
      "System architecture and integration planning",
      "Prioritized roadmap with decision checkpoints",
    ],
  },
  {
    title: "Build",
    side: "left",
    focus: "Execution without drift",
    desc: "We build in focused increments, keeping delivery, adoption, security, and performance visible throughout the implementation cycle.",
    points: [
      "Modular delivery sprints with transparent demos",
      "Quality gates for security, reliability, and usability",
      "Launch planning across product, process, and people",
    ],
  },
  {
    title: "Sustain",
    side: "right",
    focus: "Progress that compounds",
    desc: "We help teams operate, improve, and scale what has been launched so transformation keeps creating value after the first release.",
    points: [
      "Performance monitoring and adoption feedback loops",
      "Continuous optimization backlog",
      "Knowledge transfer and enablement rituals",
    ],
  },
];

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

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = Math.max(1, rect.height - window.innerHeight);
      const scrolled = -rect.top;
      targetProgressRef.current = Math.max(0, Math.min(1, scrolled / totalHeight));

      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(animateProgress);
      }
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
  let ballTop = ballSize / 2;
  let lineHeight = 0;
  let activeIndex = -1;

  if (progress < 0.2) {
    const phaseProgress = progress / 0.2;

    ballTop =
      ballSize / 2 +
      phaseProgress * (stageHeight / 2 - ballSize / 2);
    lineHeight = ballTop;
  } else if (progress < 0.8) {
    const contentProgress = (progress - 0.2) / 0.6;

    ballTop = stageHeight / 2;
    lineHeight = ballTop;
    activeIndex = Math.min(
      phases.length - 1,
      Math.floor(contentProgress * phases.length),
    );
  } else {
    const phaseProgress = (progress - 0.8) / 0.2;
    const start = stageHeight / 2;
    const end = stageHeight - ballSize / 2;

    ballTop = start + phaseProgress * (end - start);
    lineHeight = ballTop;
  }

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

        <div className="work-timeline-content">
          <div className="work-timeline-inner">
            {phases.map((phase, index) => (
              <article
                className={`work-phase work-phase-${phase.side} ${
                  activeIndex === index ? "active" : ""
                }`}
                key={phase.title}
              >
                <div className="work-phase-copy">
                  <p className="work-phase-kicker">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
