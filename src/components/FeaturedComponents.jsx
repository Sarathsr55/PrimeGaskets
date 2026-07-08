import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedComponents.css';
import { productsData as products } from '../data/products';

const FeaturedComponents = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };



  return (
    <section className="featured-bg">
      <div className="container section-padding featured-components">
        <div className="fc-header">
          <h2>Featured Technical Components</h2>
          <div className="fc-nav">
            <button className="nav-btn" onClick={() => scroll('left')}>{'<'}</button>
            <button className="nav-btn" onClick={() => scroll('right')}>{'>'}</button>
          </div>
        </div>

        <div className="products-carousel-container" ref={scrollRef}>
          <div className="products-carousel">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <span className="series">{product.series}</span>
                  <h3>{product.name}</h3>
                  <div className="specs-table">
                    {product.specs.map((spec, i) => (
                      <div className="spec-row" key={i}>
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/products" state={{ highlightId: product.id }} className="btn btn-outline full-width" style={{ textAlign: 'center', display: 'block' }}>View Specs</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedComponents;
