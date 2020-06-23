import React from "react"
import "./App.scss"

import Home from "./pages/Home"
import Produits from "./pages/Produits"
import LeProduit from "./pages/LeProduit"
import Shoesone from "./pages/Shoesone"
import Cleaning from "./pages/Cleaning"
import Custom from "./pages/Custom"
import Livraison from "./pages/Livraison"
import FAQS from "./pages/FAQS"
import CGV from "./pages/CGV"
import MenLeg from "./pages/MenLeg"

import Error from "./pages/Error"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import { Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
    <div id="snipcart" data-api-key={`${process.env.REACT_APP_TEST_API_KEY}`}></div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produits/" component={Produits} />
        <Route exact path="/produits/:slug" component={LeProduit} />
        <Route exact path="/shoesone/" component={Shoesone} />
        <Route exact path="/cleaning/" component={Cleaning} />
        <Route exact path="/custom/" component={Custom} />
        <Route exact path="/livraison/" component={Livraison} />
        <Route exact path="/faqs/" component={FAQS} />
        <Route exact path="/cgv/" component={CGV} />
        <Route exact path="/menleg/" component={MenLeg} />
        
        <Route component={Error} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
