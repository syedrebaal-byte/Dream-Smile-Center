import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { ServicesSection } from './components/ServicesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { TechnologySection } from './components/TechnologySection';
import { PatientExperienceSection } from './components/PatientExperienceSection';
import { ReviewsSection } from './components/ReviewsSection';
import { InsuranceCalculator } from './components/InsuranceCalculator';
import { FAQSection } from './components/FAQSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { ServiceItem } from './types';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>(undefined);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>(undefined);
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleOpenAppointment = (doctorId?: string, serviceTitle?: string) => {
    setSelectedDoctorId(doctorId);
    setSelectedServiceTitle(serviceTitle);
    setIsAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false);
    setSelectedDoctorId(undefined);
    setSelectedServiceTitle(undefined);
  };

  const handleSelectService = (service: ServiceItem) => {
    setActiveModalService(service);
  };

  const handleCloseServiceModal = () => {
    setActiveModalService(null);
  };

  const handleBookFromServiceModal = (serviceTitle: string) => {
    handleOpenAppointment(undefined, serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-slate-800 selection:bg-[#0D212D] selection:text-white">
      {/* 3-Zone Strict Top Bar Navigation */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenAppointment={() => handleOpenAppointment()} />

        {/* Interactive 3D Anatomy & Before/After Smile Transformation Showcase */}
        <InteractiveShowcase />

        {/* Curated Clinical Treatments Bento-Grid */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* Distinguished Dentists Leadership & Biographies */}
        <DoctorsSection
          onOpenAppointmentWithDoctor={(docId) => handleOpenAppointment(docId)}
        />

        {/* Diagnostic Precision & Technology */}
        <TechnologySection />

        {/* Patient Experience, Hospitality & Sedation Protocol */}
        <PatientExperienceSection />

        {/* Verified Patient Reviews (975+ 5.0 Star Reviews) */}
        <ReviewsSection />

        {/* Interactive Insurance & CareCredit Monthly Estimator */}
        <InsuranceCalculator onOpenAppointment={() => handleOpenAppointment()} />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Location, Direction Map & Office Hours Matrix */}
        <ContactLocationSection onOpenAppointment={() => handleOpenAppointment()} />
      </main>

      {/* Compliant Healthcare Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Appointment Booking Request Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
        initialDoctorId={selectedDoctorId}
        initialServiceTitle={selectedServiceTitle}
      />

      {/* In-Depth Treatment Protocol Modal */}
      <TreatmentDetailModal
        service={activeModalService}
        onClose={handleCloseServiceModal}
        onBookTreatment={handleBookFromServiceModal}
      />
    </div>
  );
}
