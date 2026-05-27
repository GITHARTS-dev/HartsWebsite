/**
 * Decorative background — two elegant flowing wave ribbons made of many
 * fine red parallel strands. Each ribbon sweeps diagonally from the
 * upper-right edge down and to the left, exiting off-canvas. A clear
 * focal strand reads through the centre of each ribbon, edges fade.
 * Pure SVG, deterministic. Caller positions it via .ed-detail-hero-flow.
 */
export function AbstractFlow({ className }: { className?: string }) {
  const STRANDS = 150;
  const STEP = 0.7;

  // Softer bell — focal strand remains dominant, but surrounding strands
  // stay more visible so the ribbon reads as a filled swathe of colour.
  const bell = (i: number) => {
    const half = STRANDS / 2;
    const dist = Math.abs(i - half) / half;
    const peak = Math.pow(1 - dist, 1.2);
    return 0.06 + peak * 0.82;
  };

  // Wave A — upper ribbon. Single graceful sweep from upper-right edge
  // diagonally down-left, exiting past the left edge.
  const waveA = Array.from({ length: STRANDS }, (_, i) => {
    const dy = i * STEP;
    return {
      d: `M 620 ${60 + dy} C 380 ${100 + dy}, 220 ${360 + dy}, -60 ${500 + dy}`,
      o: bell(i),
    };
  });

  // Wave B — lower ribbon. Same diagonal flow, shifted down so the two
  // ribbons cascade across the right portion of the section.
  const waveB = Array.from({ length: STRANDS }, (_, i) => {
    const dy = i * STEP;
    return {
      d: `M 620 ${340 + dy} C 380 ${380 + dy}, 220 ${640 + dy}, -60 ${780 + dy}`,
      o: bell(i),
    };
  });

  const strands = [...waveA, ...waveB];

  return (
    <svg
      className={className}
      viewBox="0 0 600 900"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {strands.map((s, i) => (
        <path
          key={i}
          d={s.d}
          fill="none"
          stroke="#E7473C"
          strokeWidth={0.55}
          strokeOpacity={s.o}
        />
      ))}
    </svg>
  );
}
