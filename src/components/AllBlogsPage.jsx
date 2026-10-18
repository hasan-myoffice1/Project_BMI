import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts.js';

export default function AllBlogsPage({ onBack }) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-8 flex justify-end">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-soft transition hover:border-brand hover:text-brand"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to home
          </button>
        </div>

        <header className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Insights</p>
          <h1 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">All blog posts</h1>
        </header>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map(({ category, slug, title, text }) => (
            <article key={title} className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-4 inline-flex rounded-full bg-brand/10 px-2.5 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                {category}
              </div>
              <h2 className="mb-3 text-xl font-semibold leading-7 text-slate-900">{title}</h2>
              <p className="text-sm leading-6 text-slate-700">{text}</p>
              <a href={`#blog/${slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Read more
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
