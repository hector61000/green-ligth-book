import { Book } from './types/book';
import { personalDevelopmentBooks } from './books/personal-development';
import { businessBooks } from './books/business';

export const books: Book[] = [
  ...personalDevelopmentBooks,
  ...businessBooks
];

export type { Book };