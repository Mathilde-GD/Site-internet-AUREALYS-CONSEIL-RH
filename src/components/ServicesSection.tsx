import React, { useState } from 'react';
import { SERVICES, BOOKING_URL } from '../data/content';
import { ArrowRight, Check, Shield, Users, Briefcase, HeartHandshake, GraduationCap } from 'lucide-react';
import auditDeskImg from '../assets/images/audit_compliance_desk_1790933330696.jpg';
import consultingMeetingImg from '../assets/images/consulting_meeting_1790933319724.jpg';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
  onOpenBooking: () => void;
  onNavigateToCourses?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenBooking, onNavigateToCourses }) => {
  const [activeTab, setActiveTab] = useState(SERVICES[1].id); // DRH Temps Partagé selected by default

  const currentService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'securisation-juridique':
        return <Shield className="w-5 h-5" />;
      case 'drh-temps-partage':
        return <Briefcase className="w-5 h-5" />;
      case 'recrutement-marque-employeur':
        return <Users className="w-5 h-5" />;
      case 'situations-sensibles-relations-sociales':
        return <HeartHandshake className="w-5 h-5" />;
      case 'formation-accompagnement-managers':
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section id="expertises" className="py-24 bg-[#F8F7F4] border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#E7E5E4]">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#8C6D37] mb-2">
              Champs d'intervention AUREALYS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#0B192C] tracking-tight">
              Une expertise RH & juridique complète pour votre entreprise.
            </h2>
          </div>
          <div className="text-sm text-[#4B5563] max-w-sm lg:text-right">
            De la sécurisation juridique quotidienne au pilotage stratégique de votre politique RH, choisissez le niveau d'intervention qui correspond à votre stade de développement.
          </div>
        </div>

        {/* Capability Selectors (Interactive Tab Buttons) */}
        <div className="mt-8 flex flex-wrap gap-2 pb-2">
          {SERVICES.map((s) => {
            const isActive = s.id === activeTab;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-sm transition-all flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-[#0B192C] text-white border-[#0B192C] shadow-sm'
                    : 'bg-white text-[#4B5563] border-[#E5E7EB] hover:border-[#D1D5DB] hover:text-[#0B192C]'
                }`}
              >
                <span className="font-mono text-[11px] opacity-75">{s.number}.</span>
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Spotlight of Selected Service */}
        <div className="mt-8 bg-white rounded-lg border border-[#E7E5E4] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content Area (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#F6F1E7] text-[#9B773A] flex items-center justify-center border border-[#EADFCB]">
                  {getServiceIcon(currentService.id)}
                </div>
                <div className="text-xs uppercase tracking-widest font-mono text-[#8C6D37]">
                  Expertise {currentService.number} · {currentService.audience}
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#0B192C]">
                  {currentService.title}
                </h3>
                <p className="mt-2 text-base text-[#8C6D37] font-medium">
                  {currentService.tagline}
                </p>
                <p className="mt-4 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              {/* Concrete Outcomes */}
              <div className="pt-2 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#0B192C]">
                  Bénéfices directs pour votre entreprise :
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#374151]">
                      <Check className="w-4 h-4 text-[#B8935A] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="pt-2 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#0B192C]">
                  Livrables & interventions concrètes :
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-[#4B5563]">
                  {currentService.deliverables.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 bg-[#F9FAFB] border border-[#E5E7EB] rounded-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectService(currentService.title)}
                  className="px-5 py-3 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#152744] active:scale-[0.99] rounded-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Demander un échange sur ce sujet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#8C6D37] hover:text-[#0B192C] transition-colors"
                >
                  Prendre rendez-vous avec Mathilde Galland →
                </a>
                {onNavigateToCourses && (
                  <button
                    onClick={onNavigateToCourses}
                    className="text-xs font-semibold text-[#0B192C] hover:text-[#8C6D37] flex items-center gap-1.5 transition-colors cursor-pointer ml-auto"
                  >
                    <GraduationCap className="w-4 h-4 text-[#8C6D37]" />
                    <span>Découvrir les formations digitales en ligne →</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Side Visual Panel (5 cols) */}
            <div className="lg:col-span-5 bg-[#F6F4F0] p-6 lg:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E7E5E4]">
              
              <div className="rounded-md overflow-hidden border border-[#E7E5E4] shadow-sm mb-6">
                <img
                  src={
                    currentService.id === 'securisation-juridique'
                      ? auditDeskImg
                      : consultingMeetingImg
                  }
                  alt={currentService.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-56 sm:h-64 object-cover object-center"
                />
              </div>

              {/* Testimonial / Highlight Quote */}
              <div className="bg-white p-5 rounded-md border border-[#E8DFC8] space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#8C6D37]">
                  Garantie AUREALYS Conseil RH
                </div>
                <p className="text-xs sm:text-sm italic text-[#374151] leading-relaxed">
                  "Chaque préconisation est rédigée sur-mesure pour votre Convention Collective et la culture de votre entreprise. Pas de modèles génériques ni de réponses théoriques déconnectées du terrain."
                </p>
                <div className="pt-2 border-t border-[#F3F4F6] flex items-center justify-between text-[11px] text-[#6B7280]">
                  <span>Mathilde Galland</span>
                  <span>Juriste Droit Social</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 2-Column Asymmetric Highlight Bento */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8 p-8 rounded-lg bg-white border border-[#E7E5E4] shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-[#8C6D37] mb-2">
                02 · Focus Partenaire Clé
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0B192C]">
                La DRH à Temps Partagé : Pourquoi les PME l'adoptent ?
              </h3>
              <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
                Une PME de 15 à 50 salariés n'a pas la masse salariale suffisante pour justifier l'embauche d'un DRH à temps plein (salaire annuel moyen de 70k€ à 90k€ hors charges). Pourtant, elle affronte exactement les mêmes obligations juridiques et enjeux humains qu'une entreprise du CAC 40. La DRH à temps partagé vous apporte ce niveau d'expertise, exactement au prorata de vos besoins.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-[#F3F4F6] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-xs text-[#4B5563]">
                <span>· 1 à 4 jours / mois</span>
                <span>· Présence physique dans l'Ain</span>
                <span>· Suivi téléphonique illimité</span>
              </div>
              <button
                onClick={() => onSelectService('Direction RH à Temps Partagé')}
                className="text-xs font-semibold text-[#0B192C] hover:text-[#B8935A] transition-colors flex items-center gap-1 cursor-pointer"
              >
                Découvrir la formule temps partagé <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 p-8 rounded-lg bg-[#0B192C] text-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-[#CBB07E] mb-2">
                Audit Flash
              </div>
              <h3 className="text-xl font-serif font-semibold">
                Dossier sensible ou litige en cours ?
              </h3>
              <p className="mt-2 text-xs text-[#D1D5DB] leading-relaxed">
                Une rupture conventionnelle délicate, un refus d'avenant ou un avertissement à adresser sans risquer de nullité ? Nous vous répondons sous 24h.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-semibold text-[#0B192C] bg-[#CBB07E] hover:bg-[#D9C496] rounded-sm transition-colors text-center block"
              >
                Consulter en urgence (appel confidentiel)
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
