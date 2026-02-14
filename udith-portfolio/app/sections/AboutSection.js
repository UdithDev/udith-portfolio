"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Led development of modern web applications using React and Next.js. Implemented responsive designs and optimized performance.",
    },
    {
      title: "Web Developer",
      company: "Digital Creations",
      period: "2019 - 2022",
      description:
        "Developed and maintained client websites. Worked with JavaScript frameworks and improved site performance.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Innovations",
      period: "2017 - 2019",
      description:
        "Collaborated with the design team to implement responsive UI components and participated in code reviews.",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "CSS/SCSS", level: 85 },
    { name: "TypeScript", level: 70 },
    { name: "UI/UX Design", level: 65 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative h-64 w-64 mb-8 rounded-full overflow-hidden border-4 border-blue-600">
              <div className="absolute inset-0 bg-blue-900 animate-pulse"></div>
              <Image
                src="/images/profile.png"
                alt="Udith Weerakkody"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>

            <div className="text-gray-300 mb-8 text-center md:text-left">
              <p className="mb-4">
                Graduate Software Engineer | University of Bedfordshire Driven
                and detail-oriented software engineer with a First Class Honours
                degree in Software Engineering from the University of
                Bedfordshire. I bring over three years of hands-on development
                experience, including a 2-year Higher National Diploma (HND)
                from IJSE, where I built practical, real-world software
                applications. Currently specializing in backend development
                using .NET MVC and Oracle Database, I’m passionate about
                creating scalable, efficient solutions that solve real business
                problems. I thrive in collaborative environments and
                continuously seek opportunities to learn, adapt, and contribute
                to impactful technology projects.
              </p>
              <p>
                My approach combines technical expertise with creative
                problem-solving to deliver solutions that not only meet but
                exceed client expectations. I'm constantly learning and
                exploring new technologies to stay at the forefront of web
                development.
              </p>
            </div>

            {/* <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="text-blue-400 text-xl font-bold">5+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="text-blue-400 text-xl font-bold">50+</p>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="text-blue-400 text-xl font-bold">20+</p>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="text-blue-400 text-xl font-bold">10+</p>
                <p className="text-gray-400">Awards Received</p>
              </div>
            </div> */}
          </motion.div>

          {/* Experience & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
            <div className="space-y-6 mb-10">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l border-blue-600"
                >
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1"></div>
                  <h4 className="text-xl font-semibold text-white">
                    {exp.title}
                  </h4>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-blue-400">{exp.company}</span>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
