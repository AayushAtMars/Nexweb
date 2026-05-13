import React, { useState } from "react";

const testimonials = [
  {
    quote: "Godigitify didn't just run our campaigns — they built us a growth machine. Within 3 months we had a fully automated lead pipeline.",
    name: "Arjun Mehta",
    role: "Founder, The Uniques",
    initials: "AM",
  },
  {
    quote: "The level of thinking they bring is unlike any agency we've worked with. They built a system that now generates enquiries on autopilot.",
    name: "Dr. Sandeep Sharma",
    role: "Director, SVIET",
    initials: "SS",
  },
  {
    quote: "We went from 40 hours a week on manual marketing tasks to under 5. The ROI on what they built is compounding every month.",
    name: "Priya Nair",
    role: "CMO, FinEdge",
    initials: "PN",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#47216b" }}>
          Client Stories
        </span>
        <h2 className="text-4xl font-bold mb-14" style={{ color: "#1a0a3c" }}>
          What Our Clients Say
        </h2>

        <div className="rounded-3xl p-12 mb-10 text-left relative" style={{ backgroundColor: "#f5f4fc" }}>
          <div className="text-7xl font-serif leading-none absolute top-6 left-10" style={{ color: "#ddd4f0" }}>"</div>
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4" style={{ color: "#f59e0b" }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.049 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.518-4.674z" />
              </svg>
            ))}
          </div>
          <p className="text-lg leading-relaxed font-medium relative z-10" style={{ color: "#1a0a3c" }}>
            {t.quote}
          </p>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: "#47216b" }}>
              {t.initials}
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "#1a0a3c" }}>{t.name}</p>
              <p className="text-xs" style={{ color: "#6b7280" }}>{t.role}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-200"
              style={{ backgroundColor: active === i ? "#47216b" : "#ddd4f0" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
