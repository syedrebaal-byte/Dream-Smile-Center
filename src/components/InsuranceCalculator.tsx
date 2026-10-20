import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';

interface InsuranceCalculatorProps {
  onOpenAppointment: () => void;
}

export const InsuranceCalculator: React.FC<InsuranceCalculatorProps> = ({ onOpenAppointment }) => {
  const [selectedService, setSelectedService] = useState<string>('veneers');
  const [hasInsurance, setHasInsurance] = useState<boolean>(true);
  const [financingTerm, setFinancingTerm] = useState<number>(24);

  const serviceEstimates: Record<string, { name: string; estCost: number; typicalCoverage: number; desc: string }> = {
    veneers: {
      name: 'Porcelain Veneer Smile Makeover (4-8 units)',
      estCost: 6400,
      typicalCoverage: 0, // Cosmetic elective
      desc: 'Elective aesthetic treatment; typically financed via CareCredit 0% promotional terms.',
    },
    implant: {
      name: 'Single Dental Implant + Custom Zirconia Crown',
      estCost: 3800,
      typicalCoverage: 1400, // Typical major restorative PPO benefit
      desc: 'Major restorative benefit; PPO insurance often contributes $1,000–$1,800 towards crown & surgery.',
    },
    invisalign: {
      name: 'Invisalign® Full Alignment Therapy',
      estCost: 4600,
      typicalCoverage: 1500, // Orthodontic lifetime max
      desc: 'Many dental PPO plans include a $1,000–$2,000 lifetime orthodontic benefit.',
    },
    wellness: {
      name: 'Comprehensive Exam, Dexis X-Rays & Hygiene',
      estCost: 340,
      typicalCoverage: 340, // 100% preventative PPO
      desc: 'Most PPO insurance policies cover 100% of diagnostic x-rays and semi-annual cleanings.',
    },
  };

  const currentService = serviceEstimates[selectedService];
  const estimatedCoverage = hasInsurance ? currentService.typicalCoverage : 0;
  const patientEstimatedTotal = Math.max(0, currentService.estCost - estimatedCoverage);
  const monthlyPayment = Math.round(patientEstimatedTotal / financingTerm);

  return (
    <section className="py-20 lg:py-24 bg-[#0D212D] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#DFBE7E]">
            <Calculator className="w-4 h-4" />
            <span>Financial Clarity & Monthly Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Transparent investment in your health and confidence.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Estimate your out-of-pocket investment and explore 0% interest promotional monthly plans through CareCredit®.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Treatment Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                1. Select Proposed Treatment:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.entries(serviceEstimates).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedService(key)}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      selectedService === key
                        ? 'bg-[#C5A059] text-slate-950 font-semibold border-[#DFBE7E]'
                        : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-medium">{item.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dental Insurance Toggle */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                2. Do you have Dental PPO Insurance?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setHasInsurance(true)}
                  className={`py-2.5 px-4 rounded-xl text-xs font-medium border transition-all ${
                    hasInsurance
                      ? 'bg-white text-slate-950 font-semibold border-white'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  Yes (Dental PPO)
                </button>
                <button
                  type="button"
                  onClick={() => setHasInsurance(false)}
                  className={`py-2.5 px-4 rounded-xl text-xs font-medium border transition-all ${
                    !hasInsurance
                      ? 'bg-white text-slate-950 font-semibold border-white'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  No / Uninsured
                </button>
              </div>
            </div>

            {/* Step 3: Financing Terms Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-slate-300">
                  3. CareCredit® Financing Period:
                </span>
                <span className="text-[#DFBE7E] font-bold">{financingTerm} Months</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[6, 12, 24, 36].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setFinancingTerm(term)}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                      financingTerm === term
                        ? 'bg-[#C5A059] text-slate-950 border-[#DFBE7E]'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    {term} mo
                  </button>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-white/50 leading-relaxed">
              *Estimates are for illustrative planning. Your exact out-of-pocket obligation is determined by your specific insurance deductible, maximums, and individual clinical treatment plan.
            </p>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#143242] to-[#0A1A24] border border-[#C5A059]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-5">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-wider text-[#DFBE7E] font-semibold">
                  Personalized Estimate Summary
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-1">
                  {currentService.name}
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between text-white/70">
                  <span>Standard Clinical Investment:</span>
                  <span className="font-mono text-white tabular-nums">${currentService.estCost.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-[#DFBE7E]">
                  <span>Estimated Insurance Benefit:</span>
                  <span className="font-mono tabular-nums">-${estimatedCoverage.toLocaleString()}</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-sm font-semibold text-white">
                  <span>Estimated Patient Responsibility:</span>
                  <span className="font-mono text-lg text-white tabular-nums">
                    ${patientEstimatedTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Monthly Payment Focus */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                <div className="text-xs text-white/60">Estimated Monthly Payment ({financingTerm} mo):</div>
                <div className="text-3xl font-serif font-bold text-[#DFBE7E] tabular-nums">
                  ${monthlyPayment.toLocaleString()}<span className="text-sm font-sans font-normal text-white/60"> /mo</span>
                </div>
                <div className="text-[11px] text-white/50">Via CareCredit® flexible payment options</div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={onOpenAppointment}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#C5A059] hover:bg-[#DFBE7E] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow"
              >
                <span>Verify Benefits at Your Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-white/40">
                Our front desk handles 100% of insurance paperwork
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
