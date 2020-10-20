import React from 'react';
import './Header.scss';
import logo from '../img/logo_n.svg';


export const Header = () => {

  return (
    <section className="header">
      <div className="header__logo-container">
        <a className="header__logo" href="/#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <button
        type="button"
        className="header__button-catalog"
      >
        Каталог товарів
      </button>
    </section>
  );
};
