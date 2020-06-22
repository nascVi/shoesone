import React from 'react'
import img from '../images/jojos.svg'

import ReactParticles from 'react-particles-js'
import { Element,scroller } from 'react-scroll'
import { Fade } from 'react-reveal'

import Title from '../components/Title'
import CustomLanding from '../components/CustomLanding/Landing'

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


function InaSpace({ children }) {
    return (
        <div className="innerSpace">
            <div className="iS-body">{children}</div>
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
                    <div left>
                        <img src={img} className="scroll-landing" onClick={() => scrollToLanding('landing')} alt="af1" width="340px" height="100"/>
                    </div>
                    <div className="scroll-down" onClick={() => scrollToLanding('footer')} ></div>
                    <h5 className="caption-hint">Sneakers par excellence<span className="home__coffee" role="img" aria-label="coffee"></span></h5>

                <InaSpace />
                <Element name="landing">
                  <CustomLanding />
                </Element>
            </Fade>
        </div>
      </Particles>
    )
}

export default Custom
