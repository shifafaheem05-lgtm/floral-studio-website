import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COLLECTIONS_DATA, CollectionItem } from '../data/siteContent';

interface FeaturedCollectionsProps {
  onSelectCollection: (item: CollectionItem) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ onSelectCollection }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="collections" className="py-24 sm:py-32 bg-[#EFE6DD]/40 border-y border-[#B6A69B]/20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#765E52] mb-3 block">
              CURATED REPERTOIRE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292725] tracking-tight leading-tight">
              Made for Every Moment
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#765E52] font-light">
              Explore handcrafted pieces designed for gifting, celebrating, decorating, and remembering.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs uppercase tracking-widest text-[#B6A69B] font-medium">
              4 Signature Series
            </span>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Card 1: Signature Bouquets (Large: span 7) */}
          <div className="md:col-span-7">
            <CollectionCard
              item={COLLECTIONS_DATA[0]}
              imageError={imageErrors[COLLECTIONS_DATA[0].id]}
              onError={() => handleImageError(COLLECTIONS_DATA[0].id)}
              onClick={() => onSelectCollection(COLLECTIONS_DATA[0])}
              aspectHeight="h-[380px] sm:h-[460px]"
            />
          </div>

          {/* Card 2: Floral Gift Boxes (Smaller: span 5) */}
          <div className="md:col-span-5 md:pt-12">
            <CollectionCard
              item={COLLECTIONS_DATA[1]}
              imageError={imageErrors[COLLECTIONS_DATA[1].id]}
              onError={() => handleImageError(COLLECTIONS_DATA[1].id)}
              onClick={() => onSelectCollection(COLLECTIONS_DATA[1])}
              aspectHeight="h-[340px] sm:h-[400px]"
            />
          </div>

          {/* Card 3: Handmade Flower Arrangements (Large: span 7 order-2 md:order-1) */}
          <div className="md:col-span-7 order-2 md:order-1">
            <CollectionCard
              item={COLLECTIONS_DATA[2]}
              imageError={imageErrors[COLLECTIONS_DATA[2].id]}
              onError={() => handleImageError(COLLECTIONS_DATA[2].id)}
              onClick={() => onSelectCollection(COLLECTIONS_DATA[2])}
              aspectHeight="h-[380px] sm:h-[460px]"
            />
          </div>

          {/* Card 4: Custom Creations (Smaller: span 5 order-1 md:order-2 md:-mt-8) */}
          <div className="md:col-span-5 order-1 md:order-2 md:-mt-8">
            <CollectionCard
              item={COLLECTIONS_DATA[3]}
              imageError={imageErrors[COLLECTIONS_DATA[3].id]}
              onError={() => handleImageError(COLLECTIONS_DATA[3].id)}
              onClick={() => onSelectCollection(COLLECTIONS_DATA[3])}
              aspectHeight="h-[340px] sm:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface CollectionCardProps {
  item: CollectionItem;
  imageError?: boolean;
  onError: () => void;
  onClick: () => void;
  aspectHeight: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  item,
  imageError,
  onError,
  onClick,
  aspectHeight,
}) => {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer flex flex-col bg-[#F7F2EC] rounded-lg overflow-hidden border border-[#B6A69B]/25 shadow-xs transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#3E5145]/40"
    >
      {/* Image Container with Zoom Effect */}
      <div className={`relative w-full ${aspectHeight} overflow-hidden bg-[#EFE6DD]`}>
        {!imageError ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={onError}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#EFE6DD] to-[#F7F2EC] text-[#3E5145]">
            <span className="font-serif text-2xl mb-1 italic">{item.title}</span>
            <span className="text-xs uppercase tracking-widest text-[#765E52]">{item.category}</span>
          </div>
        )}

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#292725]/60 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />

        {/* Badge if present */}
        {item.badge && (
          <div className="absolute top-4 left-4 bg-[#F7F2EC]/90 backdrop-blur-md px-3 py-1 rounded-xs border border-[#B6A69B]/30 shadow-xs">
            <span className="text-[10px] uppercase tracking-wider text-[#3E5145] font-semibold">
              {item.badge}
            </span>
          </div>
        )}

        {/* Floating Quick Action indicator */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F7F2EC]/90 backdrop-blur-md flex items-center justify-center text-[#3E5145] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Card Text Content */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between text-xs text-[#7D8875] tracking-widest uppercase mb-2">
            <span>{item.category}</span>
            <span>{item.dimensions}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#292725] group-hover:text-[#3E5145] transition-colors mb-2">
            {item.title}
          </h3>

          <p className="text-sm text-[#765E52] font-light leading-relaxed mb-6">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#B6A69B]/20">
          <span className="text-xs text-[#765E52] font-light">
            Materials: {item.materials[0]}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#3E5145] group-hover:text-[#2A3830] transition-colors">
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
};
