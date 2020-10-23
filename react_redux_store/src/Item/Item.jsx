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

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain',
  },
  cardContent: {
    flexGrow: 1,
  },
  price: {
    fontSize: '25px',
  },
}));

export const Item = ({ image, title, description, id, price }) => {
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
            <Typography style={{ width: '100%' }}>
              {description}
            </Typography>
            <Typography className={classes.price}>
              {`${price} `}
              &#8372;
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
