export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  audience: string;
}

export interface FormulaPackage {
  id: string;
  name: string;
  subtitle: string;
  recommendedFor: string;
  cadence: string;
  features: string[];
  highlights: string[];
  ctaLabel: string;
  badge?: string;
}

export interface CaseStudy {
  id: string;
  sector: string;
  headcount: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
  author: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'juridique' | 'pratique' | 'organisation';
}

export interface DiagnosticResult {
  score: number;
  level: 'Critique' | 'Vigilance' | 'Serein';
  summary: string;
  recommendations: string[];
  suggestedFormula: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  badgeKicker: string;
  summary: string;
  impactTPE: string;
  keyPoints: string[];
  fullContent: {
    context: string;
    legalRules: string[];
    riskIfIgnored: string;
    recommendationsAurealys: string[];
  };
}

export interface TrainingAsset {
  id: string;
  title: string;
  type: 'word' | 'excel' | 'pdf' | 'checklist';
  description: string;
}

export interface TrainingModule {
  id: string;
  number: string;
  title: string;
  duration: string;
  summary: string;
  videoUrl?: string;
  keyPoints: string[];
  resources: string[];
}

export interface TrainingCourse {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge?: string;
  category: 'rupture' | 'cse' | 'management' | 'conformite';
  price: number;
  priceFormatted: string;
  vatRate: number;
  paymentUrl: string; // The URL to Stripe, PayPal, or Microsoft Bookings/Invoice payment
  duration: string;
  modulesCount: number;
  targetAudience: string;
  prerequisites: string;
  description: string;
  learningOutcomes: string[];
  modules: TrainingModule[];
  includedAssets: TrainingAsset[];
  opcoEligible: boolean;
}
