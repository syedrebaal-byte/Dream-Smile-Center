import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#FAFAF8]/95 backdrop-blur-md shadow-sm border-b border-[#E8E3DD]'
            : 'bg-[#FAFAF8] border-b border-[#E8E3DD]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Brand wordmark (single text element, no subtitle badges) */}
            <a
              href="#"
              className="text-2xl font-serif font-bold tracking-tight text-[#0D212D] hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0"
            >
              Dream Smile Center
            </a>

            {/* Zone 2: 4–5 concise single-line navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
              <a
                href="#treatments"
                className="hover:text-[#0D212D] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
              >
                Treatments
              </a>
              <a
                href="#doctors"
                className="hover:text-[#0D212D] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
              >
                Doctors
              </a>
              <a
                href="#technology"
                className="hover:text-[#0D212D] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
              >
                Technology
              </a>
              <a
                href="#experience"
                className="hover:text-[#0D212D] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
              >
                Patient Experience
              </a>
              <a
                href="#location"
                className="hover:text-[#0D212D] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
              >
                Hours & Location
              </a>
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${CLINIC_INFO.phoneDigits}`}
                className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0D212D] transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
              <button
                onClick={onOpenAppointment}
                className="px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#0D212D] hover:bg-[#163548] active:scale-[0.98] rounded-lg transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0"
              >
                Request Visit
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-black/5"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-[#E8E3DD] bg-[#FAFAF8] px-4 pt-2 pb-6 space-y-3">
            <a
              href="#treatments"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-[#C5A059]"
            >
              Treatments
            </a>
            <a
              href="#doctors"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-[#C5A059]"
            >
              Doctors
            </a>
            <a
              href="#technology"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-[#C5A059]"
            >
              Technology
            </a>
            <a
              href="#experience"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-[#C5A059]"
            >
              Patient Experience
            </a>
            <a
              href="#location"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-[#C5A059]"
            >
              Hours & Location
            </a>
            <div className="pt-3 border-t border-[#E8E3DD] flex flex-col gap-2.5">
              <a
                href={`tel:${CLINIC_INFO.phoneDigits}`}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-900 border border-slate-300 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                Call {CLINIC_INFO.phone}
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full py-3 text-sm font-semibold text-white bg-[#0D212D] rounded-lg shadow"
              >
                Request Visit
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
