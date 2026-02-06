"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function SparkleButton({
  children,
  variant = "primary",
  ...rest
}: PropsWithChildren<{ variant?: "primary" | "ghost"; onClick?: () => void; className?: string }>) {
  const base = "px-5 py-3 rounded-full font-medium transition-colors relative";
  const styles =
    variant === "primary"
      ? "bg-roseDeep/90 hover:bg-roseDeep text-white shadow-glow"
      : "bg-white/10 hover:bg-white/15 border border-white/15";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles}`}
      {...rest}
    >
      {children}
      <motion.span
        className="absolute inset-0 rounded-full"
        initial={{ boxShadow: "0 0 0 rgba(255,42,131,0)" }}
        whileHover={{ boxShadow: "0 0 24px rgba(255,42,131,0.55)" }}
        transition={{ type: "tween", duration: 0.2 }}
      />
    </motion.button>
  );
}