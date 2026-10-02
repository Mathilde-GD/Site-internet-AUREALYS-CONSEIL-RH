import React from 'react';
import { CASE_STUDIES } from '../data/content';
import { Quote, CheckCircle } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  return (
    <section id="cas-clients" className="py-24 bg-white border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#8C6D37] mb-2">
            Retours d'expérience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#0B192C] tracking-tight">
            Des résultats concrets au service des dirigeants.
          </h2>
          <p className="mt-4 text-base text-[#4B5563]">
            Découvrez comment des PME et TPE régionales ont désamorcé des litiges, sécurisé leurs obligations et structuré leur équipe grâce à AUREALYS Conseil RH.
          </p>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-[#FAF9F6] border border-[#E7E5E4] rounded-lg p-7 sm:p-8 flex flex-col justify-between hover:border-[#D1D5DB] transition-colors"
            >
              <div className="space-y-4">
                
                {/* Sector & Headcount Header */}
                <div>
                  <div className="text-xs uppercase tracking-wider font-mono text-[#8C6D37]">
                    {study.sector}
                  </div>
                  <div className="text-xs text-[#6B7280] mt-0.5">
                    {study.headcount}
                  </div>
                </div>

                {/* Challenge */}
                <div className="pt-2 border-t border-[#EBE8E1]">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0B192C] mb-1">
                    La problématique initiale :
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0B192C] mb-1">
                    L'intervention AUREALYS :
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Quantified Results */}
                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0B192C] mb-2">
                    Résultats mesurables :
                  </div>
                  <div className="space-y-1.5">
                    {study.results.map((res, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#1F2937]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#B8935A] shrink-0 mt-0.5" />
                        <span className="font-medium">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Client Quote Box */}
              <div className="mt-6 pt-5 border-t border-[#EBE8E1] space-y-2">
                <Quote className="w-4 h-4 text-[#B8935A] opacity-70" />
                <p className="text-xs italic text-[#374151] leading-relaxed">
                  "{study.quote}"
                </p>
                <div className="text-[11px] font-semibold text-[#0B192C]">
                  {study.author}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
