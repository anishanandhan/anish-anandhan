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
