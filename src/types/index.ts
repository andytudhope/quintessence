import { AmazonRegionalOverrides } from '@/types/geo';

export interface Book {
  id: string;
  title: string;
  author?: string;
  description: string;
  coverImage: string;
  category: CategorySlug;
  order?: number;
  featured?: boolean;
  latest?: boolean;
  coming?: boolean;
  publishedDate?: Date;
  purchaseLinks: {
    amazon?: string;
    amazonRegional?: AmazonRegionalOverrides;
    kindle?: string;
    kobo?: string;
    apple?: string;
    other?: Array<{
      name: string;
      url: string;
      geography: string | 'all';
    }>;
  };
  samplePdfUrl?: string;
  reviews?: string;
}

export type CategorySlug =
  | 'irfan-sufism'
  | 'quran-islam'
  | 'poetry';

export interface Category {
  slug: CategorySlug;
  name: string;
  order: number;
}

export interface Categories {
  [key: string]: Category;
}