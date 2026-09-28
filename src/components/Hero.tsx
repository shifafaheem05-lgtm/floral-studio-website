import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenWorkshopModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWorkshopModal }) => {
  const [currentSrc, setCurrentSrc] = useState('/images/hero-crochet-velvet.jpg');
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    if (currentSrc === '/images/hero-crochet-velvet.jpg') {
      setCurrentSrc('/images/hero_crochet_velvet_flowers_1790197987338.jpg');
    } else {
      setImageError(true);
    }
  };

  const scrollToCollections = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('collections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] lg:min-h-[94vh] flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#F7F2EC] bg-subtle-grain"
    >
      {/* Decorative Oversized Low-Opacity Botanical Shapes */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#EFE6DD]/70 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#DDB8B5]/20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#7D8875]/15 blur-3xl pointer-events-none"
      />

      {/* Subtle Botanical Line Accent Silhouette */}
      <svg
        aria-hidden="true"
        className="absolute right-0 top-12 w-96 h-96 text-[#7D8875]/8 pointer-events-none select-none"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M100 0 C120 40 160 80 200 100 C160 120 120 160 100 200 C80 160 40 120 0 100 C40 80 80 40 100 0 Z" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-6 h-[1px] bg-[#C99B9A]" />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#765E52]">
                CROCHET • VELVET STICKS • ARTISAN
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl xl:text-[82px] leading-[1.04] text-[#292725] tracking-tight mb-6">
              Flowers,
              <br />
              <span className="italic font-light text-[#3E5145]">Made to</span>
              <br />
              Last.
            </h1>

            {/* Sub-headline / Brand Promise */}
            <p className="text-base sm:text-lg text-[#765E52] leading-relaxed max-w-lg mb-8 font-light">
              Thoughtfully handcrafted crochet blooms and sculpted velvet pipe cleaner flowers designed to turn everyday moments into plush, everlasting keepsakes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#collections"
                onClick={scrollToCollections}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#3E5145] text-[#F7F2EC] text-xs uppercase tracking-widest font-medium rounded-sm transition-all duration-300 hover:bg-[#2A3830] hover:shadow-md active:translate-y-px"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={onOpenWorkshopModal}
                className="inline-flex items-center justify-center px-7 py-3.5 border border-[#3E5145] text-[#3E5145] text-xs uppercase tracking-widest font-medium rounded-sm transition-all duration-300 hover:bg-[#3E5145]/10 active:translate-y-px"
              >
                Book a Workshop
              </button>
            </div>

            {/* Quiet Atelier Trust Note */}
            <div className="pt-6 border-t border-[#B6A69B]/30 flex items-center gap-4 text-xs text-[#7D8875]">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C99B9A]" />
                <span className="font-medium tracking-wide">Tactile Fiber Craft</span>
              </div>
              <span aria-hidden="true" className="text-[#B6A69B]">·</span>
              <span>100% Everlasting Crochet &amp; Velvet Flowers</span>
            </div>
          </div>

          {/* Right Column: Editorial Hero Composition */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Subtle Rotated Vertical Label */}
              <div className="hidden sm:block absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] uppercase tracking-[0.3em] font-medium text-[#B6A69B] select-none whitespace-nowrap">
                CRAFTED WITH INTENTION
              </div>

              {/* Decorative layered backdrop card */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 rounded-2xl bg-[#EFE6DD] border border-[#B6A69B]/30 -z-10"
              />

              {/* Main Image Container with Soft Asymmetric Crop */}
              <div className="relative overflow-hidden rounded-2xl bg-[#EFE6DD] border border-[#B6A69B]/20 shadow-xl group aspect-[3/4] max-h-[580px] w-full">
                {!imageError ? (
                  <img
                    src={currentSrc}
                    alt="Floral Twistella artisan gently holding a handcrafted bouquet of crochet flowers and plush velvet pipe cleaner flowers"
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#EFE6DD] to-[#F7F2EC] text-[#3E5145]">
                    <svg className="w-16 h-16 mb-4 text-[#C99B9A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2C14 6 18 8 18 12C18 16 14 18 12 22C10 18 6 16 6 12C6 8 10 6 12 2Z" fill="#C99B9A" fillOpacity="0.4" />
                      <circle cx="12" cy="12" r="3" fill="#3E5145" />
                    </svg>
                    <p className="font-serif text-xl italic text-center">Floral Twistella Atelier</p>
                    <span className="text-xs text-[#765E52] mt-1 tracking-widest uppercase">Crochet &amp; Velvet Flowers</span>
                  </div>
                )}

                {/* Subtle soft bottom gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292725]/40 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-25 transition-opacity" />

                {/* Soft Bottom Metadata Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
                  <div className="bg-[#F7F2EC]/90 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-[#B6A69B]/30 shadow-xs">
                    <span className="text-[11px] uppercase tracking-wider text-[#3E5145] font-semibold">
                      Crochet &amp; Velvet Stems
                    </span>
                  </div>
                  <span className="text-[11px] text-[#F7F2EC] drop-shadow-xs font-light tracking-widest uppercase">
                    Plush Keepsakes
                  </span>
                </div>
              </div>

              {/* Botanical Accent Floating Ornament */}
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-[#F7F2EC] border border-[#B6A69B]/30 shadow-md flex items-center justify-center p-3 select-none"
              >
                <div className="text-center">
                  <div className="text-[9px] uppercase tracking-tighter text-[#7D8875] font-bold">100%</div>
                  <div className="text-[8px] uppercase tracking-widest text-[#765E52]">Handmade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
