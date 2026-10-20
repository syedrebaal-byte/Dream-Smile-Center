import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { clinicImages } from '../assets/images';
import { Award, GraduationCap, Users, CheckCircle2 } from 'lucide-react';

interface DoctorsSectionProps {
  onOpenAppointmentWithDoctor: (doctorId: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  onOpenAppointmentWithDoctor,
}) => {
  return (
    <section id="doctors" className="py-20 lg:py-28 bg-[#F4EFEA] border-b border-[#E8E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
            <Award className="w-4 h-4" />
            <span>Clinical Leadership & Proven Pedigree</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D212D] tracking-tight">
            Distinguished clinicians, dedicated to Fort Lauderdale for over 30 years.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Unlike corporate dental groups with rotating providers, Dream Smile Center is proudly physician-owned. You are cared for by master clinicians whose reputations are built on lifelong relationships, conservative ethics, and continuous post-doctoral training.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl border border-[#E8E3DD] p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-6">
                
                {/* Doctor Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 pb-5">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D212D]">
                      {doctor.name}
                    </h3>
                    <div className="text-sm font-semibold text-[#C5A059] mt-0.5">
                      {doctor.title} · {doctor.role}
                    </div>
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {doctor.experience}
                  </div>
                </div>

                {/* Personal Doctor Quote */}
                <blockquote className="italic font-serif text-slate-700 text-base leading-relaxed pl-4 border-l-2 border-[#C5A059]/60">
                  "{doctor.quote}"
                </blockquote>

                {/* Bio Prose */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {doctor.bio}
                </p>

                {/* Education */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900">
                    <GraduationCap className="w-4 h-4 text-[#C5A059]" />
                    <span>Education & Honors</span>
                  </div>
                  <ul className="space-y-1.5">
                    {doctor.education.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Professional Memberships */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900">
                    <Users className="w-4 h-4 text-[#C5A059]" />
                    <span>Professional Affiliations</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {doctor.memberships.map((m, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  Accepting new patients
                </div>
                <button
                  onClick={() => onOpenAppointmentWithDoctor(doctor.id)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0D212D] hover:bg-[#163548] rounded-lg transition-colors shadow-sm"
                >
                  Request Visit with {doctor.name.split(' ')[1]}
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* Feature Spotlight: Clinical Artistry in Action */}
        <div className="mt-14 rounded-2xl overflow-hidden bg-white border border-[#E8E3DD] p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 rounded-xl overflow-hidden aspect-[4/3] relative">
            <img
              src={clinicImages.dentistConsultation}
              alt="Dr. Isabel Castillo and Dr. Jeff Bartlett consultation"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              The Dream Smile Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D212D]">
              Unrushed consultations and complete diagnostic transparency.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We believe great dentistry begins with active listening. During your comprehensive visit, we review your high-definition intraoral images and digital low-dose x-rays together on an HD screen. You will never be told you need a treatment without seeing and understanding exactly why.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                Zero Pressure Treatment Plans
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                Written Estimates Before Care Begins
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                Full Insurance Claim Filing
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
