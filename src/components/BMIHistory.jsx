import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { getCategory, formatDateLong, round } from '../utils/bmi.js';

export default function BMIHistory({ history, onDelete, onClear }) {
  const [confirming, setConfirming] = useState(false);
  const rows = [...history].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section
      id="history-panel"
      aria-labelledby="history-heading"
      className="mx-auto mt-6 w-full max-w-[1100px] px-4 sm:px-6"
    >
      <div className="card p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="history-heading" className="text-base font-bold">
            Calculation history
          </h2>
          {rows.length > 0 &&
            (confirming ? (
              <div className="flex items-center gap-2 text-md">
                <span>Delete all records?</span>
                <button
                  type="button"
                  onClick={() => {
                    onClear();
                    setConfirming(false);
                  }}
                  className="rounded-lg bg-red-600 px-3 py-1.5 font-semibold text-white"
                >
                  Yes, clear
                </button>
                <button
                  type="button"
                  onClick={() => setConfirming(false)}
                  className="rounded-lg bg-field px-3 py-1.5 font-semibold"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setConfirming(true)}
                className="rounded-lg bg-field px-3 py-1.5 text-sm font-semibold text-red-600"
              >
                Clear history
              </button>
            ))}
        </div>

        {rows.length === 0 ? (
          <p className="mt-4 text-md text-muted">No saved calculations yet.</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[420px] text-left">
              <thead>
                <tr className="text-[14px] uppercase tracking-wide text-muted">
                  <th scope="col" className="py-2 font-medium">Date</th>
                  <th scope="col" className="py-2 font-medium">BMI</th>
                  <th scope="col" className="py-2 font-medium">Category</th>
                  <th scope="col" className="py-2 text-right font-medium">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const cat = getCategory(r.bmi);
                  return (
                    <tr key={r.id} className="border-t border-slate-100">
                      <td className="py-2.5">{formatDateLong(r.date)}</td>
                      <td className="py-2.5 font-semibold">{round(r.bmi, 2)}</td>
                      <td className="py-2.5">
                        <span className={`rounded-md px-2 py-0.5 text-[12px] font-bold uppercase ${cat.badge}`}>
                          {cat.label}
                        </span>
                      </td>
                      <td className="py-2.5 text-right">
                        <button
                          type="button"
                          onClick={() => onDelete(r.id)}
                          aria-label={`Delete record from ${formatDateLong(r.date)}`}
                          className="rounded-lg p-1.5 text-muted hover:bg-field hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
