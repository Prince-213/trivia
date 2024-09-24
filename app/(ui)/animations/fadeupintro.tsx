"use client";

import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

const FadeUpIntro = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      console.log("Yeah");
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
        delay: delay,
      }}
      ref={ref}
      className=" relative "
    >
      {children}
    </motion.div>
  );
};

export default FadeUpIntro;
