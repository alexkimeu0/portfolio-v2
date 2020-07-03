import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <h2>Alexa</h2>
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
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
