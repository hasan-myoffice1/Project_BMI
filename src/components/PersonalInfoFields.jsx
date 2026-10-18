import { ChevronDown } from 'lucide-react';

export default function PersonalInfoFields({ gender, age, onGender, onAge, error }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <label htmlFor="gender" className="field-label">
          Gender
        </label>
        <div className="relative">
          <select
            id="gender"
            value={gender}
            title="Select your gender. Gender does not change the BMI calculation."
            onChange={(e) => onGender(e.target.value)}
            className="field-input appearance-none pr-9"
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          />
        </div>
      </div>
      <div>
        <label htmlFor="age" className="field-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          inputMode="numeric"
          min="1"
          step="1"
          value={age}
          placeholder="Enter age"
          title="Enter your age in whole years. The BMI ranges shown are intended for adults."
          onChange={(e) => onAge(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? 'age-error' : undefined}
          className={`field-input ${error ? 'border-red-400' : ''}`}
        />
      </div>
      {error && (
        <p id="age-error" role="alert" className="col-span-2 -mt-1 text-md text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
