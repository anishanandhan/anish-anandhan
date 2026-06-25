import React from 'react';

const skillGroups = [
  {
    title: "Security & Reverse Engineering",
    tags: ["Ghidra", "Kali Linux", "OWASP ZAP", "Burp Suite", "Wireshark", "YARA"],
  },
  {
    title: "Backend & Data",
    tags: ["Python", "FastAPI", "MongoDB", "Flask", "Firebase", "Docker", "ELK Stack"],
  },
  {
    title: "AI & Machine Learning",
    tags: ["TensorFlow", "Qiskit", "FAISS", "LangChain", "Ollama", "Generative AI", "LLMs"],
  },
  {
    title: "Tools & Research",
    tags: ["Git", "GitHub", "Linux", "Postman", "Netlify", "UTM/QEMU", "IEEE LaTeX"],
  }
];

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 text-left" data-aos="fade-up">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-xs text-gray-600 font-bold mb-6 shadow-sm bg-white uppercase tracking-widest font-mono">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-4 font-display">
            Technologies I Work With
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            Built across security research, AI systems, quantum ML, and startup products.
          </p>
        </div>

        {/* 4-Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white border border-gray-200/80 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[220px] transition-all duration-500 hover:scale-[1.01] hover:border-[#ff2a2a]/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.06)] group relative overflow-hidden"
            >
              {/* Subtle hover gradient background overlay for Box 2 or any box */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a2a]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Group Title */}
                <h3 className="text-xl md:text-2xl font-black mb-6 tracking-tight text-gray-900 group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {group.title}
                </h3>
                
                {/* Tags List */}
                <div className="flex flex-wrap gap-2.5">
                  {group.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs bg-white border border-gray-200 hover:border-[#ff2a2a]/40 hover:bg-[#ff2a2a]/5 hover:text-[#ff2a2a] rounded-full px-4 py-2 text-gray-700 font-bold transition-all duration-300 cursor-default shadow-sm select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default React.memo(Skills);
