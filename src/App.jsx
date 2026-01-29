import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EligibilityOverview from './components/EligibilityOverview';
import StatsStrip from './components/StatsStrip';
import Benefits from './components/Benefits';
import ProductCards from './components/ProductCards';
import TaxationHighlight from './components/TaxationHighlight';
import Repatriation from './components/Repatriation';
import BottomBanner from './components/BottomBanner';
import FAQLayout from './components/FAQ';
import DisclaimerStrip from './components/DisclaimerStrip';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <EligibilityOverview />
        <Benefits />
        <ProductCards />
        <TaxationHighlight />
        <Repatriation />
        <BottomBanner />
        <FAQLayout />
        <DisclaimerStrip />
      </main>
      <Footer />
    </div>
  );
}

export default App;
