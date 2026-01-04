import { Link } from "react-router-dom";

const AnalyticalRDSolutions = () => {
  return (
    <section className="bg-blue-800 py-12 my-16">
      <div className="container mx-auto px-4 flex flex-col items-center text-center text-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl">
          Experience Best-in-Class Analytical & R&D Solutions
        </h2>

        <p className="text-lg mb-6">
          Dedicated to supporting your business 24/7
        </p>

        <Link
          to="/contact"
          className="bg-blue-500 px-6 py-2 rounded-full font-medium hover:bg-blue-600 hover:text-white transition"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
};

export default AnalyticalRDSolutions;
