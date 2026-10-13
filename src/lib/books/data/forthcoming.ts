import { CategorySlug } from '@/types';

export interface ForthcomingTitle {
  id: string;
  title: string;
  subtitle?: string;
  /** Primary author / source, shown first in the credits block. */
  author?: string;
  credits?: { role: string; name: string }[];
  /** Longer blurb for the title's own page. Paragraphs separated by blank lines. */
  description?: string;
  /** Genre the title will belong to once published. */
  category?: CategorySlug;
}

export const forthcoming: ForthcomingTitle[] = [
  {
    id: 'biography-imam-ali',
    title: 'A Biography of Imam ʿAlī',
    category: 'quran-islam',
    credits: [
      { role: 'Selected by', name: 'Shaykh Fadhlalla Haeri' },
      { role: 'Translated by', name: 'Mohammed Alsalman' },
      { role: 'Edited by', name: 'Leyya Kalla' },
    ],
  },
  {
    id: 'biography-twelve-imams',
    title: 'Biography of the Twelve Imams of the Ahl al-Bayt',
    category: 'quran-islam',
    credits: [
      { role: 'Selected by', name: 'Shaykh Fadhlalla Haeri' },
      { role: 'Translated by', name: 'Hadeer Allam' },
      { role: 'Edited by', name: 'Leyya Kalla' },
    ],
  },
  {
    id: 'life-of-hearts',
    title: 'The Life of Hearts',
    subtitle: 'Prophet Muhammad: From the Shia Traditions of the Ahl al-Bayt',
    category: 'quran-islam',
    description:
      'A contemporary adaptation of the second volume of the Hayāt al-Qulūb of Muhammad Bāqir al-Majlisī, from the English translations of James L. Merrick (1850) and Syed Athar Husain S. H. Rizvi.',
    credits: [{ role: 'Adapted & edited by', name: 'Leyya Kalla' }],
  },
  {
    id: 'dawning-lights-of-certitude',
    title: 'The Dawning Lights of Certitude',
    subtitle: 'On the Secrets of the Commander of the Faithful',
    author: 'Al-Ḥāfeẓ Rajab al-Bursī',
    category: 'irfan-sufism',
    credits: [
      { role: 'Translated by', name: 'Hadeer Allam' },
      { role: 'Edited by', name: 'Leyya Kalla' },
    ],
  },
];
