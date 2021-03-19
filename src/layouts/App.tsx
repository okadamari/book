import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import BookIcon from '@material-ui/icons/Book';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { BookToRead } from '../types/BookToRead';
import Footer from './Footer';
import BooksToRead from './BooksToRead';

import './App.css';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default function Album(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <BookIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            本のページ
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <BooksToRead />
      </main>
      <Footer />
    </>
  );
}
