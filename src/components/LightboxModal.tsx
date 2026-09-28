import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/siteContent';

interface LightboxModalProps {
  isOpen: boolean;
  activeItem: GalleryItem | null;
  activeIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  activeItem,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || !activeItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#181D1A]/95 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar with Counter & Close */}
      <div
        className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#DDB8B5]">
          <span className="font-mono text-sm text-[#F7F2EC]">
            {String(activeIndex + 1).padStart(2, '0')} / {String(GALLERY_ITEMS.length).padStart(2, '0')}
          </span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>{activeItem.category}</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox (Esc)"
          className="p-2.5 rounded-full bg-white/10 text-[#F7F2EC] hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous artwork (Left arrow)"
          className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 sm:bg-white/10 text-white hover:bg-white/25 transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={onNext}
          aria-label="Next artwork (Right arrow)"
          className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 sm:bg-white/10 text-white hover:bg-white/25 transition-all z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Artwork Image */}
        <div className="relative rounded-lg overflow-hidden max-h-[65vh] sm:max-h-[72vh] shadow-2xl border border-white/10 bg-[#292725]">
          <img
            src={activeItem.image}
            alt={activeItem.title}
            referrerPolicy="no-referrer"
            className="w-auto h-auto max-h-[65vh] sm:max-h-[72vh] max-w-full object-contain mx-auto"
          />
        </div>

        {/* Caption & Metadata Bar */}
        <div className="mt-4 sm:mt-5 text-center max-w-2xl px-4">
          <h3 className="font-serif text-xl sm:text-2xl text-[#F7F2EC] mb-1 font-normal">
            {activeItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#B6A69B] font-light leading-relaxed mb-2">
            {activeItem.caption}
          </p>
          <div className="flex items-center justify-center gap-4 text-[11px] text-[#7D8875] uppercase tracking-wider">
            {activeItem.dimensions && <span>Dimensions: {activeItem.dimensions}</span>}
            {activeItem.dimensions && activeItem.craftTime && <span aria-hidden="true">·</span>}
            {activeItem.craftTime && <span>Craft Time: {activeItem.craftTime}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
