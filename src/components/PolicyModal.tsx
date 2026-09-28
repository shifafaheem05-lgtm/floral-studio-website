import React from 'react';
import { X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#292725]/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#F7F2EC] rounded-lg shadow-2xl border border-[#B6A69B]/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#F7F2EC]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#B6A69B]/30 flex items-center justify-between z-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#7D8875] font-semibold block">
              Floral Twistella Studio
            </span>
            <h3 id="policy-modal-title" className="font-serif text-2xl text-[#292725]">
              {type === 'privacy' ? 'Privacy Policy' : 'Studio Terms & Conditions'}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-[#765E52] hover:text-[#292725] hover:bg-[#EFE6DD] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-sm text-[#765E52] font-light leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                At Floral Twistella, we cherish your privacy as deeply as our craft. This policy explains how we collect and safeguard information when you interact with our atelier website, commission bespoke botanical pieces, or register for workshops.
              </p>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#292725] mb-1">
                  1. Information We Collect
                </h4>
                <p>
                  We only gather personal information that you intentionally provide—such as your name, email address, phone number, and floral commission preferences. We never sell, rent, or trade your data to third-party marketing brokers.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#292725] mb-1">
                  2. Use of Information
                </h4>
                <p>
                  Your details are utilized strictly to process workshop reservations, coordinate bespoke floral orders, confirm consultations, and send our quarterly studio dispatches (only if opted-in).
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#292725] mb-1">
                  3. Contact Our Studio
                </h4>
                <p>
                  If you wish to review, update, or delete any personal records held by our atelier, please contact us directly at{' '}
                  <span className="font-medium text-[#3E5145]">{SITE_CONFIG.contact.email}</span>.
                </p>
              </div>
            </>
          ) : (
            <>
              <p>
                Welcome to Floral Twistella. By booking a workshop session or placing a commission for our handmade botanical creations, you agree to the following atelier terms:
              </p>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#292725] mb-1">
                  1. Workshop Reservations &amp; Rescheduling
                </h4>
                <p>
                  Due to our intimate table limit of 8 participants, seat reservations require at least 48 hours notice for rescheduling. Workshop seats may be transferred to a friend or family member at any time before the session.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#292725] mb-1">
                  2. Bespoke Floral Commissions
                </h4>
                <p>
                  Custom bridal bouquets, large ceramic centerpieces, and installations are made by hand according to the client’s approved moodboard. Because materials are dyed and shaped specifically for each order, bespoke commissions are final sale upon studio assembly.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#292725] mb-1">
                  3. Botanical Care &amp; Longevity
                </h4>
                <p>
                  Floral Twistella pieces are crafted using combed cotton crochet yarns, plush velvet chenille pipe cleaners, and flexible floral wire cores. To ensure lifelong preservation, keep plush arrangements away from direct water immersion and prolonged harsh outdoor weather. Dust gently with a soft dry brush once per season.
                </p>
              </div>
            </>
          )}

          <div className="pt-4 border-t border-[#B6A69B]/30 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-[#3E5145] text-[#F7F2EC] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#2A3830] transition-colors"
            >
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
