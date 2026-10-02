import React, { useState } from 'react';
import { QUIZ_QUESTIONS, BOOKING_URL } from '../data/content';
import { CheckCircle, AlertTriangle, ArrowRight, RotateCcw, ShieldAlert, Award, FileText } from 'lucide-react';

interface DiagnosticQuizProps {
  onOpenBookingWithContext?: (contextNotes: string) => void;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({ onOpenBookingWithContext }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { label: string; points: number; alert?: boolean; tag?: string }>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (questionId: string, option: any) => {
    const updated = {
      ...answers,
      [questionId]: option
    };
    setAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Compute results
  const totalPoints = Object.values(answers).reduce((acc, curr) => acc + (curr.points || 0), 0);
  const alertsCount = Object.values(answers).filter(a => a.alert).length;

  let riskLevel: 'Critique' | 'Vigilance' | 'Serein' = 'Serein';
  let badgeColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
  let summaryText = "Vos pratiques de base semblent encadrées, mais un audit préventif permettrait d'optimiser vos accords et votre fidélisation.";

  if (totalPoints >= 60 || alertsCount >= 2) {
    riskLevel = 'Critique';
    badgeColor = 'text-rose-700 bg-rose-50 border-rose-200';
    summaryText = "Plusieurs failles réglementaires majeures identifiées (CSE, contrats ou entretiens). Votre entreprise s'expose à des risques prud'homaux et administratifs élevés.";
  } else if (totalPoints >= 30 || alertsCount === 1) {
    riskLevel = 'Vigilance';
    badgeColor = 'text-amber-800 bg-amber-50 border-amber-200';
    summaryText = "Des zones d'ombre nécessitent une mise en conformité rapide pour éviter tout risque lors d'un contrôle ou d'un départ de collaborateur.";
  }

  const generatedSummaryNotes = `Résultat Diagnostic RH : Niveau ${riskLevel} (Score risque: ${totalPoints}/100, ${alertsCount} alertes). Effectif: ${answers['headcount']?.label || 'N/A'}. Priorité: ${answers['pain_point']?.label || 'N/A'}.`;

  return (
    <section id="simulateur-rh" className="py-20 bg-white border-b border-[#E7E5E4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#8C6D37] mb-2">
            Outil d'auto-évaluation exclusif
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#0B192C]">
            Diagnostic Flash : Vos RH sont-elles en conformité ?
          </h2>
          <p className="mt-3 text-sm text-[#4B5563]">
            En 5 questions rapides, mesurez le niveau d'exposition juridique de votre TPE/PME et découvrez vos priorités de structuration.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-[#FAF9F6] border border-[#E7E5E4] rounded-lg shadow-sm p-6 sm:p-10">
          
          {!isCompleted ? (
            <div>
              {/* Progress Bar & Step Tracker */}
              <div className="flex items-center justify-between text-xs font-mono text-[#6B7280] mb-3">
                <span>QUESTION {currentStep + 1} SUR {QUIZ_QUESTIONS.length}</span>
                <span>{Math.round(((currentStep) / QUIZ_QUESTIONS.length) * 100)}% complété</span>
              </div>
              
              <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden mb-8">
                <div 
                  className="bg-[#0B192C] h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#0B192C] leading-snug">
                  {QUIZ_QUESTIONS[currentStep].title}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => {
                  const isSelected = answers[QUIZ_QUESTIONS[currentStep].id]?.label === option.label;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(QUIZ_QUESTIONS[currentStep].id, option)}
                      className={`w-full text-left p-4 rounded-md border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected 
                          ? 'bg-[#0B192C] text-white border-[#0B192C]'
                          : 'bg-white text-[#374151] border-[#E5E7EB] hover:border-[#B8935A] hover:bg-[#FDFCFB]'
                      }`}
                    >
                      <span className="text-sm font-medium">{option.label}</span>
                      <ArrowRight className={`w-4 h-4 shrink-0 ml-3 ${isSelected ? 'text-white' : 'text-[#9CA3AF]'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Back button if past step 0 */}
              {currentStep > 0 && (
                <div className="mt-6 flex justify-start">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs text-[#6B7280] hover:text-[#0B192C] transition-colors cursor-pointer"
                  >
                    ← Question précédente
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6 animate-in fade-in duration-200">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E5E4]">
                <div>
                  <div className="text-xs uppercase tracking-wider font-mono text-[#8C6D37] mb-1">
                    Bilan Personnalisé AUREALYS Conseil RH
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0B192C]">
                    Niveau d'exposition : <span className="underline decoration-[#B8935A]">{riskLevel}</span>
                  </h3>
                </div>

                <div className={`px-4 py-2 rounded border text-xs font-semibold uppercase tracking-wider ${badgeColor} self-start sm:self-auto`}>
                  {alertsCount} point{alertsCount > 1 ? 's' : ''} d'alerte réglementaire
                </div>
              </div>

              <div className="p-4 bg-white rounded border border-[#E7E5E4] text-sm text-[#374151] leading-relaxed">
                <p className="font-medium text-[#0B192C] mb-1">Diagnostic préliminaire :</p>
                <p>{summaryText}</p>
              </div>

              {/* Specific Findings List */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B192C]">
                  Points analysés pour votre entreprise :
                </h4>

                <div className="space-y-2 text-xs sm:text-sm">
                  {Object.entries(answers).map(([key, val], idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-white rounded border border-[#EBE8E1] flex items-start gap-2.5"
                    >
                      {val.alert ? (
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="font-semibold text-[#111827]">
                          {key === 'headcount' && 'Effectif : '}
                          {key === 'contracts' && 'Contrats de travail : '}
                          {key === 'cse_compliance' && 'Obligation CSE : '}
                          {key === 'interviews' && 'Entretiens professionnels : '}
                          {key === 'pain_point' && 'Objectif prioritaire : '}
                        </span>
                        <span className="text-[#4B5563]">{val.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Solution CTA Box */}
              <div className="p-6 rounded-md bg-[#0B192C] text-white space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#CBB07E]">
                  <Award className="w-4 h-4" />
                  <span>Recommandation de Mathilde Galland</span>
                </div>
                <p className="text-sm text-[#E5E7EB] leading-relaxed">
                  Profitez d'un échange gratuit de 30 minutes par téléphone ou visio pour débriefer ce résultat, obtenir des réponses précises sur vos obligations et définir un plan d'actions adapté à votre budget.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 text-xs font-semibold text-[#0B192C] bg-[#CBB07E] hover:bg-[#D9C496] rounded-sm transition-colors text-center font-sans inline-block"
                  >
                    Réserver mon debrief offert (30 min)
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-4 py-3 text-xs font-medium text-white hover:bg-white/10 rounded-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-white/20"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Recommencer le test</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
