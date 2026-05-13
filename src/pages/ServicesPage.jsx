import React, { useState } from "react";
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

const ServicesPage = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <Layout>
      {/* Hero Banner */}
      <section style={{ backgroundColor: "#f5f4fc" }} className="w-full py-28">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#47216b" }}>
            What We Do
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: "#1a0a3c" }}>
            Services Built for <br />
            <span className="font-light italic">Scalable Growth</span>
          </h1>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#4b5563" }}>
            Every service we offer is a component of a larger growth system.
            We don't sell standalone tactics — we build interconnected
            infrastructure that drives compounding results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon, title, tag, desc, points }, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="rounded-2xl p-8 border transition-all duration-300 flex flex-col cursor-pointer"
                style={{
                  borderColor: hovered === i ? "#47216b" : "#ede8f8",
                  backgroundColor: hovered === i ? "#f5f4fc" : "#fff",
                  transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: hovered === i ? "0 12px 40px rgba(71,33,107,0.1)" : "none",
                }}
              >
                {/* Icon & Tag */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#ede8f8", color: "#47216b" }}
                  >
                    {icon}
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#ede8f8", color: "#47216b" }}
                  >
                    {tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: "#1a0a3c" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#4b5563" }}>
                  {desc}
                </p>

                {/* Points */}
                <ul className="space-y-2 mb-6">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs" style={{ color: "#4b5563" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#47216b" }} />
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="text-xs font-bold flex items-center gap-1.5 mt-auto"
                  style={{ color: "#47216b" }}
                >
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#1a0a3c" }} className="w-full py-24">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-5">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-sm mb-10" style={{ color: "#c4b8e8" }}>
            Start with our free Growth Diagnostic. In 30 minutes, we'll identify
            exactly which systems will move the needle for your business.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-full text-sm font-bold bg-white transition-opacity hover:opacity-90"
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
