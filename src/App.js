import React from 'react';
import logo from './shoes1.svg';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BEL BONJOU, BIENVENU sur Shoesone <span className="dMartinique" role="img" aria-label="madinina drapeau">🛳</span>!</h1>
        <p>Nos produits sont aussi <a className="Imlink" href="https://www.instagram.com/shoesone972/">Instagram</a> pour l'instant.</p>
        <span className="span">Pour la Martinique, nous livrons en main propre, dans les 72h(5€).</span>
        <a href="https://www.instagram.com/shoesone972/"><img src={logo} className="App-logo" alt="logo" /></a>
        <br />
        <Footer />
      </header>
    </div>
  );
}

export default App;
