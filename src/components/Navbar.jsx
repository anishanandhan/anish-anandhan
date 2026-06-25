import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to make navbar solid/transparent
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Expertise', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-[#ff2a2a] py-4'
          : isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100 py-4 text-black'
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#home" className={`text-2xl md:text-3xl font-black tracking-tight hover:scale-105 transition-transform duration-300 ${isScrolled && !isOpen ? 'text-black' : 'text-white'}`}>
            ANISH<span className="text-[#ff2a2a]">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`font-medium text-sm lg:text-base relative group transition-colors duration-300 ${
                isScrolled && !isOpen ? 'text-gray-800 hover:text-black' : 'text-white/80 hover:text-white'
              }`}
            >
              {link}
              {/* Smooth hover underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm ${
              isScrolled && !isOpen
                ? 'bg-black text-white hover:bg-gray-800 shadow-md'
                : 'bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-md'
            }`}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className={`focus:outline-none p-2 hover:scale-110 transition-transform ${isScrolled && !isOpen ? 'text-black' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[#ff2a2a] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 pb-2">
             <a
               href="#contact"
               onClick={() => setIsOpen(false)}
               className="inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
