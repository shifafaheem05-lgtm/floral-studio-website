import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/siteContent';

interface SignatureGalleryProps {
  onOpenLightbox: (item: GalleryItem, index: number) => void;
}

export const SignatureGallery: React.FC<SignatureGalleryProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Crochet Bouquets', 'Velvet Sticks', 'Gift Boxes', 'Atelier'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#EFE6DD]/30 border-t border-[#B6A69B]/20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#765E52] mb-3 block">
              STUDIO ARCHIVE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292725] tracking-tight leading-tight">
              A little beauty, in bloom.
            </h2>
            <p className="mt-3 text-base text-[#765E52] font-light max-w-xl">
              A photographic study of our hand-crocheted stems, sculpted plush velvet pipe cleaner flowers, and cozy atelier moments.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F7F2EC] rounded-md border border-[#B6A69B]/30">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-sm ${
                  activeCategory === cat
                    ? 'bg-[#3E5145] text-[#F7F2EC] shadow-xs'
                    : 'text-[#765E52] hover:text-[#292725]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            const heightClass =
              item.aspectRatio === 'portrait'
                ? 'h-[440px]'
                : item.aspectRatio === 'square'
                ? 'h-[360px]'
                : 'h-[320px]';

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item, index)}
                className={`group cursor-pointer relative overflow-hidden rounded-md bg-[#F7F2EC] border border-[#B6A69B]/25 shadow-xs transition-all duration-400 hover:shadow-lg ${heightClass}`}
              >
                {!imageErrors[item.id] ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(item.id)}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#EFE6DD] text-[#3E5145]">
                    <Eye className="w-8 h-8 text-[#C99B9A] mb-2" />
                    <span className="font-serif text-lg text-center">{item.title}</span>
                    <span className="text-[11px] tracking-widest uppercase text-[#765E52] mt-1">{item.category}</span>
                  </div>
                )}

                {/* Soft Dark Translucent Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292725]/85 via-[#292725]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#F7F2EC]">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-[#DDB8B5] mb-1">
                      <span>{item.category}</span>
                      {item.craftTime && <span>{item.craftTime}</span>}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#EFE6DD] font-light line-clamp-2 mb-3">
                      {item.caption}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold text-[#F7F2EC]">
                      <span>View In Lightbox</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Always-visible quiet category badge on mobile */}
                <div className="lg:hidden absolute bottom-3 left-3 bg-[#292725]/70 backdrop-blur-xs px-2.5 py-1 rounded-xs text-[10px] uppercase tracking-widest text-[#F7F2EC]">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
