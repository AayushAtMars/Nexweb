import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = {
    Services: [
      { label: "System Architecture", to: "/services" },
      { label: "Brand & Identity", to: "/services" },
      { label: "Web Development", to: "/services" },
      { label: "Marketing Automation", to: "/services" },
      { label: "Paid Media", to: "/services" },
      { label: "SEO & Content", to: "/services" },
    ],
    Company: [
      { label: "About Us", to: "/" },
      { label: "Our Approach", to: "/our-approach" },
      { label: "Case Studies", to: "/" },
      { label: "Insights", to: "/insights" },
      { label: "Contact", to: "/contact" },
    ],
    Legal: [
      { label: "Privacy Policy", to: "/" },
      { label: "Terms of Service", to: "/" },
      { label: "Cookie Policy", to: "/" },
    ],
  };

  return (
    <footer style={{ backgroundColor: "#0f0520" }} className="w-full text-white">
      {/* CTA Banner */}
      <div className="w-full py-20 px-8 text-center" style={{ backgroundColor: "#1a0a3c" }}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c4b8e8" }}>
          Ready to Scale?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Build Your Growth System
        </h2>
        <p className="text-sm max-w-md mx-auto mb-10" style={{ color: "#c4b8e8" }}>
          Book a free diagnostic session and walk away with a clear picture of
          your growth infrastructure gaps — and how to fix them.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-4 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#ffffff", color: "#1a0a3c" }}
        >
          Start Your Diagnostic →
        </Link>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              {/* <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M6 26L16 6L26 26" stroke="#c4b8e8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 18H22" stroke="#c4b8e8" strokeWidth="3.5" strokeLinecap="round" />
              </svg> */}
              <span className="text-white font-bold text-lg">
                NexWeb<sup className="text-xs font-normal">™</sup>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
              We architect integrated digital ecosystems that replace fragmented
              tactics with predictable, automated growth infrastructure.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: "Li", title: "LinkedIn" },
                { label: "Tw", title: "Twitter" },
                { label: "Ig", title: "Instagram" },
              ].map(({ label, title }) => (
                <a
                  key={title}
                  href="#"
                  title={title}
                  className="w-9 h-9 rounded-full border flex items-center justify-center text-xs font-bold transition-colors hover:border-white hover:text-white"
                  style={{ borderColor: "#4b3a6b", color: "#9ca3af" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <h4
                className="text-xs font-bold tracking-widest uppercase mb-5"
                style={{ color: "#c4b8e8" }}
              >
                {col}
              </h4>
              <ul className="space-y-3">
                {items.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "#9ca3af" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t text-xs gap-4"
          style={{ borderColor: "#2d1b5e", color: "#6b7280" }}
        >
          <p>© {new Date().getFullYear()} NexWeb™. All rights reserved.</p>
          <p>Integrated growth systems for established businesses.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
