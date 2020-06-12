import React from "react";
import Produit from "./Produit";
const ListeProduits = ({ produits }) => {
  if (produits.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {produits.map(item => {
          return <Produit key={item.id} produit={item} />;
        })}
      </div>
    </section>
  );
};

export default ListeProduits;
