import React, { useState } from 'react';
import Toolbar from './Toolbar';
import Logo from './Logo';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
      <div className="container d-flex align-items-center justify-content-between">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          aria-controls="navbarNav"
          aria-expanded={showMenu ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarNav">
          <Toolbar />
        </div>
      </div>
    </nav>
  );
};

export default Header;
