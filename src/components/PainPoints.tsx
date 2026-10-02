import React from 'react';
import { AlertCircle, HelpCircle, UserX, Clock, ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '../data/content';

interface PainPointsProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const PainPoints: React.FC<PainPointsProps> = ({ onOpenBooking, onOpenQuiz }) => {
  return (
    <section className="py-20 bg-white border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#8C6D37] mb-2">
            Constat de terrain
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#0B192C] tracking-tight leading-tight">
            Dirigeant de TPE ou PME : vous reconnaissez-vous dans ces situations ?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Sans juriste ni DRH interne, la gestion quotidienne du personnel repose entièrement sur vos épaules. Une charge mentale pesante qui détourne votre énergie du développement de votre entreprise.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          <div className="p-7 rounded-lg bg-[#FAF9F6] border border-[#EBE8E1] hover:border-[#D9CFBE] transition-colors relative group">
            <div className="w-10 h-10 rounded bg-[#F1ECE1] flex items-center justify-center text-[#9B773A] mb-4">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#0B192C]">
              L'angoisse permanente de l'erreur juridique
            </h3>
            <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
              Le droit du travail français et les conventions collectives évoluent chaque mois. Un contrat de travail imprécis, une clause de forfait jours mal rédigée ou une procédure de rupture mal cadencée peuvent aboutir à un litige prud'homal coûteux.
            </p>
            <div className="mt-4 pt-4 border-t border-[#EAE6DE] text-xs font-medium text-[#0B192C] flex items-center gap-1.5">
              <span>Impact : Risque financier direct de 15 000 € à 50 000 € par dossier</span>
            </div>
          </div>

          <div className="p-7 rounded-lg bg-[#FAF9F6] border border-[#EBE8E1] hover:border-[#D9CFBE] transition-colors relative group">
            <div className="w-10 h-10 rounded bg-[#F1ECE1] flex items-center justify-center text-[#9B773A] mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#0B192C]">
              Des heures perdues sur l'opérationnel RH
            </h3>
            <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
              Rédiger des avenants, chercher la règle applicable pour un congé spécifique, préparer les entretiens professionnels obligatoires... Vous passez vos soirées à chercher des réponses incertaines au lieu de piloter votre entreprise.
            </p>
            <div className="mt-4 pt-4 border-t border-[#EAE6DE] text-xs font-medium text-[#0B192C] flex items-center gap-1.5">
              <span>Impact : 10 à 15 heures par mois détournées de votre cœur de métier</span>
            </div>
          </div>

          <div className="p-7 rounded-lg bg-[#FAF9F6] border border-[#EBE8E1] hover:border-[#D9CFBE] transition-colors relative group">
            <div className="w-10 h-10 rounded bg-[#F1ECE1] flex items-center justify-center text-[#9B773A] mb-4">
              <UserX className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#0B192C]">
              Recrutements décevants & départs imprévus
            </h3>
            <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
              Recruter sans trame d'évaluation objective, intégrer sans livret d'accueil ni jalons de période d'essai : le risque de casting manqué explose. Le turn-over déstabilise les équipes en place et dégrade votre rentabilité.
            </p>
            <div className="mt-4 pt-4 border-t border-[#EAE6DE] text-xs font-medium text-[#0B192C] flex items-center gap-1.5">
              <span>Impact : Coût moyen d'un recrutement raté estimé à 35 000 €</span>
            </div>
          </div>

          <div className="p-7 rounded-lg bg-[#FAF9F6] border border-[#EBE8E1] hover:border-[#D9CFBE] transition-colors relative group">
            <div className="w-10 h-10 rounded bg-[#F1ECE1] flex items-center justify-center text-[#9B773A] mb-4">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#0B192C]">
              La solitude face aux situations de crise humaine
            </h3>
            <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
              Inaptitude médicale soudaine, dégradation du climat interne, tensions avec des délégués ou mise en place anxiogène du CSE : vers qui vous tourner pour obtenir un conseil stratégique, neutre et immédiatement actionnable ?
            </p>
            <div className="mt-4 pt-4 border-t border-[#EAE6DE] text-xs font-medium text-[#0B192C] flex items-center gap-1.5">
              <span>Impact : Stress intense du chef d'entreprise et blocage managérial</span>
            </div>
          </div>

        </div>

        {/* Transition Banner to Solution */}
        <div className="mt-12 p-8 rounded-lg bg-[#0B192C] text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#CBB07E]">
              La solution AUREALYS Conseil RH
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-semibold">
              Ne restez plus seul face à la complexité des ressources humaines.
            </h4>
            <p className="text-sm text-[#D1D5DB] leading-relaxed">
              Externalisez intelligemment votre fonction RH. Vous gagnez en sérénité, en conformité légale et en efficacité d'équipe, dès le premier mois.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs font-semibold text-[#0B192C] bg-[#CBB07E] hover:bg-[#D9C496] active:scale-[0.99] rounded-sm transition-all text-center whitespace-nowrap shadow-sm inline-block"
            >
              Échanger 30 min avec Mathilde Galland
            </a>
            <button
              onClick={onOpenQuiz}
              className="px-4 py-3 text-xs font-semibold text-white bg-[#152744] hover:bg-[#1E375E] rounded-sm transition-colors text-center cursor-pointer whitespace-nowrap"
            >
              Faire le diagnostic de mon entreprise
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
