import { motion } from "motion/react";
import { variants } from "../../lib/animations";

const Title = ({ title }: { title: string }) => {
  const firstWord = title.split(" ")[0];
  const remainingWords = title.split(" ").slice(1).join(" ");

  return (
    <motion.div
      className="title text-3xl md:text-5xl p-2 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants.fadeUp}
    >
      {firstWord} <span>{remainingWords}</span>
    </motion.div>
  );
};

export default Title;
