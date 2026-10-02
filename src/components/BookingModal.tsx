import React, { useState } from 'react';
import { X, Calendar, Clock, Video, Phone, CheckCircle2, User, Building, Mail, ArrowRight } from 'lucide-react';
import { FOUNDER_INFO } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialContext }) => {
  const [meetingType, setMeetingType] = useState<'phone' | 'video'>('phone');
  const [selectedDate, setSelectedDate] = useState<string>('Demain matin');
  const [selectedSlot, setSelectedSlot] = useState<string>('09:30 - 10:00');
  const [step, setStep] = useState<1 | 2>(1);

  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: initialContext || ''
  });

  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const dateOptions = [
    { label: "Dès demain", sub: "Disponibilité prioritaire" },
    { label: "Dans 2 jours", sub: "Créneaux ouverts" },
    { label: "La semaine prochaine", sub: "Selon vos disponibilités" }
  ];

  const timeSlots = [
    '09:00 - 09:30',
    '09:30 - 10:00',
    '11:00 - 11:30',
    '14:00 - 14:30',
    '15:30 - 16:00',
    '17:00 - 17:30'
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientInfo.name || !clientInfo.email || !clientInfo.phone) return;
    setConfirmed(true);
  };

  const handleClose = () => {
    setConfirmed(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E7E5E4] relative animate-in fade-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-[#6B7280] hover:text-[#0B192C] p-1.5 rounded transition-colors cursor-pointer"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmed ? (
          <div>
            {/* Header */}
            <div className="mb-6 border-b border-[#E7E5E4] pb-4">
              <div className="text-xs uppercase font-mono tracking-wider text-[#8C6D37] mb-1">
                Rendez-vous Découverte Offert · 30 minutes
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0B192C]">
                Réserver un échange avec Mathilde Galland
              </h3>
              <p className="text-xs text-[#4B5563] mt-1">
                Faisons le point sur votre situation RH en direct, sans aucun engagement commercial.
              </p>
            </div>

            {/* Direct Microsoft Bookings Option */}
            <div className="mb-6 p-4 rounded bg-[#FAF7F0] border border-[#E9DFCB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-semibold text-[#0B192C] block">Accéder à l'agenda en direct :</span>
                <span className="text-[#6B7280]">Réservez directement votre créneau sur notre plateforme Microsoft Bookings officielle.</span>
              </div>
              <a
                href={FOUNDER_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-[#0B192C] text-white font-semibold rounded-sm whitespace-nowrap hover:bg-[#152744] transition-colors self-stretch sm:self-auto text-center"
              >
                Ouvrir Microsoft Bookings →
              </a>
            </div>

            {step === 1 ? (
              <div className="space-y-6">
                
                {/* Format selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#0B192C] mb-2 uppercase tracking-wider">
                    1. Format souhaité
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setMeetingType('phone')}
                      className={`p-3.5 rounded-sm border text-left cursor-pointer transition-all flex items-center gap-3 ${
                        meetingType === 'phone'
                          ? 'bg-[#0B192C] text-white border-[#0B192C]'
                          : 'bg-[#FAF9F6] text-[#374151] border-[#E5E7EB] hover:border-[#D1D5DB]'
                      }`}
                    >
                      <Phone className="w-4 h-4 shrink-0 text-[#B8935A]" />
                      <div>
                        <div className="text-xs font-bold">Appel Téléphonique</div>
                        <div className="text-[11px] opacity-75">Mathilde vous appelle directement</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMeetingType('video')}
                      className={`p-3.5 rounded-sm border text-left cursor-pointer transition-all flex items-center gap-3 ${
                        meetingType === 'video'
                          ? 'bg-[#0B192C] text-white border-[#0B192C]'
                          : 'bg-[#FAF9F6] text-[#374151] border-[#E5E7EB] hover:border-[#D1D5DB]'
                      }`}
                    >
                      <Video className="w-4 h-4 shrink-0 text-[#B8935A]" />
                      <div>
                        <div className="text-xs font-bold">Visioconférence</div>
                        <div className="text-[11px] opacity-75">Lien Google Meet / Teams</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Day preference */}
                <div>
                  <label className="block text-xs font-semibold text-[#0B192C] mb-2 uppercase tracking-wider">
                    2. Période idéale
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {dateOptions.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedDate(opt.label)}
                        className={`p-2.5 rounded-sm border text-center cursor-pointer transition-all ${
                          selectedDate === opt.label
                            ? 'bg-[#FAF7F0] border-[#B8935A] text-[#0B192C] font-semibold'
                            : 'bg-white border-[#E5E7EB] text-[#4B5563] hover:border-[#D1D5DB]'
                        }`}
                      >
                        <div className="text-xs">{opt.label}</div>
                        <div className="text-[10px] text-[#8C6D37] mt-0.5">{opt.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time slot preference */}
                <div>
                  <label className="block text-xs font-semibold text-[#0B192C] mb-2 uppercase tracking-wider">
                    3. Créneau horaire indicatif
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 px-2 text-xs font-mono rounded-sm border text-center cursor-pointer transition-all ${
                          selectedSlot === slot
                            ? 'bg-[#0B192C] text-white border-[#0B192C]'
                            : 'bg-white border-[#E5E7EB] text-[#4B5563] hover:border-[#D1D5DB]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Next button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-3.5 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#152744] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Continuer vers mes coordonnées</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ) : (
              <form onSubmit={handleConfirm} className="space-y-4">
                
                <div className="p-3 bg-[#FAF7F0] rounded border border-[#E9DFCB] flex items-center justify-between text-xs text-[#0B192C]">
                  <div>
                    <span className="font-semibold">Créneau choisi :</span> {selectedDate} ({selectedSlot}) via {meetingType === 'phone' ? 'Téléphone' : 'Visioconférence'}
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-[#8C6D37] underline text-[11px] font-semibold cursor-pointer"
                  >
                    Modifier
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#374151] mb-1">
                      Votre Prénom & Nom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#D1D5DB] rounded-sm text-xs focus:outline-none focus:border-[#0B192C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#374151] mb-1">
                      Nom de l'entreprise *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Société SAS"
                      value={clientInfo.company}
                      onChange={(e) => setClientInfo({ ...clientInfo, company: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#D1D5DB] rounded-sm text-xs focus:outline-none focus:border-[#0B192C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#374151] mb-1">
                      Numéro de téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      value={clientInfo.phone}
                      onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#D1D5DB] rounded-sm text-xs focus:outline-none focus:border-[#0B192C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#374151] mb-1">
                      Adresse email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean@societe.fr"
                      value={clientInfo.email}
                      onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#D1D5DB] rounded-sm text-xs focus:outline-none focus:border-[#0B192C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#374151] mb-1">
                    Sujet ou contexte de l'échange (optionnel)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: besoin d'un audit de contrat, mise en place d'un CSE, ou souhait d'un DRH temps partagé..."
                    value={clientInfo.notes}
                    onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#D1D5DB] rounded-sm text-xs focus:outline-none focus:border-[#0B192C]"
                  />
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-4 text-xs font-medium text-[#4B5563] bg-[#F3F4F6] rounded-sm cursor-pointer"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#152744] active:scale-[0.99] rounded-sm transition-all cursor-pointer shadow-sm"
                  >
                    Confirmer ma demande de diagnostic offert
                  </button>
                </div>

              </form>
            )}

          </div>
        ) : (
          <div className="py-8 text-center space-y-4 animate-in fade-in duration-150">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-[#0B192C]">
              Votre rendez-vous est bien pré-réservé !
            </h3>

            <div className="max-w-md mx-auto p-4 bg-[#FAF9F6] rounded border border-[#E7E5E4] text-xs text-[#374151] space-y-1.5 text-left">
              <div><strong>Interlocutrice :</strong> Mathilde Galland (AUREALYS Conseil RH)</div>
              <div><strong>Format :</strong> {meetingType === 'phone' ? 'Appel Téléphonique' : 'Visioconférence'}</div>
              <div><strong>Période demandée :</strong> {selectedDate} ({selectedSlot})</div>
              <div><strong>Entreprise :</strong> {clientInfo.company}</div>
              <div><strong>Contact :</strong> {clientInfo.phone} · {clientInfo.email}</div>
            </div>

            <p className="text-xs text-[#6B7280] max-w-sm mx-auto leading-relaxed">
              Un email de confirmation récapitulatif vient d'être envoyé. Mathilde Galland prendra contact avec vous pour valider le créneau exact.
            </p>

            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-[#0B192C] rounded-sm cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
