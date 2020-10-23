/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import logo from '../img/logo_n.svg';
import { AddItemForm } from '../addItemForm/AddItemForm';
import { LogInForm } from '../LogInForm/LogInForm';
import { clearCatalog } from '../redux/items';

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: '#122538',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
  },
  burgerButton: {
    marginLeft: '20px',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  toolbarItems: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  menuIcon: {
    padding: '2px 0',
  },
  clearCatalogBtn: {
    margin: '0 40px',
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

export const Header = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector(state => state.users);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="relative"
      className={classes.appbar}
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarItems}>
          <a href="#">
            <Box component="img" src={logo} />
          </a>
          <div className={classes.burgerButton}>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              <MenuIcon
                className={classes.menuIcon}
              />
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => {
                handleClose();
              }}
              >
                <Link
                  to="/"
                  className={classes.link}
                >
                  Main page
                </Link>
              </MenuItem>
              <MenuItem onClick={() => {
                handleClose();
              }}
              >
                <Link
                  to="/catalog"
                  className={classes.link}
                >
                  Catalog
                </Link>
              </MenuItem>
            </StyledMenu>
          </div>
          <Button
            type="button"
            variant="contained"
            className={classes.clearCatalogBtn}
            onClick={() => dispatch(clearCatalog())}
            disabled={user !== 'admin'}
          >
            Clear catalog
          </Button>
          <Button
            type="button"
            onClick={() => setOpen(true)}
            variant="contained"
          >
            Add product
          </Button>
        </div>
        <LogInForm />
      </Toolbar>
      <AddItemForm open={open} setOpen={setOpen} />
    </AppBar>
  );
};
