import React from 'react';
import { motion } from 'framer-motion';
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiNodejs, DiGit, DiMongodb } from 'react-icons/di';
import { SiTypescript, SiRedux, SiFirebase, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <DiHtml5 size={40} />, level: 95 },
    { name: 'CSS3', icon: <DiCss3 size={40} />, level: 90 },
    { name: 'JavaScript', icon: <DiJavascript size={40} />, level: 85 },
    { name: 'React.js', icon: <DiReact size={40} />, level: 85 },
    { name: 'TypeScript', icon: <SiTypescript size={40} />, level: 75 },
    { name: 'Next.js', icon: <SiNextdotjs size={40} />, level: 70 },
    { name: 'Node.js', icon: <DiNodejs size={40} />, level: 85 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, level: 90 },
    { name: 'Git', icon: <DiGit size={40} />, level: 80 },
    { name: 'MongoDB', icon: <DiMongodb size={40} />, level: 80 },
    { name: 'Firebase', icon: <SiFirebase size={40} />, level: 65 },
  ];

  return (
    <>
      <div id="skills" className='w-full h-8'></div>
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            My <span className="text-blue-400">Skills</span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-700 p-6 rounded-xl shadow-md flex flex-col items-center"
              >
                <div className="text-blue-400 mb-3">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-600 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="h-2.5 rounded-full bg-blue-600"
                  ></motion.div>
                </div>
                <span className="text-xs text-gray-300 mt-1">
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;