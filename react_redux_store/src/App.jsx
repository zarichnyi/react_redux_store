import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { Catalog } from './Catalog/Catalog';
import { Footer } from './Footer/Footer';
import * as api from './api/items';

import './App.scss';
import { setItems } from './redux/items';
import { setUser } from './redux/users';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getItems().then((itemsFromServer) => {
      if (JSON.parse(localStorage.getItem('items'))) {
        dispatch(setItems(JSON.parse(localStorage.getItem('items'))));
      } else if (JSON.parse(localStorage.getItem('emptyStorage'))) {
        dispatch(setItems([]));
      } else {
        dispatch(setItems(itemsFromServer));
      }

      if (JSON.parse(localStorage.getItem('user'))) {
        dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
      }
    });
  }, []);

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/catalog" component={Catalog} />
        {/* <Route path="*" component={PageNotFound} /> */}
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
