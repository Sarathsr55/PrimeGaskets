import React from 'react';
import './Contact.css';
import contactHero from '../assets/contact_hero.png';
import mapImg from '../assets/map_placeholder.png';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <div className="ch-content">
            <span className="subtitle-tag text-orange">ENGINEERING SUPPORT</span>
            <h1>Precision Engineered Solutions for Your Industry.</h1>
            <p>Connect directly with our technical sales team for custom gasket fabrication, material consultation, and rapid prototyping services.</p>
          </div>
          <div className="ch-image-wrapper">
            <img src={contactHero} alt="Industrial Gaskets" />
            <div className="iso-badge">
              ISO 9001:2015 CERTIFIED
            </div>
          </div>
        </div>
      </section>

      <section className="support-cards-section container">
        <div className="support-cards-grid">
          <div className="support-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3>Technical Sales</h3>
            <p>Consultation on material compatibility, custom specs, and volume pricing.</p>
            <div className="card-contact">
              <span>✉ sales@precisiongasket.com</span>
              <span>📞 +1 (800) 555-0192</span>
            </div>
          </div>

          <div className="support-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <h3>Order Support</h3>
            <p>Track current production orders or request shipping documentation.</p>
            <div className="card-contact">
              <span>✉ support@precisiongasket.com</span>
              <span>🕒 Mon-Fri 08:00 - 17:00 CST</span>
            </div>
          </div>

          <div className="support-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <h3>Manufacturing Facility</h3>
            <p>Our 50,000 sq ft main facility and technical testing laboratory.</p>
            <div className="card-contact">
              <span>📍 842 Industrial Blvd, Houston, TX</span>
              <span>🏢 Receiving Gate: North-04</span>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="quote-section container section-padding">
        <div className="quote-split">
          <div className="quote-form-side">
            <h2>Request a Technical Quote</h2>
            <p>Submit your drawings (DXF/DWG/PDF) and specifications. Our engineers will respond within 24 business hours.</p>
            
            <form className="tech-form">
              <div className="form-row">
                <div className="form-group">
                  <label>COMPANY NAME</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>CONTACT NAME</label>
                  <input type="text" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>EMAIL ADDRESS</label>
                  <input type="email" />
                </div>
                <div className="form-group">
                  <label>MATERIAL REQUIREMENT</label>
                  <select>
                    <option>Soft Gaskets</option>
                    <option>MLS Gaskets</option>
                    <option>Foam Coated</option>
                    <option>Copper Gaskets</option>
                    <option>Single Layer</option>
                    <option>Asbestos Gaskets</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>TECHNICAL SPECIFICATIONS / NOTES</label>
                <textarea rows="4" placeholder="Enter thickness, tolerances, operating temperatures, or chemical exposure details..."></textarea>
              </div>



              <button type="submit" className="btn btn-dark submit-btn">
                SUBMIT TECHNICAL REQUEST <span>➤</span>
              </button>
            </form>
          </div>

          <div className="quote-info-side">
            <div className="map-wrapper">
              <img src={mapImg} alt="Facility Map" />
            </div>
            <div className="industry-standards">
              <h3>Industry Standards</h3>
              
              <div className="standard-item">
                <div className="std-icon text-orange">☑</div>
                <div className="std-text">
                  <h4>ISO CERTIFIED</h4>
                  <p>Maintaining rigorous 9001:2015 quality control benchmarks for all custom builds.</p>
                </div>
              </div>
              
              <div className="standard-item">
                <div className="std-icon text-orange">⚡</div>
                <div className="std-text">
                  <h4>RAPID PROTOTYPING</h4>
                  <p>Same-day quote generation and 48-hour turn-around on most material prototypes.</p>
                </div>
              </div>
              
              <div className="standard-item">
                <div className="std-icon text-orange">🔬</div>
                <div className="std-text">
                  <h4>LAB TESTING</h4>
                  <p>In-house thermal and chemical resistance testing available upon request.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="logos-band">
        <div className="container logos-inner">
          <span>MIL-SPEC</span>
          <span>ASTM INTERNATIONAL</span>
          <span>ASME COMPLIANT</span>
          <span>FDA APPROVED</span>
          <span>REACH/ROHS</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
