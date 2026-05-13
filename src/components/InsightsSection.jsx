import React, { useState } from "react";
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
  },
  {
    tag: "Digital Marketing",
    date: "04 May 2025",
    title: "The Hidden Cost of Disconnected Marketing Channels",
    excerpt:
      "Running campaigns in silos is costing you more than you think. We break down the compounding inefficiency of disconnected digital marketing and how to fix it.",
    img: imgMarketing,
    readTime: "7 min read",
  },
  {
    tag: "SEO",
    date: "28 Apr 2025",
    title: "SEO in 2025: Why Infrastructure Beats Content Volume",
    excerpt:
      "The brands winning on search in 2025 aren't publishing more — they're building better systems. Here's what the data tells us about the new SEO playbook.",
    img: imgSeo,
    readTime: "6 min read",
  },
];

const InsightsSection = () => {
  const [start, setStart] = useState(0);
  const visible = 3;

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(posts.length - visible, s + 1));

  return (
    <section style={{ backgroundColor: "#f5f4fc" }} className="w-full py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: "#47216b" }}
            >
              Insights
            </span>
            <h2
              className="text-4xl font-bold"
              style={{ color: "#1a0a3c" }}
            >
              From the Growth Lab
            </h2>
          </div>
          {/* Nav arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={start === 0}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all disabled:opacity-30"
              style={{ borderColor: "#47216b", color: "#47216b" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={start >= posts.length - visible}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all disabled:opacity-30"
              style={{ borderColor: "#47216b", color: "#47216b" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(start, start + visible).map(({ tag, date, title, excerpt, img, readTime }, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#ede8f8", color: "#47216b" }}
                  >
                    {tag}
                  </span>
                  <span className="text-xs" style={{ color: "#9ca3af" }}>
                    {readTime}
                  </span>
                </div>
                <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>
                  {date}
                </p>
                <h3
                  className="text-base font-bold leading-snug mb-3"
                  style={{ color: "#1a0a3c" }}
                >
                  {title}
                </h3>
                <p
                  className="text-xs leading-relaxed flex-1 mb-5"
                  style={{ color: "#4b5563" }}
                >
                  {excerpt}
                </p>
                <a
                  href="#"
                  className="text-xs font-semibold flex items-center gap-1.5"
                  style={{ color: "#47216b" }}
                >
                  Read Article
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold border px-6 py-3 rounded-full transition-all hover:bg-white"
            style={{ borderColor: "#47216b", color: "#47216b" }}
          >
            View All Insights
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
