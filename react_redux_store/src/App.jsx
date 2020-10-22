import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from './Header/Header';
import { Catalog } from './Catalog/Catalog';
import { Footer } from './Footer/Footer';
import * as api from './api/items';

import './App.scss';
import { addItem, setItems } from './redux/items';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getItems().then((itemsFromServer) => {
      if (JSON.parse(localStorage.getItem('items'))) {
        dispatch(setItems(JSON.parse(localStorage.getItem('items'))));
      } else {
        dispatch(setItems(itemsFromServer));
      }
    });
  }, []);

  return (
    <div className="container">
      <header><Header /></header>
      <main className="main"><Catalog /></main>
      <Footer />
    </div>
  );
};

export default App;
