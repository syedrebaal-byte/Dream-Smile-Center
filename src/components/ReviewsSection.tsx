import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/clinicData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filterSource, setFilterSource] = useState<string>('All');

  const sources = ['All', 'Google', 'Birdeye', 'Zocdoc'];

  const filteredReviews = filterSource === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(r => r.source === filterSource);

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#E8E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Real Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
              <Star className="w-4 h-4 fill-[#C5A059]" />
              <span>Verified Patient Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D212D] tracking-tight">
              Fort Lauderdale's trusted dental home for over 975 patients.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Read authentic feedback from individuals and families whose confidence and comfort were renewed by Dr. Bartlett and Dr. Castillo.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="p-5 rounded-2xl bg-white border border-[#E8E3DD] shadow-sm flex items-center gap-4 shrink-0">
            <div className="text-4xl font-serif font-bold text-[#0D212D] tabular-nums">
              5.0
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs font-semibold text-slate-800">
                975+ Verified Patient Reviews
              </div>
              <div className="text-[11px] text-slate-500">
                Birdeye, Google & Zocdoc Verified
              </div>
            </div>
          </div>
        </div>

        {/* Source Filter Tabs */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-medium text-slate-500 mr-2">Filter Source:</span>
          {sources.map((src) => (
            <button
              key={src}
              onClick={() => setFilterSource(src)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filterSource === src
                  ? 'bg-[#0D212D] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {src}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-[#E8E3DD] p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    {rev.source}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#0D212D]">
                  {rev.treatment}
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{rev.quote}"
                </blockquote>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{rev.patientName}</span>
                </div>
                <span className="text-slate-500 text-[11px]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
