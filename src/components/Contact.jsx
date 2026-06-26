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
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-12 md:mb-16 border-b border-white/20 pb-8">
              <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-90 font-mono">
                Reach Us
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-mono">
                <a
                  href="https://github.com/anishanandhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 border border-white/10 hover:border-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/anishanan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 border border-white/10 hover:border-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="mailto:anishanandhan13@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 border border-white/10 hover:border-white"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Email
                </a>
                <a
                  href="tel:+918870676412"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 border border-white/10 hover:border-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M21.97 18.33a3.1 3.1 0 0 1-.9 2.27l-1.7 1.7a3.1 3.1 0 0 1-2.22.9 19.9 19.9 0 0 1-8.7-2.6 19.3 19.3 0 0 1-6-6 19.9 19.9 0 0 1-2.6-8.7A3.1 3.1 0 0 1 .75 3.7l1.7-1.7a3.1 3.1 0 0 1 2.27-.9 3.1 3.1 0 0 1 2.22.9l1.7 2.9a3.1 3.1 0 0 1-.3 3.3L7.3 9.7a15.9 15.9 0 0 0 6 6l1.5-1.1a3.1 3.1 0 0 1 3.3-.3l2.9 1.7a3.1 3.1 0 0 1 .9 2.27z"/>
                  </svg>
                  Call
                </a>
                <a
                  href="https://www.instagram.com/anish.anan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 border border-white/10 hover:border-white"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://wa.me/8870676412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 border border-white/10 hover:border-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 512l148.4-38.9c32.6 18 69.3 27.5 106.9 27.5C377.7 500.5 477.4 401 477.3 278.6c-.1-59.3-23.2-115-65-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
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
