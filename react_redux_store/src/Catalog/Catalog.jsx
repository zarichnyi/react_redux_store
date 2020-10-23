import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

import { Item } from '../Item/Item';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: '100px',
  },
  warningMsg: {
    margin: '0 auto',
  },
}));

export const Catalog = () => {
  const classes = useStyles();
  const items = useSelector(state => state.items);

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {(items.length && items.map(card => (
            <Item {...card} key={card.id} />
          )))
            || (JSON.parse(localStorage.getItem('emptyStorage'))
              && (
                <Typography variant="h4" className={classes.warningMsg}>
                  {JSON.parse(localStorage.getItem('emptyStorage'))}
                </Typography>
              ))
          }
        </Grid>
      </Container>
    </>
  );
};
