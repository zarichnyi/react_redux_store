import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';

import { addItem } from '../redux/items';

const useStyles = makeStyles(() => ({
  formInput: {
    marginBottom: '20px',
  },
  formButton: {
    marginTop: '20px',
  },
  uploadButton: {
    display: 'none',
  },
}));

export const AddItemForm = ({ open, setOpen }) => {
  const user = useSelector(state => state.users);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const imgToBase64 = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgUrl(reader.result);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addItem({
      id: +Date.now(),
      title,
      image: imgUrl,
      description,
      price,
    }));

    setTitle('');
    setDescription('');
    setImgUrl('');
    setPrice('');
    setOpen(false);
  };

  return (
    <Dialog open={open} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add product</DialogTitle>
      {user === 'admin'
        ? (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <DialogContentText>
                Add title, description and price product. Image not required
              </DialogContentText>
              <div className={classes.formInput}>
                <TextField
                  autoFocus
                  value={title}
                  onChange={({ target }) => setTitle(target.value)}
                  margin="dense"
                  id="title"
                  label="Title product"
                  type="text"
                  fullWidth
                  required
                />
              </div>
              <div>
                <TextField
                  onChange={({ target }) => setDescription(target.value)}
                  value={description}
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={6}
                  variant="outlined"
                  fullWidth
                  required
                />
              </div>
              <div className={classes.formInput}>
                <TextField
                  onChange={({ target }) => setPrice(target.value)}
                  value={price}
                  margin="dense"
                  id="price"
                  label="Price"
                  type="number"
                  required
                />
              </div>
              <div className={classes.formButton}>
                <Button
                  variant="contained"
                  component="label"
                >
                  Upload File
                  <input
                    onChange={event => imgToBase64(event)}
                    type="file"
                    className={classes.uploadButton}
                  />
                </Button>
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setOpen(false)}
                color="primary"
              >
                Cancel
              </Button>
              <Button type="submit">
                Submit
              </Button>
            </DialogActions>
          </form>
        )
        : (
          <DialogContent>
            <DialogContentText>
              Only admin can add product
            </DialogContentText>
            <Button
              onClick={() => setOpen(false)}
              color="secondary"
              size="large"
              variant="contained"
            >
              OK
            </Button>
          </DialogContent>
        )
      }
    </Dialog>
  );
};
