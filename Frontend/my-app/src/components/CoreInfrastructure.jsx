import React from 'react';
import './CoreInfrastructure.css';

const CoreInfrastructure = () => {
  const items = [
    {
      title: 'Quantum Cloud Integration',
      description: 'Seamlessly integrate public and private quantum processing units into a unified compute matrix for massive parallel workloads.',
      icon: (
        <svg className="card-icon-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stacked Layers / Quantum Cloud Icon */}
          <path d="M24 6L6 15L24 24L42 15L24 6Z" stroke="#00d2ff" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M6 24.5L24 33.5L42 24.5" stroke="#0066ff" strokeWidth="2.5" strokeLinejoin="round" opacity="0.8" />
          <path d="M6 34L24 43L42 34" stroke="#0066ff" strokeWidth="2.5" strokeLinejoin="round" opacity="0.5" />
          <path d="M24 15V24" stroke="#00d2ff" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      title: 'Zero-Trust Security',
      description: 'Multi-layered, continuous authentication across all decentralized layers of the quantum compute infrastructure.',
      icon: (
        <svg className="card-icon-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield Icon */}
          <path d="M24 4L8 10V22C8 33.5 14.8 40.8 24 44C33.2 40.8 40 33.5 40 22V10L24 4Z" stroke="#00d2ff" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Lock outline */}
          <rect x="18" y="24" width="12" height="9" rx="1.5" stroke="#0066ff" strokeWidth="2" />
          <path d="M21 24V20C21 18.3 22.3 17 24 17C25.7 17 27 18.3 27 20V24" stroke="#0066ff" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: 'Automated DevOps',
      description: 'AI-powered, self-optimizing quantum node orchestration and CI/CD pipelines with comprehensive automated management.',
      icon: (
        <svg className="card-icon-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Gear / Circle Circuit Layout */}
          <circle cx="24" cy="24" r="12" stroke="#00d2ff" strokeWidth="2.5" />
          <path d="M24 6V12M24 36V42M6 24H12M36 24H42" stroke="#0066ff" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M11.3 11.3L15.5 15.5M32.5 32.5L36.7 36.7M11.3 36.7L15.5 32.5M32.5 15.5L36.7 11.3" stroke="#0066ff" strokeWidth="2.5" strokeLinecap="round" />
          {/* Code/Terminal brackets inside gear */}
          <path d="M20 21L17 24L20 27" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 21L31 24L28 27" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="infra-container">
      <h2 className="infra-title">Core Infrastructure</h2>
      <div className="infra-grid">
        {items.map((item, index) => (
          <div className="infra-card" key={index}>
            <div className="card-icon-wrapper">
              {item.icon}
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
            <div className="card-glowing-effect"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreInfrastructure;
