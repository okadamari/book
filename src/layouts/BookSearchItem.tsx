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
  const authorsText = authors ? authors.join(',') : '';
  return (
    <ListItem>
      <AddIcon onClick={handleAddBookClick} />
      <ListItemText
        primary={title}
        secondary={authorsText}
      />
      {imageLinks ? <img src={imageLinks.thumbnail} alt="" /> : null}
    </ListItem>
  );
};

export default BookSearchItem;
