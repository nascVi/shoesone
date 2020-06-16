import React from "react"
import {Fade} from 'react-reveal';
// import SEO from "../../components/seo"
import Title from '../Title'
// import snapcode from "../../images/snapcode.svg"
// import whatsapp from "../../images/WhatsApp.svg"

import shoesonePicture from '../../images/shoesonePicture.png'

const ShoesoneNine = ({ props }) => (
  <Fade >
      <div className="shoesone-img">
        <img src={shoesonePicture} width="50%" alt="shoesone Pic"/>
      </div>
  </Fade>
)


export default ShoesoneNine
