import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Clock, Mail, ExternalLink, AlertCircle, Car, ShieldAlert } from 'lucide-react';

interface ContactLocationProps {
  onOpenAppointment: () => void;
}

export const ContactLocationSection: React.FC<ContactLocationProps> = ({ onOpenAppointment }) => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#E8E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
            <MapPin className="w-4 h-4" />
            <span>Fort Lauderdale Practice & Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D212D] tracking-tight">
            Conveniently located in East Fort Lauderdale.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Situated just moments from Sunrise Boulevard and the Galleria, with dedicated patient parking and flexible early morning and evening hours.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Hours Matrix & Practice Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Hours Table */}
            <div className="bg-white rounded-2xl border border-[#E8E3DD] p-7 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Clinical Hours</span>
                </div>
                <span className="text-[11px] font-semibold text-[#C5A059] bg-[#F4EFEA] px-2.5 py-1 rounded">
                  Extended Tuesday Hours
                </span>
              </div>

              <div className="space-y-3">
                {CLINIC_INFO.hours.map((h, idx) => {
                  const isTuesday = h.day === 'Tuesday';
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg text-xs sm:text-sm transition-colors ${
                        isTuesday ? 'bg-[#0D212D] text-white font-medium' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-semibold w-24 sm:w-32">{h.day}</span>
                        {isTuesday && (
                          <span className="text-[10px] text-[#DFBE7E] font-normal hidden sm:inline">
                            (Evening Appointments)
                          </span>
                        )}
                      </div>
                      <span className={`font-mono tabular-nums ${isTuesday ? 'text-[#DFBE7E]' : 'text-slate-900'}`}>
                        {h.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                *We strive to accommodate urgent dental emergencies within 24 hours. Please call immediately if experiencing acute dental discomfort.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white p-5 rounded-xl border border-[#E8E3DD] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-900">
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Telephone</span>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.phoneDigits}`}
                  className="block text-base font-bold text-[#0D212D] hover:text-[#C5A059] transition-colors"
                >
                  {CLINIC_INFO.phone}
                </a>
                <span className="block text-[11px] text-slate-500">Live assistance during business hours</span>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E8E3DD] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-900">
                  <Car className="w-4 h-4 text-[#C5A059]" />
                  <span>Complimentary Parking</span>
                </div>
                <div className="text-sm font-semibold text-slate-800">
                  Private Reserved Lot
                </div>
                <span className="block text-[11px] text-slate-500">Directly outside our front entrance</span>
              </div>

            </div>

            {/* Emergency Dental Notice */}
            <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-950">
              <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">Dental Emergency Protocol:</strong>
                If you have a knocked-out tooth, severe acute throbbing, or sudden trauma, please contact our emergency line at{' '}
                <a href={`tel:${CLINIC_INFO.phoneDigits}`} className="font-bold underline text-amber-900">
                  {CLINIC_INFO.phone}
                </a>{' '}
                immediately.
              </div>
            </div>

          </div>

          {/* Right Column: Address, Interactive Map Card & Navigation */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-white rounded-2xl border border-[#E8E3DD] p-7 shadow-sm flex flex-col justify-between h-full space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                      Facility Address
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D212D] mt-1">
                      {CLINIC_INFO.address}
                    </h3>
                    <div className="text-sm text-slate-600">
                      {CLINIC_INFO.city}, {CLINIC_INFO.state} {CLINIC_INFO.zip}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {CLINIC_INFO.neighborhood}
                    </div>
                  </div>

                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#0D212D] hover:bg-[#163548] text-white transition-colors shrink-0"
                    title="Open in Google Maps"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Styled Interactive Map Preview Box */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex flex-col items-center justify-center p-6 text-center group">
                  {/* Subtle map stylized background grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
                  
                  {/* Pin Indicator */}
                  <div className="relative z-10 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#0D212D] text-[#DFBE7E] mx-auto flex items-center justify-center shadow-xl border-2 border-white animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-serif font-bold text-slate-900">Dream Smile Center</div>
                      <div className="text-xs text-slate-600">2330 NE 9th St, Fort Lauderdale</div>
                    </div>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-50 rounded-lg border border-slate-300 shadow-sm transition-all"
                    >
                      <span>Get Turn-by-Turn Directions</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Ready to experience Dream Smile Center?
                </span>
                <button
                  onClick={onOpenAppointment}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0D212D] hover:bg-[#163548] rounded-xl transition-all shadow"
                >
                  Request Your Visit
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
