import { Calculator, Ruler, Scale } from 'lucide-react';

const tools = [
  { href: '#calculator', icon: Calculator, title: 'BMI Calculator', text: 'Metric and imperial BMI.' },
  { href: '#feet-to-cm', icon: Ruler, title: 'Feet to CM', text: 'Convert height in one step.' },
  { href: '#kg-to-lbs', icon: Scale, title: 'kg to lbs', text: 'Quick weight conversion.' },
];

export default function ToolsSection() {
  return (
    <section id="tools" aria-labelledby="tools-heading" className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
      <h2 id="tools-heading" className="mb-4 text-center font-display text-lg font-bold">
        Free tools
      </h2>
      <ul className="grid gap-3 sm:grid-cols-3">
        {tools.map(({ href, icon: Icon, title, text }) => (
          <li key={title}>
            <a href={href} className="card flex items-center gap-3 p-4 transition hover:shadow-soft">
              <Icon aria-hidden="true" className="h-5 w-5 text-brand" />
              <span>
                <span className="block font-semibold">{title}</span>
                <span className="block text-md text-muted">{text}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-center text-md text-muted">More tools are coming soon.</p>
    </section>
  );
}
