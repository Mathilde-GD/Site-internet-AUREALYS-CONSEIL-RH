/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { ServicesSection } from './components/ServicesSection';
import { CostCalculator } from './components/CostCalculator';
import { FormulasPricing } from './components/FormulasPricing';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { CaseStudies } from './components/CaseStudies';
import { AboutFounder } from './components/AboutFounder';
import { SocialLawNews } from './components/SocialLawNews';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { DigitalCourses } from './components/DigitalCourses';
import { BOOKING_URL } from './data/content';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'formations'>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingContext, setBookingContext] = useState<string>('');
  const [contactInitialSubject, setContactInitialSubject] = useState<string>('');

  const handleOpenBooking = (context?: string) => {
    // Open Microsoft Bookings URL directly in a new tab
    const link = document.createElement('a');
    link.href = BOOKING_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  const handleOpenQuiz = () => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById('simulateur-rh');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById('simulateur-rh');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setContactInitialSubject(serviceTitle);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFormula = (formulaName: string) => {
    setBookingContext(`Demande relative à la formule : ${formulaName}`);
    setIsBookingOpen(true);
  };

  const navigateToCourses = () => {
    setActiveView('formations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#111827]">
      {/* Top Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuiz={handleOpenQuiz}
        onNavigateToCourses={navigateToCourses}
        activeView={activeView}
      />

      <main className="flex-1">
        {activeView === 'formations' ? (
          <DigitalCourses
            onBackToMain={navigateToHome}
            onOpenBooking={() => handleOpenBooking('Demande de formation sur-mesure')}
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              onOpenBooking={() => handleOpenBooking('Diagnostic offert 30 min')}
              onOpenQuiz={handleOpenQuiz}
            />

            {/* Real Pain Points of TPE/PME Leaders */}
            <PainPoints
              onOpenBooking={() => handleOpenBooking()}
              onOpenQuiz={handleOpenQuiz}
            />

            {/* 5 Core Capabilities & Asymmetric Bento */}
            <ServicesSection
              onSelectService={handleSelectService}
              onOpenBooking={() => handleOpenBooking()}
              onNavigateToCourses={navigateToCourses}
            />

            {/* Cost & ROI Calculator */}
            <CostCalculator
              onOpenBooking={() => handleOpenBooking('Proposition DRH Temps Partagé')}
            />

            {/* Transparent Formulas */}
            <FormulasPricing
              onSelectFormula={handleSelectFormula}
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Interactive Self-Assessment Quiz */}
            <DiagnosticQuiz
              onOpenBookingWithContext={(notes) => handleOpenBooking(notes)}
            />

            {/* Latest Social Law & Labor News */}
            <SocialLawNews
              onOpenBookingWithContext={(notes) => handleOpenBooking(notes)}
            />

            {/* Verified Case Studies */}
            <CaseStudies />

            {/* About Mathilde Galland & Local Presence in Ain */}
            <AboutFounder
              onOpenBooking={() => handleOpenBooking('Échange découverte avec Mathilde Galland')}
            />

            {/* Frequently Asked Questions */}
            <FaqSection
              onOpenBooking={() => handleOpenBooking('Question spécifique')}
            />

            {/* Contact Form & 10-Point Checklist */}
            <ContactSection
              initialService={contactInitialSubject}
            />
          </>
        )}
      </main>

      {/* Quiet Footer with Legal Notices */}
      <Footer onNavigateToCourses={navigateToCourses} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialContext={bookingContext}
      />
    </div>
  );
}
