import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  
  const searchRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isProductsPage = location.pathname === '/products';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(e.target.value.length > 0);
  };

  const handleResultClick = (id) => {
    setSearchTerm('');
    setShowDropdown(false);
    navigate('/products', { state: { highlightId: id } });
  };

  const searchResults = productsData.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (p.tag && p.tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (p.series && p.series.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Determine classes
  let headerClass = 'header';
  if (scrolled) {
    headerClass += ' header-scrolled';
  } else if (isProductsPage) {
    headerClass += ' header-dark-text';
  }

  return (
    <header className={headerClass}>
      <div className="container header-inner">
        <div className="logo">
          <strong>PRIME GASKETS</strong>
        </div>
        
        <nav className="main-nav">
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <div className="search-container" ref={searchRef}>
            <div className="search-bar">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder="Search product..." value={searchTerm} onChange={handleSearchChange} onFocus={() => { if(searchTerm) setShowDropdown(true) }} />
            </div>
            {showDropdown && (
              <div className="search-dropdown">
                {searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map(res => (
                      <li key={res.id} onClick={() => handleResultClick(res.id)}>
                        <img src={res.image} alt={res.name} />
                        <div className="search-res-info">
                          <span className="res-name">{res.name}</span>
                          <span className="res-tag">{res.tag || res.series}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="no-results">No products found</div>
                )}
              </div>
            )}
          </div>
          <Link to="/contact#quote" className="btn btn-primary"><span className="quote-text-full">Request a </span>Quote</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

