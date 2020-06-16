import React from 'react'
import { IoLogoFacebook } from "react-icons/io"
import { IoLogoInstagram } from "react-icons/io"
import { IoLogoGithub } from "react-icons/io"
import { IoLogoWhatsapp } from "react-icons/io"
import { Link } from "react-router-dom"

import { useScrollToTop } from './scrolltotop/scrollToTop';
import ScrollAnimation from 'react-animate-on-scroll'
// import { Fade } from 'react-reveal'
import logo from '../images/Flogo.png'

const Footer = (props) => {
    const setScrollToTop = useScrollToTop(true);
    return (
        <footer className="footer">

            <span
            className="btt-arrow"
            key={props}
            onClick={() => setScrollToTop(true)}
            role="img"
            aria-labelledby="sfbridgetop"
            >🌁
            </span>
            <ScrollAnimation className="brand-logo" animateIn='bounceInRight'>
                <Link to="/shoesone" className="brand-tm"><img src={logo} width="190" height="105" alt="brand" /></Link> 
            </ScrollAnimation>
            <div className="footer-legals">
                <div className="footer-legalsCap">
                    -<Link to="/livraison" className="footer-legals-ln">    
                        Livraisons
                    </Link>
                </div>
                <div className="footer-legalsCap">
                    -<Link to="/menleg" className="footer-legals-ln">    
                        Mentions Legales
                    </Link>
                </div>
                <div className="footer-legalsCap">
                    -<Link to="/cgv" className="footer-legals-ln">    
                        Conditions Générales de vente
                    </Link>
                </div>
            </div>
            <div>
                <h3 className="footer-socialCap">Réseaux Sociaux</h3>
                <a href="https://www.facebook.com/shoesone972">
                <IoLogoFacebook className="footer-social"/>
                </a>
                <a href="https://www.instagram.com/shoesone972">
                <IoLogoInstagram className="footer-social"/>
                </a>
                <a href="https://github.com/nascVi/shoesone">
                <IoLogoGithub className="footer-social"/>
                </a>
                <a href="https://chat.whatsapp.com/K1L90FRUWeBDZqX49OqgMY">
                <IoLogoWhatsapp className="footer-social"/>
                </a>
            </div>
            <div className="footer-copy">
                ©2020 Shoesone - lpChamps` designers
            </div>
            <br />
        </footer>
    )
}

export default Footer
