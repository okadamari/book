import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { BookToRead } from '../types/BookToRead';
import { BookDescription } from '../types/BookDescription';
import Hero from './Hero';
import BookRow from './BookRow';

const APP_KEY = 'books';

const BooksToRead = (): JSX.Element => {
  const [books, setBooks] = useState([] as BookToRead[]);

  const useStyles = makeStyles((theme: Theme) => createStyles({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  }));
  const classes = useStyles();

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

  return (
    <>
      <Hero title="読んだ本リスト" caption="読んだ本を追加しよう" />
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
    </>
  );
};

export default BooksToRead;
