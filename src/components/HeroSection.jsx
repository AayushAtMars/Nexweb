import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ─── Inline keyframe styles ─────────────────────────────────── */
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-18px); }
  }
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(3deg); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes pulse-ring {
    0%   { transform: scale(0.8); opacity: 0.8; }
    100% { transform: scale(1.6); opacity: 0; }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes bar-grow {
    from { height: 0; }
    to   { height: var(--h); }
  }
  @keyframes count-up {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes orb-drift {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33%       { transform: translate(30px, -20px) scale(1.05); }
    66%       { transform: translate(-20px, 15px) scale(0.97); }
  }

  .hero-badge {
    animation: fadeUp 0.6s ease both;
  }
  .hero-h1 {
    animation: fadeUp 0.7s 0.1s ease both;
  }
  .hero-body {
    animation: fadeUp 0.7s 0.2s ease both;
  }
  .hero-features {
    animation: fadeUp 0.7s 0.3s ease both;
  }
  .hero-ctas {
    animation: fadeUp 0.7s 0.4s ease both;
  }
  .hero-stats {
    animation: fadeUp 0.7s 0.5s ease both;
  }
  .hero-card-main {
    animation: float 5s ease-in-out infinite, fadeIn 0.8s 0.6s ease both;
    animation-fill-mode: both;
  }
  .hero-card-roi {
    animation: float-slow 6s 1s ease-in-out infinite, fadeIn 0.8s 0.8s ease both;
    animation-fill-mode: both;
  }
  .hero-card-badge {
    animation: float-slow 7s 0.5s ease-in-out infinite, fadeIn 0.8s 1s ease both;
    animation-fill-mode: both;
  }
  .gradient-text {
    background: linear-gradient(135deg, #a78bfa 0%, #c084fc 40%, #f0abfc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .shimmer-text {
    background: linear-gradient(90deg, #a78bfa, #f0abfc, #a78bfa);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }
  .glass {
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.12);
  }
  .glass-light {
    background: rgba(255,255,255,0.10);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.15);
  }
  .btn-primary {
    background: linear-gradient(135deg, #7c3aed, #a855f7);
    box-shadow: 0 0 30px rgba(139,92,246,0.4);
    transition: all 0.3s ease;
  }
  .btn-primary:hover {
    box-shadow: 0 0 50px rgba(139,92,246,0.7);
    transform: translateY(-2px);
  }
  .btn-outline {
    border: 1px solid rgba(167,139,250,0.4);
    color: #c4b5fd;
    transition: all 0.3s ease;
  }
  .btn-outline:hover {
    border-color: rgba(167,139,250,0.8);
    background: rgba(139,92,246,0.12);
    transform: translateY(-2px);
  }
  .orb1 {
    animation: orb-drift 12s ease-in-out infinite;
  }
  .orb2 {
    animation: orb-drift 15s 3s ease-in-out infinite;
  }
  .bar {
    animation: bar-grow 1.2s cubic-bezier(0.34,1.56,0.64,1) both;
  }
  .stat-num {
    animation: count-up 0.5s ease both;
  }
`;

/* ─── Mini bar chart data ───────────────────────────────────── */
const bars = [
  { h: 35, color: "#7c3aed" },
  { h: 55, color: "#a855f7" },
  { h: 42, color: "#7c3aed" },
  { h: 70, color: "#c084fc" },
  { h: 50, color: "#a855f7" },
  { h: 85, color: "#7c3aed" },
  { h: 65, color: "#c084fc" },
  { h: 90, color: "#a855f7" },
];

const HeroSection = () => {
  return (
    <>
      <style>{styles}</style>

      <section
        className="relative w-full min-h-screen overflow-hidden flex flex-col"
        style={{ backgroundColor: "#070010" }}
      >
        {/* ── Background orbs ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-left orb */}
          <div
            className="orb1 absolute rounded-full"
            style={{
              width: 600,
              height: 600,
              top: -200,
              left: -150,
              background: "radial-gradient(circle, rgba(109,40,217,0.35) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          {/* Bottom-right orb */}
          <div
            className="orb2 absolute rounded-full"
            style={{
              width: 500,
              height: 500,
              bottom: -100,
              right: -100,
              background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          {/* Centre glow */}
          <div
            className="absolute rounded-full"
            style={{
              width: 800,
              height: 400,
              top: "30%",
              left: "30%",
              transform: "translate(-50%,-50%)",
              background: "radial-gradient(ellipse, rgba(88,28,220,0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16 flex-1">

          {/* ════ LEFT COLUMN ════ */}
          <div className="flex-1 max-w-[620px]">

            {/* Badge */}
            <div className="hero-badge flex items-center gap-3 mb-8">
              <div className="relative flex items-center">
                <span
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: "#a855f7",
                    animation: "pulse-ring 1.5s ease-out infinite",
                  }}
                />
                <span
                  className="w-2.5 h-2.5 rounded-full relative z-10"
                  style={{ backgroundColor: "#a855f7" }}
                />
              </div>
              <span
                className="glass rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide"
                style={{ color: "#c4b5fd" }}
              >
                ⚡ Integrated Growth Systems · Trusted by 500+ Businesses
              </span>
            </div>

            {/* Heading */}
            <h1
              className="hero-h1 font-bold leading-[1.08] mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)", color: "#ffffff" }}
            >
              Scale{" "}
              <span className="gradient-text font-light italic">Without</span>
              <br />
              Chaos
            </h1>

            {/* Body */}
            <p
              className="hero-body text-base leading-relaxed mb-8"
              style={{ color: "rgba(196,181,253,0.75)", maxWidth: 500 }}
            >
              We build{" "}
              <span style={{ color: "#e9d5ff", fontWeight: 600 }}>
                integrated digital ecosystems
              </span>{" "}
              that replace fragmented tactics with predictable, automated growth
              systems — for businesses ready to move from effort to{" "}
              <em style={{ color: "#e9d5ff" }}>scalable infrastructure.</em>
            </p>

            {/* Feature chips */}
            <div className="hero-features flex flex-wrap gap-3 mb-10">
              {[
                { icon: "🤖", label: "System-Level Automation" },
                { icon: "🔒", label: "Secure & Scalable" },
                { icon: "📈", label: "Measurable ROI" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="glass flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                  style={{ color: "#e9d5ff" }}
                >
                  <span>{icon}</span>
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-ctas flex flex-wrap items-center gap-4 mb-14">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white"
              >
                Start Growth Diagnostic
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/solutions"
                className="btn-outline inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold"
              >
                Explore Our Systems
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats flex items-center gap-0 divide-x" style={{ divideColor: "rgba(167,139,250,0.2)" }}>
              {[
                { value: "500+", label: "Systems Deployed" },
                { value: "3.2x", label: "Avg. Efficiency Gain" },
                { value: "97%", label: "Client Retention" },
              ].map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`${i > 0 ? "pl-8" : ""} ${i < 2 ? "pr-8" : ""}`}
                  style={{ borderColor: "rgba(167,139,250,0.2)" }}
                >
                  <p
                    className="stat-num text-3xl font-bold mb-0.5"
                    style={{
                      color: "#ffffff",
                      animationDelay: `${0.5 + i * 0.1}s`,
                    }}
                  >
                    {value}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(196,181,253,0.6)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ════ RIGHT COLUMN — Floating Dashboard Cards ════ */}
          <div className="flex-1 relative flex items-center justify-center min-h-[520px] w-full">

            {/* ── Main analytics card ── */}
            <div
              className="hero-card-main glass-light rounded-3xl p-6 absolute"
              style={{
                width: 320,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs font-semibold" style={{ color: "rgba(196,181,253,0.6)" }}>
                    Growth Performance
                  </p>
                  <p className="text-xl font-bold text-white mt-0.5">
                    +3.2x Revenue
                  </p>
                </div>
                <div
                  className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(74,222,128,0.15)", color: "#4ade80" }}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  +142%
                </div>
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-2 h-24 mb-4">
                {bars.map(({ h, color }, i) => (
                  <div key={i} className="flex-1 rounded-t-md bar" style={{ height: `${h}%`, backgroundColor: color, "--h": `${h}%`, animationDelay: `${0.8 + i * 0.08}s` }} />
                ))}
              </div>

              {/* Mini legend */}
              <div className="flex justify-between text-xs" style={{ color: "rgba(196,181,253,0.5)" }}>
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map(m => (
                  <span key={m}>{m}</span>
                ))}
              </div>

              {/* Divider */}
              <div className="my-4 h-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

              {/* Footer metrics */}
              <div className="flex justify-between">
                {[
                  { label: "Leads", value: "1,240" },
                  { label: "Conversions", value: "386" },
                  { label: "Deals Closed", value: "94" },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <p className="text-sm font-bold text-white">{value}</p>
                    <p className="text-xs" style={{ color: "rgba(196,181,253,0.5)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── ROI card (top-right) ── */}
            <div
              className="hero-card-roi glass rounded-2xl p-4 absolute"
              style={{ width: 160, top: "4%", right: "4%", zIndex: 3 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(74,222,128,0.2)" }}>
                  <svg className="w-3.5 h-3.5" style={{ color: "#4ade80" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-xs font-semibold" style={{ color: "rgba(196,181,253,0.7)" }}>
                  Avg ROI
                </span>
              </div>
              <p className="text-2xl font-bold text-white">320%</p>
              <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "78%",
                    background: "linear-gradient(90deg, #7c3aed, #4ade80)",
                  }}
                />
              </div>
              <p className="text-xs mt-1" style={{ color: "rgba(196,181,253,0.45)" }}>Across all clients</p>
            </div>

            {/* ── Systems deployed card (bottom-left) ── */}
            <div
              className="hero-card-badge glass rounded-2xl p-4 absolute"
              style={{ width: 172, bottom: "6%", left: "2%", zIndex: 3 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-base"
                  style={{ backgroundColor: "rgba(139,92,246,0.25)" }}
                >
                  🚀
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Systems Live</p>
                  <p className="text-xs" style={{ color: "rgba(196,181,253,0.5)" }}>This quarter</p>
                </div>
              </div>
              {/* Avatars */}
              <div className="flex items-center">
                {["#7c3aed", "#a855f7", "#c084fc", "#e879f9"].map((bg, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: bg, borderColor: "rgba(255,255,255,0.1)", marginLeft: i > 0 ? -8 : 0 }}
                  >
                    {["T", "S", "F", "+"][i]}
                  </div>
                ))}
                <p className="ml-2 text-xs font-bold text-white">500+</p>
              </div>
            </div>

            {/* ── Automation status pill (top-left) ── */}
            <div
              className="hero-card-roi glass rounded-2xl px-4 py-3 absolute flex items-center gap-3"
              style={{ top: "12%", left: "0%", zIndex: 3 }}
            >
              <div className="relative flex-shrink-0">
                <span
                  className="absolute w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#4ade80", animation: "pulse-ring 1.8s ease-out infinite" }}
                />
                <span className="w-2.5 h-2.5 rounded-full block relative z-10" style={{ backgroundColor: "#4ade80" }} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Automation Active</p>
                <p className="text-xs" style={{ color: "rgba(196,181,253,0.5)" }}>All systems running</p>
              </div>
            </div>

            {/* ── Efficiency ring (bottom-right) ── */}
            <div
              className="hero-card-badge glass rounded-2xl p-4 absolute text-center"
              style={{ width: 140, bottom: "10%", right: "2%", zIndex: 3 }}
            >
              <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto mb-2">
                <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                <circle
                  cx="40" cy="40" r="30"
                  fill="none"
                  stroke="url(#grad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="188.5"
                  strokeDashoffset="6"
                  transform="rotate(-90 40 40)"
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                </defs>
                <text x="40" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">97%</text>
              </svg>
              <p className="text-xs font-semibold text-white">Client Retention</p>
            </div>

            {/* Decorative glow behind cards */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 350,
                height: 350,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(109,40,217,0.2) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
          </div>
        </div>

        {/* ── Bottom "Systems, Not Services" teaser ── */}
        <div
          className="relative z-10 w-full border-t py-10"
          style={{ borderColor: "rgba(167,139,250,0.12)", backgroundColor: "rgba(255,255,255,0.03)" }}
        >
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16">
            <div className="flex-shrink-0">
              <h2 className="text-2xl font-bold text-white">Systems, Not Services</h2>
              <p className="text-sm mt-1" style={{ color: "rgba(196,181,253,0.5)" }}>Your Digital Growth Partner</p>
            </div>
            <div className="flex-1 h-px hidden md:block" style={{ backgroundColor: "rgba(167,139,250,0.15)" }} />
            <p className="text-sm leading-relaxed max-w-xl" style={{ color: "rgba(196,181,253,0.65)" }}>
              We don't run campaigns. We don't build websites in isolation.{" "}
              <span className="text-white font-semibold">Godigitify</span> architects{" "}
              <span className="text-white font-semibold">integrated digital ecosystems</span> — connecting your brand, technology, automation, and data into one growth-focused system.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
