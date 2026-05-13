import React, { useState } from "react";
import Layout from "../layouts/Layout";

const solutions = [
  {
    num: "01",
    title: "Growth Diagnostic",
    subtitle: "Start here — always.",
    desc: "A structured 30-minute session where we audit your brand, tech stack, marketing systems, and data flow. You leave with a prioritised roadmap of the highest-leverage changes available to your business right now.",
    outcomes: ["Clear gap analysis", "Prioritised action plan", "Infrastructure recommendations", "No obligation"],
    highlight: true,
  },
  {
    num: "02",
    title: "Lead Generation Systems",
    subtitle: "Predictable pipeline. Automated.",
    desc: "We design and build end-to-end lead generation infrastructure — from ad creative and landing pages through to CRM automation and follow-up sequences — all engineered to generate qualified leads on autopilot.",
    outcomes: ["Paid + organic lead channels", "Landing page build", "CRM & automation setup", "Reporting dashboard"],
    highlight: false,
  },
  {
    num: "03",
    title: "E-Commerce Infrastructure",
    subtitle: "Build a revenue engine, not a shop.",
    desc: "For established e-commerce brands ready to scale beyond ad spend. We build the retention, automation, and content systems that turn first-time buyers into lifetime customers — and scale average order value systematically.",
    outcomes: ["Email retention flows", "Post-purchase automation", "Content-to-conversion system", "LTV optimisation"],
    highlight: false,
  },
  {
    num: "04",
    title: "Brand & Content Engine",
    subtitle: "Authority that compounds.",
    desc: "We build the brand infrastructure and content systems that position you as the go-to authority in your space — creating a self-sustaining content engine that drives awareness, trust, and inbound enquiries.",
    outcomes: ["Brand positioning strategy", "Content system design", "SEO & distribution", "Authority building"],
    highlight: false,
  },
  {
    num: "05",
    title: "Analytics & Reporting",
    subtitle: "Decisions driven by data, not gut feel.",
    desc: "We implement the tracking, dashboarding, and reporting infrastructure that gives you full visibility over your growth systems — so you always know what's working, what isn't, and where to invest next.",
    outcomes: ["GA4 & tracking setup", "Custom dashboards", "Attribution modelling", "Monthly insights"],
    highlight: false,
  },
];

const SolutionsPage = () => {
  const [active, setActive] = useState(0);
  const s = solutions[active];

  return (
    <Layout>
      {/* Hero */}
      <section style={{ backgroundColor: "#f5f4fc" }} className="w-full py-28">
        <div className="max-w-7xl mx-auto px-8">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#47216b" }}>
            Solutions
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: "#1a0a3c" }}>
              The Right System <br />
              <span className="font-light italic">for Your Stage</span>
            </h1>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: "#4b5563" }}>
              We package our capabilities into solution sets designed around specific business outcomes — so you invest in exactly what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Solutions Explorer */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-12">
          {/* Tab list */}
          <div className="lg:w-72 flex-shrink-0 flex flex-col gap-2">
            {solutions.map((sol, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="text-left px-5 py-4 rounded-xl border transition-all duration-200"
                style={
                  active === i
                    ? { backgroundColor: "#47216b", borderColor: "#47216b", color: "#fff" }
                    : { backgroundColor: "#fff", borderColor: "#ede8f8", color: "#1a0a3c" }
                }
              >
                <span
                  className="text-xs font-bold block mb-0.5"
                  style={{ color: active === i ? "#c4b8e8" : "#9ca3af" }}
                >
                  {sol.num}
                </span>
                <span className="text-sm font-semibold">{sol.title}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            className="flex-1 rounded-3xl p-10 border"
            style={{ borderColor: "#ede8f8", backgroundColor: "#f5f4fc" }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#47216b" }}>
              {s.subtitle}
            </span>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a0a3c" }}>
              {s.title}
            </h2>
            <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: "#47216b" }} />
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#4b5563" }}>
              {s.desc}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#47216b" }}>
              What's Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {s.outcomes.map((o) => (
                <div key={o} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#47216b" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs font-medium" style={{ color: "#1a0a3c" }}>{o}</span>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-block px-7 py-3.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#47216b" }}
            >
              Enquire About This Solution
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#1a0a3c" }} className="w-full py-20 text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-white mb-5">
            Need a Custom Solution?
          </h2>
          <p className="text-sm mb-10" style={{ color: "#c4b8e8" }}>
            Some businesses need a bespoke approach. Let's talk about what you're building and design a system that fits.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-full text-sm font-bold bg-white hover:opacity-90 transition-opacity"
            style={{ color: "#1a0a3c" }}
          >
            Talk to Our Team
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionsPage;
