import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";
import Service from "./Pages/Service";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(t);
  }, [location]);

  window.onbeforeunload = () => { window.scrollTo(0, 0); };

  return (
    <div className="w-full overflow-x-hidden bg-white text-navy">
      <ScrollToTop />
      <ChakraProvider>
        <Navbar />
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service/:serviceId" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
        <Footer />
      </ChakraProvider>
    </div>
  );
};

export default App;
