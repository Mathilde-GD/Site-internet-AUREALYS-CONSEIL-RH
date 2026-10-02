import React, { useState } from 'react';
import { FOUNDER_INFO } from '../data/content';
import { Mail, Phone, MapPin, Scale } from 'lucide-react';

interface FooterProps {
  onNavigateToCourses?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToCourses }) => {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <footer className="bg-[#070F1E] text-[#9CA3AF] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Purpose (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#top" className="text-lg font-bold tracking-wider font-brand text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B8935A] inline-block" />
              <span>AUREALYS CONSEIL RH</span>
            </a>
            
            <p className="text-xs text-[#9CA3AF] leading-relaxed max-w-sm">
              Cabinet de conseil en Ressources Humaines et Droit Social fondé par <strong>Mathilde Galland</strong>. L'externalisation RH sur-mesure pour sécuriser et accompagner les dirigeants de TPE et PME.
            </p>

            <div className="pt-2 text-xs text-[#D1D5DB] space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B8935A] shrink-0" />
                <span>Bourg-en-Bresse, Département de l'Ain & Auvergne-Rhône-Alpes</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-3.5 h-3.5 text-[#B8935A] shrink-0" />
                <span>Juriste en Droit Social · Conseil Opérationnel Indépendant</span>
              </div>
            </div>
          </div>

          {/* Nav Links: Expertises */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Expertises
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#expertises" className="hover:text-white transition-colors">
                  Sécurisation Juridique
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-white transition-colors">
                  DRH à Temps Partagé
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-white transition-colors">
                  Recrutement & Marque Employeur
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-white transition-colors">
                  Mise en place du CSE
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-white transition-colors">
                  Accompagnement Managers
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links: Outils & Formules */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Services & Outils
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#formules" className="hover:text-white transition-colors">
                  Formules & Tarification
                </a>
              </li>
              <li>
                <button
                  onClick={onNavigateToCourses}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <span className="text-[#CBB07E]">Formations Digitales</span>
                  <span className="px-1 py-0.2 text-[9px] font-mono uppercase bg-white/10 text-white rounded">
                    Nouveau
                  </span>
                </button>
              </li>
              <li>
                <a href="#simulateur-rh" className="hover:text-white transition-colors text-[#CBB07E]">
                  Simulateur de Risque RH (2 min)
                </a>
              </li>
              <li>
                <a href="#actualites" className="hover:text-white transition-colors">
                  Actualités en Droit Social
                </a>
              </li>
              <li>
                <a href="#cas-clients" className="hover:text-white transition-colors">
                  Cas Clients & Témoignages
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-white transition-colors">
                  À Propos de Mathilde Galland
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Foire Aux Questions (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Contact Direct
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[#6B7280] block text-[11px]">Téléphone :</span>
                <a href={`tel:${FOUNDER_INFO.phone.replace(/\s/g, '')}`} className="text-white hover:text-[#CBB07E] font-medium transition-colors">
                  {FOUNDER_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-[#6B7280] block text-[11px]">Courriel :</span>
                <a href={`mailto:${FOUNDER_INFO.email}`} className="text-white hover:text-[#CBB07E] font-medium transition-colors break-all">
                  {FOUNDER_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[11px] text-[#9CA3AF] block leading-tight">
                  Disponibilité : du lundi au vendredi, 8h30 - 18h30.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Hairline Divider & Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div>
            © {new Date().getFullYear()} AUREALYS Conseil RH — Mathilde Galland. Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowLegal(true)}
              className="hover:text-[#D1D5DB] transition-colors cursor-pointer underline"
            >
              Mentions Légales & Confidentialité RGPD
            </button>
            <a href="#top" className="hover:text-[#D1D5DB] transition-colors">
              Haut de page ↑
            </a>
          </div>
        </div>

      </div>

      {/* Legal Modal */}
      {showLegal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white text-[#111827] rounded-lg max-w-xl w-full p-6 sm:p-8 space-y-4 max-h-[85vh] overflow-y-auto text-xs">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base font-serif font-bold text-[#0B192C]">
                Mentions Légales & Données Personnelles
              </h3>
              <button 
                onClick={() => setShowLegal(false)} 
                className="text-gray-500 hover:text-black font-mono cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3 leading-relaxed text-[#374151]">
              <p>
                <strong>Éditeur du site :</strong> AUREALYS Conseil RH, dirigé par Mathilde Galland, Juriste en droit social & consultante RH indépendante. Siège situé dans le département de l'Ain (01), France.
              </p>
              <p>
                <strong>Contact :</strong> Email : {FOUNDER_INFO.email} · Téléphone : {FOUNDER_INFO.phone}.
              </p>
              <p>
                <strong>Hébergement :</strong> Plateforme Cloud sécurisée conforme aux standards européens.
              </p>
              <p>
                <strong>Protection des Données (RGPD) :</strong> Les données recueillies via les formulaires de contact ou de diagnostic RH sont strictement destinées au traitement de votre demande par Mathilde Galland. Elles ne sont ni vendues, ni louées, ni cédées à aucun tiers. Conformément à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification et d'effacement de vos données en écrivant à {FOUNDER_INFO.email}.
              </p>
              <p>
                <strong>Propriété intellectuelle :</strong> L'ensemble des textes, structures, logotypes et éléments graphiques sont la propriété exclusive d'AUREALYS Conseil RH.
              </p>
            </div>

            <div className="pt-3 border-t text-right">
              <button
                onClick={() => setShowLegal(false)}
                className="px-4 py-2 bg-[#0B192C] text-white rounded-sm text-xs cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
