import { Code2, Rocket, Sparkles } from "lucide-react";
import Title from "../Title/Title";
import { easeInOut, motion } from "motion/react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as any },
    },
  };

  const highlights: { icon: any; title: string; description: string }[] = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Sparkles,
      title: "Modern Stack",
      description: "Expertise in React, Next.js, TypeScript, and TailwindCSS",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and user experience",
    },
  ];

  return (
    <div id="about" className="py-20 px-10 md:px-20 bg-background min-h-screen">
      
        <Title title="About Me" />

        {/* Introduction Text  */}
      <motion.div
        className="text-lg my-10 text-accent-foreground/80 text-center max-w-3xl  mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{once: false}}
      >
        Motivated Frontend Developer with hands-on experience building modern,
        responsive web applications. I specialize in creating intuitive user
        interfaces with a focus on performance optimization and seamless user
        experiences. Currently expanding my expertise into full-stack
        development while maintaining a strong foundation in frontend
        technologies.
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: false, }}
      >
        {/* Skills  */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              className="relative group"
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.2, ease: easeInOut },
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-0 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="bg-card border border-border/50 rounded-2xl p-6 md:p8 transition-all duration-300 h-full  hover:border-primary/50 ">
                <div className="w-12 h-12 md:w-14 md:h-14 group-hover:scale-105 transition-transform duration-300 mb-4 md:mb-6 rounded-xl icons   flex items-center justify-center">
                  <item.icon
                    size={28}
                    className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-xs md:text-base text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
