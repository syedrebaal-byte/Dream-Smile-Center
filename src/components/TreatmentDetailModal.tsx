import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, Clock, Cpu, HelpCircle, ArrowRight, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface TreatmentDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookTreatment: (serviceTitle: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  service,
  onClose,
  onBookTreatment,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#FAFAF8] rounded-2xl shadow-2xl border border-[#E8E3DD] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#0D212D] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#DFBE7E]">
              {service.category} Dentistry
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {service.title}
            </h3>
            <p className="text-sm text-slate-300">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[68vh] overflow-y-auto">
          
          {/* Detailed Clinical Description */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Clinical Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Grid: Ideal Candidates & What to Expect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Ideal Candidates */}
            <div className="bg-white p-5 rounded-xl border border-slate-200/80 space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Recommended For
              </h5>
              <ul className="space-y-2">
                {service.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to Expect */}
            <div className="bg-white p-5 rounded-xl border border-slate-200/80 space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                What to Expect
              </h5>
              <ul className="space-y-2">
                {service.whatToExpect.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <span className="w-4 h-4 rounded-full bg-[#0D212D] text-[#DFBE7E] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Technology & Timeline Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#F4EFEA] border border-[#E8E3DD]">
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-slate-900">Estimated Timeline</span>
                <span className="text-xs text-slate-600">{service.timeline}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Cpu className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-slate-900">Proprietary Technology</span>
                <span className="text-xs text-slate-600">{service.technology.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          {service.faq.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#C5A059]" />
                Frequently Asked Questions
              </h4>
              <div className="space-y-3">
                {service.faq.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-sm font-semibold text-slate-900 mb-1">{item.question}</div>
                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Action Footer */}
        <div className="p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={`tel:${CLINIC_INFO.phoneDigits}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-950"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
            Questions? Call {CLINIC_INFO.phone}
          </a>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookTreatment(service.title);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-[#0D212D] hover:bg-[#163548] rounded-lg transition-colors flex items-center justify-center gap-2 shadow"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
