import React, { Component } from "react";
import Title from "./Title";
import { ContextProduit } from "../context";
import Produit from "./Produit";
import Loading from "./Loading";
export default class ProduitsTendance extends Component {
  static contextType = ContextProduit;

  render() {
    let { loading, produitsTendance: produits } = this.context;

    produits = produits.map(produit => {
      return <Produit key={produit.id} produit={produit} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Les Tendances" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : produits}
        </div>
      </section>
    );
  }
}
