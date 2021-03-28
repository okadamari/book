import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

type HeroProps = {
  title: string;
  caption: string;
  onOpen?: () => void;
  openButtonIsVisible?: boolean;
};

function Hero(props: HeroProps): JSX.Element {
  const {
    title, caption, onOpen, openButtonIsVisible,
  } = props;
  const classes = useStyles();
  const openButton = openButtonIsVisible ? <Button variant="contained" color="primary" onClick={onOpen}>本を追加</Button> : null;

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {caption}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              {openButton}
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
Hero.defaultProps = {
  onOpen: () => false,
  openButtonIsVisible: false,
};
export default Hero;
