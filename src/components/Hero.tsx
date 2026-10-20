import React from 'react';
import { clinicImages } from '../assets/images';
import { CLINIC_INFO } from '../data/clinicData';
import { Star, ShieldCheck, ArrowRight, Phone, CalendarCheck } from 'lucide-react';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E8E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Headline, Value Proposition, Doctor Credentials & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Unboxed Metadata Trust Marker (Zero-Pill Discipline) */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide uppercase text-slate-500">
                <span className="text-[#C5A059] font-bold">Fort Lauderdale, FL</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>2330 NE 9th St</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="flex items-center gap-1 text-slate-700">
                  <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                  5.0 Rated (975+ Reviews)
                </span>
              </div>

              {/* Master Display Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] font-serif font-bold text-[#0D212D] text-balance tracking-tight">
                Bespoke cosmetic artistry meets decades of restorative mastery.
              </h1>

              {/* Natural, Grounded Value Proposition (No SaaS Buzzwords) */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Led by <strong className="font-semibold text-slate-900">Dr. Jeff Bartlett, DDS, FAGD</strong> and{' '}
                <strong className="font-semibold text-slate-900">Dr. Isabel Castillo, DDS</strong>, Dream Smile Center provides world-class porcelain veneers, precision dental implants, Invisalign, and gentle family dentistry in a calm, private coastal sanctuary.
              </p>

              {/* Verified Trust Markers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Fellow, Academy of General Dentistry (FAGD)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>30+ Years Continuous Service in Fort Lauderdale</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Extended Tuesday Hours (Open until 7:00 PM)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Low-Dose Dexis® Digital & DIAGNOdent™ Laser</span>
                </div>
              </div>
            </div>

            {/* Conversion Action Strip */}
            <div className="pt-4 border-t border-[#E8E3DD]/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#0D212D] hover:bg-[#153447] active:scale-[0.98] rounded-xl transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4 text-[#DFBE7E]" />
                <span>Reserve Consultation</span>
                <ArrowRight className="w-4 h-4 text-white/70" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneDigits}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors shadow-sm whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero High-Impact Visual Asset */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="relative w-full h-full min-h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80 group">
              <img
                src={clinicImages.heroSuite}
                alt="Dream Smile Center Luxury Dental Suite in Fort Lauderdale"
                className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Architectural Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07151D]/90 via-[#07151D]/20 to-transparent pointer-events-none" />

              {/* In-Picture Authentic Trust Marker */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0D212D]/85 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-medium text-[#DFBE7E]">Fort Lauderdale Practice Suite</span>
                  <span className="text-white/60">2330 NE 9th St</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Hospitality-grade private operatories overlooking South Florida vistas, engineered for absolute comfort and privacy.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI Strip in a full-width row below the hero split */}
        <div className="mt-14 pt-10 border-t border-[#E8E3DD] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {CLINIC_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0D212D] tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-900">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500">
                {stat.source}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
