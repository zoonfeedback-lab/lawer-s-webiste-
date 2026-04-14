export interface Appointment {
  id: string;
  fullName: string;
  cnic: string;
  phone: string;
  email: string;
  serviceType: string;
  date: string;
  time: string;
  description: string;
  documentUrl?: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface Client {
  id: string;
  name: string;
  company: string;
  industry: string;
  logoUrl?: string;
  testimonial?: string;
  createdAt: string;
}

export interface PortfolioCase {
  id: string;
  title: string;
  industry: string;
  year: string;
  clientType: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
  createdAt: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  documents: string[];
  process: string[];
}
