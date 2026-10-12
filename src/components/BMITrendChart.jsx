import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { formatDate, round } from '../utils/bmi.js';
import { useT } from '../i18n.jsx';

export default function BMITrendChart({ history, onToggleHistory, historyOpen }) {
  const t = useT();
  const data = [...history]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((r) => ({ id: r.id, date: r.date, bmi: round(r.bmi, 2) }));

  let domain = [10, 40];
  let ticks;
  if (data.length) {
    const vals = data.map((d) => d.bmi);
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const pad = Math.max((max - min) * 0.15, 2);
    const lo = Math.max(0, min - pad);
    const hi = max + pad;
    domain = [round(lo, 2), round(hi, 2)];
    const step = (hi - lo) / 4;
    ticks = Array.from({ length: 5 }, (_, i) => round(lo + step * i, 2));
  }

  const dateById = Object.fromEntries(data.map((d) => [d.id, d.date]));

  return (
    <section id="trend" aria-labelledby="trend-heading" className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
      <div className="rounded-3xl bg-white/50 pb-1 shadow-card">
        <div className="rounded-3xl bg-white p-5 shadow-card sm:p-7">
          <h2 id="trend-heading" className="font-display text-xl font-bold text-slate-700 sm:text-2xl">
            {t('trend')}
          </h2>
          {data.length === 0 ? (
            <div className="flex h-64 items-center justify-center text-center  text-muted">
              No results yet. Calculate your BMI to start tracking your trend.
            </div>
          ) : (
            <div className="mt-4 h-72 w-full sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 16, right: 24, bottom: 4, left: 0 }}>
                  <CartesianGrid vertical={false} strokeDasharray="4 6" stroke="#E5EAF0" />
                  <XAxis
                    dataKey="id"
                    tickFormatter={(id) => formatDate(dateById[id])}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9AA8BA', fontSize: 13 }}
                    padding={{ left: 24, right: 24 }}
                  />
                  <YAxis
                    domain={domain}
                    ticks={ticks}
                    axisLine={false}
                    tickLine={false}
                    width={48}
                    tick={{ fill: '#9AA8BA', fontSize: 13 }}
                    tickFormatter={(v) => round(v, 2)}
                  />
                  <Tooltip
                    labelFormatter={(id) => formatDate(dateById[id])}
                    formatter={(v) => [v, 'BMI']}
                    contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,.1)' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="bmi"
                    stroke="#19A9E8"
                    strokeWidth={3}
                    dot={{ r: 5, fill: '#19A9E8', stroke: '#19A9E8' }}
                    activeDot={{ r: 7 }}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={onToggleHistory}
          aria-expanded={historyOpen}
          aria-controls="history-panel"
          className="font-semibold hover:text-brand"
        >
          {t('viewHistory')}
        </button>
      </div>
    </section>
  );
}
