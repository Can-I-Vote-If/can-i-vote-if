import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar-brand"><h1>Can I Vote If?</h1></Link>

        <ul className="nav">
          <li className="nav-item">
            <Link to="/about/" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/voting-laws" className="nav-link">Voting Laws</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;