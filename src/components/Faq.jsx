import React, { useEffect, useRef, useState } from "react";

const FaqItem = ({ faq, defaultAllExpanded }) => {
  const [isItemOpen, setIsItemOpen] = useState(faq.expanded ?? defaultAllExpanded ?? false);
  const ansRef = useRef();
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    if (ansRef.current) setHeight(ansRef.current.offsetHeight);
  }, []);

  const { q, a } = faq;

  return (
    <div style={{ borderTop: "1px solid #E2E8F0" }}>
      <button
        className="w-full flex justify-between items-center gap-4 text-left py-5 group"
        onClick={() => setIsItemOpen(!isItemOpen)}
        aria-expanded={isItemOpen}
      >
        <span
          className="font-medium transition-colors duration-200 group-hover:text-blue-600"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.9375rem",
            color: "#0A2540",
          }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200"
          style={{
            background: isItemOpen ? "#2563EB" : "#F1F5F9",
            color: isItemOpen ? "#ffffff" : "#94A3B8",
            border: isItemOpen ? "none" : "1px solid #E2E8F0",
          }}
        >
          {isItemOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: isItemOpen ? height : 0 }}
      >
        <div
          ref={ansRef}
          className="pb-5"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.9375rem",
            color: "#475569",
            lineHeight: 1.75,
          }}
        >
          {a}
        </div>
      </div>
    </div>
  );
};

const Faq = ({ faqs = [], defaultAllExpanded = false }) => {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <div className="text-center mb-10">
        <span className="label-pill mb-4 inline-flex">Support</span>
        <h2
          className="font-display mt-4 mb-5"
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            color: "#0A2540",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div
          style={{
            display: "block",
            width: "80px",
            height: "2px",
            background: "#2563EB",
            borderRadius: "9999px",
            margin: "0 auto",
          }}
        />
      </div>
      <div
        className="rounded-2xl bg-white px-6 py-2"
        style={{ border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
      >
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} faq={faq} defaultAllExpanded={defaultAllExpanded} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
