import React from "react";
import { motion } from "framer-motion";
export default function SliderItem({ children, page, direction, variants }) {
  return (
    <motion.div
      key={page}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
}
