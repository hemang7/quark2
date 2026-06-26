import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo-full.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleEmailClick = () => { window.location.href = "mailto:ho@quarkcs.in"; };

  return (
    <footer style={{ backgroundColor: "#0A2540", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div>
              <div style={{
                display: "inline-block",
                background: "#ffffff",
                borderRadius: "10px",
                padding: "8px 14px",
              }}>
                <img
                  src={Logo}
                  alt="Quark Characterisation Services"
                  style={{ height: "28px", width: "auto", display: "block" }}
                />
              </div>
            </div>
            <p style={{ color: "#94A3B8", fontSize: "0.875rem", lineHeight: 1.7, fontFamily: '"DM Sans", sans-serif' }}>
              Precision-driven analytical and R&D services for pharma, food, and beyond.
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <h3
              className="font-semibold mb-4"
              style={{ color: "#ffffff", fontFamily: '"DM Sans", sans-serif', fontSize: "0.875rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
            >
              Reach Out
            </h3>
            <button
              className="flex items-center gap-2.5 transition-colors duration-200 hover:text-white group"
              style={{ color: "#94A3B8", fontFamily: '"DM Sans", sans-serif', fontSize: "0.875rem" }}
              onClick={handleEmailClick}
            >
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#2563EB" }} />
              ho@quarkcs.in
            </button>
            <p
              className="flex items-center gap-2.5"
              style={{ color: "#94A3B8", fontFamily: '"DM Sans", sans-serif', fontSize: "0.875rem" }}
            >
              <FontAwesomeIcon icon={faClock} style={{ color: "#2563EB" }} />
              Mon – Fri, 10am – 6pm
            </p>
            <p style={{ color: "#64748B", fontFamily: '"DM Sans", sans-serif', fontSize: "0.8125rem" }}>
              FAQs &amp; Frequently Asked Questions
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p style={{ color: "#475569", fontFamily: '"DM Sans", sans-serif', fontSize: "0.8125rem" }}>
          © {currentYear} Quark Characterisation Services. All rights reserved.
        </p>
        <button
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110"
          style={{
            background: "rgba(37,99,235,0.15)",
            border: "1px solid rgba(37,99,235,0.3)",
            color: "#2563EB",
          }}
        >
          <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: "0.75rem" }} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
