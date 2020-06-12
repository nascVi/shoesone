import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/requinsonshore.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
const Produit = memo(({ produit }) => {
  const { name, slug, images, price } = produit;
  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>Soldé à 40% : <em>${price + 80}</em></p>
        </div>
        <Link to={`/produits/${slug}`} className="btn-primary room-link">
          description du produit
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

Produit.propTypes = {
  produit: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Produit;
