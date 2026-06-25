import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the water fill animation (1.5s) + a small pause (0.5s)
    // before the shutter goes up smoothly.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center overflow-hidden"
        >
          {/* Logo Container */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative text-6xl md:text-8xl font-display font-black tracking-tighter select-none"
          >
            {/* Background text (empty state) */}
            <div className="text-red-900/30 font-display font-black">
              ANISH<span className="text-red-900/30">.</span>
            </div>

            {/* Foreground text (water fill state) */}
            <motion.div 
              className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap font-display font-black"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
            >
              ANISH<span className="text-black">.</span>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-16 text-white/70 text-[10px] md:text-xs tracking-[0.3em] uppercase font-sans font-medium text-center px-4"
          >
            AI ENGINEER · CYBERSECURITY PROFESSIONAL · RESEARCHER
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
