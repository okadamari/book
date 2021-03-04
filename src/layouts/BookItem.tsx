import React from 'react';
import { BookDescription } from '../types/BookDescription';

const BookItem = (description: BookDescription): JSX.Element => {
  const { title, authors, imageLinks } = description;
  return (
    <>
      <h2 title={title}>{title}</h2>
      <div className="authors" title={authors}>
        {authors}
      </div>
      {imageLinks ? <img src={imageLinks.thumbnail} alt="" /> : null}
    </>
  );
};

export default BookItem;
