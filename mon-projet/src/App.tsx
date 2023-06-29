import React from 'react';
import Header from './Header';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';
import './container1.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContainer: React.FC = () => {
  return (
    <div>
      <Header />
  <div className="container-fluid">
  <div className="row mb-4"> {/* Ajout de la classe mb-4 pour une marge de 4 unités en bas */}

    <div className="col">
      <div className="row-container">
        <a href="#">
          <Component1 />
        </a>
      </div>
    </div>
    <div className="col">
      <div className="row-container">
        <a href="#">
          <Component2 />
        </a>
      </div>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col-12"> {/* Utilisation de col-12 pour que le composant 3 occupe toute la largeur */}
      <div className="row-container">
        <a href="#">
          <Component3 />
        </a>
      </div>
    </div>
  </div>

      </div>
</div>

  );
};

export default AppContainer;
