import React, { useState, useEffect } from 'react';
import { BookDescription } from '../types/BookDescription';
import BookSearchItem from './BookSearchItem';

function buildSearchUrl(title: string, author: string, maxResults: number): string {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=';
  const conditions: string[] = [];
  if (title) {
    conditions.push(`intitle:${title}`);
  }
  if (author) {
    conditions.push(`inauthor:${author}`);
  }
  return `${url + conditions.join('+')}&maxResults=${maxResults}`;
}

function extractBooks(json: any): BookDescription[] {
  const { items } = json;
  return items.map((item: any) => {
    const { volumeInfo } = item;
    const { title, authors, imageLinks } = volumeInfo;
    return {
      title,
      authors: authors ? authors.join(', ') : '',
      thumbnail: imageLinks ? imageLinks.smallThumbnail : '',
    };
  });
}

type BookSearchDialogProps = {
  maxResults: number;
  onBookAdd: (book: BookDescription) => void;
};

const BookSearchDialog = (props: BookSearchDialogProps): JSX.Element => {
  const [searchedBooks, setBooks] = useState([] as BookDescription[]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { maxResults } = props;

  useEffect(() => {
    if (isSearching) {
      const url = buildSearchUrl(title, author, maxResults);
      fetch(url)
        .then((res) => res.json())
        .then((json) => extractBooks(json))
        .then((books) => {
          setBooks(books);
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
    setIsSearching(false);
  }, [author, isSearching, maxResults, title]);

  function handleTitleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  const handleAuthorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleSearchClick = () => {
    if (!title && !author) {
      alert('条件を入力してください');
      return;
    }
    setIsSearching(true);
  };

  const handleBookAdd = (book: BookDescription) => {
    props.onBookAdd(book);
  };

  const bookItems = searchedBooks.map((b) => (
    <BookSearchItem
      description={b}
      onBookAdd={(book) => handleBookAdd(book)}
      key={b.title}
    />
  ));

  return (
    <div className="dialog">
      <div className="operation">
        <div className="conditions">
          <input
            type="text"
            onChange={handleTitleInputChange}
            placeholder="タイトルで検索"
          />
          <input
            type="text"
            onChange={handleAuthorInputChange}
            placeholder="著者名で検索"
          />
        </div>
        <button
          type="button"
          className="button-like"
          onClick={handleSearchClick}
        >
          検索
        </button>
      </div>
      <div className="books">{bookItems}</div>
    </div>
  );
};

export default BookSearchDialog;
