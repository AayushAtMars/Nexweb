import React, { useState } from "react";
import imgUniques from "../assets/portfolio_uniques.png";
import imgSviet from "../assets/portfolio_sviet.png";

const projects = [
  {
    tag: "Real Estate · Web & Automation",
    title: "The Uniques",
    desc: "Built a full lead generation and CRM automation system for a premium real estate brand. Reduced manual follow-up time by 80% and increased qualified leads by 3.4x in 90 days.",
    results: [
      { value: "3.4x", label: "Lead Growth" },
      { value: "80%", label: "Less Manual Work" },
      { value: "90", label: "Days to Result" },
    ],
    img: imgUniques,
    bg: "#1a0a3c",
    light: false,
  },
  {
    tag: "Education · Brand & Digital",
    title: "SVIET",
    desc: "Redesigned the entire digital presence of a leading university — from brand identity to a full-stack web platform and a content-led admission funnel that drove a 2.8x increase in enquiries.",
    results: [
      { value: "2.8x", label: "Enquiry Growth" },
      { value: "60%", label: "Bounce Rate Drop" },
      { value: "#1", label: "Regional SEO Rank" },
    ],
    img: imgSviet,
    bg: "#f5f4fc",
    light: true,
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: "#47216b" }}
            >
              Our Work
            </span>
            <h2
              className="text-4xl font-bold"
              style={{ color: "#1a0a3c" }}
            >
              Case Studies
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold flex items-center gap-2"
            style={{ color: "#47216b" }}
          >
            View All Work
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Tab selectors */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200"
              style={
                active === i
                  ? { backgroundColor: "#47216b", color: "#fff", borderColor: "#47216b" }
                  : { backgroundColor: "transparent", color: "#47216b", borderColor: "#47216b" }
              }
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Active Project Card */}
        {projects.map(
          ({ tag, title, desc, results, img, bg, light }, i) =>
            active === i && (
              <div
                key={i}
                className="rounded-3xl overflow-hidden flex flex-col lg:flex-row"
                style={{ backgroundColor: bg }}
              >
                {/* Left: text */}
                <div className="flex-1 p-12 flex flex-col justify-center">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase mb-4 block"
                    style={{ color: light ? "#47216b" : "#c4b8e8" }}
                  >
                    {tag}
                  </span>
                  <h3
                    className="text-3xl font-bold mb-5"
                    style={{ color: light ? "#1a0a3c" : "#ffffff" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-10"
                    style={{ color: light ? "#4b5563" : "#c4b8e8" }}
                  >
                    {desc}
                  </p>
                  {/* Results */}
                  <div className="flex gap-10">
                    {results.map(({ value, label }) => (
                      <div key={label}>
                        <p
                          className="text-3xl font-bold"
                          style={{ color: light ? "#47216b" : "#ffffff" }}
                        >
                          {value}
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: light ? "#6b7280" : "#c4b8e8" }}
                        >
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="mt-10 inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: light ? "#47216b" : "#ffffff" }}
                  >
                    View Case Study
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>

                {/* Right: image */}
                <div className="flex-1 min-h-[360px]">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
