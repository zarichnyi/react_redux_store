import React from 'react';
import { Header } from './Header/Header';
import { getItems } from './api/items.js';

import './App.scss';

const App = () => (
  <div className="container">
    <header><Header /></header>
  </div>
);

export default App;
