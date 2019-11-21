import React from 'react';
import logo from './shoes1.svg';
import Footer from './components/Footer';
import './App.css';

import logo from './poppie.svg';
import './App.css';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Benvenuti a Shoes 0 972</h1>
        <p>Non si piace per la venuti di scorson</p>
        <scan className="span">paziensa a la magnana per favor</scan>
        <a href="https://www.instagram.com/shoesone972/"><img src={logo} className="App-logo" alt="logo" /></a>
        <br/>
        <h1>Bienenuti a Shoes O 972</h1>        
        <a
        href="https://instagram.com/shoesoneuf972"
        >
          <img src={logo} className="App-logo" alt="poppie" />  
        </a>
        <p>
          Paziensa per la ultimate veg
        </p>
        <Footer />
      </header>
    </div>
  );
}

export default App;
