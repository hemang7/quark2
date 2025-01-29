import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import contact from "../assets/contact.jpg";
import Logo from "../assets/logo.png";

import Faq from "../components/Faq";
import emailjs from "emailjs-com";
import { useToast } from "@chakra-ui/react";
import "../index.css";

const Contact = () => {
  const form = useRef();
  const toast = useToast();

  const [fadeIn, setFadeIn] = useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:info@impactagrosolutions.com";
  };

  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/search/khasra+number+28+kuri+bhagtasni+jodhpur/@26.2079571,73.0224723,15z/data=!3m1!4b1?entry=ttu"
    );
  };

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const validateForm = () => {
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const mobile = form.current.user_mobile.value.trim();
    let formIsValid = true;

    // Name validation
    if (!name) {
      toast({
        title: "Error",
        description: "Please enter your name.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      formIsValid = false;
    }

    // Mobile validation
    if (!mobile) {
      toast({
        title: "Error",
        description: "Please enter your mobile number.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      formIsValid = false;
    } else if (mobile.length !== 10) {
      toast({
        title: "Error",
        description: "Mobile number should be 10 digits.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      formIsValid = false;
    }

    // Email validation
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Error",
        description: "Email is invalid.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      formIsValid = false;
    }

    return formIsValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_4ayasi7",
          "template_fehl4rg",
          form.current,
          "S5aRZd3ms3a8WGUnm"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            toast({
              title: "Thank you!",
              description: "We'll get in touch with you shortly.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const faqs = [
    {
      q: "What services do we offer?",
      a: "We offer a wide range of consultancy services in areas such as optimization, product development, quality control, and regulatory compliance.",
      expanded: true,
    },
    {
      q: "How can I schedule a consultation?",
      a: "You can schedule a consultation by contacting us through phone or email. Our team will assist you in setting up a convenient time.",
    },
    {
      q: "What are your areas of expertise?",
      a: "We specialize in providing consultancy services in areas such as process optimization, product development, quality control, and regulatory compliance.",
    },
    {
      q: "Do you provide assistance in obtaining regulatory approvals for products?",
      a: "Yes, we have expertise in navigating the regulatory landscape and can support you in obtaining necessary approvals and certifications for your products, including compliance with safety and labeling requirements.",
    },
  ];

  return (
    <div className="container mx-auto px-5 py-10 md:my-10 mt-1">
      <div className="flex justify-center">
        <div
          className="flex flex-col md:flex-row items-center md:rounded mt-2"
          style={{ marginBottom: "2rem" }}
        >
          <div className="md:w-1/2">
            <img
              src={contact}
              alt="Company"
              className="m-auto rounded-md sm:mt-7"
            />
          </div>
          <div className="md:w-1/2 mt-3 md:my-1">
            <h4
              className={`flex justify-center text-5xl text-bold mb-4 sm:mt-0 mt-10 ${
                fadeIn ? "fade-in" : ""
              }`}
            >
              Contact Us
            </h4>
            <hr className="w-48 h-1 mx-auto mb-12 bg-blue-300" />
            <div className={`fade-in ${fadeIn ? "fade-in-delayed" : ""}`}>
              <p className="text-lg text-center">
                We are passionate about leveraging technology in agriculture and
                are here to provide innovative solutions tailored to your
                specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width blue background section */}
      <div className="w-full bg-blue-800 py-10">
        <div className="flex flex-col md:flex-row mx-auto max-w-6xl px-5">
          <div className="md:w-1/2 md:ml-8 flex justify-center sm:mt-3 md:order-2">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">
                <img
                  src={Logo}
                  alt="logo"
                  className="h-10 w-auto inline-block mr-2 bg-white rounded"
                />
              </h2>
              <p
                className="text-white mb-2 hover:text-pink-500 cursor-pointer"
                onClick={handleMapClick}
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="inline text-white mr-2"
                />
                8, Khasra No. 28
                <br />
                Kuri Bhagtasni, Jodhpur
                <br />
                Rajasthan, India 342013
              </p>
              <p
                className="text-white py-2 cursor-pointer hover:text-pink-500"
                onClick={handleEmailClick}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="inline text-white mr-2"
                />
                quarkcs0702@gmail.com
              </p>
              <p
                className="text-white cursor-pointer hover:text-pink-500"
                onClick={() => handlePhoneClick("+91 123456789")}
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="inline text-white mr-2"
                />
                (+91) 7878308980
              </p>
            </div>
          </div>
          <div className="md:w-1/2 md:mr-8 flex justify-center md:order-1">
            <form onSubmit={sendEmail} ref={form} className="w-full max-w-md">
              <div className="mb-6">
                <label htmlFor="name" className="text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="px-4 py-2 mt-2 rounded-md text-black w-full focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="mobile" className="text-white">
                  Mobile Number
                </label>
                <input
                  type="number"
                  id="mobile"
                  name="user_mobile"
                  className="px-4 py-2 mt-2 rounded-md text-black w-full focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="px-4 py-2 mt-2 rounded-md text-black w-full focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="px-4 py-2 mt-2 rounded-md text-black w-full focus:outline-none"
                ></textarea>
              </div>

              <div className="mb-6 flex justify-center">
                <button
                  type="submit"
                  value="Send"
                  style={{ minWidth: "8rem" }}
                  className="bg-blue-600 text-white md:w-1/4 flex-shrink-0 px-4 py-2 rounded-lg hover:bg-blue-900"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="m-8">
        <Faq faqs={faqs} defaultAllExpanded={false} />
      </div>
    </div>
  );
};

export default Contact;
