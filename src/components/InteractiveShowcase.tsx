import React from 'react';
import { Interactive3DTooth } from './Interactive3DTooth';
import { SmileTransformationSlider } from './SmileTransformationSlider';
import { Sparkles, Layers, ShieldCheck, Microscope } from 'lucide-react';

export const InteractiveShowcase: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#0D212D] text-white relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#DFBE7E]">
            <Microscope className="w-4 h-4" />
            <span>Interactive Clinical Exploration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight text-balance">
            Where biological health meets high-precision ceramic craftsmanship.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Every porcelain veneer, crown, and dental implant at Dream Smile Center is individually sculpted to harmonize with your unique bite dynamics, speech patterns, and facial aesthetics. Explore our digital 3D ceramic model and interactive smile transformation below.
          </p>
        </div>

        {/* 2-Column Split: Interactive 3D Canvas + Smile Transformation Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive 3D WebGL Tooth */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Interactive3DTooth />
            
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/70">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="font-semibold text-white mb-0.5">Biocompatible Zirconia</div>
                <div className="text-[11px] text-white/60">Metal-free, hypoallergenic foundation with maximum tensile strength.</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="font-semibold text-white mb-0.5">Micro-Layered Enamel</div>
                <div className="text-[11px] text-white/60">Multi-depth ceramic layering mimics natural light reflectance.</div>
              </div>
            </div>
          </div>

          {/* Right Column: Smile Transformation Interactive Slider */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <SmileTransformationSlider />

            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
              <div className="space-y-0.5">
                <div className="font-semibold text-white">Full Mouth Aesthetics & Diagnostic Mockups</div>
                <div className="text-white/60">
                  We create preview temporaries before final bonding, ensuring you are 100% in love with your smile shape and shade.
                </div>
              </div>
              <div className="shrink-0 text-[#DFBE7E] font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>15–20 Year Proven Longevity</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
