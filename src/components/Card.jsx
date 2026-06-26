import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ imagen, title, desc }) {
  const [show, setShown] = useState(false);

  const props = useSpring({
    transform: show ? "scale(1.02) translateY(-4px)" : "scale(1) translateY(0px)",
    boxShadow: show
      ? "0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.06)"
      : "0 2px 6px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)",
  });

  return (
    <animated.div
      style={{
        ...props,
        display: "flex",
        flexDirection: "column",
        width: "22rem",
        marginTop: "15%",
        borderRadius: "1rem",
        overflow: "hidden",
        background: "#ffffff",
        border: "1px solid",
        borderColor: show ? "#BFDBFE" : "#F1F5F9",
        cursor: "default",
        transition: "border-color 0.3s ease",
      }}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      {/* Image */}
      <div style={{ height: "180px", overflow: "hidden", position: "relative" }}>
        <img
          src={imagen}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: show ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem 1.5rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <h2
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: "1.125rem",
            color: "#0A2540",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.875rem",
            color: "#475569",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {desc}
        </p>
      </div>

      {/* Bottom accent */}
      <div
        style={{
          height: "3px",
          background: "#2563EB",
          opacity: show ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </animated.div>
  );
}

export default Card;
