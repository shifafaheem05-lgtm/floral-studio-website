import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Sparkles, Heart, Feather } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [storyExpanded, setStoryExpanded] = useState(false);

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F7F2EC] relative overflow-hidden">
      {/* Subtle background ambient blur */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#EFE6DD]/60 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center justify-center gap-2 mb-4">
          <span className="w-4 h-[1px] bg-[#C99B9A]" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#765E52]">
            THE STUDIO
          </span>
          <span className="w-4 h-[1px] bg-[#C99B9A]" />
        </div>

        {/* Large Editorial Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#292725] leading-tight tracking-tight mb-8">
          Where flowers become keepsakes.
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-[#765E52] font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          Floral Twistella creates handcrafted crochet and plush velvet pipe cleaner floral pieces for people who appreciate beauty with a personal touch.
          Every arrangement is thoughtfully crocheted with combed cotton yarn and sculpted from dense velvet chenille sticks to bring warmth, tactile charm,
          and lasting memories into meaningful moments.
        </p>

        {/* Discover Our Story Link */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setStoryExpanded(!storyExpanded)}
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-[#3E5145] hover:text-[#2A3830] transition-colors pb-1 border-b border-[#3E5145]/40 hover:border-[#3E5145]"
          >
            <span>{storyExpanded ? 'Close Studio Story' : 'Discover Our Story'}</span>
            {storyExpanded ? (
              <ChevronDown className="w-4 h-4 rotate-180 transition-transform duration-300" />
            ) : (
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </button>
        </div>

        {/* Expandable Editorial Story Drawer */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden text-left ${
            storyExpanded ? 'max-h-[800px] opacity-100 mt-12' : 'max-h-0 opacity-0 mt-0 pointer-events-none'
          }`}
        >
          <div className="bg-[#EFE6DD]/80 backdrop-blur-xs rounded-xl p-8 sm:p-10 border border-[#B6A69B]/30 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#3E5145] mb-1">
                  <Feather className="w-4 h-4 text-[#C99B9A]" />
                  <h3 className="font-serif text-lg font-semibold text-[#292725]">Velvet Chenille Craft</h3>
                </div>
                <p className="text-sm text-[#765E52] leading-relaxed font-light">
                  We hand-sculpt dense, ultra-plush velvet pipe cleaners with flexible wire cores that allow each petal to be bent and curved into realistic, soft botanical forms.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#3E5145] mb-1">
                  <Sparkles className="w-4 h-4 text-[#C99B9A]" />
                  <h3 className="font-serif text-lg font-semibold text-[#292725]">Hand-Crocheted Stems</h3>
                </div>
                <p className="text-sm text-[#765E52] leading-relaxed font-light">
                  Every bloom and leaf is crocheted stitch-by-stitch using premium combed cotton yarn, creating cozy tactile textures that never fade, drop pollen, or wilt.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#3E5145] mb-1">
                  <Heart className="w-4 h-4 text-[#C99B9A]" />
                  <h3 className="font-serif text-lg font-semibold text-[#292725]">Everlasting Keepsakes</h3>
                </div>
                <p className="text-sm text-[#765E52] leading-relaxed font-light">
                  Unlike fresh flowers that perish in days, our plush bouquets and velvet arrangements are enduring treasures designed to brighten desks, vanities, and gifting moments forever.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#B6A69B]/30 flex flex-col sm:flex-row justify-between items-center text-xs text-[#7D8875] gap-4">
              <span>Bespoke crochet blooms &amp; velvet chenille flower atelier</span>
              <span className="font-serif italic text-sm text-[#3E5145]">Est. Floral Twistella Atelier</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
