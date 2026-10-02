import React, { useState } from 'react';
import { LATEST_LEGAL_NEWS, BOOKING_URL } from '../data/content';
import { NewsArticle } from '../types';
import { Scale, ArrowRight, X, AlertOctagon, CheckCircle2, ShieldCheck, BookOpen, Clock } from 'lucide-react';

interface SocialLawNewsProps {
  onOpenBookingWithContext: (context: string) => void;
}

export const SocialLawNews: React.FC<SocialLawNewsProps> = ({ onOpenBookingWithContext }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <section id="actualites" className="py-24 bg-[#FBFBFA] border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#E7E5E4]">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#8C6D37] mb-2 flex items-center gap-2">
              <Scale className="w-3.5 h-3.5 text-[#B8935A]" />
              <span>Veille Juridique & Réglementaire · Décryptage Expert</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#0B192C] tracking-tight">
              Actualités en droit social : Ce qui change pour les dirigeants de TPE/PME.
            </h2>
          </div>
          <div className="text-sm text-[#4B5563] max-w-sm lg:text-right">
            Lois récentes, revirements jurisprudentiels et contrôles de l'administration : nos analyses opérationnelles pour anticiper vos risques et rester en conformité.
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {LATEST_LEGAL_NEWS.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg border border-[#E7E5E4] hover:border-[#D1D5DB] transition-all p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-sm group"
            >
              <div className="space-y-4">
                
                {/* Clean unboxed metadata with typographic separators (Zero-pill discipline) */}
                <div className="flex items-center gap-2 text-xs text-[#8C6D37] font-medium">
                  <span>{article.category}</span>
                  <span aria-hidden="true" className="text-[#D1D5DB]">·</span>
                  <span className="font-mono text-[11px] text-[#6B7280]">{article.date}</span>
                  <span aria-hidden="true" className="text-[#D1D5DB]">·</span>
                  <span className="text-[#6B7280] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-[#0B192C] leading-snug group-hover:text-[#1E375E] transition-colors">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {article.summary}
                </p>

                {/* Impact Box */}
                <div className="p-3.5 bg-[#FAF7F0] rounded border border-[#EBE2D0] text-xs space-y-1">
                  <div className="font-semibold text-[#0B192C] flex items-center gap-1.5">
                    <AlertOctagon className="w-3.5 h-3.5 text-[#9B773A]" />
                    <span>Point de vigilance employeur :</span>
                  </div>
                  <p className="text-[#4B5563] leading-relaxed">
                    {article.impactTPE}
                  </p>
                </div>

                {/* Key Points */}
                <div className="pt-2 space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#6B7280]">
                    Règles clés :
                  </div>
                  <div className="space-y-1.5 text-xs text-[#374151]">
                    {article.keyPoints.slice(0, 3).map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8935A] shrink-0 mt-1.5" />
                        <span className="line-clamp-2">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action */}
              <div className="mt-8 pt-5 border-t border-[#F3F4F6] flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-semibold text-[#0B192C] hover:text-[#B8935A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#B8935A]" />
                  <span>Lire l'analyse complète</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* Reassurance Footer Banner */}
        <div className="mt-12 p-6 rounded-lg bg-[#FAF9F6] border border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4B5563]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B8935A]" />
            <span>
              Vous vous interrogez sur l'application de ces réformes à votre propre Convention Collective ?
            </span>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0B192C] hover:text-[#B8935A] transition-colors whitespace-nowrap underline"
          >
            Faire auditer la conformité de mon entreprise →
          </a>
        </div>

      </div>

      {/* Article Detail Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-[#E7E5E4] relative animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 text-[#6B7280] hover:text-[#0B192C] p-1.5 rounded transition-colors cursor-pointer"
              aria-label="Fermer l'article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3 pb-6 border-b border-[#E7E5E4]">
              <div className="flex items-center gap-2 text-xs text-[#8C6D37] font-medium">
                <span>{selectedArticle.category}</span>
                <span aria-hidden="true" className="text-[#D1D5DB]">·</span>
                <span className="font-mono text-[11px] text-[#6B7280]">{selectedArticle.date}</span>
                <span aria-hidden="true" className="text-[#D1D5DB]">·</span>
                <span className="text-[#6B7280]">{selectedArticle.readTime}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B192C] leading-snug">
                {selectedArticle.title}
              </h3>

              <div className="text-xs text-[#6B7280]">
                Par <strong>Mathilde Galland</strong>, Juriste en Droit Social · AUREALYS Conseil RH
              </div>
            </div>

            {/* Article Body Content */}
            <div className="py-6 space-y-6 text-sm text-[#374151] leading-relaxed">
              
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8C6D37] mb-2">
                  1. Le Contexte Juridique
                </h4>
                <p className="text-sm text-[#4B5563]">
                  {selectedArticle.fullContent.context}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8C6D37] mb-2">
                  2. Les Règles Impératives du Code du Travail
                </h4>
                <div className="space-y-2">
                  {selectedArticle.fullContent.legalRules.map((rule, idx) => (
                    <div key={idx} className="p-3 bg-[#FAF9F6] rounded border border-[#EBE8E1] flex items-start gap-2.5">
                      <Scale className="w-4 h-4 text-[#B8935A] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-rose-700 mb-2">
                  3. Risques Réels pour l'Entreprise en cas de non-conformité
                </h4>
                <div className="p-4 bg-rose-50/70 border border-rose-200 rounded text-xs sm:text-sm text-rose-900 leading-relaxed">
                  {selectedArticle.fullContent.riskIfIgnored}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#0B192C] mb-2">
                  4. Préconisations Pratiques d'AUREALYS Conseil RH
                </h4>
                <div className="space-y-2">
                  {selectedArticle.fullContent.recommendationsAurealys.map((rec, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#6B7280]">
                Besoin d'aide pour sécuriser ce point au sein de votre entreprise ?
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedArticle(null)}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#152744] rounded-sm transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Programmer un échange avec Mathilde Galland</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Schema.org BlogPosting / NewsArticle JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Veille et Actualités en Droit Social — AUREALYS Conseil RH",
            "description": "Analyses juridiques et réglementaires pour dirigeants de TPE et PME rédigées par Mathilde Galland, Juriste en Droit Social.",
            "url": "https://aurealysconseilrh.fr/#actualites",
            "blogPost": LATEST_LEGAL_NEWS.map(art => ({
              "@type": "BlogPosting",
              "headline": art.title,
              "description": art.summary,
              "datePublished": "2026-03-01",
              "author": {
                "@type": "Person",
                "name": "Mathilde Galland",
                "jobTitle": "Juriste en Droit Social & Consultante RH"
              },
              "publisher": {
                "@type": "Organization",
                "name": "AUREALYS Conseil RH",
                "url": "https://aurealysconseilrh.fr"
              }
            }))
          })
        }}
      />

    </section>
  );
};
