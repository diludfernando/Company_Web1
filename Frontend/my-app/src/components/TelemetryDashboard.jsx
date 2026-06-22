import React, { useState, useEffect } from 'react';
import './TelemetryDashboard.css';

const TelemetryDashboard = () => {
  // Live states for telemetry simulation
  const [qpuCoreTemp, setQpuCoreTemp] = useState(43.0);
  const [nodeDuration, setNodeDuration] = useState(23.23);
  const [clusteringSpeed, setClusteringSpeed] = useState(357);
  const [chartData, setChartData] = useState([30, 45, 35, 60, 55, 70, 65, 80, 75, 90]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate slight fluctuations in telemetry
      setQpuCoreTemp(prev => parseFloat((prev + (Math.random() * 0.4 - 0.2)).toFixed(1)));
      setNodeDuration(prev => parseFloat((prev + (Math.random() * 0.1 - 0.05)).toFixed(2)));
      setClusteringSpeed(prev => Math.floor(prev + (Math.random() * 10 - 5)));
      
      // Update chart data points
      setChartData(prev => {
        const next = [...prev.slice(1)];
        const last = prev[prev.length - 1];
        const nextVal = Math.min(100, Math.max(10, last + Math.floor(Math.random() * 20 - 10)));
        next.push(nextVal);
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Convert chartData array to an SVG path string
  const generatePath = () => {
    const width = 360;
    const height = 120;
    const padding = 10;
    const step = (width - padding * 2) / (chartData.length - 1);
    
    return chartData.map((val, index) => {
      const x = padding + index * step;
      // Invert height since SVG y goes down
      const y = height - padding - (val / 100) * (height - padding * 2);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  return (
    <div className="telemetry-section" id="telemetry">
      <div className="telemetry-container">
        
        {/* Info panel */}
        <div className="telemetry-info">
          <h2 className="telemetry-title">System Telemetry dashboard</h2>
          <p className="telemetry-subtitle">
            View live performance statistics using the detailed telemetry matrix from the system reference.
          </p>
        </div>

        {/* Dashboard Mockup Panel */}
        <div className="dashboard-window">
          {/* Window Header */}
          <div className="window-header">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="window-title">Dashboard - Active Session</div>
            <div className="window-status">
              <span className="status-indicator-active"></span> LIVE
            </div>
          </div>

          {/* Grid Layout inside Window */}
          <div className="dashboard-content">
            {/* Top Left: Graph */}
            <div className="dash-card graph-card">
              <div className="dash-card-header">
                <span>Qubit Coherence</span>
                <span className="cyan-text">REALTIME</span>
              </div>
              <div className="chart-container">
                <svg viewBox="0 0 360 120" className="chart-svg">
                  <defs>
                    <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0066ff" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="360" y2="30" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="60" x2="360" y2="60" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="90" x2="360" y2="90" stroke="rgba(255,255,255,0.05)" />

                  {/* Area fill */}
                  <path d={`${generatePath()} L 350 110 L 10 110 Z`} fill="url(#chart-grad)" />

                  {/* Line path */}
                  <path d={generatePath()} fill="none" stroke="#00d2ff" strokeWidth="2.5" />
                </svg>
              </div>
            </div>

            {/* Metrics Sidebar */}
            <div className="metrics-sidebar">
              <div className="dash-card metric-card">
                <span className="metric-label">QPU Core Temp</span>
                <span className="metric-value">{qpuCoreTemp.toFixed(1)}°C</span>
                <span className="metric-trend green">↑ 1.2%</span>
              </div>

              <div className="dash-card metric-card">
                <span className="metric-label">Node Duration Limit</span>
                <span className="metric-value">{nodeDuration.toFixed(2)}ms</span>
                <span className="metric-trend cyan">Optimal</span>
              </div>

              <div className="dash-card metric-card">
                <span className="metric-label">Clustering Speed</span>
                <span className="metric-value">{clusteringSpeed} ops/s</span>
                <span className="metric-trend green">↑ 14%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TelemetryDashboard;
