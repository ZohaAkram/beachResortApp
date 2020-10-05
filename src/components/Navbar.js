import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* <link to="/">
              <img src={logo} alt="Beach Resort" />
            </link> */}
            {/* <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button> */}
          </div>
          {/* <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <link to="/">Home</link>
            </li>
            <li>
              <link to="/rooms">Rooms</link>
            </li>
          </ul> */}
        </div>
      </nav>
    );
  }
}
