import React from 'react';
import './MissionSection.css';

const MissionSection = () => {
  return (
    <section className="mission-section section-padding">
      <div className="container mission-inner">
        <div className="mission-content">
          <span className="subtitle-tag text-orange">OUR PURPOSE</span>
          <h2>Our Mission</h2>
          <p className="mission-statement">
            At Prime Gaskets, our mission is to deliver uncompromising quality and precision in every seal we manufacture. We are dedicated to providing innovative, reliable, and high-performance sealing solutions that power the world's most critical industrial, automotive, and aerospace applications. 
          </p>
          <p>
            Through continuous technological advancement and a steadfast commitment to excellence, we strive to exceed our customers' expectations and set the global standard for industrial reliability.
          </p>
        </div>
        <div className="mission-stats">
          <div className="stat-box">
            <span className="stat-number">100%</span>
            <span className="stat-label">Quality Assured</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">Global</span>
            <span className="stat-label">Distribution</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
