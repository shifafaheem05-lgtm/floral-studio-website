import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Users, Check, Sparkles } from 'lucide-react';
import { WORKSHOP_DATA, SITE_CONFIG } from '../data/siteContent';

interface WorkshopBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkshopBookingModal: React.FC<WorkshopBookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(WORKSHOP_DATA.schedule[0].date);
  const [seats, setSeats] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentSchedule = WORKSHOP_DATA.schedule.find((s) => s.date === selectedDate) || WORKSHOP_DATA.schedule[0];
  const priceNum = 145;
  const totalPrice = priceNum * seats;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Please provide your full name.';
    if (!email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email.';
    }
    if (!phone.trim()) newErrors.phone = 'Please provide a contact phone number.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const code = `WS-${Math.floor(10000 + Math.random() * 90000)}`;
      setConfirmationCode(code);
      setIsSubmitting(false);
    }, 500);
  };

  const handleReset = () => {
    setConfirmationCode(null);
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setSeats(1);
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="workshop-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#292725]/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#F7F2EC] rounded-lg shadow-2xl border border-[#B6A69B]/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#F7F2EC]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#B6A69B]/30 flex items-center justify-between z-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#7D8875] font-semibold block">
              Atelier Workshop Reservation
            </span>
            <h3 id="workshop-modal-title" className="font-serif text-2xl text-[#292725]">
              {WORKSHOP_DATA.sessionName}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking modal"
            className="p-2 rounded-full text-[#765E52] hover:text-[#292725] hover:bg-[#EFE6DD] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {confirmationCode ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#EFE6DD] border border-[#3E5145]/40 text-[#3E5145] flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7" />
              </div>

              <h4 className="font-serif text-3xl text-[#292725] mb-2">
                Seat Reserved With Joy
              </h4>
              <p className="text-sm text-[#765E52] font-light max-w-md mx-auto mb-6">
                We have registered <span className="font-semibold text-[#292725]">{seats} seat{seats > 1 ? 's' : ''}</span> for{' '}
                <span className="font-semibold text-[#292725]">{name}</span> on{' '}
                <span className="font-semibold text-[#292725]">{selectedDate}</span> ({currentSchedule.time}).
              </p>

              <div className="bg-[#EFE6DD] p-5 rounded-md border border-[#B6A69B]/30 max-w-sm mx-auto text-left mb-6 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#765E52]">Reservation Code:</span>
                  <span className="font-mono font-semibold text-[#3E5145]">#{confirmationCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#765E52]">Atelier Location:</span>
                  <span className="font-medium text-[#292725]">{WORKSHOP_DATA.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#765E52]">Total (Due at studio):</span>
                  <span className="font-semibold text-[#3E5145]">${totalPrice} USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#765E52]">Confirmation sent to:</span>
                  <span className="font-medium text-[#292725]">{email}</span>
                </div>
              </div>

              <p className="text-xs text-[#7D8875] mb-6">
                All velvet pipe cleaners, cotton yarns, ergonomic crochet hooks, and studio refreshments are prepared for your arrival.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 bg-[#3E5145] text-[#F7F2EC] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#2A3830] transition-colors"
              >
                Close &amp; Return to Studio
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              {/* Studio Overview Pill */}
              <div className="p-4 bg-[#EFE6DD]/70 rounded-md border border-[#B6A69B]/30 text-xs text-[#765E52] space-y-1.5 font-light">
                <div className="flex items-center gap-2 text-[#3E5145] font-medium">
                  <Sparkles className="w-4 h-4 text-[#C99B9A]" />
                  <span>3-Hour Guided Velvet &amp; Crochet Flower Crafting</span>
                </div>
                <p>
                  Includes all plush velvet pipe cleaners, combed cotton yarn, bamboo crochet hooks, and a ceramic vase for your completed plush bouquet.
                </p>
              </div>

              {/* Schedule Select */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#765E52] mb-2">
                  Select Workshop Date
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {WORKSHOP_DATA.schedule.map((slot) => {
                    const isSelected = selectedDate === slot.date;
                    return (
                      <button
                        key={slot.date}
                        type="button"
                        onClick={() => setSelectedDate(slot.date)}
                        className={`p-3.5 text-left rounded-md border transition-all ${
                          isSelected
                            ? 'bg-[#3E5145] text-[#F7F2EC] border-[#3E5145] shadow-xs'
                            : 'bg-[#EFE6DD]/50 text-[#292725] border-[#B6A69B]/30 hover:border-[#3E5145]'
                        }`}
                      >
                        <div className={`text-[11px] uppercase tracking-wider font-semibold mb-1 ${isSelected ? 'text-[#DDB8B5]' : 'text-[#7D8875]'}`}>
                          {slot.day}
                        </div>
                        <div className="font-serif text-sm font-medium leading-tight">
                          {slot.date}
                        </div>
                        <div className={`text-[11px] mt-1 ${isSelected ? 'text-[#EFE6DD]' : 'text-[#765E52]'}`}>
                          {slot.time}
                        </div>
                        <div className={`text-[10px] mt-1.5 font-medium ${isSelected ? 'text-[#F7F2EC]' : 'text-[#C99B9A]'}`}>
                          {slot.seatsLeft} of {slot.totalSeats} seats remaining
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Seat Count Selection */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="seat-count" className="text-xs uppercase tracking-wider font-semibold text-[#765E52]">
                    Number of Seats
                  </label>
                  <span className="text-xs font-semibold text-[#3E5145]">
                    ${priceNum} / guest
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setSeats(num)}
                      className={`w-11 h-10 rounded-sm text-xs font-semibold border transition-all ${
                        seats === num
                          ? 'bg-[#3E5145] text-[#F7F2EC] border-[#3E5145]'
                          : 'bg-[#EFE6DD]/60 text-[#292725] border-[#B6A69B]/40 hover:border-[#3E5145]'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <span className="text-xs text-[#765E52] ml-2 font-light">
                    Subtotal: <span className="font-semibold text-[#292725]">${totalPrice} USD</span>
                  </span>
                </div>
              </div>

              {/* Guest Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ws-name" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="ws-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-3.5 py-2.5 bg-[#EFE6DD]/60 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] focus:outline-hidden focus:border-[#3E5145] focus:bg-white"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="ws-email" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="ws-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eleanor@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#EFE6DD]/60 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] focus:outline-hidden focus:border-[#3E5145] focus:bg-white"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ws-phone" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="ws-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 bg-[#EFE6DD]/60 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] focus:outline-hidden focus:border-[#3E5145] focus:bg-white"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="ws-notes" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1">
                    Special Notes or Occasion
                  </label>
                  <input
                    id="ws-notes"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Birthday gift, dietary restriction"
                    className="w-full px-3.5 py-2.5 bg-[#EFE6DD]/60 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] focus:outline-hidden focus:border-[#3E5145] focus:bg-white"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#B6A69B]/30">
                <div className="text-xs text-[#765E52]">
                  No upfront charge online · Payment settled in studio
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 text-xs uppercase tracking-widest font-medium text-[#765E52] hover:text-[#292725]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 bg-[#3E5145] text-[#F7F2EC] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#2A3830] transition-colors disabled:opacity-60 shadow-xs"
                  >
                    {isSubmitting ? 'Confirming...' : `Confirm ${seats} Seat${seats > 1 ? 's' : ''} ($${totalPrice})`}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
