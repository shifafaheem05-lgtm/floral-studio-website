import React, { useState } from 'react';
import { ArrowRight, Check, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
  onOpenWorkshopModal: () => void;
  onOpenCustomOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyModal,
  onOpenTermsModal,
  onOpenWorkshopModal,
  onOpenCustomOrderModal,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setNewsletterError('Please enter your email.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email.');
      return;
    }
    setNewsletterError('');
    setNewsletterSubscribed(true);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2A3830] text-[#EFE6DD] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column (Col Span 4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5 text-[#DDB8B5]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M12 2C14 6 18 8 18 12C18 16 14 18 12 22C10 18 6 16 6 12C6 8 10 6 12 2Z" fill="#C99B9A" fillOpacity="0.4" />
                <circle cx="12" cy="12" r="2" fill="#F7F2EC" />
              </svg>
              <span className="font-serif text-2xl tracking-widest text-[#F7F2EC] font-semibold">
                FLORAL TWISTELLA
              </span>
            </div>

            <p className="text-sm text-[#B6A69B] font-light leading-relaxed max-w-sm mb-6">
              Handcrafted floral art for beautiful moments. Everlasting crochet blooms and sculpted velvet pipe cleaner flowers created with patience and tactile beauty.
            </p>

            <div className="text-xs text-[#7D8875] tracking-widest uppercase">
              Boutique Atelier &amp; Workshop Studio
            </div>
          </div>

          {/* Column 2: Explore (Col Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F7F2EC] mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-[#B6A69B] font-light">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#home')}
                  className="hover:text-[#F7F2EC] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#about')}
                  className="hover:text-[#F7F2EC] transition-colors"
                >
                  About Studio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#collections')}
                  className="hover:text-[#F7F2EC] transition-colors"
                >
                  Collections
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#gallery')}
                  className="hover:text-[#F7F2EC] transition-colors"
                >
                  Studio Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Experiences (Col Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F7F2EC] mb-5">
              Experiences
            </h4>
            <ul className="space-y-3 text-sm text-[#B6A69B] font-light">
              <li>
                <button
                  type="button"
                  onClick={onOpenWorkshopModal}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Floral Workshops
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCustomOrderModal}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Custom Orders
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#services')}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Event Styling
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#services')}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Private Gatherings
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Studio Notes (Col Span 4) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F7F2EC] mb-3">
              Join Our Studio Notes
            </h4>
            <p className="text-xs text-[#B6A69B] font-light mb-4">
              Receive gentle quarterly dispatches, early workshop seat releases, and floral stories.
            </p>

            {newsletterSubscribed ? (
              <div className="bg-[#3E5145] p-3.5 rounded-sm border border-white/10 flex items-center gap-2.5 text-xs text-[#F7F2EC]">
                <Check className="w-4 h-4 text-[#DDB8B5]" />
                <span>Thank you. You are now welcomed to our studio notes.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2" noValidate>
                <div className="flex items-center">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterError) setNewsletterError('');
                    }}
                    placeholder="Your email address"
                    className="w-full px-3.5 py-2.5 bg-[#202B25] border border-white/15 rounded-l-sm text-xs text-[#F7F2EC] placeholder-[#765E52] focus:outline-hidden focus:border-[#DDB8B5] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#DDB8B5] text-[#292725] text-xs uppercase tracking-widest font-semibold rounded-r-sm hover:bg-[#C99B9A] transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </div>
                {newsletterError && (
                  <p className="text-[11px] text-[#DDB8B5]">{newsletterError}</p>
                )}
              </form>
            )}

            <div className="mt-6 pt-5 border-t border-white/10 text-xs text-[#B6A69B] font-light">
              <span className="text-[#EFE6DD] font-medium block mb-1">Direct inquiries:</span>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[#F7F2EC] hover:underline">
                {SITE_CONFIG.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B6A69B] gap-4">
          <div>
            &copy; 2026 Floral Twistella. All rights reserved. Handcrafted with intention.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="hover:text-[#F7F2EC] transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-white/20">·</span>
            <button
              type="button"
              onClick={onOpenTermsModal}
              className="hover:text-[#F7F2EC] transition-colors"
            >
              Studio Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
