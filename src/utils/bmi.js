export const CM_PER_INCH = 2.54;
export const LBS_PER_KG = 2.20462;

export const CATEGORIES = {
  under: {
    key: 'under',
    label: 'Underweight',
    badge: 'bg-sky-100 text-sky-700',
    color: '#2F8FE0',
    summary: 'Your BMI is below the typical healthy range of 18.5 – 24.9.',
    tips: [
      'Aim for regular meals that include protein, whole grains and healthy fats.',
      'Strength training a few times a week can help build muscle in a balanced way.',
      'If you are concerned about your weight, a healthcare professional can offer personal guidance.',
    ],
  },
  normal: {
    key: 'normal',
    label: 'Normal weight',
    badge: 'bg-emerald-100 text-emerald-700',
    color: '#22A06B',
    summary: 'Your BMI falls within the typical healthy range of 18.5 – 24.9.',
    tips: [
      'Keep up balanced meals with plenty of vegetables, fruit and fibre.',
      'Aim for around 150 minutes of moderate activity each week.',
      'Consistent sleep and regular movement help sustain healthy habits over time.',
    ],
  },
  over: {
    key: 'over',
    label: 'Overweight',
    badge: 'bg-amber-100 text-amber-700',
    color: '#F0A020',
    summary: 'Your BMI is above the typical healthy range of 18.5 – 24.9.',
    tips: [
      'Small, steady changes such as a daily walk are easier to maintain than big overhauls.',
      'Filling half your plate with vegetables can help balance portion sizes.',
      'Limiting sugary drinks and getting enough sleep supports healthy routines.',
    ],
  },
  obese: {
    key: 'obese',
    label: 'Obesity',
    badge: 'bg-red-100 text-red-600',
    color: '#EF4444',
    summary: 'Your BMI is well above the typical healthy range of 18.5 – 24.9.',
    tips: [
      'Gentle, regular activity like walking or swimming is a good place to start.',
      'Choosing whole, minimally processed foods can make everyday meals more nourishing.',
      'A doctor or registered dietitian can help you plan a safe, sustainable approach.',
    ],
  },
};

export function getCategory(bmi) {
  if (bmi < 18.5) return CATEGORIES.under;
  if (bmi < 25) return CATEGORIES.normal;
  if (bmi < 30) return CATEGORIES.over;
  return CATEGORIES.obese;
}

export function calcBMI({ unit, heightCm, heightFt, heightIn, weight }) {
  const w = Number(weight);
  if (unit === 'metric') {
    const m = Number(heightCm) / 100;
    return w / (m * m);
  }
  const inches = Number(heightFt || 0) * 12 + Number(heightIn || 0);
  return (w * 703) / (inches * inches);
}

export const ftInToCm = (ft, inch) => (Number(ft || 0) * 12 + Number(inch || 0)) * CM_PER_INCH;

export function cmToFtIn(cm) {
  const totalIn = Number(cm) / CM_PER_INCH;
  let ft = Math.floor(totalIn / 12);
  let inch = Math.round((totalIn - ft * 12) * 10) / 10;
  if (inch >= 12) {
    ft += 1;
    inch = 0;
  }
  return { ft, inch };
}

export const kgToLbs = (kg) => Number(kg) * LBS_PER_KG;
export const lbsToKg = (lbs) => Number(lbs) / LBS_PER_KG;

export const round = (n, d = 2) => Math.round(n * 10 ** d) / 10 ** d;

export function validate({ unit, age, heightCm, heightFt, heightIn, weight }) {
  const errors = {};
  const a = Number(age);
  if (age === '' || !Number.isInteger(a) || a <= 0 || a > 120) {
    errors.age = 'Enter a whole number age (1–120).';
  }
  if (unit === 'metric') {
    const h = Number(heightCm);
    if (heightCm === '' || Number.isNaN(h)) errors.height = 'Enter your height.';
    else if (h <= 0) errors.height = 'Height must be greater than 0.';
    else if (h > 300) errors.height = 'Enter a height of 300 cm or less.';
  } else {
    const ft = Number(heightFt || 0);
    const inch = Number(heightIn || 0);
    if (heightFt === '' && heightIn === '') errors.height = 'Enter your height.';
    else if (ft < 0 || inch < 0 || ft * 12 + inch <= 0) errors.height = 'Height must be greater than 0.';
    else if (ft * 12 + inch > 118) errors.height = 'Enter a height under 9 ft 10 in.';
  }
  const w = Number(weight);
  const maxW = unit === 'metric' ? 700 : 1500;
  if (weight === '' || Number.isNaN(w)) errors.weight = 'Enter your weight.';
  else if (w <= 0) errors.weight = 'Weight must be greater than 0.';
  else if (w > maxW) errors.weight = `Enter a weight of ${maxW} or less.`;
  return errors;
}

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

export const formatDateLong = (iso) =>
  new Date(iso).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
