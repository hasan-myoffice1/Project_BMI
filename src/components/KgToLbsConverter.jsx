import { useState } from 'react';
import { kgToLbs, round } from '../utils/bmi.js';

export default function KgToLbsConverter() {
  const [kg, setKg] = useState('');
  const n = Number(kg);
  const valid = kg !== '' && !Number.isNaN(n) && n >= 0;

  return (
    <section
      id="kg-to-lbs"
      aria-labelledby="kglbs-heading"
      className="rounded-2xl bg-[#F1F5F9] p-4 shadow-soft"
    >
      <h2 id="kglbs-heading" className="mb-3 text-md font-semibold">
        kg to lbs
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="kglbs-kg" className="field-label">
            Kilograms
          </label>
          <input
            id="kglbs-kg"
            type="number"
            min="0"
            step="any"
            inputMode="decimal"
            value={kg}
            placeholder="Enter kg"
            title="Enter a weight in kilograms to convert it to pounds."
            onChange={(e) => setKg(e.target.value)}
            className="field-input !bg-white"
          />
        </div>
        <div>
          <span className="field-label">Pounds</span>
          <output
            aria-live="polite"
            title="Equivalent weight in pounds."
            className="flex h-[46px] items-center rounded-xl bg-white px-3.5 font-semibold text-brand"
          >
            {valid ? round(kgToLbs(n), 2) : '—'}
          </output>
        </div>
      </div>
      <p className="mt-3 text-[14px] text-muted">1 kg = 2.20462 lbs</p>
    </section>
  );
}
