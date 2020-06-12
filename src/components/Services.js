import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaShuttleVan />,
        title: "Livraison",
        info:
          "Toutes les shippings sont expédié par Colissimo 📦, ou en main propre pour la martinique, pour l'instant."
      },
      {
        icon: <FaCocktail />,
        title: "Cleaning",
        info:
          "Le modernisme et la sofistication ne nous fait pas négliger l\n'entretien. Par amour de ma sneaker, le feriez vous?"
      },
      {
        icon: <FaHiking />,
        title: "Custom",
        info:
          "Actuellement en période d'amélioration 🏗, nous pouvons entendre votre demande la plus particulière, via le chat ou la fiche contact."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
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
