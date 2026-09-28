import React from 'react';
import { TESTIMONIALS_DATA } from '../data/siteContent';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F2EC] relative overflow-hidden">
      {/* Subtle organic backdrop blur */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#EFE6DD]/70 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#765E52] mb-3 block">
            PATRON VOICES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292725] tracking-tight leading-tight">
            Made with care. Remembered with love.
          </h2>
          <p className="mt-3 text-base text-[#765E52] font-light">
            Reflections from clients who brought our handcrafted blooms and atelier experiences into their homes.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#EFE6DD]/80 backdrop-blur-xs p-8 sm:p-10 rounded-lg border border-[#B6A69B]/30 flex flex-col justify-between shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#3E5145]/40"
            >
              <div>
                {/* Large Serif Quotation Mark */}
                <span className="font-serif text-5xl sm:text-6xl text-[#C99B9A] leading-none block select-none -mb-3 opacity-80">
                  “
                </span>

                {/* Serif Testimonial Body */}
                <p className="font-serif text-lg sm:text-xl text-[#292725] italic leading-relaxed mb-8">
                  {t.quote}
                </p>
              </div>

              {/* Minimal Author Information with Delicate Botanical Mark */}
              <div className="pt-6 border-t border-[#B6A69B]/25 flex items-center justify-between">
                <div>
                  <div className="font-sans text-sm font-semibold text-[#292725] tracking-wide">
                    — {t.author}
                  </div>
                  <div className="text-xs text-[#765E52] font-light mt-0.5">
                    {t.location}
                  </div>
                </div>

                {/* Small decorative botanical petal detail */}
                <svg
                  className="w-5 h-5 text-[#7D8875] opacity-60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2C13.5 5 16 7 16 10C16 13 13.5 15 12 18C10.5 15 8 13 8 10C8 7 10.5 5 12 2Z" fill="#DDB8B5" fillOpacity="0.4" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
