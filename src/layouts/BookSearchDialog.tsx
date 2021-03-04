import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { BookDescription } from '../types/BookDescription';
import { GoogleBooksAPIResults } from '../types/GoogleBooksAPIResults';
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

function extractBooks(json: GoogleBooksAPIResults): BookDescription[] {
  const { items } = json;
  return items.map((item) => {
    const { volumeInfo } = item;
    const { title, authors, imageLinks } = volumeInfo;
    return {
      title,
      authors,
      imageLinks,
    };
  });
}

type BookSearchDialogProps = {
  maxResults: number;
  open: boolean;
  onClose: () => void;
  onBookAdd: (book: BookDescription) => void;
};

const BookSearchDialog = (props: BookSearchDialogProps): JSX.Element => {
  const [searchedBooks, setBooks] = useState([] as BookDescription[]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { maxResults, open, onClose } = props;
  const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
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
  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <form className={classes.root} noValidate>
        <Container>
          <DialogTitle id="simple-dialog-title">Add books</DialogTitle>
          <div className="operation">
            <div>
              <TextField
                label="タイトルで検索"
                variant="outlined"
                onChange={handleTitleInputChange}
              />
            </div>
            <div>
              <TextField
                label="著者名で検索"
                variant="outlined"
                onChange={handleAuthorInputChange}
              />
            </div>
            <div>
              <Button
                variant="contained"
                type="button"
                className="button-like"
                onClick={handleSearchClick}
              >
                検索
              </Button>
            </div>
          </div>
          <List className="books">{bookItems}</List>
        </Container>
      </form>
    </Dialog>
  );
};

export default BookSearchDialog;
