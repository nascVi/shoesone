import React, { Component } from "react";
import { GoRuby, GoPaintcan, GoPackage, GoGlobe } from "react-icons/go";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <GoPackage />,
        title: "Livraison",
        info:
          "Toutes les livraions sont expédié par Colissimo 📦, ou en main propre pour la martinique, en ce moment."
      },
      {
        icon: <GoRuby />,
        title: "Cleaning",
        info:
          "Le modernisme et la sofistication ne nous fait pas négliger l\n'entretien. Par amour de ma sneaker 👟, le feriez vous?"
      },
      {
        icon: <GoPaintcan />,
        title: "Custom",
        info:
          "Actuellement en période d'amélioration 🏝, nous pouvons entendre votre demande la plus particulière, via le chat ou la fiche contact."
      },
      {
        icon: <GoGlobe />,
        title: "Concept",
        info:
          "Nous sommes sur différentes plateformes, et cherchons pour le store, les meilleurs models, conception, la qualité, pour vous satisfaire 😎"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
