import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ProduitProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ProduitProvider>
    <BrowserRouter>
        <App hidden id="snipcart" data-api-key={process.env.SNIPCART_API_KEY} />
    </BrowserRouter>
  </ProduitProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
