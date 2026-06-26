import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

/* ─── Single dropdown item ─────────────────────────────────────────────── */
const DropdownItem = ({ slink, onClose }) => (
  <Link
    to={`/${slink.link}`}
    onClick={onClose}
    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group/item"
  >
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: "#EFF6FF" }}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.414 2.798H4.213c-1.444 0-2.414-1.798-1.414-2.798L4.2 15.3" />
      </svg>
    </div>
    <div className="min-w-0">
      <p
        className="text-sm font-medium leading-tight truncate"
        style={{ color: "#0A2540", fontFamily: '"DM Sans", sans-serif' }}
      >
        {slink.name}
      </p>
    </div>
  </Link>
);

/* ─── Desktop dropdown with hover-gap fix ──────────────────────────────── */
const DesktopDropdown = ({ link, onClose }) => {
  const [open, setOpen] = useState(false);
  let closeTimer = null;

  const handleEnter = () => {
    if (closeTimer) clearTimeout(closeTimer);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer = setTimeout(() => setOpen(false), 80);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger */}
      <button
        className="flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
        style={{
          fontFamily: '"DM Sans", sans-serif',
          color: open ? "#0A2540" : "#64748B",
          background: open ? "#F1F5F9" : "transparent",
        }}
      >
        {link.name}
        <svg
          className="w-3.5 h-3.5 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "#94A3B8" }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* 8px invisible bridge so cursor can travel from button to panel */}
      {open && (
        <div className="absolute left-0 right-0 top-full" style={{ height: "8px" }} />
      )}

      {/* Dropdown panel */}
      {open && (
        <div
          className="absolute left-0 z-50 rounded-xl overflow-hidden"
          style={{
            top: "calc(100% + 8px)",
            minWidth: "220px",
            background: "#ffffff",
            border: "1px solid #F1F5F9",
            boxShadow: "0 20px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
            padding: "8px",
          }}
        >
          {link.sublinks.map((section) => (
            <div key={section.Head} className="mb-3 last:mb-0">
              <p
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#2563EB", fontFamily: '"DM Sans", sans-serif' }}
              >
                {section.Head}
              </p>
              {section.sublink.map((slink) => (
                <DropdownItem key={slink.name} slink={slink} onClose={onClose} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── Main NavLinks ─────────────────────────────────────────────────────── */
const NavLinks = ({ onClose, mobile }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  if (mobile) {
    return (
      <>
        {links.map((link) => (
          <div key={link.name}>
            <button
              className="w-full text-left py-2.5 px-4 rounded-xl text-sm font-medium transition-colors flex justify-between items-center"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                color: heading === link.name ? "#2563EB" : "#475569",
                background: heading === link.name ? "#EFF6FF" : "transparent",
              }}
              onClick={() => {
                setHeading(heading !== link.name ? link.name : "");
                setSubHeading("");
              }}
            >
              {link.name}
              <svg
                className="w-4 h-4 transition-transform duration-200"
                style={{
                  transform: heading === link.name ? "rotate(180deg)" : "rotate(0deg)",
                  color: "#94A3B8",
                }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {heading === link.name && link.submenu && (
              <div className="ml-4 mt-1 mb-2 border-l-2 pl-4" style={{ borderColor: "#EFF6FF" }}>
                {link.sublinks.map((section) => (
                  <div key={section.Head} className="mb-3">
                    <p
                      className="py-1 text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "#2563EB", fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {section.Head}
                    </p>
                    <ul className="space-y-0.5">
                      {section.sublink.map((slink) => (
                        <li key={slink.name}>
                          <Link
                            to={`/${slink.link}`}
                            className="block py-1.5 px-2 text-sm rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
                            style={{ color: "#475569", fontFamily: '"DM Sans", sans-serif' }}
                            onClick={() => {
                              setHeading("");
                              setSubHeading("");
                              onClose?.();
                            }}
                          >
                            {slink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {links.map((link) =>
        link.submenu ? (
          <DesktopDropdown key={link.name} link={link} onClose={onClose} />
        ) : (
          <Link
            key={link.name}
            to={`/${link.link ?? ""}`}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
            onClick={onClose}
          >
            {link.name}
          </Link>
        )
      )}
    </>
  );
};

export default NavLinks;
