import Title from "../Title/Title";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" as any },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mohamed.ehab.dev@gmail.com",
      href: "mailto:mohamed.ehab.dev@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 1094304008",
      href: "tel:+201094304008",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Minya, Egypt",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Mo-1687",
      username: "@Mo-1687",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamed-ehab-a3b03b31a",
      username: "Mohamed Ehab",
    },
  ];

  return (
    <div id="contact" className="container mx-auto max-w-6xl py-20 px-5">
      
        <Title title="Get In Touch " />

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-15"
        initial="hidden"
        whileInView={"visible"}
        variants={containerVariants}
        viewport={{once: false}}
      >
        {/* Contact Information  */}
        <motion.div variants={itemVariants} className="flex flex-col gap-5 ">
          <h2 className="font-bold text-3xl">Contact Information </h2>
          {contactInfo.map((info, index) => (
            <div
              className="flex gap-5 bg-card/60 shadow-md p-6 rounded-lg border border-border hover:border-primary hover:scale-105 transition-all duration-300"
              key={index}
            >
              <info.icon
                size={30}
                className="text-foreground bg-gradient-to-r from-primary to-accent w-10 h-10 p-2 rounded-lg"
              />
              <div>
                <h3 className="font-semibold mb-1 text-accent-foreground/50">
                  {info.label}
                </h3>
                {info.href ? (
                  <Link
                    className="font-bold text-lg hover:text-primary transition-colors duration-100 "
                    to={info.href}
                    target="_blank"
                  >
                    {info.value}
                  </Link>
                ) : (
                  <span>{info.value}</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Social Links  */}
        <motion.div variants={itemVariants} className="flex flex-col gap-5 ">
          <h2 className="font-bold text-3xl">Connect With Me </h2>
          {socialLinks.map((info, index) => (
            <div
              className="flex items-center justify-between group  bg-card/60 shadow-md p-6 rounded-lg border border-border hover:border-[#9F59F7] hover:scale-105 transition-all duration-300"
              key={index}
            >
              <div className="flex gap-5">
                <info.icon
                  size={30}
                  className="text-foreground bg-[#9F59F7] w-10 h-10 p-2 rounded-lg"
                />
                <div>
                  <h3 className="font-semibold mb-1 text-accent-foreground/50">
                    {info.label}
                  </h3>
                  <Link
                    className="font-bold text-lg hover:text-[#9F59F7] transition-colors duration-100 "
                    to={info.href}
                    target="_blank"
                  >
                    {info.username}
                  </Link>
                </div>
              </div>

              <Link
                to={info.href}
                target="_blank"
                className="border border-border/50 hover:border-[#9F59F7] transition-colors divide-fuchsia-300 rounded-lg px-3 py-2 text-sm opacity-0 group-hover:opacity-100 duration-300 font-medium  hover:text-[#9F59F7] "
              >
                Visit
              </Link>
            </div>
          ))}

          <Link
            to={contactInfo[0].href || "mailto:mohamed.ehab.dev@gmail.com"}
            className="flex items-center justify-center gap-5 bg-gradient-to-r from-primary to-accent rounded-lg hover:scale-105 transition-transform duration-300 text-white font-bold px-6 py-2 mt-5"
            target="_blank"
          >
            <Mail size={30} />
            Send Me an Email
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
