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
        {/* <div
          id="snipcart"
          type="text/javascript"
          src="https://cdn.snipcart.com/themes/v3.0.15/default/snipcart.js"
          data-api-key="MTgwMDBmNmEtOTYyYy00MzA5LWFlNWEtM2M2Nzg3OTcyM2NkNjM3MTIwOTM2NDM4OTIxNzc2">
        </div> */}
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
              <img src={logo} height='85' width='170' alt="Shoesone" />
            </Link>
            {/* <button
              type="button"
              className=""
              onClick=
            >
              <FaAlignRight className="nav-icon" />
            </button> */}
            <FaShoppingBag className="cart cart-icon snipcart-checkout snipcart-overwrite" />
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/shoesone">Shoesone972</Link>
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
              <Link to=""
                className="loginbtn btn snipcart-customer-signin text-capitalize"
              >
              SignUp/In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
