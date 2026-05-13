import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeAll = () => {
    setServicesOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 select-none" onClick={closeAll}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M6 26L16 6L26 26" stroke="#47216b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 18H22" stroke="#47216b" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
          <span className="font-bold text-lg tracking-tight" style={{ color: "#2D1B69" }}>
            Godigitify<sup className="text-xs font-normal">™</sup>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

          {/* Services dropdown */}
          <li className="relative">
            <button
              onClick={() => { setServicesOpen(!servicesOpen); setSolutionsOpen(false); }}
              className="flex items-center gap-1 transition-colors duration-200 cursor-pointer"
              style={{ color: servicesOpen ? "#47216b" : undefined }}
            >
              Services
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-9 left-0 bg-white border border-gray-100 shadow-xl rounded-xl py-2 min-w-[220px] z-50">
                {[
                  { label: "System Architecture", desc: "Infrastructure & planning" },
                  { label: "Brand & Identity", desc: "Positioning & visual design" },
                  { label: "Web Development", desc: "Conversion-led builds" },
                  { label: "Marketing Automation", desc: "CRM & workflows" },
                  { label: "Paid Media", desc: "Google, Meta & LinkedIn" },
                  { label: "SEO & Content", desc: "Organic growth systems" },
                ].map(({ label, desc }) => (
                  <Link
                    key={label}
                    to="/services"
                    onClick={closeAll}
                    className="flex flex-col px-4 py-2.5 hover:bg-purple-50 transition-colors group"
                  >
                    <span className="text-sm font-medium group-hover:text-purple-700" style={{ color: "#1a0a3c" }}>{label}</span>
                    <span className="text-xs" style={{ color: "#9ca3af" }}>{desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Solutions dropdown */}
          <li className="relative">
            <button
              onClick={() => { setSolutionsOpen(!solutionsOpen); setServicesOpen(false); }}
              className="flex items-center gap-1 transition-colors duration-200 cursor-pointer"
              style={{ color: solutionsOpen ? "#47216b" : undefined }}
            >
              Solutions
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {solutionsOpen && (
              <div className="absolute top-9 left-0 bg-white border border-gray-100 shadow-xl rounded-xl py-2 min-w-[220px] z-50">
                {[
                  { label: "Growth Diagnostic", desc: "Start here — always" },
                  { label: "Lead Generation Systems", desc: "Predictable pipeline" },
                  { label: "E-Commerce Infrastructure", desc: "Revenue engine builds" },
                  { label: "Brand & Content Engine", desc: "Authority that compounds" },
                  { label: "Analytics & Reporting", desc: "Data-driven decisions" },
                ].map(({ label, desc }) => (
                  <Link
                    key={label}
                    to="/solutions"
                    onClick={closeAll}
                    className="flex flex-col px-4 py-2.5 hover:bg-purple-50 transition-colors group"
                  >
                    <span className="text-sm font-medium group-hover:text-purple-700" style={{ color: "#1a0a3c" }}>{label}</span>
                    <span className="text-xs" style={{ color: "#9ca3af" }}>{desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Static links */}
          {[
            { label: "Our Approach", to: "/our-approach" },
            { label: "Insights", to: "/insights" },
            { label: "Contact", to: "/contact" },
          ].map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                onClick={closeAll}
                className="transition-colors duration-200 hover:text-purple-700"
                style={{ color: isActive(to) ? "#47216b" : undefined, fontWeight: isActive(to) ? "600" : undefined }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/contact"
          onClick={closeAll}
          className="hidden md:inline-block border text-sm font-medium px-5 py-2 rounded-md transition-all duration-200 hover:text-white"
          style={{ borderColor: "#47216b", color: "#47216b" }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#47216b"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#47216b"; }}
        >
          Start Diagnostic
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Services", to: "/services" },
            { label: "Solutions", to: "/solutions" },
            { label: "Our Approach", to: "/our-approach" },
            { label: "Insights", to: "/insights" },
            { label: "Contact", to: "/contact" },
          ].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="border text-sm font-medium px-5 py-2 rounded-md text-center mt-2 transition-all"
            style={{ borderColor: "#47216b", color: "#47216b" }}
          >
            Start Diagnostic
          </Link>
        </div>
      )}

      {/* Backdrop */}
      {(servicesOpen || solutionsOpen) && (
        <div className="fixed inset-0 z-40" onClick={closeAll} />
      )}
    </nav>
  );
};

export default Navbar;
