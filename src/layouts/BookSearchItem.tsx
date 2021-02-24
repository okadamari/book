import React from "react";
import { BookDescription } from "../types/BookDescription";
import BookItem from "./BookItem";

type BookSearchItemProps = {
  description: BookDescription;
  onBookAdd: (book: BookDescription) => void;
};

const BookSearchItem = (props: BookSearchItemProps) => {
  const handleAddBookClick = () => {
    props.onBookAdd(props.description);
  };
  return (
    <div className="book-item">
      <div onClick={handleAddBookClick}>
        <span>+</span>
      </div>
      <BookItem
        title={props.description.title}
        authors={props.description.authors}
        thumbnail={props.description.thumbnail}
      />
    </div>
  );
};

export default BookSearchItem;