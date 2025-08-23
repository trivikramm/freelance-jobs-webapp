import React, { useEffect } from 'react';
import useReveal from './hooks/useReveal.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Opportunities from './components/Opportunities.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Companies from './components/Companies.jsx';
import CTA from './components/CTA.jsx';
import JoinChannels from './components/JoinChannels.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  // Attach reveal classes on mount to key sections
  useReveal();
  useEffect(() => {
    // Add reveal + stagger to key grids
    const mapSelectors = [
      '#features .container',
      '#opportunities .container',
      '#companies .container',
      '#how-it-works .container',
    ];
    mapSelectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) el.classList.add('reveal','fade-scale');
    });
    const grids = document.querySelectorAll('#features [data-grid], #opportunities [data-grid], #companies [data-grid], #how-it-works [data-steps]');
    grids.forEach(g => g.classList.add('stagger'));
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Opportunities />
        <Companies />
        <HowItWorks />
        <CTA />
        <JoinChannels />
      </main>
      <Footer />
    </>
  );
}

export default App;
