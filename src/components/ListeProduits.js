import React from "react";
import Produit from "./Produit";

const ListeProduits = ({ produits }) => {
  if (produits.length === 0) {
    return (
      <div className="empty-search">
        <h3>Aucun produits ne correspond à votre recherche</h3>
      </div>
    );
  }
  return (
    <section className="produitslist">
      <div className="produitslist-center">
        {produits.map(item => {
          return <Produit key={item.name} produit={item} />;
        })}
      </div>
    </section>
  );
};

export default ListeProduits;
