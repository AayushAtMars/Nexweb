import React, { useState } from "react";
import Layout from "../layouts/Layout";
import imgBranding from "../assets/blog_branding.png";
import imgMarketing from "../assets/blog_marketing.png";
import imgSeo from "../assets/blog_seo.png";

const allPosts = [
  { tag: "Branding",          date: "12 May 2025", title: "Why Your Brand Is the Foundation of Every Growth System",       excerpt: "Before automation, before ads, before funnels — your brand is the signal that determines whether anyone pays attention.", img: imgBranding, readTime: "5 min read" },
  { tag: "Digital Marketing", date: "04 May 2025", title: "The Hidden Cost of Disconnected Marketing Channels",             excerpt: "Running campaigns in silos is costing you more than you think. We break down the compounding inefficiency and how to fix it.", img: imgMarketing, readTime: "7 min read" },
  { tag: "SEO",               date: "28 Apr 2025", title: "SEO in 2025: Why Infrastructure Beats Content Volume",           excerpt: "The brands winning on search in 2025 aren't publishing more — they're building better systems.", img: imgSeo, readTime: "6 min read" },
  { tag: "Automation",        date: "20 Apr 2025", title: "How to Build a Lead Nurturing System That Works While You Sleep", excerpt: "Manual follow-up is a growth ceiling. Here's how to build automation sequences that qualify and convert leads on autopilot.", img: imgMarketing, readTime: "8 min read" },
  { tag: "Branding",          date: "14 Apr 2025", title: "Positioning Strategy: How to Own a Category in a Crowded Market", excerpt: "The most successful brands don't compete harder — they reframe the category entirely.", img: imgBranding, readTime: "6 min read" },
  { tag: "SEO",               date: "07 Apr 2025", title: "Technical SEO Foundations Every Growing Business Needs",         excerpt: "Content without technical infrastructure is like pouring water into a leaking bucket.", img: imgSeo, readTime: "5 min read" },
];

const tags = ["All", "Branding", "Digital Marketing", "SEO", "Automation"];

const tagMeta = {
  Branding:           { bg: "#ede8f8", text: "#47216b" },
  "Digital Marketing":{ bg: "#dbeafe", text: "#1e40af" },
  SEO:                { bg: "#dcfce7", text: "#166534" },
  Automation:         { bg: "#fef3c7", text: "#92400e" },
};

const inlineStyles = `
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .iu-fade { animation: fadeUp 0.6s ease both; }
  .iu-fade-1 { animation: fadeUp 0.6s 0.1s ease both; }
  .iu-fade-2 { animation: fadeUp 0.6s 0.2s ease both; }
  .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
  .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(71,33,107,0.13); border-color: #c4b5fd !important; }
  .img-zoom img { transition: transform 0.6s ease; }
  .img-zoom:hover img { transform: scale(1.06); }
  .tag-chip { transition: background 0.2s, color 0.2s, transform 0.2s; }
  .tag-chip:hover { transform: translateY(-1px); }
`;

