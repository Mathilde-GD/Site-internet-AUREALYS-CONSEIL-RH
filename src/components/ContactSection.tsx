import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Download, Clock, Shield } from 'lucide-react';
import { FOUNDER_INFO } from '../data/content';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    headcount: '11-49',
    subject: initialService || 'Diagnostic RH & Prise de contact',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isDownloadingChecklist, setIsDownloadingChecklist] = useState(false);
  const [showChecklistModal, setShowChecklistModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleDownloadChecklist = () => {
    setIsDownloadingChecklist(true);
    setTimeout(() => {
      setIsDownloadingChecklist(false);
      setShowChecklistModal(true);
    }, 400);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#8C6D37] mb-2">
            Prendre contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#0B192C] tracking-tight">
            Parlons de vos enjeux RH en toute confidentialité.
          </h2>
          <p className="mt-4 text-base text-[#4B5563]">
            Que vous souhaitiez un devis personnalisé, une intervention d'urgence ou simplement échanger sur vos problématiques de dirigeant, je vous réponds sous 24h ouvrées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Coordinates & Checklist Card (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Info Card */}
            <div className="bg-[#FAF9F6] p-7 rounded-lg border border-[#E7E5E4] space-y-6">
              <div className="border-b border-[#EBE8E1] pb-4">
                <div className="text-xs font-mono uppercase text-[#8C6D37] mb-1">
                  Contact Direct
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0B192C]">
                  AUREALYS Conseil RH
                </h3>
                <p className="text-xs text-[#6B7280]">
                  Mathilde Galland · Juriste Droit Social & Consultante RH
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#374151]">
                <a 
                  href={`tel:${FOUNDER_INFO.phone.replace(/\s/g, '')}`} 
                  className="flex items-center gap-3 hover:text-[#B8935A] transition-colors group"
                >
                  <div className="w-9 h-9 rounded bg-white border border-[#E5E7EB] flex items-center justify-center text-[#B8935A] group-hover:border-[#B8935A]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280]">Téléphone (ligne directe)</div>
                    <div className="font-semibold text-[#0B192C]">{FOUNDER_INFO.phone}</div>
                  </div>
                </a>

                <a 
                  href={`mailto:${FOUNDER_INFO.email}`} 
                  className="flex items-center gap-3 hover:text-[#B8935A] transition-colors group"
                >
                  <div className="w-9 h-9 rounded bg-white border border-[#E5E7EB] flex items-center justify-center text-[#B8935A] group-hover:border-[#B8935A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280]">Adresse email</div>
                    <div className="font-semibold text-[#0B192C]">{FOUNDER_INFO.email}</div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-white border border-[#E5E7EB] flex items-center justify-center text-[#B8935A] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280]">Implantation & Déplacements</div>
                    <div className="text-xs text-[#374151] leading-relaxed">
                      Département de l'Ain (Bourg-en-Bresse, Plaine de l'Ain, Oyonnax, Pays de Gex) & région Auvergne-Rhône-Alpes. Interventions à distance en France.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EBE8E1] space-y-2 text-xs text-[#6B7280]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#B8935A]" />
                  <span>Réactivité garantie : retour sous 24 heures</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#B8935A]" />
                  <span>Confidentialité juridique absolue</span>
                </div>
              </div>
            </div>

            {/* Checklist Gift Card */}
            <div className="p-6 rounded-lg bg-[#0B192C] text-white space-y-4">
              <div className="text-xs font-mono uppercase text-[#CBB07E]">
                Ressource Offerte aux Dirigeants
              </div>
              <h4 className="text-lg font-serif font-semibold">
                La Checklist : 10 points de conformité RH indispensables en TPE/PME
              </h4>
              <p className="text-xs text-[#D1D5DB] leading-relaxed">
                Contrats, affichages obligatoires, DUERP, rituels CSE et entretiens : vérifiez en 5 minutes si votre entreprise est en règle.
              </p>
              <button
                onClick={handleDownloadChecklist}
                disabled={isDownloadingChecklist}
                className="w-full py-2.5 text-xs font-semibold text-[#0B192C] bg-[#CBB07E] hover:bg-[#D9C496] rounded-sm transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isDownloadingChecklist ? 'Ouverture...' : 'Consulter la Checklist 10 points'}</span>
              </button>
            </div>

          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF9F6] p-8 sm:p-10 rounded-lg border border-[#E7E5E4] shadow-sm">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#EBE8E1] pb-4">
                  <h3 className="text-xl font-serif font-bold text-[#0B192C]">
                    Envoyer un message ou demander un devis
                  </h3>
                  <p className="text-xs text-[#6B7280] mt-1">
                    Les champs marqués d'une * sont nécessaires pour vous apporter une réponse personnalisée.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#374151] mb-1">
                      Votre Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D1D5DB] rounded-sm text-sm focus:outline-none focus:border-[#0B192C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#374151] mb-1">
                      Nom de votre entreprise *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Entreprise Mecanique SAS"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D1D5DB] rounded-sm text-sm focus:outline-none focus:border-[#0B192C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#374151] mb-1">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean.dupont@entreprise.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D1D5DB] rounded-sm text-sm focus:outline-none focus:border-[#0B192C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#374151] mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="06 00 00 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D1D5DB] rounded-sm text-sm focus:outline-none focus:border-[#0B192C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#374151] mb-1">
                      Taille de l'entreprise
                    </label>
                    <select
                      value={formData.headcount}
                      onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D1D5DB] rounded-sm text-sm focus:outline-none focus:border-[#0B192C] transition-colors"
                    >
                      <option value="1-10">1 à 10 salariés (TPE)</option>
                      <option value="11-49">11 à 49 salariés (Seuil CSE)</option>
                      <option value="50+">50 salariés et plus (PME)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#374151] mb-1">
                      Objet de votre demande
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D1D5DB] rounded-sm text-sm focus:outline-none focus:border-[#0B192C] transition-colors"
                    >
                      <option value="Direction RH à Temps Partagé">Direction RH à Temps Partagé</option>
                      <option value="Sécurisation Juridique & Contrats">Sécurisation Juridique & Contrats</option>
                      <option value="Audit RH & Diagnostic 360°">Audit RH & Diagnostic 360°</option>
                      <option value="Rupture conventionnelle / Litige">Rupture conventionnelle / Litige</option>
                      <option value="Mise en place du CSE">Mise en place du CSE</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#374151] mb-1">
                    Précisez votre situation ou votre besoin *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Expliquez brièvement votre contexte (difficulté actuelle, projet de structuration, calendrier souhaité)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D1D5DB] rounded-sm text-sm focus:outline-none focus:border-[#0B192C] transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#152744] active:scale-[0.99] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Envoyer ma demande à Mathilde Galland</span>
                  </button>
                  <p className="text-[11px] text-[#6B7280] text-center mt-2.5">
                    Données traitées en toute confidentialité. Réponse garantie sous 24h ouvrées.
                  </p>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0B192C]">
                  Merci {formData.name}, votre message a bien été transmis !
                </h3>
                <p className="text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
                  Mathilde Galland prendra personnellement connaissance de votre situation pour votre entreprise <strong>{formData.company}</strong> et vous recontactera à l'adresse <strong>{formData.email}</strong> dans un délai de 24h.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        headcount: '11-49',
                        subject: 'Diagnostic RH & Prise de contact',
                        message: ''
                      });
                    }}
                    className="text-xs font-semibold text-[#0B192C] underline hover:text-[#B8935A] cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Checklist Preview Modal */}
      {showChecklistModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-4 border-[#E7E5E4]">
              <div>
                <div className="text-xs font-mono uppercase text-[#8C6D37]">Ressource AUREALYS Conseil RH</div>
                <h3 className="text-xl font-serif font-bold text-[#0B192C]">Checklist 10 Points de Conformité TPE-PME</h3>
              </div>
              <button 
                onClick={() => setShowChecklistModal(false)}
                className="text-[#6B7280] hover:text-[#0B192C] text-sm p-1 font-mono cursor-pointer"
              >
                ✕ Fermer
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#374151]">
              <div className="p-3 bg-[#FAF9F6] rounded border border-[#E7E5E4]">
                <strong>1. Contrats de travail :</strong> Vérification de l'existence de contrats écrits signés avant la prise de poste effective, conformes à la CCN applicable.
              </div>
              <div className="p-3 bg-[#FAF9F6] rounded border border-[#E7E5E4]">
                <strong>2. Affichage obligatoire & Registre du personnel :</strong> Registre unique à jour (y compris stagiaires et intérimaires) et affichage des coordonnées de l'inspection du travail, médecine, harcèlement.
              </div>
              <div className="p-3 bg-[#FAF9F6] rounded border border-[#E7E5E4]">
                <strong>3. DUERP (Document Unique d'Évaluation des Risques Professionnels) :</strong> Obligatoire dès 1 salarié, mis à jour régulièrement.
              </div>
              <div className="p-3 bg-[#FAF9F6] rounded border border-[#E7E5E4]">
                <strong>4. Élections du CSE :</strong> Obligatoire dès 11 salariés pendant 12 mois consécutifs. PV d'élection ou PV de carence officiel.
              </div>
              <div className="p-3 bg-[#FAF9F6] rounded border border-[#E7E5E4]">
                <strong>5. Entretiens professionnels :</strong> Tenue obligatoire tous les 2 ans avec support formalisé, et état des lieux récapitulatif tous les 6 ans.
              </div>
              <div className="p-3 bg-[#FAF9F6] rounded border border-[#E7E5E4]">
                <strong>6. Durée du travail & Forfaits jours :</strong> Contrôle de la charge de travail pour les salariés au forfait, suivi des heures supplémentaires et temps de repos.
              </div>
              <div className="p-3 bg-[#FAF9F6] rounded border border-[#E7E5E4]">
                <strong>7. Règlement intérieur :</strong> Obligatoire dès 50 salariés, recommandé avec charte informatique dès les seuils inférieurs.
              </div>
              <div className="p-3 bg-[#FAF9F6] rounded border border-[#E7E5E4]">
                <strong>8. Droit à la déconnexion & Télétravail :</strong> Formalisation d'une charte ou d'un accord en cas de travail à distance régulier.
              </div>
              <div className="p-3 bg-[#FAF9F6] rounded border border-[#E7E5E4]">
                <strong>9. Suivi médical :</strong> Visite d'information et de prévention (VIP) réalisée dans les 3 mois suivant l'embauche.
              </div>
              <div className="p-3 bg-[#FAF9F6] rounded border border-[#E7E5E4]">
                <strong>10. Procédures de départ sécurisées :</strong> Respect strict des délais de rétractation et d'homologation pour toute rupture conventionnelle.
              </div>
            </div>

            <div className="pt-4 border-t border-[#E7E5E4] flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs text-[#6B7280]">
                Besoin d'un accompagnement pour auditer ces points ?
              </span>
              <button
                onClick={() => {
                  setShowChecklistModal(false);
                  window.location.hash = 'contact';
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0B192C] rounded-sm cursor-pointer"
              >
                Demander un diagnostic personnalisé
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
