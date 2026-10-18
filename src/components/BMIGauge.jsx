const MIN = 10;
const MAX = 40;
const CX = 180;
const CY = 154;
const RADIUS = 116;
const STROKE_WIDTH = 28;

const ranges = [
  { min: 10, max: 18.5, label: 'Underweight', range: '< 18.5', color: '#5578E8' },
  { min: 18.5, max: 25, label: 'Normal weight', range: '18.5-24.9', color: '#36A86A' },
  { min: 25, max: 30, label: 'Overweight', range: '25-29.9', color: '#E5B323' },
  { min: 30, max: 35, label: 'Obesity', range: '30-34.9', color: '#F28A20' },
  { min: 35, max: 40, label: 'Extremely obese', range: '35+', color: '#E94B59' },
];

const pointAt = (fraction, radius) => {
  const angle = Math.PI * (1 - fraction);
  return {
    x: CX + radius * Math.cos(angle),
    y: CY - radius * Math.sin(angle),
  };
};

const arcPath = (start, end) => {
  const startPoint = pointAt((start - MIN) / (MAX - MIN), RADIUS);
  const endPoint = pointAt((end - MIN) / (MAX - MIN), RADIUS);
  return `M ${startPoint.x} ${startPoint.y} A ${RADIUS} ${RADIUS} 0 0 1 ${endPoint.x} ${endPoint.y}`;
};

export default function BMIGauge({ bmi }) {
  const hasValue = typeof bmi === 'number' && !Number.isNaN(bmi);
  const clampedBmi = hasValue ? Math.min(MAX, Math.max(MIN, bmi)) : null;
  const needleTip = clampedBmi === null
    ? null
    : pointAt((clampedBmi - MIN) / (MAX - MIN), RADIUS - 26);

  let needlePath = '';
  if (needleTip) {
    const dx = needleTip.x - CX;
    const dy = needleTip.y - CY;
    const length = Math.hypot(dx, dy);
    const px = (-dy / length) * 5;
    const py = (dx / length) * 5;
    const baseX = CX - (dx / length) * 14;
    const baseY = CY - (dy / length) * 14;
    needlePath = `M ${needleTip.x} ${needleTip.y} L ${baseX + px} ${baseY + py} L ${baseX - px} ${baseY - py} Z`;
  }

  return (
    <div className="mx-auto w-full max-w-[360px]">
      <svg
        viewBox="0 0 360 220"
        className="w-full"
        role="img"
        aria-label={
          hasValue
            ? `BMI score ${bmi.toFixed(1)} on a scale from underweight to extremely obese`
            : 'BMI category scale, score not calculated yet'
        }
      >
        {ranges.map(({ min, max, color }) => (
          <path
            key={min}
            d={arcPath(min + 0.12, max - 0.12)}
            fill="none"
            stroke={color}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="butt"
          />
        ))}

        {needleTip && (
          <>
            <path d={needlePath} fill="#202124" />
            <circle cx={CX} cy={CY} r="9" fill="#202124" />
            <circle cx={CX} cy={CY} r="3" fill="white" />
          </>
        )}

        <text
          x={CX}
          y="198"
          textAnchor="middle"
          className="fill-ink font-display"
          style={{ fontSize: 34, fontWeight: 700 }}
        >
          {hasValue ? bmi.toFixed(1) : '--'}
        </text>
        <text x={CX} y="217" textAnchor="middle" className="fill-muted" style={{ fontSize: 14 }}>
          BMI Score
        </text>
      </svg>

      <ul className="mt-1 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
        {ranges.map(({ label, range, color }) => (
          <li key={label} className="flex items-center gap-2">
            <span aria-hidden="true" className="h-3 w-3 shrink-0 rounded-sm" style={{ backgroundColor: color }} />
            <span className="text-slate-700">
              {label} <span className="text-muted">({range})</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
