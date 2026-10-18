import { useState } from 'react';
import { Share2, Download } from 'lucide-react';
import BMIGauge from './BMIGauge.jsx';
import { useT } from '../i18n.jsx';
import { round } from '../utils/bmi.js';

export default function BMIHealthStatus({ result }) {
  const t = useT();
  const [notice, setNotice] = useState('');

  const flash = (msg) => {
    setNotice(msg);
    setTimeout(() => setNotice(''), 2500);
  };

  const summaryText = () =>
    result
      ? `My BMI is ${round(result.bmi, 2)} (${result.category.label}). Healthy BMI range: 18.5 - 24.9. Calculated with myBMI Result.`
      : '';

  const share = async () => {
    if (!result) return flash('Calculate your BMI first.');
    const text = summaryText();
    try {
      if (navigator.share) {
        await navigator.share({ title: 'My BMI result', text });
      } else {
        await navigator.clipboard.writeText(text);
        flash('Result copied to clipboard.');
      }
    } catch (err) {
      if (err?.name !== 'AbortError') flash('Sharing is not available in this browser.');
    }
  };

  const exportReport = () => {
    if (!result) return flash('Calculate your BMI first.');
    const lines = [
      'BMI Report',
      '==========',
      `Date: ${new Date().toLocaleString('en-GB')}`,
      `BMI: ${round(result.bmi, 2)}`,
      `Category: ${result.category.label}`,
      'Healthy BMI range: 18.5 – 24.9',
      '',
      'BMI is a general screening measure and is not medical advice.',
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bmi-report.txt';
    a.click();
    URL.revokeObjectURL(url);
    flash('Report downloaded.');
  };

  const iconBtn = 'flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-field hover:text-ink';

  return (
    <section id="health-status" aria-labelledby="status-heading" className="card p-4 sm:p-5">
      <div className="flex items-start justify-between">
        <div>
          <h2 id="status-heading" className="mt-1.5 text-lg mb-3 font-bold">
            {t('healthStatus')}
          </h2>
          {result ? (
            <span
              className={`inline-block rounded-md px-2 py-0.5 text-sm font-bold uppercase ${result.category.badge}`}
            >
              {result.category.label}
            </span>
          ) : (
            <span className="inline-block rounded-md bg-field px-2 py-0.5 text-sm font-bold uppercase text-muted">
              No result yet
            </span>
          )}
        </div>
        <div className="flex gap-1">
          <button type="button" onClick={share} aria-label="Share result" title="Share or copy your BMI result." className={iconBtn}>
            <Share2 className="h-4 w-4" />
          </button>
          <button type="button" onClick={exportReport} aria-label="Download report" title="Download your BMI result as a text report." className={iconBtn}>
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-3">
        <BMIGauge bmi={result?.bmi} />
      </div>

      <p aria-live="polite" className="mt-1 min-h-[1rem] text-center text-[14px] text-muted">
        {notice || (result ? result.category.summary : 'Enter your details and press Calculate BMI.')}
      </p>

      <div className="mt-3 rounded-xl bg-field py-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">Healthy BMI Range</p>
        <p className="mt-0.5  font-semibold">18.5 – 24.9</p>
      </div>
    </section>
  );
}
