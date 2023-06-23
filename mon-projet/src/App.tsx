import React from 'react';
import './App.css';
import Header from './Header';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';
import './app-container.css';

function App() {
  return (
    <div>
      <Header />
    <h1>NOS PRESTATION</h1>
      <div className="container">
        <div className="row-container">
          <Component1 />

        </div>
        <div className="row-container">
          <Component2 />
        </div>
      </div>

      <div className="container">
        <div className="row-container">
          <Component3 />
        </div>
        <div className="row-container">
          <Component4 />
        </div>
      </div>

      <div className="container">
        <div className="row-container">
          <Component5 />
        </div>
        <div className="row-container">
          <Component6 />
        </div>
      </div>

    </div>
  );
}

export default App;
