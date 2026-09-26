import React from 'react';
import stackImage from '../assets/about/image.png';

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
        <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
          <rect width="48" height="48" rx="10" fill="#00C3FF" />
          <path d="M24 10L12 16V24C12 31.5 17.1 38.3 24 40C30.9 38.3 36 31.5 36 24V16L24 10Z" fill="#0B192C" />
          <circle cx="24" cy="24" r="5" fill="#00C3FF" />
          <path d="M24 15V19M24 29V33M15 24H19M29 24H33" stroke="#00C3FF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Rapid7',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
          <rect width="48" height="48" rx="10" fill="#FF5B00" />
          <path d="M14 12H34L26 24H34L18 36L22 26H14L14 12Z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: 'Ghidra',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
          <path fill="#E53935" d="M24 4L6 14v20l18 10 18-10V14L24 4z"/>
          <path fill="#fff" d="M24 8l-14 8v16l14 8 14-8V16L24 8zm0 4l10 5.7v3.8L24 27l-10-5.5v-3.8L24 12zm-8 9.3L24 26l8-4.7v4L24 30l-8-4.7v-4z"/>
          <text x="24" y="42" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold" fontFamily="monospace">NSA</text>
        </svg>
      ),
    },
    {
      name: 'AWS',
      icon: (
        <svg viewBox="0 0 128 128" className="w-10 h-10 md:w-12 md:h-12">
          <path fill="#FF9900" d="M42.1 68.3c0 1.2-.5 1.7-1.7 1.7h-3.4c-1 0-1.5-.4-1.7-1.3l-6.2-22.3c-.3-.9-.8-1.3-1.7-1.3h-4.3c-.9 0-1.4.4-1.7 1.3L17 68.7c-.2.9-.7 1.3-1.7 1.3h-3.4c-1.2 0-1.7-.5-1.7-1.7V42.1c0-1.2.5-1.7 1.7-1.7h4.8c1.2 0 1.7.5 1.7 1.7v18.7l5.2-18.7c.3-.9.8-1.3 1.7-1.3h4.6c.9 0 1.4.4 1.7 1.3l5.2 18.7V42.1c0-1.2.5-1.7 1.7-1.7h4.8c1.2 0 1.7.5 1.7 1.7v26.2zm21.4 1.7h-5.2c-1.2 0-1.7-.5-1.7-1.7v-2.1c-1.8 2.5-4.5 4.1-8.1 4.1-5.7 0-9.6-3.8-9.6-9.2 0-5.8 4.3-9.3 11.7-9.8l5.4-.4v-1.7c0-2.6-1.5-3.9-4.5-3.9-2.7 0-5.3 1.1-7.4 3-.8.7-1.5.7-2.2 0l-2.4-2.4c-.7-.7-.7-1.4 0-2.2 3.1-2.9 7.4-4.5 12.4-4.5 6.9 0 10.7 3.5 10.7 10.1v19c-.1 1.2-.6 1.7-1.8 1.7zm-6.8-11.7l-3.8.3c-4.1.3-6.2 2-6.2 5 0 2.2 1.5 3.7 3.9 3.7 3.4 0 6.1-2.3 6.1-5.8v-3.2zm38.8 6.4c-1.8 3.5-5.3 5.6-9.9 5.6-6.1 0-10.4-4.5-10.4-11 0-6.6 4.4-11.1 10.4-11.1 4.5 0 7.9 2 9.8 5.4.7.9.6 1.6-.2 2.2l-2.5 2.1c-.7.6-1.4.5-2-.2-1.2-1.7-2.9-2.6-5.1-2.6-3.3 0-5.6 2.3-5.6 5.9 0 3.5 2.3 5.8 5.6 5.8 2.2 0 4-1 5.2-2.8.6-.8 1.3-.8 2 0l2.5 2.2c.8.6.9 1.4.2 2.3z" />
          <path fill="#FF9900" d="M106.6 90.7c-13.6 10-33.1 15.3-50.4 15.3-24.3 0-46.3-9.3-62.9-24.8-1.3-1.2-.3-2.9 1.3-1.9 17.8 10.7 39.7 17.1 62.4 17.1 15.5 0 32.7-3.8 48.2-11.7 2.4-1.3 4.5 1.5 1.4 4z" />
          <path fill="#FF9900" d="M110.8 85.3c-.6-1.8-3.7-1.3-5.3-.9-1.6.4-5.3 1.6-4.7 3.4.6 1.8 4.7 1.3 6.3.9 1.6-.4 4.3-1.6 3.7-3.4z" />
        </svg>
      ),
    },
    {
      name: 'Docker',
      icon: (
        <svg viewBox="0 0 128 128" className="w-10 h-10 md:w-12 md:h-12">
          <path fill="#2496ED" d="M121.7 50.8c-2.8-.7-8.3-.3-11.9 1.7-1.1.6-2.2 1.4-3.1 2.3-2.8-2-6.2-3.2-10-3.2-6.5 0-12.2 3.6-15.1 8.9h-8.8V47.2h10.9v-9.5H72.8v9.5h-9.5v-9.5H53.8v9.5h-9.5v-9.5H34.8v9.5h-9.5V37.7H15.8v9.5H6.3v9.5H0v17.4c0 14.5 11.8 26.3 26.3 26.3h71.8c16.5 0 29.9-13.4 29.9-29.9v-7c0-.9-.7-1.8-1.5-2.2-1.4-.7-3.3-1.1-4.8-1.3z" />
        </svg>
      ),
    },
    {
      name: 'Wireshark',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
          <rect width="48" height="48" rx="10" fill="#1679A7" />
          <path d="M12 36C18 36 21 28 24 16C27 28 30 36 36 36C28 36 24 24 24 24C24 24 20 36 12 36Z" fill="#FFFFFF" />
          <path d="M16 28C20 28 22 23 24 18C26 23 28 28 32 28C27 28 24 20 24 20C24 20 21 28 16 28Z" fill="#00C3FF" />
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
