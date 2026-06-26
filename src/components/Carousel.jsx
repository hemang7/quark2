import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => ({
    ...element,
    onClick: () => setGoToSlide(index),
  }));

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide((prev) =>
        prev === null ? 1 : prev === cards.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [cards]);

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
        marginBottom: 70,
        marginTop: 50,
      }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className="font-display"
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            color: "#0A2540",
            lineHeight: 1.15,
          }}
        >
          Our Services
        </h2>
        <div
          style={{
            display: "block",
            width: "80px",
            height: "2px",
            background: "#2563EB",
            borderRadius: "9999px",
            margin: "1rem auto 0",
          }}
        />
      </div>

      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        animationConfig={config.gentle}
      />
    </div>
  );
}
