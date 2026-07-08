import React from 'react';
import './ReliabilitySection.css';
import gasketInnovation from '../assets/gasket_innovation.png';

const ReliabilitySection = () => {
  return (
    <section className="reliability-bg">
      <div className="container reliability-section section-padding">
        <div className="rel-content">
          <h2>Engineered Reliability</h2>
          
          <div className="feature-list">
            <div className="feature-item">
              <div className="icon-box">✓</div>
              <div className="feature-text">
                <h4>Highest Standards</h4>
                <p>First and foremost, we are committed to producing high-quality products that meet the highest standards of performance and durability.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="icon-box">⚙</div>
              <div className="feature-text">
                <h4>Rigorously Tested</h4>
                <p>Our products are rigorously tested to ensure that they are reliable and safe.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="icon-box">🏭</div>
              <div className="feature-text">
                <h4>In-House Manufacturing</h4>
                <p>We use only the best materials and have a complete in-house manufacturing process to produce them.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rel-images">
          <div className="image-stack">
            <img src={gasketInnovation} alt="Gasket Innovation Technology" />
          </div>
          <div className="experience-badge">
            <span className="years">50+</span>
            <span className="exp-text">Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliabilitySection;
