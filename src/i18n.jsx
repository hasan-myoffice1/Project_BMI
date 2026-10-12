import { createContext, useContext } from 'react';

export const LANGUAGES = [
  { code: 'en', label: 'English', short: 'ENG' },
  { code: 'bn', label: 'বাংলা', short: 'BAN' },
  { code: 'es', label: 'Español', short: 'ESP' },
];

const dict = {
  en: {
    about: 'About',
    services: 'Services',
    blog: 'Blog',
    history: 'History',
    title: 'BMI Calculator',
    myResult: 'My BMI Result',
    metric: 'Metric',
    imperial: 'Imperial',
    calculate: 'Calculate BMI',
    healthStatus: 'Your Health Status',
    trend: 'BMI Trend',
    viewHistory: 'View History',
    moreTools: 'more free useful tools',
  },
  bn: {
    about: 'সম্পর্কে',
    services: 'সেবা',
    blog: 'ব্লগ',
    history: 'ইতিহাস',
    title: 'বিএমআই ক্যালকুলেটর',
    myResult: 'আমার বিএমআই ফলাফল',
    metric: 'মেট্রিক',
    imperial: 'ইম্পেরিয়াল',
    calculate: 'বিএমআই হিসাব করুন',
    healthStatus: 'আপনার স্বাস্থ্য অবস্থা',
    trend: 'বিএমআই ট্রেন্ড',
    viewHistory: 'ইতিহাস দেখুন',
    moreTools: 'আরও বিনামূল্যের দরকারি টুল',
  },
  es: {
    about: 'Acerca de',
    services: 'Servicios',
    blog: 'Blog',
    history: 'Historial',
    title: 'Calculadora de IMC',
    myResult: 'Mi resultado de IMC',
    metric: 'Métrico',
    imperial: 'Imperial',
    calculate: 'Calcular IMC',
    healthStatus: 'Tu estado de salud',
    trend: 'Tendencia del IMC',
    viewHistory: 'Ver historial',
    moreTools: 'más herramientas útiles gratis',
  },
};

export const LangContext = createContext({ lang: 'en', setLang: () => {} });

export function useT() {
  const { lang } = useContext(LangContext);
  return (key) => dict[lang]?.[key] ?? dict.en[key] ?? key;
}
