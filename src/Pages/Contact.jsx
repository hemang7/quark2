import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import { useToast } from "@chakra-ui/react";

import contact from "../assets/contact.jpg";
import Logo from "../assets/logo.png";
import Faq from "../components/Faq";

const Contact = () => {
  const formRef = useRef(null);
  const toast = useToast();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleExternalLink = (url) => window.open(url, "_blank");

  const handleEmailClick = () => {
    window.location.href = "mailto:ho@quarkcs.in";
  };

  const showError = (message) =>
    toast({
      title: "Error",
      description: message,
      status: "error",
      duration: 4000,
      isClosable: true,
    });

  const validateForm = () => {
    const { user_name, user_email } = formRef.current;

    if (!user_name.value.trim()) {
      showError("Please enter your name.");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(user_email.value.trim())) {
      showError("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .sendForm(
        "service_4ayasi7",
        "template_fehl4rg",
        formRef.current,
        "S5aRZd3ms3a8WGUnm"
      )
      .then(() => {
        e.target.reset();
        toast({
          title: "Thank you!",
          description: "We'll get in touch with you shortly.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      })
      .catch(() =>
        showError("Something went wrong. Please try again later.")
      );
  };

  const faqs = [
    {
      q: "What services do we offer?",
      a: "We provide consultancy services in optimization, product development, quality control, and regulatory compliance.",
    },
    {
      q: "How can I schedule a consultation?",
      a: "You can contact us via email and our team will get back to you shortly.",
    },
    {
      q: "What are your areas of expertise?",
      a: "We specialize in process optimization, regulatory compliance, and quality control.",
    },
    {
      q: "Do you help with regulatory approvals?",
      a: "Yes, we assist in obtaining certifications and regulatory approvals.",
    },
  ];

  return (
    <section className="container mx-auto px-5 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
        <div className="md:w-1/2">
          <img
            src={contact}
            alt="Contact Quark Characterisation Services"
            className="rounded-lg mx-auto shadow-md"
          />
        </div>

        <div className="md:w-1/2 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Contact Us
          </h2>
          <hr className="w-32 h-1 mx-auto bg-blue-400 border-0 mb-6" />
          <p
            className={`text-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We leverage technology to deliver innovative, agriculture-focused
            solutions tailored to your needs.
          </p>
        </div>
      </div>

      {/* Blue Section */}
      <div className="bg-blue-800 py-12 rounded-lg">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 text-white space-y-4">
            <img
              src={Logo}
              alt="Quark Logo"
              className="h-10 bg-white rounded p-1"
            />

            <p
              className="cursor-pointer hover:text-pink-400"
              onClick={() =>
                handleExternalLink(
                  "https://www.google.com/maps/search/khasra+number+28+kuri+bhagtasni+jodhpur/"
                )
              }
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              8, Khasra No. 28, Kuri Bhagtasni, Jodhpur, Rajasthan
            </p>

            <p
              className="cursor-pointer hover:text-pink-400"
              onClick={handleEmailClick}
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              ho@quarkcs.in
            </p>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="md:w-1/2 space-y-5"
          >
            <div>
              <label className="text-white">Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full mt-2 px-4 py-2 rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="text-white">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full mt-2 px-4 py-2 rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="text-white">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full mt-2 px-4 py-2 rounded-md focus:outline-none"
              />
            </div>

            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-900 px-6 py-2 rounded-lg text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <Faq faqs={faqs} />
      </div>
    </section>
  );
};

export default Contact;
