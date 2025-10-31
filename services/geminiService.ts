import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisReport, Idea } from '../types';

// Per your request, the API key has been set to run the application.
const API_KEY = "AIzaSyBCZO4qjarvuaod1YqJyzh9wv_lAE5cy1Y";

if (!API_KEY) {
  throw new Error("API_KEY is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    ideaName: { type: Type.STRING, description: "A catchy name for the business idea, 2-4 words." },
    marketAnalysis: { type: Type.STRING, description: "A paragraph analyzing the target market size (including TAM/SAM/SOM if applicable), trends, and potential." },
    competitorAnalysis: { type: Type.STRING, description: "A paragraph identifying potential direct and indirect competitors, their positioning, and market gaps." },
    targetAudienceProfile: { type: Type.STRING, description: "A detailed persona of the ideal customer, including demographics, psychographics, and key pain points." },
    potentialRevenueStreams: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of 3-5 potential and actionable revenue streams for the business.",
    },
    marketingStrategy: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of 3-5 high-level, actionable go-to-market strategies to reach the target audience.",
    },
    swotAnalysis: {
      type: Type.OBJECT,
      properties: {
        strengths: { type: Type.ARRAY, items: { type: Type.STRING }, description: "List of 2-3 key strengths." },
        weaknesses: { type: Type.ARRAY, items: { type: Type.STRING }, description: "List of 2-3 key weaknesses." },
        opportunities: { type: Type.ARRAY, items: { type: Type.STRING }, description: "List of 2-3 key opportunities." },
        threats: { type: Type.ARRAY, items: { type: Type.STRING }, description: "List of 2-3 key threats." },
      },
      required: ["strengths", "weaknesses", "opportunities", "threats"],
    },
    overallViabilityScore: { type: Type.NUMBER, description: "A score from 1 to 10 indicating the idea's viability." },
    viabilityJustification: { type: Type.STRING, description: "A brief, critical justification for the given viability score." },
  },
  required: [
    "ideaName",
    "marketAnalysis",
    "competitorAnalysis",
    "targetAudienceProfile",
    "potentialRevenueStreams",
    "marketingStrategy",
    "swotAnalysis",
    "overallViabilityScore",
    "viabilityJustification"
  ]
};

export const validateBusinessIdea = async (idea: Idea): Promise<AnalysisReport> => {
  const prompt = `
    You are an expert business analyst and startup consultant named "IdeaSpark AI", specializing in SaaS and tech startups.
    A user has provided a business idea. Your task is to provide a comprehensive validation report in a structured JSON format.
    Analyze the idea with a strong focus on market demand and commercial viability.
    - Core Idea: "${idea.coreIdea}"
    - Target Audience: "${idea.targetAudience}"
    - Unique Selling Proposition: "${idea.usp}"

    Your analysis should include:
    - A realistic assessment of the market size (mentioning TAM/SAM/SOM if applicable).
    - A deep dive into the target audience's pain points and whether this idea truly solves a critical problem.
    - A sharp competitor analysis, identifying gaps in the market.
    - Actionable revenue streams and go-to-market strategies.
    - A critical SWOT analysis.
    - An honest, data-driven (even if simulated) viability score and justification.

    Generate the report based on the provided schema. Be critical, insightful, and provide the kind of advice that a paying customer would find valuable.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
        temperature: 0.7,
      },
    });

    const jsonText = response.text.trim();
    const report: AnalysisReport = JSON.parse(jsonText);
    return report;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get a valid response from the AI model.");
  }
};