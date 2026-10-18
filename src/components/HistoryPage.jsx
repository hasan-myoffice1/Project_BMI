import { ArrowLeft } from 'lucide-react';
import BMIHistory from './BMIHistory.jsx';
import BMITrendChart from './BMITrendChart.jsx';
import useLocalStorage from '../hooks/useLocalStorage.js';

export default function HistoryPage({ onBack }) {
  const [history, setHistory] = useLocalStorage('bmi-history-v1', []);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-8 flex justify-end">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-soft transition hover:border-brand hover:text-brand"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back
          </button>
        </div>

        <header className="mb-8 text-center">
          <h1 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            BMI History
          </h1>
          <p className="mt-3 text-base text-slate-700">
            Review your saved BMI results and track changes over time.
          </p>
        </header>

        <BMITrendChart history={history} />
        <BMIHistory
          history={history}
          onDelete={(id) => setHistory((records) => records.filter((record) => record.id !== id))}
          onClear={() => setHistory([])}
        />
      </div>
    </main>
  );
}
