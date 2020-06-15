import React from "react"
import {Fade} from 'react-reveal';
// import SEO from "../../components/seo"

import snapcode from "../../images/snapcode.svg"
import whatsapp from "../../images/WhatsApp.svg"

import { shoesonePicture } from '../../images/shoesonePicture.png'

import GoogleMap from "./map"

const ShoesoneNine = ({ data }) => (
  <div className="wrapper">
            <div className="shoesone">
              <Fade >
                <img
                src={shoesonePicture}
                title="shoesonepic"
                alt="shoes1Pic"
                />
          <br />
          <br />
          <div className="about text-center">
            <h3 className="about-greatings text-weight-blod">
              BEL BONJOU , BIENVENUE , WELCOME sur ShoesOne972.com <br />
            </h3>
            <h4>
              <i>le 1er site de destockage de sneakers en Martinique!</i>
            </h4>
            <br />
            <br />
            <p className="about-text display-7">
              <span>
                <h4>SHOESONE972</h4> est une boutique en ligne spécialisée
                <br />
                de vente de sneakers en destockage et prenium basée en Martinique.
                <br />
                Ce site est géré par la société au registre des commerces (Siret:
                81489520700095)
              </span>
            </p>
            <p>
              <span>
                Nous vous proposons une sélection des meilleures marques de sneakers
                en destockage et en premium.
                <br />
                Tous nos articles sont 100% AUTHENTIQUES et sont prêts à l’envoi avec
                des stocks en Martinique et en France métropolitaine.
              </span>
              <br />
              <br />
              <h4>NOTRE EQUIPE</h4>
              <span>
                Nous sommes des passionnés de sneakers et nous restons à votre
                disposition
                <br />
                afin de passer vos commandes sur internet.
              </span>
              <br />
              <br />
              <h4>NOUS CONTACTER</h4>
              <span>
                Pour toute questions n’hésitez pas à nous contacter en utilisant le
                formulaire de contact
                <br />
                ou sur :{" "}
                <a href="mailto:contact@shoesone972.com">contact@shoesone972.com</a>.
                Nous vous répondrons dans de brefs délais (24h maximum).
                <br />
                Vous pouvez également nous contacter via Snapchat{" "}
                <a href="/">
                  <img src={snapcode} height="40px" width="40px" alt="snapShoesone" />
                </a>{" "}
                ou
                <a href="https://chat.whatsapp.com/K1L90FRUWeBDZqX49OqgMY">
                  <img
                    src={whatsapp}
                    height="50px"
                    width="50px"
                    alt="whatsAppShoesone"
                  />
                </a>{" "}
                au: <a href="tel:+596696882892">+596 696882892</a>.
              </span>
            </p>
            <p>
              <br />
              <h4>NOUS SUIVRE</h4>
              <span>
                Si vous voulez en savoir plus sur nos dernières sorties , nos achats
                et échanger avec nous,
                <br />
                vous pouvez également nous rejoindre sur nos différents réseaux
                sociaux (liens après la map en bas de page).
              </span>
            </p>
            <br />
            </div>
            <GoogleMap />
            </Fade>
          </div>
        </div>
)


export default ShoesoneNine
