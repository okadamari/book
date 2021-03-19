import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import BookIcon from '@material-ui/icons/Book';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { BookToRead } from '../types/BookToRead';
import { BookDescription } from '../types/BookDescription';
import Footer from './Footer';
import Hero from './Hero';
import BookRow from './BookRow';
import BookSearchDialog from './BookSearchDialog';

import './App.css';

const APP_KEY = 'books';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album(): JSX.Element {
  const classes = useStyles();

  const [books, setBooks] = useState([] as BookToRead[]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const storedBooks = localStorage.getItem(APP_KEY);
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(books));
  }, [books]);

  const handleBookDelete = (id: number) => {
    const newBooks = books.filter((b) => b.id !== id);
    setBooks(newBooks);
  };
  const handleBookMemoChange = (id: number, memo: string) => {
    const newBooks = books.map((book) => (book.id === id
      ? { ...book, memo }
      : book));
    setBooks(newBooks);
  };
  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleBookAdd = (book: BookDescription) => {
    const newBook: BookToRead = { book, id: Date.now(), memo: '' };
    const newBooks = [...books, newBook];
    setBooks(newBooks);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <BookIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            読みたい本リスト
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Hero onOpen={handleModalOpen} />
        <BookSearchDialog
          onClose={handleModalClose}
          open={modalIsOpen}
          maxResults={20}
          onBookAdd={(b) => handleBookAdd(b)}
        />

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {books.map((book) => (
              <Grid item key={book.id} xs={12} sm={6} md={4}>
                <BookRow
                  book={book}
                  onMemoChange={(id, memo) => { handleBookMemoChange(id, memo); }}
                  onDelete={(id) => { handleBookDelete(id); }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}
