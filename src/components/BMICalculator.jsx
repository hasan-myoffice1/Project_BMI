import { RotateCcw } from 'lucide-react';
import UnitSelector from './UnitSelector.jsx';
import PersonalInfoFields from './PersonalInfoFields.jsx';
import { useT } from '../i18n.jsx';

function UnitInput({ id, label, value, onChange, unit, error, step = 'any' }) {
  return (
    <div className="flex-1">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min="0"
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`field-input py-3.5 pr-12 text-base ${error ? 'border-red-400' : ''}`}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
        >
          {unit}
        </span>
      </div>
    </div>
  );
}

export default function BMICalculator({ form, setField, setUnit, errors, onCalculate, onReset }) {
  const t = useT();
  const imperial = form.unit === 'imperial';

  return (
    <section aria-labelledby="calc-heading" id="calculator">
      <h2 id="calc-heading" className="mb-3 px-1 text-xl font-semibold">
        {t('myResult')}
      </h2>
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          onCalculate();
        }}
        className="card space-y-4 p-4 sm:p-5"
      >
        <UnitSelector unit={form.unit} onChange={setUnit} />

        <PersonalInfoFields
          gender={form.gender}
          age={form.age}
          onGender={(v) => setField('gender', v)}
          onAge={(v) => setField('age', v)}
          error={errors.age}
        />

        <div>
          <div className="flex gap-3">
            {imperial ? (
              <>
                <UnitInput
                  id="height-ft"
                  label="Height"
                  value={form.heightFt}
                  onChange={(v) => setField('heightFt', v)}
                  unit="ft"
                  error={errors.height}
                />
                <UnitInput
                  id="height-in"
                  label="Inches"
                  value={form.heightIn}
                  onChange={(v) => setField('heightIn', v)}
                  unit="in"
                  error={errors.height}
                />
              </>
            ) : (
              <UnitInput
                id="height-cm"
                label="Height"
                value={form.heightCm}
                onChange={(v) => setField('heightCm', v)}
                unit="cm"
                error={errors.height}
              />
            )}
          </div>
          {errors.height && (
            <p
              id={imperial ? 'height-ft-error' : 'height-cm-error'}
              role="alert"
              className="mt-1.5  text-red-600"
            >
              {errors.height}
            </p>
          )}
        </div>

        <div>
          <UnitInput
            id="weight"
            label="Weight"
            value={form.weight}
            onChange={(v) => setField('weight', v)}
            unit={imperial ? 'lbs' : 'kg'}
            error={errors.weight}
          />
          {errors.weight && (
            <p id="weight-error" role="alert" className="mt-1.5  text-red-600">
              {errors.weight}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 pt-1">
          <button
            type="button"
            onClick={onReset}
            aria-label="Reset calculator"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-field text-muted hover:text-ink"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            type="submit"
            className="h-11 flex-1 rounded-xl bg-brand  font-semibold text-white shadow-[0_6px_14px_rgba(7,139,203,0.3)] transition hover:brightness-110"
          >
            {t('calculate')}
          </button>
        </div>
      </form>
    </section>
  );
}
