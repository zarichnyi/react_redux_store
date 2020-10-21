import React from 'react';
import './Header.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import logo from '../img/logo_n.svg';

export const Header = () => {

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
        <Button variant="contained"
          style={{ margin: '0 40px' }}
        >
          Очистити каталог
        </Button>
      </Toolbar>
    </AppBar>
  );
};
