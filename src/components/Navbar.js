import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri"
import { FcTwoSmartphones } from "react-icons/fc"
import logo from "../images/Flogo.png";

import HamburgerElastic from './thisam/HamburgerElastic'

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };


  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <HamburgerElastic
            id="button" 
            onClick={this.handleToggle}
            isActive={this.state.isOpen} 
            barColor="#af9a7d" buttonWidth={12}
            toggleButton={this.isActive}
            className="nav-btn nav-icon" />
            <Link to="/" className="nav-logoLink">
              <img src={logo} height='55' width='100' alt="Shoesone" />
            </Link>
            <RiShoppingCartLine className="cart cart-icon snipcart-checkout snipcart-overwrite" />
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/shoesone">Qui Nous Sommes?</Link>
            </li>
            <li>
              <Link to="/produits">Boutique</Link>
            </li>
            <li>
              <Link to="/cleaning">Cleaning</Link>
            </li>
            <li>
              <Link to="/custom">Custom</Link>
            </li>
            <li>
              <Link to="/faqs">FAQS</Link>
            </li>
            <li className="loginbtn" >
              <span
                className="btn snipcart-customer-signin text-capitalize"
              >
              <AiOutlineLogin />
              </span>

            <small>c/i</small>
            </li>
            <br />
            <li className="phoneNum" >
              <a href="tel:+5960696882892">
                <FcTwoSmartphones size="14px" /> <small>: +596-06-96-88-28-92</small>
              </a>
              
            
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
