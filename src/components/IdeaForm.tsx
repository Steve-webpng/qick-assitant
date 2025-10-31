import React, { useState } from 'react';
import type { Idea } from '../types';
import LightbulbIcon from './icons/LightbulbIcon';

interface IdeaFormProps {
  onAnalyze: (idea: Idea) => void;
  isLoading: boolean;
  hasResult: boolean;
  onReset: () => void;
}

const IdeaForm: React.FC<IdeaFormProps> = ({ onAnalyze, isLoading, hasResult, onReset }) => {
  const [coreIdea, setCoreIdea] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [usp, setUsp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (coreIdea && targetAudience && usp) {
      onAnalyze({ coreIdea, targetAudience, usp });
    }
  };

  const handleClearAndReset = () => {
    setCoreIdea('');
    setTargetAudience('');
    setUsp('');
    onReset();
  };
  
  const isFormEmpty = !coreIdea && !targetAudience && !usp;

  return (
    <div className="bg-base-200 p-6 md:p-8 rounded-lg shadow-lg border border-base-300 h-full">
      <div className="flex items-center mb-6">
        <LightbulbIcon className="w-8 h-8 text-brand-primary mr-3" />
        <h2 className="text-3xl font-bold">Describe Your Idea</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="coreIdea" className="block text-sm font-medium text-text-secondary mb-2">
            What is your core business idea?
          </label>
          <textarea
            id="coreIdea"
            rows={4}
            className="w-full bg-base-300 text-text-primary rounded-md border-base-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200 p-3"
            placeholder="e.g., A subscription box for eco-friendly dog toys"
            value={coreIdea}
            onChange={(e) => setCoreIdea(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="targetAudience" className="block text-sm font-medium text-text-secondary mb-2">
            Who is your target audience?
          </label>
          <textarea
            id="targetAudience"
            rows={3}
            className="w-full bg-base-300 text-text-primary rounded-md border-base-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200 p-3"
            placeholder="e.g., Millennial pet owners in urban areas who value sustainability"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="usp" className="block text-sm font-medium text-text-secondary mb-2">
            What is your Unique Selling Proposition (USP)?
          </label>
          <textarea
            id="usp"
            rows={3}
            className="w-full bg-base-300 text-text-primary rounded-md border-base-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200 p-3"
            placeholder="e.g., All toys are made from 100% recycled materials and a portion of profits goes to animal shelters"
            value={usp}
            onChange={(e) => setUsp(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          {hasResult || !isFormEmpty ? (
            <button
                type="button"
                onClick={handleClearAndReset}
                className="w-full sm:w-auto flex-grow justify-center text-center py-3 px-6 border border-base-300 rounded-md shadow-sm text-sm font-medium text-text-secondary bg-base-200 hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100 focus:ring-brand-secondary transition duration-200"
            >
                Start Over
            </button>
          ) : null}
          <button
            type="submit"
            disabled={isLoading || !coreIdea || !targetAudience || !usp}
            className="w-full sm:w-auto flex-grow justify-center inline-flex items-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100 focus:ring-brand-secondary disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
          >
            {isLoading ? 'Analyzing...' : 'Spark Analysis'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default IdeaForm;
