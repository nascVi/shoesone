import React from 'react';
import logo from './shoes1.svg';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Benvenuti a Shoes 0 972</h1>
        <p>Non si piace per la venuti di scorson</p>
        <scan className="span">paziensa a la magnana per favor</scan>
        <a href="https://www.instagram.com/shoesone972/"><img src={logo} className="App-logo" alt="logo" /></a>
        <br/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
