import CircularRotatingList from "../components/CircularRotatingList";
import CarouselMain from "./CarouselMain";

import img3 from "../assets/services/img3.jpg";
import img4 from "../assets/services/img4.jpg";
import img5 from "../assets/services/img5.jpg";
import img6 from "../assets/services/img6.jpg";
import img7 from "../assets/services/img7.jpg";

const items = [
  {
    title: "Formulation Development",
    text: "We specialize in creating stable and effective pharmaceutical dosage forms, optimizing ingredients, ratios, and processes to ensure high-quality products with improved drug delivery and patient compliance.",
    photo: img3,
  },
  {
    title: "Microbial Testing",
    text: "Accurate detection and quantification of microorganisms in samples, ensuring compliance with regulatory standards and assessing product safety.",
    photo: img5,
  },
  {
    title: "Elemental Analysis",
    text: "Accurate determination of elemental composition using advanced analytical techniques for quality control and research.",
    photo: img4,
  },
  {
    title: "Chemical Testing",
    text: "Comprehensive chemical analysis to determine composition, purity, and regulatory compliance.",
    photo: img6,
  },
  {
    title: "Pharma Consultancy",
    text: "Expert guidance in regulatory compliance, quality assurance, and pharmaceutical product development.",
    photo: img7,
  },
];

const CircularRotatingListDemo = () => {
  return (
    <section className="pt-24 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Total Analytical & Research Solutions
      </h1>

      <hr className="w-48 h-1 mx-auto mb-12 bg-blue-300" />

      <CircularRotatingList items={items} />

      {/* Mobile-friendly fallback */}
      <CarouselMain items={items} />
    </section>
  );
};

export default CircularRotatingListDemo;
