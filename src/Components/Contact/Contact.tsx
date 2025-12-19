import Title from "../Title/Title";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { variants } from "../../lib/animations";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mohammed.ehab.dev@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=mohammed.ehab.dev@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 1094304008",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
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
        variants={variants.staggerContainer}
        viewport={{ once: true }}
      >
        {/* Contact Information  */}
        <motion.div variants={variants.fadeUp} className="flex flex-col gap-5 ">
          <h2 className="font-bold text-3xl">Contact Information </h2>
          {contactInfo.map((info, index) => (
            <div
              className="flex gap-4 bg-card/60   shadow-md p-6  rounded-lg border border-border hover:border-primary hover:scale-105 transition-all duration-300"
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
                  <a
                    className="font-bold text-sm md:text-lg hover:text-primary transition-colors duration-100 "
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span>{info.value}</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Social Links  */}
        <motion.div variants={variants.fadeUp} className="flex flex-col gap-5 ">
          <h2 className="font-bold text-3xl">Connect With Me </h2>
          {socialLinks.map((info, index) => (
            <div
              className="flex items-center justify-between group  bg-card/60 shadow-md p-6 rounded-lg border border-border hover:border-[#9F59F7]  hover:scale-105 transition-all duration-300"
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
                  <a
                    className="font-bold text-lg hover:text-[#9F59F7] transition-colors duration-100 "
                    href={info.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {info.username}
                  </a>
                </div>
              </div>

              <Link
                to={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border/50 hover:border-[#9F59F7] transition-colors divide-fuchsia-300 rounded-lg px-3 py-2 text-sm opacity-0 group-hover:opacity-100 duration-300 font-medium  hover:text-[#9F59F7] "
              >
                Visit
              </Link>
            </div>
          ))}

          <a
            href={contactInfo[0].href || "mailto:mohammed.ehab.dev@gmail.com"}
            className="flex items-center justify-center gap-5 bg-gradient-to-r from-primary to-accent rounded-lg hover:scale-105 transition-transform duration-300 text-white font-bold px-6 py-2 mt-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={30} />
            Send Me an Email
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
