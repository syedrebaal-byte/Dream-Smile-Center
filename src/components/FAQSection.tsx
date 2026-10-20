import React, { useState } from 'react';
import { FAQS } from '../data/clinicData';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#E8E3DD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
            <HelpCircle className="w-4 h-4" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D212D] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Everything you need to know about our Fort Lauderdale practice, insurance policies, appointments, and comfort standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E3DD] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-serif font-semibold text-[#0D212D]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAFAF8] border border-slate-200 flex items-center justify-center text-slate-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#0D212D] text-white border-transparent' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F4EFEA] border border-[#E8E3DD] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-semibold text-slate-900">Have a specific clinical question?</div>
            <div className="text-xs text-slate-600">Our patient care coordinators are happy to assist.</div>
          </div>
          <a
            href={`tel:${CLINIC_INFO.phoneDigits}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0D212D] hover:bg-[#163548] rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Call (954) 566-8668</span>
          </a>
        </div>

      </div>
    </section>
  );
};
