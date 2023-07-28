import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';




function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/service" element = {<Service/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          
        </Routes>

        


        
    </div>
  );
}

export default App;
