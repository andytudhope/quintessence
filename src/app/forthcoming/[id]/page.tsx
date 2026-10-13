import Link from 'next/link';
import { notFound } from 'next/navigation';
import { forthcoming } from '@/lib/books/data/forthcoming';
import ComingSoonCard from '@/components/books/ComingSoonCard';

type PageParams = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageParams) {
  const { id } = await params;
  const item = forthcoming.find((f) => f.id === id);

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 min-h-screen">
      <Link href="/" className="text-sm text-gray-500 hover:underline">
        ← Back to home
      </Link>

      <div className="mt-8 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        {/* Title-page card */}
        <div className="w-60 flex-shrink-0">
          <ComingSoonCard item={item} />
        </div>

        {/* Details */}
        <div className="max-w-2xl w-full text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b0873a] mb-3">
            Forthcoming
          </p>
          <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
          {item.subtitle && (
            <p className="text-lg italic text-gray-500 mb-5">{item.subtitle}</p>
          )}

          {(item.author || item.credits?.length) && (
            <div className="text-gray-500 mb-6 space-y-1">
              {item.author && <p className="font-medium text-gray-600">{item.author}</p>}
              {item.credits?.map((c, i) => (
                <p key={i}>
                  {c.role} <span className="font-medium text-gray-600">{c.name}</span>
                </p>
              ))}
            </div>
          )}

          {item.epigraph && (
            <p className="font-serif italic text-lg lg:text-xl text-gray-600 dark:text-gray-300 border-l-2 border-[#b0873a] pl-4 mb-6 text-left">
              {item.epigraph}
            </p>
          )}

          {item.description && (
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-8 text-left">
              {item.description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          <div className="border-t pt-6 mt-6">
            <p className="text-gray-600 mb-4">
              This title is forthcoming from Quintessence Publishing.
            </p>
            <Link
              href="/subscribe"
              className="inline-block border border-gray-400 dark:border-gray-500 rounded px-6 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Join our reader list
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return forthcoming.map((f) => ({ id: f.id }));
}
