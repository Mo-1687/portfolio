import Title from "../Title/Title";
import { motion } from "motion/react";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as any,
      },
    },
  };

  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1] as any,
      },
    },
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "Redux",
        "React Router",
        "Zod",
        "React Hook Form",
        "GSAP",
        "NextAuth",
        "Tanstack Query",
        "Framer Motion",
      ],
    },
    {
      title: "Styling",
      skills: [
        "TailwindCSS",
        "Sass/SCSS",
        "shadcn/ui",
        "Radix UI",
        "Responsive Design",
      ],
    },
    {
      title: "Tools & Other",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Clean Code",
        "API Integration",
        "Performance Optimization",
      ],
    },
    {
      title: "Personal",
      skills: [
        "Problem-solving",
        "Team collaboration",
        "Analytical thinking",
        "Time management",
        "Continuous learning",
        "Adaptability",
      ],
    },
  ];

  return (
    <div id="skills" className="py-20 px-10 md:px-20">
      
        <Title title="Skills & Expertise" />

      <motion.div
        className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={categoryVariants}
            className="relative skill-category bg-gradient-to-r from-primary/7 to-accent/7 px-4 lg:px-5 py-6 rounded-2xl border border-transparent hover:border-primary/50 transition-colors duration-300 group overflow-hidden"
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />

            <motion.h2
              className="relative text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: categoryIndex * 0.12 + 0.25,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: false }}
            >
              {category.title}
            </motion.h2>

            <motion.div
              className="relative flex items-center gap-3 flex-wrap"
              variants={skillsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {category.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={skillVariants}
                  className="border border-primary/30 py-2 px-3 cursor-pointer text-accent-foreground rounded-2xl bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    transition: { duration: 0.1, ease: "easeOut" },
                  }}
                  custom={index}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
