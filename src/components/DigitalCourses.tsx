import React, { useState, useEffect } from 'react';
import { DIGITAL_COURSES } from '../data/courses';
import { TrainingCourse } from '../types';
import { CoursePaymentModal } from './CoursePaymentModal';
import { CoursePlayer } from './CoursePlayer';
import { FOUNDER_INFO } from '../data/content';
import { 
  GraduationCap, 
  Lock, 
  Unlock, 
  PlayCircle, 
  CheckCircle2, 
  Clock, 
  FileText, 
  CreditCard, 
  ShieldCheck, 
  ArrowRight, 
  BookOpen, 
  Sparkles,
  HelpCircle,
  Award,
  ChevronDown,
  Layers
} from 'lucide-react';

interface DigitalCoursesProps {
  onBackToMain: () => void;
  onOpenBooking: () => void;
}

export const DigitalCourses: React.FC<DigitalCoursesProps> = ({ onBackToMain, onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'rupture' | 'cse' | 'management'>('all');
  const [unlockedCourseIds, setUnlockedCourseIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('aurealys_unlocked_courses');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [activeCourseToPlay, setActiveCourseToPlay] = useState<TrainingCourse | null>(null);
  const [courseToUnlock, setCourseToUnlock] = useState<TrainingCourse | null>(null);
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>(null);

  // Save unlocked state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aurealys_unlocked_courses', JSON.stringify(unlockedCourseIds));
    } catch {
      // storage disabled
    }
  }, [unlockedCourseIds]);

  const handleUnlockCourse = (courseId: string) => {
    if (!unlockedCourseIds.includes(courseId)) {
      const updated = [...unlockedCourseIds, courseId];
      setUnlockedCourseIds(updated);
    }
    // Launch course player directly
    const found = DIGITAL_COURSES.find(c => c.id === courseId);
    if (found) {
      setActiveCourseToPlay(found);
    }
  };

  const filteredCourses = selectedFilter === 'all'
    ? DIGITAL_COURSES
    : DIGITAL_COURSES.filter(c => c.category === selectedFilter);

  // If a course is currently being watched in the CoursePlayer
  if (activeCourseToPlay) {
    return (
      <CoursePlayer
        course={activeCourseToPlay}
        onBackToCatalog={() => setActiveCourseToPlay(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#111827]">
      
      {/* Sub-Header / Breadcrumb */}
      <div className="bg-[#FAF9F6] border-b border-[#E7E5E4] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <button
            onClick={onBackToMain}
            className="text-[#6B7280] hover:text-[#0B192C] font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            ← Retour au site AUREALYS Conseil RH
          </button>
          
          <div className="flex items-center gap-2 text-[#8C6D37] font-medium">
            <GraduationCap className="w-4 h-4" />
            <span>Académie Digitale · Mathilde Galland</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#F8F7F4] via-[#F4F2EB] to-[#FBFBFA] border-b border-[#E7E5E4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF7F0] border border-[#E8DFC8] text-xs font-semibold text-[#8C6D37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Formations Opérationnelles en Droit Social & RH</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0B192C] tracking-tight leading-tight">
              Vos formations digitales clés en main pour sécuriser votre entreprise.
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Des modules vidéo concrets, structurés par <strong>Mathilde Galland</strong> (Juriste en Droit Social), accompagnés de tous les modèles Word et Excel prêts à l'emploi. Débloquez immédiatement votre accès après règlement sécurisé.
            </p>

            {/* Quick Guarantees */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-[#374151]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D37] shrink-0" />
                <span>Conforme droit 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D37] shrink-0" />
                <span>Modèles téléchargeables</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D37] shrink-0" />
                <span>Accès illimité 12 mois</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D37] shrink-0" />
                <span>Attestation officielle</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Course Catalog Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#E7E5E4]">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Toutes les formations' },
              { id: 'rupture', label: 'Ruptures & Fins de contrat' },
              { id: 'cse', label: 'Élections & Animer son CSE' },
              { id: 'management', label: 'Entretiens & Management' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#0B192C] text-white shadow-xs'
                    : 'bg-white text-[#4B5563] border border-[#E5E7EB] hover:bg-[#F9FAFB]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#6B7280]">
            {filteredCourses.length} formation{filteredCourses.length > 1 ? 's' : ''} disponible{filteredCourses.length > 1 ? 's' : ''}
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredCourses.map((course) => {
            const isUnlocked = unlockedCourseIds.includes(course.id);
            const isSyllabusOpen = expandedSyllabus === course.id;

            return (
              <div
                key={course.id}
                className={`flex flex-col justify-between rounded-lg border bg-white shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${
                  isUnlocked ? 'border-emerald-300 ring-1 ring-emerald-200' : 'border-[#E7E5E4]'
                }`}
              >
                {/* Card Header & Badges */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 text-[11px] font-mono uppercase font-semibold tracking-wider bg-[#FAF7F0] text-[#8C6D37] border border-[#E8DFC8] rounded-sm">
                      {course.badge}
                    </span>

                    {isUnlocked ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <Unlock className="w-3 h-3" />
                        <span>Accès débloqué</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#6B7280]">
                        <Lock className="w-3 h-3 text-[#9CA3AF]" />
                        <span>Paiement requis</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#0B192C] leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                      {course.subtitle}
                    </p>
                  </div>

                  {/* Metadata Pills */}
                  <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#6B7280] border-t border-[#F3F4F6]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#8C6D37]" />
                      {course.duration}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-[#8C6D37]" />
                      {course.modulesCount} modules
                    </span>
                  </div>

                  {/* Learning Outcomes Preview */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono uppercase text-[#0B192C] font-semibold">
                      Ce que vous saurez faire :
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#374151]">
                      {course.learningOutcomes.slice(0, 3).map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D37] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Syllabus Toggle */}
                  <div className="pt-2">
                    <button
                      onClick={() => setExpandedSyllabus(isSyllabusOpen ? null : course.id)}
                      className="text-xs font-semibold text-[#8C6D37] hover:text-[#0B192C] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>{isSyllabusOpen ? 'Masquer le programme détaillé' : 'Voir les modules détaillés'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSyllabusOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isSyllabusOpen && (
                      <div className="mt-3 p-3.5 bg-[#FAF9F6] rounded border border-[#E7E5E4] space-y-2 text-xs animate-in fade-in duration-150">
                        {course.modules.map((mod, idx) => (
                          <div key={mod.id} className="pb-2 border-b border-[#EBE8E1] last:border-0 last:pb-0">
                            <div className="font-semibold text-[#0B192C]">
                              {mod.number} : {mod.title}
                            </div>
                            <div className="text-[11px] text-[#6B7280] mt-0.5">
                              Durée : {mod.duration} · {mod.resources.length} modèle(s) inclus
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>

                {/* Bottom Action Area */}
                <div className="p-6 sm:p-7 bg-[#FAF9F6] border-t border-[#E7E5E4] space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-2xl font-serif font-bold text-[#0B192C]">
                        {course.priceFormatted}
                      </div>
                      <div className="text-[11px] text-[#6B7280]">
                        soit {Math.round(course.price * 1.2)} € TTC (TVA 20% déductible)
                      </div>
                    </div>

                    <div className="text-right text-[11px] text-[#6B7280]">
                      Facture immédiate
                    </div>
                  </div>

                  {isUnlocked ? (
                    <button
                      onClick={() => setActiveCourseToPlay(course)}
                      className="w-full py-3.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>Entrer dans l'espace formation →</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setCourseToUnlock(course)}
                      className="w-full py-3.5 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#152744] active:scale-[0.99] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <CreditCard className="w-4 h-4 text-[#CBB07E]" />
                      <span>Débloquer cette formation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <p className="text-[10px] text-center text-[#9CA3AF]">
                    Accès immédiat 24/7 sur ordinateur, tablette et smartphone.
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* How it Works / 3 Steps Banner */}
      <section className="py-16 bg-white border-y border-[#E7E5E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-[#8C6D37] mb-1">
              Fonctionnement 100% Autonome
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B192C]">
              Comment accéder à vos formations ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-[#FAF9F6] border border-[#E7E5E4] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#0B192C] text-[#CBB07E] font-serif font-bold flex items-center justify-center">
                1
              </div>
              <h3 className="font-serif font-bold text-base text-[#0B192C]">
                Choix et règlement en ligne
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Cliquez sur "Débloquer cette formation" pour régler en quelques secondes par carte bancaire sécurisée, ou entrez votre code d'accès société.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#FAF9F6] border border-[#E7E5E4] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#0B192C] text-[#CBB07E] font-serif font-bold flex items-center justify-center">
                2
              </div>
              <h3 className="font-serif font-bold text-base text-[#0B192C]">
                Déverrouillage instantané
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Vos modules vidéo sont immédiatement débloqués. Vous visionnez à votre rythme et téléchargez tous les modèles Word et Excel.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#FAF9F6] border border-[#E7E5E4] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#0B192C] text-[#CBB07E] font-serif font-bold flex items-center justify-center">
                3
              </div>
              <h3 className="font-serif font-bold text-base text-[#0B192C]">
                Mise en pratique & Attestation
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Appliquez sereinement les préconisations au sein de votre entreprise et générez votre attestation de fin de formation officielle.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate / Enterprise FAQ on Training */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-[#8C6D37] mb-1">
            Questions Pratiques
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#0B192C]">
            Questions fréquentes sur les formations
          </h2>
        </div>

        <div className="space-y-4 text-xs">
          <div className="p-5 rounded bg-white border border-[#E7E5E4] space-y-2">
            <div className="font-bold text-[#0B192C] text-sm">
              Puis-je faire financer ces formations par mon OPCO ?
            </div>
            <p className="text-[#4B5563] leading-relaxed">
              Oui, les formations d'AUREALYS Conseil RH peuvent faire l'objet d'une convention de formation professionnelle avec délivrance d'un programme détaillé et d'une attestation de fin de parcours pour transmission à votre opérateur de compétences.
            </p>
          </div>

          <div className="p-5 rounded bg-white border border-[#E7E5E4] space-y-2">
            <div className="font-bold text-[#0B192C] text-sm">
              Combien de temps ai-je accès aux vidéos et aux documents ?
            </div>
            <p className="text-[#4B5563] leading-relaxed">
              Votre accès est garanti pendant 12 mois minimum avec toutes les mises à jour réglementaires apportées par Mathilde Galland en cours d'année. Vous pouvez télécharger et conserver à vie les modèles Word et Excel sur votre ordinateur.
            </p>
          </div>

          <div className="p-5 rounded bg-white border border-[#E7E5E4] space-y-2">
            <div className="font-bold text-[#0B192C] text-sm">
              Que faire si j'ai un doute juridique spécifique lors de l'application ?
            </div>
            <p className="text-[#4B5563] leading-relaxed">
              Chaque apprenant peut solliciter un échange individuel de 30 minutes avec Mathilde Galland ou souscrire à une formule d'accompagnement sur-mesure pour auditer les documents rédigés.
            </p>
          </div>
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-12 p-6 rounded-lg bg-[#0B192C] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-serif font-bold text-base">
              Besoin d'une formation sur-mesure pour vos managers ?
            </div>
            <p className="text-xs text-[#D1D5DB] mt-1">
              Mathilde Galland intervient également en présentiel dans l'Ain et Auvergne-Rhône-Alpes.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-5 py-3 text-xs font-semibold text-[#0B192C] bg-[#CBB07E] hover:bg-[#D9C496] rounded-sm transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Échanger avec Mathilde Galland
          </button>
        </div>

      </section>

      {/* Payment / Unlock Modal */}
      {courseToUnlock && (
        <CoursePaymentModal
          course={courseToUnlock}
          isOpen={true}
          onClose={() => setCourseToUnlock(null)}
          onUnlockCourse={handleUnlockCourse}
        />
      )}

    </div>
  );
};