/* ── Clock icon ── */
const Clock = () => (
  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

/* ── Arrow icon ── */
const Arrow = () => (
  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/* ── Featured hero card ── */
const FeaturedCard = ({ tag, date, title, excerpt, img, readTime }) => {
  const c = tagMeta[tag] ?? { bg: "#ede8f8", text: "#47216b" };
  return (
    <article className="group relative rounded-3xl overflow-hidden flex flex-col lg:flex-row" style={{ boxShadow: "0 8px 40px rgba(71,33,107,0.10)" }}>
      {/* Image */}
      <div className="img-zoom relative lg:w-[52%] h-72 lg:h-auto overflow-hidden flex-shrink-0">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(26,10,60,0.6) 0%, rgba(71,33,107,0.2) 60%, transparent 100%)" }} />
        {/* Floating "Featured" badge */}
        <div className="absolute top-5 left-5">
          <span className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full text-white" style={{ background: "linear-gradient(135deg,#47216b,#7c3aed)", boxShadow: "0 4px 14px rgba(124,58,237,0.45)" }}>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L8.05 2.927z" /></svg>
            Featured Article
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center p-10 lg:p-14 bg-white">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: c.bg, color: c.text }}>{tag}</span>
          <span className="flex items-center gap-1 text-xs" style={{ color: "#9ca3af" }}><Clock /> {readTime}</span>
          <span className="text-xs" style={{ color: "#d8b4fe" }}>·</span>
          <span className="text-xs" style={{ color: "#9ca3af" }}>{date}</span>
        </div>

        <h2 className="text-2xl lg:text-3xl font-bold leading-snug mb-4" style={{ color: "#1a0a3c" }}>{title}</h2>
        <div className="w-10 h-0.5 rounded-full mb-5" style={{ background: "linear-gradient(90deg,#47216b,#a855f7)" }} />
        <p className="text-sm leading-relaxed mb-8" style={{ color: "#4b5563" }}>{excerpt}</p>

        <a
          href="#"
          className="group inline-flex items-center gap-2 self-start text-sm font-bold px-6 py-3 rounded-full text-white transition-all duration-300 hover:shadow-lg"
          style={{ background: "linear-gradient(135deg,#47216b,#7c3aed)", boxShadow: "0 4px 18px rgba(71,33,107,0.30)" }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 28px rgba(71,33,107,0.50)"}
          onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 18px rgba(71,33,107,0.30)"}
        >
          Read Article <Arrow />
        </a>
      </div>
    </article>
  );
};

/* ── Regular article card ── */
const PostCard = ({ tag, date, title, excerpt, img, readTime }) => {
  const c = tagMeta[tag] ?? { bg: "#ede8f8", text: "#47216b" };
  return (
    <article className="card-hover img-zoom group bg-white rounded-2xl overflow-hidden flex flex-col border" style={{ borderColor: "#e8e0f5" }}>
      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,10,60,0.65) 0%, transparent 55%)" }} />
        {/* Tag on image */}
        <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm" style={{ backgroundColor: c.bg + "ee", color: c.text }}>{tag}</span>
        {/* Read time on image */}
        <span className="absolute top-3 right-3 flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(26,10,60,0.65)", color: "#e9d5ff" }}>
          <Clock /> {readTime}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs mb-2.5" style={{ color: "#9ca3af" }}>{date}</p>
        <h3 className="text-base font-bold leading-snug mb-3 flex-1" style={{ color: "#1a0a3c" }}>{title}</h3>
        <p className="text-xs leading-relaxed mb-5" style={{ color: "#6b7280" }}>{excerpt}</p>
        <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: "#f3f0fb" }}>
          <a href="#" className="group flex items-center gap-1.5 text-xs font-bold" style={{ color: "#47216b" }}>
            Read Article <Arrow />
          </a>
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "#f5f4fc" }}>
            <svg className="w-3.5 h-3.5" style={{ color: "#47216b" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};

/* ── Page ── */
const InsightsPage = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [email, setEmail] = useState("");
  const filtered = activeTag === "All" ? allPosts : allPosts.filter(p => p.tag === activeTag);
  const featured = allPosts[0];
  const rest = filtered.filter((_, i) => !(activeTag === "All" && i === 0));

  return (
    <Layout>
      <style>{inlineStyles}</style>

      {/* ── Dark hero banner ── */}
      <section className="relative w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #070010 0%, #1a0a3c 60%, #2d1470 100%)" }}>
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute rounded-full" style={{ width:500, height:500, top:-180, right:-120, background:"radial-gradient(circle,rgba(109,40,217,0.3) 0%,transparent 70%)", filter:"blur(50px)" }} />
          <div className="absolute rounded-full" style={{ width:350, height:350, bottom:-80, left:50, background:"radial-gradient(circle,rgba(168,85,247,0.2) 0%,transparent 70%)", filter:"blur(40px)" }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage:"linear-gradient(rgba(167,139,250,1) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,1) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="iu-fade">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ backgroundColor:"#a78bfa" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color:"#a78bfa" }}>Insights</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              From the{" "}
              <span className="font-light italic" style={{ background:"linear-gradient(135deg,#a78bfa,#f0abfc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                Growth Lab
              </span>
            </h1>
            <p className="mt-4 text-sm max-w-md" style={{ color:"rgba(196,181,253,0.7)" }}>
              Practical thinking on systems, brand, and what actually moves the needle for established businesses.
            </p>
          </div>

          {/* Stats strip */}
          <div className="iu-fade-1 flex gap-8 flex-shrink-0">
            {[{ v:"24+", l:"Articles" }, { v:"6", l:"Topics" }, { v:"2/mo", l:"New Posts" }].map(({ v, l }) => (
              <div key={l} className="text-center">
                <p className="text-2xl font-bold text-white">{v}</p>
                <p className="text-xs mt-0.5" style={{ color:"rgba(196,181,253,0.55)" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured article ── */}
      <section className="w-full bg-white pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px" style={{ backgroundColor:"#47216b" }} />
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color:"#47216b" }}>Featured</p>
          </div>
          <FeaturedCard {...featured} />
        </div>
      </section>

      {/* ── Filter tabs + grid ── */}
      <section className="w-full py-16" style={{ backgroundColor:"#f5f4fc" }}>
        <div className="max-w-7xl mx-auto px-8">

          {/* Filter header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">
            <h2 className="text-2xl font-bold" style={{ color:"#1a0a3c" }}>
              All Articles
              <span className="ml-2 text-sm font-normal px-2.5 py-0.5 rounded-full align-middle" style={{ backgroundColor:"#ede8f8", color:"#47216b" }}>
                {filtered.length}
              </span>
            </h2>
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className="tag-chip px-4 py-1.5 rounded-full text-xs font-semibold border"
                  style={
                    activeTag === tag
                      ? { backgroundColor:"#47216b", color:"#fff", borderColor:"#47216b", boxShadow:"0 4px 14px rgba(71,33,107,0.30)" }
                      : { backgroundColor:"#fff", color:"#47216b", borderColor:"#ddd4f0" }
                  }
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          {rest.length === 0 ? (
            <p className="text-center py-16 text-sm" style={{ color:"#9ca3af" }}>No articles in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post, i) => <PostCard key={i} {...post} />)}
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter banner ── */}
      <section className="w-full py-0">
        <div className="max-w-7xl mx-auto px-8 pb-20" style={{ backgroundColor:"#f5f4fc" }}>
          <div
            className="rounded-3xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
            style={{ background:"linear-gradient(135deg,#1a0a3c 0%,#47216b 100%)" }}
          >
            {/* BG decoration */}
            <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none" style={{ background:"radial-gradient(circle at 100% 50%,rgba(168,85,247,0.25) 0%,transparent 70%)" }} />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color:"#c4b5fd" }}>Stay Sharp</p>
              <h3 className="text-2xl font-bold text-white mb-1">Growth insights, straight to your inbox</h3>
              <p className="text-sm" style={{ color:"rgba(196,181,253,0.7)" }}>One practical insight every fortnight. No fluff. No spam.</p>
            </div>

            <div className="relative z-10 flex gap-2 w-full md:w-auto flex-shrink-0">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 md:w-64 px-5 py-3.5 rounded-full text-sm text-white placeholder-white/50 outline-none border-0"
                style={{ backgroundColor:"rgba(255,255,255,0.12)", backdropFilter:"blur(8px)" }}
              />
              <button
                className="px-6 py-3.5 rounded-full text-sm font-bold flex-shrink-0 transition-opacity hover:opacity-90"
                style={{ backgroundColor:"#ffffff", color:"#1a0a3c" }}
              >
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InsightsPage;
