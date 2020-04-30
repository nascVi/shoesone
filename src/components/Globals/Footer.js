import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBListGroup } from "mdbreact";

import { IoLogoFacebook } from "react-icons/io"
import { IoLogoInstagram } from "react-icons/io"
import { IoLogoGithub } from "react-icons/io"
import { IoLogoWhatsapp } from "react-icons/io"
// import { Link } from "gatsby"

import { useScrollToTop } from './hooks/scrollToTop';
import logo from '../../images/logo.svg'

import ScrollAnimation from 'react-animate-on-scroll'

const Footer = (props) => {
    const setScrollToTop = useScrollToTop(true);
    return (
        <MDBFooter color="black" className="footer font-small mt-1">
            <br />
            <MDBContainer fluid className="container text-center text-md-left">
                <MDBRow className="FContent">
                    <MDBCol className="FLogo" md="3">
                        <div
                            className="LscrollTopdiv LscrollArrow"
                            key={props}
                            onClick={() => setScrollToTop(true)}
                        >
                            <ScrollAnimation animateIn='bounceInRight'>
                                <img src={logo} width="160" heihgt="90" alt="brand" />
                                ™
                                </ScrollAnimation>
                        </div>
                    </MDBCol>
                    <MDBCol className="FootCenLeg footer-soc-meds" md="5">
                        <h5 className="title">Nous sommes aussi @</h5>
                        <a href="https://www.facebook.com/shoesone972"><IoLogoFacebook className="footer-Fb-med  mr-3" /></a>
                        <a href="https://www.instagram.com/shoesone972"><IoLogoInstagram className="footer-Insta-med mr-3" /></a>
                        <a href="https://github.com/nascVi/sneakershop"><IoLogoGithub className="footer-Git-med mr-3" /></a>
                        <a href="https://chat.whatsapp.com/K1L90FRUWeBDZqX49OqgMY"><IoLogoWhatsapp className="footer-Wa-med" /></a>
                        <br />
                        <br />
                    </MDBCol>
                    <MDBCol md="4" className="FootRighLeg">
                        <h5 className="title"></h5>
                        <MDBListGroup className="FootRightLi">

                            {/* 
                            <Link to="/faq">
                                - FAQ
                            </Link>
                            <Link to="/cgv">
                                - Conditions Générales de vente
                            </Link>
                            */}
                            <br />
                        </MDBListGroup>

                    </MDBCol>
                </MDBRow>
                <br />
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    <div className="copyrights">
                        ©{new Date().getFullYear()} - <span className="footer-brand"> ShoesOne</span> - At {` `}
                        <a className="footer-link" href="https://lpchamps.cf">lpchamps<span className="footer-link-ts">`</span></a> make
                    </div>
                    <br />
                </MDBContainer>
                <br />
            </div>
        </MDBFooter>
    );
}

export default Footer;
