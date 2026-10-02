import React, { useState } from 'react';
import { PhoneCall, Menu, X, ArrowRight } from 'lucide-react';
import { FOUNDER_INFO } from '../data/content';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
  onNavigateToCourses?: () => void;
  activeView?: 'home' | 'formations';
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenQuiz, onNavigateToCourses, activeView = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/90 backdrop-blur-md border-b border-[#E7E5E4] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          className="text-lg sm:text-xl font-bold tracking-wider font-brand text-[#0B192C] flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#B8935A] inline-block group-hover:scale-125 transition-transform" />
          <span>AUREALYS CONSEIL RH</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4B5563]">
          <button
            onClick={onNavigateToCourses}
            className={`py-1 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeView === 'formations' ? 'text-[#0B192C] font-bold' : 'hover:text-[#0B192C]'
            }`}
          >
            <span>Formations Digitales</span>
            <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase bg-[#FAF7F0] text-[#8C6D37] border border-[#E8DFC8] rounded font-bold">
              Nouveau
            </span>
          </button>
          <a href="#expertises" className="hover:text-[#0B192C] transition-colors py-1">
            Expertises
          </a>
          <a href="#formules" className="hover:text-[#0B192C] transition-colors py-1">
            Formules & Tarifs
          </a>
          <button 
            onClick={onOpenQuiz} 
            className="hover:text-[#0B192C] transition-colors py-1 font-semibold text-[#B8935A] cursor-pointer"
          >
            Simulateur RH
          </button>
          <a href="#actualites" className="hover:text-[#0B192C] transition-colors py-1">
            Actualités
          </a>
          <a href="#cas-clients" className="hover:text-[#0B192C] transition-colors py-1">
            Cas Clients
          </a>
          <a href="#a-propos" className="hover:text-[#0B192C] transition-colors py-1">
            À Propos
          </a>
          <a href="#faq" className="hover:text-[#0B192C] transition-colors py-1">
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${FOUNDER_INFO.phone.replace(/\s/g, '')}`}
            className="text-xs font-semibold text-[#4B5563] hover:text-[#0B192C] flex items-center gap-1.5 px-3 py-2 transition-colors"
            title="Appeler Mathilde Galland"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#B8935A]" />
            <span>{FOUNDER_INFO.phone}</span>
          </a>
          
          <a
            href={FOUNDER_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#152744] active:scale-[0.99] rounded-sm transition-all duration-200 shadow-sm whitespace-nowrap flex items-center gap-2"
          >
            <span>Diagnostic Offert (30 min)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0B192C] hover:bg-[#F3F4F6] rounded-md transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBFBFA] border-b border-[#E7E5E4] px-6 py-6 space-y-4 animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#374151]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToCourses?.();
              }}
              className="text-left py-1 text-[#0B192C] font-bold flex items-center justify-between"
            >
              <span>Formations Digitales</span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase bg-[#FAF7F0] text-[#8C6D37] border border-[#E8DFC8] rounded">
                Nouveau
              </span>
            </button>
            <a 
              href="#expertises" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0B192C]"
            >
              Expertises RH & Droit Social
            </a>
            <a 
              href="#formules" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0B192C]"
            >
              Nos Formules & Modalités
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="text-left py-1 text-[#B8935A] font-semibold"
            >
              Simulateur de Risque RH (2 min)
            </button>
            <a 
              href="#actualites" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0B192C]"
            >
              Actualités en Droit Social
            </a>
            <a 
              href="#cas-clients" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0B192C]"
            >
              Cas Clients & Résultats
            </a>
            <a 
              href="#a-propos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0B192C]"
            >
              À Propos de Mathilde Galland
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0B192C]"
            >
              Questions Fréquentes (FAQ)
            </a>
          </nav>
          
          <div className="pt-4 border-t border-[#E7E5E4] space-y-3">
            <a
              href={FOUNDER_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-sm font-semibold text-white bg-[#0B192C] rounded-sm text-center block"
            >
              Réserver mon diagnostic offert (30 min)
            </a>
            <a
              href={`tel:${FOUNDER_INFO.phone.replace(/\s/g, '')}`}
              className="w-full py-2.5 text-xs font-medium text-[#0B192C] bg-[#F4F3F0] rounded-sm text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#B8935A]" />
              {FOUNDER_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
