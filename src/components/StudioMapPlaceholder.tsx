import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, ZoomIn, ZoomOut, Layers, Compass, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

export const StudioMapPlaceholder: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [mapStyle, setMapStyle] = useState<'standard' | 'botanical'>('standard');
  const [isCopied, setIsCopied] = useState(false);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Floral Twistella Studio, ${SITE_CONFIG.contact.address}`
  )}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SITE_CONFIG.contact.address);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 1.75));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  return (
    <div className="w-full mt-10 rounded-xl overflow-hidden border border-[#B6A69B]/40 bg-[#EFE6DD]/40 shadow-sm">
      {/* Header bar / Title */}
      <div className="px-5 py-3.5 bg-[#EFE6DD]/80 border-b border-[#B6A69B]/30 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#3E5145] text-[#F7F2EC] flex items-center justify-center shadow-xs">
            <MapPin className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#292725]">
              Atelier Location &amp; Neighborhood
            </h4>
            <p className="text-[11px] text-[#765E52]">
              {SITE_CONFIG.contact.address}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyAddress}
            className="text-[11px] font-medium text-[#3E5145] hover:text-[#2A3830] px-2.5 py-1 rounded-sm bg-white/70 border border-[#B6A69B]/40 transition-colors"
          >
            {isCopied ? 'Address Copied!' : 'Copy Address'}
          </button>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#F7F2EC] bg-[#3E5145] hover:bg-[#2A3830] px-3 py-1 rounded-sm transition-colors shadow-xs"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Styled Map Simulation Canvas */}
      <div className="relative h-72 sm:h-84 md:h-96 w-full overflow-hidden bg-[#E8E2D9] select-none">
        {/* Scalable Vector Map Layer */}
        <div
          className="absolute inset-0 transition-transform duration-300 ease-out origin-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Stylized Google Maps Vector Layout */}
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Land / District Pattern */}
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#DFD7CB" strokeWidth="0.8" />
              </pattern>
            </defs>

            {/* Base land */}
            <rect width="800" height="500" fill={mapStyle === 'botanical' ? '#EDE7DF' : '#F2ECE4'} />
            <rect width="800" height="500" fill="url(#grid)" />

            {/* Botanical Park / Green Reserve Area */}
            <path
              d="M 50,40 Q 140,20 220,70 T 320,130 L 260,220 Q 180,240 100,190 Z"
              fill={mapStyle === 'botanical' ? '#D6DEC8' : '#DDE4D4'}
              stroke="#CBD4C2"
              strokeWidth="1.5"
            />
            <text x="140" y="130" fill="#6A7A64" fontSize="11" fontFamily="sans-serif" fontWeight="600" opacity="0.8">
              Botanical Meadow Park
            </text>

            {/* South River / Waterway */}
            <path
              d="M -20,440 C 180,420 320,470 520,430 S 740,410 820,450 L 820,520 L -20,520 Z"
              fill="#D4E0E5"
              stroke="#BED0D8"
              strokeWidth="2"
            />
            <text x="360" y="470" fill="#758B94" fontSize="10" fontFamily="sans-serif" letterSpacing="2" opacity="0.75">
              CRESCENT WATERWAY
            </text>

            {/* Secondary District Blocks */}
            <rect x="420" y="60" width="140" height="100" rx="6" fill="#E8DFD3" stroke="#DDD3C5" strokeWidth="1" />
            <rect x="580" y="70" width="180" height="120" rx="6" fill="#E8DFD3" stroke="#DDD3C5" strokeWidth="1" />
            <rect x="420" y="190" width="160" height="130" rx="6" fill="#E8DFD3" stroke="#DDD3C5" strokeWidth="1" />
            <rect x="610" y="220" width="150" height="140" rx="6" fill="#E8DFD3" stroke="#DDD3C5" strokeWidth="1" />

            <rect x="80" y="270" width="200" height="110" rx="6" fill="#E8DFD3" stroke="#DDD3C5" strokeWidth="1" />

            {/* Major Arterial Roads (Google Maps highway tone) */}
            <path d="M 0,220 L 800,210" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />
            <path d="M 0,220 L 800,210" stroke="#F5D0A9" strokeWidth="10" strokeLinecap="round" opacity="0.85" />

            <path d="M 380,0 L 400,500" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
            <path d="M 380,0 L 400,500" stroke="#FCECD7" strokeWidth="8" strokeLinecap="round" />

            {/* Connecting Streets */}
            <path d="M 120,0 L 120,500" stroke="#FFFFFF" strokeWidth="7" />
            <path d="M 240,160 L 600,160" stroke="#FFFFFF" strokeWidth="6" />
            <path d="M 240,340 L 780,340" stroke="#FFFFFF" strokeWidth="7" />
            <path d="M 580,0 L 580,500" stroke="#FFFFFF" strokeWidth="7" />

            {/* Street Names */}
            <text x="440" y="202" fill="#8C796E" fontSize="9" fontFamily="sans-serif" fontWeight="500">
              Gardenia Walk
            </text>
            <text x="392" y="380" fill="#8C796E" fontSize="9" fontFamily="sans-serif" fontWeight="500" transform="rotate(88 392,380)">
              Artisan Boulevard
            </text>
            <text x="160" y="285" fill="#99877B" fontSize="9" fontFamily="sans-serif">
              Studio Quarter Plaza
            </text>
            <text x="630" y="105" fill="#99877B" fontSize="9" fontFamily="sans-serif">
              Creative Lofts East
            </text>

            {/* Atelier Studio Radius Halo */}
            <circle cx="440" cy="210" r="52" fill="#3E5145" fillOpacity="0.08" stroke="#3E5145" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="440" cy="210" r="28" fill="#C99B9A" fillOpacity="0.15" />

            {/* Studio Pin Drop Location */}
            <g transform="translate(440, 210)">
              {/* Ground Shadow */}
              <ellipse cx="0" cy="4" rx="14" ry="5" fill="#292725" fillOpacity="0.2" />

              {/* Pin Shape */}
              <path
                d="M 0,0 C -12,-16 -16,-26 -16,-34 C -16,-46 -8,-52 0,-52 C 8,-52 16,-46 16,-34 C 16,-26 12,-16 0,0 Z"
                fill="#3E5145"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                filter="drop-shadow(0px 3px 5px rgba(0,0,0,0.3))"
              />

              {/* Pin Inner Flower / Emblem */}
              <circle cx="0" cy="-34" r="7" fill="#F7F2EC" />
              <circle cx="0" cy="-34" r="3.5" fill="#C99B9A" />
            </g>
          </svg>
        </div>

        {/* Top-Left Floating Studio Card (Emulating Google Maps Place Card) */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 max-w-[270px] sm:max-w-xs bg-white/95 backdrop-blur-md rounded-lg p-3.5 shadow-md border border-[#B6A69B]/40 text-[#292725]">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-serif font-bold text-[#3E5145]">
                  Floral Twistella Atelier
                </span>
                <span className="inline-flex items-center px-1.5 py-0.2 rounded-full bg-[#EFE6DD] text-[9.5px] font-semibold text-[#765E52]">
                  Studio 3B
                </span>
              </div>
              <p className="text-[11px] text-[#765E52] mt-0.5 leading-snug">
                Handcrafted Crochet &amp; Velvet Flower Studio
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[#EFE6DD] text-[10.5px]">
            <span className="font-semibold text-amber-700">★ 5.0</span>
            <span className="text-[#B6A69B]">•</span>
            <span className="text-emerald-700 font-medium">Open Mon–Sat</span>
            <span className="text-[#B6A69B]">•</span>
            <span className="text-[#765E52]">Visits by appointment</span>
          </div>

          <div className="mt-2.5 flex items-center gap-2">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2 bg-[#3E5145] text-[#F7F2EC] rounded-sm text-[11px] font-medium hover:bg-[#2A3830] transition-colors"
            >
              <Navigation className="w-3 h-3" />
              <span>Directions</span>
            </a>
            <button
              type="button"
              onClick={handleCopyAddress}
              className="py-1.5 px-2 bg-[#EFE6DD] text-[#292725] rounded-sm text-[11px] font-medium hover:bg-[#E2D6CA] transition-colors"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Map Controls (Top Right: Map Style Toggle) */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex flex-col gap-1.5">
          <div className="bg-white/90 backdrop-blur-md rounded-md p-1 shadow-sm border border-[#B6A69B]/40 flex gap-1">
            <button
              type="button"
              onClick={() => setMapStyle('standard')}
              className={`px-2.5 py-1 text-[10.5px] font-medium rounded-sm transition-all ${
                mapStyle === 'standard'
                  ? 'bg-[#3E5145] text-white shadow-xs'
                  : 'text-[#765E52] hover:bg-[#EFE6DD]'
              }`}
            >
              Map
            </button>
            <button
              type="button"
              onClick={() => setMapStyle('botanical')}
              className={`px-2.5 py-1 text-[10.5px] font-medium rounded-sm transition-all ${
                mapStyle === 'botanical'
                  ? 'bg-[#3E5145] text-white shadow-xs'
                  : 'text-[#765E52] hover:bg-[#EFE6DD]'
              }`}
            >
              Botanical
            </button>
          </div>
        </div>

        {/* Bottom Right: Zoom & Center Controls */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex flex-col gap-1.5 shadow-sm">
          <button
            type="button"
            onClick={handleZoomIn}
            title="Zoom In"
            aria-label="Zoom in on map"
            className="w-8 h-8 bg-white/95 hover:bg-white text-[#292725] rounded-t-md border border-[#B6A69B]/40 flex items-center justify-center transition-colors active:scale-95"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            title="Zoom Out"
            aria-label="Zoom out on map"
            className="w-8 h-8 bg-white/95 hover:bg-white text-[#292725] rounded-b-md border-x border-b border-[#B6A69B]/40 flex items-center justify-center transition-colors active:scale-95 -mt-1.5"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Left: Google Watermark & Legal note simulation */}
        <div className="absolute bottom-2 left-3 z-10 flex items-center gap-2 pointer-events-none">
          <div className="px-2 py-0.5 bg-white/80 backdrop-blur-xs rounded-sm border border-[#B6A69B]/30 text-[10px] text-[#765E52] font-sans flex items-center gap-1.5">
            <span className="font-semibold text-[#3E5145]">Google Maps</span>
            <span className="opacity-60">|</span>
            <span className="text-[9.5px]">Artisan Quarter Studio Zone</span>
          </div>
        </div>
      </div>

      {/* Footer Notes for Customers */}
      <div className="px-5 py-3 bg-[#EFE6DD]/60 border-t border-[#B6A69B]/30 flex flex-wrap items-center justify-between gap-3 text-xs text-[#765E52]">
        <div className="flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-[#3E5145] shrink-0" />
          <span>
            <strong className="font-medium text-[#292725]">Visiting Tips:</strong> Studio 3B is located on the 2nd courtyard floor of Gardenia Walk. Street parking and guest bays available along Artisan Boulevard.
          </span>
        </div>

        <div className="text-[11px] text-[#B6A69B]">
          Private studio tours and bouquet pickups available by appointment.
        </div>
      </div>
    </div>
  );
};
