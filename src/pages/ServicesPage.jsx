import React, { useState, useRef } from "react";
import Layout from "../layouts/Layout";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "System Architecture",
    tag: "Infrastructure",
    desc: "We design your entire digital growth infrastructure — mapping every tool, workflow, integration, and automation into one connected blueprint before a single line of code is written.",
    points: ["Full ecosystem mapping", "Tech stack selection", "Integration planning", "Automation workflows"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Brand & Identity",
    tag: "Branding",
    desc: "Your brand is the first signal your market receives. We build brand systems that communicate authority, clarity, and trust — from visual identity to tone of voice and positioning strategy.",
    points: ["Brand strategy", "Visual identity design", "Tone & messaging", "Brand guidelines"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Web Development",
    tag: "Technology",
    desc: "We build conversion-optimised websites and web applications that are designed to generate leads, not just look good. Every element is engineered with business outcomes in mind.",
    points: ["Conversion-led design", "Custom development", "CMS integration", "Performance optimisation"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Marketing Automation",
    tag: "Automation",
    desc: "We replace manual, repetitive marketing tasks with intelligent automation systems — from lead nurturing sequences to CRM pipelines and multi-channel follow-up flows.",
    points: ["CRM setup & integration", "Lead nurturing flows", "Email sequences", "Pipeline automation"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Paid Media",
    tag: "Growth",
    desc: "We run performance-led paid campaigns across Google, Meta, and LinkedIn — structured around your customer journey and designed to generate pipeline, not just clicks.",
    points: ["Google & Meta Ads", "LinkedIn campaigns", "Retargeting systems", "ROI tracking"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "SEO & Content",
    tag: "Organic",
    desc: "We build content and SEO systems that compound over time — creating sustainable organic growth that continues to deliver returns long after initial investment.",
    points: ["Technical SEO audit", "Content strategy", "Authority building", "Keyword infrastructure"],
  },
];

const TiltCard = ({ icon, title, tag, desc, points }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({ 
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' 
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const rotateX = ((y / height) - 0.5) * -10; 
    const rotateY = ((x / width) - 0.5) * 10;
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className="group relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 border border-[#ede8f8] cursor-pointer z-10"
      style={{ ...style, boxShadow: "0 4px 20px rgba(71,33,107,0.04)" }}
    >
      {/* Interactive Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#47216b] to-[#1a0a3c] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative z-10 flex h-full flex-col">
        {/* Header: Icon & Tag */}
        <div className="flex items-start justify-between mb-8">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-500 bg-[#f5f4fc] text-[#47216b] group-hover:bg-white/10 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            {icon}
          </div>
          <span className="text-xs font-bold px-3.5 py-1.5 rounded-full transition-colors duration-500 bg-[#f5f4fc] text-[#47216b] group-hover:bg-white/15 group-hover:text-white">
            {tag}
          </span>
        </div>

        {/* Text Content */}
        <h3 className="text-2xl font-bold mb-4 transition-colors duration-500 text-[#1a0a3c] group-hover:text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 transition-colors duration-500 text-[#4b5563] group-hover:text-white/80">
          {desc}
        </p>

        {/* Expandable Points (Slides down on hover) */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            <ul className="space-y-3 pt-6 border-t border-white/10 mt-2">
              {points.map((p, i) => (
                <li key={p} className="flex items-start gap-3 text-sm font-medium text-white/95" style={{ transitionDelay: `${i * 50}ms` }}>
                  <svg className="w-5 h-5 text-[#c4b5fd] flex-shrink-0 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-auto pt-8 flex items-center gap-2 text-sm font-bold transition-colors duration-500 text-[#47216b] group-hover:text-[#c4b5fd]">
          Explore Service
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const InteractiveHero = () => {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    setMouse({
      x: ((clientX - left) / width) * 100,
      y: ((clientY - top) / height) * 100,
    });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full py-32 overflow-hidden"
      style={{ backgroundColor: "#f5f4fc" }}
    >
      {/* Interactive Cursor Follower Gradient */}
      <div 
        className="absolute inset-0 opacity-80 transition-all duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle 700px at ${mouse.x}% ${mouse.y}%, rgba(167,139,250,0.15), transparent 80%)`
        }}
      />
      
      {/* Decorative Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(#47216b 1px, transparent 1px), linear-gradient(90deg, #47216b 1px, transparent 1px)", 
          backgroundSize: "48px 48px" 
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center flex flex-col items-center">
        <span 
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 bg-white border shadow-sm" 
          style={{ color: "#47216b", borderColor: "#ede8f8" }}
        >
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#a855f7" }} />
          What We Do
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight" style={{ color: "#1a0a3c" }}>
          Services Built for <br />
          <span className="font-light italic" style={{ color: "#47216b" }}>Scalable Growth</span>
        </h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#4b5563" }}>
          Every service we offer is a component of a larger growth system.
          We don't sell standalone tactics — we build interconnected
          infrastructure that drives compounding results.
        </p>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  return (
    <Layout>
      <InteractiveHero />

      {/* Services Grid */}
      <section className="relative w-full pb-32 bg-white pt-20">
        {/* Faded top border for smooth transition from hero */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f5f4fc] to-white pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <TiltCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative w-full py-24 overflow-hidden" style={{ backgroundColor: "#1a0a3c" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-5">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-sm md:text-base mb-10 leading-relaxed" style={{ color: "#c4b8e8" }}>
            Start with our free Growth Diagnostic. In 30 minutes, we'll identify
            exactly which systems will move the needle for your business right now.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-sm font-bold bg-white transition-transform hover:scale-105 hover:shadow-xl"
            style={{ color: "#1a0a3c" }}
          >
            Book a Free Diagnostic
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
