import React, { useState } from 'react';
import { Send, CheckCircle2, Clock, MapPin, Mail, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';
import { StudioMapPlaceholder } from './StudioMapPlaceholder';

interface ContactSectionProps {
  prefilledInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledInterest }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: prefilledInterest || 'Custom Bouquet',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief note about your inquiry.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend inquiry processing
    setTimeout(() => {
      const generatedRef = `FT-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(generatedRef);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: 'Custom Bouquet',
      preferredDate: '',
      message: '',
    });
    setSubmittedRef(null);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F7F2EC] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Form Section */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#765E52] mb-3 block">
              CONNECT WITH OUR ATELIER
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292725] tracking-tight leading-tight mb-4">
              Let’s create something beautiful.
            </h2>
            <p className="text-base text-[#765E52] font-light mb-10 max-w-lg">
              Whether you are planning an intimate celebration, seeking a custom floral gift, or curious about our workshops, we would love to hear from you.
            </p>

            {submittedRef ? (
              <div className="bg-[#EFE6DD] border border-[#3E5145]/30 rounded-lg p-8 sm:p-10 shadow-xs animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-[#3E5145] mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#3E5145]" />
                  <h3 className="font-serif text-2xl font-semibold text-[#292725]">
                    Inquiry Received with Warmth
                  </h3>
                </div>
                <p className="text-sm text-[#765E52] font-light leading-relaxed mb-4">
                  Thank you, <span className="font-medium text-[#292725]">{formData.name}</span>. Our studio team will review your vision for{' '}
                  <span className="font-medium text-[#292725]">{formData.interest}</span> and follow up within 24 business hours at{' '}
                  <span className="font-medium text-[#292725]">{formData.email}</span>.
                </p>
                <div className="inline-block bg-[#F7F2EC] px-4 py-2 rounded-sm border border-[#B6A69B]/30 text-xs font-mono text-[#3E5145] mb-6">
                  Reference: #{submittedRef}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs uppercase tracking-widest font-semibold text-[#3E5145] hover:underline"
                  >
                    Send Another Note &rarr;
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Clara Bennett"
                      className={`w-full px-4 py-3 bg-[#EFE6DD]/70 border rounded-sm text-sm text-[#292725] placeholder-[#B6A69B] focus:outline-hidden focus:border-[#3E5145] focus:bg-white transition-colors ${
                        errors.name ? 'border-red-400' : 'border-[#B6A69B]/40'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="clara@example.com"
                      className={`w-full px-4 py-3 bg-[#EFE6DD]/70 border rounded-sm text-sm text-[#292725] placeholder-[#B6A69B] focus:outline-hidden focus:border-[#3E5145] focus:bg-white transition-colors ${
                        errors.email ? 'border-red-400' : 'border-[#B6A69B]/40'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-[#EFE6DD]/70 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] placeholder-[#B6A69B] focus:outline-hidden focus:border-[#3E5145] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1.5">
                      What are you interested in?
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#EFE6DD]/70 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] focus:outline-hidden focus:border-[#3E5145] focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="Custom Crochet Bouquet">Custom Crochet Bouquet</option>
                      <option value="Velvet Pipe Cleaner Gift Box">Velvet Pipe Cleaner Gift Box</option>
                      <option value="Velvet & Crochet Arrangement">Velvet &amp; Crochet Arrangement</option>
                      <option value="Workshop">Velvet &amp; Crochet Workshop</option>
                      <option value="Event Styling">Event Floral Styling</option>
                      <option value="Other">Other Studio Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1.5">
                    Preferred Date / Occasion Timing (Optional)
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EFE6DD]/70 border border-[#B6A69B]/40 rounded-sm text-sm text-[#292725] focus:outline-hidden focus:border-[#3E5145] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-medium text-[#765E52] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the occasion, desired colors, or questions you have..."
                    className={`w-full px-4 py-3 bg-[#EFE6DD]/70 border rounded-sm text-sm text-[#292725] placeholder-[#B6A69B] focus:outline-hidden focus:border-[#3E5145] focus:bg-white transition-colors ${
                      errors.message ? 'border-red-400' : 'border-[#B6A69B]/40'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#3E5145] text-[#F7F2EC] text-xs uppercase tracking-widest font-medium rounded-sm transition-all duration-300 hover:bg-[#2A3830] hover:shadow-md disabled:opacity-60"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Studio Hours & Connect Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:pl-6 lg:border-l lg:border-[#B6A69B]/30">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#765E52] mb-3 block">
                ATELIER DETAILS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#292725] mb-6">
                Studio Hours &amp; Visits
              </h3>

              {/* Information Cards */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#EFE6DD] flex items-center justify-center text-[#3E5145] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#292725]">
                      Studio Hours
                    </h4>
                    <p className="text-sm text-[#765E52] font-light mt-0.5">
                      {SITE_CONFIG.contact.hours}
                    </p>
                    <p className="text-xs text-[#B6A69B] mt-0.5">
                      Sunday: Reserved for private workshop sessions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#EFE6DD] flex items-center justify-center text-[#3E5145] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#292725]">
                      Studio Atelier
                    </h4>
                    <p className="text-sm text-[#765E52] font-light mt-0.5">
                      {SITE_CONFIG.contact.address}
                    </p>
                    <p className="text-xs text-[#B6A69B] mt-0.5">
                      Appointments warmly welcomed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#EFE6DD] flex items-center justify-center text-[#3E5145] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#292725]">
                      Direct Inquiries &amp; Email
                    </h4>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-sm text-[#3E5145] hover:underline font-medium block mt-0.5"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                    <p className="text-xs text-[#765E52] mt-1 font-light">
                      Send us your thoughts, custom commission requests, or workshop questions anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect Icons */}
            <div className="pt-8 border-t border-[#B6A69B]/30">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#765E52] block mb-4">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {SITE_CONFIG.contact.whatsapp && (
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20Floral%20Twistella,%20I'd%20love%20to%20inquire%20about%20your%20handmade%20flowers`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="w-10 h-10 rounded-full bg-[#EFE6DD] border border-[#B6A69B]/30 flex items-center justify-center text-[#3E5145] hover:bg-[#3E5145] hover:text-[#F7F2EC] transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                )}

                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Floral Twistella on Instagram"
                  className="w-10 h-10 rounded-full bg-[#EFE6DD] border border-[#B6A69B]/30 flex items-center justify-center text-[#3E5145] hover:bg-[#3E5145] hover:text-[#F7F2EC] transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={SITE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Floral Twistella on Facebook"
                  className="w-10 h-10 rounded-full bg-[#EFE6DD] border border-[#B6A69B]/30 flex items-center justify-center text-[#3E5145] hover:bg-[#3E5145] hover:text-[#F7F2EC] transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Location & Interactive Google Maps Placeholder */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-[#B6A69B]/30">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#765E52] mb-2 block">
                FIND OUR STUDIO
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#292725]">
                Visit Our Artisan Quarter Atelier
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#765E52] font-light max-w-md">
              Located in the vibrant artisan district. Drop by during workshop hours, pick up custom arrangements, or schedule an in-person consultation.
            </p>
          </div>

          <StudioMapPlaceholder />
        </div>
      </div>
    </section>
  );
};
