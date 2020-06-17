import React from 'react'
import { Fade } from 'react-reveal'

import ReactPlayer from 'react-player'

const Landing = () => {
    return (
        <div className="landing">
            <Fade bottom duration={800}>
                <div className="landing-video-container">
                    <h4 className="landing-video-title">Au Programme sur place ou en livraison</h4>
                    <ReactPlayer
                        width="100%"
                        className="landing-video"
                        url="https://youtu.be/adzza_Tmrdg" 
                        playing="false"
                    />
                </div>
            </Fade>
        </div>
    )
}

export default Landing
