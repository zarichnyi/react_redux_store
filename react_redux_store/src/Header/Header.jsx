import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Header.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import logo from '../img/logo_n.svg';
import { AddItemForm } from '../addItemForm/AddItemForm';
import { clearCatalog } from '../redux/items';


export const Header = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <AppBar
      position="relative"
      style={{
        backgroundColor: '#122538',
        height: '75px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Toolbar>
        <Box component="img" src={logo} />
        <Button
          type="button"
          variant="contained"
          style={{ margin: '0 40px' }}
          onClick={() => dispatch(clearCatalog())}
        >
          Очистити каталог
        </Button>
        <Button
          type="button"
          onClick={() => setOpen(true)}
          variant="contained"
          style={{ margin: '0 40px' }}
        >
          Додати товар
        </Button>
      </Toolbar>
      <AddItemForm open={open} setOpen={setOpen} />
    </AppBar>
  );
};
