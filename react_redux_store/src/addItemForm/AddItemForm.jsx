import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/items';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(10),
//       width: '25ch',
//     },
//   },
// }));

export const AddItemForm = ({ open, setOpen }) => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  // console.log(open)

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
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Додайте назву, опис та ціну товару.
            Картинка необов'язкова.
          </DialogContentText>
          <div style={{ marginBottom: '20px' }}>
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
              autoComplete={false}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
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
          <div style={{ marginTop: '20px' }}>
            <Button
              variant="contained"
              component="label"
            >
              Upload File
              <input
                onChange={event => imgToBase64(event)}
                type="file"
                style={{ display: 'none' }}
              />
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button type="submit">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
