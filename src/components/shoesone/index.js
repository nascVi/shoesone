import React from "react"
import {Fade} from 'react-reveal';
// import SEO from "../../components/seo"

// import snapcode from "../../images/snapcode.svg"
// import whatsapp from "../../images/WhatsApp.svg"

import shoesonePicture from '../../images/shoesonePicture.png'

const ShoesoneNine = ({ props }) => (
  <Fade >
      <div className="img-container">
        <img src={shoesonePicture} width="50%" alt="shoesone Pic"/>
      </div>
      {/* <div className="">

        <span><img src={snapcode} alt="snapcode"/></span>
        <span><img src={whatsapp} alt="snapcode"/></span>
      </div> */}
      
  </Fade>
)


export default ShoesoneNine
