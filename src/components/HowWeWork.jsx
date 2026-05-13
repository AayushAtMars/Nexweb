import React from "react";

const steps = [
  {
    num: "01",
    title: "Growth Diagnostic",
    desc: "We start with a comprehensive audit of your brand, tech stack, marketing systems, and data. This gives us a clear picture of where the gaps are and what levers will move the needle fastest.",
  },
  {
    num: "02",
    title: "System Architecture",
    desc: "We design a custom ecosystem blueprint — mapping out every tool, workflow, integration, and automation required to build a connected, scalable growth infrastructure for your business.",
  },
  {
    num: "03",
    title: "Build & Integrate",
    desc: "Our team builds every element of the system — from conversion-optimised websites and automation flows to content engines and paid channels — all integrated into one unified platform.",
  },
  {
    num: "04",
    title: "Optimise & Scale",
    desc: "With the foundation in place, we continuously monitor performance, run experiments, and scale what works. Every decision is driven by data, not gut feel.",
  },
];

const HowWeWork = () => {
  return (
    <section style={{ backgroundColor: "#f5f4fc" }} className="w-full py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <span
            className="text-xs font-semibold tracking-widest uppercase mb-3 block"
            style={{ color: "#47216b" }}
          >
            Our Process
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-4xl font-bold leading-tight"
              style={{ color: "#1a0a3c" }}
            >
              How We Work
            </h2>
            <p
              className="text-sm max-w-md leading-relaxed"
              style={{ color: "#4b5563" }}
            >
              A structured, four-phase process that takes you from scattered
              efforts to a fully integrated growth system.
            </p>
          </div>
          <div
            className="w-full h-px mt-8"
            style={{ backgroundColor: "#ddd4f0" }}
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map(({ num, title, desc }, i) => (
            <div
              key={i}
              className="relative p-8 border-r last:border-r-0 border-dashed"
              style={{ borderColor: "#ddd4f0" }}
            >
              {/* Step number */}
              <p
                className="text-6xl font-bold mb-6 leading-none"
                style={{ color: "#e8e0f5" }}
              >
                {num}
              </p>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#1a0a3c" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>
                {desc}
              </p>
              {/* Connector dot */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[3.5rem] right-0 w-3 h-3 rounded-full border-2 translate-x-1/2 z-10"
                  style={{
                    borderColor: "#47216b",
                    backgroundColor: "#f5f4fc",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#47216b" }}
          >
            Start Your Diagnostic
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
