import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import ProduitsTendance from "../components/ProduitsTendance";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Shoesone972 1er site de destockage de sneakers en Martinique"
          subtitle="La meilleurs selection à partir de 75€"
        >
          <Link to="/produits" className="btn-primary">
            Accès à la boutique
          </Link>
        </Banner>
      </Hero>
      <Services />
      <ProduitsTendance />
    </>
  );
};

export default home;
