"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FadeInFrom = ({ id, direction, children , style = {}}) => {
  const [isInView, setIsInView] = useState(false);

  const scrollHandler = () => {
    const element = document.getElementById(id);
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsInView(true);
    }
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const variants = {
    left: { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    top: { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    bottom: { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    scale: {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        id={id}
        initial={variants[direction].initial}
        animate={isInView ? variants[direction].animate : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={style}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeInFrom;
