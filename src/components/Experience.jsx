import React from 'react';

const activeRoles = [
  {
    title: "Research Intern",
    company: "IIT Madras CyStar",
    tenure: "2026 – Present",
    details: [
      "Conducting offensive security research focusing on Vulnerable Driver Analysis (BYOVD) and kernel-level exploitation chains.",
      "Architecting 'DriverArmory' — an automated intelligence platform executing Ghidra headless binary analysis pipelines to map IOCTL handlers and cross-reference CVEs.",
      "Designing EDR evasion models and integration protocols for custom BOF payloads via Sliver/Cipher C2 frameworks."
    ],
    accent: true
  },
  {
    title: "Global Admissions Committee Member",
    company: "Millennium Campus Network (MCN)",
    tenure: "2026 – Present",
    details: [
      "Reviewing applications for the international Millennium Fellowship program, calibrating scores for batches from Cameroon, Tanzania, Nigeria, and Botswana.",
      "Working directly with global Team Leads to ensure rigorous assessment standards, data integrity, and fairness in selection."
    ],
    accent: true
  }
];

const standardRoles = [
  {
    title: "Co-Founder & CEO / CFO",
    company: "Seryth & Envirobuilders (Startups)",
    tenure: "2024 – Present",
    details: [
      "Building Seryth, an AI-powered personalized fragrance platform focused on consumer customization and sustainability.",
      "Co-managing financial planning and operations for Envirobuilders, an eco-friendly construction materials startup."
    ]
  },
  {
    title: "Explainable AI & ML Research Intern",
    company: "Centre for Human Movement Analytics (CeHMA)",
    tenure: "May 2025 – Jun 2025",
    details: [
      "Designed and trained an Attention-based CNN architecture for sensor-based activity recognition.",
      "Achieved 96.40% classification accuracy using support vector machines (SVM), surpassing hybrid deep learning baselines."
    ]
  },
  {
    title: "Cybersecurity Intern",
    company: "R S C Technologies",
    tenure: "Jun 2024 – Jul 2024",
    details: [
      "Administered authenticated vulnerability scans using Qualys Cloud Agents and assessed CVE/CVSS risks to guide remediation.",
      "Monitored firewall rules, router logs, and network telemetry via Syslog/SNMP to identify misconfigurations."
    ]
  }
];

const bannerRole = {
  title: "Aerospace Technology Program Graduate",
  company: "India Space Academy",
  tenure: "2025",
  details: [
    "Gained foundational exposure to space technology applications, satellite communications, and orbital mechanics."
  ]
};

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="bg-white pt-24 pb-20 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-100 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-left" data-aos="fade-up">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-xs text-gray-600 font-bold mb-6 shadow-sm bg-white uppercase tracking-widest font-mono">
            Work History
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-4 font-display">
            Professional Experience
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            Leading research, building secure intelligence platforms, and coordinating global impact initiatives.
          </p>
        </div>

        {/* Top 2 Active Roles: 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {activeRoles.map((role, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white border-2 border-emerald-500/80 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between shadow-[0_15px_40px_rgba(16,185,129,0.06)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)] transition-all duration-500 hover:scale-[1.01] relative"
            >
              {/* Ongoing Indicator Badge */}
              <div className="absolute top-6 right-8 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-600 uppercase tracking-widest font-mono">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                Ongoing
              </div>

              <div>
                <span className="text-xs text-[#ff2a2a] font-bold tracking-widest uppercase font-mono block mb-2">
                  {role.company}
                </span>
                <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">
                  {role.title}
                </h3>
                <ul className="space-y-4">
                  {role.details.map((bullet, idx) => (
                    <li key={idx} className="text-gray-600 text-sm leading-relaxed font-medium flex items-start gap-2.5">
                      <span className="text-emerald-500 text-base leading-none mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-bold font-mono uppercase tracking-widest">
                <span>Tenure</span>
                <span className="text-gray-600">{role.tenure}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3 standard roles: 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {standardRoles.map((role, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white border border-gray-200 rounded-[2rem] p-8 flex flex-col justify-between shadow-sm hover:border-[#ff2a2a]/30 hover:shadow-[0_15px_40px_rgba(255,42,42,0.04)] transition-all duration-500 hover:scale-[1.01]"
            >
              <div>
                <span className="text-xs text-gray-400 font-bold tracking-widest uppercase font-mono block mb-2">
                  {role.company}
                </span>
                <h3 className="text-lg font-black text-gray-900 mb-6 tracking-tight">
                  {role.title}
                </h3>
                <ul className="space-y-3">
                  {role.details.map((bullet, idx) => (
                    <li key={idx} className="text-gray-500 text-xs leading-relaxed font-medium flex items-start gap-2">
                      <span className="text-gray-400 text-sm leading-none mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 font-bold font-mono uppercase tracking-widest">
                <span>Tenure</span>
                <span className="text-gray-600">{role.tenure}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Row for Space Academy */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-gray-50 border border-gray-200 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-inner"
        >
          <div className="flex-1">
            <span className="text-xs text-gray-400 font-bold tracking-widest uppercase font-mono block mb-1">
              {bannerRole.company}
            </span>
            <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2 tracking-tight">
              {bannerRole.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              {bannerRole.details[0]}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-4 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-8 text-xs text-gray-400 font-bold font-mono uppercase tracking-widest">
            <div className="flex flex-col text-left md:text-right">
              <span className="text-[10px] text-gray-400">Program Year</span>
              <span className="text-gray-700 text-sm font-black mt-0.5">{bannerRole.tenure}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
