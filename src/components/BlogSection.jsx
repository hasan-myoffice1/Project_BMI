import { ArrowRight } from 'lucide-react';
import { useT } from '../i18n.jsx';

export const blogPosts = [
  {
    slug: 'smart-meals-for-a-healthier-weight',
    category: 'Nutrition',
    title: 'Smart meals for a healthier weight',
    text: 'Learn how balanced portions, protein, and fiber can help you build sustainable eating habits without feeling restricted.',
    summary: 'Balanced meals, adequate protein, and fiber-rich foods can support steady energy, better satiety, and sustainable weight management.',
    content: [
      'Sustainable weight management starts with habits you can keep, not strict rules you cannot maintain. Instead of trying to eat perfectly, aim for meals that are balanced, filling, and easy to repeat.',
      'Protein helps preserve muscle and keeps you fuller for longer. Fiber from vegetables, fruit, beans, oats, and whole grains supports digestion and steadier blood sugar. Choosing meals built around these ingredients makes weight goals more realistic and less stressful.',
      'A helpful approach is to build each plate around a protein, a fiber-rich carbohydrate, and a healthy fat. This keeps meals satisfying while making it easier to avoid energy crashes and mindless snacking later in the day.',
      'The goal is not perfection; it is consistency. Small improvements in meal quality and portion awareness can create meaningful changes over time without making your routine feel restrictive.',
    ],
  },
  {
    slug: 'daily-habits-that-support-bmi-goals',
    category: 'Movement',
    title: 'Simple daily habits that support BMI goals',
    text: 'Short walks, strength sessions, and regular movement are easier to maintain and often make the biggest long-term difference.',
    summary: 'Small, repeatable movement habits often matter more than occasional intense workouts when your goal is sustainable progress.',
    content: [
      'Movement is one of the most reliable ways to support a healthy BMI over time. You do not need an intense fitness plan to get meaningful benefits. Short walks, stretching, and regular mobility work all contribute to better overall health.',
      'The most effective routine is the one you can do consistently. A brisk walk after meals, a few strength exercises at home, or a short bike ride can add up quickly and improve energy, mood, and body composition.',
      'Daily activity also supports insulin sensitivity, sleep quality, and recovery. Together, these benefits make it easier to maintain healthy habits and avoid long periods of inactivity.',
      'When you build movement into ordinary parts of your day, it stops feeling like a chore and starts feeling like a natural part of life.',
    ],
  },
  {
    slug: 'sleep-stress-and-health-metrics',
    category: 'Wellness',
    title: 'Sleep, stress, and your health metrics',
    text: 'Sleep quality and stress management affect appetite, recovery, and energy, which can influence long-term health outcomes.',
    summary: 'Good sleep and lower stress levels can improve appetite regulation, focus, and how your body responds to daily health choices.',
    content: [
      'Sleep and stress impact nearly every health metric, including appetite, energy, and emotional resilience. When sleep is poor, cravings often increase and decision-making becomes harder.',
      'Stress also affects the body in ways that can lead to poor food choices, reduced movement, and difficulty recovering from exercise. Finding practical ways to manage stress makes long-term goals easier to sustain.',
      'Even modest improvements in sleep and stress management can lead to steadier habits. Better routines around bedtime, less screen time before sleep, and mindful breaks during the day often help more than people expect.',
      'Health is shaped by the full pattern of daily life, not just one calculation or one workout. Supporting sleep and stress management is a meaningful step toward lasting wellness.',
    ],
  },
  {
    slug: 'how-to-make-healthy-routines-stick',
    category: 'Lifestyle',
    title: 'How to make healthy routines stick',
    text: 'Consistency matters more than perfection. Small daily wins can build momentum and make long-term health changes feel realistic.',
    summary: 'Lasting routines grow from realistic choices, positive feedback, and systems that fit your real life rather than idealized expectations.',
    content: [
      'Healthy habits are more likely to stick when they are easy to repeat. Starting with small, realistic actions prevents overwhelm and creates a sense of momentum that carries forward.',
      'One helpful strategy is to define a clear anchor habit. This could be a daily walk, a home-cooked dinner, or a consistent bedtime. When the habit is simple and visible, it is easier to keep doing it.',
      'Tracking progress in a flexible way also helps. Instead of judging yourself by one bad day, focus on the trend across weeks. Consistency matters more than perfection.',
      'The routines that stick are the ones that support your life instead of fighting it. Realistic goals lead to permanent improvements.',
    ],
  },
  {
    slug: 'strength-training-benefits-beyond-the-scale',
    category: 'Fitness',
    title: 'Strength training benefits beyond the scale',
    text: 'Muscle improves metabolism, supports posture, and helps you feel stronger and more capable as you age.',
    summary: 'Strength training benefits far beyond weight changes, helping you build physical capacity, resilience, and confidence over time.',
    content: [
      'Many people think of exercise only as a way to change body weight, but strength training offers broader benefits. It helps maintain muscle mass, improve balance, and support daily function as you age.',
      'Muscle tissue also helps with energy use and overall metabolic health. This can make it easier to maintain a healthy body composition and stay active throughout life.',
      'Progressive strength training is also linked with better mood, better posture, and improved confidence. These benefits are often noticeable before weight changes show up on a scale.',
      'You do not need advanced equipment or a long training plan to start. A few simple sessions a week can create meaningful improvements in strength and health.',
    ],
  },
  {
    slug: 'realistic-guide-to-tracking-your-progress',
    category: 'Planning',
    title: 'A realistic guide to tracking your progress',
    text: 'Progress is easier to maintain when you focus on trends, habits, and energy rather than a single number on a single day.',
    summary: 'Tracking health goals works best when you monitor trends over time and focus on sustainable habits rather than isolated results.',
    content: [
      'A useful health plan pays attention to patterns, not one-off numbers. Body weight, mood, sleep, energy, and consistency all tell a more complete story than a single reading.',
      'Keeping track of a few meaningful markers makes progress easier to see. This can include weekly workouts, average sleep, meal consistency, or changes in daily energy levels.',
      'When you look at trends over weeks or months, it is easier to recognize real progress and adjust before frustration sets in. This is often more effective than comparing yourself against a perfect benchmark.',
      'The best tracking system is the one you will actually use. Simplicity and consistency usually beat complexity every time.',
    ],
  },
];

export const getBlogBySlug = (slug) => blogPosts.find((post) => post.slug === slug);

export default function BlogSection() {
  const t = useT();

  return (
    <section id="blog" aria-labelledby="blog-heading" className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
      <div className="mx-auto max-w-[380px] rounded-full bg-field py-3 text-center">
        <h2 id="blog-heading" className="font-display text-base font-bold">
          {t('blog')}
        </h2>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {blogPosts.slice(0, 3).map(({ category, slug, title, text }) => (
          <article key={title} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 inline-flex rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand">
              {category}
            </div>
            <h3 className="mb-3 text-lg font-semibold leading-7 text-slate-900">{title}</h3>
            <p className="text-sm leading-6 text-slate-700">{text}</p>
            <a href={`#blog/${slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Read article
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a href="#all-blogs" className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-dark">
          View all blogs
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
