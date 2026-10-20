export interface Doctor {
  id: string;
  name: string;
  title: string;
  role: string;
  experience: string;
  education: string[];
  memberships: string[];
  bio: string;
  quote: string;
  specialties: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Cosmetic' | 'Restorative' | 'Orthodontics' | 'Wellness & Sleep' | 'Preventative';
  summary: string;
  fullDescription: string;
  idealFor: string[];
  whatToExpect: string[];
  timeline: string;
  technology: string[];
  faq: { question: string; answer: string }[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  patientName: string;
  treatment: string;
  rating: number;
  date: string;
  source: 'Birdeye' | 'Google' | 'Zocdoc' | 'PatientConnect365';
  quote: string;
  verified: boolean;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDoctor: 'any' | 'dr-bartlett' | 'dr-castillo';
  serviceType: string;
  preferredDate: string;
  preferredTime: 'morning' | 'afternoon' | 'evening-tue';
  notes: string;
  isNewPatient: boolean;
}
