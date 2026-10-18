import { ChevronDown } from 'lucide-react';
import { LANGUAGES, LangContext, useT } from '../i18n.jsx';
import { useContext } from 'react';
import BrandLogo from './BrandLogo.jsx';

export function LanguageSelect({ variant = 'header' }) {
  const { lang, setLang } = useContext(LangContext);
  const isHeader = variant === 'header';

  return (
    <div
      className={
        isHeader
          ? 'relative rounded-full bg-white px-3 py-2 shadow-soft'
          : 'relative inline-flex items-center rounded-lg border border-slate-200 bg-field px-2 py-1'
      }
    >
      <label htmlFor={`lang-${variant}`} className="sr-only">
        Language
      </label>
      <select
        id={`lang-${variant}`}
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        aria-label="Select language"
        className={`cursor-pointer appearance-none bg-transparent pr-5 text-ink outline-none ${
          isHeader ? 'font-display text-md font-medium' : 'text-md font-semibold'
        }`}
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>
            {isHeader ? l.label : l.short}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-2  text-slate-600 top-2.5"
        style={isHeader ? { right: '0.9rem' } : undefined}
      />
    </div>
  );
}

export default function Header() {
  const t = useT();
  const links = [
    { href: '#about-page', label: t('about') },
    { href: '#tools', label: t('services') },
    { href: '#all-blogs', label: t('blog') },
    { href: '#history-page', label: t('history') },
  ];

  return (
    <header className="mx-auto grid w-full max-w-[1100px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 pt-10 sm:px-6">
      <BrandLogo className="col-start-1 row-start-1" />
      <nav
        aria-label="Primary"
        className="col-span-3 row-start-2 w-full overflow-hidden rounded-full bg-white px-5 py-2.5 shadow-soft sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:w-auto"
      >
        <ul className="flex items-center justify-between gap-5 text-md font-medium sm:justify-start sm:gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="col-start-3 row-start-1 justify-self-end">
        <LanguageSelect />
      </div>
    </header>
  );
}
