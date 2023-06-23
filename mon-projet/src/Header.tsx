// contenur de l'en tete (toolbar et logo)
import React from 'react';
import Logo from './Logo';
import Toolbar from './Toolbar';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Toolbar />
    </div>
  );
};

export default Header;