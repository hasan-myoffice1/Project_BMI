const steps = [
  {
    title: 'Choose your unit',
    text: 'Select metric or imperial to match the numbers you want to enter.',
  },
  {
    title: 'Fill in your details',
    text: 'Add your age, height, and weight so the calculator can estimate your BMI.',
  },
  {
    title: 'Calculate and review',
    text: 'Tap the calculate button to see your BMI category and health guidance.',
  },
  {
    title: 'Use the quick tools',
    text: 'Convert height from feet to cm or weight from kg to lbs without leaving the page.',
  },
];

export default function HowToUseThisToolsSection() {
  return (
    <section id="how-to-use-tools" aria-labelledby="how-to-use-tools-heading" className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
      <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-soft sm:p-8">
        <h2 id="how-to-use-tools-heading" className="mb-6 text-center font-display text-lg font-bold text-slate-900">
          how to use this tools
        </h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ title, text }, index) => (
            <div key={title} className="rounded-2xl bg-slate-50 p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand">
                {index + 1}
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>
              <p className="text-sm leading-6 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
