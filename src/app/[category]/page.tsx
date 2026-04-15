import Link from 'next/link';
import Image from 'next/image';
import { getBooksByCategory } from '@/lib/books';
import { categories } from '@/lib/books';
import ComingSoonTile from '@/components/books/ComingSoonTile';

type PageParams = {
  params: Promise<{ category: string }>;
}

export default async function Page({ params }: PageParams) {
  const resolvedParams = await params;
  const category = categories[resolvedParams.category];
  const books = getBooksByCategory(resolvedParams.category);

  if (!category) {
    return <div>Category not found</div>;
  }

  const sortedBooks = [...books].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedBooks.map((book) =>
          book.coming ? (
            <ComingSoonTile key={book.id} title={book.title} />
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
                sizes="(max-width: 640px) 50vw, 33vw"
                className="rounded-lg shadow-md object-cover"
                unoptimized
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}
