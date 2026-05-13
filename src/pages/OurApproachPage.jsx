import React from "react";
import Layout from "../layouts/Layout";

const principles = [
  { num: "01", title: "Systems Over Tactics", desc: "We never start with execution. Every engagement begins with understanding the full picture — the business model, the customer journey, and the growth bottlenecks. Only then do we architect a system." },
  { num: "02", title: "Integration Over Isolation", desc: "Disconnected marketing channels and tools create friction and waste. We connect every element into one unified system so data flows, automation works, and results compound." },
  { num: "03", title: "Infrastructure Over Effort", desc: "The goal is never to make you dependent on more execution hours. We build infrastructure that works continuously — freeing your team to focus on strategy and product." },
  { num: "04", title: "Data Over Intuition", desc: "Every decision we make is grounded in data. From which channels to invest in to when to scale — we let the numbers guide us, not gut feel." },
];

const values = [
  { icon: "🎯", title: "Radical Clarity", desc: "We communicate with complete transparency — about what we're building, why, and what results to expect." },
  { icon: "⚡", title: "Speed with Precision", desc: "We move fast on execution, but never at the cost of quality or strategic alignment." },
  { icon: "🔁", title: "Continuous Improvement", desc: "Every system we build is designed to be measured, tested, and improved — indefinitely." },
  { icon: "🤝", title: "True Partnership", desc: "We work as an extension of your team, not an external vendor. Your goals are our goals." },
];

const OurApproachPage = () => (
  <Layout>
    {/* Hero */}
    <section style={{ backgroundColor: "#f5f4fc" }} className="w-full py-28">
      <div className="max-w-7xl mx-auto px-8">
        <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#47216b" }}>How We Think</span>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: "#1a0a3c" }}>
          Our Approach to <br /><span className="font-light italic">Digital Growth</span>
        </h1>
        <p className="text-base max-w-2xl leading-relaxed" style={{ color: "#4b5563" }}>
          Sustainable growth doesn't come from running more campaigns — it comes from building better systems. Here's how we think about the work.
        </p>
      </div>
    </section>

    {/* Principles */}
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden border" style={{ backgroundColor: "#ede8f8", borderColor: "#ede8f8" }}>
          {principles.map(({ num, title, desc }) => (
            <div key={num} className="bg-white p-10">
              <p className="text-5xl font-bold mb-6" style={{ color: "#ede8f8" }}>{num}</p>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#1a0a3c" }}>{title}</h3>
              <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: "#47216b" }} />
              <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process Timeline */}
    <section style={{ backgroundColor: "#f5f4fc" }} className="w-full py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#47216b" }}>The Process</span>
          <h2 className="text-4xl font-bold" style={{ color: "#1a0a3c" }}>From Diagnosis to Scale</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {[
            { step: "01", title: "Growth Diagnostic", desc: "Audit every layer of your current digital infrastructure and identify the highest-leverage gaps." },
            { step: "02", title: "System Blueprint", desc: "Design a custom ecosystem architecture mapping all tools, automations, integrations, and channels." },
            { step: "03", title: "Build & Launch", desc: "Execute the build phase — website, automations, campaigns — all integrated from day one." },
            { step: "04", title: "Measure & Scale", desc: "Monitor performance, run experiments, and systematically scale what the data confirms works." },
          ].map(({ step, title, desc }) => (
            <div key={step}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 text-white font-bold text-sm" style={{ backgroundColor: "#47216b" }}>
                {step}
              </div>
              <h3 className="text-lg font-bold mb-3 text-center md:text-left" style={{ color: "#1a0a3c" }}>{title}</h3>
              <p className="text-sm leading-relaxed text-center md:text-left" style={{ color: "#4b5563" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#47216b" }}>How We Work Together</span>
          <h2 className="text-4xl font-bold" style={{ color: "#1a0a3c" }}>Our Working Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-8 text-center border" style={{ borderColor: "#ede8f8", backgroundColor: "#faf8ff" }}>
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-base font-bold mb-3" style={{ color: "#1a0a3c" }}>{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#4b5563" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ backgroundColor: "#1a0a3c" }} className="w-full py-20 text-center">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-white mb-5">Ready to Build Your System?</h2>
        <p className="text-sm mb-10" style={{ color: "#c4b8e8" }}>Start with a free Growth Diagnostic and walk away with a clear picture of where to focus first.</p>
        <a href="/contact" className="inline-block px-8 py-4 rounded-full text-sm font-bold bg-white hover:opacity-90 transition-opacity" style={{ color: "#1a0a3c" }}>
          Book Your Diagnostic
        </a>
      </div>
    </section>
  </Layout>
);

export default OurApproachPage;
