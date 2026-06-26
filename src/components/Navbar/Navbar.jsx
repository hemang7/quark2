import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo-full.png";
import NavLinks from "./NavLinks";          // mobile menu only
import { links } from "./Mylinks";          // dropdown data

/* ─── Small icon used inside each dropdown row ─────────────────────────── */
const ServiceIcon = () => (
  <div
    className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
    style={{ background: "#EFF6FF" }}
  >
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.414 2.798H4.213c-1.444 0-2.414-1.798-1.414-2.798L4.2 15.3" />
    </svg>
  </div>
);

/* ─── Services mega-dropdown (2-col) ────────────────────────────────────── */
const ServicesDropdown = ({ onClose }) => {
  const servicesLink = links.find((l) => l.name === "Services");
  if (!servicesLink) return null;

  // Show at most 2 columns: Analytical Services + R&D Services
  const col1 = servicesLink.sublinks[0]; // "Analytical Services"
  const col2 = servicesLink.sublinks[1]; // "In House R & D Services"

  return (
    <div
      className="absolute z-50 rounded-2xl bg-white"
      style={{
        top: "calc(100% + 4px)",
        left: "50%",
        transform: "translateX(-50%)",
        width: "560px",
        border: "1px solid #F1F5F9",
        boxShadow: "0 20px 60px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.06)",
        padding: "20px",
      }}
    >
      {/* 2-column grid */}
      <div className="grid grid-cols-2 gap-x-6">
        {[col1, col2].map((section) => (
          section && (
            <div key={section.Head}>
              {/* Column heading */}
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-2 pb-2"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  color: "#2563EB",
                  borderBottom: "1px solid #F1F5F9",
                }}
              >
                {section.Head}
              </p>

              {/* Items */}
              {section.sublink.map((slink) => (
                <Link
                  key={slink.name}
                  to={`/${slink.link}`}
                  onClick={onClose}
                  className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <ServiceIcon />
                  <span
                    className="text-sm font-medium truncate"
                    style={{ fontFamily: '"DM Sans", sans-serif', color: "#0A2540" }}
                  >
                    {slink.name}
                  </span>
                </Link>
              ))}
            </div>
          )
        ))}
      </div>

      {/* Bottom strip */}
      <div
        className="flex items-center justify-between mt-4 pt-4"
        style={{ borderTop: "1px solid #F1F5F9" }}
      >
        <span
          className="text-sm"
          style={{ fontFamily: '"DM Sans", sans-serif', color: "#94A3B8" }}
        >
          Explore all our laboratory services
        </span>
        <Link
          to="/contact"
          onClick={onClose}
          className="text-sm font-medium transition-colors hover:text-blue-800"
          style={{ fontFamily: '"DM Sans", sans-serif', color: "#2563EB" }}
        >
          View all services →
        </Link>
      </div>
    </div>
  );
};

/* ─── Navbar ────────────────────────────────────────────────────────────── */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const closeTimer = useRef(null);

  // Close mobile on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Hover handlers with a small delay so cursor can travel to the panel
  const handleServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 80);
  };

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const desktopLinkClass = ({ isActive }) =>
    [
      "transition-colors duration-200 no-underline",
      isActive ? "text-[#2563EB]" : "text-[#475569] hover:text-[#0A2540]",
    ].join(" ");

  return (
    <nav
      className="sticky top-0 z-50 bg-white"
      style={{
        borderBottom: "1px solid #E2E8F0",
        fontFamily: '"DM Sans", sans-serif',
      }}
    >
      {/* ── Main bar ─────────────────────────────────────────────────────── */}
      <div
        className="max-w-7xl mx-auto px-8 flex items-center justify-between"
        style={{ height: "64px" }}
      >

        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0" onClick={closeAll}>
          <img
            src={Logo}
            alt="Quark Characterisation Services"
            className="w-auto"
            style={{ height: "clamp(24px, 5vw, 38px)", display: "block" }}
          />
        </Link>

        {/* ── Desktop nav links (centred) ─────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-10 ml-16">
          <NavLink
            to="/"
            end
            className={desktopLinkClass}
            style={{ fontSize: "16px", fontWeight: 500, textDecoration: "none" }}
          >
            Home
          </NavLink>

          {/* Services with dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
              className="flex items-center transition-colors duration-200"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                fontFamily: '"DM Sans", sans-serif',
                color: servicesOpen ? "#0A2540" : "#475569",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                gap: "4px",
              }}
            >
              Services
              <svg
                style={{
                  width: "13px",
                  height: "13px",
                  marginLeft: "2px",
                  transition: "transform 0.2s",
                  transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  color: "#94A3B8",
                  flexShrink: 0,
                }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Invisible bridge — prevents mouseout when cursor crosses gap */}
            {servicesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "-20px",
                  right: "-20px",
                  height: "8px",
                }}
              />
            )}

            {/* Dropdown panel */}
            {servicesOpen && <ServicesDropdown onClose={closeAll} />}
          </div>

          <NavLink
            to="/about"
            className={desktopLinkClass}
            style={{ fontSize: "16px", fontWeight: 500, textDecoration: "none" }}
          >
            About
          </NavLink>
        </div>

        {/* ── Right side: Contact link + CTA ──────────────────────────────── */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/contact"
            className={desktopLinkClass}
            style={{ fontSize: "16px", fontWeight: 500, textDecoration: "none" }}
          >
            Contact
          </NavLink>
          <NavLink
            to="/contact"
            className="inline-flex items-center text-white rounded-full transition-all duration-200 active:scale-95"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "14px",
              fontWeight: 600,
              background: "#0A2540",
              padding: "0.625rem 1.5rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1a3a5c"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#0A2540"; }}
          >
            Get a Quote →
          </NavLink>
        </div>

        {/* ── Mobile hamburger ─────────────────────────────────────────────── */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl transition-colors hover:bg-slate-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: "#0A2540" }}
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────────────────────── */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 bg-white"
        style={{
          maxHeight: mobileOpen ? "calc(100dvh - 64px)" : "0",
          overflowY: mobileOpen ? "auto" : "hidden",
          opacity: mobileOpen ? 1 : 0,
          borderTop: mobileOpen ? "1px solid #F1F5F9" : "none",
          boxShadow: mobileOpen ? "0 12px 32px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-0.5">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
            onClick={closeAll}
          >
            Home
          </NavLink>

          {/* Mobile services — delegates to NavLinks */}
          <NavLinks onClose={closeAll} mobile />

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
            onClick={closeAll}
          >
            About
          </NavLink>

          <div className="pt-3 mt-1" style={{ borderTop: "1px solid #F1F5F9" }}>
            <NavLink
              to="/contact"
              className="flex items-center justify-center gap-2 text-sm font-medium text-white rounded-xl px-5 py-3 transition-all"
              style={{ background: "#0A2540" }}
              onClick={closeAll}
            >
              Get a Quote
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
