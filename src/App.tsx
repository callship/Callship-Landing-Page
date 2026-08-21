import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PsychologySection } from './components/PsychologySection';
import { OrbitalSystemExplainer } from './components/OrbitalSystemExplainer';
import { SprintCallDeepDive } from './components/SprintCallDeepDive';
import { GamificationSection } from './components/GamificationSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDownload = () => {
    const el = document.getElementById('download-options') || document.getElementById('download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white relative">
      
      {/* Top Header */}
      <Header
        onOpenDownload={scrollToDownload}
        onOpenPricing={scrollToPricing}
      />

      <main>
        {/* 1. Hero Section with Interactive Spotlight Card */}
        <HeroSection
          onOpenPricing={scrollToPricing}
        />

        {/* 2. ADHD Psychology & Guilt Spiral Breakdown */}
        <PsychologySection />

        {/* 3. Cosmic Solar System & Orbital Relationship Circles */}
        <OrbitalSystemExplainer />

        {/* 4. 2-Minute Micro Call Sprint Deep Dive */}
        <SprintCallDeepDive />

        {/* 5. 100 Ranks & Gamification Architecture */}
        <GamificationSection />

        {/* 6. 100% Free App Details & Optional Coffee Tip Jar */}
        <PricingSection />

        {/* 7. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

