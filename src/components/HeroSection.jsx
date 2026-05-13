import React from "react";
import heroIllustration from "../assets/hero_illustration.png";
import img1 from "../assets/systems_img1.png";
import img2 from "../assets/systems_img2.png";
import img3 from "../assets/blog_branding.png";
import img4 from "../assets/blog_seo.png";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center bg-gray-50 relative overflow-hidden">
      {/* ── Top Hero Block ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-16 flex flex-col lg:flex-row items-center gap-12 relative z-10">

        {/* ── Left Content ── */}
        <div className="flex-1 max-w-[650px]">

          {/* Heading */}
          <div className="relative mb-6">
            {/* Decorative dot behind "Without" */}


            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] tracking-tight relative z-10">
              <span style={{ color: "#47216b" }}>Scale </span>
              <span className="text-gray-900 font-medium">Without </span>
              <span style={{ color: "#47216b" }}>Chaos</span>
            </h1>
          </div>

          {/* Body text */}
          <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-600 max-w-[600px] font-medium">
            We build <strong style={{ color: "#47216b" }}>integrated digital ecosystems</strong> that replace
            fragmented tactics with predictable, automated growth systems. For
            established businesses ready to move from effort-based execution to{" "}
            scalable infrastructure.
          </p>

          {/* Feature list */}
          <div className="flex flex-wrap gap-x-6 gap-y-4 mb-10">
            {[
              {
                bold: "System-Level Automation",
                text: "— End manual bottlenecks",
              },
              {
                bold: "Secure & Scalable",
                text: "— Built for enterprise load",
              },
              {
                bold: "Measurable ROI",
                text: "— Predictable growth metrics",
              },
            ].map(({ bold, text }) => (
              <div key={bold} className="flex items-start gap-2 w-full md:w-auto flex-1 min-w-[200px]">
                <span className="text-[#47216b] text-sm mt-0.5">✓</span>
                <span className="text-xs md:text-sm text-gray-600 leading-snug">
                  <strong className="text-gray-800">{bold}</strong> <br className="hidden md:block lg:hidden" /> {text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#"
              className="px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: "#47216b" }}
            >
              Start Growth Diagnostic
            </a>
            <a
              href="#"
              className="px-8 py-3.5 rounded-full text-sm font-bold border transition-all duration-300 hover:bg-gray-100"
              style={{
                borderColor: "#47216b",
                color: "#47216b",
                backgroundColor: "transparent",
              }}
            >
              Explore Our Systems
            </a>
          </div>

          {/* Stats row */}
          <div className="flex items-start gap-12 md:gap-16">
            {[
              { value: "500+", label: "Systems Deployed" },
              { value: "3.2x", label: "Avg. Efficiency Gain" },
              { value: "97%", label: "Client Retention" },
            ].map(({ value, label }) => (
              <div key={value}>
                <p
                  className="text-2xl md:text-3xl font-bold mb-1"
                  style={{ color: "#47216b" }}
                >
                  {value}
                </p>
                <p className="text-xs md:text-sm font-medium text-gray-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Illustration ── */}
        <div className="flex-1 flex justify-center items-center w-full mt-10 lg:mt-0 relative">
          {/* Subtle background glow for illustration */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-transparent rounded-full blur-3xl opacity-50"></div>
          <img
            src={heroIllustration}
            alt="ScaleForage ecosystem illustration"
            className="w-full max-w-[550px] object-contain relative z-10"
          />
        </div>
      </div>

      {/* ── "Systems, Not Services" / Tech Solutions Block ── */}
      <div className="w-full bg-white pt-24 pb-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "#130a21" }}>
              Systems, Not Services
            </h2>
            <div className="flex items-center gap-6">
              <p className="text-xl md:text-2xl font-bold" style={{ color: "#130a21" }}>
                Your Technology Growth Partner
              </p>
              <div className="flex-1 h-0.5 rounded-full" style={{ backgroundColor: "#e5e7eb" }} />
            </div>
          </div>

          {/* Body */}
          <div className="relative mb-12">
            {/* Decorative element */}
            <div className="absolute -top-8 left-16 w-16 h-16 rounded-full border border-gray-200 shadow-sm mix-blend-multiply flex items-center justify-center hidden md:flex">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#130a21" }}></div>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-4xl font-medium mb-6 relative z-10 md:pt-4">
              We don't deploy quick fixes or isolated tools. We engineer <strong style={{ color: "#47216b" }}>real-world tech solutions</strong> to automate your complex business tasks and drive scalable growth. 
              <strong> ScaleForage</strong> architects <strong>intelligent digital ecosystems</strong> — connecting your software stack, workflows, and data into one powerful, automated infrastructure.
              Built for established businesses ready to <strong>stop managing manual chaos and start investing in intelligent automation.</strong>
            </p>
            
            <p className="text-base leading-relaxed text-gray-700 max-w-4xl mb-3">
              <strong style={{ color: "#130a21" }}>Who we work with:</strong> Visionary mid-market companies and scaling enterprises that demand frictionless operations and sustainable, tech-driven expansion.
            </p>
            
            <p className="text-base leading-relaxed text-gray-700 max-w-4xl mb-10">
              <strong style={{ color: "#130a21" }}>What we solve:</strong> Fragmented tech stacks, manual data entry bottlenecks, disconnected platforms, and the painful gap between strategic vision and daily execution.
            </p>

            <div className="flex items-center justify-between">
              <div className="text-gray-400 flex items-center gap-2 font-bold text-xl">
                {/* LinkedIn icon or decorative text */}
                in
              </div>
              <a
                href="/our-approach"
                className="px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "#47216b" }}
              >
                Our Approach
              </a>
            </div>
          </div>

          {/* Horizontal Image Scroll */}
          <div className="w-full overflow-hidden relative mt-16 group">
             {/* Left/Right fading edges */}
             <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
             <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
             
             {/* Scrolling Container */}
             <div className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {[
                  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                ].map((img, i) => (
                  <div key={i} className="flex-shrink-0 w-72 md:w-80 h-48 md:h-52 rounded-2xl overflow-hidden snap-center bg-gray-100 shadow-sm transition-transform duration-300 hover:scale-[1.02] border border-gray-100">
                    <img 
                      src={img} 
                      alt={`Tech Solution ${i}`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
