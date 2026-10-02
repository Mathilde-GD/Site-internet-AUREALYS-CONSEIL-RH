import React, { useState } from 'react';
import { Calculator, TrendingDown, Check, ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '../data/content';

interface CostCalculatorProps {
  onOpenBooking: () => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onOpenBooking }) => {
  const [daysPerMonth, setDaysPerMonth] = useState<number>(2);
  const [employeeCount, setEmployeeCount] = useState<number>(25);

  // Financial baseline calculations (Standard French HR market data)
  const fullTimeSalaryGross = 70000; // Average DRH salary in Auvergne-Rhône-Alpes
  const fullTimeEmployerCharges = fullTimeSalaryGross * 0.44; // ~44% patronal charges
  const fullTimeOverheadAndTools = 8500; // Workspace, laptop, software licenses, training
  const fullTimeTotalAnnual = Math.round(fullTimeSalaryGross + fullTimeEmployerCharges + fullTimeOverheadAndTools); // ~109,300 €

  // AUREALYS fractional investment
  // Standard day-rate benchmark for senior legal & HR director consulting ~850€ to 950€/day
  const aurealysDayRate = 900;
  const aurealysMonthly = daysPerMonth * aurealysDayRate;
  const aurealysAnnual = aurealysMonthly * 12;

  const annualSavings = fullTimeTotalAnnual - aurealysAnnual;
  const savingsPercent = Math.round((annualSavings / fullTimeTotalAnnual) * 100);

  return (
    <section className="py-20 bg-[#FAF9F6] border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#8C6D37] mb-2">
            Rentabilité & Économie
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#0B192C]">
            Simulateur : Combien économisez-vous avec une DRH à temps partagé ?
          </h2>
          <p className="mt-3 text-base text-[#4B5563]">
            Comparez le coût réel d'un recrutement interne à temps plein face à l'agilité sur-mesure d'AUREALYS Conseil RH.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 bg-white p-7 rounded-lg border border-[#E7E5E4] shadow-sm space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#F3F4F6] text-[#0B192C] font-semibold text-sm">
              <Calculator className="w-4 h-4 text-[#B8935A]" />
              <span>Paramétrez votre besoin d'accompagnement :</span>
            </div>

            {/* Slider 1: Days per month */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-[#374151]">Présence DRH souhaitée :</span>
                <span className="font-mono font-bold text-[#0B192C] bg-[#FAF7F0] px-2.5 py-1 rounded border border-[#EBE2D0] tabular-nums">
                  {daysPerMonth} {daysPerMonth === 1 ? 'jour' : 'jours'} / mois
                </span>
              </div>
              
              <input
                type="range"
                min="1"
                max="4"
                step="1"
                value={daysPerMonth}
                onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                className="w-full accent-[#0B192C] cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-[#6B7280] font-mono">
                <span>1 jour (veille & rituels)</span>
                <span>2 jours (recommandé)</span>
                <span>4 jours (forte croissance)</span>
              </div>
            </div>

            {/* Slider 2: Employee count */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-[#374151]">Nombre de salariés :</span>
                <span className="font-mono font-bold text-[#0B192C] bg-[#FAF7F0] px-2.5 py-1 rounded border border-[#EBE2D0] tabular-nums">
                  {employeeCount} collaborateurs
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="80"
                step="5"
                value={employeeCount}
                onChange={(e) => setEmployeeCount(Number(e.target.value))}
                className="w-full accent-[#0B192C] cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-[#6B7280] font-mono">
                <span>5 (TPE)</span>
                <span>25 (Seuil structuration)</span>
                <span>80+ (PME)</span>
              </div>
            </div>

            {/* Explanatory notes */}
            <div className="p-4 bg-[#FAF9F6] rounded border border-[#EAE6DE] text-xs text-[#4B5563] space-y-1.5">
              <p className="font-medium text-[#0B192C]">Pourquoi ce calcul est transparent ?</p>
              <p>• Le recrutement d'un cadre DRH implique un préavis, des charges patronales et des risques d'inadéquation.</p>
              <p>• La prestation AUREALYS est une charge d'exploitation déductible, sans passif social ni charges annexes.</p>
            </div>
          </div>

          {/* Results Comparison Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Option A: Full-time internal */}
              <div className="p-6 bg-white rounded-lg border border-[#E5E7EB] space-y-3 opacity-90">
                <div className="text-xs uppercase font-mono text-[#6B7280]">
                  Embauche DRH Interne
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#6B7280] tabular-nums">
                  ~{fullTimeTotalAnnual.toLocaleString('fr-FR')} € <span className="text-xs font-normal font-sans">/ an</span>
                </div>
                <div className="text-xs text-[#6B7280] space-y-1 pt-2 border-t border-[#F3F4F6]">
                  <div>• Salaire brut annuel : 70 000 €</div>
                  <div>• Charges patronales (~44%) : ~30 800 €</div>
                  <div>• Équipement & formation : ~8 500 €</div>
                  <div>• Engagement CDI irréversible</div>
                </div>
              </div>

              {/* Option B: AUREALYS Fractional */}
              <div className="p-6 bg-[#0B192C] text-white rounded-lg shadow-md space-y-3 border border-[#0B192C] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#B8935A] text-[#0B192C] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl">
                  Sur-Mesure
                </div>
                <div className="text-xs uppercase font-mono text-[#CBB07E]">
                  AUREALYS Conseil RH ({daysPerMonth}j/mois)
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums">
                  ~{aurealysAnnual.toLocaleString('fr-FR')} € <span className="text-xs font-normal font-sans text-[#D1D5DB]">HT / an</span>
                </div>
                <div className="text-xs text-[#D1D5DB] space-y-1 pt-2 border-t border-white/10">
                  <div>• {daysPerMonth} jour(s) de présence dédiée / mois</div>
                  <div>• Zéro charge patronale ni taxe sur salaire</div>
                  <div>• Hotline juridique & RH illimitée</div>
                  <div>• Sans engagement de durée contraignant</div>
                </div>
              </div>

            </div>

            {/* Savings Banner */}
            <div className="p-6 bg-[#FAF7F0] border border-[#E3D7C1] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-[#8C6D37] flex items-center gap-1.5">
                  <TrendingDown className="w-4 h-4" />
                  <span>Économie directe pour votre trésorerie</span>
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0B192C] tabular-nums">
                  +{annualSavings.toLocaleString('fr-FR')} € / an
                  <span className="text-sm font-sans font-semibold text-[#8C6D37] ml-2">
                    (soit {savingsPercent}% d'économie)
                  </span>
                </div>
              </div>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#152744] active:scale-[0.99] rounded-sm transition-all whitespace-nowrap shadow-sm self-start sm:self-auto flex items-center gap-2"
              >
                <span>Demander une proposition personnalisée</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
