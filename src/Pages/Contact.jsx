import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import { useToast } from "@chakra-ui/react";
import contact from "../assets/contact.jpg";
import Logo from "../assets/logo-full.png";
import Faq from "../components/Faq";

const inputStyle = {
  width: "100%",
  padding: "0.625rem 0.875rem",
  borderRadius: "0.5rem",
  border: "1px solid #E2E8F0",
  fontFamily: '"DM Sans", sans-serif',
  fontSize: "0.9375rem",
  color: "#0A2540",
  background: "#ffffff",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

const Contact = () => {
  const formRef = useRef(null);
  const toast = useToast();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleExternalLink = (url) => window.open(url, "_blank");
  const handleEmailClick = () => { window.location.href = "mailto:ho@quarkcs.in"; };

  const showError = (message) =>
    toast({ title: "Error", description: message, status: "error", duration: 4000, isClosable: true });

  const validateForm = () => {
    const { user_name, user_email } = formRef.current;
    if (!user_name.value.trim()) { showError("Please enter your name."); return false; }
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
      .sendForm("service_4ayasi7", "template_fehl4rg", formRef.current, "S5aRZd3ms3a8WGUnm")
      .then(() => {
        e.target.reset();
        toast({ title: "Thank you!", description: "We'll get in touch with you shortly.", status: "success", duration: 4000, isClosable: true });
      })
      .catch(() => showError("Something went wrong. Please try again later."));
  };

  const faqs = [
    { q: "What services do we offer?", a: "We provide consultancy services in optimization, product development, quality control, and regulatory compliance." },
    { q: "How can I schedule a consultation?", a: "You can contact us via email and our team will get back to you shortly." },
    { q: "What are your areas of expertise?", a: "We specialize in process optimization, regulatory compliance, and quality control." },
    { q: "Do you help with regulatory approvals?", a: "Yes, we assist in obtaining certifications and regulatory approvals." },
  ];

  return (
    <main className="bg-white min-h-screen" style={{ paddingTop: "70px" }}>
      {/* Page hero bar */}
      <div
        className="py-16 text-center"
        style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}
      >
        <span className="label-pill mb-4 inline-flex">Get in Touch</span>
        <h1
          className="font-display mt-4"
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            color: "#0A2540",
            lineHeight: 1.1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(20px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          Contact Us
        </h1>
        <div
          style={{
            display: "block",
            width: "80px",
            height: "2px",
            background: "#2563EB",
            borderRadius: "9999px",
            margin: "1.25rem auto 0",
          }}
        />
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Header row */}
        <div
          className="flex flex-col md:flex-row items-center gap-14 mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(20px)",
            transition: "opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
          }}
        >
          <div className="md:w-1/2">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            >
              <img
                src={contact}
                alt="Contact Quark Characterisation Services"
                className="w-full object-cover"
                style={{ maxHeight: "380px" }}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "1.0625rem",
                color: "#475569",
                lineHeight: 1.85,
              }}
            >
              We leverage technology to deliver innovative, analytics-focused solutions
              tailored to your needs. Reach out and our team will respond promptly.
            </p>
          </div>
        </div>

        {/* Contact card */}
        <div
          className="rounded-2xl overflow-hidden mb-16"
          style={{
            border: "1px solid #E2E8F0",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(24px)",
            transition: "opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s",
          }}
        >
          {/* Blue top accent bar */}
          <div style={{ height: "4px", background: "#2563EB" }} />

          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12">
            {/* Contact info */}
            <div className="md:w-5/12 space-y-5">
              <div className="mb-6">
                <img
                  src={Logo}
                  alt="Quark Characterisation Services"
                  style={{ height: "32px", width: "auto", display: "block" }}
                />
              </div>
              <p
                style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.9375rem", color: "#475569", lineHeight: 1.7 }}
              >
                Reach out for inquiries, quotes, or to schedule a consultation with our expert team.
              </p>

              <button
                className="flex items-start gap-3 group transition-colors duration-200"
                onClick={() => handleExternalLink("https://www.google.com/maps/search/khasra+number+28+kuri+bhagtasni+jodhpur/")}
              >
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "#EFF6FF", color: "#2563EB" }}
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <span
                  className="text-left group-hover:text-blue-600 transition-colors"
                  style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.9375rem", color: "#475569", lineHeight: 1.6 }}
                >
                  8, Khasra No. 28, Kuri Bhagtasni, Jodhpur, Rajasthan
                </span>
              </button>

              <button
                className="flex items-center gap-3 group transition-colors duration-200"
                onClick={handleEmailClick}
              >
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#EFF6FF", color: "#2563EB" }}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span
                  className="group-hover:text-blue-600 transition-colors"
                  style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.9375rem", color: "#475569" }}
                >
                  ho@quarkcs.in
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px" style={{ background: "#E2E8F0" }} />

            {/* Form */}
            <form ref={formRef} onSubmit={sendEmail} className="flex-1 space-y-4">
              <div>
                <label
                  className="block mb-1.5 text-sm font-medium"
                  style={{ fontFamily: '"DM Sans", sans-serif', color: "#0A2540" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your full name"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563EB";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#E2E8F0";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label
                  className="block mb-1.5 text-sm font-medium"
                  style={{ fontFamily: '"DM Sans", sans-serif', color: "#0A2540" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563EB";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#E2E8F0";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label
                  className="block mb-1.5 text-sm font-medium"
                  style={{ fontFamily: '"DM Sans", sans-serif', color: "#0A2540" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="How can we help you?"
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563EB";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#E2E8F0";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary justify-center"
                style={{ textAlign: "center" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ */}
        <Faq faqs={faqs} />
      </section>
    </main>
  );
};

export default Contact;
