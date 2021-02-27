import { BookDescription } from './BookDescription';

type GoogleBooksAPIResultsItem = {
    volumeInfo: BookDescription;
}

export type GoogleBooksAPIResults = {
    kind: string;
    totalItems: number;
    items: GoogleBooksAPIResultsItem[];
}
