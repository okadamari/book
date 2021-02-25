import React from 'react';
import { BookToRead } from '../types/BookToRead';
import BookItem from './BookItem';

type BookRowProps = {
  book: BookToRead;
  onMemoChange: (id: number, memo: string) => void;
  onDelete: (id: number) => void;
};

const BookRow = (props: BookRowProps): JSX.Element => {
  const { book, memo } = props.book;

  const handleMemoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onMemoChange(props.book.id, e.target.value);
  };

  const handleDeleteClick = () => {
    props.onDelete(props.book.id);
  };

  return (
    <div className="book-item">
      <BookItem
        title={book.title}
        authors={book.authors}
        thumbnail={book.thumbnail}
      />
      <input
        type="text"
        className="memo"
        value={memo}
        onChange={handleMemoChange}
      />
      <div className="delete-row" onClick={handleDeleteClick}>
        削除
      </div>
    </div>
  );
};

export default BookRow;
