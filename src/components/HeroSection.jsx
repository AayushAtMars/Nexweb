import React from "react";
import heroIllustration from "../assets/hero_illustration.png";

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
    </section>
  );
};

export default HeroSection;
