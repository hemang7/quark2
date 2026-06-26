import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img6 from "../assets/services/img6.jpg";
import img5 from "../assets/services/img5.jpg";
import img3 from "../assets/services/img3.jpg";
import img4 from "../assets/services/img4.jpg";
import img7 from "../assets/services/img7.jpg";
import img1 from "../assets/services/img1.jpg";

/* ── Items array — unchanged ─────────────────────────────────────────────── */
const items = [
  {
    text: "Formulation Development: We specialize in creating stable and effective pharmaceutical dosage forms tailored to your product requirements.",
    photo: img3,
    title: "Formulation Development",
    id: "FormulationDevelopment",
  },
  {
    text: "Microbial Testing: Accurate detection and quantification of microorganisms in samples to ensure safety and regulatory compliance.",
    photo: img5,
    title: "Microbial Testing",
    id: "MicrobialTesting",
  },
  {
    text: "Elemental Analysis: Accurate determination of elemental composition in samples using advanced analytical techniques.",
    photo: img4,
    title: "Elemental Analysis",
    id: "ElementalAnalysis",
  },
  {
    text: "Chemical Testing: Thorough analysis of substances to determine their chemical composition and verify quality standards.",
    photo: img6,
    title: "Chemical Testing",
    id: "ChemicalTesting",
  },
  {
    text: "Pharma Consultancy: Expert guidance for pharmaceutical companies navigating regulatory pathways and quality systems.",
    photo: img7,
    title: "Pharma Consultancy",
    id: "PharmaConsultancy",
  },
  {
    text: "Pharmaceutical Testing: Comprehensive quality control and assurance testing to verify the identity, purity, potency, and safety of pharmaceutical substances and formulations.",
    photo: img1,
    title: "Pharmaceutical Testing",
    id: "Pharmaceuticaltesting",
  },
];

/* ── Service card ─────────────────────────────────────────────────────────── */
const ServiceCard = ({ title, text, photo, id, index, visible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        border: "1px solid #E2E8F0",
        boxShadow: hovered
          ? "0 12px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05)"
          : "0 1px 4px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        opacity: visible ? 1 : 0,
        transition: `opacity 0.55s ease-out ${index * 80}ms, transform 0.3s ease, box-shadow 0.3s ease`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={{ height: "192px", overflow: "hidden" }}>
        <img
          src={photo}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
        />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col gap-3">
        <h3
          className="font-normal"
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: "1.25rem",
            color: "#0A2540",
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.9375rem",
            color: "#475569",
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          {text}
        </p>

        <Link
          to={`/service/${id}`}
          className="inline-flex items-center gap-1 text-sm font-medium mt-1 transition-colors duration-200 group"
          style={{ color: "#2563EB", fontFamily: '"DM Sans", sans-serif' }}
          onClick={(e) => e.stopPropagation()}
        >
          Learn more
          <span
            className="transition-transform duration-200"
            style={{ transform: hovered ? "translateX(3px)" : "translateX(0)" }}
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

/* ── Section ──────────────────────────────────────────────────────────────── */
const CircularRotatingListDemo = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);


  return (
    <section
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: "#F8FAFC" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ───────────────────────────────────────────── */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: '"DM Sans", sans-serif', color: "#2563EB" }}
          >
            What We Do
          </p>
          <h2
            className="font-normal"
            style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              color: "#0A2540",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Our Services
          </h2>
          {/* Blue accent line — NOT a CSS text-decoration */}
          <div
            className="mx-auto mt-5"
            style={{ width: "80px", height: "2px", background: "#2563EB", borderRadius: "9999px" }}
          />
        </div>

        {/* ── Desktop grid (hidden below md) — 6 cards, 2 perfect rows of 3 ── */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {items.map((item, i) => (
            <ServiceCard key={item.id} {...item} index={i} visible={visible} />
          ))}
        </div>

        {/* ── Mobile card list (shown below md) ────────────────────────── */}
        <div className="md:hidden flex flex-col gap-6">
          {items.map((item, i) => (
            <ServiceCard key={item.id} {...item} index={i} visible={visible} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CircularRotatingListDemo;
