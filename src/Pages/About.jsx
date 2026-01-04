import { useEffect, useState } from "react";
import about from "../assets/about.jpg";

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mb-36 md:my-16">
      <div className="container mx-auto px-4 pt-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={about}
              alt="About Quark Characterisation Services"
              className="mx-auto rounded-lg shadow-md"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2">
            <h2
              className={`text-center text-4xl md:text-5xl font-bold mb-4 transition-opacity duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              About Us
            </h2>

            <hr className="w-32 h-1 mx-auto mb-8 bg-blue-400 border-0" />

            <p
              className={`text-lg leading-relaxed transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              At <strong>Quark Characterisation Services</strong>, we are dedicated
              to providing innovative solutions and delivering excellence to our
              clients. With years of industry experience, our team of highly
              skilled professionals helps businesses thrive through technical
              expertise and strategic insights.
              <br /><br />
              From process optimization and quality control to regulatory
              compliance and product development, we deliver specialized
              solutions across the entire chemical value chain.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
