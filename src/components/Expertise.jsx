import React from 'react';

const expertiseCards = [
  {
    number: "01",
    title: "Cybersecurity Research",
    text: "Reverse engineering vulnerable kernel drivers using Ghidra, building BYOVD threat intelligence pipelines, and researching offensive security techniques at IIT Madras CyStar under Prof. Chester Rebeiro.",
    icon: (
      <svg className="w-10 h-10 text-[#ff2a2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5v3m0 3h.008v.008H12v-.008z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "AI Systems & Agents",
    text: "Building multi-agent platforms, GenAI security tools, and LLM-powered pipelines. Projects span APKShield (8-layer malware analysis), SURGE (sports intelligence), and RobIQ-AI (candidate ranking).",
    icon: (
      <svg className="w-10 h-10 text-[#ff2a2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Machine Learning & Research",
    text: "Published IEEE researcher working on quantum-classical hybrid ML (QuSAR), metric learning for network traffic (FlowEmbed), and anomaly detection — with real datasets, real papers, and real results.",
    icon: (
      <svg className="w-10 h-10 text-[#ff2a2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Startup Building",
    text: "Co-founder of Seryth (AI fragrance), CFO of Envirobuilders (eco-construction), and Millennium Fellowship Director. I build ventures, not just code.",
    icon: (
      <svg className="w-10 h-10 text-[#ff2a2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a14.98 14.98 0 00-6.16 12.12c.007.03.014.06.022.09m12.1-6.25a14.96 14.96 0 01-9.62-5.46m0 0a14.96 14.96 0 015.46 9.62m-5.46-9.62l-2.06-2.06A1.13 1.13 0 003.35 4.3l2.06 2.06m0 0L3.35 4.3M9 14a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    )
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="bg-[#0a0a0a] text-white pt-28 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff2a2a]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl" data-aos="fade-up">
            <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs text-white/70 font-semibold mb-6 shadow-sm bg-white/5 uppercase tracking-widest font-mono">
              Expertise
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight font-display">
              Researching, Building, and Shipping at the Edge of AI & Security
            </h2>
          </div>
          <p className="text-white/60 text-base md:text-lg max-w-sm font-medium leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            From kernel-level driver research at IIT Madras to multi-agent AI systems shipped at national hackathons — I work where security meets intelligence.
          </p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseCards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white/[0.02] border border-white/[0.08] backdrop-blur-md rounded-[2rem] p-8 hover:border-[#ff2a2a]/50 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between min-h-[300px] shadow-xl hover:shadow-[0_20px_50px_rgba(255,42,42,0.12)] hover:-translate-y-2"
            >
              <div>
                {/* Icon and Card Number */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#ff2a2a]/10 transition-colors duration-500">
                    {card.icon}
                  </div>
                  <span className="font-serif italic text-white/20 text-3xl font-black">
                    {card.number}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {card.title}
                </h3>
                
                {/* Card Text */}
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Taglines */}
        <div className="mt-20 flex flex-col items-center justify-center gap-2" data-aos="fade-in" data-aos-delay="400">
          <p className="text-white/40 font-mono text-xs uppercase tracking-widest">
            Research that ships. Code that matters.
          </p>
          <span className="font-['Caveat',cursive] text-4xl text-[#ff2a2a] rotate-1 mt-2 block animate-pulse">
            From kernel space to startup space.
          </span>
        </div>

      </div>
    </section>
  );
};

export default Expertise;
