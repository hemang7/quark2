import { useEffect, useState } from "react";

const CircularRotatingList = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) return null;

  const totalItems = items.length;
  const angleStep = 360 / totalItems;
  const radius = 210;

  // Auto rotate (stable interval)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <div className="relative w-[500px] h-[500px] flex justify-center items-center mx-auto mt-16">
      {/* Center text */}
      <div className="w-[260px] h-[300px] text-center font-semibold flex items-center justify-center px-4">
        {items[activeIndex].text}
      </div>

      {/* Dashed circle */}
      <div className="absolute rounded-full border border-dashed border-gray-400 w-[400px] h-[400px]" />

      {/* Rotating items */}
      <ul className="absolute inset-0">
        {items.map((item, index) => {
          const rotation = index * angleStep - activeIndex * angleStep;

          return (
            <li
              key={index}
              className="absolute top-1/2 left-1/2 transition-transform duration-1000 ease-in-out"
              style={{
                transform: `
                  rotate(${rotation}deg)
                  translateY(-${radius}px)
                  rotate(${-rotation}deg)
                `,
              }}
            >
              <button
                onClick={() => setActiveIndex(index)}
                className="w-24 h-24 rounded-full overflow-hidden hover:scale-105 transition"
                aria-label={item.title}
              >
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CircularRotatingList;
