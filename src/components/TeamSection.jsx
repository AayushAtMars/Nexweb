import React from 'react';

const teamMembers = [
  {
    name: "Udit Kumar Pathak",
    role: "DEVELOPER AND OPERATION LEAD",
    desc: "Experienced engineer specializing in modern web technologies, database optimization, and production-grade backend systems.",
    img: "https://res.cloudinary.com/dnzmrkvzn/image/upload/v1753522221/pf_vwbmwq.jpg"
  },
  {
    name: "Aayush Kumar Singh",
    role: "DEVELOPER AND TECH LEAD",
    desc: "MERN stack developer with a strong balance of frontend aesthetics and backend performance engineering.",
    img: "https://i.postimg.cc/fyCTxC9y/Whats-App-Image-2025-08-09-at-20-53-17-0d9853a8.jpg"
  },
  {
    name: "Sanya Kashyup",
    role: "DEVELOPER AND MARKETING STRATEGIST ",
    desc: "Problem-solver focused on Java, system design, and scalable full-stack architectures.",
    img: "https://ui-avatars.com/api/?name=Aayush+Kumar+Singh&background=47216b&color=fff&size=200"
  }
];

const TeamSection = () => {
  return (
    <section className="w-full py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight" style={{ color: "#130a21" }}>
            Meet the Team
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-medium">
            The engineers and architects building your digital infrastructure
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative flex flex-col group transition-transform hover:-translate-y-2 duration-300 border border-gray-100"
            >
              {/* Top Accent Line */}
              <div className="h-2.5 w-full rounded-t-[2rem]" style={{ backgroundColor: "#130a21" }}></div>

              <div className="p-8 pt-10 flex-1 flex flex-col items-center text-center relative">

                {/* Decorative Brand Mark (Top Right) */}
                <div className="absolute top-6 right-6 flex items-center justify-center opacity-20">
                  <svg className="w-6 h-6 text-[#47216b]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" /></svg>
                </div>

                {/* Profile Image */}
                <div className="w-28 h-28 rounded-full bg-gray-50 mb-6 p-1.5 border border-dashed border-gray-300 relative group-hover:border-[#a855f7] transition-colors duration-300">
                  <img src={member.img} alt={member.name} className="w-full h-full rounded-full object-cover" />
                  {/* Verified Check Badge */}
                  <div className="absolute bottom-0 right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center bg-[#a855f7] text-white">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold mb-1 tracking-tight" style={{ color: "#130a21" }}>{member.name}</h3>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "#a855f7" }}>
                  {member.role}
                </p>

                <p className="text-sm text-gray-500 leading-relaxed font-medium mb-8 flex-1 px-3">
                  {member.desc}
                </p>

                {/* Bottom Actions */}
                <div className="w-full flex items-center gap-2">
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-[13px] font-bold text-white transition-opacity hover:opacity-90 shadow-sm" style={{ backgroundColor: "#130a21" }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Contact
                  </a>
                  <a href={member.portfolioUrl} target="_blank" rel="noreferrer" title="Portfolio" className="w-11 h-11 flex-shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-500 transition-colors hover:bg-gray-100 border border-gray-200 hover:text-[#130a21]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </a>
                  <a href="#" title="LinkedIn" className="w-11 h-11 flex-shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-500 transition-colors hover:bg-gray-100 border border-gray-200 hover:text-[#130a21]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href="#" title="GitHub" className="w-11 h-11 flex-shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-500 transition-colors hover:bg-gray-100 border border-gray-200 hover:text-[#130a21]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
