import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:ho@quarkcs.in";
  };

  return (
    <footer className="bg-blue-800 text-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10 text-sm">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Logo */}
          <div className="md:w-1/4 flex justify-center">
            <div className="bg-white rounded overflow-hidden p-2">
              <img src={Logo} alt="Quark Logo" className="h-8 w-auto" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:w-3/4 flex justify-center md:justify-end">
            <div className="text-center md:text-left space-y-3">
              <h2 className="text-xl font-bold">Reach out</h2>

              <p
                className="cursor-pointer hover:text-pink-400"
                onClick={handleEmailClick}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                ho@quarkcs.in
              </p>

              <p>
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                Mon – Fri, 10am – 6pm
              </p>

              <p className="text-gray-300">
                FAQs & Frequently Asked Questions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-500 py-3 px-4 flex items-center justify-between text-xs sm:text-sm">
        <p className="text-gray-400">
          © {currentYear} Quark Characterisation Services. All rights reserved.
        </p>

        <button
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="bg-blue-700 hover:bg-blue-500 rounded-full p-2 focus:outline-none"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
