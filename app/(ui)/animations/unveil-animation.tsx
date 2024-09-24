"use client";

import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

const UnveilAnimation = ({
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
    <motion.div ref={ref} className=" relative w-fit">
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: inView ? "0%" : "100%" }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
          delay: delay,
        }}
        className=" absolute w-full bg-slat-green h-full"
      ></motion.div>
      {children}
    </motion.div>
  );
};

export default UnveilAnimation;
