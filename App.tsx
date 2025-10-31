
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import IdeaForm from './components/IdeaForm';
import AnalysisDisplay from './components/AnalysisDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import { validateBusinessIdea } from './services/geminiService';
import type { AnalysisReport, Idea } from './types';

const App: React.FC = () => {
  const [analysisReport, setAnalysisReport] = useState<AnalysisReport | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const reportId = urlParams.get('reportId');
    if (reportId) {
      try {
        const storedReport = localStorage.getItem(`report_${reportId}`);
        if (storedReport) {
          setAnalysisReport(JSON.parse(storedReport));
        }
      } catch (e) {
        console.error("Failed to parse stored report:", e);
        setError("Could not load the shared analysis report. It might be invalid or expired.");
      }
    }
  }, []);

  const handleAnalysis = useCallback(async (idea: Idea) => {
    setIsLoading(true);
    setError(null);
    setAnalysisReport(null);

    try {
      const report = await validateBusinessIdea(idea);
      const reportId = Date.now().toString(36) + Math.random().toString(36).substr(2);
      localStorage.setItem(`report_${reportId}`, JSON.stringify(report));
      window.history.pushState({ reportId }, `Analysis for ${report.ideaName}`, `?reportId=${reportId}`);
      setAnalysisReport(report);
    } catch (err) {
      console.error(err);
      // FIX: Updated error message to be more generic and not mention the API key.
      setError('An error occurred while analyzing your idea. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleReset = useCallback(() => {
    setAnalysisReport(null);
    setError(null);
    window.history.pushState({}, document.title, window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen bg-base-100 text-text-primary font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <div className="animate-slide-in">
            <IdeaForm onAnalyze={handleAnalysis} isLoading={isLoading} hasResult={!!analysisReport} onReset={handleReset}/>
          </div>
          <div className="mt-8 lg:mt-0">
            {isLoading && <LoadingSpinner />}
            {error && (
              <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg animate-fade-in" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            {analysisReport && !isLoading && (
              <AnalysisDisplay report={analysisReport} />
            )}
            {!analysisReport && !isLoading && !error && (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] bg-base-200 rounded-lg border-2 border-dashed border-base-300 p-8 text-center animate-fade-in">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-base-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <h2 className="text-2xl font-bold text-text-primary mb-2">Your Analysis Awaits</h2>
                    <p className="text-text-secondary">Fill out the form to have your business idea validated by our powerful AI engine.</p>
                </div>
            )}
          </div>
        </div>
      </main>
      <footer className="text-center py-6 text-sm text-base-300">
        <p>&copy; {new Date().getFullYear()} IdeaSpark. Powered by Nkumba University.</p>
      </footer>
    </div>
  );
};

export default App;
