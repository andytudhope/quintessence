'use client';
import { Book } from '@/types';
import Image from 'next/image';
import { useGeography } from '@/hooks/useGeography';
import { getAmazonUrl } from '@/lib/amazonUtils';
import RichText from '@/components/ui/RichText';
import { useMemo, useState } from 'react';

interface BookContentProps {
  book: Book;
}

export default function BookContent({ book }: BookContentProps) {
  const userCountry = useGeography();
  const [showMoreShops, setShowMoreShops] = useState(false);

  const amazonUrl = getAmazonUrl(
    book.purchaseLinks.amazon,
    userCountry,
    book.purchaseLinks.amazonRegional
  );
  const kindleUrl = getAmazonUrl(book.purchaseLinks.kindle, userCountry);

  const localShops = book.purchaseLinks.other?.filter(
    (link) => link.geography === 'all' || link.geography === userCountry
  );

  const nonLocalShops = useMemo(
    () =>
      book.purchaseLinks.other?.filter(
        (link) => link.geography !== 'all' && link.geography !== userCountry
      ) ?? [],
    [book.purchaseLinks.other, userCountry]
  );

  // All extra shops, ordered: Barnes & Noble, eBay, Waterstones, then the rest in JSON order
  const extraShops = useMemo(() => {
    if (!nonLocalShops.length) return [];
    const preferredOrder = ['Barnes & Noble', 'eBay', 'Waterstones'];

    const preferred = preferredOrder.flatMap((name) =>
      nonLocalShops.filter((l) => l.name === name)
    );
    const rest = nonLocalShops.filter((l) => !preferredOrder.includes(l.name));

    return [...preferred, ...rest];
  }, [nonLocalShops]);

  const hasEbooks =
    book.purchaseLinks.kindle || book.purchaseLinks.kobo || book.purchaseLinks.apple;
  const hasLocalShops = !!(localShops && localShops.length > 0);
  const hasAnyPurchaseLinks = Boolean(
    amazonUrl || hasEbooks || hasLocalShops || extraShops.length > 0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8">
        <div>
          <div className="relative w-64 h-96">
            <Image
              src={book.coverImage}
              alt={book.title}
              width={256}
              height={384}
              className="rounded-lg shadow-md"
              unoptimized
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          {book.author && (
            <p className="text-gray-400 italic mb-6">{book.author}</p>
          )}
          <RichText content={book.description} />

          {book.coming && !hasAnyPurchaseLinks ? (
            <h2 className="text-2xl font-semibold mt-8 text-gray-600">
              Purchase links available soon
            </h2>
          ) : (
            <div className="mt-8 space-y-2">
              {/* Sample PDF */}
              {book.samplePdfUrl && (
                <a
                  href={book.samplePdfUrl}
                  className="block w-[calc(50%-20px)] md:w-full md:max-w-md text-center border-2 border-black text-black py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Sample PDF
                </a>
              )}

              {/* Amazon button */}
              {amazonUrl && (
                <a
                  href={amazonUrl}
                  className="block w-[calc(50%-20px)] md:w-full md:max-w-md text-center bg-black text-white py-3 rounded-lg hover:bg-black/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon
                </a>
              )}

              {/* Purchase Options Grid */}
              {(hasEbooks || hasLocalShops || extraShops.length > 0) && (
                <div className="grid grid-cols-2 md:grid-cols-1 gap-8 py-8">
                  {hasEbooks && (
                    <div>
                      <p className="font-bold text-xl mb-4">E-Books</p>
                      <div className="space-y-3">
                        {kindleUrl && (
                          <a
                            href={kindleUrl}
                            className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg hover:border-black transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Kindle
                          </a>
                        )}
                        {book.purchaseLinks.kobo && (
                          <a
                            href={book.purchaseLinks.kobo}
                            className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg hover:border-black transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Kobo
                          </a>
                        )}
                        {book.purchaseLinks.apple && (
                          <a
                            href={book.purchaseLinks.apple}
                            className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg hover:border-black transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Apple Books
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {(hasLocalShops || extraShops.length > 0) && (
                    <div>
                      <p className="font-bold text-xl mb-4">
                        Book Shops Relevant to You
                      </p>

                      {hasLocalShops ? (
                        <div className="space-y-3">
                          {localShops!.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg hover:border-black transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.name}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-600">
                          Sorry, there are no local bookshops stocking this book currently.
                          Please use the toggle to see international options for purchase.
                        </p>
                      )}

                      {extraShops.length > 0 && (
                        <>
                          <div className="flex items-center gap-3 mt-4">
                            <button
                              onClick={() => setShowMoreShops((prev) => !prev)}
                              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                                showMoreShops ? 'bg-green-500' : 'bg-gray-300'
                              }`}
                              aria-label="Toggle extra bookshops"
                              aria-pressed={showMoreShops}
                            >
                              <span
                                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
                                  showMoreShops ? 'translate-x-6' : ''
                                }`}
                              />
                            </button>

                            <span className="text-gray-700 text-sm select-none">
                              {showMoreShops
                                ? 'Hide bookshops outside your geography'
                                : 'Show all bookshops outside your geography'}
                            </span>
                          </div>

                          {showMoreShops && (
                            <div className="mt-3 space-y-3">
                              {extraShops.map((link, index) => (
                                <a
                                  key={`extra-${index}`}
                                  href={link.url}
                                  className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg hover:border-black transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {link.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {book.reviews && (
            <div>
              <p className="text-xl font-bold my-2 underline">Reader Reviews</p>
              <RichText content={book.reviews} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
