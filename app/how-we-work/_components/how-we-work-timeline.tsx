"use client";

import { useEffect, useRef, useState } from "react";

const phases = [
  {
    title: "Understanding",
    side: "left",
    focus: "Every transformation begins with clarity.",
    desc: "HARTS begins by understanding organizational priorities, operational realities, leadership perspectives, and long-term ambitions before shaping strategic direction.",
    points: [
      "Understanding the Organization",
      "Leadership Alignment",
      "Operational Review",
      "Strategic Goals",
    ],
  },
  {
    title: "Design",
    side: "right",
    focus: "Designing transformation with intention.",
    desc: "HARTS designs transformation strategies that align people, operations, systems, and long-term organizational goals into one connected direction.",
    points: [
      "Human-centered thinking",
      "Strategic clarity",
      "Scalable frameworks",
      "Adaptive transformation",
    ],
  },
  {
    title: "Collaborative Engagement",
    side: "left",
    focus: "Transformation through collaboration.",
    desc: "HARTS works closely with organizations through continuous alignment, shared visibility, and iterative engagement across every phase of transformation.",
    points: [
      "Leadership Collaboration",
      "Strategic Planning",
      "Team Alignment",
      "Continuous Guidance",
    ],
  },
  {
    title: "Outcomes Over Deliverables",
    side: "right",
    focus: "Transformation should create measurable organizational progress.",
    desc: "HARTS focuses on improving visibility, alignment, adaptability, and strategic decision-making rather than simply producing reports or frameworks.",
    points: [
      "Operational Visibility",
      "Strategic Alignment",
      "Cross-functional Collaboration",
      "Sustainable Transformation",
      "Future-ready Decision Systems",
    ],
  },
  {
    title: "Sustain",
    side: "left",
    focus: "Transformation is not a one-time initiative.",
    desc: "HARTS continues supporting organizations through optimization, adaptation, strategic evolution, and ongoing transformation guidance beyond implementation.",
    points: [
      "Continuous Optimization",
      "Strategic Evolution",
      "Operational Adaptability",
      "Long-Term Advisory",
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

  if (progress < 0.12) {
    const phaseProgress = progress / 0.12;

    ballTop =
      ballSize / 2 +
      phaseProgress * (stageHeight / 2 - ballSize / 2);
    lineHeight = ballTop;
  } else if (progress < 0.86) {
    const contentProgress = (progress - 0.12) / 0.74;

    ballTop = stageHeight / 2;
    lineHeight = ballTop;
    activeIndex = Math.min(
      phases.length - 1,
      Math.floor(contentProgress * phases.length),
    );
  } else {
    const phaseProgress = (progress - 0.86) / 0.14;
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
