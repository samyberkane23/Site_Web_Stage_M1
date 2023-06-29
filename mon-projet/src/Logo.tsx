import React from 'react';
import logoImage from './logo.png';

const Logo = () => {
  return (
    <a className="navbar-brand" href="#">
      <img src={logoImage} alt="Logo" width="100" height="80" />
    </a>
  );
};

export default Logo;
