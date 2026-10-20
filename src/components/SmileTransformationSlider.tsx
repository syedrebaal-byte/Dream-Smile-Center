import React, { useState, useRef, useCallback } from 'react';
import { clinicImages } from '../assets/images';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export const SmileTransformationSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(52);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-900 shadow-xl select-none group">
      {/* Top Banner */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#0D212D]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white text-xs">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
        <span className="font-medium">Aesthetic Smile Makeover & Veneer Calibration</span>
      </div>

      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden cursor-ew-resize"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* "After" Image - Fully Finished Luminous Veneers */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={clinicImages.cosmeticVeneers}
            alt="Dream Smile Center Porcelain Veneers Final Result"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 right-4 z-10 bg-[#0D212D]/80 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold text-[#DFBE7E] border border-[#C5A059]/30">
            AFTER · Custom Porcelain Veneers
          </div>
        </div>

        {/* "Before" Image - Clipped Overlay with realistic tone grading */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[340px] md:min-w-[700px] lg:min-w-[900px]">
            <img
              src={clinicImages.cosmeticVeneers}
              alt="Pre-treatment Smile Assessment"
              className="w-full h-full object-cover object-center filter saturate-[0.6] contrast-[0.9] brightness-[0.88]"
              referrerPolicy="no-referrer"
            />
            {/* Subtle natural pre-treatment tone overlay */}
            <div className="absolute inset-0 bg-amber-950/20 mix-blend-color" />
            <div className="absolute bottom-4 left-4 z-10 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded text-xs font-medium text-slate-200 border border-white/10">
              BEFORE · Initial Evaluation
            </div>
          </div>
        </div>

        {/* Vertical Divider Line with handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0D212D] border-2 border-[#C5A059] flex items-center justify-center text-white shadow-lg pointer-events-auto cursor-ew-resize hover:scale-105 transition-transform">
            <MoveHorizontal className="w-4 h-4 text-[#DFBE7E]" />
          </div>
        </div>
      </div>

      {/* Footer Info Bar */}
      <div className="p-4 bg-[#0D212D] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-white/10">
        <div className="flex items-center gap-2 text-white/80">
          <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
          <span>Slide to compare conservative enamel prep vs hand-layered porcelain veneers</span>
        </div>
        <div className="text-[#DFBE7E] font-medium">
          Planned with 3D Digital Smile Design
        </div>
      </div>
    </div>
  );
};
