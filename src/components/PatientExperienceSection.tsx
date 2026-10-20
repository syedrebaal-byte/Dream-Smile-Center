import React from 'react';
import { clinicImages } from '../assets/images';
import { Heart, Moon, CreditCard, Sparkles, Clock, Check } from 'lucide-react';

export const PatientExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F4EFEA] border-b border-[#E8E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
            <Heart className="w-4 h-4" />
            <span>Hospitality-Driven Healthcare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D212D] tracking-tight">
            Dentistry reimagined as a calming, elevated wellness experience.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We understand that visiting the dentist can evoke vulnerability or stress. From our serene coastal reception lounge to noise-cancelling headphones and conscious sedation options, every touchpoint at Dream Smile Center is designed to put your mind and body at ease.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Clinic Lounge Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/60 aspect-[4/3] group">
              <img
                src={clinicImages.clinicLounge}
                alt="Dream Smile Center Welcoming Hospitality Lounge in Fort Lauderdale"
                className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0D212D]/85 backdrop-blur-md text-white border border-white/10">
                <div className="text-xs font-semibold text-[#DFBE7E]">The Dream Smile Reception Suite</div>
                <div className="text-xs text-white/80 mt-0.5">Quiet, private ambiance designed to dispel dental anxiety before you sit in the chair.</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Patient Experience Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Pillar 1: Dental Anxiety & Sedation */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E3DD] shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#F4EFEA] text-[#C5A059]">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Anxious Patient & Sedation Protocol</h3>
                  <span className="text-xs text-slate-500">DOCS Conscious Sedation Certified</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-12">
                If dental anxiety has kept you from receiving care, you are not alone. Dr. Bartlett offers oral conscious sedation and nitrous oxide, allowing you to relax peacefully through your treatment with zero discomfort and little memory of the visit.
              </p>
            </div>

            {/* Pillar 2: Extended Tuesday Hours */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E3DD] shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#F4EFEA] text-[#C5A059]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Evening Hours Until 7:00 PM</h3>
                  <span className="text-xs text-[#C5A059] font-medium">Every Tuesday in Fort Lauderdale</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-12">
                You should never have to take time off work or take children out of school just to see your dentist. Our Tuesday extended hours allow you to receive comprehensive care on your schedule.
              </p>
            </div>

            {/* Pillar 3: Insurance & Flexible Financing */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E3DD] shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#F4EFEA] text-[#C5A059]">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">CareCredit® & Transparent Insurance</h3>
                  <span className="text-xs text-slate-500">0% Promotional Financing Options</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-12">
                We accept most major PPO dental insurances and file all claims on your behalf. For cosmetic treatments and restorative investments, CareCredit® provides flexible monthly plans to fit your budget.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
