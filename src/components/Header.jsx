import { Home, ChevronDown } from 'lucide-react';
import { LANGUAGES, LangContext, useT } from '../i18n.jsx';
import { useContext } from 'react';

export function LanguageSelect({ variant = 'header' }) {
  const { lang, setLang } = useContext(LangContext);
  const isHeader = variant === 'header';
  return (
    <div
      className={
        isHeader
          ? 'relative rounded-full bg-white px-4 py-2 shadow-soft'
          : 'relative inline-flex items-center rounded-lg px-2 py-1'
      }
    >
      <label htmlFor={`lang-${variant}`} className="sr-only">
        Language
      </label>
      <select
        id={`lang-${variant}`}
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className={`appearance-none bg-transparent pr-5 font-medium outline-none ${
          isHeader ? 'font-display text-md' : 'text-md font-semibold'
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
        className="pointer-events-none absolute right-2 h-3.5 w-3.5"
        style={isHeader ? { right: '1rem' } : undefined}
      />
    </div>
  );
}

export default function Header() {
  const t = useT();
  const links = [
    { href: '#about', label: t('about') },
    { href: '#tools', label: t('services') },
    { href: '#all-blogs', label: t('blog') },
    { href: '#trend', label: t('history') },
  ];

  return (
    <header className="mx-auto flex w-full max-w-[1100px] flex-wrap items-center gap-3 px-4 pt-10 sm:px-6">
      <a
        href="#top"
        aria-label="Home"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft"
      >
        <Home className="h-4 w-4" />
      </a>
      <nav
        aria-label="Primary"
        className="order-3 w-full overflow-hidden rounded-full bg-white px-5 py-2.5 shadow-soft sm:order-none sm:w-auto"
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
      <div className="ml-auto">
        <LanguageSelect />
      </div>
    </header>
  );
}
