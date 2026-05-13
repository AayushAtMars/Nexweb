import React, { useState } from "react";

const projects = [
  {
    title: "The Uniques",
    desc: "See how we architected an end-to-end digital ecosystem connecting brand, technology, and automation for scalable growth. We reduced manual follow-up time by 80% and increased qualified leads by 3.4x in just 90 days.",
    url: "https://theuniques.in",
  },
  {
    title: "SuperSixty",
    desc: "Built a modern educational platform focused on innovation, mentorship, and career growth with a scalable and engaging digital experience.",
    url: "https://www.supersixty.in/",
  },
  {
    title: "SkillUp",
    desc: "Developed a skill-based learning platform with interactive UI and optimized workflows for seamless user engagement and learning management.",
    url: "https://skillup.supersixty.in/",
  },
  {
    title: "Google Ideate",
    desc: "Created a collaborative innovation and ideation platform designed to empower students and creators through technology-driven initiatives.",
    url: "https://ideate.supersixty.in/",
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState(0);
  const t = projects[active];

  return (
    <section className="w-full py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-purple-100 text-[#a855f7] text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
            Systems in Action
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Infrastructure That Scales
          </h2>
        </div>

        {/* Custom Tabs (Carousel Controls) */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300"
              style={
                active === i
                  ? { backgroundColor: "#130a21", color: "#fff", boxShadow: "0 10px 25px -5px rgba(19, 10, 33, 0.4)", transform: "translateY(-2px)" }
                  : { backgroundColor: "#fff", color: "#6b7280", border: "1px solid #e5e7eb" }
              }
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Active Project Split Layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">

          {/* Left Side: Premium Content Box */}
          <div className="flex-1 rounded-3xl p-10 md:p-14 flex flex-col justify-center transition-all duration-500 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
            {/* Decorative background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#a855f7] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>

            <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900 relative z-10">
              {t.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#130a21] to-[#a855f7]">
                Growth System
              </span>
            </h3>

            <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-10 relative z-10 font-medium">
              {t.desc}
            </p>

            <div className="relative z-10">
              <a
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:-translate-y-1"
                style={{ backgroundColor: "#130a21" }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#a855f7"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#130a21"; }}
              >
                Visit Live Website
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>

          {/* Right Side: Live Website Iframe in Browser Mockup */}
          <div className="flex-1 w-full h-[500px] md:h-[650px] rounded-3xl border border-gray-200 overflow-hidden relative shadow-2xl bg-white flex flex-col group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(19,10,33,0.15)]">

            {/* Browser Header Mockup */}
            <div className="h-12 bg-gray-50 border-b border-gray-200 flex items-center px-4 shrink-0 relative">
              {/* Traffic Lights */}
              <div className="flex gap-2 absolute left-4">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
              </div>

              {/* URL Bar */}
              <div className="flex-1 flex justify-center">
                <div className="bg-white px-4 py-1.5 text-xs text-gray-500 rounded-md border border-gray-200 shadow-sm flex items-center gap-2 max-w-[250px] w-full truncate font-medium">
                  <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                  {t.url}
                </div>
              </div>
            </div>

            {/* "Live Web" Pulsing Badge */}
            <div className="absolute top-16 right-6 z-10 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-2 pointer-events-none">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              LIVE
            </div>

            {/* Live Iframe */}
            <div className="flex-1 relative w-full h-full bg-gray-100">
              <iframe
                src={t.url}
                title={`${t.title} Live Preview`}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
