import React from "react";
import CircularRotatingList from "../components/CircularRotatingList";
import CarouselMain from "./CarouselMain";
import img6 from "../assets/services/img6.jpg";
import img5 from "../assets/services/img5.jpg";
import img3 from "../assets/services/img3.jpg";
import img4 from "../assets/services/img4.jpg";
import img7 from "../assets/services/img7.jpg";

const items = [
  {
    text: "Formulation Development: We specialize in creating stable and effective pharmaceutical dosage forms, optimizing ingredients, ratios, and processes to ensure high-quality products with improved drug delivery and patient compliance.",
    photo: img3,
    title: "Formulation Development",
  },
  {
    text: "Microbial Testing: Accurate detection and quantification of microorganisms in samples, ensuring compliance with regulatory standards and assessing product safety.",
    photo: img5,
    title: "Microbial Testing",
  },
  {
    text: "Elemental Analysis: Accurate determination of elemental composition in samples using advanced analytical techniques. Providing valuable insights for quality control, research, and product development.",
    photo: img4,
    title: "Elemental Analysis",
  },
  {
    text: "Chemical Testing: Thorough analysis of substances to determine their chemical composition, properties, and purity for quality assurance and regulatory compliance.",
    photo: img6,
    title: "Chemical Testing",
  },
  {
    text: "Pharma Consultancy: Expert guidance for pharmaceutical companies in regulatory compliance, quality assurance, and product development. Maximizing business success.",
    photo: img7,
    title: "Pharma Consultancy",
  },
];

const CircularRotatingListDemo = () => {
  return (
    <>
      <div className="pt-20 text-center">
        <h1 className="text-3xl mb-4 font-bold justify-center flex sm:mt-20 sm:text-4xl">
          Total Analytical & Research Solutions
        </h1>
        <hr className="w-48 mb-12 h-1 mx-auto mt-3 bg-blue-300" />
        <div className="">
          <CircularRotatingList items={items} />
        </div>
        <CarouselMain items={items} />
      </div>
    </>
  );
};

export default CircularRotatingListDemo;
