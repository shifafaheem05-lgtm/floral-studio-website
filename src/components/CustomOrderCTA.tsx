import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CustomOrderCTAProps {
  onOpenCustomOrderModal: () => void;
}

export const CustomOrderCTA: React.FC<CustomOrderCTAProps> = ({ onOpenCustomOrderModal }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#3E5145] text-[#F7F2EC] overflow-hidden">
      {/* Subtle Oversized Botanical Line-Art in Background */}
      <svg
        aria-hidden="true"
        className="absolute -right-20 -bottom-20 w-[420px] h-[420px] text-white/5 pointer-events-none select-none"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M100 20 C120 60 180 80 180 120 C180 160 140 180 100 180 C60 180 20 160 20 120 C20 80 80 60 100 20 Z" />
        <path d="M100 40 C115 70 160 85 160 115 C160 145 130 160 100 160 C70 160 40 145 40 115 C40 85 85 70 100 40 Z" />
        <line x1="100" y1="20" x2="100" y2="180" />
      </svg>

      <svg
        aria-hidden="true"
        className="absolute -left-16 -top-16 w-80 h-80 text-white/5 pointer-events-none select-none"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <circle cx="100" cy="100" r="80" />
      </svg>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center z-10">
        <span className="text-xs uppercase tracking-[0.28em] text-[#DDB8B5] font-semibold mb-4 block">
          BESPOKE COMMISSIONS
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F2EC] leading-tight tracking-tight mb-6">
          Have something special in mind?
        </h2>

        <p className="text-base sm:text-lg text-[#EFE6DD] font-light max-w-xl mx-auto leading-relaxed mb-10">
          Tell us what you’re imagining and we’ll create a floral piece around your story.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={onOpenCustomOrderModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#F7F2EC] text-[#292725] text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 hover:bg-[#EFE6DD] hover:shadow-lg active:translate-y-px"
          >
            <span>Start a Custom Order</span>
            <ArrowRight className="w-4 h-4 text-[#3E5145]" />
          </button>
        </div>

        <p className="text-xs tracking-widest uppercase text-[#B6A69B] font-light">
          Custom Crochet Bouquets • Velvet Pipe Cleaner Gifts • Events • Workshops
        </p>
      </div>
    </section>
  );
};
