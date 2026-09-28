import React, { useState } from 'react';
import { X, Sparkles, Check, Send } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

interface CustomOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomOrderModal: React.FC<CustomOrderModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    commissionType: 'Custom Crochet Bouquet Keepsake',
    colorPalette: 'Muted Blush, Dusty Rose & Ivory',
    targetDate: '',
    budget: '$150 – $350',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email.';
    }
    if (!formData.notes.trim()) {
      newErrors.notes = 'Please provide a brief description of what you envision.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const code = `BESPOKE-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmationCode(code);
      setIsSubmitting(false);
    }, 500);
  };

  const handleReset = () => {
    setConfirmationCode(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      commissionType: 'Bridal Bouquet Keepsake',
      colorPalette: 'Muted Blush, Dusty Rose & Ivory',
      targetDate: '',
      budget: '$250 – $500',
      notes: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="custom-order-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#292725]/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#F7F2EC] rounded-lg shadow-2xl border border-[#B6A69B]/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#F7F2EC]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#B6A69B]/30 flex items-center justify-between z-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#7D8875] font-semibold block">
              Bespoke Studio Commission
            </span>
            <h3 id="custom-order-title" className="font-serif text-2xl text-[#292725]">
              Commission a Floral Creation
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

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {confirmationCode ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#EFE6DD] border border-[#3E5145]/40 text-[#3E5145] flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7" />
              </div>

              <h4 className="font-serif text-3xl text-[#292725] mb-2">
                Commission Request Logged
              </h4>
              <p className="text-sm text-[#765E52] font-light max-w-md mx-auto mb-6">
                Thank you, <span className="font-semibold text-[#292725]">{formData.name}</span>. Our lead floral artist will review your bespoke project details and follow up with a moodboard proposal within 24 to 48 hours.
              </p>

              <div className="bg-[#EFE6DD] p-5 rounded-md border border-[#B6A69B]/30 max-w-sm mx-auto text-left mb-6 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#765E52]">Commission Code:</span>
                  <span className="font-mono font-semibold text-[#3E5145]">#{confirmationCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#765E52]">Commission Type:</span>
                  <span className="font-medium text-[#292725]">{formData.commissionType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#765E52]">Palette:</span>
                  <span className="font-medium text-[#292725]">{formData.colorPalette}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#765E52]">Contact:</span>
                  <span className="font-medium text-[#292725]">{formData.email}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 bg-[#3E5145] text-[#F7F2EC] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#2A3830] transition-colors"
              >
                Return to Studio
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-4 bg-[#EFE6DD]/70 rounded-md border border-[#B6A69B]/30 text-xs text-[#765E52] space-y-1 font-light">
                <div className="flex items-center gap-2 text-[#3E5145] font-medium">
                  <Sparkles className="w-4 h-4 text-[#C99B9A]" />
                  <span>Handcrafted Velvet &amp; Crochet Botanicals</span>
                </div>
                <p>
                  Every piece is hand-crocheted and sculpted from dense velvet pipe cleaners to your color palette or milestone memory. Custom lead times average 7–12 business days.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="co-name" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1">
                    Your Name *
                  </label>
                  <input
                    id="co-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Genevieve Laurent"
                    className="w-full px-3.5 py-2.5 bg-[#EFE6DD]/60 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] focus:outline-hidden focus:border-[#3E5145] focus:bg-white"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="co-email" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="co-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="genevieve@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#EFE6DD]/60 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] focus:outline-hidden focus:border-[#3E5145] focus:bg-white"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="co-phone" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="co-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 bg-[#EFE6DD]/60 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] focus:outline-hidden focus:border-[#3E5145] focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="co-type" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1">
                    Commission Type
                  </label>
                  <select
                    id="co-type"
                    value={formData.commissionType}
                    onChange={(e) => setFormData({ ...formData, commissionType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#EFE6DD]/60 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] focus:outline-hidden focus:border-[#3E5145] focus:bg-white cursor-pointer"
                  >
                    <option value="Custom Crochet Bouquet Keepsake">Custom Crochet Bouquet Keepsake</option>
                    <option value="Velvet Pipe Cleaner Floral Box">Velvet Pipe Cleaner Floral Box</option>
                    <option value="Ceramic Vessel Velvet & Crochet Arrangement">Ceramic Vessel Velvet &amp; Crochet Arrangement</option>
                    <option value="Event Velvet Floral Installation">Event Velvet Floral Installation</option>
                    <option value="Other Bespoke Plush Commission">Other Bespoke Plush Commission</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="co-palette" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1">
                    Color Palette Mood
                  </label>
                  <select
                    id="co-palette"
                    value={formData.colorPalette}
                    onChange={(e) => setFormData({ ...formData, colorPalette: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#EFE6DD]/60 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] focus:outline-hidden focus:border-[#3E5145] focus:bg-white cursor-pointer"
                  >
                    <option value="Muted Blush, Dusty Rose & Ivory">Muted Blush, Dusty Rose &amp; Ivory</option>
                    <option value="Sage Green, Soft Cream & Taupe">Sage Green, Soft Cream &amp; Taupe</option>
                    <option value="Warm Terracotta & Sun-Bleached Sand">Warm Terracotta &amp; Sun-Bleached Sand</option>
                    <option value="Monochrome Botanical Ivory">Monochrome Botanical Ivory</option>
                    <option value="Custom Palette (Specify in notes)">Custom Palette (Specify in notes)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="co-date" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1">
                    Target Needed Date
                  </label>
                  <input
                    id="co-date"
                    type="date"
                    value={formData.targetDate}
                    onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#EFE6DD]/60 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] focus:outline-hidden focus:border-[#3E5145] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="co-notes" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1">
                  Describe Your Vision &amp; Sizing *
                </label>
                <textarea
                  id="co-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details about the space, sentimental flower varieties, or event styling atmosphere..."
                  className="w-full px-3.5 py-2.5 bg-[#EFE6DD]/60 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] focus:outline-hidden focus:border-[#3E5145] focus:bg-white"
                />
                {errors.notes && <p className="mt-1 text-xs text-red-600">{errors.notes}</p>}
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#B6A69B]/30">
                <span className="text-xs text-[#765E52]">
                  Direct WhatsApp consultation also available
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 text-xs uppercase tracking-widest font-medium text-[#765E52] hover:text-[#292725]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3 bg-[#3E5145] text-[#F7F2EC] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#2A3830] transition-colors disabled:opacity-60"
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Commission Inquiry'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
