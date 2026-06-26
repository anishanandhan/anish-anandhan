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
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M21.97 18.33a3.1 3.1 0 0 1-.9 2.27l-1.7 1.7a3.1 3.1 0 0 1-2.22.9 19.9 19.9 0 0 1-8.7-2.6 19.3 19.3 0 0 1-6-6 19.9 19.9 0 0 1-2.6-8.7A3.1 3.1 0 0 1 .75 3.7l1.7-1.7a3.1 3.1 0 0 1 2.27-.9 3.1 3.1 0 0 1 2.22.9l1.7 2.9a3.1 3.1 0 0 1-.3 3.3L7.3 9.7a15.9 15.9 0 0 0 6 6l1.5-1.1a3.1 3.1 0 0 1 3.3-.3l2.9 1.7a3.1 3.1 0 0 1 .9 2.27z"/>
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
              <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 512l148.4-38.9c32.6 18 69.3 27.5 106.9 27.5C377.7 500.5 477.4 401 477.3 278.6c-.1-59.3-23.2-115-65-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
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
