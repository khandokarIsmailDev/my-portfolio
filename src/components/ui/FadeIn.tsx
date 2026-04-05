"use client";
/**
 * FadeIn — scroll-triggered entrance animation
 * Wraps any content with a Framer Motion fade + slide
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: FadeInProps) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  const dirs = {
    up:    { y: 28, x: 0  },
    down:  { y: -28, x: 0 },
    left:  { x: 28, y: 0  },
    right: { x: -28, y: 0 },
    none:  { x: 0,  y: 0  },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
