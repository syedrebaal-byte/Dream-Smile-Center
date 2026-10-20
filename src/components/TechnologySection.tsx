import React from 'react';
import { clinicImages } from '../assets/images';
import { Cpu, Zap, Eye, Shield, Radio, Sparkles } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const technologies = [
    {
      icon: <Radio className="w-5 h-5 text-[#C5A059]" />,
      name: 'Dexis® Low-Dose Digital X-Rays',
      badge: 'Up to 80% Less Radiation',
      description:
        'Instant ultra-high resolution digital radiographs that expose patients to a fraction of the radiation of traditional film, while providing pinpoint diagnostic detail.',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#C5A059]" />,
      name: 'DIAGNOdent™ Laser Cavity Detection',
      badge: 'Microscopic Laser Detection',
      description:
        'A gentle pen-like fluorescent laser that detects hidden decay lurking beneath intact enamel surfaces years before it would be visible to the naked eye or on traditional x-rays.',
    },
    {
      icon: <Eye className="w-5 h-5 text-[#C5A059]" />,
      name: 'HD Intraoral Video Cameras',
      badge: 'Chairside Patient Screen',
      description:
        'See what your dentist sees in real-time. High-magnification chairside monitors display precise photographs of your teeth and gums, empowering informed treatment choices.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#C5A059]" />,
      name: 'Impression-Free 3D Digital Scans',
      badge: 'No Goopy Putty',
      description:
        'Say goodbye to uncomfortable gag-inducing impression trays. Fast optical scanning captures an exact mathematical 3D model of your bite in minutes.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#C5A059]" />,
      name: 'Philips Zoom!® Advanced Whitening',
      badge: '8 Shades Lighter in 1 Visit',
      description:
        'Clinically proven blue LED light technology combined with professional-strength desensitizing agents for dramatic, uniform brightness without enamel dehydration.',
    },
    {
      icon: <Shield className="w-5 h-5 text-[#C5A059]" />,
      name: 'DOCS Conscious Sedation Protocols',
      badge: 'Total Patient Comfort',
      description:
        'Dr. Bartlett is trained through the Dental Organization for Conscious Sedation (DOCS), offering gentle oral sedation that allows nervous patients to drift through treatment effortlessly.',
    },
  ];

  return (
    <section id="technology" className="py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#E8E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
            <Cpu className="w-4 h-4" />
            <span>State-of-the-Art Clinical Equipment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D212D] tracking-tight">
            Advanced diagnostic technology engineered for comfort and conservative care.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            By investing in early detection lasers, sub-micron digital scanners, and minimal-radiation radiography, Dream Smile Center prevents invasive dental work whenever possible and ensures surgical accuracy when intervention is necessary.
          </p>
        </div>

        {/* 2-Column Layout: Technology Cards Grid + Feature Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 6 Verified Technology Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E8E3DD] flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-[#F4EFEA] border border-[#E8E3DD]">
                      {tech.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-[#C5A059]">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: High-Tech Lab & Milling Visual Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[440px] border border-[#E8E3DD] shadow-lg flex flex-col justify-end p-8 text-white group">
              <img
                src={clinicImages.dentalImplantsTech}
                alt="Digital Intraoral Scan and Precision Dental Implants Engineering"
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D212D] via-[#0D212D]/60 to-transparent" />

              <div className="relative z-10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DFBE7E]">
                  In-House Digital Accuracy
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  CAD/CAM Ceramic Precision
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Every crown, veneer, and implant abutment is designed in 3D to match your exact natural enamel anatomy down to fractions of a millimeter.
                </p>
                <div className="pt-2 flex items-center gap-3 text-xs text-[#DFBE7E]">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Custom Zirconia & E.max Porcelain</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
