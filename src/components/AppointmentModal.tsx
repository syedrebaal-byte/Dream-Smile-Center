import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { CLINIC_INFO, SERVICES, DOCTORS } from '../data/clinicData';
import confetti from 'canvas-confetti';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctorId?: string;
  initialServiceTitle?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDoctorId,
  initialServiceTitle,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredDoctor: initialDoctorId || 'any',
    serviceType: initialServiceTitle || 'Cosmetic Smile Makeover & Veneers',
    preferredDate: '',
    preferredTime: 'morning',
    isNewPatient: true,
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form Validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Please provide your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMsg('Please provide a valid contact telephone number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-xl bg-[#FAFAF8] rounded-2xl shadow-2xl border border-[#E8E3DD] overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0D212D] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#DFBE7E]">
              Dream Smile Center · Fort Lauderdale
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Request Your Consultation
            </h3>
            <p className="text-xs text-slate-300">
              Select your preferred doctor, time, and service. Our concierge team will reach out promptly to confirm.
            </p>
          </div>
        </div>

        {/* Success View */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-serif font-bold text-[#0D212D]">
                Consultation Request Received
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Our patient care coordinator will review your preferred date and contact you at <strong>{formData.phone}</strong> to confirm your appointment time and intake details.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F4EFEA] border border-[#E8E3DD] text-xs text-slate-700 text-left space-y-1.5 max-w-sm mx-auto">
              <div><strong>Clinic:</strong> Dream Smile Center</div>
              <div><strong>Address:</strong> 2330 NE 9th St, Fort Lauderdale, FL 33304</div>
              <div><strong>Direct Phone:</strong> (954) 566-8668</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-[#0D212D] rounded-xl hover:bg-[#163548] transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Patient Type */}
            <div className="flex items-center gap-4 text-xs">
              <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-800">
                <input
                  type="radio"
                  name="patientType"
                  checked={formData.isNewPatient}
                  onChange={() => setFormData({ ...formData, isNewPatient: true })}
                  className="text-[#0D212D] focus:ring-[#0D212D]"
                />
                <span>I am a New Patient</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-800">
                <input
                  type="radio"
                  name="patientType"
                  checked={!formData.isNewPatient}
                  onChange={() => setFormData({ ...formData, isNewPatient: false })}
                  className="text-[#0D212D] focus:ring-[#0D212D]"
                />
                <span>Returning Patient</span>
              </label>
            </div>

            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D212D]/20 focus:border-[#0D212D]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(954) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D212D]/20 focus:border-[#0D212D]"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D212D]/20 focus:border-[#0D212D]"
              />
            </div>

            {/* Doctor Selection & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Preferred Doctor
                </label>
                <select
                  value={formData.preferredDoctor}
                  onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:border-[#0D212D]"
                >
                  <option value="any">First Available Doctor</option>
                  <option value="dr-bartlett">Dr. Jeff Bartlett, DDS, FAGD</option>
                  <option value="dr-castillo">Dr. Isabel Castillo, DDS</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Treatment Interest
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:border-[#0D212D]"
                >
                  <option value="Porcelain Veneers & Smile Makeover">Porcelain Veneers & Smile Makeover</option>
                  <option value="Dental Implants & Restorative">Permanent Dental Implants</option>
                  <option value="Invisalign Clear Aligners">Invisalign® Clear Aligners</option>
                  <option value="Zoom In-Office Teeth Whitening">Zoom!® In-Office Whitening</option>
                  <option value="Sleep Apnea & TMJ Oral Appliance">Sleep Apnea & Snoring Appliance</option>
                  <option value="Comprehensive Exam & Cleaning">Comprehensive Exam & Gentle Cleaning</option>
                  <option value="Second Opinion / Consultation">Second Opinion / Consultation</option>
                  <option value="Emergency Tooth Pain">Urgent / Dental Discomfort</option>
                </select>
              </div>
            </div>

            {/* Preferred Date & Time Window */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Target Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:border-[#0D212D]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  Time Preference
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value as any })}
                  className="w-full px-3 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:border-[#0D212D]"
                >
                  <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
                  <option value="afternoon">Afternoon (1:00 PM – 5:00 PM)</option>
                  <option value="evening-tue">Tuesday Evening (5:00 PM – 7:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Additional Notes or Dental Concerns (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Tell us if you experience dental anxiety, have specific goals, or need insurance verification..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:border-[#0D212D]"
              />
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-4">
              <div className="text-[11px] text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Strict HIPAA privacy protected</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0D212D] hover:bg-[#163548] active:scale-[0.98] rounded-xl transition-all shadow disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
