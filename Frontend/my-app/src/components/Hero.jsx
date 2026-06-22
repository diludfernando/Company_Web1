import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Background Cyber Chamber / Capsule */}
      <div className="chamber-glow-container">
        <div className="chamber-top-ring"></div>
        <div className="chamber-capsule">
          <div className="chamber-beam"></div>
          
          {/* Main Logo Shield */}
          <div className="main-logo-shield">
            <svg className="hero-logo-svg" viewBox="0 0 400 400" width="300" height="300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="c-grad" x1="100" y1="100" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0066ff" />
                  <stop offset="50%" stopColor="#00d2ff" />
                  <stop offset="100%" stopColor="#0066ff" />
                </linearGradient>
                <filter id="glow-heavy" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="12" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glow-light" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Glowing Outer Rings */}
              <circle cx="200" cy="180" r="130" stroke="url(#c-grad)" strokeWidth="1.5" strokeDasharray="5 15" opacity="0.3" />
              <circle cx="200" cy="180" r="115" stroke="#00d2ff" strokeWidth="1" strokeDasharray="40 10 5 10" opacity="0.5" />
              <circle cx="200" cy="180" r="100" stroke="#0066ff" strokeWidth="2" strokeDasharray="180 30" opacity="0.4" />

              {/* The Central stylized C logo */}
              <g filter="url(#glow-heavy)">
                {/* Thick styled C shape */}
                <path d="M 230 115 
                         A 70 70 0 1 0 230 245" 
                      stroke="url(#c-grad)" 
                      strokeWidth="24" 
                      strokeLinecap="round" 
                      fill="none" />
              </g>

              {/* Internal Cyan core of the C for intensity */}
              <path d="M 230 115 
                       A 70 70 0 1 0 230 245" 
                    stroke="#ffffff" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    fill="none" 
                    opacity="0.9"
                    filter="url(#glow-light)" />

              {/* Nodes and circuit lines branching off C */}
              <g stroke="#00d2ff" strokeWidth="3" strokeLinecap="round" filter="url(#glow-light)">
                {/* Horizontal branch */}
                <line x1="130" y1="180" x2="90" y2="180" />
                <circle cx="85" cy="180" r="5" fill="#00d2ff" />
                <circle cx="85" cy="180" r="9" stroke="#00d2ff" strokeWidth="1.5" fill="none" opacity="0.5" />
                
                {/* Top diagonal branch */}
                <path d="M 145 145 L 115 145 L 95 125" fill="none" />
                <circle cx="90" cy="120" r="5" fill="#00d2ff" />
                
                {/* Bottom diagonal branch */}
                <path d="M 145 215 L 115 215 L 95 235" fill="none" />
                <circle cx="90" cy="240" r="5" fill="#00d2ff" />
              </g>

              {/* Text CEYNOVA */}
              <text x="200" y="325" fontFamily="'Outfit', sans-serif" fontSize="42" fontWeight="900" letterSpacing="4" fill="#ffffff" textAnchor="middle">
                CEYNO
                <tspan fill="#00d2ff">VA</tspan>
              </text>

              {/* Text DIGITAL SOLUTIONS */}
              <text x="200" y="355" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="700" letterSpacing="6" fill="#94a3b8" textAnchor="middle" opacity="0.8">
                DIGITAL SOLUTIONS
              </text>

              {/* Line under Logo */}
              <line x1="120" y1="375" x2="280" y2="375" stroke="url(#c-grad)" strokeWidth="2.5" opacity="0.7" />
            </svg>
          </div>
        </div>
        <div className="chamber-bottom-ring"></div>
      </div>

      {/* Hero Headings and Copy */}
      <div className="hero-content">
        <h1 className="hero-title">Quantum-Powered Enterprise Solutions.</h1>
        <p className="hero-subtitle">
          Resilient, decentralized quantum-ready infrastructure and robust multi-layered
          cybersecurity, delivering unprecedented agility for global enterprise.
        </p>
        
        {/* Call to Actions */}
        <div className="hero-actions">
          <button className="btn btn-primary">Launch Console</button>
          <button className="btn btn-outline">Book a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
