import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  return (
    <footer className="bg-[#07151D] text-slate-400 pt-16 pb-12 border-t border-white/10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="text-2xl font-serif font-bold text-white tracking-tight inline-block">
              Dream Smile Center
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Fort Lauderdale’s premier destination for bespoke cosmetic veneers, permanent dental implants, Invisalign, and gentle family dentistry for over 30 years.
            </p>
            <div className="space-y-1.5 text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>2330 NE 9th St, Fort Lauderdale, FL 33304</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <a href={`tel:${CLINIC_INFO.phoneDigits}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2">
              <li><a href="#treatments" className="hover:text-white transition-colors">Dental Treatments</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Meet the Dentists</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Clinical Technology</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Patient Comfort</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Hours & Directions</a></li>
            </ul>
          </div>

          {/* Clinical Focus */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Key Services
            </div>
            <ul className="space-y-2">
              <li>Porcelain Veneers</li>
              <li>Dental Implants</li>
              <li>Invisalign® Clear Aligners</li>
              <li>Sleep Apnea & TMJ Care</li>
              <li>DIAGNOdent™ Laser Hygiene</li>
            </ul>
          </div>

          {/* Appointment Callout */}
          <div className="lg:col-span-3 space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#DFBE7E]">
              Schedule Consultation
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Accepting new patients and emergencies in Fort Lauderdale. Contact our office today.
            </p>
            <button
              onClick={onOpenAppointment}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-[#C5A059] hover:bg-[#DFBE7E] rounded-lg transition-colors shadow"
            >
              Request Appointment
            </button>
          </div>

        </div>

        {/* Legal & Medical Notice */}
        <div className="pt-8 border-t border-white/10 space-y-4 text-[11px] text-slate-500">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              © {new Date().getFullYear()} Dream Smile Center · Jeff Bartlett, DDS, FAGD & Isabel Castillo, DDS. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>ADA Accessible Facility</span>
              <span aria-hidden="true">·</span>
              <span>HIPAA Compliant</span>
              <span aria-hidden="true">·</span>
              <span>Non-Discrimination Policy</span>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Disclaimer: The information provided on this website is for educational and informational purposes only and does not constitute formal medical diagnosis or clinical advice. Dental treatment suitability and outcomes vary based on individual physiological conditions and thorough clinical examination.
          </p>
        </div>

      </div>
    </footer>
  );
};
