
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] bg-base-200 rounded-lg border-2 border-dashed border-base-300 p-8 text-center animate-fade-in">
      <svg
        className="animate-spin -ml-1 mr-3 h-10 w-10 text-brand-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <h2 className="mt-4 text-xl font-semibold text-text-primary">Analyzing Your Idea...</h2>
      <p className="mt-2 text-text-secondary">Our AI is crunching the numbers and scanning the market. This might take a moment.</p>
    </div>
  );
};

export default LoadingSpinner;
