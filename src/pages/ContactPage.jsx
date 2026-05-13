import React, { useState } from "react";
import Layout from "../layouts/Layout";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section style={{ backgroundColor: "#f5f4fc" }} className="w-full py-24">
        <div className="max-w-7xl mx-auto px-8">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#47216b" }}>
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: "#1a0a3c" }}>
            Let's Build Something <br />
            <span className="font-light italic">That Lasts</span>
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-16">

          {/* Left — Info */}
          <div className="lg:w-96 flex-shrink-0">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1a0a3c" }}>
              Start with a Free Diagnostic
            </h2>
            <div className="w-8 h-0.5 mb-6" style={{ backgroundColor: "#47216b" }} />
            <p className="text-sm leading-relaxed mb-10" style={{ color: "#4b5563" }}>
              Fill in the form and one of our growth strategists will reach out within one business day to schedule your diagnostic session. No sales pitch — just a clear picture of where your biggest growth levers are.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-12">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "hello@godigitify.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Location",
                  value: "Chandigarh, India",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Response Time",
                  value: "Within 1 business day",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#ede8f8", color: "#47216b" }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#9ca3af" }}>{label}</p>
                    <p className="text-sm font-medium" style={{ color: "#1a0a3c" }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#9ca3af" }}>Follow Us</p>
              <div className="flex gap-3">
                {["LinkedIn", "Twitter", "Instagram"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="px-4 py-2 rounded-full text-xs font-semibold border transition-colors hover:border-purple-600 hover:text-purple-700"
                    style={{ borderColor: "#ddd4f0", color: "#47216b" }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Forms */}
          <div className="flex-1">
            {sent ? (
              <div className="rounded-3xl border p-16 text-center h-full flex flex-col items-center justify-center" style={{ borderColor: "#ede8f8", backgroundColor: "#faf8ff" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#ede8f8" }}>
                  <svg className="w-8 h-8" style={{ color: "#47216b" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#1a0a3c" }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: "#4b5563" }}>
                  Thanks for reaching out. We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="rounded-3xl border p-10 space-y-6" style={{ borderColor: "#ede8f8", backgroundColor: "#faf8ff" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { name: "name", label: "Full Name", placeholder: "Jane Smith", type: "text" },
                    { name: "email", label: "Work Email", placeholder: "jane@company.com", type: "email" },
                  ].map(({ name, label, placeholder, type }) => (
                    <div key={name}>
                      <label className="block text-xs font-semibold mb-2" style={{ color: "#1a0a3c" }}>{label}</label>
                      <input
                        type={type}
                        name={name}
                        required
                        placeholder={placeholder}
                        value={form[name]}
                        onChange={handle}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                        style={{ borderColor: "#ddd4f0", backgroundColor: "#fff" }}
                        onFocus={e => e.target.style.borderColor = "#47216b"}
                        onBlur={e => e.target.style.borderColor = "#ddd4f0"}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "#1a0a3c" }}>Company Name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Acme Inc."
                    value={form.company}
                    onChange={handle}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                    style={{ borderColor: "#ddd4f0", backgroundColor: "#fff" }}
                    onFocus={e => e.target.style.borderColor = "#47216b"}
                    onBlur={e => e.target.style.borderColor = "#ddd4f0"}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "#1a0a3c" }}>Monthly Budget Range</label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handle}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none appearance-none"
                    style={{ borderColor: "#ddd4f0", backgroundColor: "#fff", color: form.budget ? "#1a0a3c" : "#9ca3af" }}
                  >
                    <option value="">Select a range…</option>
                    <option>Under ₹50,000</option>
                    <option>₹50,000 – ₹1,00,000</option>
                    <option>₹1,00,000 – ₹2,50,000</option>
                    <option>₹2,50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "#1a0a3c" }}>Tell Us About Your Business</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="What are you working on? What's your biggest growth challenge right now?"
                    value={form.message}
                    onChange={handle}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none"
                    style={{ borderColor: "#ddd4f0", backgroundColor: "#fff" }}
                    onFocus={e => e.target.style.borderColor = "#47216b"}
                    onBlur={e => e.target.style.borderColor = "#ddd4f0"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#47216b" }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map-style stat strip */}
      <section style={{ backgroundColor: "#f5f4fc" }} className="w-full py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Systems Deployed" },
              { value: "3.2x", label: "Avg. Efficiency Gain" },
              { value: "97%", label: "Client Retention" },
              { value: "< 24h", label: "Response Time" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-4xl font-bold mb-1" style={{ color: "#47216b" }}>{value}</p>
                <p className="text-xs" style={{ color: "#6b7280" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
