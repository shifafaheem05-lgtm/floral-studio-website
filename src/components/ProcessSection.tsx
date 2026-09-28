import React from 'react';
import { PROCESS_STEPS } from '../data/siteContent';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F2EC] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#765E52] mb-3 block">
            HOW WE CRAFT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292725] tracking-tight leading-tight">
            The Atelier Journey
          </h2>
          <p className="mt-4 text-base text-[#765E52] font-light">
            Every creation follows a thoughtful dialogue from initial concept to lasting keepsake.
          </p>
        </div>

        {/* 3-Step Process: Horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Thin connecting decorative botanical line (Desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-gradient-to-r from-[#B6A69B]/20 via-[#3E5145]/40 to-[#B6A69B]/20 z-0"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((item, index) => (
              <div key={item.step} className="flex flex-col items-start lg:items-center text-left lg:text-center group">
                {/* Step indicator node */}
                <div className="w-14 h-14 rounded-full bg-[#EFE6DD] border border-[#B6A69B]/30 flex items-center justify-center text-[#3E5145] mb-6 shadow-xs group-hover:bg-[#3E5145] group-hover:text-[#F7F2EC] transition-all duration-300">
                  <span className="font-serif text-lg font-semibold tracking-wider">
                    {item.step}
                  </span>
                </div>

                {/* Step Label */}
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D8875] mb-2">
                  {item.step} — {item.label}
                </span>

                {/* Primary Description */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#292725] mb-3 max-w-xs font-normal">
                  {item.description}
                </h3>

                {/* Nuanced Studio Note */}
                <p className="text-xs sm:text-sm text-[#765E52] font-light leading-relaxed max-w-sm">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
