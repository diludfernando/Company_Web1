import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoreInfrastructure from './components/CoreInfrastructure';
import TelemetryDashboard from './components/TelemetryDashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-root">
      <Header />
      <main style={{ paddingTop: '70px' }}>
        <Hero />
        <CoreInfrastructure />
        <TelemetryDashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
