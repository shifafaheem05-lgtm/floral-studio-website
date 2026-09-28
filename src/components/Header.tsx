import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

interface HeaderProps {
  onOpenWorkshopModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWorkshopModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'collections', 'workshops', 'services', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Collections', href: '#collections', id: 'collections' },
    { label: 'Workshops', href: '#workshops', id: 'workshops' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F2EC]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#B6A69B]/20'
            : 'bg-[#F7F2EC]/75 backdrop-blur-xs py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Identity / Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
            aria-label="Floral Twistella Home"
          >
            {/* Subtle botanical symbol */}
            <svg
              className="w-5 h-5 text-[#3E5145] transition-transform duration-500 group-hover:rotate-45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C14 6 18 8 18 12C18 16 14 18 12 22C10 18 6 16 6 12C6 8 10 6 12 2Z" fill="#C99B9A" fillOpacity="0.35" />
              <path d="M2 12C6 10 8 6 12 6C16 6 18 10 22 12C18 14 16 18 12 18C8 18 6 14 2 12Z" fill="#7D8875" fillOpacity="0.25" />
              <circle cx="12" cy="12" r="2.2" fill="#3E5145" />
            </svg>
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-[#292725] transition-colors group-hover:text-[#3E5145]">
              FLORAL TWISTELLA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-widest uppercase font-medium text-[#765E52]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-colors duration-200 hover:text-[#292725] ${
                  activeSection === link.id ? 'text-[#3E5145] font-semibold' : ''
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#3E5145] transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right Action button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="hidden xl:flex items-center gap-1.5 text-xs text-[#765E52] hover:text-[#3E5145] transition-colors"
              title="Email the Studio"
            >
              <Mail className="w-3.5 h-3.5 text-[#7D8875]" />
              <span className="font-medium tracking-wide">{SITE_CONFIG.contact.email}</span>
            </a>

            <button
              onClick={onOpenWorkshopModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 border border-[#3E5145] text-[#3E5145] text-xs uppercase tracking-widest font-medium rounded-sm transition-all duration-300 hover:bg-[#3E5145] hover:text-[#F7F2EC] hover:shadow-xs active:translate-y-px"
            >
              <span>Book a Workshop</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#292725] hover:text-[#3E5145] transition-colors focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen / Slide-Down Navigation */}
      <div
        className={`fixed inset-0 z-30 lg:hidden bg-[#F7F2EC]/98 backdrop-blur-xl transition-all duration-400 ease-in-out flex flex-col justify-between px-6 pt-24 pb-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-6 items-start mt-4">
          <span className="text-[11px] uppercase tracking-widest text-[#B6A69B] font-medium">Navigation</span>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-serif text-2xl tracking-wide text-[#292725] hover:text-[#3E5145] transition-colors ${
                activeSection === link.id ? 'text-[#3E5145] italic font-medium' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-[#B6A69B]/30 flex flex-col gap-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWorkshopModal();
            }}
            className="w-full py-3 bg-[#3E5145] text-[#F7F2EC] text-xs uppercase tracking-widest font-medium rounded-sm text-center shadow-xs transition-colors hover:bg-[#2A3830]"
          >
            Book a Workshop
          </button>
          <div className="flex flex-col gap-2 text-xs text-[#765E52] pt-2">
            <div className="flex justify-between items-center">
              <span>Direct Inquiries:</span>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="font-medium text-[#3E5145] hover:underline">
                {SITE_CONFIG.contact.email}
              </a>
            </div>
            <div className="text-[11px] text-[#B6A69B] pt-1">
              {SITE_CONFIG.contact.hours}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
