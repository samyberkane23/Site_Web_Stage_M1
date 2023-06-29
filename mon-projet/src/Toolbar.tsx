import React from 'react';
import './btn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Toolbar: React.FC = () => {
  return (
    <div className="navbar-nav mx-auto"> {/* Ajoutez la classe "mx-auto" pour centrer les boutons */}
      <button className="btn btn-primary mx-2 position-relative">
        Qui sommes nous ?
        <div className="btn-loader"></div>
      </button>
      <button className="btn btn-primary mx-2 position-relative">
        Notre activité
        <div className="btn-loader"></div>
      </button>
      <button className="btn btn-primary mx-2 position-relative">
        Contact
        <div className="btn-loader"></div>
      </button>
    </div>
  );
};
export default Toolbar;
