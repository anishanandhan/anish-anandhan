import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100000] focus:bg-[#ff2a2a] focus:text-white focus:px-6 focus:py-3 focus:rounded-full focus:font-bold focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
