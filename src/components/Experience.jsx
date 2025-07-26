import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const Experience = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  // Experience data
  const workExperience = [
    {
      id: 1,
      role: "Full Stack JavaScript Developer",
      company: "Softwise Solution.",
      duration: "Oct 2024 - May 2025",
      description: "Developed 3+ web applications using the MERN stack, focusing on front-end design with Tailwind CSS,SCSS and back-end APIs with Node.js and Express.js.",
      skills: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"]
    },
  ];

  const education = [
    {
      id: 1,
      degree: "B.Sc. Computer Science",
      institution: "Arid Agriculture University, Rawalpindi, Pakistan",
      duration: "2021 - 2025",
    },
    {
      id: 2,
      degree: "Higher Secondary School Certificate (FSc Pre-Engineering)",
      institution: "Punjab College BharaKahu, Islamabad, Pakistan",
      duration: "2019 - 2021",
    },
    {
      id: 3,
      degree: "Matriculation in Science ",
      institution: "Karlot Residential College Chattar , Islamabad, Pakistan",
      duration: "2017 - 2019",
      description: "Specialized in Web Technologies and Human-Computer Interaction. Graduated with honors."
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Computer Course",
      issuer: "Development Center Bharakahu, Islamabad, Pakistan",
      date: "Mar 2019 - Aug 2019",
      description: "Mastered Microsoft Office Suite including Word, Excel & PowerPoint,"
    },
    {
      id: 2,
      name: "Python Course",
      issuer: "CodeWithHarry",
      date: "Jun 2023 - Sep 2023",
      description: "Completed a comprehensive course on Python programming, covering basics to advanced topics."
    },
    {
      id: 3,
      name: "Graphic Design Course",
      issuer: "GFXMentor",
      date: "Jun 2022 - Sep 2022",
      description: "Learned graphic design principles and software, including Adobe Photoshop and Illustrator."
    }
  ];

  return (
    <>
      <div id="experience" className='w-full h-8'></div>
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            My <span className="text-blue-400">Experience</span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Education & Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              {/* Education */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-900 text-green-300 rounded-full mr-4">
                  <FaGraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-8 mb-12">
                {education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-700 p-6 rounded-xl shadow-md"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <span className="px-3 py-1 bg-green-900 text-green-200 text-sm rounded-full">
                        {edu.duration}
                      </span>
                    </div>
                    <h5 className="text-lg font-semibold text-green-400 mb-3">{edu.institution}</h5>
                  </motion.div>
                ))}
              </div>


            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-900 text-blue-300 rounded-full mr-4">
                  <FaBriefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
              </div>

              <div className="space-y-8">
                {workExperience.map((exp) => (
                  <motion.div
                    key={exp.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-700 p-6 rounded-xl shadow-md"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                      <span className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    <h5 className="text-lg font-semibold text-blue-400 mb-3">{exp.company}</h5>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-600 text-gray-200 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <div className="flex items-center mb-6 mt-4">
                <div className="p-3 bg-purple-900 text-purple-300 rounded-full mr-4">
                  <FaCode size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-8">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gray-700 p-6 rounded-xl shadow-md ${cert.id > 1 && !showCertificate ? 'hidden' : 'block'}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white">{cert.name}</h4>
                      <span className="px-3 py-1 bg-purple-900 text-purple-200 text-sm rounded-full">
                        {cert.date}
                      </span>
                    </div>
                    <h5 className="text-lg font-semibold text-purple-400 mb-3">{cert.issuer}</h5>
                    <p className="text-gray-300">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
              <motion.a
                href="#Experience"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setShowCertificate(!showCertificate)}
                className="mt-6 inline-block bg-blue-500 text-white p-2 rounded-full hover:p-[12px] hover:transition-all duration-300 ease-in-out cursor-pointer">
                {showCertificate ? "Minimize" : "Show More"}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;