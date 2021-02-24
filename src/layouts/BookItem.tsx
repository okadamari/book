import React from 'react';
import { BookDescription } from '../types/BookDescription';

const BookItem = (description: BookDescription) => {
  const { title, authors, thumbnail } = description;
  return (
    <>
      <h2 title={title}>{title}</h2>
      <div className="authors" title={authors}>
        {authors}
      </div>
      {thumbnail ? <img src={thumbnail} alt="" /> : null}
    </>
  );
};

export default BookItem;
