import React from 'react';
import './styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">WiseRays</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
