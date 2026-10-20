import React, { useState } from 'react';
import { SERVICES } from '../data/clinicData';
import { ServiceItem } from '../types';
import { clinicImages } from '../assets/images';
import { ArrowUpRight, Sparkles, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenAppointment: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenAppointment,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cosmetic', 'Restorative', 'Orthodontics', 'Wellness & Sleep', 'Preventative'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#E8E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
              <Sparkles className="w-4 h-4" />
              <span>Comprehensive Dental Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D212D] tracking-tight">
              Curated clinical treatments, tailored to your anatomy.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From microscopic porcelain laminates to full arch tooth replacement and sleep apnea therapy, every procedure is executed with conservative biological principles and modern digital precision.
            </p>
          </div>

          {/* Interactive Category Tabs (Clean Segmented Controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F0EBE5] rounded-xl border border-[#E8E3DD] shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#0D212D] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Bento-Grid Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Marquee Card 1: Handcrafted Porcelain Veneers (Span 2 cols on lg) */}
          {filteredServices.find(s => s.id === 'porcelain-veneers') && (
            <div
              onClick={() => onSelectService(filteredServices.find(s => s.id === 'porcelain-veneers')!)}
              className="lg:col-span-2 group relative rounded-2xl bg-white border border-[#E8E3DD] p-7 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:border-[#C5A059]/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="space-y-6 relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
                      01. Cosmetic Dentistry
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D212D] group-hover:text-[#9A7B39] transition-colors">
                      Custom Porcelain Veneers & Smile Makeovers
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FAFAF8] border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-[#0D212D] group-hover:text-white transition-all shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                  Ultra-thin custom porcelain facings tailored to your facial geometry, tooth shade, and personal smile goals. Non-invasive, conservative preparation preserving your natural tooth vitality.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Digital 3D Smile Mockup</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Micro-Thin Ceramics</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>15–20 Year Longevity</span>
                  </div>
                </div>
              </div>

              {/* High-end image thumbnail accent */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-900">Dr. Jeff Bartlett & Dr. Isabel Castillo</span>
                <span className="text-[#C5A059] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Full Clinical Details & Protocol →
                </span>
              </div>
            </div>
          )}

          {/* Marquee Card 2: Permanent Dental Implants */}
          {filteredServices.find(s => s.id === 'dental-implants') && (
            <div
              onClick={() => onSelectService(filteredServices.find(s => s.id === 'dental-implants')!)}
              className="group relative rounded-2xl bg-white border border-[#E8E3DD] p-7 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:border-[#C5A059]/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="space-y-6 relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
                      02. Restorative
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D212D] group-hover:text-[#9A7B39] transition-colors">
                      Permanent Dental Implants
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FAFAF8] border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-[#0D212D] group-hover:text-white transition-all shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  The gold standard for permanent tooth replacement. Restore full bite power and natural aesthetics while halting progressive bone loss.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Computer-Guided Placement</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Custom Milled Zirconia Crowns</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Permanent Solution</span>
                <span className="text-[#C5A059] font-semibold">Explore Protocol →</span>
              </div>
            </div>
          )}

          {/* Remaining Services in Bento Style */}
          {filteredServices
            .filter(s => s.id !== 'porcelain-veneers' && s.id !== 'dental-implants')
            .map((service, index) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group relative rounded-2xl bg-white border border-[#E8E3DD] p-7 flex flex-col justify-between hover:shadow-xl hover:border-[#C5A059]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                        0{index + 3}. {service.category}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-[#0D212D] group-hover:text-[#9A7B39] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#FAFAF8] border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-[#0D212D] group-hover:text-white transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
                    <span className="font-medium text-slate-700">Timeline:</span>
                    <span>{service.timeline}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{service.technology[0]}</span>
                  <span className="text-[#C5A059] font-semibold group-hover:translate-x-1 transition-transform">
                    Learn more →
                  </span>
                </div>
              </div>
            ))}

        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-[#0D212D] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-white">
              Unsure which treatment is right for your smile goals?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Schedule a one-on-one diagnostic consultation with Dr. Bartlett or Dr. Castillo for a comprehensive 3D evaluation and transparent treatment plan.
            </p>
          </div>
          <button
            onClick={onOpenAppointment}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#C5A059] hover:bg-[#DFBE7E] active:scale-[0.98] rounded-xl transition-all shadow shrink-0 whitespace-nowrap"
          >
            Reserve Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
