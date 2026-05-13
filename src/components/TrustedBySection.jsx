import React from 'react';

const TrustedBySection = () => {
  return (
    <section className="w-full py-16 bg-white relative z-10 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center relative">

        {/* Decorative circle */}
        <div className="absolute left-4 top-0 w-12 h-12 rounded-full border border-purple-200 hidden md:flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#47216b]"></div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight" style={{ color: "#130a21" }}>
          Trusted by <span style={{ color: "#47216b" }}>Growing Businesses</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 mb-16 font-medium">
          Organizations that chose systems over services for sustainable growth
        </p>

        {/* Logos Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200 mt-8">

          {/* SVIET */}
          <div className="px-10 md:px-14 flex items-center justify-center py-6 md:py-0 w-full md:w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center border border-gray-200">
                <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <span className="text-4xl font-serif tracking-widest text-gray-800">SVIET</span>
            </div>
          </div>

          {/* ALLIANCE */}
          <div className="px-10 md:px-14 flex items-center justify-center py-6 md:py-0 w-full md:w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-serif tracking-wide text-gray-800 flex items-center gap-2">
                <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                ALLIANCE
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-500">International School</span>
            </div>
          </div>

          {/* SuperSixty */}
          <div className="px-10 md:px-14 flex items-center justify-center py-6 md:py-0 w-full md:w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center text-white rounded bg-gray-800">
                <span className="font-bold text-sm">S</span>
              </div>
              <span className="text-3xl font-bold tracking-tight text-gray-800">
                Super<span className="text-gray-500">60</span>
              </span>
            </div>
          </div>

          {/* The Uniques */}
          <div className="px-10 md:px-14 flex items-center justify-center py-6 md:py-0 w-full md:w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="text-xl font-light text-gray-500 uppercase tracking-widest">The</span>
              <span className="text-3xl font-serif font-bold tracking-tight text-gray-800">
                Uniques
              </span>
            </div>
          </div>

          {/* Your Logo Here */}
          <div className="px-10 md:px-14 flex items-center justify-center py-6 md:py-0 w-full md:w-auto opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-dashed border-gray-400 flex items-center justify-center text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </div>
              <span className="text-sm font-medium text-gray-500">Your Logo Here</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
