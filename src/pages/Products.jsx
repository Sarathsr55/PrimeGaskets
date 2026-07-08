import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Products.css';
import { productsData as products } from '../data/products';

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const highlightId = location.state?.highlightId;

  useEffect(() => {
    if (highlightId) {
      setTimeout(() => {
        const element = document.getElementById(`product-${highlightId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setTimeout(() => {
          navigate(location.pathname, { replace: true, state: {} });
        }, 3500); // Give the 3-second CSS animation time to play out
      }, 500);
    }
  }, [highlightId, navigate, location.pathname]);



  return (
    <div className="products-page">
      <section className="products-header container">
        <span className="subtitle-tag">ENGINEERING EXCELLENCE</span>
        <h1>High-Performance Industrial Gaskets</h1>
        <p>Precision-engineered sealing solutions for automotive, industrial, and aerospace applications. All materials ISO 9001:2015 certified for extreme reliability.</p>
      </section>

      <section className="products-grid-container container">
        <div className="pg-grid">
          {products.map(product => {
            const isTarget = highlightId === product.id;
            return (
            <div className={`pg-card ${isTarget ? 'pg-card-highlight' : ''}`} key={product.id} id={`product-${product.id}`}>
              <div className="pg-card-img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="pg-card-content">
                <div className="pg-card-header">
                  <h2>{product.name}</h2>
                  <span className="pg-tag">{product.tag}</span>
                </div>
                <p className="pg-desc">{product.desc}</p>
                <div className="pg-specs">
                  <span className="specs-title">SPECIFICATIONS</span>
                  {product.specs.map((spec, i) => (
                    <div className="pg-spec-row" key={i}>
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
            );
          })}
        </div>
      </section>

      <section className="custom-eng-section">
        <div className="container custom-eng-inner">
          <div className="ce-content">
            <h2>Custom Engineering Services</h2>
            <p>Cannot find a standard gasket for your application? Our engineering team utilizes state-of-the-art CNC and laser cutting technology to produce custom gaskets from your DXF/CAD files with tolerances as tight as ±0.05mm.</p>
            <div className="ce-badges">
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg> ISO 9001:2015</span>
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> CNC Precision</span>
            </div>
          </div>
          <div className="ce-form">
            <h3>Quick Inquiry</h3>
            <div className="form-group">
              <label>PROJECT NAME</label>
              <input type="text" placeholder="E.g. Marine Engine X-1" />
            </div>
            <div className="form-group">
              <label>MATERIAL PREFERENCE</label>
              <select>
                <option>Soft Gaskets</option>
                <option>MLS Gaskets</option>
                <option>Foam Coated</option>
                <option>Copper Gaskets</option>
                <option>Single Layer</option>
                <option>Asbestos Gaskets</option>
              </select>
            </div>
            <button className="btn btn-primary full-width">SEND TECHNICAL REQUEST</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
