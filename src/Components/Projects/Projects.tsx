import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import Title from "../Title/Title";
import { motion } from "motion/react";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as any,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce application with secure authentication, responsive product catalog, shopping cart, filtering, and dark mode support.",
      technologies: [
        "Next.js 13+",
        "React",
        "NextAuth",
        "Radix UI",
        "TypeScript",
        "TailwindCSS",
      ],
      github: "https://github.com/Mo-1687/e-commerce.git",
      live: "https://e-commerce-nu-beryl-97.vercel.app",
      image: "/public/E-commerce photo.png",
      color: "from-primary/20 to-accent/20",
    },
    {
      title: "Social Media App",
      description:
        "Social media application with user profiles, posts, comments, and authentication. Features protected routes, API helpers, and token-based authentication.",
      technologies: [
        "React",
        "Vite",
        "TailwindCSS",
        "React Query",
        "React Hook Form",
      ],
      github: "https://github.com/Mo-1687/Social-App.git",
      live: "https://social-app-vert-three.vercel.app",
      image: "/public/social photo.png",
      color: "from-secondary/20 to-primary/20",
    },
    {
      title: "Award Website",
      description:
        "Visually rich website featuring GSAP animations, interactive sections, smooth transitions, and responsive layouts for an engaging user experience.",
      technologies: ["React", "Vite", "GSAP", "TypeScript", "TailwindCSS"],
      github: "https://github.com/Mo-1687/Award-website.git",
      live: "https://award-website-psi.vercel.app",
      image: "/public/Award photo.png",
      color: "from-accent/20 to-secondary/20",
    },
  ];

  return (
    <>
      <div id="projects" className="py-20 px-10 md:px-20">
        <Title title="Featured Projects" />

        <motion.div
          className="grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-xl overflow-hidden"
              variants={projectVariants}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent transition-opacity opacity-0 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <motion.div className="p-6 space-y-4">
                <motion.h3
                  className="space-y-2  text-accent-foreground font-bold text-xl group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="h-15 text-accent-foreground/70 leading-relaxed font-light text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  {project.description}
                </motion.p>
              </motion.div>

              {/* Tags */}
              <motion.div
                className="mt-4 h-12 flex flex-wrap gap-2 items-center px-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{
                  staggerChildren: 0.08,
                  delayChildren: index * 0.2 + 0.6,
                }}
              >
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={tagVariants}
                    className="text-xs  px-3 py-1.5 bg-primary/15 text-primary rounded-full border border-primary/30 hover:bg-primary/25 transition-all duration-300 font-medium"
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <div className="py-3 mt-5 w-full flex items-center justify-between">
                <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                  <Link
                    to={project.github}
                    target="_blank"
                    className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                  <Link
                    to={project.live}
                    target="_blank"
                    className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
