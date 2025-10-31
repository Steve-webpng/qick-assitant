import React from 'react';
import SparklesIcon from './icons/SparklesIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-base-200/50 backdrop-blur-sm sticky top-0 z-10 border-b border-base-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <SparklesIcon className="w-8 h-8 text-brand-primary" />
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            IdeaSpark
          </h1>
        </div>
        <p className="hidden md:block text-text-secondary">
          Powered by Nkumba University
        </p>
      </div>
    </header>
  );
};

export default Header;
