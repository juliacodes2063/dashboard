import React from 'react';

export const SwitchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5.83333 3.33334V16.6667M5.83333 16.6667L2.5 13.3333M5.83333 16.6667L9.16667 13.3333M14.1667 16.6667V3.33334M14.1667 3.33334L10.8333 6.66668M14.1667 3.33334L17.5 6.66668"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
