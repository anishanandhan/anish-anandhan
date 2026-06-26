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
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.145-.44.02-.927.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
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
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.61-1.01-5.063-2.85-6.905C16.643 2.103 14.187.059 11.95.059c-5.432 0-9.855 4.37-9.858 9.753-.002 1.759.485 3.479 1.408 4.965l-.988 3.6 3.69-.968zm11.328-5.32c-.3-.15-1.771-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.776.975-.95 1.175-.175.2-.35.225-.65.075-3.04-1.517-4.14-2.22-5.789-5.05-.175-.3.175-.275.5-.925.075-.15.038-.282-.019-.397-.056-.113-.475-1.15-.65-1.575-.175-.425-.35-.365-.475-.365-.125 0-.275-.015-.425-.015s-.4.058-.6.275c-.2.218-.775.758-.775 1.847 0 1.09.79 2.146.9 2.3.11.15 1.554 2.378 3.766 3.328 1.258.54 2.235.86 2.995 1.1.758.24 1.45.207 1.996.125.608-.09 1.772-.725 2.022-1.425.25-.7.25-1.293.175-1.425-.075-.13-.275-.205-.575-.355z"/>
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
