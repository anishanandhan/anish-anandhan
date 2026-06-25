import React, { useState } from 'react';

const credentialsList = [
  {
    number: "23",
    category: "JS CORE",
    title: "JavaScript Essentials 1",
    issuer: "Cisco NetAcad",
    issueDate: "Jan 2024",
    credentialId: "cisco-js1-9872",
    verifyUrl: "https://www.netacad.com/"
  },
  {
    number: "24",
    category: "JS CORE",
    title: "JavaScript Essentials 2",
    issuer: "Cisco NetAcad",
    issueDate: "Feb 2024",
    credentialId: "cisco-js2-1082",
    verifyUrl: "https://www.netacad.com/"
  },
  {
    number: "01",
    category: "CLOUD • AI",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "Dec 2025",
    credentialId: "aws-ai-prac-4720",
    verifyUrl: "https://aws.amazon.com/"
  },
  {
    number: "02",
    category: "CLOUD • AI",
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS Academy",
    issueDate: "Nov 2025",
    credentialId: "aws-acad-found-1982",
    verifyUrl: "https://aws.amazon.com/training/awsacademy/"
  },
  {
    number: "03",
    category: "DATA ANALYTICS",
    title: "Power BI Data Analyst Associate",
    issuer: "Microsoft (NASSCOM)",
    issueDate: "Aug 2024",
    credentialId: "ms-pbi-da-8271",
    verifyUrl: "https://learn.microsoft.com/"
  },
  {
    number: "04",
    category: "CYBERSECURITY",
    title: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    issueDate: "Oct 2024",
    credentialId: "isc2-cc-9021",
    verifyUrl: "https://www.isc2.org/"
  },
  {
    number: "05",
    category: "CYBERSECURITY",
    title: "OWASP Top 10",
    issuer: "TryHackMe",
    issueDate: "May 2024",
    credentialId: "thm-owasp10-8721",
    verifyUrl: "https://tryhackme.com/"
  }
];

const Credentials = () => {
  const [glowingCardId, setGlowingCardId] = useState(null);

  const toggleGlow = (credentialId) => {
    setGlowingCardId(prev => prev === credentialId ? null : credentialId);
  };

  const renderCard = (cred, uniqueKey) => {
    const isGlowing = glowingCardId === cred.credentialId;
    return (
      <div
        key={uniqueKey}
        onClick={() => toggleGlow(cred.credentialId)}
        className={`w-[290px] sm:w-[330px] h-[225px] shrink-0 bg-[#f4f4f4] border ${
          isGlowing 
            ? 'border-[#ff2a2a] shadow-[0_0_25px_rgba(255,42,42,0.65)] scale-[1.01] ring-2 ring-[#ff2a2a]/20' 
            : 'border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
        } rounded-[2rem] p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 relative select-none`}
      >
        {/* Top Row: Hole Punch, Category, Number */}
        <div className="flex justify-between items-start relative w-full">
          {/* Hole Punch Representation */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-gray-300 rounded-full border border-gray-400/40 shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]"></div>
          
          <span className="text-[10px] text-[#ff2a2a] font-black tracking-widest uppercase font-mono mt-2">
            {cred.category}
          </span>
          <span className="font-serif italic text-gray-300 text-2xl font-black">
            {cred.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[17px] font-black text-gray-900 tracking-tight leading-snug pr-4 mt-2">
          {cred.title}
        </h3>

        {/* Middle details: Issuer, Date, Cred ID */}
        <div className="text-[11px] font-mono text-gray-500 flex flex-col gap-1.5 mt-2">
          <div>
            <span className="opacity-60">ISSUED BY:</span> <span className="font-bold text-gray-700">{cred.issuer}</span>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <span className="opacity-60">DATE:</span> <span className="text-gray-700">{cred.issueDate}</span>
            </div>
            <div>
              <span className="opacity-60">ID:</span> <span className="text-gray-700">{cred.credentialId}</span>
            </div>
          </div>
        </div>

        {/* Bottom Row: Info */}
        <div className="mt-4 flex justify-end items-center w-full">
          <span className="text-[9px] text-gray-400 font-mono tracking-tighter uppercase">
            Click to {isGlowing ? 'dim' : 'glow'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="certifications" 
      className="bg-white pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-xs text-gray-600 font-bold mb-6 shadow-sm bg-white uppercase tracking-widest font-mono">
            System Badges
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight font-display">
            Professional Credentials
          </h2>
        </div>

        {/* Credentials Scrolling Track - Infinite Marquee */}
        <div className="w-full overflow-hidden relative">
          {/* Side Gradients for fading effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-4">
            {/* First Set of Cards */}
            {credentialsList.map((cred, index) => renderCard(cred, `orig-${index}`))}
            {/* Duplicate Set of Cards for Infinite Scroll Loop */}
            {credentialsList.map((cred, index) => renderCard(cred, `dup-${index}`))}
          </div>
        </div>

        {/* Footer Tagline */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <span className="font-['Caveat',cursive] text-3xl text-gray-600 block rotate-1">
            Certificate Credentials
          </span>
        </div>

      </div>
    </section>
  );
};

export default React.memo(Credentials);
