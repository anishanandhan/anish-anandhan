import React from 'react';
import stackImage from '../assets/about/image.png';
import armisImg from '../assets/tools/armis.png';
import ghidraImg from '../assets/tools/ghidra.png';

const About = () => {

  const techStack = [
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 128 128" className="w-10 h-10 md:w-12 md:h-12">
          <linearGradient id="py-a" x1="70.252" x2="170.659" y1="1237.476" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/></linearGradient>
          <linearGradient id="py-b" x1="209.474" x2="173.62" y1="1098.811" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/></linearGradient>
          <path fill="url(#py-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
          <path fill="url(#py-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
        </svg>
      ),
    },
    {
      name: 'Armis',
      icon: (
        <img src={armisImg} alt="Armis" className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-xl" />
      ),
    },
    {
      name: 'Rapid7',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
          <rect width="48" height="48" rx="12" fill="#F05A28" />
          <path d="M12 14 H35 L27 24 H34 L17 38 L21 26 H13 L12 14 Z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: 'Ghidra',
      icon: (
        <img src={ghidraImg} alt="Ghidra" className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-xl" />
      ),
    },
    {
      name: 'AWS',
      icon: (
        <svg viewBox="0 0 64 48" className="w-10 h-10 md:w-12 md:h-12">
          <rect width="64" height="48" rx="12" fill="#232F3E" />
          <text x="32" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">aws</text>
          <path d="M 16 31 Q 32 40 46 31" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" />
          <path d="M 44 28 L 48 32 L 42 34 Z" fill="#FF9900" />
        </svg>
      ),
    },
    {
      name: 'Docker',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-12 md:h-12" fill="#2496ED">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
        </svg>
      ),
    },
    {
      name: 'Wireshark',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-12 md:h-12" fill="#1679A7">
          <path d="m2.95 0c-1.62 0-2.95 1.32-2.95 2.95v18.1c0 1.63 1.32 2.95 2.95 2.95h18.1c1.62 0 2.95-1.32 2.95-2.95v-18.1c-.00024-1.63-1.32-2.95-2.95-2.95zm0 1.09h18.1c1.04 0 1.85.818 1.85 1.86v14h-5.27c-.335-.796-2.57-6.47.283-10.9a.516.517 0 0 0-.443-.794c-5.24.0827-8.2 3.19-9.74 6.21-1.35 2.64-1.63 4.91-1.69 5.53h-4.95v-14c0-1.04.817-1.86 1.85-1.86zm13.6 5.24c-2.62 5.24.248 11.4.248 11.4a.516.517 0 0 0 .469.301h5.62v3.05c0 1.04-.817 1.86-1.85 1.86h-18.1c-1.04 0-1.85-.818-1.85-1.86v-3.05h5.39a.516.517 0 0 0 .514-.477s.226-2.8 1.66-5.62c1.34-2.62 3.67-5.17 7.91-5.57z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-6xl md:text-8xl font-display font-black text-black mb-8 leading-none">Hello!</h2>
          
          <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-3xl text-white mb-8">
            Hi, my name is <span className="text-black font-black uppercase tracking-wide">ANISH ANANDHAN A L</span>, an Integrated M.Tech Software Engineering student at VIT Chennai specializing in <span className="underline decoration-black underline-offset-4 font-bold">OT/ICS Security</span>, <span className="underline decoration-black underline-offset-4 font-bold">Cyber Defense</span>, and <span className="underline decoration-black underline-offset-4 font-bold">Cloud Security</span>.
          </p>

          <p className="text-base md:text-lg text-red-100/90 leading-relaxed max-w-3xl mb-8 font-medium">
            Currently working as an <strong className="text-white">OT/ICS Security Intern at Medtronic PLC</strong>, where I support OT vulnerability management (using Armis & Rapid7), cyber defense (Incident Response & CTI), and automated IOC-driven vulnerability assessment workflows.
          </p>

          <p className="text-base md:text-lg text-red-100/90 leading-relaxed max-w-3xl mb-12 font-medium">
            Previously a <strong className="text-white">Research Intern at IIT Madras</strong> (Centre for Cybersecurity, Trust and Reliability), where I built a BYOVD exploitation analysis platform, automated Ghidra headless binary pipelines for 400+ signed drivers, and integrated BOF/C2 frameworks.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 mt-8">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                data-aos="zoom-in"
                data-aos-delay={200 + index * 100}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 group-hover:bg-white/20 group-hover:border-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {tech.icon}
                </div>
                <span className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase text-white/70 group-hover:text-white transition-colors font-mono">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Smooth wave divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 md:h-28 fill-white">
          <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-[#9b0000]/40 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-[#9b0000]/40 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
