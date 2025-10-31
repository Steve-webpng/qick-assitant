import React from 'react';

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.93 2.55a2 2 0 0 0-1.86 0L6.53 4.09a2 2 0 0 1-2.4 0L2.58 2.55a2 2 0 0 0-1.86 0L0 4.09V11h24V4.09l-.72-1.54a2 2 0 0 0-1.86 0L19.87 4.09a2 2 0 0 1-2.4 0l-1.54-1.54a2 2 0 0 0-1.86 0l-1.54 1.54a2 2 0 0 1-2.4 0zM22 22l-1.5-1.5M19 19l-1.5-1.5M2 22l1.5-1.5M5 19l1.5-1.5M12 14v8" />
  </svg>
);

export default SparklesIcon;
