import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';

import { removeItem } from '../redux/items';

const useStyles = makeStyles(theme => ({
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

export const Item = ({ image, title, description, id }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = useSelector(state => state.users);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={image}
            title={title}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography>
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            {user === 'admin'
              && (
                <Button
                  size="small"
                  color="primary"
                  onClick={() => dispatch(removeItem(id))}
                >
                  Delete
                </Button>
              )
            }
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
