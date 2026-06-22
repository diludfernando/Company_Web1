import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscription successful for: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Left Side: Navigation Links & Copyright */}
        <div className="footer-left">
          <div className="footer-links">
            <a href="#legal" className="footer-link">Legal</a>
            <a href="#careers" className="footer-link">Careers</a>
            <a href="#support" className="footer-link">Support</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
          <p className="copyright-text">
            CEYNOVA DIGITAL SOLUTIONS ® All rights reserved.
          </p>
        </div>

        {/* Right Side: Subscription Form */}
        <div className="footer-right">
          <h4 className="subscribe-label">Subscribe for grid intelligence</h4>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Subscribe for grid intelligence" 
              className="subscribe-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="subscribe-btn">
              Submit
              <span className="btn-glow"></span>
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
