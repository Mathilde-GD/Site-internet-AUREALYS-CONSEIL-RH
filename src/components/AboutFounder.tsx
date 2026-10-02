import React from 'react';
import { FOUNDER_INFO } from '../data/content';
import { Scale, HeartHandshake, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import founderImg from '../assets/images/hero_aurealys_consulting_1790933304796.jpg';

interface AboutFounderProps {
  onOpenBooking: () => void;
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ onOpenBooking }) => {
  return (
    <section id="a-propos" className="py-24 bg-[#F8F7F4] border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image & Trust Column (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative rounded-lg overflow-hidden border border-[#E7E5E4] shadow-lg bg-[#EFECE6]">
                <img
                  src={founderImg}
                  alt="Mathilde Galland - Juriste en droit social et fondatrice d'AUREALYS Conseil RH"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="text-xl font-serif font-bold">Mathilde Galland</div>
                  <div className="text-xs text-[#E5D5BA] font-medium mt-0.5">
                    Juriste en Droit Social & Consultante RH
                  </div>
                  <div className="text-[11px] text-[#9CA3AF] mt-1">
                    Fondatrice d'AUREALYS Conseil RH · Département de l'Ain
                  </div>
                </div>
              </div>

              {/* Stat Highlight Card */}
              <div className="absolute -bottom-6 -right-4 bg-white p-4 rounded-md shadow-md border border-[#E7E5E4] hidden sm:block max-w-[220px]">
                <div className="text-xs font-bold text-[#0B192C]">Approche Terrain</div>
                <div className="text-[11px] text-[#4B5563] mt-1 leading-snug">
                  Allier la technicité du droit social à la réalité opérationnelle de l'entreprise.
                </div>
              </div>

            </div>
          </div>

          {/* Editorial Content (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="text-xs uppercase tracking-widest font-semibold text-[#8C6D37]">
              Fondatrice & Philosophie
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#0B192C] tracking-tight leading-tight">
              "Les dirigeants de TPE et PME méritent une expertise RH d'excellence, accessible et humaine."
            </h2>

            <p className="text-base text-[#4B5563] leading-relaxed">
              {FOUNDER_INFO.bioShort}
            </p>

            <p className="text-sm text-[#4B5563] leading-relaxed">
              Trop souvent, les chefs d'entreprise se sentent isolés face aux évolutions permanentes du droit social et aux difficultés managériales. Entre les cabinets d'avocats souvent onéreux et peu connectés au quotidien, et les modèles de contrats hasardeux trouvés sur internet, il manquait un <strong className="text-[#0B192C]">partenaire de confiance opérationnel</strong>, capable de s'asseoir à votre table pour régler les vrais problèmes.
            </p>

            {/* 3 Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-white rounded border border-[#E7E5E4] space-y-1.5">
                <div className="w-8 h-8 rounded bg-[#F6F1E7] text-[#9B773A] flex items-center justify-center">
                  <Scale className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-[#0B192C]">Rigueur Juridique</div>
                <div className="text-[11px] text-[#6B7280]">
                  Formée au droit social, chaque acte est verrouillé pour prévenir tout contentieux.
                </div>
              </div>

              <div className="p-4 bg-white rounded border border-[#E7E5E4] space-y-1.5">
                <div className="w-8 h-8 rounded bg-[#F6F1E7] text-[#9B773A] flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-[#0B192C]">Pragmatisme Métier</div>
                <div className="text-[11px] text-[#6B7280]">
                  Des solutions concrètes qui tiennent compte de votre trésorerie et de votre équipe.
                </div>
              </div>

              <div className="p-4 bg-white rounded border border-[#E7E5E4] space-y-1.5">
                <div className="w-8 h-8 rounded bg-[#F6F1E7] text-[#9B773A] flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-[#0B192C]">Écoute & Proximité</div>
                <div className="text-[11px] text-[#6B7280]">
                  Une présence régulière sur site dans l'Ain et un lien direct avec vous.
                </div>
              </div>
            </div>

            {/* Region trust details */}
            <div className="pt-4 border-t border-[#E7E5E4] space-y-2 text-xs text-[#4B5563]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8935A] shrink-0" />
                <span><strong>Zone d'intervention prioritaire :</strong> Bourg-en-Bresse, Plaine de l'Ain, Ambérieu, Oyonnax, Pays de Gex, Lyon et région Auvergne-Rhône-Alpes.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8935A] shrink-0" />
                <span><strong>Interventions à distance :</strong> Disponible pour les entreprises de toute la France en visioconférence sécurisée.</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={FOUNDER_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#152744] active:scale-[0.99] rounded-sm transition-all inline-flex items-center gap-2 shadow-sm"
              >
                <span>Faire connaissance lors d'un appel découverte offert</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
