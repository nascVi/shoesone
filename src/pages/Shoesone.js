import React from 'react'
// import ShoesoneNine from '../components/shoesone'
import Title from '../components/Title'
import shoesonePicture from '../images/shoesonePicture.png'
import {Fade} from 'react-reveal';

import GoogleMap from "../components/shoesone/map"

const Shoesone = () => {
    return (
        <Fade Fade bottom delay={80} duration={900}>
            <Title title="Qui Nous Sommes?"/>
            {/* <ShoesoneNine /> */}
            <div className="shoesone-img">
                <img src={shoesonePicture} width="100%" alt="shoesone Pic"/>
            </div>
            <div className="qui">
            <h3 className="section-title">Bel Bonjou, Bienvenue, Welcome sur ShoesOne972.com</h3>
            <p><strong>SHOESONE972</strong> est une boutique en ligne spécialisée  de déstockage de sneakers  en Martinique.</p>
            <br/>
            <p><strong><u>NOTRE ÉQUIPE</u></strong></p>
            <p>Nous sommes des passionnés de sneakers et nous avons la volonté de vous satisfaire.</p>
            <br/>
            <p><strong><u>NOUS CONTACTER</u></strong></p>
            <p>Pour toute questions n’hésitez par à nous écrire par mail: <a href="mailto:contact@shoesone972.com">contact@shoesone972.com .</a></p>
            <p><strong>Wé Konten Wé ZOT</strong></p>
            </div>
            <GoogleMap />
        </Fade>
    )
}

export default Shoesone