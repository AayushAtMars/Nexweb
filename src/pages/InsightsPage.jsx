import React, { useState } from "react";
import Layout from "../layouts/Layout";
import imgBranding from "../assets/blog_branding.png";
import imgMarketing from "../assets/blog_marketing.png";
import imgSeo from "../assets/blog_seo.png";

const allPosts = [
  { tag: "Branding", date: "12 May 2025", title: "Why Your Brand Is the Foundation of Every Growth System", excerpt: "Before automation, before ads, before funnels — your brand is the signal that determines whether anyone pays attention.", img: imgBranding, readTime: "5 min read" },
  { tag: "Digital Marketing", date: "04 May 2025", title: "The Hidden Cost of Disconnected Marketing Channels", excerpt: "Running campaigns in silos is costing you more than you think. We break down the compounding inefficiency and how to fix it.", img: imgMarketing, readTime: "7 min read" },
  { tag: "SEO", date: "28 Apr 2025", title: "SEO in 2025: Why Infrastructure Beats Content Volume", excerpt: "The brands winning on search in 2025 aren't publishing more — they're building better systems. Here's what the data tells us.", img: imgSeo, readTime: "6 min read" },
  { tag: "Automation", date: "20 Apr 2025", title: "How to Build a Lead Nurturing System That Works While You Sleep", excerpt: "Manual follow-up is a growth ceiling. Here's how to build automation sequences that qualify and convert leads on autopilot.", img: imgMarketing, readTime: "8 min read" },
  { tag: "Branding", date: "14 Apr 2025", title: "Positioning Strategy: How to Own a Category in a Crowded Market", excerpt: "The most successful brands don't compete harder — they reframe the category. A guide to positioning that creates unfair advantage.", img: imgBranding, readTime: "6 min read" },
  { tag: "SEO", date: "07 Apr 2025", title: "Technical SEO Foundations Every Growing Business Needs", excerpt: "Content without technical infrastructure is like pouring water into a leaking bucket. Here's the foundation that makes SEO actually work.", img: imgSeo, readTime: "5 min read" },
];

const tags = ["All", "Branding", "Digital Marketing", "SEO", "Automation"];

const InsightsPage = () => {
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? allPosts : allPosts.filter(p => p.tag === activeTag);
  const featured = allPosts[0];

  return (
    <Layout>
      {/* Hero */}
      <section style={{ backgroundColor: "#f5f4fc" }} className="w-full py-28">
        <div className="max-w-7xl mx-auto px-8">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#47216b" }}>
            Insights
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: "#1a0a3c" }}>
            From the <span className="font-light italic">Growth Lab</span>
          </h1>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full bg-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#47216b" }}>Featured</p>
          <div className="rounded-3xl overflow-hidden flex flex-col lg:flex-row border" style={{ borderColor: "#ede8f8" }}>
            <div className="lg:w-1/2 h-72 lg:h-auto">
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-1/2 p-12 flex flex-col justify-center" style={{ backgroundColor: "#faf8ff" }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "#ede8f8", color: "#47216b" }}>
                  {featured.tag}
                </span>
                <span className="text-xs" style={{ color: "#9ca3af" }}>{featured.date} · {featured.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a0a3c" }}>{featured.title}</h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#4b5563" }}>{featured.excerpt}</p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "#47216b" }}>
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className="px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200"
                style={
                  activeTag === tag
                    ? { backgroundColor: "#47216b", color: "#fff", borderColor: "#47216b" }
                    : { backgroundColor: "transparent", color: "#47216b", borderColor: "#47216b" }
                }
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(({ tag, date, title, excerpt, img, readTime }, i) => (
              <article key={i} className="bg-white rounded-2xl overflow-hidden border flex flex-col hover:shadow-lg transition-shadow duration-300" style={{ borderColor: "#ede8f8" }}>
                <div className="h-52 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "#ede8f8", color: "#47216b" }}>{tag}</span>
                    <span className="text-xs" style={{ color: "#9ca3af" }}>{readTime}</span>
                  </div>
                  <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>{date}</p>
                  <h3 className="text-base font-bold leading-snug mb-3 flex-1" style={{ color: "#1a0a3c" }}>{title}</h3>
                  <p className="text-xs leading-relaxed mb-5" style={{ color: "#4b5563" }}>{excerpt}</p>
                  <a href="#" className="text-xs font-bold flex items-center gap-1.5" style={{ color: "#47216b" }}>
                    Read Article
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ backgroundColor: "#f5f4fc" }} className="w-full py-20">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#47216b" }}>Stay Sharp</span>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1a0a3c" }}>Growth Insights, Straight to Your Inbox</h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#4b5563" }}>
            One practical insight every fortnight. No fluff. No spam. Unsubscribe any time.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full text-sm border outline-none focus:ring-2"
              style={{ borderColor: "#ddd4f0", ringColor: "#47216b" }}
            />
            <button
              className="px-6 py-3 rounded-full text-sm font-bold text-white flex-shrink-0"
              style={{ backgroundColor: "#47216b" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InsightsPage;
