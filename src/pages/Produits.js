import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ContainerProduit from "../components/ContainerProduit";
const Produits = () => {
  return (
    <>
      <Hero hero="produitsHero">
        <Banner title="Tout les produits">
          <Link to="/" className="btn-primary">
            Vers L'accueil
          </Link>
        </Banner>
      </Hero>
      <ContainerProduit />
    </>
  );
};

export default Produits;
