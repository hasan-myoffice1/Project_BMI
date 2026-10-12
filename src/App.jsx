import { useEffect, useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Header from './components/Header.jsx';
import BMICalculator from './components/BMICalculator.jsx';
import FeetToCmConverter from './components/FeetToCmConverter.jsx';
import KgToLbsConverter from './components/KgToLbsConverter.jsx';
import BMIHealthStatus from './components/BMIHealthStatus.jsx';
import AIHealthTips from './components/AIHealthTips.jsx';
import BMITrendChart from './components/BMITrendChart.jsx';
import BMIHistory from './components/BMIHistory.jsx';
import AboutSection from './components/AboutSection.jsx';
import ToolsSection from './components/ToolsSection.jsx';
import HowToUseThisToolsSection from './components/HowToUseThisToolsSection.jsx';
import BlogSection from './components/BlogSection.jsx';
import AllBlogsPage from './components/AllBlogsPage.jsx';
import SingleBlogPage from './components/SingleBlogPage.jsx';
import Footer from './components/Footer.jsx';
import useLocalStorage from './hooks/useLocalStorage.js';
import { LangContext, useT } from './i18n.jsx';
import { calcBMI, cmToFtIn, ftInToCm, getCategory, kgToLbs, lbsToKg, round, validate } from './utils/bmi.js';

const DEFAULT_FORM = {
  unit: 'metric',
  gender: 'Female',
  age: '25',
  heightCm: '165',
  heightFt: '',
  heightIn: '',
  weight: '60',
};

const MAX_RECORDS = 100;

function Page() {
  const t = useT();
  const [form, setForm] = useState(DEFAULT_FORM);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [history, setHistory] = useLocalStorage('bmi-history-v1', []);
  const [historyOpen, setHistoryOpen] = useState(false);

  const setField = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => {
      const next = { ...e };
      if (key === 'age') delete next.age;
      if (key === 'weight') delete next.weight;
      if (key.startsWith('height')) delete next.height;
      return next;
    });
  };

  const setUnit = (unit) => {
    if (unit === form.unit) return;
    setErrors({});
    setForm((f) => {
      const w = Number(f.weight);
      const hasW = f.weight !== '' && !Number.isNaN(w);
      if (unit === 'imperial') {
        const h = Number(f.heightCm);
        const hasH = f.heightCm !== '' && !Number.isNaN(h) && h > 0;
        const { ft, inch } = hasH ? cmToFtIn(h) : { ft: '', inch: '' };
        return {
          ...f,
          unit,
          heightFt: String(ft),
          heightIn: String(inch),
          weight: hasW ? String(round(kgToLbs(w), 1)) : '',
        };
      }
      const hasH = f.heightFt !== '' || f.heightIn !== '';
      const cm = hasH ? round(ftInToCm(f.heightFt, f.heightIn), 1) : '';
      return {
        ...f,
        unit,
        heightCm: String(cm),
        weight: hasW ? String(round(lbsToKg(w), 1)) : '',
      };
    });
  };

  const applyHeightCm = (cm) => {
    setErrors((e) => ({ ...e, height: undefined }));
    setForm((f) => {
      if (f.unit === 'metric') return { ...f, heightCm: String(cm) };
      const { ft, inch } = cmToFtIn(cm);
      return { ...f, heightFt: String(ft), heightIn: String(inch) };
    });
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const calculate = () => {
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const bmi = round(calcBMI(form), 2);
    const category = getCategory(bmi);
    setResult({ bmi, category });
    const record = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      bmi,
      date: new Date().toISOString(),
    };
    setHistory((h) => [...h, record].slice(-MAX_RECORDS));
  };

  const reset = () => {
    setForm({
      ...DEFAULT_FORM,
      age: '',
      heightCm: '',
      weight: '',
      unit: form.unit,
      gender: DEFAULT_FORM.gender,
    });
    setErrors({});
    setResult(null);
  };

  return (
    <div id="top" className="min-h-screen">
      <Header />

      <main>
        <h1 className="mt-10 text-center font-display text-3xl font-bold sm:mt-12 sm:text-[34px]">
          {t('title')}
        </h1>

        <div className="mx-auto mt-6 grid w-full max-w-[1100px] gap-x-8 gap-y-6 px-4 sm:px-6 lg:grid-cols-[57fr_43fr]">
          <BMICalculator
            form={form}
            setField={setField}
            setUnit={setUnit}
            errors={errors}
            onCalculate={calculate}
            onReset={reset}
          />

          <div className="space-y-5 lg:pt-7">
            <FeetToCmConverter onApply={applyHeightCm} />
            <KgToLbsConverter />
            <a
              href="#tools"
              className="flex items-center justify-center gap-3 rounded-full bg-white/60 py-3 text-xs font-semibold shadow-soft transition hover:bg-white"
            >
              {t('moreTools')}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>

          <BMIHealthStatus result={result} />
          <div>
            <AIHealthTips result={result} />
          </div>
        </div>

        <div className="mt-16">
          <BMITrendChart
            history={history}
            historyOpen={historyOpen}
            onToggleHistory={() => setHistoryOpen((o) => !o)}
          />
          {historyOpen && (
            <BMIHistory
              history={history}
              onDelete={(id) => setHistory((h) => h.filter((r) => r.id !== id))}
              onClear={() => setHistory([])}
            />
          )}
        </div>

        <div className="mt-20">
          <ToolsSection />
        </div>

        <div className="mt-20">
          <HowToUseThisToolsSection />
        </div>

        <div className=" mt-20">
          <AboutSection />
        </div>
        
        <div className="mt-20 mb-24">
          <BlogSection />
        </div>
      </main>
      

      <Footer />
    </div>
  );
}

const getBlogRoute = (hash = window.location.hash) => {
  if (hash.startsWith('#blog/')) {
    return {
      page: 'single-blog',
      slug: hash.replace('#blog/', ''),
    };
  }

  if (hash === '#all-blogs') {
    return { page: 'all-blogs' };
  }

  return { page: 'home' };
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [route, setRoute] = useState(() => getBlogRoute());
  const value = useMemo(() => ({ lang, setLang }), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getBlogRoute());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route.page === 'all-blogs') {
    return (
      <LangContext.Provider value={value}>
        <AllBlogsPage onBack={() => {
          window.location.hash = '#top';
          setRoute({ page: 'home' });
        }} />
      </LangContext.Provider>
    );
  }

  if (route.page === 'single-blog') {
    return (
      <LangContext.Provider value={value}>
        <SingleBlogPage
          slug={route.slug}
          onBack={() => {
            window.location.hash = '#all-blogs';
            setRoute({ page: 'all-blogs' });
          }}
          onBrowseAll={() => {
            window.location.hash = '#all-blogs';
            setRoute({ page: 'all-blogs' });
          }}
        />
      </LangContext.Provider>
    );
  }

  return (
    <LangContext.Provider value={value}>
      <Page />
    </LangContext.Provider>
  );
}
