import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <section className="container mx-auto px-4 py-16 mb-40">
      <div className="flex flex-col items-center">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full max-w-xl max-h-72 object-cover rounded-3xl shadow-md mb-8"
        />

        {/* Content */}
        <div className="max-w-3xl w-full">
          <h1
            className={`text-3xl md:text-4xl font-bold mb-8 transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {title}
          </h1>

          <ul
            className={`text-lg text-gray-700 list-disc pl-6 space-y-3 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
