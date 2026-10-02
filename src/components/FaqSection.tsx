import React, { useState } from 'react';
import { FAQS, BOOKING_URL } from '../data/content';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<'all' | 'juridique' | 'pratique' | 'organisation'>('all');

  const filteredFaqs = filter === 'all' 
    ? FAQS 
    : FAQS.filter(f => f.category === filter);

  return (
    <section id="faq" className="py-24 bg-[#FAF9F6] border-b border-[#E7E5E4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#8C6D37] mb-2">
            Questions fréquentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#0B192C]">
            Tout ce que vous devez savoir sur nos interventions
          </h2>
          <p className="mt-3 text-sm text-[#4B5563]">
            Des réponses claires à vos interrogations sur la réglementation sociale, le déroulement d'une mission et nos modalités de collaboration.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-[#0B192C] text-white'
                : 'bg-white text-[#4B5563] border border-[#E5E7EB] hover:text-[#0B192C]'
            }`}
          >
            Toutes les questions
          </button>
          <button
            onClick={() => setFilter('juridique')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
              filter === 'juridique'
                ? 'bg-[#0B192C] text-white'
                : 'bg-white text-[#4B5563] border border-[#E5E7EB] hover:text-[#0B192C]'
            }`}
          >
            Droit social & Obligations
          </button>
          <button
            onClick={() => setFilter('pratique')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
              filter === 'pratique'
                ? 'bg-[#0B192C] text-white'
                : 'bg-white text-[#4B5563] border border-[#E5E7EB] hover:text-[#0B192C]'
            }`}
          >
            Fonctionnement Temps Partagé
          </button>
          <button
            onClick={() => setFilter('organisation')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
              filter === 'organisation'
                ? 'bg-[#0B192C] text-white'
                : 'bg-white text-[#4B5563] border border-[#E5E7EB] hover:text-[#0B192C]'
            }`}
          >
            Zone d'intervention & Contrats
          </button>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-md border border-[#E7E5E4] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF9F6] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#0B192C]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8C6D37] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#F3F4F6] animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct contact note */}
        <div className="mt-10 p-5 rounded-md bg-white border border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4B5563]">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#B8935A]" />
            <span>Vous avez une question spécifique sur votre Convention Collective ou votre situation ?</span>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0B192C] hover:text-[#B8935A] transition-colors whitespace-nowrap"
          >
            Poser ma question à Mathilde Galland →
          </a>
        </div>

      </div>
    </section>
  );
};
