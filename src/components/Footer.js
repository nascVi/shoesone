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
            >🌁
            </span>
                <ScrollAnimation className="brand-logo" animateIn='bounceInRight'>
                <Link to="/shoesone" className="brand-tm"><img src={logo} width="190" height="105" alt="brand" /></Link> 
                </ScrollAnimation>
            <div className="footer-legals">
                <div className="footer-legalsCap">
                -<Link to="/sav" className="footer-legals-ln">    
                    SAV
                    </Link>
                </div>
            </div>
            <div className="footer-legals">
                <div className="footer-legalsCap">
                -<Link to="/mentionslegales" className="footer-legals-ln">    
                    Mentions Legales
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


// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBListGroup } from "mdbreact";



// import ScrollAnimation from 'react-animate-on-scroll'

// const Footer = (props) => {
//     return (
//         <MDBFooter color="black" className="footer font-small mt-1">
//             <br />
//             <MDBContainer fluid className="container text-center text-md-left">
//                 <MDBRow className="FContent">
//                     <MDBCol className="FLogo" md="3">
//                             <div
//                                 className="LscrollTopdiv LscrollArrow"
//                                 key={props}
//                                 onClick={() => setScrollToTop(true)}
//                                 >
//                             </div>
//                     </MDBCol>
//                     <MDBCol className="FootCenLeg footer-soc-meds" md="5">
//                         <h5 className="title">Nous sommes aussi @</h5>
//                         <a href="https://www.facebook.com/shoesone972"><IoLogoFacebook className="footer-Fb-med  mr-3" /></a>
//                         <a href="https://www.instagram.com/shoesone972"><IoLogoInstagram className="footer-Insta-med mr-3" /></a>
//                         <a href="https://github.com/nascVi/sneakershop"><IoLogoGithub className="footer-Git-med mr-3" /></a>
//                         <a href="https://chat.whatsapp.com/K1L90FRUWeBDZqX49OqgMY"><IoLogoWhatsapp className="footer-Wa-med" /></a>
//                         <br />
//                         <br />
//                     </MDBCol>
//                     <MDBCol md="4" className="FootRighLeg">
//                         <h5 className="title">Liens Pratiques</h5>                        
//                             <MDBListGroup className="FootRightLi">
//                                 <Link to="/faq">
//                                     - FAQ
//                                 </Link>
//                                 <Link to="/cgv">
//                                     - Conditions Générales de vente
//                                 </Link>
//                                 <br />
//                             </MDBListGroup>
                        
//                     </MDBCol>
//                 </MDBRow>
//                 <br />
//             </MDBContainer>
//             <div className="footer-copyright text-center py-3">
//                 <MDBContainer fluid>
//                     <div className="copyrights">
//                         ©{new Date().getFullYear()} - <span className="footer-brand"> Shoes One 972</span> - At {` `}
//                         <a className="footer-link" href="https://lpchamps.cf">lpchamps<span className="footer-link-ts">`</span></a> make
//                     </div>
//                 </MDBContainer>
//             </div>
//         </MDBFooter>
//     );
// }

// export default Footer;