import React from 'react';

const projects = [
  {
    number: "01",
    title: "AI Insider Threat Detection",
    category: "Cybersecurity / AI",
    description: "An intelligent anomaly detection system parsing enterprise email logs and user behavior patterns using ML/DL to identify potential malicious insider threats.",
    tech: ["Python", "Jupyter Notebook", "TensorFlow", "Scikit-Learn", "Pandas"],
    demoLink: "https://github.com/anishanandhan/AI-Insider-Threat-Detection",
    codeLink: "https://github.com/anishanandhan/AI-Insider-Threat-Detection"
  },
  {
    number: "02",
    title: "BharatPulse",
    category: "AI Systems / Web App",
    description: "AI-powered real-time sports engagement platform with multi-agent orchestration, live tactical intelligence, fan interaction systems, and immersive match experiences.",
    tech: ["TypeScript", "React.js", "FastAPI", "MongoDB", "LangChain"],
    demoLink: "https://github.com/anishanandhan/BharatPulse",
    codeLink: "https://github.com/anishanandhan/BharatPulse"
  },
  {
    number: "03",
    title: "VulnScanner",
    category: "Cybersecurity / Automation",
    description: "An automated web vulnerability scanning tool written in Python to audit endpoints for security flaws, configuration issues, and OWASP Top 10 vulnerabilities.",
    tech: ["Python", "Flask", "Docker", "BeautifulSoup", "Requests"],
    demoLink: "https://github.com/anishanandhan/VulnScanner",
    codeLink: "https://github.com/anishanandhan/VulnScanner"
  },
  {
    number: "04",
    title: "FlowEmbed",
    category: "Machine Learning / Research",
    description: "An advanced metric learning framework designed to embed network traffic flows for anomaly detection, malware identification, and security telemetry analysis.",
    tech: ["Python", "PyTorch", "NetworkX", "Scikit-Learn", "Numpy"],
    demoLink: "https://github.com/anishanandhan/FlowEmbed",
    codeLink: "https://github.com/anishanandhan/FlowEmbed"
  },
  {
    number: "05",
    title: "RobIQ-AI",
    category: "AI Agents / HR Tech",
    description: "An LLM-powered candidate ranking and analysis pipeline that evaluates resume profiles against job descriptions using semantic search and retrieval evaluation.",
    tech: ["Python", "FastAPI", "Ollama", "FAISS", "LangChain"],
    demoLink: "https://github.com/anishanandhan/RobIQ-AI",
    codeLink: "https://github.com/anishanandhan/RobIQ-AI"
  },
  {
    number: "06",
    title: "FanForge-AI",
    category: "AI Agents / Gamification",
    description: "An immersive multi-agent AI operating system for adaptive tournament fan engagement, real-time predictions, and cinematic sports intelligence experiences.",
    tech: ["TypeScript", "React.js", "Ollama", "FastAPI", "Socket.io"],
    demoLink: "https://github.com/anishanandhan/FanForge-AI",
    codeLink: "https://github.com/anishanandhan/FanForge-AI"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] text-white pt-28 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#ff2a2a]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl" data-aos="fade-up">
            <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs text-white/70 font-semibold mb-6 shadow-sm bg-white/5 uppercase tracking-widest font-mono">
              Projects
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight font-display">
              Securing systems & building robust code
            </h2>
          </div>
          <p className="text-white/60 text-base md:text-lg max-w-sm font-medium leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            A curated selection of projects at the intersection of cybersecurity, multi-agent AI systems, and machine learning research.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white/[0.02] border border-white/[0.08] backdrop-blur-md rounded-[2rem] p-8 hover:border-[#ff2a2a]/50 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between min-h-[460px] shadow-xl hover:shadow-[0_20px_50px_rgba(255,42,42,0.12)] hover:-translate-y-2"
            >
              <div>
                {/* Card Top Row */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-bold text-[#ff2a2a] tracking-widest uppercase bg-[#ff2a2a]/10 px-3 py-1 rounded-full font-mono">
                    {project.category}
                  </span>
                  <span className="font-serif italic text-white/20 text-3xl font-black">
                    {project.number}
                  </span>
                </div>

                {/* Card Title & Desc */}
                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 font-medium">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((techItem, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/80 font-medium font-mono"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Card Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08]">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white group-hover/link:text-white flex items-center gap-1.5 hover:underline decoration-[#ff2a2a] underline-offset-4"
                  >
                    View Demo
                    <svg className="w-4 h-4 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white/50 hover:text-white transition-colors ml-auto font-mono"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default React.memo(Projects);
