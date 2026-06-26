import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo-full.png";

/* ─── Animated footer link ────────────────────────────────────────────────── */
const FooterLink = ({ to, href, onClick, children }) => {
  const [hovered, setHovered] = useState(false);

  const baseStyle = {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: "0.9375rem",
    fontWeight: 400,
    lineHeight: 1.5,
    color: hovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.58)",
    textDecoration: "none",
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    transition: "color 0.2s ease",
    paddingBottom: "1px",
  };

  const underline = (
    <span
      aria-hidden
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "1px",
        width: hovered ? "100%" : "0%",
        background: "rgba(255,255,255,0.35)",
        transition: "width 0.2s ease",
        pointerEvents: "none",
      }}
    />
  );

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  if (href) return (
    <a href={href} style={baseStyle} {...handlers}>{children}{underline}</a>
  );
  if (to) return (
    <Link to={to} style={baseStyle} {...handlers}>{children}{underline}</Link>
  );
  return (
    <button style={baseStyle} onClick={onClick} {...handlers}>{children}{underline}</button>
  );
};

/* ─── Column heading ──────────────────────────────────────────────────────── */
const ColHeading = ({ children }) => (
  <p
    style={{
      fontFamily: '"DM Sans", sans-serif',
      fontSize: "0.6875rem",
      fontWeight: 600,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.95)",
      margin: "0 0 1.5rem 0",
    }}
  >
    {children}
  </p>
);

/* ─── Contact row with icon ───────────────────────────────────────────────── */
const ContactRow = ({ icon, children, strong }) => (
  <div
    className="flex items-start gap-3"
    style={{ marginBottom: "1rem" }}
  >
    <span
      style={{
        color: "rgba(255,255,255,0.35)",
        marginTop: "2px",
        flexShrink: 0,
        fontSize: "0.875rem",
      }}
    >
      {icon}
    </span>
    <span
      style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: strong ? "0.9375rem" : "0.875rem",
        fontWeight: strong ? 500 : 400,
        color: strong ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.55)",
        lineHeight: 1.6,
      }}
    >
      {children}
    </span>
  </div>
);

/* ─── Footer ──────────────────────────────────────────────────────────────── */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0A2540" }}>

      {/* ── Top separator ─────────────────────────────────────────────────── */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "120px 48px 64px" }}
      >
        {/* Four-column grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8"
          style={{ alignItems: "start" }}
        >

          {/* ── Col 1: Brand (40%) ──────────────────────────────────────── */}
          <div className="md:col-span-5" style={{ paddingRight: "clamp(0px, 4vw, 48px)" }}>

            {/* Logo in minimal white stamp */}
            <div style={{ marginBottom: "1.75rem" }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#ffffff",
                  borderRadius: "5px",
                  padding: "6px 12px",
                }}
              >
                <img
                  src={Logo}
                  alt="Quark Characterisation Services"
                  style={{ height: "32px", width: "auto", display: "block" }}
                />
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.9375rem",
                fontWeight: 400,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.62)",
                maxWidth: "340px",
                margin: "0 0 2rem 0",
              }}
            >
              Delivering precision analytical and materials characterisation services for research, pharmaceuticals, manufacturing and industrial innovation.
            </p>

          </div>

          {/* ── Col 2: Company ──────────────────────────────────────────── */}
          <div className="md:col-span-2">
            <ColHeading>Company</ColHeading>
            <nav className="flex flex-col" style={{ gap: "0.875rem" }}>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/contact">FAQs</FooterLink>
            </nav>
          </div>

          {/* ── Col 3: Reach Out ────────────────────────────────────────── */}
          <div className="md:col-span-3">
            <ColHeading>Reach Out</ColHeading>

            <ContactRow strong icon={<FontAwesomeIcon icon={faEnvelope} />}>
              <a
                href="mailto:ho@quarkcs.in"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.95)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "inherit"; }}
              >
                ho@quarkcs.in
              </a>
            </ContactRow>

            <ContactRow icon={<FontAwesomeIcon icon={faClock} />}>
              Mon – Fri, 10:00 am – 6:00 pm IST
            </ContactRow>

            <ContactRow icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            }>
              8, Khasra No. 28, Kuri Bhagtasni,<br />Jodhpur, Rajasthan
            </ContactRow>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────────── */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />
      <div
        className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ padding: "24px 48px" }}
      >
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.8125rem",
            fontWeight: 400,
            color: "rgba(255,255,255,0.32)",
            margin: 0,
            letterSpacing: "0.01em",
          }}
        >
          © {currentYear} Quark Characterisation Services. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms", href: "#" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.32)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.32)"; }}
            >
              {label}
            </a>
          ))}

        </div>
      </div>

    </footer>
  );
};

export default Footer;
