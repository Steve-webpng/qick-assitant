
import React from 'react';

const LightbulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 7c0-2.2-1.8-4-4-4S9.8 3.3 9 5.5c-.1.5-.2 1-.2 1.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 18v-2" />
    <path d="M12.5 10.5c0-1.2-.7-2.2-1.8-2.8" />
    <path d="M8.5 13.5c0 .7.3 1.3.7 1.8" />
    <path d="M7 12c0-1.3.4-2.5 1.2-3.5" />
    <path d="M12 6.5A2.5 2.5 0 0 1 14.5 9c0 1-.5 2-1.3 2.8" />
    <path d="M12 6.5A2.5 2.5 0 0 0 9.5 9c0 .7.2 1.3.7 1.8" />
    <path d="M11.8 16a2 2 0 0 0-3.6 0" />
  </svg>
);

export default LightbulbIcon;
