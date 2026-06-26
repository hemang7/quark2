import React, { useEffect, useState } from "react";

const CircularRotatingList = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);
  const angle = -360 / items.length;
  const radius = 210;
  const startAngle = -angle * activeItem;

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveItem((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [activeItem, items.length]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-4">
      {/* Text panel */}
      <div className="lg:w-80 order-2 lg:order-1">
        <div
          className="rounded-xl p-6"
          style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
          }}
        >
          <h3
            className="font-display mb-3"
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: "1.25rem",
              color: "#0A2540",
            }}
          >
            {items[activeItem].title}
          </h3>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.9375rem",
              color: "#475569",
              lineHeight: 1.75,
            }}
          >
            {items[activeItem].text}
          </p>

          {/* Dot indicators */}
          <div className="flex gap-1.5 mt-5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveItem(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeItem ? "24px" : "8px",
                  height: "8px",
                  background: i === activeItem ? "#2563EB" : "#CBD5E1",
                }}
                aria-label={`Select ${items[i].title}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Circular orbit */}
      <div
        className="relative flex justify-center items-center order-1 lg:order-2 flex-shrink-0"
        style={{ width: 480, height: 480 }}
      >
        {/* Orbit ring */}
        <div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            border: "1px dashed #CBD5E1",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 320,
            height: 320,
            border: "1px solid #F1F5F9",
          }}
        />

        {/* Center active image */}
        <div
          className="w-28 h-28 rounded-2xl overflow-hidden"
          style={{
            border: "2px solid #2563EB",
            boxShadow: "0 4px 14px rgba(37,99,235,0.25)",
          }}
        >
          <img
            src={items[activeItem].photo}
            alt={items[activeItem].title}
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>

        {/* Orbiting thumbnails */}
        <ul className="absolute inset-0">
          {items.map((item, i) => (
            <li
              key={i}
              className="absolute top-1/2 left-1/2 transition-all duration-1000"
              style={{
                transform: `rotate(${startAngle + i * angle}deg) translateY(-${radius}px) rotate(${-(startAngle + i * angle)}deg)`,
                marginLeft: "-2.25rem",
                marginTop: "-2.25rem",
              }}
              onClick={() => setActiveItem(i)}
            >
              <span
                className="w-18 h-18 rounded-xl flex justify-center items-center cursor-pointer overflow-hidden transition-all duration-300"
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "12px",
                  border: i === activeItem
                    ? "2px solid #2563EB"
                    : "2px solid #E2E8F0",
                  boxShadow: i === activeItem
                    ? "0 4px 14px rgba(37,99,235,0.2)"
                    : "0 1px 3px rgba(0,0,0,0.06)",
                  transform: i === activeItem ? "scale(1.12)" : "scale(1)",
                }}
              >
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CircularRotatingList;
