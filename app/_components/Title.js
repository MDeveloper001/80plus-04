"use client";

import { motion } from "framer-motion";

export default function Title({ children }) {
  const lineVariant = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <h2 className="flex items-center gap-4 md:gap-6 text-3xl md:text-4xl font-bold w-full max-w-4xl justify-center">
      {/* Left line */}
      <motion.span
        className="h-0.5 bg-accent-500/70 flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={lineVariant}
      />

      {/* Title text */}
      {children}

      {/* Right line */}
      <motion.span
        className="h-0.5 bg-accent-500/70 flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={lineVariant}
      />
    </h2>
  );
}
