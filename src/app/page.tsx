import Link from 'next/link';
import Image from 'next/image';
import { categories, books } from '@/lib/books';
import ComingSoonTile from '@/components/books/ComingSoonTile';

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-white py-20 px-4 text-center">
        <Image src={"/images/logo.jpg"} alt="Quintessence Publishing" className="mx-auto" width={600} height={300} />
      </div>

      {/* Category Sections — 2-column grid on desktop */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-1">
          {Object.values(categories)
            .sort((a, b) => a.order - b.order)
            .map((category) => {
              const categoryBooks = books
                .filter(book => book.category === category.slug)
                .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
                .slice(0, 4);

              if (categoryBooks.length === 0) return null;

              return (
                <section key={category.slug} className="flex flex-col">
                  <Link
                    href={`/${category.slug}`}
                    className="inline-block hover:underline mb-5"
                  >
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                  </Link>

                  <div className="grid grid-cols-2 gap-3">
                    {categoryBooks.map((book) =>
                      book.coming ? (
                        <ComingSoonTile
                          key={book.id}
                          title={book.title}
                        />
                      ) : (
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
                      )
                    )}
                  </div>
                </section>
              );
            })}
        </div>
      </div>

    </div>
  );
}
