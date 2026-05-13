import React, { useState } from "react";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          {/* Purple Arrow / Chevron Icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 26L16 6L26 26"
              stroke="#5B21B6"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 18H22"
              stroke="#5B21B6"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[#2D1B69] font-bold text-lg tracking-tight">
            Godigitify<sup className="text-xs font-normal">™</sup>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

          {/* Services Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setSolutionsOpen(false);
              }}
              className="flex items-center gap-1 hover:text-[#5B21B6] transition-colors duration-200 cursor-pointer"
            >
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-8 left-0 bg-white border border-gray-100 shadow-lg rounded-lg py-2 min-w-[180px] z-50">
                {["System Architecture", "Brand & Identity", "Web Development", "Marketing Automation", "Paid Media", "SEO & Content"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#5B21B6] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </li>

          {/* Solutions Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setSolutionsOpen(!solutionsOpen);
                setServicesOpen(false);
              }}
              className="flex items-center gap-1 hover:text-[#5B21B6] transition-colors duration-200 cursor-pointer"
            >
              Solutions
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {solutionsOpen && (
              <div className="absolute top-8 left-0 bg-white border border-gray-100 shadow-lg rounded-lg py-2 min-w-[180px] z-50">
                {["Growth Diagnostic", "Lead Generation Systems", "E-Commerce Infrastructure", "Brand & Content Engine", "Analytics & Reporting"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#5B21B6] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </li>

          {/* Static Links */}
          {["Our Approach", "Insights", "Contact"].map((link) => (
            <li key={link}>
              <a
                href="#"
                className="hover:text-[#5B21B6] transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="border border-[#5B21B6] text-[#5B21B6] text-sm font-medium px-5 py-2 rounded-md hover:bg-[#5B21B6] hover:text-white transition-all duration-200"
          >
            Start Diagnostic
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 hover:text-[#5B21B6] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {["Services", "Solutions", "Our Approach", "Insights", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-[#5B21B6] transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="border border-[#5B21B6] text-[#5B21B6] text-sm font-medium px-5 py-2 rounded-md text-center hover:bg-[#5B21B6] hover:text-white transition-all duration-200 mt-2"
          >
            Start Diagnostic
          </a>
        </div>
      )}

      {/* Backdrop to close dropdowns */}
      {(servicesOpen || solutionsOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setServicesOpen(false);
            setSolutionsOpen(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
