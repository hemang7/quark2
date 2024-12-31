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
    // Add additional FAQs here
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-5 py-10">
      <div className="flex flex-col items-center w-full max-w-5xl bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex items-center justify-center md:w-1/2 p-5">
            <img
              src={contact}
              alt="Contact"
              className="rounded-md max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 p-5">
            <form onSubmit={sendEmail} ref={form} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="user_mobile"
                placeholder="Mobile"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <Faq faqs={faqs} />
      </div>
    </div>
  );
};

export default Contact;
