
import React from 'react';
import type { AnalysisReport, SWOT } from '../types';

const ViabilityScore: React.FC<{ score: number }> = ({ score }) => {
  const getColor = (s: number) => {
    if (s >= 8) return 'text-green-400';
    if (s >= 5) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getBgColor = (s: number) => {
    if (s >= 8) return 'bg-green-500/10';
    if (s >= 5) return 'bg-yellow-500/10';
    return 'bg-red-500/10';
  };

  return (
    <div className={`p-4 rounded-lg flex flex-col items-center justify-center ${getBgColor(score)}`}>
      <span className="text-sm font-medium text-text-secondary">Viability Score</span>
      <span className={`text-5xl font-bold ${getColor(score)}`}>{score}<span className="text-2xl">/10</span></span>
    </div>
  );
};

const SWOTCard: React.FC<{ title: string; items: string[]; color: string }> = ({ title, items, color }) => (
  <div className={`p-4 rounded-lg bg-${color}-500/10`}>
    <h4 className={`font-bold text-lg text-${color}-400 mb-2`}>{title}</h4>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <svg className={`w-4 h-4 mr-2 mt-1 flex-shrink-0 text-${color}-400`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
          <span className="text-text-secondary text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const AnalysisSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-base-200 p-6 rounded-lg border border-base-300">
    <h3 className="text-xl font-bold text-brand-primary mb-4">{title}</h3>
    <div className="text-text-secondary space-y-4 text-sm leading-relaxed">{children}</div>
  </div>
);

const AnalysisDisplay: React.FC<{ report: AnalysisReport }> = ({ report }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-base-200 p-6 rounded-lg border border-base-300">
        <h2 className="text-3xl font-extrabold text-center text-text-primary mb-2">"{report.ideaName}"</h2>
        <p className="text-center text-text-secondary">AI Validation Report</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-1">
            <ViabilityScore score={report.overallViabilityScore} />
        </div>
        <div className="p-4 rounded-lg bg-base-200 flex items-center justify-center md:col-span-1 border border-base-300">
            <p className="text-text-secondary text-center italic">"{report.viabilityJustification}"</p>
        </div>
      </div>

      <AnalysisSection title="Market Analysis">
        <p>{report.marketAnalysis}</p>
      </AnalysisSection>

      <AnalysisSection title="Competitor Analysis">
        <p>{report.competitorAnalysis}</p>
      </AnalysisSection>

      <AnalysisSection title="Target Audience Profile">
        <p>{report.targetAudienceProfile}</p>
      </AnalysisSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalysisSection title="Potential Revenue Streams">
          <ul className="list-disc list-inside space-y-2">
            {report.potentialRevenueStreams.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </AnalysisSection>
        <AnalysisSection title="Marketing Strategy">
          <ul className="list-disc list-inside space-y-2">
            {report.marketingStrategy.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </AnalysisSection>
      </div>

      <div>
        <h3 className="text-xl font-bold text-brand-primary mb-4 text-center">SWOT Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SWOTCard title="Strengths" items={report.swotAnalysis.strengths} color="green" />
          <SWOTCard title="Weaknesses" items={report.swotAnalysis.weaknesses} color="yellow" />
          <SWOTCard title="Opportunities" items={report.swotAnalysis.opportunities} color="blue" />
          <SWOTCard title="Threats" items={report.swotAnalysis.threats} color="red" />
        </div>
      </div>

    </div>
  );
};

export default AnalysisDisplay;
