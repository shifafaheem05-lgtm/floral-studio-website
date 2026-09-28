import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/siteContent';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#EFE6DD]/30 border-y border-[#B6A69B]/20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#765E52] mb-3 block">
            BESPOKE OFFERINGS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292725] tracking-tight leading-tight">
            Thoughtfully Made for You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#765E52] font-light">
            From one-off everlasting bridal bouquets to private studio gatherings and curated floral gifts.
          </p>
        </div>

        {/* 4 Minimal Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.number}
              onClick={() => onSelectService(service.title)}
              className="group cursor-pointer bg-[#F7F2EC] p-8 rounded-md border border-[#B6A69B]/25 hover:border-[#3E5145] transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Large Serif Number */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl sm:text-4xl text-[#B6A69B] group-hover:text-[#3E5145] transition-colors font-light">
                    {service.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EFE6DD] flex items-center justify-center text-[#765E52] group-hover:bg-[#3E5145] group-hover:text-[#F7F2EC] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Service Heading */}
                <h3 className="font-serif text-2xl text-[#292725] group-hover:text-[#3E5145] transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#765E52] font-light leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="pt-4 border-t border-[#B6A69B]/20 text-[11px] uppercase tracking-widest text-[#3E5145] font-semibold group-hover:translate-x-1 transition-transform">
                Inquire About {service.title} &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
