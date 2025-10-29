import Title from "../Title/Title";
import { Award, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const education = [
    {
      icon: GraduationCap,
      title: "Health Technical Institute of Beni-Suef",
      subtitle: "Radiology Technology",
      year: "2025",
      description:
        "Completed 6 months of practical training in medical imaging",
    },
  ];

  const courses = [
    {
      icon: BookOpen,
      title: "Backend Developer Program",
      provider: "Route Academy",
      status: "In Progress",
    },
    {
      icon: BookOpen,
      title: "IBM Excel Basic for Data Analysis",
      provider: "Self-study",
      status: "Completed",
    },
    {
      icon: BookOpen,
      title: "CS50 – Computer Science Fundamentals",
      provider: "Self-study",
      status: "Completed",
    },
  ];

  const certificates = [
    {
      icon: Award,
      title: "Introduction to Web Development",
      provider: "Creativa",
      year: "2024",
    },
    {
      icon: Award,
      title: "Backend Developer Certificate",
      provider: "Route Academy",
      year: "2025",
    },
  ];

  return (
    <div id="education" className="container mx-auto max-w-6xl px-5 py-15">
      <Title title="Education & Learning" />

      <motion.div
        className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-10 md:gap-20"
        initial="hidden"
        whileInView={"visible"}
        variants={containerVariants}
      >
        {/* Education  */}
        <motion.div variants={itemVariants}>
          <h2 className="font-bold text-2xl flex items-center gap-3">
            <GraduationCap size={30} className="text-primary" />
            Education
          </h2>
          {education.map((edu, index) => (
            <div
              className="bg-[#0A0E17]  mt-4 group hover:scale-105 transition-transform duration-300 backdrop-blur-md p-4 rounded-lg"
              key={index}
            >
              <div className="flex  gap-3">
                <div className="bg-gradient-to-tr h-fit p-2 from-primary to-accent  rounded-lg">
                  <edu.icon size={28} />
                </div>
                <div>
                  <h3 className="font-bold group-hover:text-primary transition-colors duration-300">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-primary ">{edu.subtitle}</p>
                  <p className="text-xs text-muted-foreground">{edu.year}</p>
                  <p className="mt-2 text-sm text-accent-foreground/60">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        {/* Certificate */}
        <motion.div variants={itemVariants}>
          <h2 className="font-bold text-2xl flex items-center gap-3">
            <Award size={30} className="text-accent" />
            Certificate
          </h2>

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="mt-4 flex gap-4  bg-gradient-to-tr   from-[#9F59F7] to-[#4E7BF5] rounded-lg p-4 backdrop-blur-md hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-[#AD7CF9] h-fit p-2  rounded-lg">
                <certificate.icon size={28} />
              </div>
              <div className="">
                <h2 className="font-bold text-lg leading-6">
                  {certificate.title}
                </h2>
                <h2>{certificate.provider}</h2>
                <span>{certificate.year}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Courses  */}
      <div className="mt-10">
        <h2 className="font-bold text-2xl flex gap-3 items-center">
          <BookOpen size={30} className="text-[#9F59F7]" /> Courses
        </h2>

        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={containerVariants}
          className=" grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#0A0E17] group hover:scale-105 transition-transform duration-300 backdrop-blur-md p-4 rounded-lg"
            >
              {/* Icon  */}
              <div className="bg-gradient-to-tr w-fit p-3 from-[#9F59F7] to-primary rounded-lg">
                <course.icon size={28} />
              </div>
              <h2 className="font-bold text-lg mt-4 group-hover:text-[#9F59F7] transition-colors ">
                {course.title}
              </h2>
              <p className="text-accent-foreground/40 my-3">
                {course.provider}
              </p>
              <span
                className={`py-1 px-3 text-xs border  ${
                  course.status === "Completed"
                    ? "text-[#9F59F7] border-[#9F59F7] bg-[#9F59F7]/20"
                    : "text-primary border-primary  bg-primary/20"
                } rounded-full`}
              >
                {course.status}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
