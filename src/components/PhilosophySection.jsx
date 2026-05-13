import React from "react";
import img1 from "../assets/systems_img1.png";
import img2 from "../assets/systems_img2.png";

const blocks = [
  {
    tag: "Our Philosophy",
    heading: "We Build Systems,\nNot Just Campaigns",
    body: "Most agencies give you tactics. We give you infrastructure. Every engagement we take on is designed around building a self-sustaining growth engine — one that works whether or not you're actively pushing it. We connect brand, tech, automation, and data into one unified ecosystem.",
    img: img1,
    imgLeft: false,
  },
  {
    tag: "Our Approach",
    heading: "Integrated Ecosystems\nFor Established Brands",
    body: "We don't work with everyone. We work with businesses ready to make the shift from execution-heavy operations to automated, scalable systems. That means we go deeper, move slower on strategy, and move faster on execution — always with measurable outcomes at the centre.",
    img: img2,
    imgLeft: true,
  },
];

const PhilosophySection = () => {
  return (
    <section className="w-full bg-white">
      {blocks.map(({ tag, heading, body, img, imgLeft }, i) => (
        <div
          key={i}
          className={`max-w-7xl mx-auto px-8 py-20 flex flex-col ${
            imgLeft ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-16`}
        >
          {/* Text */}
          <div className="flex-1">
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-4 block"
              style={{ color: "#47216b" }}
            >
              {tag}
            </span>
            <h2
              className="text-4xl font-bold leading-tight mb-6 whitespace-pre-line"
              style={{ color: "#1a0a3c" }}
            >
              {heading}
            </h2>
            <div
              className="w-10 h-0.5 mb-6"
              style={{ backgroundColor: "#47216b" }}
            />
            <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>
              {body}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold"
              style={{ color: "#47216b" }}
            >
              Learn More
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

          {/* Image */}
          <div className="flex-1 w-full">
            <img
              src={img}
              alt={heading}
              className="w-full h-[400px] object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default PhilosophySection;
