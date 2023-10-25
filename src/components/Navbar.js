import React from 'react';
import NavbarButton from './NavbarButton';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarButton label="Home" />
      <NavbarButton label="About" />
      <NavbarButton label="Services" />
      <NavbarButton label="Contact" />
    </nav>
  );
};

export default Navbar;