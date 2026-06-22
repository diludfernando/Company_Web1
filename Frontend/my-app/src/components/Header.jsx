import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav-left">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#case-studies" className="nav-link">Case Studies</a>
        </nav>

        <div className="logo-container">
          <svg className="header-logo-svg" viewBox="0 0 250 50" width="160" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Small version of logo icon */}
            <g transform="translate(0, 5)">
              <circle cx="20" cy="20" r="16" stroke="url(#logo-grad-header)" strokeWidth="3.5" fill="none" strokeDasharray="75 25" strokeDashoffset="20" />
              <circle cx="20" cy="20" r="10" stroke="#00d2ff" strokeWidth="2" fill="none" />
              {/* Nodes and circuit lines */}
              <line x1="0" y1="20" x2="10" y2="20" stroke="#00d2ff" strokeWidth="2" />
              <circle cx="2" cy="20" r="2" fill="#00d2ff" />
              <line x1="4" y1="12" x2="12" y2="16" stroke="#00d2ff" strokeWidth="1.5" />
              <circle cx="4" cy="12" r="1.5" fill="#00d2ff" />
              <line x1="4" y1="28" x2="12" y2="24" stroke="#00d2ff" strokeWidth="1.5" />
              <circle cx="4" cy="28" r="1.5" fill="#00d2ff" />
            </g>
            {/* Logo text */}
            <text x="45" y="27" fontFamily="'Outfit', sans-serif" fontSize="22" fontWeight="800" letterSpacing="1.5" fill="#ffffff">
              CEYNO
              <tspan fill="#00d2ff">VA</tspan>
            </text>
            <text x="45" y="38" fontFamily="'Inter', sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="3.8" fill="#94a3b8">
              DIGITAL SOLUTIONS
            </text>
            <defs>
              <linearGradient id="logo-grad-header" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0066ff" />
                <stop offset="100%" stopColor="#00d2ff" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <nav className="nav-right">
          <a href="#about" className="nav-link">About</a>
          <a href="#login" className="nav-link nav-login">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
