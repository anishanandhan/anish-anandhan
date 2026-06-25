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
      name: 'FastAPI',
      icon: (
        <svg viewBox="0 0 128 128" className="w-10 h-10 md:w-12 md:h-12">
          <path fill="#05998B" d="M64 0C28.654 0 0 28.654 0 64s28.654 64 64 64 64-28.654 64-64S99.346 0 64 0zm0 11c29.225 0 53 23.775 53 53s-23.775 53-53 53S11 93.225 11 64s23.775-53 53-53z"/>
          <path fill="#05998B" d="M64 16.5c-26.234 0-47.5 21.266-47.5 47.5s21.266 47.5 47.5 47.5 47.5-21.266 47.5-47.5S90.234 16.5 64 16.5zm-3 23l23 0-10 17h13L59 91l6-22H52z"/>
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      icon: (
        <svg viewBox="0 0 128 128" className="w-10 h-10 md:w-12 md:h-12">
          <path fill="#439934" fillRule="evenodd" d="M90.491 57.282c-.37-4.79-1.896-9.244-4.58-13.3a51.3 51.3 0 00-5.49-6.645c-5.18-5.41-8.66-11.4-10.94-18.29-.42-1.24-.72-2.52-1.1-3.78l-.1-.35c-.71 1.77-1.24 3.45-2.01 5.01a46.12 46.12 0 01-8.34 12.18c-5.2 5.45-9.55 11.35-11.78 18.72-1.3 4.3-1.77 8.72-1.15 13.22.95 6.86 3.87 12.8 8.73 17.77a30.6 30.6 0 009.79 7.07c.39.18.56.1.67-.29.45-1.67.95-3.33 1.38-5.01.13-.52.36-.64.83-.39 3.36 1.84 6.92 3.07 10.71 3.6 2.61.37 5.22.42 7.83.09 8.63-1.1 15.41-5.13 20.12-12.42 3.3-5.1 4.76-10.84 4.82-16.96.03-3.13-.33-6.2-1.22-9.2-1.57-5.27-4.38-9.72-8.41-13.49-.85-.8-1.77-1.52-2.74-2.36z"/>
          <path fill="#45A538" fillRule="evenodd" d="M65.986 128c-.07-1.15-.21-2.23-.3-3.32-.16-1.85-.32-3.7-.43-5.56a3.37 3.37 0 00-.66-1.78A24.6 24.6 0 0161 112.65c-.42-.56-.82-1.14-1.3-1.8.48-.05.76-.11 1.04-.11 2.74-.04 4.63 1.37 6.14 3.41a8.16 8.16 0 011.35 3.7c.27 2.52.38 5.05.57 7.58.02.29.03.58.05.87l-.03.06c-.62.67-1.33 1.02-2.25 1.22-.81.17-1.56.37-2.34.55l1.73-.13z"/>
          <path fill="#46A037" fillRule="evenodd" d="M65.986 128l1.73-.13c-.05-.81-.16-1.62-.15-2.43.04-3.32.09-6.64.15-9.97.01-.52-.07-1.13.45-1.52l-.73-.04c.23 2.5.38 5.05.57 7.58.02.29.03.58.05.87l-.03.06c-.62.67-1.33 1.02-2.25 1.22l.21.36z"/>
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
      name: 'TensorFlow',
      icon: (
        <svg viewBox="0 0 128 128" className="w-10 h-10 md:w-12 md:h-12">
          <path fill="#FF6F00" d="M64 4.7L12.5 34v60L64 123.3l51.5-29.3V34L64 4.7zm0 10L101.7 34v14.4L64 67.8 26.3 48.4V34L64 14.7z"/>
          <path fill="#FF6F00" d="M64 0L0 36.5V91L64 128l64-37V36.5L64 0zm0 9.5l55.5 31.6v53L64 125.8 8.5 94.1v-53L64 9.5z"/>
          <path fill="#FF6F00" d="M63.5 30L32 48v36l31.5 18L95 84V48L63.5 30zm0 8l23 13v26l-23 13-23-13V51l23-13z"/>
        </svg>
      ),
    },
    {
      name: 'Linux',
      icon: (
        <svg viewBox="0 0 128 128" className="w-10 h-10 md:w-12 md:h-12">
          <path fill="#FCC624" d="M64 6.2C43.5 6.2 28 26 28 44.6c0 10.8 3.4 18.2 7.6 27.4 2.9 6.4 6.2 13.6 8.4 23.2.3 1.2 1.4 2 2.6 2h34.8c1.2 0 2.3-.8 2.6-2 2.2-9.6 5.5-16.8 8.4-23.2 4.2-9.2 7.6-16.6 7.6-27.4C100 26 84.5 6.2 64 6.2z"/>
          <circle cx="52" cy="38" r="6" fill="#333"/>
          <circle cx="76" cy="38" r="6" fill="#333"/>
          <path fill="#333" d="M50 56c0 0 6 10 14 10s14-10 14-10" strokeWidth="3" stroke="#333" strokeLinecap="round" fill="none"/>
          <path fill="#333" d="M36 100c-4 2-8 6-10 10s-2 10 4 12c6 2 14-2 16-6M92 100c4 2 8 6 10 10s2 10-4 12c-6 2-14-2-16-6"/>
        </svg>
      ),
    },
    {
      name: 'LangChain',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
          <circle cx="24" cy="24" r="22" fill="#1C3C3C" stroke="#2DD4BF" strokeWidth="2"/>
          <path d="M16 14h4v4h-4zM28 14h4v4h-4zM16 30h4v4h-4zM28 30h4v4h-4z" fill="#2DD4BF"/>
          <path d="M20 16h8M18 18v12M30 18v12M20 32h8" stroke="#2DD4BF" strokeWidth="1.5" fill="none"/>
          <circle cx="24" cy="24" r="3" fill="#2DD4BF"/>
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
            Hi, my name is <span className="text-black font-black uppercase tracking-wide">ANISH ANANDHAN</span>, a final-year Integrated M.Tech Software Engineering student at VIT Chennai with a deep focus on Cybersecurity, Pen-testing, Threat modeling, and Secure Software Development.
          </p>

          <p className="text-base md:text-lg text-red-100/90 leading-relaxed max-w-3xl mb-8 font-medium">
            I specialize in identifying vulnerabilities, designing secure network infrastructures, and building secure-by-design web applications. From deploying distributed honeypots and conducting penetration tests to developing AI-powered security analysis tools, I love solving complex security challenges and implementing robust defense mechanisms.
          </p>

          <p className="text-base md:text-lg text-red-100/90 leading-relaxed max-w-3xl mb-12 font-medium">
            Beyond security engineering, I actively participate in hackathons, lead student initiatives, collaborate with diverse teams, and continuously expand my technical expertise through hands-on projects and research.
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
