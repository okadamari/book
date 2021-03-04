import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import { BookDescription } from '../types/BookDescription';

type BookSearchItemProps = {
  description: BookDescription;
  onBookAdd: (book: BookDescription) => void;
};

const BookSearchItem = (props: BookSearchItemProps): JSX.Element => {
  const handleAddBookClick = () => {
    props.onBookAdd(props.description);
  };
  const { description } = props;
  const { title, authors, imageLinks } = description;
  return (
    <div className="book-item">
      <ListItem>
        <AddIcon onClick={handleAddBookClick} />
        <ListItemText
          primary={title}
          secondary={authors}
        />
        {imageLinks ? <img src={imageLinks.thumbnail} alt="" /> : null}
      </ListItem>
    </div>
  );
};

export default BookSearchItem;
