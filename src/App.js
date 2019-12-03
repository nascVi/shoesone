import React from 'react';
import logo from './shoes1.svg';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shoes 0 972 vous souhaite une excellente shopping expérience</h1>
        <p>Nos prodduits sont accessibles sur Instagram pour le moment.</p>
        <span className="span">Pour la Martinique, nous livrons en main propre, dans les 72h.</span>
        <a href="https://www.instagram.com/shoesone972/"><img src={logo} className="App-logo" alt="logo" /></a>
        <br/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
