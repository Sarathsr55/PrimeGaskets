import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import heroBg from '../assets/hero_bg.png';

const HeroSection = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <div className="hero-content">
          <span className="subtitle">ENGINEERING EXCELLENCE</span>
          <h1>Precision Engineering for High-Performance Sealing</h1>
          <p>Manufacturing and supply of high-quality automotive & offshore gaskets to industries around the world. </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-dark">Explore Catalog</Link>
            <Link to="/contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
