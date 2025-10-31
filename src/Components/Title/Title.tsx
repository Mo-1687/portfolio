import { motion } from "motion/react";

const Title = ({ title }: { title: string }) => {
  const firstWord = title.split(" ")[0];
  const remainingWords = title.split(" ").slice(1).join(" ");

  return (
    <motion.div
      className="title text-3xl md:text-5xl p-2 "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {firstWord} <span>{remainingWords}</span>
    </motion.div>
  );
};

export default Title;
