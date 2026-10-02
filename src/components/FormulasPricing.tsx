import React from 'react';
import { FORMULAS, FOUNDER_INFO, BOOKING_URL } from '../data/content';
import { Check, ArrowRight, Star } from 'lucide-react';

interface FormulasPricingProps {
  onSelectFormula: (formulaName: string) => void;
  onOpenBooking: () => void;
}

export const FormulasPricing: React.FC<FormulasPricingProps> = ({ onSelectFormula, onOpenBooking }) => {
  return (
    <section id="formules" className="py-24 bg-white border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#8C6D37] mb-2">
            Modalités d'accompagnement
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#0B192C] tracking-tight">
            Des formules souples, transparentes et sans surprise.
          </h2>
          <p className="mt-4 text-base text-[#4B5563]">
            Que vous ayez besoin d'éteindre un feu juridique urgent, de sécuriser votre conformité ou de structurer vos RH dans la durée, AUREALYS s'adapte à votre rythme.
          </p>
        </div>

        {/* 3 Formula Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {FORMULAS.map((pkg) => {
            const isFeatured = pkg.id === 'temps-partage';

            return (
              <div
                key={pkg.id}
                className={`rounded-lg transition-all duration-200 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-[#0B192C] text-white p-8 lg:p-9 shadow-xl border-2 border-[#B8935A] relative lg:-translate-y-2'
                    : 'bg-[#FAF9F6] text-[#111827] p-8 border border-[#E7E5E4] hover:border-[#D1D5DB]'
                }`}
              >
                {/* Badge if featured */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B8935A] text-[#0B192C] text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-[#0B192C]" />
                    <span>Formule la plus plébiscitée</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className={`text-xl font-serif font-bold ${isFeatured ? 'text-white' : 'text-[#0B192C]'}`}>
                      {pkg.name}
                    </h3>
                  </div>

                  <p className={`text-xs ${isFeatured ? 'text-[#D1D5DB]' : 'text-[#4B5563]'} leading-relaxed mb-4 min-h-[36px]`}>
                    {pkg.subtitle}
                  </p>

                  <div className={`p-3 rounded mb-6 text-xs font-medium ${
                    isFeatured ? 'bg-white/10 text-[#E5D5BA]' : 'bg-[#F2EDE2] text-[#8C6D37]'
                  }`}>
                    {pkg.recommendedFor}
                  </div>

                  {/* Highlights unboxed */}
                  <div className={`text-xs pb-4 mb-4 border-b flex flex-wrap gap-2 ${
                    isFeatured ? 'border-white/15 text-[#CBB07E]' : 'border-[#E7E5E4] text-[#8C6D37]'
                  }`}>
                    {pkg.highlights.map((h, i) => (
                      <span key={i}>
                        {h} {i < pkg.highlights.length - 1 ? '·' : ''}
                      </span>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className={`text-xs font-bold uppercase tracking-wider ${
                      isFeatured ? 'text-white' : 'text-[#0B192C]'
                    }`}>
                      Inclus dans cette formule :
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isFeatured ? 'text-[#CBB07E]' : 'text-[#9B773A]'}`} />
                        <span className={isFeatured ? 'text-[#E5E7EB]' : 'text-[#374151]'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 border-t border-current/10">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 text-xs font-semibold rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm ${
                      isFeatured
                        ? 'bg-[#CBB07E] text-[#0B192C] hover:bg-[#D9C496]'
                        : 'bg-[#0B192C] text-white hover:bg-[#152744]'
                    }`}
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <p className={`text-[11px] text-center mt-2.5 ${isFeatured ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                    Échange initial de cadrage de 30 min offert
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-16 p-6 rounded-md bg-[#FAF9F6] border border-[#E7E5E4] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#4B5563]">
          <div className="flex flex-wrap items-center gap-6">
            <span>✓ Aucun frais de dossier caché</span>
            <span>✓ Devis détaillé avant tout engagement</span>
            <span>✓ Respect strict de la confidentialité et du secret des affaires</span>
            <span>✓ Réactivité sous 24h ouvrées</span>
          </div>
          <a
            href={`tel:${FOUNDER_INFO.phone.replace(/\s/g, '')}`}
            className="font-semibold text-[#0B192C] hover:text-[#B8935A] transition-colors whitespace-nowrap"
          >
            Une question sur un devis ? {FOUNDER_INFO.phone} →
          </a>
        </div>

      </div>
    </section>
  );
};
