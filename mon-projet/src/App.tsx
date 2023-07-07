import React from 'react';
import Header from './Header';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import './container1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './VideoComponent';

const AppContainer: React.FC = () => {
  return (
    <div>
      <Header />
      <Player />

      <div className="container-fluid">
        <div className="content">
          <div className="row mb-4">
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
            <div className="col-12">
              <div className="row-container">
                <a href="#">
                  <Component3 />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppContainer;
