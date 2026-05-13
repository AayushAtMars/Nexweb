import React from 'react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: "Digital Growth & AI Automation",
    desc: "Design and deploy intelligent automation across your marketing, sales, and operations. Reduce manual touchpoints by up to 70% while drastically improving speed.",
    bg: "#47216b",
    text: "#ffffff",
    descText: "rgba(255,255,255,0.75)",
    border: "rgba(255,255,255,0.15)",
    iconBg: "rgba(255,255,255,0.1)",
    arrowBg: "rgba(255,255,255,0.15)"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    ),
    title: "E-Commerce Growth Infrastructure",
    desc: "Revenue-focused commerce systems that go beyond storefronts. Integrated inventory, automated fulfillment, and conversion optimization designed to scale profitably.",
    bg: "#f5f3fa",
    text: "#130a21",
    descText: "#4b5563",
    border: "rgba(71,33,107,0.1)",
    iconBg: "#ffffff",
    arrowBg: "#ffffff",
    arrowText: "#47216b"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6" /></svg>
    ),
    title: "Educational Platforms & Portals",
    desc: "High-performance school websites and digital admission portals. Build custom infrastructure to manage student enrollment and parent communication.",
    bg: "#ffffff",
    text: "#130a21",
    descText: "#4b5563",
    border: "rgba(0,0,0,0.08)",
    iconBg: "#f9fafb",
    arrowBg: "#f3f4f6",
    arrowText: "#130a21"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    ),
    title: "Custom ERP & Operations Software",
    desc: "End-to-end enterprise resource planning products. Connect your finance, HR, inventory, and sales data into one centralized, intelligent dashboard.",
    bg: "#ffffff",
    text: "#130a21",
    descText: "#4b5563",
    border: "rgba(0,0,0,0.08)",
    iconBg: "#f9fafb",
    arrowBg: "#f3f4f6",
    arrowText: "#130a21"
  }
];

const OurSolutionsSection = () => {
  return (
    <section className="w-full py-24 bg-white relative z-10">
      <div className="max-w-[1300px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto relative">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#47216b" }}>
            Growth Systems Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight" style={{ color: "#130a21" }}>
            Our Solutions
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
            Integrated systems that replace fragmented tactics with predictable,<br className="hidden md:block" /> automated growth infrastructure.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((s, i) => (
            <div 
              key={i} 
              className="group relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
              style={{ backgroundColor: s.bg, color: s.text, border: `1px solid ${s.border}` }}
            >
              <div>
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-2xl mb-8 flex items-center justify-center shadow-sm" 
                  style={{ backgroundColor: s.iconBg, color: s.arrowText || s.text, border: `1px solid ${s.border}` }}
                >
                  {s.icon}
                </div>

                {/* Title & Desc */}
                <h3 className="text-[1.35rem] font-bold mb-3 leading-tight tracking-tight pr-2">
                  {s.title}
                </h3>
                <p className="text-[0.85rem] leading-relaxed font-medium" style={{ color: s.descText }}>
                  {s.desc}
                </p>
              </div>
              
              {/* Footer CTA */}
              <div className="mt-12 flex items-center justify-between pt-6" style={{ borderTop: `1px solid ${s.border}` }}>
                <Link 
                  to="/solutions" 
                  className="text-[11px] font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
                >
                  Explore System
                </Link>
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                  style={{ backgroundColor: s.arrowBg, color: s.arrowText || s.text }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m-7-7l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutionsSection;
