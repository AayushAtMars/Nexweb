import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgBranding from "../assets/blog_branding.png";
import imgMarketing from "../assets/blog_marketing.png";
import imgSeo from "../assets/blog_seo.png";

const posts = [
  {
    tag: "Branding",
    date: "12 May 2025",
    title: "Why Your Brand Is the Foundation of Every Growth System",
    excerpt:
      "Before automation, before ads, before funnels — your brand is the signal that determines whether anyone pays attention. Here's how to build one that works.",
    img: imgBranding,
    readTime: "5 min read",
    featured: true,
  },
  {
    tag: "Digital Marketing",
    date: "04 May 2025",
    title: "The Hidden Cost of Disconnected Marketing Channels",
    excerpt:
      "Running campaigns in silos is costing you more than you think. We break down the compounding inefficiency and how to fix it.",
    img: imgMarketing,
    readTime: "7 min read",
    featured: false,
  },
  {
    tag: "SEO",
    date: "28 Apr 2025",
    title: "SEO in 2025: Why Infrastructure Beats Content Volume",
    excerpt:
      "The brands winning on search in 2025 aren't publishing more — they're building better systems.",
    img: imgSeo,
    readTime: "6 min read",
    featured: false,
  },
];

const tagColors = {
  Branding:          { bg: "#ede8f8", text: "#47216b" },
  "Digital Marketing": { bg: "#e8f0fe", text: "#1a3c8f" },
  SEO:               { bg: "#e8faf0", text: "#166534" },
  Automation:        { bg: "#fef3e8", text: "#92400e" },
};

const ClockIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
    fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/* ── Featured large card ─────────────────────────────────────── */
const FeaturedCard = ({ tag, date, title, excerpt, img, readTime }) => {
  const color = tagColors[tag] ?? { bg: "#ede8f8", text: "#47216b" };
  return (
    <article
      className="group relative rounded-3xl overflow-hidden flex flex-col lg:flex-row border transition-all duration-500 hover:-translate-y-1"
      style={{
        borderColor: "#e8e0f5",
        boxShadow: "0 4px 24px rgba(71,33,107,0.06)",
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 16px 48px rgba(71,33,107,0.14)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 24px rgba(71,33,107,0.06)"}
    >
      {/* Image half */}
      <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden flex-shrink-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,10,60,0.55) 0%, rgba(71,33,107,0.25) 60%, transparent 100%)",
          }}
        />
        {/* Featured pill */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm"
            style={{ backgroundColor: "rgba(71,33,107,0.85)", color: "#fff" }}
          >
            ✦ Featured
          </span>
        </div>
      </div>

      {/* Text half */}
      <div className="flex flex-col justify-center p-10 lg:p-12 bg-white flex-1">
        {/* Meta row */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: color.bg, color: color.text }}
          >
            {tag}
          </span>
          <span className="flex items-center gap-1 text-xs" style={{ color: "#9ca3af" }}>
            <ClockIcon /> {readTime}
          </span>
          <span className="text-xs" style={{ color: "#c4b5fd" }}>·</span>
          <span className="text-xs" style={{ color: "#9ca3af" }}>{date}</span>
        </div>

        <h3
          className="text-2xl font-bold leading-snug mb-4"
          style={{ color: "#1a0a3c" }}
        >
          {title}
        </h3>

        {/* Accent line */}
        <div className="w-10 h-0.5 mb-4 rounded-full" style={{ backgroundColor: "#47216b" }} />

        <p className="text-sm leading-relaxed mb-8" style={{ color: "#4b5563" }}>
          {excerpt}
        </p>

        <Link
          to="/insights"
          className="group inline-flex items-center gap-2 text-sm font-bold self-start px-5 py-2.5 rounded-full border transition-all duration-300 hover:text-white"
          style={{ borderColor: "#47216b", color: "#47216b" }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#47216b"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#47216b"; }}
        >
          Read Article <ArrowIcon />
        </Link>
      </div>
    </article>
  );
};

