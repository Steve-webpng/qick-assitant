export interface Idea {
  coreIdea: string;
  targetAudience: string;
  usp: string; // Unique Selling Proposition
}

export interface SWOT {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface ViabilityJustification {
  summary: string;
  positiveFactors: string[];
  negativeFactors: string[];
}

export interface AnalysisReport {
  ideaName: string;
  marketAnalysis: string;
  competitorAnalysis: string;
  targetAudienceProfile: string;
  potentialRevenueStreams: string[];
  marketingStrategy: string[];
  potentialMonetizationStrategies: string;
  scalabilityAnalysis: string;
  swotAnalysis: SWOT;
  overallViabilityScore: number;
  viabilityJustification: ViabilityJustification;
}
