import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { BookToRead } from '../types/BookToRead';

type BookRowProps = {
  book: BookToRead;
  onMemoChange: (id: number, memo: string) => void;
  onDelete: (id: number) => void;
};

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
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
}));

const BookRow = (props: BookRowProps): JSX.Element => {
  const { book: propsBook } = props;
  const { book, memo } = propsBook;
  const classes = useStyles();
  const authors = book.authors ? book.authors.join(', ') : '';

  const handleMemoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onMemoChange(props.book.id, e.target.value);
  };

  const handleDeleteClick = () => {
    props.onDelete(props.book.id);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={book.imageLinks.thumbnail}
        title={`${book.title}のサムネイル`}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {book.title}
        </Typography>
        <Typography>
          {authors}
        </Typography>
        <input
          type="text"
          className="memo"
          value={memo}
          onChange={handleMemoChange}
        />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={handleDeleteClick}
        >
          削除
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookRow;
