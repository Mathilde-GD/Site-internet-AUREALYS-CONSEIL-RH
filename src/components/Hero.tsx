import React from 'react';
import { ArrowRight, ShieldCheck, Scale, Clock, CheckCircle2 } from 'lucide-react';
import { BOOKING_URL } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenQuiz }) => {
  return (
    <section id="top" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FBFBFA] via-[#F8F7F4] to-[#F3F2EE] border-b border-[#E7E5E4]">
      {/* Subtle architectural hairline accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subtitle / Trust Kicker (No Pill Enclosure) */}
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C6D37] mb-6">
          <span>Cabinet de Conseil RH & Droit Social</span>
          <span aria-hidden="true" className="text-[#D1D5DB]">·</span>
          <span>Pour Dirigeants de TPE et PME</span>
          <span aria-hidden="true" className="text-[#D1D5DB]">·</span>
          <span>Ain & Auvergne-Rhône-Alpes</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#0B192C] font-semibold tracking-tight leading-[1.12] text-balance">
              Sécurisez vos décisions RH. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#1E375E]">Structurez votre croissance en toute sérénité.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4B5563] leading-relaxed max-w-2xl font-normal">
              Accédez à l'expertise d'une <strong className="text-[#0B192C] font-semibold">Directrice des Ressources Humaines & Juriste en droit social</strong> sans la charge fixe d'un poste à temps plein. Interventions sur-mesure à temps partagé ou en missions ciblées pour les TPE & PME.
            </p>

            {/* Key Value Points (Clean unboxed rows) */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#374151]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#B8935A] shrink-0 mt-0.5" />
                <span><strong>Zéro risque prud'homal</strong> grâce à des contrats et procédures blindés</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#B8935A] shrink-0 mt-0.5" />
                <span><strong>Gain de temps immédiat</strong> pour vous recentrer sur votre activité</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#B8935A] shrink-0 mt-0.5" />
                <span><strong>DRH dédiée et réactive</strong> sur site dans l'Ain ou à distance</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#B8935A] shrink-0 mt-0.5" />
                <span><strong>Tarification transparente</strong> sans engagement de durée contraignant</span>
              </div>
            </div>

            {/* Actions Block */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#152744] active:scale-[0.99] rounded-sm transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Réserver un diagnostic offert (30 min)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenQuiz}
                className="px-6 py-3.5 text-sm font-semibold text-[#0B192C] bg-white hover:bg-[#F3F4F6] border border-[#D1D5DB] rounded-sm transition-colors text-center cursor-pointer shadow-xs"
              >
                Évaluer mes risques RH (2 min)
              </button>
            </div>

            {/* Quiet Attribution Line */}
            <div className="pt-3 text-xs text-[#6B7280] flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#B8935A]" />
              <span>Accompagnement fondé par <strong>Mathilde Galland</strong>, Juriste en Droit Social</span>
              <span aria-hidden="true">·</span>
              <span>Échange confidentiel & sans engagement</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (Dominant Focal Carrier) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative subtle gold border offset */}
              <div className="absolute -inset-2 rounded-lg border border-[#B8935A]/30 pointer-events-none hidden sm:block transform translate-x-2 translate-y-2" />

              {/* Main Image Container */}
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-[#E7E5E4] bg-[#EAE8E2]">
                <img
                  src="/src/assets/images/hero_aurealys_consulting_1790933304796.jpg"
                  alt="Consultation RH et conseil stratégique en droit social avec Mathilde Galland"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                />

                {/* Scrim overlay for high legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/85 via-[#0B192C]/20 to-transparent" />

                {/* Floating quiet credentials banner at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#E5D5BA] mb-1">
                    <span>AUREALYS Conseil RH</span>
                    <span>Ain · Rhône-Alpes</span>
                  </div>
                  <p className="text-base font-serif font-medium text-white">
                    "La rigueur juridique d'un cabinet, la proximité humaine d'un partenaire de confiance."
                  </p>
                  <p className="text-xs text-[#D1D5DB] mt-1">
                    Mathilde Galland — Fondatrice
                  </p>
                </div>
              </div>

              {/* Verified Trust Badge Floating (Single elevation) */}
              <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-md shadow-lg border border-[#E7E5E4]">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F0] flex items-center justify-center text-[#B8935A] border border-[#E8DFC8]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B192C]">100% Conformité Sociale</div>
                  <div className="text-[11px] text-[#6B7280]">Prévention active des prud'hommes</div>
                </div>
              </div>

              {/* Fractional HR Badge Bottom Right */}
              <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-md shadow-lg border border-[#E7E5E4]">
                <div className="w-10 h-10 rounded-full bg-[#0B192C] flex items-center justify-center text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B192C]">DRH à Temps Partagé</div>
                  <div className="text-[11px] text-[#6B7280]">1 à 4 jours par mois selon vos besoins</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
