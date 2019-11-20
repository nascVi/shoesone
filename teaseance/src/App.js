import React from 'react';
import logo from './poppie.svg';
import './App.css';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
