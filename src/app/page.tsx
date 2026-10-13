import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { categories, books } from '@/lib/books';
import { forthcoming } from '@/lib/books/data/forthcoming';
import ComingSoonCard from '@/components/books/ComingSoonCard';

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-white py-20 px-4 text-center">
        <Image src={"/images/logo.jpg"} alt="Quintessence Publishing" className="mx-auto" width={600} height={300} loading='eager' />
      </div>

      {/* Category Sections — published titles only, 2-column grid on desktop */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-1">
          {Object.values(categories)
            .sort((a, b) => a.order - b.order)
            .map((category) => {
              const categoryBooks = books
                .filter((book) => book.category === category.slug && !book.coming)
                .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
                .slice(0, 4);

              if (categoryBooks.length === 0) return null;

              return (
                <Fragment key={category.slug}>
                  <section className="flex flex-col">
                    <Link
                      href={`/${category.slug}`}
                      className="inline-block hover:underline mb-5"
                    >
                      <h2 className="text-2xl font-bold">{category.name}</h2>
                    </Link>

                    <div className="grid grid-cols-2 gap-3">
                      {categoryBooks.map((book) => (
                        <Link
                          key={book.id}
                          href={`/book/${book.id}`}
                          className="block aspect-[10/14] relative transition-transform hover:scale-105"
                        >
                          <Image
                            src={book.coverImage}
                            alt={book.title}
                            fill
                            sizes="(max-width: 768px) 50vw, 12vw"
                            className="rounded-lg shadow-md object-cover"
                            unoptimized
                          />
                        </Link>
                      ))}
                    </div>
                  </section>

                  {/* Mission statement, shown after the first two categories */}
                  {category.order === 2 && (
                    <p className="col-span-2 md:col-span-1 text-center text-lg italic max-w-3xl mx-auto my-8 leading-relaxed">
                      Quintessence Publishing translates and publishes classical works of the inner sciences of Islam — ʿirfān, Sufism, and contemplative Qurʾān commentary — rooted in the tradition and teachings of the Ahl al-Bayt.
                    </p>
                  )}
                </Fragment>
              );
            })}
        </div>
      </div>

      {/* Coming Soon — forthcoming titles, each clickable to its own page */}
      {forthcoming.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Coming Soon</h2>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {forthcoming.map((item) => (
              <Link
                key={item.id}
                href={`/forthcoming/${item.id}`}
                className="block transition-transform hover:scale-105"
              >
                <ComingSoonCard item={item} />
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
