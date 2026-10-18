import { useState } from 'react';
import { Ruler } from 'lucide-react';
import { ftInToCm, round } from '../utils/bmi.js';

export default function FeetToCmConverter({ onApply }) {
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');

  const f = Number(feet || 0);
  const i = Number(inches || 0);
  const valid = (feet !== '' || inches !== '') && f >= 0 && i >= 0 && f * 12 + i > 0;
  const cm = valid ? round(ftInToCm(f, i), 1) : null;

  return (
    <section id="feet-to-cm" aria-labelledby="ftcm-heading" className="card p-4">
      <h2 id="ftcm-heading" className="mb-3 flex items-center gap-2 font-semibold">
        <Ruler aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
        Feet to CM Converter
      </h2>
      <div className="grid grid-cols-[1fr_1fr_1.1fr] gap-2">
        <div>
          <label htmlFor="ftcm-feet" className="field-label !text-sm">
            Feet
          </label>
          <input
            id="ftcm-feet"
            type="number"
            min="0"
            step="any"
            inputMode="decimal"
            value={feet}
            placeholder="Enter feet"
            title="Enter the feet portion of the height you want to convert to centimeters."
            onChange={(e) => setFeet(e.target.value)}
            className="field-input !py-2 !text-md"
          />
        </div>
        <div>
          <label htmlFor="ftcm-in" className="field-label !text-sm">
            Inches
          </label>
          <input
            id="ftcm-in"
            type="number"
            min="0"
            step="any"
            inputMode="decimal"
            value={inches}
            placeholder="Enter inches"
            title="Enter the remaining inches. The converted height appears in centimeters."
            onChange={(e) => setInches(e.target.value)}
            className="field-input !py-2 !text-md"
          />
        </div>
        <div>
          <label htmlFor="ftcm-result" className="field-label !text-sm !text-brand">
            Result (cm)
          </label>
          <output
            id="ftcm-result"
            title="Converted height in centimeters."
            className="flex h-[34px] items-center rounded-xl bg-sky-50 px-3 text-md font-semibold text-brand"
          >
            {cm ?? '—'}
          </output>
        </div>
      </div>
      <button
        type="button"
        disabled={!valid}
        title="Copy this converted height into the BMI calculator."
        onClick={() => onApply(cm)}
        className="mt-3 w-full rounded-lg border border-slate-200 bg-white py-1.5 text-sm font-semibold text-brand transition hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Apply to BMI Calculator
      </button>
    </section>
  );
}
