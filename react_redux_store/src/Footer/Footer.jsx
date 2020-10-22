import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.grey[300],
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
  },
  grid: {
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    fontFamily: 'Roboto',
  },
}));

export const Footer = () => {
  const items = useSelector(state => state.items);
  const classes = useStyles();

  const sumOfPrice = items.map(item => +item.price).reduce((a, b) => a + b, 0);
  const avaragePrice = items.length > 0
    ? Math.round((sumOfPrice / items.length) * 100) / 100
    : 0;

  return (
    <footer className={classes.footer}>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            {`Number items : ${items.length}`}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            {`Sum price of items : ${sumOfPrice}`}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            {`Avarage price of items :
            ${avaragePrice}`}
          </Paper>
        </Grid>
      </Grid>
    </footer>
  );
};
