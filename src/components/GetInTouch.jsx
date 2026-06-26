import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const trustSignals = [
  { label: "ISO Certified" },
  { label: "NABL Accredited" },
  { label: "24x7 Support" },
];

const AnalyticalRDSolutions = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6"
      style={{
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <div
        className="max-w-4xl mx-auto text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(24px)",
          transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        }}
      >
        {/* Eyebrow */}
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-4"
          style={{ fontFamily: '"DM Sans", sans-serif', color: "#2563EB" }}
        >
          Ready to work with us?
        </p>

        {/* Heading */}
        <h2
          className="font-normal mb-6"
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            color: "#0A2540",
            lineHeight: 1.1,
          }}
        >
          Experience Best-in-Class Analytical &amp; R&amp;D Solutions
        </h2>

        {/* CTA */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-base font-semibold text-white rounded-full transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            background: "#2563EB",
            padding: "1rem 2.5rem",
            boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
          }}
        >
          Get in Touch
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Trust signals */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 mt-10"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease-out 0.2s",
          }}
        >
          {trustSignals.map(({ label }) => (
            <div
              key={label}
              className="flex items-center gap-2"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.875rem",
                color: "#64748B",
              }}
            >
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold"
                style={{ background: "#EFF6FF", color: "#2563EB" }}
              >
                ✓
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticalRDSolutions;
