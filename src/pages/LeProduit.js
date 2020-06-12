import React, { Component } from "react";
import defaultBcg from "../images/requinsonshore.jpeg";
// import Hero from "../components/Hero";
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
      description,
      stock,
      size,
      price,
      extras,
      service,
      custom,
      images
    } = produit;
    const [main, ...defaultImages] = images;
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
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>
                <select>
                Taille : {size}[0] 🇺
                
                </select>
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
            {extras.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
