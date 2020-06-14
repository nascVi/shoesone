import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FaAlignRight } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa"
import logo from "../images/logo.svg";

import HamburgerElastic from './thisam/HamburgerElastic'

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  // state = {
  //   showSideBar: false,
  // }

  // showSideBar = () => {
  //   const { showSideBar } = this.state;
  //   this.setState({ showSideBar: !showSideBar });
  // }

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
            <Link className="nav-logoLink" to="/">
              <img src={logo} height='35' width='135' alt="Shoesone" />
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
              <Link
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
