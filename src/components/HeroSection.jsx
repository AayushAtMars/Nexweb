import React from "react";
import heroIllustration from "../assets/hero_illustration.png";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundColor: "#f5f4fc" }}
      className="w-full min-h-screen flex flex-col justify-start"
    >
      {/* ── Top Hero Block ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-12 flex flex-col md:flex-row items-center gap-10">
        {/* ── Left Content ── */}
        <div className="flex-1 max-w-[580px]">
          {/* Decorative dots */}
          <div className="flex items-start gap-3 mb-4">
            <span
              className="w-2 h-2 rounded-full mt-1 flex-shrink-0"
              style={{ backgroundColor: "#3d1a6e" }}
            />
            <span
              className="w-8 h-8 rounded-full border flex-shrink-0"
              style={{ borderColor: "#c4b8e8" }}
            />
          </div>

          {/* Heading */}
          <h1
            className="text-5xl font-bold leading-tight mb-4"
            style={{ color: "#1a0a3c" }}
          >
            Scale{" "}
            <span className="font-light italic" style={{ color: "#1a0a3c" }}>
              Without
            </span>{" "}
            Chaos
          </h1>

          {/* Body text */}
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#333" }}>
            We build <strong>integrated digital ecosystems</strong> that replace
            fragmented tactics with predictable, automated growth systems. For
            established businesses ready to move from effort-based execution to{" "}
            <em>scalable infrastructure.</em>
          </p>

          {/* Feature list */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-8">
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
              <div key={bold} className="flex items-start gap-1.5">
                <svg
                  className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                  style={{ color: "#3d1a6e" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs" style={{ color: "#333" }}>
                  <strong>{bold}</strong> {text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mb-12">
            <a
              href="#"
              className="px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: "#3d1a6e" }}
            >
              Start Growth Diagnostic
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-200 hover:bg-gray-50"
              style={{
                borderColor: "#3d1a6e",
                color: "#3d1a6e",
                backgroundColor: "transparent",
              }}
            >
              Explore Our Systems
            </a>
          </div>

          {/* Stats row */}
          <div className="flex items-start gap-12">
            {[
              { value: "500+", label: "Systems Deployed" },
              { value: "3.2x", label: "Avg. Efficiency Gain" },
              { value: "97%", label: "Client Retention" },
            ].map(({ value, label }) => (
              <div key={value}>
                <p
                  className="text-3xl font-bold"
                  style={{ color: "#1a0a3c" }}
                >
                  {value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Illustration ── */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={heroIllustration}
            alt="Digital ecosystem dashboard illustration"
            className="w-full max-w-[500px] object-contain"
          />
        </div>
      </div>

      {/* ── "Systems, Not Services" Block ──────────────────────── */}
      <div
        className="w-full bg-white pt-16 pb-12"
      >
        <div className="max-w-7xl mx-auto px-8">
          {/* Section heading */}
          <h2
            className="text-4xl font-bold mb-3"
            style={{ color: "#1a0a3c" }}
          >
            Systems, Not Services
          </h2>

          {/* Subtitle with line */}
          <div className="flex items-center gap-4 mb-6">
            <p className="text-base font-semibold" style={{ color: "#1a0a3c" }}>
              Your Digital Growth Partner
            </p>
            <div
              className="flex-1 h-px max-w-[260px]"
              style={{ backgroundColor: "#1a0a3c" }}
            />
          </div>

          {/* Body text */}
          <p className="text-sm leading-relaxed max-w-4xl" style={{ color: "#333" }}>
            We don't run campaigns. We don't build websites in isolation. We
            don't hand you tactics that require endless internal effort.{" "}
            <strong>Godigitify</strong> architects{" "}
            <strong>integrated digital ecosystems</strong> — connecting your
            brand, technology, automation, and data into one growth-focused
            system. For established businesses ready to{" "}
            <strong>stop hiring for tasks and start investing in infrastructure.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
