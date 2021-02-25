import React from 'react';
import { BookDescription } from '../types/BookDescription';
import BookItem from './BookItem';

type BookSearchItemProps = {
  description: BookDescription;
  onBookAdd: (book: BookDescription) => void;
};

const BookSearchItem = (props: BookSearchItemProps): JSX.Element => {
  const handleAddBookClick = () => {
    props.onBookAdd(props.description);
  };
  return (
    <div className="book-item">
      <button type="button" onClick={handleAddBookClick}>
        <span>+</span>
      </button>
      <BookItem
        title={props.description.title}
        authors={props.description.authors}
        thumbnail={props.description.thumbnail}
      />
    </div>
  );
};

export default BookSearchItem;
