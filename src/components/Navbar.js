import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo.gif";

import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Alex" />
            &nbsp; <h4>Alex</h4>
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
