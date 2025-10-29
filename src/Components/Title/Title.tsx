import { motion } from "motion/react";
import React from "react";

const Title = ({ title }: { title: string }) => {
  const firstWord = title.split(" ")[0];
  const remainingWords = title.split(" ").slice(1).join(" ");

  return (
    <motion.div
      className="title "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {firstWord} <span>{remainingWords}</span>
    </motion.div>
  );
};

export default Title;
