import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicroscope,
  faHandHoldingHand,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  {
    metric: "10+",
    icon: faUserDoctor,
    text: "Qualified Professionals",
    detail: "Years of industry experience",
  },
  {
    metric: "ISO",
    icon: faMicroscope,
    text: "Modern Equipment",
    detail: "Certified & calibrated instruments",
  },
  {
    metric: "24/7",
    icon: faHandHoldingHand,
    text: "24x7 Customer Support",
    detail: "Always here when you need us",
  },
];

const Stats = () => {
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
      className="bg-white"
      style={{ borderTop: "1px solid #F1F5F9", borderBottom: "1px solid #F1F5F9" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map(({ metric, icon, text, detail }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-12 py-12"
              style={{
                borderRight: idx < stats.length - 1 ? "1px solid #F1F5F9" : "none",
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(20px)",
                transition: `opacity 0.6s ease-out ${idx * 100}ms, transform 0.6s ease-out ${idx * 100}ms`,
              }}
            >
              {/* Icon container */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl"
                style={{ background: "#EFF6FF", color: "#2563EB" }}
              >
                <FontAwesomeIcon icon={icon} />
              </div>

              {/* Metric */}
              <p
                className="font-normal mb-1"
                style={{
                  fontFamily: '"DM Serif Display", Georgia, serif',
                  fontSize: "2rem",
                  color: "#0A2540",
                  lineHeight: 1.1,
                }}
              >
                {metric}
              </p>

              {/* Label */}
              <p
                className="font-medium mb-2"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.9375rem",
                  color: "#0A2540",
                }}
              >
                {text}
              </p>

              {/* Sub-label */}
              <p
                className="uppercase tracking-widest"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.6875rem",
                  color: "#94A3B8",
                  letterSpacing: "0.1em",
                }}
              >
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
