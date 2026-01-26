import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProofStrip from './components/SocialProofStrip';
import EligibilityBar from './components/EligibilityBar';
import Benefits from './components/Benefits';
import ProductCards from './components/ProductCards';
import Repatriation from './components/Repatriation';
import TrustStrip from './components/TrustStrip';
import FAQLayout from './components/FAQ';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact';
import QuickQuoteForm from './components/QuickQuoteForm';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <SocialProofStrip />
        <EligibilityBar />
        <Benefits />
        <ProductCards />
        <Repatriation />
        <TrustStrip />
        <FAQLayout />
      </main>
      <Footer />
      <StickyContact />
      <QuickQuoteForm />
    </div>
  );
}

export default App;
