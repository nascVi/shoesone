import React /*, { useContext , useEffect, useState }*/ from 'react'
import img from '../images/jojos.svg'

import ReactParticles from 'react-particles-js'
import { Element,scroller } from 'react-scroll'
import { Fade } from 'react-reveal'


import Title from '../components/Title'
import CustomLanding from '../components/CustomLanding/Landing'

// Maybe be the Custom Newsletter
// import Contact from '../Contact'

const Particles = ({ children }) => {
    return (
      <div style={{ position: 'relative' }}>
        <ReactParticles
          params={{
        particles: {
              number: {
                value: 81
              },
              size: {
                value: 2
              },
              shape:{
                type: "edge"
              },
              color: {
                value: "#af9a7d"
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out"
              }
        },
      interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    }
                }
        },
      retina_detect: true
      }}
          style={{
            position: 'absolute',
            zIndex: 0,
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
          }}
        />
        {children && <div style={{ position: 'relative' }}>{children}</div>}
      </div>
    );
}

// const client = require('contentful').createClient({
//   space: process.env.BOUTIQUE_APP_SPACE,
//   accessToken:process.env.BOUTIQUE_APP_ACCESS
// });

function InaSpace({ children }) {
    return (
        <div className="innerSpace">
            <div className="iS-body">{children}</div>
            {/* Check main for mobiles responsives */}
        </div>
    );
}

const Custom = ({ data }) => {
  
  const scrollToLanding = elem => {
      scroller.scrollTo(elem, {
          duration: 800,
          delay: 100,
          smooth: true
      })
  }

    return (
      <Particles>
        <div className="customLanding">
            <Fade>
                <Title title="Custom (Concept en cours)"/>
                    <div >
                        <img src={img} className="scroll-landing" onClick={() => scrollToLanding('landing')} alt="af1" width="150px" height="90"/>
                    </div>
            {/* <div className="hero"> */}
                {/* <BackgroundVideo className="backgroundVid" /> */}
                {/* <div className="wrapper"> */}
                    {/* <Nav context="home" /> */}
                    <div className="scroll-down" onClick={() => scrollToLanding('footer')} ></div>
                    <h5 className="caption-hint">Sneakers par excellence<span className="home__coffee" role="img" aria-label="coffee"></span></h5>
                {/* </div> */}
                {/* </div> */}
                <InaSpace />
                <Element name="landing">
                {/* <Element name="brand"> 
                <Brands brands={data.brands} />
                Loading...
                </Element> */}
                  <CustomLanding />
                </Element>
                {/* <Element name="info">
                  <Info />
                </Element> */}
                {/* <Element name="contact">
                  <Contact />
                </Element> */}
            </Fade>
        </div>
      </Particles>
    )
}

export default Custom
