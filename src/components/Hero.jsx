import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/download.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Autoplay blocked. User action required.", err);
      });
    }
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleMuteKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMute(e);
    }
  };

  return (
    <section id="home" role="banner" aria-label="Hero section" className="relative w-full h-screen overflow-hidden bg-black font-sans">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          aria-label="Background video showcasing cybersecurity work"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(1.25) contrast(1.05) saturate(1.1)' }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/*
          WATERMARK COVERAGE STRATEGY:

          The background video (download.mp4) contains AI-generated content watermarks
          (Gemini + Veo) in the bottom-right corner. This 2-layer approach covers them
          while maintaining design aesthetics:

          Layer 1 (z-index 4): Blur patch - Creates a frosted glass effect to obscure watermarks
          Layer 2 (z-index 5): Branded bar - Adds our own branding while covering remaining marks

          Position coordinates (bottom-right) are precisely calibrated to cover both watermarks.
          IMPORTANT: Adjust only if video source changes or watermark position shifts.

          Dimensions:
          - Blur patch: 310px × 70px
          - Branded bar: min-width 215px, auto height
          - Mute button positioned at bottom: 86px, right: 106px (mobile) / 84px, 104px (desktop)
        */}
        <div className="absolute bottom-0 right-0 z-[5] pointer-events-none flex items-center gap-3 bg-gradient-to-l from-black/95 via-black/75 to-transparent pl-16 pr-6 py-[18px] rounded-tl-3xl" style={{ minWidth: '215px' }}>
          <div className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse shrink-0"></div>
          <span className="text-white/90 text-xs font-bold tracking-[0.25em] uppercase font-mono whitespace-nowrap">ANISH • CYBERSEC</span>
        </div>

        {/* Blur patch layer - provides base coverage for watermarks */}
        <div className="absolute bottom-0 right-0 w-[310px] h-[70px] bg-black/60 backdrop-blur-xl z-[4] pointer-events-none rounded-tl-2xl"></div>
      </div>

      {/* Lighter gradient overlay - keeps video bright while ensuring text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent z-10"></div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">

        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-xl lg:max-w-[560px] w-full">
          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl lg:text-[54px] font-sans font-medium mb-4 tracking-tight leading-tight"
          >
            Hi, I'm Anish
            <br />
            <span className="font-display font-extrabold text-white text-3xl md:text-5xl lg:text-[54px] mt-1 block tracking-tighter leading-none">
              Cybersecurity Professional
            </span>
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/95 text-sm md:text-base font-medium mb-8 max-w-lg drop-shadow-md leading-relaxed"
          >
            I'm a Software Engineering student at VIT Chennai and a Cybersecurity Professional passionate about security research, penetration testing, building secure-by-design applications, and threat intelligence. I focus on ensuring modern digital experiences remain secure, resilient, and performant.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-4 w-full"
          >
            {/* Primary Button */}
            <a
              href="#projects"
              className="px-8 py-3.5 text-sm md:text-base rounded-full bg-white text-black font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              View My Work
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              className="px-8 py-3.5 text-sm md:text-base rounded-full bg-transparent border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-row flex-wrap items-center gap-3.5 mt-8 w-full"
          >
            {/* GitHub */}
            <a
              href="https://github.com/anishanandhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/25 bg-black/20 text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anishanan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/25 bg-black/20 text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:anishanandhan13@gmail.com"
              aria-label="Send Email"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/25 bg-black/20 text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>

            {/* Call */}
            <a
              href="tel:+918870676412"
              aria-label="Call Phone Number"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/25 bg-black/20 text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25a2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.145-.44.02-.927.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/anish.anan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/25 bg-black/20 text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8870676412"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/25 bg-black/20 text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.61-1.01-5.063-2.85-6.905C16.643 2.103 14.187.059 11.95.059c-5.432 0-9.855 4.37-9.858 9.753-.002 1.759.485 3.479 1.408 4.965l-.988 3.6 3.69-.968zm11.328-5.32c-.3-.15-1.771-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.776.975-.95 1.175-.175.2-.35.225-.65.075-3.04-1.517-4.14-2.22-5.789-5.05-.175-.3.175-.275.5-.925.075-.15.038-.282-.019-.397-.056-.113-.475-1.15-.65-1.575-.175-.425-.35-.365-.475-.365-.125 0-.275-.015-.425-.015s-.4.058-.6.275c-.2.218-.775.758-.775 1.847 0 1.09.79 2.146.9 2.3.11.15 1.554 2.378 3.766 3.328 1.258.54 2.235.86 2.995 1.1.758.24 1.45.207 1.996.125.608-.09 1.772-.725 2.022-1.425.25-.7.25-1.293.175-1.425-.075-.13-.275-.205-.575-.355z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Unmute/Mute Button - positioned directly over Gemini sparkle watermark */}
      <div
        data-aos="zoom-in"
        data-aos-delay="600"
        className="absolute bottom-[86px] right-[106px] md:bottom-[84px] md:right-[104px] z-30 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={toggleMute}
        onKeyPress={handleMuteKeyPress}
        role="button"
        aria-label={isMuted ? "Unmute background video" : "Mute background video"}
        aria-pressed={!isMuted}
        tabIndex={0}
      >
        <div className="w-[64px] h-[64px] md:w-[76px] md:h-[76px] rounded-full border border-white/30 bg-black/35 backdrop-blur-lg flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] group-hover:border-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_50px_rgba(255,42,42,0.8)]">
          {isMuted ? (
            <svg className="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25-2.25M19.5 12l-2.25 2.25M6.25 8.25H3.75a.75.75 0 00-.75.75v6a.75.75 0 00.75.75h2.5l5.25 4.5V3.75L6.25 8.25z" />
            </svg>
          ) : (
            <svg className="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25H4.5a.75.75 0 00-.75.75v6a.75.75 0 00.75.75h2.25l5.25 4.5V3.75L6.75 8.25z" />
            </svg>
          )}
        </div>
        <span className="text-white text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase opacity-85 group-hover:opacity-100 transition-opacity font-mono">
          {isMuted ? "UNMUTE" : "MUTE"}
        </span>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 text-white opacity-85"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
