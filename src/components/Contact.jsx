import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mvzjoqer", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" role="region" aria-label="Contact form section" className="bg-[#000000] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-950 font-sans">
      {/* Huge Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-[12vh] md:pt-[10vh]"
      >
        <h1
          className="text-[15vw] md:text-[12vw] leading-[0.75] font-display font-black text-white uppercase tracking-tighter select-none scale-y-[1.4] origin-top w-full text-center"
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        {submitStatus === 'success' ? (
          <div
            data-aos="zoom-in"
            className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-center items-center min-h-[420px] text-center"
          >
            <div className="w-20 h-20 bg-white text-[#ff2a2a] rounded-full flex items-center justify-center mb-6 shadow-xl animate-pulse">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-black mb-4 font-display">Thank you!</h3>
            <p className="text-white/80 max-w-md leading-relaxed text-lg">
              Your message has been sent successfully. Anish will get back to you shortly!
            </p>
            <button 
              onClick={() => setSubmitStatus(null)}
              className="mt-8 px-6 py-2.5 bg-white text-[#ff2a2a] hover:bg-black hover:text-white font-bold rounded-full transition-all duration-300 text-sm font-mono uppercase tracking-wider cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <div
            data-aos="fade-up"
            className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
          >
            <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-16 uppercase opacity-90 font-mono">
              Reach Us
            </div>

            <form onSubmit={handleSubmit} aria-label="Contact form" className="flex flex-col gap-12 w-full">
              <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-10">
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      required
                      aria-required="true"
                      aria-label="First name"
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      aria-required="true"
                      aria-label="Last name"
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      aria-required="true"
                      aria-label="Email address"
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                    />
                  </div>
                  {/* Checkbox inside Left Column */}
                  <div className="flex items-start gap-4 text-sm font-medium text-white/90 mt-4">
                    <input
                      type="checkbox"
                      id="permission"
                      name="permission"
                      required
                      className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer"
                      style={{ accentColor: "white" }}
                    />
                    <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                      I give permission to contact me at this email address.
                    </label>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="relative h-full min-h-[160px] flex flex-col mb-8">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Type your message here"
                      required
                      aria-required="true"
                      aria-label="Message"
                      className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                    ></textarea>
                  </div>

                  {/* Notices and Button inside Right Column */}
                  <div className="flex flex-col gap-6">
                    <p className="text-[10px] md:text-xs leading-relaxed max-w-[420px] text-white/70">
                      Your privacy is important to us. We use Formspree to handle form submissions securely.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 pt-2">
                      <div className="flex flex-col gap-2">
                        <p className="text-[10px] md:text-xs max-w-[250px] leading-relaxed text-white/60">
                          For more information, please review our <a href="/privacy-policy.html" className="underline hover:text-white transition-colors">privacy policy</a>.
                        </p>
                        {submitStatus === 'error' && (
                          <p className="text-xs text-white bg-black/35 px-3 py-1.5 rounded-lg font-mono w-max">
                            ⚠️ Submission failed. Please try again.
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 rounded-full border border-white/50 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {isSubmitting ? 'Sending...' : 'Send'}
                        {!isSubmitting && (
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
