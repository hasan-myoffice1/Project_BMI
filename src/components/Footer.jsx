import { Facebook, Youtube, Instagram } from 'lucide-react';

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com', Icon: Facebook },
  { label: 'YouTube', href: 'https://www.youtube.com', Icon: Youtube },
  { label: 'Instagram', href: 'https://www.instagram.com', Icon: Instagram },
  { label: 'X', href: 'https://x.com', Icon: XIcon },
];

const company = [
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Trust, Safety & Security', href: '#legal' },
];
const legal = [
  { label: 'Terms of Services', href: '#legal' },
  { label: 'Privacy Policies', href: '#legal' },
  { label: 'Cookies', href: '#legal' },
];

const linkCls = 'text-[14px] text-slate-200/90 hover:text-white';

export default function Footer() {
  return (
    <footer className="bg-slate-footer text-white">
      <div className="mx-auto w-full max-w-[1100px] px-6 pt-20 sm:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div id="contact" className="max-w-[260px]">
            <p className="text-[14px] leading-snug text-slate-200/90">
              MyBMI offers simple, free tools for understanding body mass index and building healthy
              habits. Information on this site is general and is not medical advice.
            </p>
            <h2 className="mt-6  font-semibold">Contact</h2>
            <p className="mt-2 text-md font-medium">
              <a href="mailto:hello@example.com">hello@example.com</a>
            </p>
            <p className="mt-1 text-md font-medium">
              <a href="tel:+10000000000">+1 000 000 0000</a>
            </p>
            <ul className="mt-3 flex gap-4">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6 md:pt-6">
            <nav aria-label="The Company">
              <h2 className="text-md font-semibold">The Company</h2>
              <ul className="mt-3 space-y-2">
                {company.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={linkCls}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Legal">
              <h2 className="text-md font-semibold">Legal</h2>
              <ul id="legal" className="mt-3 space-y-2">
                {legal.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={linkCls}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[14px] text-slate-200/70">Full legal pages are coming soon.</p>
            </nav>
          </div>
        </div>

        <hr className="mt-14 border-white/20" />
        <p className="py-6 text-center text-[11px] text-slate-100/90">
          © 2026 MyBMI. Not medical advice.
        </p>
      </div>
    </footer>
  );
}
