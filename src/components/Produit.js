import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/requinsonshore.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";

const Produit = memo(({ produit }) => {
  const { name, slug, images, price, comprice} = produit;
  // console.log(name);
  return (
    <article classID={name} className="produit">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="le produit" />
        <div className="price-top">
          <h6>{price+".00"}€</h6>
            <p className="produit-discount">
            {comprice === 0 ?  `` : `Soldé de l'initiale ${comprice+".00"}€`}
            </p>
        </div>
        <Link to={`/produits/${slug}`} className="btn-primary produit-link">
          description du produit
        </Link>
        <br />
        <br />
      </div>
      <p className="produit-info">{name}</p>
    </article>
  );
});

Produit.propTypes = {
  produit: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    comprice: PropTypes.number.isRequired
  })
};
export default Produit;
