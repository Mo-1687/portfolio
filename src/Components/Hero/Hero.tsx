import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, transform: "translateY(50px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0)",
      transition: { duration: 1 },
    },
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as any },
    },
  };
  return (
    <div id="hero" className="max-w-6xl mx-auto min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        className="  flex lg:items-center justify-between  gap-5 flex-col-reverse lg:flex-row py-5 px-4 "
      >
        <motion.div className="info" variants={itemVariants}>
          <motion.div className="my-6" variants={itemVariants}>
            <span className="text-primary font-semibold bg-primary/10 rounded-full border border-primary px-4 py-2  ">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            className=" text-5xl md:text-7xl font-bold text-accent-foreground "
            variants={itemVariants}
          >
            Hi, I'm{" "}
          </motion.h1>
          <motion.h1
            className="text-5xl md:text-7xl py-2 font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Mohamed Ehab{" "}
          </motion.h1>

          <motion.p
            className="text-accent-foreground/50 max-w-xl text-2xl"
            variants={itemVariants}
          >
            Frontend Developer crafting modern, responsive web experiences with
            React, Next.js, and TypeScript. Passionate about creating seamless
            user experiences and optimizing performance.
          </motion.p>

          {/* Links to sections  */}
          <motion.div className="mt-6 flex gap-4" variants={itemVariants}>
            <a
              href="#projects"
              className="text-accent-foreground bg-gradient-to-r from-primary to-accent flex items-center justify-center gap-2 w-50 h-15 rounded-2xl font-bold hover:scale-105 transition-transform duration-300"
            >
              View My Work <ArrowRight />
            </a>
            <a
              href="#contact"
              className="text-primary border border-primary font-bold hover:bg-primary/10 px-6 py-3 rounded-2xl flex items-center justify-center gap-2 w-50 h-15 hover:scale-105 transition-transform duration-300"
            >
              View My Work <ArrowRight />
            </a>
          </motion.div>

          {/* Social Links  */}
          <motion.div
            className="mt-10 flex items-center gap-6"
            variants={itemVariants}
          >
            <Link
              target="_blank"
              to="https://github.com/MohamedEhab"
              className="text-primary border border-accent-foreground/10 hover:border-primary hover:scale-105 transition-all duration-300 p-2 rounded-lg"
            >
              <FiGithub size={25} />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/mohamed-ehab/"
              className="text-primary border border-accent-foreground/10 hover:border-primary hover:scale-105 transition-all duration-300 p-2 rounded-lg"
            >
              <FaLinkedinIn size={25} />
            </Link>
            <Link
              target="_blank"
              to="https://twitter.com/MohamedEhab"
              className="text-primary border border-accent-foreground/10 hover:border-primary hover:scale-105 transition-all duration-300 p-2 rounded-lg"
            >
              <MdEmail size={25} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Image  */}
        <motion.div
          className="max-w-md mx-auto lg:mx-0 relative"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl"></div>

          <div className="photo w-80 h-80 border-4 border-primary/40 shadow-3xl shadow-primary/20 backdrop-blur-md rounded-full max-w-sm overflow-hidden ">
            <img
              src="/src/assets/Mohamed.png"
              alt="Mohamed Ehab Photo"
              className="w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
