import { useEffect, useState, useRef } from "react";
import about from "../assets/about.jpg";

const AboutUsPage = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="bg-white min-h-screen" style={{ paddingTop: "70px" }}>
      {/* Page hero bar */}
      <div
        className="py-16 text-center"
        style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}
      >
        <span className="label-pill mb-4 inline-flex">Who We Are</span>
        <h1
          ref={sectionRef}
          className="font-display mt-4"
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            color: "#0A2540",
            lineHeight: 1.1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(20px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          About Us
        </h1>
        <div
          style={{
            display: "block",
            width: "80px",
            height: "2px",
            background: "#2563EB",
            borderRadius: "9999px",
            margin: "1.25rem auto 0",
          }}
        />
      </div>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <div
            className="md:w-1/2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "none" : "translateX(-24px)",
              transition: "opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
            }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              }}
            >
              <img
                src={about}
                alt="About Quark Characterisation Services"
                className="w-full object-cover"
                style={{ maxHeight: "440px" }}
              />
            </div>
          </div>

          {/* Text */}
          <div
            className="md:w-1/2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "none" : "translateX(24px)",
              transition: "opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s",
            }}
          >
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "1.0625rem",
                color: "#475569",
                lineHeight: 1.85,
                marginBottom: "1.5rem",
              }}
            >
              At{" "}
              <strong style={{ color: "#0A2540", fontWeight: 600 }}>
                Quark Characterisation Services
              </strong>
              , we are dedicated to providing innovative solutions and delivering
              excellence to our clients. With years of industry experience, our team
              of highly skilled professionals helps businesses thrive through technical
              expertise and strategic insights.
            </p>
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "1.0625rem",
                color: "#475569",
                lineHeight: 1.85,
              }}
            >
              From process optimization and quality control to regulatory compliance
              and product development, we deliver specialized solutions across the
              entire chemical value chain.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                "Process Optimization",
                "Quality Control",
                "Regulatory Compliance",
                "Product Development",
              ].map((tag) => (
                <span
                  key={tag}
                  className="label-pill"
                  style={{ background: "#EFF6FF", color: "#1E6FD9" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
