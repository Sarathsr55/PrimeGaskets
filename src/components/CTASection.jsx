import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="container section-padding">
      <div className="cta-block">
        <div className="cta-content">
          <h2>Ready to optimize your sealing performance?</h2>
          <p>Our engineering team is available for technical consultations and material selection guidance.</p>
        </div>
        <div className="cta-actions">
          <Link to="/contact" className="btn btn-primary cta-btn">Request Engineering Team</Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
