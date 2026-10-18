import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: 'Health information and safety',
    paragraphs: [
      'myBMI Result provides BMI calculations and educational information for general awareness. BMI is a screening measure, not a diagnosis, and may not reflect an individual’s overall health. The information on this site is not medical advice and should not replace guidance from a qualified healthcare professional.',
      'If you have concerns about your health or your BMI result, speak with a healthcare professional who can consider your individual circumstances.',
    ],
  },
  {
    title: 'Clear and responsible content',
    paragraphs: [
      'We aim to make our tools and explanations understandable and to describe their limitations. Results depend on the values entered and the calculation methods used. We encourage visitors to use the information thoughtfully and to seek professional guidance for health decisions.',
    ],
  },
  {
    title: 'Your privacy',
    paragraphs: [
      'Calculation history is stored in your browser’s local storage so you can review previous results. You can remove saved entries using the history controls or clear the site’s data in your browser. For more information, see our Privacy Policies page.',
    ],
  },
  {
    title: 'Keeping your information secure',
    paragraphs: [
      'myBMI Result does not ask you to create an account to use its calculator. Calculation history is stored in the browser on your device, so anyone with access to the same browser profile may be able to view it. Avoid saving results on a shared device, and clear the site’s data when appropriate.',
      'No website or storage method can be guaranteed completely secure. Do not use myBMI Result to store information that requires a protected medical record.',
    ],
  },
  {
    title: 'Report a concern',
    paragraphs: [
      'If you find content that appears inaccurate or have a concern about the site’s safety or security, please contact us at hello@example.com. Do not include sensitive personal or medical information in your message.',
    ],
  },
];

export default function TrustSafetySecurityPage({ onBack }) {
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
          <header className="bg-gradient-to-r from-brand/10 via-white to-brand/5 px-6 py-8 sm:px-10">
            <h1 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Trust, Safety &amp; Security
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-700">
              How we approach responsible health information, privacy, and safe use of myBMI Result.
            </p>
          </header>

          <div className="space-y-8 px-6 py-8 text-base leading-7 text-slate-700 sm:px-10">
            {sections.map(({ title, paragraphs }) => (
              <section key={title}>
                <h2 className="mb-2 text-lg font-semibold text-slate-900">{title}</h2>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
