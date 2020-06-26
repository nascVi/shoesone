import React, { Component } from "react";
import defaultBcg from "../images/requinsonshore.jpeg";

// import { AddToCart } from 'react-snipcart'
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ContextProduit } from "../context";

import handleChange from '../context'

import StyledHero from "../components/StyledHero";

export default class LeProduit extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = ContextProduit;

  render() {
    const { getProduit } = this.context;
    const produit = getProduit(this.state.slug);


    if (!produit) {
      return (
        <div className="error">
          <h3> Le Produit recherché n'existe pas...</h3>
          <Link to="/produits" className="btn-primary">
            vers tout les produits
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      stock,
      price,
        size,
      extras,
      service,
      custom,
      images
    } = produit;
    const [ ...defaultImages] = images;
    const [ ...defaultSizes] = size;
    // console.log(defaultImages);
    // console.log(defaultSizes);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name}`}>
      console.log(produit);
            <Link to="/produits" className="btn-primary">
              vers tout les models
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-produit">
          <div className="single-produit-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
              ))
              }
          </div>
          <div className="single-produit-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
              <br/><br/>
              <button
                classID="snipcart-main-container"
                className="btn btn-primary snipcart-checkout snipcart-overwrite snipcart-add-item"
                data-item-id={produit.id}
                data-item-name={produit.name}
                data-item-image={produit.images}
                data-item-price={produit.price}
                data-item-url='/produits/:slug'
                data-item-description={produit.description}
                data-item-custom1-name={produit.size}
                data-item-custom1-placeholder="Confirmer la taille choisie, svp ! ex:39"
                data-item-custom2-name="Nous sommes sur une version beta du site actuellement. Et pour assurer le bon déroulement de la transaction nous vous rappelerons dans un premier temps"
                data-item-custom2-placeholder="Merci d'indiquer votre numéro de téléphone joint ici, svp"
                >
                J'ajoute au panier! ${produit.price}
              </button>

            </article>
            <article className="info">
              <h3>info</h3>
              <h6>prix : €{price}</h6>
              <h6>Taille:
              <select
                name="size"
                id="size"
                onChange={handleChange}
                className="form-control"               
                >
                {defaultSizes.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
                ))}
              </select>
                <span className="eu-emoji" role="img" aria-label="eu">🇪🇺</span>
              </h6>
              <small className="stockNot"><em><u>


                {stock > 3 ? `` : `Il en reste ${stock}!`}
              </u>
              </em><span role="img" aria-labelledby="lpChamps" >{stock > 3 ? `` : `🙋`}</span>
              </small>
              <br />
              <br />
              <h6>{custom ? "custom possible" : "Pas de custom sur cette paire"}</h6>
              <h6>{service && "1 cleaning de base inclu"}</h6>
            </article>
          </div>
        </section>
        <section className="produit-extras">
          <h6>extras </h6>
          <p>
            <small>
              <u>
              Vous pouvez selectionner différents options supplémentaires:
              </u>
            </small>
          </p>
          <br />
          <ul className="extras">
            {/* <div> */}
              
            {extras.map((item, index) => (
              <li key={index}><small>{item}</small></li>
              ))}
          </ul>
          {/* </div> */}
        </section>
      </>
    );
  }
}
