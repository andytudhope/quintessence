import { Book } from '@/types';

export const quranIslamBooks: Book[] = [
  {
    id: 'sacred-alchemy',
    title: "Sacred Alchemy: A Collection of Qur'anic Verses",
    author: 'Leyya Kalla (compiled); Adnan Al-Adnani (translated)',
    description: '"And We send down of the Quran that which is a healing and a mercy to those who believe ..." - Quran, 17:82\n\nThe alchemical effect of the Qur\'an, the deep transformative impact it has upon the human soul, is such that even its most ardent of opponents have been profoundly affected by it. The pouring of the Qur\'an\'s healing verses over spiritual wounds, and allowing it to work its miracle is what led to this compilation.\n\nThe Qur\'an is the ultimate reference guide in revealing hidden and manifest truths, but to approach this sacred text with the correct courtesy and to be granted its secrets requires an open and sincere heart, a clear mind and a courage to face Reality and the truth of one\'s present state. This collection of Qur\'anic verses represent key verses to imbibe and meditate upon in your alchemical spiritual journey.',
    coverImage: '/images/book-covers/SacredAlchemy.jpg',
    category: 'quran-islam',
    order: 0,
    featured: true,
    publishedDate: new Date('2017-09-19'),
    purchaseLinks: {
      amazon: '0620711825',
      amazonRegional: {
        ZA: { domain: 'co.za' },
      },
      other: [
        {
          name: 'Exclusive Books',
          url: 'https://exclusivebooks.co.za/products/9780620711821',
          geography: 'ZA',
        },
        {
          name: 'Barnes & Noble',
          url: 'https://www.barnesandnoble.com/w/sacred-alchemy-leyya-kalla/1127741886',
          geography: 'US',
        },
        {
          name: 'Waterstones',
          url: 'https://www.waterstones.com/book/sacred-alchemy/leyya-kalla/shaykh-fadhlalla-haeri/9780620711821',
          geography: 'UK',
        },
        {
          name: 'Walmart',
          url: 'https://www.walmart.com/ip/Alchemy-Sacred-Alchemy-A-Collection-of-Qur-anic-Verses-Paperback/15633157537',
          geography: 'US',
        },
        {
          name: 'eBay',
          url: 'https://www.ebay.it/itm/157450188294',
          geography: 'all',
        },
        {
          name: 'Bol.com',
          url: 'https://www.bol.com/nl/nl/p/alchemy-sacred-alchemy/9200000087648631/',
          geography: 'NL',
        },
        {
          name: 'BooksWagon',
          url: 'https://www.bookswagon.com/book/sacred-alchemy-shaykh-fadhlalla-haeri/9780620711821',
          geography: 'IN',
        },
      ],
    },
  },
  {
    id: 'payambar',
    title: 'Payambar: The Messenger (Prophet Muhammed)',
    description: 'Coming soon.',
    coverImage: '/images/book-covers/Payambar.jpg',
    category: 'quran-islam',
    order: 1,
    coming: true,
    purchaseLinks: {},
  },
];
