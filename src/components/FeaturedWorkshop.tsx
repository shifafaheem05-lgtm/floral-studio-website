import React, { useState } from 'react';
import { ArrowRight, Scissors, Gift, Sparkles, Flower2, Calendar, Users } from 'lucide-react';
import { WORKSHOP_DATA, WORKSHOP_BENEFITS } from '../data/siteContent';

interface FeaturedWorkshopProps {
  onOpenBookingModal: () => void;
}

export const FeaturedWorkshop: React.FC<FeaturedWorkshopProps> = ({ onOpenBookingModal }) => {
  const [currentSrc, setCurrentSrc] = useState('/images/workshop-craft.jpg');
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    if (currentSrc === '/images/workshop-craft.jpg') {
      setCurrentSrc('/images/workshop_crochet_pipe_cleaner_1790198007152.jpg');
    } else {
      setImageError(true);
    }
  };

  return (
    <section id="workshops" className="py-24 sm:py-32 bg-[#F7F2EC] relative overflow-hidden">
      {/* Subtle organic decorative background shape */}
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/4 w-96 h-96 rounded-full bg-[#DDB8B5]/15 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Workshop Editorial Photography */}
          <div className="lg:col-span-6 relative">
            {/* Layered decorative background offset */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 sm:-inset-4 rounded-xl bg-[#EFE6DD] border border-[#B6A69B]/30 -z-10 -rotate-1"
            />

            <div className="relative rounded-lg overflow-hidden bg-[#EFE6DD] border border-[#B6A69B]/25 shadow-xl aspect-[4/3] group">
              {!imageError ? (
                <img
                  src={currentSrc}
                  alt="Floral Twistella workshop craft table with plush velvet pipe cleaners, cotton yarn skeins, and artisans sculpting flowers"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#EFE6DD] to-[#F7F2EC] text-[#3E5145]">
                  <Scissors className="w-12 h-12 mb-3 text-[#C99B9A]" />
                  <p className="font-serif text-2xl italic">The Velvet Craft Atelier</p>
                  <span className="text-xs uppercase tracking-widest text-[#765E52] mt-1">Crochet &amp; Velvet Wire Workshop</span>
                </div>
              )}

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#292725]/50 via-transparent to-transparent opacity-40 pointer-events-none" />

              {/* Workshop Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-[#F7F2EC]">
                <div className="bg-[#292725]/80 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-white/10 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-[#DDB8B5]" />
                  <span className="tracking-wider uppercase text-[11px]">8 Artisans Max / Session</span>
                </div>
                <span className="text-[11px] uppercase tracking-widest bg-[#3E5145]/90 px-3 py-1.5 rounded-sm">
                  {WORKSHOP_DATA.pricePerSeat}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Workshop Editorial Copy & Event Blocks */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#C99B9A]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#765E52]">
                {WORKSHOP_DATA.subtitle}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292725] tracking-tight leading-tight mb-5">
              {WORKSHOP_DATA.title}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#765E52] font-light leading-relaxed mb-8">
              {WORKSHOP_DATA.description}
            </p>

            {/* Event Information in Elegant Small Blocks */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
              <div className="p-4 bg-[#EFE6DD]/70 rounded-md border border-[#B6A69B]/25">
                <span className="text-[10px] uppercase tracking-widest text-[#7D8875] font-semibold block mb-1">
                  Craft Format
                </span>
                <span className="font-serif text-base sm:text-lg text-[#292725] font-medium block">
                  VELVET &amp; CROCHET CRAFT
                </span>
                <span className="text-xs text-[#765E52] mt-0.5 block font-light">3 Hours Guided Fiber Art</span>
              </div>

              <div className="p-4 bg-[#EFE6DD]/70 rounded-md border border-[#B6A69B]/25">
                <span className="text-[10px] uppercase tracking-widest text-[#7D8875] font-semibold block mb-1">
                  Intimate Size
                </span>
                <span className="font-serif text-base sm:text-lg text-[#292725] font-medium block">
                  Limited seats
                </span>
                <span className="text-xs text-[#765E52] mt-0.5 block font-light">Cozy table setting</span>
              </div>

              <div className="p-4 bg-[#EFE6DD]/70 rounded-md border border-[#B6A69B]/25">
                <span className="text-[10px] uppercase tracking-widest text-[#7D8875] font-semibold block mb-1">
                  Complete Kit
                </span>
                <span className="font-serif text-base sm:text-lg text-[#292725] font-medium block">
                  Materials included
                </span>
                <span className="text-xs text-[#765E52] mt-0.5 block font-light">Velvet sticks, yarn &amp; vase</span>
              </div>

              <div className="p-4 bg-[#EFE6DD]/70 rounded-md border border-[#B6A69B]/25">
                <span className="text-[10px] uppercase tracking-widest text-[#7D8875] font-semibold block mb-1">
                  Skill Level
                </span>
                <span className="font-serif text-base sm:text-lg text-[#292725] font-medium block">
                  Beginner friendly
                </span>
                <span className="text-xs text-[#765E52] mt-0.5 block font-light">Step-by-step guidance</span>
              </div>
            </div>

            {/* Next Date & Reservation Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#3E5145] text-[#F7F2EC] text-xs uppercase tracking-widest font-medium rounded-sm transition-all duration-300 hover:bg-[#2A3830] hover:shadow-md active:translate-y-px"
              >
                <span>Reserve Your Place</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#765E52] font-light px-2">
                <Calendar className="w-3.5 h-3.5 text-[#C99B9A]" />
                <span>Next sessions: Oct 11 &amp; Oct 25</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 10: Minimal Workshop Benefits with Thin-Line Icons */}
        <div className="mt-20 pt-16 border-t border-[#B6A69B]/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WORKSHOP_BENEFITS.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-start group">
                <div className="w-11 h-11 rounded-full bg-[#EFE6DD] border border-[#B6A69B]/30 flex items-center justify-center text-[#3E5145] mb-4 transition-colors duration-300 group-hover:bg-[#3E5145] group-hover:text-[#F7F2EC]">
                  {benefit.icon === 'flower' && <Flower2 className="w-5 h-5 stroke-[1.4]" />}
                  {benefit.icon === 'scissors' && <Scissors className="w-5 h-5 stroke-[1.4]" />}
                  {benefit.icon === 'gift' && <Gift className="w-5 h-5 stroke-[1.4]" />}
                  {benefit.icon === 'sparkle' && <Sparkles className="w-5 h-5 stroke-[1.4]" />}
                </div>

                <h3 className="font-serif text-xl text-[#292725] mb-1.5 font-medium">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#765E52] font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
