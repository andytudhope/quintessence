import { CategorySlug } from '@/types';

export interface ForthcomingTitle {
  id: string;
  title: string;
  subtitle?: string;
  /** Primary author / source, shown first in the credits block. */
  author?: string;
  credits?: { role: string; name: string }[];
  /** A short opening quote or line, set apart above the blurb. */
  epigraph?: string;
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
    epigraph: `“I am less than what you say, and more than what you think.”`,
    description:
      `More has been written about Imam ʿAlī than about any figure of Islam save the Prophet himself. This book sets out to know the man. Here is the boy who carried food to the Prophet in the Cave of Ḥirāʾ; the warrior who, when his fallen enemy spat in his face at the Trench, paused until his anger on his own behalf had cooled; the caliph who walked the market of Kūfa in plain cloth, urging full measure; and the husband who said of Fāṭima, “Whenever I looked at her, my cares and sorrows fell away.”` +
      `\n\n` +
      `Part One tells his life, from his birth inside the Kaʿba to the dawn prayer in Kūfa at which he was struck down. Part Two gathers his own words: the Covenant to Mālik al-Ashtar, which reminds a governor that every subject is “either a brother to you in religion, or your like in creation”; the testament to his son al-Ḥasan; sermons, sayings and judgements; and poems attributed to him.` +
      `\n\n` +
      `Selected by Shaykh Fadhlalla Haeri, translated by Mohammed Alsalman and edited in modern English, it is the companion to Biography of the Twelve Imams.`,
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
    epigraph: `Twelve lives, one line of guidance: from ʿAlī, born inside the Kaʿba, to the awaited Mahdī.`,
    description:
      `Biography of the Twelve Imams is drawn from the Kitāb al-Irshād of al-Shaykh al-Mufīd (d. 413 AH / 1022 CE), among the earliest and most trusted lives of the Imams. Abridged by Shaykh Fadhlalla Haeri and set in clear modern English, it sets aside the chains of transmission but keeps the eyewitnesses, so the reader stands where they stood.` +
      `\n\n` +
      `The geese cry out at dawn as ʿAlī steps into his courtyard on the morning he is struck: “Leave them — they are wailing mourners.” On the road to Iraq the poet al-Farazdaq tells al-Ḥusayn that “the hearts of the people are with you, but their swords are against you.” A boy of nine, al-Jawād, leaves the judge Yaḥyā ibn Aktham stammering before the caliph. Al-Riḍā walks barefoot through Marw to the ʿĪd prayer, and the city is shaken with weeping.` +
      `\n\n` +
      `Between the narratives, the Imams speak for themselves in sermons, prayers and counsels.` +
      `\n\n` +
      `A short and inviting way into the lives of the Imams, and the companion to Biography of Imam ʿAlī.`,
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
      `At Uhud, wounded in the face, the Prophet caught his own blood and flung it upward, and not one drop came back to earth, lest punishment fall upon the world. Urged to curse his enemies, he prayed instead, “O God, guide my people, for they do not know.” This is The Life of Hearts: the life of the Prophet Muhammad as the traditions of his household, the Ahl al-Bayt, remember it.` +
      `\n\n` +
      `Its author, Muhammad Bāqir al-Majlisī (1627–1699), was Shaykh al-Islam of Safavid Isfahān. This adaptation of the second volume of his Hayāt al-Qulūb draws on James L. Merrick’s translation of 1850 and Syed Athar Husain S. H. Rizvi’s complete translation, from which much that Merrick omitted is restored.` +
      `\n\n` +
      `It runs from the light of Muhammad before creation to Ghadīr Khumm and his last morning. Through wonder and hardship walks a man who knew love, grief, exile, betrayal, sacrifice and forgiveness, yet was so wholly turned towards God, so attuned to the Highest Will, that the world itself answered him.` +
      `\n\n` +
      `Al-Majlisī called it The Life of Hearts, not the life of minds. May it open your heart to the Life of all Hearts, who changed our world forever.`,
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
