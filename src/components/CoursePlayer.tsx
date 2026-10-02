import React, { useState } from 'react';
import { TrainingCourse, TrainingModule } from '../types';
import { FOUNDER_INFO } from '../data/content';
import { 
  Play, 
  CheckCircle2, 
  Download, 
  FileText, 
  ArrowLeft, 
  Clock, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  Sparkles,
  HelpCircle,
  ExternalLink,
  Lock
} from 'lucide-react';

interface CoursePlayerProps {
  course: TrainingCourse;
  onBackToCatalog: () => void;
}

export const CoursePlayer: React.FC<CoursePlayerProps> = ({ course, onBackToCatalog }) => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [learnerName, setLearnerName] = useState('Dirigeant d\'entreprise');

  const currentModule: TrainingModule = course.modules[activeModuleIndex] || course.modules[0];

  const handleToggleComplete = (moduleId: string) => {
    if (completedModules.includes(moduleId)) {
      setCompletedModules(completedModules.filter(id => id !== moduleId));
    } else {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const progressPercent = Math.round((completedModules.length / course.modules.length) * 100);

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#111827] pb-24">
      
      {/* Top Header Bar for Student Space */}
      <div className="bg-[#0B192C] text-white border-b border-[#1E293B] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onBackToCatalog}
            className="flex items-center gap-2 text-xs font-semibold text-[#D1D5DB] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au catalogue des formations</span>
          </button>

          <div className="flex items-center gap-4 text-xs">
            <div className="hidden sm:flex items-center gap-2 text-[#9CA3AF]">
              <span>Progression :</span>
              <div className="w-32 bg-white/10 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#CBB07E] h-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="font-mono text-white">{progressPercent}%</span>
            </div>

            {progressPercent === 100 && (
              <button
                onClick={() => setShowCertificateModal(true)}
                className="px-3 py-1.5 bg-[#CBB07E] text-[#0B192C] font-semibold rounded-sm text-xs flex items-center gap-1.5 hover:bg-[#D9C496] cursor-pointer"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Télécharger mon attestation</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mathilde Galland Notice Banner for easy module integration */}
      <div className="bg-[#FAF7F0] border-b border-[#E9DFCB] px-4 py-2.5 text-xs text-[#6B7280]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#8C6D37] shrink-0" />
            <span>
              <strong>Espace Formation AUREALYS Conseil RH :</strong> Vos modules sont prêts à être enrichis. Pour modifier vos vidéos ou fiches, éditez le fichier <code className="bg-[#F0ECE1] px-1 py-0.5 rounded text-[#0B192C] font-mono">src/data/courses.ts</code>.
            </span>
          </div>
          <span className="hidden md:inline-block text-[11px] text-[#8C6D37]">Accès client vérifié ✓</span>
        </div>
      </div>

      {/* Main Learning Hub Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Title Bar */}
        <div className="mb-6">
          <div className="text-xs uppercase font-mono tracking-wider text-[#8C6D37] mb-1">
            Formation Digitale AUREALYS · Espace Apprenant
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B192C]">
            {course.title}
          </h1>
          <p className="text-xs text-[#4B5563] mt-1">
            Animée par <strong>Mathilde Galland</strong> · Juriste en Droit Social
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content Area: Video Player & Detailed Notes (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Video Player Card */}
            <div className="bg-[#0B192C] rounded-lg overflow-hidden shadow-lg border border-[#1E293B]">
              
              {/* Responsive Video Container (16:9) */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                {currentModule.videoUrl && currentModule.videoUrl.includes('embed') ? (
                  <iframe
                    src={currentModule.videoUrl}
                    title={currentModule.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="text-center p-8 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto hover:scale-105 transition-transform cursor-pointer border border-white/20">
                      <Play className="w-8 h-8 ml-1 text-[#CBB07E]" />
                    </div>
                    <div className="text-white text-sm font-semibold">
                      {currentModule.number} : {currentModule.title}
                    </div>
                    <p className="text-xs text-[#9CA3AF] max-w-sm mx-auto">
                      Intégrez votre lien vidéo (Loom, YouTube Unlisted, Vimeo ou MP4) dans <code>src/data/courses.ts</code>.
                    </p>
                  </div>
                )}
              </div>

              {/* Module Action Under Video */}
              <div className="p-4 bg-[#0F2238] flex flex-wrap items-center justify-between gap-3 text-xs text-white border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[#CBB07E] font-semibold">{currentModule.number}</span>
                  <span className="text-[#9CA3AF]">|</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    {currentModule.duration}
                  </span>
                </div>

                <button
                  onClick={() => handleToggleComplete(currentModule.id)}
                  className={`px-4 py-2 rounded-sm text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    completedModules.includes(currentModule.id)
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-[#CBB07E] hover:bg-[#D9C496] text-[#0B192C]'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {completedModules.includes(currentModule.id)
                      ? 'Module terminé ✓'
                      : 'Marquer ce module comme terminé'}
                  </span>
                </button>
              </div>

            </div>

            {/* Module Details & Study Guide */}
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-[#E7E5E4] space-y-6">
              
              <div>
                <h2 className="text-lg font-serif font-bold text-[#0B192C] mb-2">
                  Objectifs & Synthèse du {currentModule.number}
                </h2>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {currentModule.summary}
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="p-5 rounded bg-[#FAF9F6] border border-[#EBE8E1] space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#8C6D37] flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Points clés à retenir & Recommandations de Mathilde Galland</span>
                </h3>
                <ul className="space-y-2 text-xs text-[#374151]">
                  {currentModule.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D37] shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources for this specific module */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#0B192C] mb-3">
                  Documents d'application pour ce module :
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentModule.resources.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded border border-[#E7E5E4] bg-[#FAF9F6] hover:bg-white transition-colors flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <FileText className="w-4 h-4 text-[#8C6D37] shrink-0" />
                        <span className="truncate font-medium text-[#111827]">{res}</span>
                      </div>
                      <a
                        href="#download"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Téléchargement de : ${res}\n(Document type AUREALYS Conseil RH)`);
                        }}
                        className="px-2.5 py-1 text-[11px] font-semibold text-[#0B192C] bg-white border border-[#D1D5DB] rounded-xs hover:bg-[#F3F4F6] shrink-0 flex items-center gap-1"
                      >
                        <Download className="w-3 h-3 text-[#8C6D37]" />
                        <span>Ouvrir</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Between Modules */}
              <div className="pt-6 border-t border-[#E7E5E4] flex items-center justify-between">
                <button
                  disabled={activeModuleIndex === 0}
                  onClick={() => setActiveModuleIndex(activeModuleIndex - 1)}
                  className={`px-4 py-2.5 text-xs font-semibold rounded-sm border transition-colors ${
                    activeModuleIndex === 0
                      ? 'text-[#9CA3AF] border-[#E5E7EB] cursor-not-allowed'
                      : 'text-[#0B192C] border-[#D1D5DB] hover:bg-[#F3F4F6] cursor-pointer'
                  }`}
                >
                  ← Module précédent
                </button>

                <div className="text-xs text-[#6B7280]">
                  Module {activeModuleIndex + 1} sur {course.modules.length}
                </div>

                <button
                  disabled={activeModuleIndex === course.modules.length - 1}
                  onClick={() => setActiveModuleIndex(activeModuleIndex + 1)}
                  className={`px-4 py-2.5 text-xs font-semibold rounded-sm transition-colors ${
                    activeModuleIndex === course.modules.length - 1
                      ? 'text-[#9CA3AF] border border-[#E5E7EB] cursor-not-allowed'
                      : 'bg-[#0B192C] text-white hover:bg-[#152744] cursor-pointer'
                  }`}
                >
                  Module suivant →
                </button>
              </div>

            </div>

          </div>

          {/* Right Sidebar: Module Index & Toolbox Assets (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Syllabus / Module List */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-[#E7E5E4] space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#0B192C] font-bold">
                  Programme de la formation
                </h3>
                <span className="text-[11px] font-mono text-[#8C6D37]">
                  {completedModules.length}/{course.modules.length} vus
                </span>
              </div>

              <div className="space-y-2">
                {course.modules.map((mod, idx) => {
                  const isActive = idx === activeModuleIndex;
                  const isDone = completedModules.includes(mod.id);

                  return (
                    <button
                      key={mod.id}
                      onClick={() => setActiveModuleIndex(idx)}
                      className={`w-full p-3.5 rounded text-left transition-all flex items-start gap-3 border cursor-pointer ${
                        isActive
                          ? 'bg-[#0B192C] text-white border-[#0B192C] shadow-sm'
                          : 'bg-[#FAF9F6] text-[#374151] border-[#E7E5E4] hover:border-[#D1D5DB]'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {isDone ? (
                          <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-[#CBB07E]' : 'text-emerald-600'}`} />
                        ) : (
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] font-mono ${
                            isActive ? 'border-[#CBB07E] text-[#CBB07E]' : 'border-[#9CA3AF] text-[#9CA3AF]'
                          }`}>
                            {idx + 1}
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className={`text-[11px] font-mono uppercase ${isActive ? 'text-[#CBB07E]' : 'text-[#8C6D37]'}`}>
                          {mod.number} · {mod.duration}
                        </div>
                        <div className={`text-xs font-semibold mt-0.5 leading-snug line-clamp-2 ${isActive ? 'text-white' : 'text-[#0B192C]'}`}>
                          {mod.title}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Toolbox: Downloadable Assets Included in Package */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-[#E7E5E4] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#0B192C] font-bold">
                <Download className="w-4 h-4 text-[#8C6D37]" />
                <span>Boîte à outils téléchargeable</span>
              </div>
              <p className="text-xs text-[#6B7280]">
                Fichiers prêts à l'emploi inclus avec votre formation :
              </p>

              <div className="space-y-2.5">
                {course.includedAssets.map((asset) => (
                  <div
                    key={asset.id}
                    className="p-3 bg-[#FAF9F6] border border-[#EBE8E1] rounded text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#0B192C]">{asset.title}</span>
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 bg-white border border-[#D1D5DB] rounded text-[#4B5563]">
                        {asset.type}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6B7280] leading-snug">
                      {asset.description}
                    </p>
                    <a
                      href="#download-kit"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Téléchargement du kit : ${asset.title}\n(Fichier modèle AUREALYS Conseil RH)`);
                      }}
                      className="text-[11px] font-semibold text-[#8C6D37] hover:underline flex items-center gap-1 pt-1"
                    >
                      <Download className="w-3 h-3" />
                      <span>Télécharger le modèle</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Need Direct Advisory Assistance */}
            <div className="bg-[#FAF7F0] rounded-lg p-5 border border-[#E9DFCB] space-y-3 text-xs text-[#4B5563]">
              <div className="font-serif font-bold text-[#0B192C] text-sm">
                Un cas complexe dans votre entreprise ?
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Vous pouvez compléter cette formation par un accompagnement sur-mesure ou une relecture de vos actes par Mathilde Galland.
              </p>
              <a
                href={FOUNDER_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 bg-[#0B192C] text-white text-xs font-semibold rounded-sm text-center block hover:bg-[#152744] transition-colors"
              >
                Prendre rendez-vous avec Mathilde Galland →
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Certificate Modal */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E7E5E4] text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-50 text-[#8C6D37] flex items-center justify-center mx-auto border border-amber-200">
              <Award className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-[#0B192C]">
              Félicitations pour votre parcours !
            </h3>
            
            <p className="text-xs text-[#4B5563]">
              Vous avez complété l'ensemble des modules de la formation :
            </p>
            <div className="p-3 bg-[#FAF9F6] rounded font-semibold text-xs text-[#0B192C]">
              {course.title}
            </div>

            <div className="text-left text-xs space-y-1">
              <label className="block text-xs font-semibold text-[#0B192C]">Nom à inscrire sur l'attestation :</label>
              <input
                type="text"
                value={learnerName}
                onChange={(e) => setLearnerName(e.target.value)}
                className="w-full px-3 py-2 border border-[#D1D5DB] rounded-sm text-xs"
              />
            </div>

            <div className="pt-3 flex gap-3 justify-center">
              <button
                onClick={() => {
                  alert(`Attestation délivrée à ${learnerName} pour la formation "${course.title}".\nSignée par Mathilde Galland, AUREALYS Conseil RH.`);
                  setShowCertificateModal(false);
                }}
                className="px-5 py-2.5 bg-[#0B192C] text-white font-semibold rounded-sm text-xs hover:bg-[#152744]"
              >
                Générer mon attestation (PDF)
              </button>
              <button
                onClick={() => setShowCertificateModal(false)}
                className="px-4 py-2.5 text-xs text-[#6B7280] hover:text-[#0B192C]"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
