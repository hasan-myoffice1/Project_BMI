import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts, getBlogBySlug } from '../data/blogPosts.js';

export default function SingleBlogPage({ slug, onBack, onBrowseAll }) {
  const post = getBlogBySlug(slug) ?? blogPosts[0];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBrowseAll}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            View all blogs
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
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
          <div className="bg-gradient-to-r from-brand/10 via-white to-brand/5 px-6 py-8 sm:px-10">
            <div className="mb-4 inline-flex rounded-full bg-brand/10 px-2.5 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-brand">
              {post.category}
            </div>
            <h1 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-[700px] text-base leading-7 text-slate-700">{post.summary}</p>
          </div>

          <div className="space-y-5 px-6 py-8 text-[15px] leading-8 text-slate-700 sm:px-10">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
