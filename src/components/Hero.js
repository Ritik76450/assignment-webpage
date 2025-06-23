import React from 'react';
import './styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Learn from the World’s Top Universities</h1>
        <p>Explore online and hybrid courses in Business, Tech, and Finance.</p>
        <button>Explore Courses</button>
      </div>
      <img src="/images/hero-image.png" alt="Hero" className="hero-img" />
    </section>
  );
}
