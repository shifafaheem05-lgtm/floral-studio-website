import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedCollections } from './components/FeaturedCollections';
import { FeaturedWorkshop } from './components/FeaturedWorkshop';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { SignatureGallery } from './components/SignatureGallery';
import { TestimonialSection } from './components/TestimonialSection';
import { CustomOrderCTA } from './components/CustomOrderCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';

// Modals
import { WorkshopBookingModal } from './components/WorkshopBookingModal';
import { CustomOrderModal } from './components/CustomOrderModal';
import { CollectionDetailModal } from './components/CollectionDetailModal';
import { LightboxModal } from './components/LightboxModal';
import { PolicyModal } from './components/PolicyModal';

import { CollectionItem, GalleryItem, GALLERY_ITEMS } from './data/siteContent';

export default function App() {
  // Modal states
  const [workshopModalOpen, setWorkshopModalOpen] = useState(false);
  const [customOrderModalOpen, setCustomOrderModalOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<CollectionItem | null>(null);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeGalleryItem, setActiveGalleryItem] = useState<GalleryItem | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Prefilled contact interest
  const [contactPrefill, setContactPrefill] = useState<string>('Custom Bouquet');

  const handleOpenLightbox = (item: GalleryItem, index: number) => {
    setActiveGalleryItem(item);
    setActiveGalleryIndex(index);
    setLightboxOpen(true);
  };

  const handleNextLightbox = () => {
    const nextIndex = (activeGalleryIndex + 1) % GALLERY_ITEMS.length;
    setActiveGalleryIndex(nextIndex);
    setActiveGalleryItem(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrevLightbox = () => {
    const prevIndex = (activeGalleryIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setActiveGalleryIndex(prevIndex);
    setActiveGalleryItem(GALLERY_ITEMS[prevIndex]);
  };

  const handleSelectService = (serviceName: string) => {
    setContactPrefill(serviceName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquirePiece = (pieceTitle: string) => {
    setContactPrefill(pieceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F2EC] text-[#292725] selection:bg-[#DDB8B5]/40 selection:text-[#3E5145] relative">
      {/* Sticky Header */}
      <Header onOpenWorkshopModal={() => setWorkshopModalOpen(true)} />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <Hero onOpenWorkshopModal={() => setWorkshopModalOpen(true)} />

        {/* Brand Story Introduction */}
        <AboutSection />

        {/* Featured Collections */}
        <FeaturedCollections onSelectCollection={(item) => setSelectedCollection(item)} />

        {/* Upcoming Workshop Experience & Benefits */}
        <FeaturedWorkshop onOpenBookingModal={() => setWorkshopModalOpen(true)} />

        {/* Bespoke Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 3-Step Process */}
        <ProcessSection />

        {/* Signature Gallery with Lightbox Trigger */}
        <SignatureGallery onOpenLightbox={handleOpenLightbox} />

        {/* Patron Testimonials */}
        <TestimonialSection />

        {/* Custom Order Call to Action */}
        <CustomOrderCTA onOpenCustomOrderModal={() => setCustomOrderModalOpen(true)} />

        {/* Contact & Studio Atelier Details */}
        <ContactSection prefilledInterest={contactPrefill} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacyModal={() => setPolicyType('privacy')}
        onOpenTermsModal={() => setPolicyType('terms')}
        onOpenWorkshopModal={() => setWorkshopModalOpen(true)}
        onOpenCustomOrderModal={() => setCustomOrderModalOpen(true)}
      />

      {/* Persistent Touchpoints */}
      <FloatingWhatsApp />
      <BackToTop />

      {/* Interactive Modals */}
      <WorkshopBookingModal
        isOpen={workshopModalOpen}
        onClose={() => setWorkshopModalOpen(false)}
      />

      <CustomOrderModal
        isOpen={customOrderModalOpen}
        onClose={() => setCustomOrderModalOpen(false)}
      />

      <CollectionDetailModal
        item={selectedCollection}
        onClose={() => setSelectedCollection(null)}
        onInquirePiece={handleInquirePiece}
      />

      <LightboxModal
        isOpen={lightboxOpen}
        activeItem={activeGalleryItem}
        activeIndex={activeGalleryIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />

      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
}
