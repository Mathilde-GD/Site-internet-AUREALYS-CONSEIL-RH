import React, { useState } from 'react';
import { TrainingCourse } from '../types';
import { VALID_ACCESS_CODES } from '../data/courses';
import { FOUNDER_INFO } from '../data/content';
import { X, ShieldCheck, Lock, CreditCard, KeyRound, CheckCircle2, ArrowRight, ExternalLink, HelpCircle } from 'lucide-react';

interface CoursePaymentModalProps {
  course: TrainingCourse;
  isOpen: boolean;
  onClose: () => void;
  onUnlockCourse: (courseId: string) => void;
}

export const CoursePaymentModal: React.FC<CoursePaymentModalProps> = ({
  course,
  isOpen,
  onClose,
  onUnlockCourse
}) => {
  const [accessCode, setAccessCode] = useState('');
  const [codeError, setCodeError] = useState(false);
  const [mode, setMode] = useState<'payment' | 'code'>('payment');

  if (!isOpen) return null;

  const priceTTC = Math.round(course.price * (1 + course.vatRate / 100));

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = accessCode.trim().toUpperCase();
    if (VALID_ACCESS_CODES.includes(cleanCode) || cleanCode === 'DEMO') {
      onUnlockCourse(course.id);
      onClose();
    } else {
      setCodeError(true);
    }
  };

  const handleSimulatePaymentSuccess = () => {
    // Allows immediate demo activation
    onUnlockCourse(course.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E7E5E4] relative animate-in fade-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#6B7280] hover:text-[#0B192C] p-1.5 rounded transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 border-b border-[#E7E5E4] pb-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8C6D37] mb-1">
            <Lock className="w-3.5 h-3.5" />
            <span>Accès Sécurisé · Formation Digitale</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B192C]">
            {course.title}
          </h3>
          <p className="text-xs text-[#4B5563] mt-1">
            Conçue et animée par <strong>Mathilde Galland</strong>, Juriste en Droit Social.
          </p>
        </div>

        {/* Pricing Summary Box */}
        <div className="mb-6 p-4 rounded bg-[#FAF9F6] border border-[#E8DFC8] flex items-center justify-between">
          <div>
            <div className="text-xs text-[#6B7280]">Tarif de la formation :</div>
            <div className="text-2xl font-serif font-bold text-[#0B192C]">
              {course.priceFormatted}
            </div>
            <div className="text-[11px] text-[#6B7280]">
              soit {priceTTC} € TTC (TVA 20% déductible pour votre entreprise)
            </div>
          </div>
          <div className="text-right text-xs text-[#4B5563] space-y-1">
            <div>✓ {course.modulesCount} modules vidéo</div>
            <div>✓ Modèles Word & Excel inclus</div>
            <div>✓ Accès illimité 12 mois</div>
          </div>
        </div>

        {/* Toggle Mode */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-[#F3F2EE] rounded-sm mb-6 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setMode('payment')}
            className={`py-2 text-center rounded-xs transition-colors cursor-pointer ${
              mode === 'payment'
                ? 'bg-white text-[#0B192C] shadow-xs'
                : 'text-[#6B7280] hover:text-[#0B192C]'
            }`}
          >
            1. Payer en ligne (Accès immédiat)
          </button>
          <button
            type="button"
            onClick={() => setMode('code')}
            className={`py-2 text-center rounded-xs transition-colors cursor-pointer ${
              mode === 'code'
                ? 'bg-white text-[#0B192C] shadow-xs'
                : 'text-[#6B7280] hover:text-[#0B192C]'
            }`}
          >
            2. J'ai déjà un code d'accès
          </button>
        </div>

        {mode === 'payment' ? (
          <div className="space-y-4">
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Pour accéder instantanément à l'ensemble des vidéos et télécharger tous les documents modèles, procédez au règlement sécurisé ci-dessous.
            </p>

            {/* External Payment Link Button */}
            <a
              href={course.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#0B192C] hover:bg-[#152744] text-white text-xs font-semibold rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm text-center"
            >
              <CreditCard className="w-4 h-4 text-[#CBB07E]" />
              <span>Régler {course.priceFormatted} par carte bancaire sécurisée</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#9CA3AF]" />
            </a>

            {/* Instant Demo Unlock for testing */}
            <div className="p-3 bg-[#FAF7F0] border border-[#E9DFCB] rounded text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#0B192C] flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-[#8C6D37]" />
                  Testeur / Démonstration :
                </span>
                <button
                  type="button"
                  onClick={handleSimulatePaymentSuccess}
                  className="px-2.5 py-1 text-[11px] font-semibold text-white bg-[#8C6D37] hover:bg-[#73582B] rounded-xs cursor-pointer"
                >
                  Débloquer en 1 clic (Mode test)
                </button>
              </div>
              <p className="text-[11px] text-[#6B7280]">
                Ce bouton permet de tester immédiatement l'espace vidéo apprenant sans carte bancaire.
              </p>
            </div>

            {/* Reassurances */}
            <div className="pt-3 border-t border-[#E7E5E4] grid grid-cols-2 gap-2 text-[11px] text-[#4B5563]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Paiement chiffré SSL 256 bits</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D37] shrink-0" />
                <span>Facture avec TVA automatique</span>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Si vous avez reçu une clé d'activation par email ou bon de commande AUREALYS Conseil RH, saisissez-la ci-dessous pour déverrouiller vos modules :
            </p>

            <div>
              <label className="block text-xs font-semibold text-[#0B192C] mb-1.5">
                Votre code d'activation :
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={accessCode}
                  onChange={(e) => {
                    setAccessCode(e.target.value);
                    setCodeError(false);
                  }}
                  placeholder="Ex : AUREALYS2026"
                  className="w-full px-3.5 py-2.5 text-sm uppercase font-mono tracking-wider bg-[#F9FAFB] border border-[#D1D5DB] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#0B192C] focus:bg-white"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#0B192C] text-white text-xs font-semibold rounded-xs hover:bg-[#152744] cursor-pointer"
                >
                  Valider
                </button>
              </div>
              {codeError && (
                <p className="text-xs text-red-600 mt-1.5 font-medium">
                  Code non reconnu. Vérifiez votre saisie ou testez avec le code démo : <strong>AUREALYS2026</strong>.
                </p>
              )}
            </div>

            <div className="p-3 bg-[#F4F3F0] rounded text-[11px] text-[#6B7280]">
              Astuce : Pour la démonstration, vous pouvez utiliser le code <strong>AUREALYS2026</strong> ou <strong>DEMO</strong>.
            </div>

            <div className="text-center pt-2">
              <a
                href={`mailto:${FOUNDER_INFO.email}?subject=Demande de code d'accès formation : ${course.title}`}
                className="text-xs text-[#8C6D37] hover:underline"
              >
                Vous n'avez pas reçu votre code d'accès ? Contactez Mathilde Galland
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
