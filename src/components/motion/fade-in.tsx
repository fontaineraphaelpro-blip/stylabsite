"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE_PREMIUM }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type FadeInHeroProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function FadeInHero({
  children,
  delay = 0,
  className,
  ...props
}: FadeInHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: EASE_PREMIUM }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
