import React, { Component } from "react";
import defaultBcg from "../images/requinsonshore.jpeg";

// import { AddToCart } from 'react-snipcart'
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ContextProduit } from "../context";

import StyledHero from "../components/StyledHero";

export default class LeProduit extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = ContextProduit;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getProduit } = this.context;
    const produit = getProduit(this.state.slug);


    if (!produit) {
      return (
        <div className="error">
          <h3> Le Produit souhaité n'est pas entré...</h3>
          <Link to="/produits" className="btn-primary">
            vers tout les produits
          </Link>
        </div>
      );
    }

    const {
      name,
      // handleChange,
      description,
      stock,
      size,
      price,
      extras,
      service,
      custom,
      images
    } = produit;
    const [ ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/produits" className="btn-primary">
              vers tout les models
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-produit">
          <div className="single-produit-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-produit-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
              <br/><br/>
              <button
                classID="snipcart-main-container"
                className="btn btn-primary snipcart-checkout snipcart-overwrite snipcart-add-item snipcart-customer-signin"
                data-item-id={produit.id}
                // data-item-image={produit.image.fluid.src}
                data-item-price={produit.price}
                data-item-url="https://shoesone-nine.now.sh"
                data-item-name={produit.name}
                // data-item-description={produit.image.description}
                data-item-custom1-name={produit.size}
                data-item-custom1-options={produit.size}
                >
                Je prends!
              </button>

            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : €{price}</h6>
              <h6>Taille:
              {/* <select
                name="size"
                id="size"
                onChange={handleChange}
                className="form-control"
                value={size}
              >
              </select> */}
              {size}
                <span className="eu-emoji" role="img" aria-label="eu">🇪🇺</span>
              </h6>
              <h6>
                Quantité disponible (Pour acheter en gros):
                {stock > 1 ? `${stock} models` : `Plus que ${stock} model!`}
              </h6>
              <h6>{custom ? "custom available" : "no custom available yet"}</h6>
              <h6>{service && "1 cleaning de base inclu"}</h6>
            </article>
          </div>
        </section>
        <section className="produit-extras">
          <h6>extras </h6>
          <ul className="extras">
            <u>Vous pouvez selectionner différents options supplémentaires:</u>
            {extras.map((item, index) => (
              <li key={index}><span>{item}</span></li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
