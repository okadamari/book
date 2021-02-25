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
  const { description } = props;
  const { title, authors, thumbnail } = description;
  return (
    <div className="book-item">
      <button type="button" onClick={handleAddBookClick}>
        <span>+</span>
      </button>
      <BookItem
        title={title}
        authors={authors}
        thumbnail={thumbnail}
      />
    </div>
  );
};

export default BookSearchItem;
