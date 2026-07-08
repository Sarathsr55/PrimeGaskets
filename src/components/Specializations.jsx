import React from 'react';
import { Link } from 'react-router-dom';
import './Specializations.css';
import softGaskets from '../assets/soft_gaskets.png';
import mlsGaskets from '../assets/mls_gaskets.png';
import copperSeals from '../assets/copper_seals.png';
import singleLayer from '../assets/single_layer_gasket.png';

const Specializations = () => {
  return (
    <section className="specializations container section-padding">
      <div className="section-header">
        <h2>Material Specializations</h2>
        <p>We utilize advanced machining processes to transform raw technical materials into high-resistance sealing components tailored to your specific pressure and temperature requirements.</p>
      </div>

      <div className="spec-grid">
        <div className="spec-card" style={{ backgroundImage: `url(${softGaskets})` }}>
          <div className="spec-card-content">
            <span className="spec-tag text-orange">POLYMER & RUBBER</span>
            <h3>Soft Gaskets</h3>
            <p>Optimum for low-pressure flange sealing with Nitrile, Silicone, and Viton options.</p>
          </div>
        </div>

        <div className="spec-card" style={{ backgroundImage: `url(${mlsGaskets})` }}>
          <div className="spec-card-content">
            <span className="spec-tag text-orange">ADVANCED METAL</span>
            <h3>MLS Gaskets</h3>
            <p>Multi-Layer Steel technology for high-stress sealing environments.</p>
          </div>
        </div>

        <div className="spec-card" style={{ backgroundImage: `url(${copperSeals})` }}>
          <div className="spec-card-content">
            <span className="spec-tag text-orange">HIGH THERMAL</span>
            <h3>Copper Seals</h3>
            <p>Superior thermal conductivity for extreme temperature environments.</p>
          </div>
        </div>

        <div className="spec-card show-more-card" style={{ backgroundImage: `url(${singleLayer})` }}>
          <div className="spec-card-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
            <h3>Explore Full Catalog</h3>
            <p style={{ margin: '0.5rem auto 1.5rem auto' }}>Discover our complete range of specialized sealing solutions.</p>
            <Link to="/products" className="btn btn-primary" style={{ display: 'inline-flex' }}>Show More <span>→</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specializations;
