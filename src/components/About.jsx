import React from 'react';
import { motion } from 'framer-motion';
import Pic from '../Pictures/User/About.jpeg';
import CV from '../Pictures/PDF/Fahan_Resume.pdf';

const About = () => {
  const aboutInfo = [
    { label: 'Name', value: 'Muhammad Farhan' },
    { label: 'Email', value: 'mfarhanabbasi99@gmail.com' },
    { label: 'From', value: 'Bharakahu ,Islamabad ,Pakistan' },
    { label: 'Experience', value: '2+ Years' },
  ];

  return (
    <>
      <div id="about" className='w-full h-6'></div>
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            About <span className="text-blue-400">Me</span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* About Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/3 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                {/* Placeholder for image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white text-4xl font-bold">
                  <img src={Pic} alt='MERN' />
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Full Stack JavaScript Developer
              </h3>
              <p className="text-gray-300 mb-4">
                I'm a dedicated Full Stack JavaScript Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I build scalable, high-performance web applications with clean, maintainable code. From designing intuitive frontends to developing robust backends and RESTful APIs, I enjoy crafting end-to-end solutions that solve real-world problems.
              </p>
              <p className="text-gray-300 mb-6">
                With a strong foundation in computer science and years of hands-on experience,
                I bring ideas to life through clean, efficient code and thoughtful design.
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {aboutInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800 p-4 rounded-lg"
                  >
                    <span className="block text-blue-400 font-medium">
                      {item.label}:
                    </span>
                    <span className="text-gray-200">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href={CV}
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-lg"
                download={true}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;