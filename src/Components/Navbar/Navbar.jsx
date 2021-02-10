import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../tools/Button';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navigation">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/works">Works</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <Button />
  </nav>
);

export default Navbar;