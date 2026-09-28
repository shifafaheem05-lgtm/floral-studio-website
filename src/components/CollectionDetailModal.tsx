import React from 'react';
import { X, ArrowRight, Sparkles, Check, Scissors } from 'lucide-react';
import { CollectionItem } from '../data/siteContent';

interface CollectionDetailModalProps {
  item: CollectionItem | null;
  onClose: () => void;
  onInquirePiece: (pieceTitle: string) => void;
}

export const CollectionDetailModal: React.FC<CollectionDetailModalProps> = ({
  item,
  onClose,
  onInquirePiece,
}) => {
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="collection-detail-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#292725]/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#F7F2EC] rounded-lg shadow-2xl border border-[#B6A69B]/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close */}
        <div className="sticky top-0 bg-[#F7F2EC]/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-[#B6A69B]/30 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#7D8875] font-semibold">
              {item.category}
            </span>
            {item.badge && (
              <span className="text-[10px] uppercase tracking-wider bg-[#EFE6DD] text-[#3E5145] px-2.5 py-0.5 rounded-xs font-semibold">
                {item.badge}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="p-2 rounded-full text-[#765E52] hover:text-[#292725] hover:bg-[#EFE6DD] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: Product Image */}
            <div className="relative rounded-lg overflow-hidden bg-[#EFE6DD] border border-[#B6A69B]/30 shadow-xs aspect-[4/3] md:aspect-[3/4]">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 bg-[#292725]/70 backdrop-blur-xs px-2.5 py-1 rounded-xs text-[10px] uppercase tracking-widest text-[#F7F2EC]">
                Handmade Crochet &amp; Velvet Stems
              </div>
            </div>

            {/* Right: Detailed Information */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 id="collection-detail-title" className="font-serif text-3xl sm:text-4xl text-[#292725] mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-[#765E52] font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="p-4 bg-[#EFE6DD]/70 rounded-md border border-[#B6A69B]/30 mb-6 text-xs text-[#765E52] leading-relaxed">
                  <span className="font-semibold text-[#292725] block mb-1">
                    Atelier Craftsmanship
                  </span>
                  {item.details}
                </div>

                <div className="space-y-3 mb-8 text-xs text-[#765E52]">
                  <div className="flex items-start gap-2">
                    <Scissors className="w-4 h-4 text-[#7D8875] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#292725]">Materials:</span>{' '}
                      {item.materials.join(' · ')}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#C99B9A] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#292725]">Dimensions:</span>{' '}
                      {item.dimensions}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#3E5145] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#292725]">Care:</span> Never requires water. Dust lightly with a soft brush once per season.
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#B6A69B]/30 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onInquirePiece(item.title);
                  }}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3E5145] text-[#F7F2EC] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#2A3830] transition-colors"
                >
                  <span>Inquire About This Piece</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3.5 border border-[#B6A69B]/50 text-[#765E52] text-xs uppercase tracking-widest font-medium rounded-sm hover:border-[#3E5145] hover:text-[#292725] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
