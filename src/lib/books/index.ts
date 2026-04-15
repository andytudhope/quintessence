import { Book } from '@/types';
import { categories } from './categories';
import { irfanSufismBooks } from './data/irfan-sufism';
import { quranIslamBooks } from './data/quran-islam';
import { poetryBooks } from './data/poetry';

export const books: Book[] = [
  ...irfanSufismBooks,
  ...quranIslamBooks,
  ...poetryBooks,
];

export { categories };

export function getBooksByCategory(categorySlug: string): Book[] {
    return books.filter(book => book.category === categorySlug);
}
