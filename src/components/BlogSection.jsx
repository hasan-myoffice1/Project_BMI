import { ArrowRight } from 'lucide-react';
import { useT } from '../i18n.jsx';
import { blogPosts } from '../data/blogPosts.js';

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
          <article key={slug} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 inline-flex rounded-full bg-brand/10 px-2.5 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-brand">
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
