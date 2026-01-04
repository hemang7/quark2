import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@impactagrosolutions.com";
  };

  // const handlePhoneClick = (phoneNumber) => {
  //   window.location.href = `tel:${phoneNumber}`;
  // };

  return (
    <div className="bg-blue-800 text-gray-200">
      <div className="container mx-auto px-4 pt-8 md:pt-8 pb-8 md:pb-12 text-xs sm:text-sm">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-20">
          <div className="md:w-1/4 w-64 mx-auto">
            <div className="flex justify-center mb-4 md:mb-6 bg-white sm:mt-1 rounded overflow-hidden">
              <img src={Logo} alt="logo" className="h-auto w-auto" />
            </div>
          </div>

          <div className="md:w-3/4 md:ml-8 flex flex-col md:flex-row md:justify-end md:items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Reach out</h2>
              {/* <p
                className="mb-2 cursor-pointer hover:text-pink-400"
                onClick={() => handlePhoneClick("+91 7878308980")}
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2  " />
                (+91) 7878308980
              </p> */}
              
              <p
                className="mb-2 cursor-pointer hover:text-pink-400"
                onClick={handleEmailClick}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Email: ho@quarkcs.in
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                Opening Hours: Mon-Fri 10am-6pm
              </p>
              <p>FAQs or Frequently Asked Questions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 py-1 flex text-xs sm:text-sm justify-between items-center">
        <div className="text-gray-400 mx-auto">
          &copy; {currentYear} Quark Characterisation Services. All rights reserved
        </div>
        <button
          className="bg-blue-700 mt-4 mr-4 mb-2 hover:bg-blue-500 rounded-full p-1 sm:p-2 focus:outline-none"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faChevronUp} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
