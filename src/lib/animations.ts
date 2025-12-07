import type { Variants } from "motion/react";

export const transitions = {
  spring: {
    type: "spring" as const,
    stiffness: 100,
    damping: 10,
  },
  smooth: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1.0] as const, 
  },
};

export const variants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: transitions.smooth },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: transitions.spring },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: transitions.spring },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: transitions.spring },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: transitions.spring },
  },
  float: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};
