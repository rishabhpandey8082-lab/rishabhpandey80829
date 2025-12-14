import { de } from './de';
import { en } from './en';

export type Language = 'de' | 'en';
export type Translations = typeof de;

export const translations: Record<Language, Translations> = {
  de,
  en,
};

export { de, en };
