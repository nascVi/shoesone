import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FaAlignRight } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa"
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
            barColor="#af9a7d" buttonWidth={16}
            toggleButton={this.isActive} 
            className="nav-btn nav-icon" />
            <Link to="/" className="nav-logoLink">
              <img src={logo} height='95' width='170' alt="Shoesone" />
            </Link>
            <FaShoppingBag className="cart cart-icon snipcart-checkout snipcart-overwrite" />
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
              SignUp/In
              </span>
              
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