/* ── Regular card ────────────────────────────────────────────── */
const PostCard = ({ tag, date, title, excerpt, img, readTime }) => {
  const color = tagColors[tag] ?? { bg: "#ede8f8", text: "#47216b" };
  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden flex flex-col border transition-all duration-400 hover:-translate-y-1.5"
      style={{
        borderColor: "#e8e0f5",
        boxShadow: "0 2px 16px rgba(71,33,107,0.05)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(71,33,107,0.12)";
        e.currentTarget.style.borderColor = "#c4b5fd";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "0 2px 16px rgba(71,33,107,0.05)";
        e.currentTarget.style.borderColor = "#e8e0f5";
      }}
    >
      {/* Image with gradient overlay */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
          style={{ transition: "transform 0.6s ease" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,10,60,0.6) 0%, transparent 55%)",
          }}
        />
        {/* Tag overlaid on image */}
        <span
          className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
          style={{ backgroundColor: color.bg + "ee", color: color.text }}
        >
          {tag}
        </span>
        {/* Read time overlaid */}
        <span
          className="absolute top-3 right-3 flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm"
          style={{ backgroundColor: "rgba(26,10,60,0.65)", color: "#e9d5ff" }}
        >
          <ClockIcon /> {readTime}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>{date}</p>
        <h3
          className="text-base font-bold leading-snug mb-3 flex-1"
          style={{ color: "#1a0a3c" }}
        >
          {title}
        </h3>
        <p className="text-xs leading-relaxed mb-5" style={{ color: "#6b7280" }}>
          {excerpt}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "#f3f0fb" }}>
          <Link
            to="/insights"
            className="group flex items-center gap-1.5 text-xs font-bold transition-colors hover:gap-2.5"
            style={{ color: "#47216b", transition: "gap 0.2s ease, color 0.2s ease" }}
          >
            Read Article <ArrowIcon />
          </Link>
          <div className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: "#f5f4fc" }}>
            <svg className="w-3.5 h-3.5" style={{ color: "#47216b" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};

/* ── Section ─────────────────────────────────────────────────── */
const InsightsSection = () => {
  const [featured, ...rest] = posts;

  return (
    <section style={{ backgroundColor: "#f5f4fc" }} className="w-full py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            {/* Label with decorative dash */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px" style={{ backgroundColor: "#47216b" }} />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#47216b" }}
              >
                Insights
              </span>
            </div>
            <h2 className="text-4xl font-bold" style={{ color: "#1a0a3c" }}>
              From the{" "}
              <span className="font-light italic" style={{ color: "#47216b" }}>
                Growth Lab
              </span>
            </h2>
            <p className="text-sm mt-3 max-w-sm" style={{ color: "#6b7280" }}>
              Practical thinking on systems, growth, and what actually moves the needle.
            </p>
          </div>

          {/* View all + arrows */}
          <div className="flex items-center gap-4">
            <Link
              to="/insights"
              className="text-sm font-semibold flex items-center gap-2 transition-colors hover:opacity-80"
              style={{ color: "#47216b" }}
            >
              View All Insights
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Featured card ── */}
        <div className="mb-8">
          <FeaturedCard {...featured} />
        </div>

        {/* ── Two smaller cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {rest.map((post, i) => (
            <PostCard key={i} {...post} />
          ))}
        </div>

        {/* ── Newsletter strip ── */}
        <div
          className="rounded-3xl px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, #2d1470 0%, #47216b 100%)",
          }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#c4b5fd" }}>
              Stay Sharp
            </p>
            <h3 className="text-xl font-bold text-white">
              Growth insights, straight to your inbox
            </h3>
            <p className="text-sm mt-1" style={{ color: "#c4b5fd" }}>
              One practical insight every fortnight. No fluff. No spam.
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto flex-shrink-0">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-64 px-5 py-3 rounded-full text-sm outline-none border-0 bg-white/15 text-white placeholder-white/50 backdrop-blur-sm focus:bg-white/20 transition-colors"
            />
            <button
              className="px-5 py-3 rounded-full text-sm font-bold text-purple-900 flex-shrink-0 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#ffffff" }}
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InsightsSection;
