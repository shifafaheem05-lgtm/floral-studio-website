import React, { useState, useEffect } from 'react';
import { MessageCircle, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

/**
 * Calculates whether the current time falls within studio business hours.
 * Business Hours: Monday – Saturday, 10:00 AM – 6:00 PM (18:00).
 * Sunday is Closed (Away).
 */
export function getStudioBusinessStatus(date: Date = new Date()): {
  isAvailable: boolean;
  statusLabel: 'Available' | 'Away';
  hoursSummary: string;
  nextStatusNote: string;
} {
  const day = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  const openingMinutes = 10 * 60; // 10:00 AM (600 mins)
  const closingMinutes = 18 * 60; // 6:00 PM (1080 mins)

  const isBusinessDay = day >= 1 && day <= 6; // Mon-Sat
  const isDuringHours = totalMinutes >= openingMinutes && totalMinutes < closingMinutes;
  const isAvailable = isBusinessDay && isDuringHours;

  let nextStatusNote = '';
  if (isAvailable) {
    const remainingMinutes = closingMinutes - totalMinutes;
    const remHours = Math.floor(remainingMinutes / 60);
    const remMins = remainingMinutes % 60;
    if (remHours > 0) {
      nextStatusNote = `Open for another ${remHours}h ${remMins > 0 ? `${remMins}m` : ''}`;
    } else {
      nextStatusNote = `Closing soon in ${remMins}m (at 6:00 PM)`;
    }
  } else {
    if (day === 0) {
      // Sunday
      nextStatusNote = 'Studio opens Monday at 10:00 AM';
    } else if (totalMinutes < openingMinutes) {
      // Before 10:00 AM today
      nextStatusNote = 'Studio opens today at 10:00 AM';
    } else {
      // After 6:00 PM
      if (day === 6) {
        nextStatusNote = 'Studio reopens Monday at 10:00 AM';
      } else {
        nextStatusNote = 'Studio reopens tomorrow at 10:00 AM';
      }
    }
  }

  return {
    isAvailable,
    statusLabel: isAvailable ? 'Available' : 'Away',
    hoursSummary: 'Mon – Sat: 10:00 AM – 6:00 PM',
    nextStatusNote,
  };
}

export const FloatingWhatsApp: React.FC = () => {
  const [businessStatus, setBusinessStatus] = useState(() => getStudioBusinessStatus());
  const [isIconHovered, setIsIconHovered] = useState(false);
  const [showStatusDetails, setShowStatusDetails] = useState(false);

  // Re-check business hours status every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBusinessStatus(getStudioBusinessStatus());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const { isAvailable, statusLabel, hoursSummary, nextStatusNote } = businessStatus;

  // WhatsApp link configuration
  const messageText = encodeURIComponent(
    "Hello Floral Twistella, I'd love to inquire about your handcrafted crochet & velvet flowers or workshops."
  );
  const whatsappUrl = SITE_CONFIG.contact.whatsapp
    ? `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${messageText}`
    : `https://api.whatsapp.com/send?text=${messageText}`;

  return (
    <aside
      aria-label="Direct Studio Contact & Availability"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 select-none"
    >
      {/* Small Status Indicator Bubble (Available / Away) */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowStatusDetails(!showStatusDetails)}
          onMouseEnter={() => setShowStatusDetails(true)}
          onMouseLeave={() => setShowStatusDetails(false)}
          onFocus={() => setShowStatusDetails(true)}
          onBlur={() => setShowStatusDetails(false)}
          aria-expanded={showStatusDetails}
          aria-label={`Studio is currently ${statusLabel}. Click to view business hours.`}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 shadow-md border backdrop-blur-md cursor-pointer hover:scale-102 focus:outline-hidden focus:ring-2 focus:ring-[#7D8875] ${
            isAvailable
              ? 'bg-white/95 text-emerald-800 border-emerald-300 shadow-emerald-950/10 hover:bg-white'
              : 'bg-[#292725]/95 text-amber-200 border-amber-600/40 shadow-black/20 hover:bg-[#292725]'
          }`}
        >
          <span className="relative flex h-2 w-2">
            {isAvailable ? (
              <>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </>
            ) : (
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
            )}
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold">{statusLabel}</span>
        </button>

        {/* Business Hours Info Popover attached to status bubble */}
        <div
          role="tooltip"
          className={`absolute right-0 bottom-full mb-2 bg-[#292725] text-[#F7F2EC] text-xs p-3 rounded-lg shadow-xl border border-[#7D8875]/30 transition-all duration-300 w-56 sm:w-64 ${
            showStatusDetails
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-1.5 pointer-events-none'
          }`}
        >
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-1.5">
            <span className="font-serif font-semibold text-[#DDB8B5] text-sm">
              Floral Twistella
            </span>
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
                isAvailable ? 'bg-emerald-950 text-emerald-300' : 'bg-amber-950 text-amber-300'
              }`}
            >
              {statusLabel}
            </span>
          </div>

          <p className="text-[11px] text-[#E8E2D9] leading-relaxed mb-2">
            {isAvailable
              ? 'Our atelier team is currently active and usually responds within minutes.'
              : 'Our studio is currently closed. Leave a message and we will reply as soon as we open!'}
          </p>

          <div className="flex items-center gap-1.5 text-[10px] text-[#B6A69B] pt-1 border-t border-white/5">
            <Clock className="w-3 h-3 text-[#C99B9A]" />
            <span>{hoursSummary}</span>
          </div>
          {nextStatusNote && (
            <div className="text-[9.5px] text-[#A3B19B] mt-0.5 pl-4.5 font-medium">
              {nextStatusNote}
            </div>
          )}
        </div>
      </div>

      {/* Main WhatsApp Button & Subtle 'Message Us' Hover Label */}
      <div
        className="group/cta relative flex items-center gap-2.5"
        onMouseEnter={() => setIsIconHovered(true)}
        onMouseLeave={() => setIsIconHovered(false)}
      >
        {/* Small, subtle 'Message Us' label that only appears when hovering over the icon area */}
        <div
          aria-hidden={!isIconHovered}
          className={`bg-[#292725]/95 text-[#F7F2EC] text-xs font-medium px-3 py-1.5 rounded-full shadow-lg border border-[#7D8875]/40 backdrop-blur-md whitespace-nowrap pointer-events-none transition-all duration-300 ease-out flex items-center gap-1.5 ${
            isIconHovered
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-2'
          }`}
        >
          <span className="tracking-wide">Message Us</span>
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isAvailable ? 'bg-emerald-400' : 'bg-amber-400'
            }`}
          />
        </div>

        {/* Circular WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onFocus={() => setIsIconHovered(true)}
          onBlur={() => setIsIconHovered(false)}
          aria-label={`Message Us on WhatsApp - Floral Twistella Studio is currently ${statusLabel}`}
          className="relative w-13 h-13 rounded-full bg-[#3E5145] text-[#F7F2EC] flex items-center justify-center shadow-lg border border-[#F7F2EC]/30 transition-all duration-300 hover:scale-106 hover:bg-[#2A3830] active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-[#7D8875] focus:ring-offset-2"
        >
          <MessageCircle className="w-6 h-6 stroke-[1.8]" />

          {/* Mini Corner Status Dot for instant visual cue */}
          <span
            className={`absolute top-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-[#3E5145] flex items-center justify-center ${
              isAvailable ? 'bg-emerald-500' : 'bg-amber-400'
            }`}
          >
            {isAvailable && (
              <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
            )}
          </span>
        </a>
      </div>
    </aside>
  );
};
