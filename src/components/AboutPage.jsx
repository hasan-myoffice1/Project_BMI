import { ArrowLeft, ArrowRight, Calculator, HeartPulse, Ruler, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Calculator,
    title: 'Simple, practical tools',
    description:
      'Calculate BMI using metric or imperial measurements, review your result, and use handy unit converters in one place.',
  },
  {
    icon: Ruler,
    title: 'Clear calculations',
    description:
      'BMI is calculated from height and weight using the standard adult formula. Your result is a general screening measure, not a diagnosis.',
  },
  {
    icon: ShieldCheck,
    title: 'Your browser, your history',
    description:
      'Calculation history is saved locally in your browser so you can review it later. You can remove saved records using the history controls.',
  },
];



export default function AboutPage({ onBack }) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-8 flex justify-end">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-soft transition hover:border-brand hover:text-brand"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back
          </button>
        </div>

        <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-soft">
          <header className="bg-gradient-to-r from-brand/10 via-white to-brand/5 px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">About myBMI Result</p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Helpful tools for understanding BMI
            </h1>
            <p className="mt-4 max-w-[700px] text-base leading-7 text-slate-700">
              myBMI Result makes it easy to calculate and review body mass index, explore related tools, and
              learn what a BMI result can—and cannot—tell you.
            </p>
          </header>

          <div className="space-y-8 px-6 py-8 text-base leading-7 text-slate-700 sm:px-10">
            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">Our purpose</h2>
              <p>
                We provide a straightforward way to work out BMI and understand the result as one
                general health measure. The calculator supports metric and imperial units, while
                conversion tools make it easier to enter measurements in the units you use.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold text-slate-900">What you can do here</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {features.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="rounded-2xl bg-field p-4">
                    <Icon aria-hidden="true" className="mb-3 h-6 w-6 text-brand" />
                    <h3 className="mb-2 font-semibold text-slate-900">{title}</h3>
                    <p className="text-sm leading-6">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">Understanding BMI</h2>
              <p>
                BMI is calculated from a person’s weight and height. It is commonly used as a
                screening measure for adults, but it does not directly measure body fat or show where
                weight is carried. It also does not account for every factor that affects health.
                People with the same BMI can have different health needs, so interpret results with
                care.
              </p>
            </section>

            <aside className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
              <div className="flex items-start gap-3">
                <HeartPulse aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <h2 className="font-semibold text-slate-900">A note about health advice</h2>
                  <p className="mt-1">
                    myBMI Result provides general information, not medical advice, diagnosis, or treatment.
                    For personal health questions, talk with a qualified healthcare professional.
                  </p>
                </div>
              </div>
            </aside>

            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 font-semibold text-white shadow-soft transition hover:brightness-110"
            >
              Try the BMI calculator
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
