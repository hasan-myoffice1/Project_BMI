import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: 'Information stored on your device',
    paragraphs: [
      'myBMI Result saves your BMI calculation history in your browser’s local storage so you can view previous results and track trends. The saved history contains each result and its date; it does not include the height, weight, age, or gender entered into the calculator.',
      'This information stays in the browser on your device and may be removed by clearing the site’s browser storage. If you use a shared device or browser profile, other people with access to it may be able to see the saved history.',
    ],
  },
  {
    title: 'Information you choose to share',
    paragraphs: [
      'If you choose to share a result, the site uses your device’s sharing feature or copies the result to your clipboard. If you download a report, it is generated in your browser. These actions are initiated by you, and the destination or handling of information shared through another app is governed by that app’s privacy policy.',
    ],
  },
  {
    title: 'How information is used',
    paragraphs: [
      'Information entered into the calculator is used in your browser to calculate and display results. myBMI Result does not require you to create an account to use its calculator and converters.',
      'We do not use the saved calculation history to identify you. This site may link to third-party websites; we do not control how those sites collect or use information.',
    ],
  },
  {
    title: 'Your choices',
    paragraphs: [
      'You can delete individual history entries or clear all saved calculations using the controls in the history section. You can also remove this data by clearing myBMI Result’s site data in your browser.',
      'You may choose not to use sharing or download features. Browser settings can also restrict local storage, though this may prevent calculation history from being saved.',
    ],
  },
  {
    title: 'Data security and children',
    paragraphs: [
      'Local storage is managed by your browser and is not a substitute for a secure health record. Use caution on shared devices. No method of storage or transmission is completely secure.',
      'myBMI Result is a general-purpose informational tool and is not intended to collect personal information from children.',
    ],
  },
  {
    title: 'Changes and contact',
    paragraphs: [
      'We may update this policy as the site changes. The current version will be available on this page.',
      'For questions about this privacy policy, contact us at hello@example.com.',
    ],
  },
];

export default function PrivacyPoliciesPage({ onBack }) {
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
              Privacy Policies
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-700">
              This page explains how information is handled when you use myBMI Result.
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
