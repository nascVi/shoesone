import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Produits from "./pages/Produits";
import LeProduit from "./pages/LeProduit";
import Shoesone from "./pages/Shoesone";
import Cleaning from "./pages/Cleaning"
import Custom from "./pages/Custom"
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produits/" component={Produits} />
        <Route exact path="/produits/:slug" component={LeProduit} />
        <Route exact path="/shoesone/" component={Shoesone} />
        <Route exact path="/cleaning/" component={Cleaning} />
        <Route exact path="/custom/" component={Custom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
