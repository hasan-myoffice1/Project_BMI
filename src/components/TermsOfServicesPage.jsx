import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: 'Using this website',
    paragraphs: [
      'myBMI Result provides BMI calculations, unit converters, educational articles, and related tools for general informational purposes. By accessing or using the website, you agree to these terms. If you do not agree, please do not use the website.',
      'You agree to use the website lawfully and not to interfere with its operation, attempt to gain unauthorized access, or misuse its content or services.',
    ],
  },
  {
    title: 'Not medical advice',
    paragraphs: [
      'The information and results on myBMI Result are not medical advice, diagnosis, or treatment. BMI is a general screening measure and does not account for every factor that affects an individual’s health.',
      'Do not use this website as a substitute for advice from a qualified healthcare professional. Speak with a healthcare professional about questions or decisions concerning your health.',
    ],
  },
  {
    title: 'Calculations and information',
    paragraphs: [
      'We aim to provide useful and accurate tools, but calculations and other content may contain errors or become outdated. Results depend on the information entered and are provided without a guarantee of accuracy or suitability for a particular purpose.',
      'You are responsible for checking information and deciding whether it is appropriate for your circumstances.',
    ],
  },
  {
    title: 'Availability and third-party links',
    paragraphs: [
      'We may update, change, suspend, or discontinue any part of the website at any time. The website is provided on an “as available” basis.',
      'The website may link to third-party sites for convenience. We do not control or endorse their content, products, or practices, and your use of those sites is subject to their own terms and policies.',
    ],
  },
  {
    title: 'Limitation of liability',
    paragraphs: [
      'To the extent permitted by applicable law, myBMI Result and its contributors are not liable for loss or damage arising from your use of, or inability to use, the website or reliance on its content. Nothing in these terms excludes liability where exclusion is not permitted by law.',
    ],
  },
  {
    title: 'Changes and contact',
    paragraphs: [
      'We may revise these terms when the website or applicable requirements change. Updated terms will be posted on this page and apply from the time they are published.',
      'For questions about these terms, contact us at hello@example.com.',
    ],
  },
];

export default function TermsOfServicesPage({ onBack }) {
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
              Terms of Services
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Please read these terms before using myBMI Result.
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
