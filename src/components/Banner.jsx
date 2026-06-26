import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero1.mp4";
import heroImage from "../assets/heroImage.png";

const Banner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeStyle = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.75s ease-out ${delay}ms, transform 0.75s ease-out ${delay}ms`,
  });

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", background: "#ffffff" }}
    >
      {/* ── Video background (desktop) ──────────────────────────────────── */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden sm:block"
        autoPlay loop muted playsInline preload="auto"
      >
        <source src={hero} type="video/mp4" />
      </video>

      {/* ── Static image fallback (mobile) ──────────────────────────────── */}
      <div className="absolute inset-0 sm:hidden">
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
      </div>

      {/* ── Gradient overlay: near-white on left, transparent on right ─── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0) 100%)",
        }}
      />
      {/* Mobile: solid overlay for readability */}
      <div
        className="absolute inset-0 z-10 sm:hidden"
        style={{ background: "rgba(255,255,255,0.90)" }}
      />

      {/* ── Hex molecular dot pattern watermark ─────────────────────────── */}
      <div
        className="absolute inset-0 z-[11] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%230A2540' stroke-width='0.8'%3E%3Cpolygon points='30,4 52,17 52,43 30,56 8,43 8,17'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
          opacity: 0.03,
        }}
      />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div
        className="relative z-20 flex items-center min-h-screen"
        style={{ paddingTop: "68px" }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:pl-16 py-20">
          <div className="max-w-2xl">

            {/* Headline */}
            <div style={fadeStyle(100)}>
              <h1
                className="font-normal"
                style={{
                  fontFamily: '"DM Serif Display", Georgia, serif',
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.01em",
                  color: "#0A2540",
                  margin: 0,
                }}
              >
                Quark Characterisation Services
              </h1>

              {/* Blue accent line — NOT a CSS text-decoration */}
              <div
                className="mt-4 mb-6"
                style={{ width: "80px", height: "2px", background: "#2563EB", borderRadius: "9999px" }}
              />
            </div>

            {/* Subtext */}
            <div style={fadeStyle(200)}>
              <p
                className="max-w-xl"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "1.175rem",
                  lineHeight: 1.75,
                  color: "#475569",
                  marginBottom: "2.5rem",
                }}
              >
                We specialize in innovative research and development.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4" style={fadeStyle(300)}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-white rounded-full transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  background: "#2563EB",
                  padding: "0.875rem 2rem",
                  boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
                }}
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-slate-50 hover:-translate-y-0.5"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  color: "#0A2540",
                  border: "2px solid #0A2540",
                  padding: "calc(0.875rem - 2px) calc(2rem - 2px)",
                }}
              >
                Learn More
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <div
        className="absolute bottom-8 left-8 md:left-16 flex items-center gap-3 z-20"
        style={{
          opacity: visible ? 0.45 : 0,
          transition: "opacity 1s ease-out 700ms",
        }}
      >
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, #0A2540, transparent)" }} />
        <span
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.6875rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#94A3B8",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Banner;
