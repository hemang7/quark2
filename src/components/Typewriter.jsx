import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typewriter = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Welcome to Quark Consultancy Services."],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typeRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typeRef}></span>;
};

export default Typewriter;
