import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="logo-white">
            <strong>PRIME GASKETS</strong>
          </div>
          <p className="copyright">© 2024 Precision Sealed Manufacturing. All rights reserved. ISO 9001:2015 Certified.</p>
        </div>
        
        <div className="footer-right">
          <nav className="footer-links">
            <a href="#">PROTOTYPING</a>
            <a href="#">ENGINEERING DATA</a>
            <a href="#">TERMS OF SALE</a>
            <a href="#">PRIVACY POLICY</a>
          </nav>
          <div className="footer-icons">
            <span className="icon">🌐</span>
            <span className="icon">in</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
