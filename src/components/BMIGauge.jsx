const MIN = 10;
const MAX = 40;
const CX = 110;
const CY = 105;
const R = 80;

const pointAt = (f) => {
  const a = Math.PI * (1 - f);
  return { x: CX + R * Math.cos(a), y: CY - R * Math.sin(a) };
};

export default function BMIGauge({ bmi }) {
  const hasValue = typeof bmi === 'number' && !Number.isNaN(bmi);
  const f = hasValue ? Math.min(1, Math.max(0, (bmi - MIN) / (MAX - MIN))) : null;
  const dot = f === null ? null : pointAt(f);

  return (
    <div
      className="mx-auto w-full max-w-[260px]"
      role="img"
      aria-label={hasValue ? `BMI score ${bmi.toFixed(1)}` : 'BMI score not calculated yet'}
    >
      <svg viewBox="0 0 220 135" className="w-full">
        <defs>
          <linearGradient id="gaugeGrad" gradientUnits="userSpaceOnUse" x1="30" y1="0" x2="190" y2="0">
            <stop offset="0" stopColor="#2F7DE1" />
            <stop offset="0.28" stopColor="#22B573" />
            <stop offset="0.5" stopColor="#E6C229" />
            <stop offset="0.75" stopColor="#F5922B" />
            <stop offset="1" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        <path
          d={`M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`}
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {dot && (
          <circle cx={dot.x} cy={dot.y} r="7" fill="#fff" stroke="#334155" strokeWidth="4" />
        )}
        <text
          x={CX}
          y="85"
          textAnchor="middle"
          className="fill-ink font-display"
          style={{ fontSize: 34, fontWeight: 700 }}
        >
          {hasValue ? bmi.toFixed(1) : '--'}
        </text>
        <text x={CX} y="108" textAnchor="middle" className="fill-muted" style={{ fontSize: 11 }}>
          BMI Score
        </text>
      </svg>
    </div>
  );
}
