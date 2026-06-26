import React, { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useLayoutEffect(() => {
    const element = document.documentElement;
    if (element) {
      element.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
