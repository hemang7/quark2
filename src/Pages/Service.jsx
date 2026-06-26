import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { links } from "../components/Navbar/Mylinks";

const Service = () => {
  const { serviceId } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const serviceLinks = links.find((link) => link.name === "Services");
  const allSubLinks =
    serviceLinks?.sublinks.flatMap((section) => section.sublink) || [];
  const service = allSubLinks.find(
    (item) => item.link === `service/${serviceId}`
  );

  if (!service) return null;

  const { name: title, desc: description, image } = service;

  return (
    <main className="bg-white min-h-screen" style={{ paddingTop: "70px" }}>
      {/* Page hero */}
      <div
        className="py-16 text-center"
        style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}
      >
        <span className="label-pill mb-4 inline-flex">Service Detail</span>
        <h1
          className="font-display mt-4"
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            color: "#0A2540",
            lineHeight: 1.1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(20px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            maxWidth: "40rem",
            margin: "1rem auto 0",
            padding: "0 1.5rem",
          }}
        >
          {title}
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

      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero image */}
        <div
          className="mb-12 mx-auto"
          style={{
            maxWidth: "560px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(24px)",
            transition: "opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
          }}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={image}
              alt={title}
              className="w-full object-cover"
              style={{ maxHeight: "280px" }}
            />
          </div>
        </div>

        {/* Description card */}
        <div
          className="rounded-2xl p-8 bg-white"
          style={{
            border: "1px solid #E2E8F0",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(24px)",
            transition: "opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s",
          }}
        >
          {/* Top accent */}
          <div
            className="w-12 h-0.5 mb-6"
            style={{ background: "#2563EB" }}
          />
          <ul className="space-y-4">
            {description.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "1rem",
                  color: "#475569",
                  lineHeight: 1.8,
                }}
              >
                <span
                  className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#2563EB" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Back CTA */}
        <div
          className="mt-10 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.7s ease-out 0.35s",
          }}
        >
          <Link to="/contact" className="btn-primary w-full sm:w-auto text-center">
            Enquire About This Service
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Service;
