import { useT } from '../i18n.jsx';

export default function UnitSelector({ unit, onChange }) {
  const t = useT();
  const options = [
    { value: 'metric', label: t('metric') },
    { value: 'imperial', label: t('imperial') },
  ];
  return (
    <div
      role="radiogroup"
      aria-label="Unit system"
      className="grid grid-cols-2 rounded-xl bg-field p-1"
    >
      {options.map((o) => {
        const active = unit === o.value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={active}
            title={
              o.value === 'metric'
                ? 'Use centimeters for height and kilograms for weight.'
                : 'Use feet and inches for height and pounds for weight.'
            }
            onClick={() => onChange(o.value)}
            className={`rounded-lg py-2.5 text-sm font-medium transition-colors ${
              active ? 'bg-white text-brand shadow-soft' : 'text-muted hover:text-ink'
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
