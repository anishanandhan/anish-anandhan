import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>AI Systems & Agents</p>
          <p>Cybersecurity Research</p>
          <p>Threat Intelligence</p>
          <p>Penetration Testing</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>Software Engineering Student & Builder</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Projects</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Available for Opportunities</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text - Branding */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-display font-black tracking-tighter lowercase select-none text-white w-full text-center">
          anish
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Anish Anandhan 
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:anishanandhan13@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">anishanandhan13@gmail.com</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="/privacy-policy.html" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
