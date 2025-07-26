import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Pic from '../Pictures/User/farhan.jpg';
import { FaGithub, FaLinkedin, FaPhone, FaInstagram, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/farhanabbasi457' },
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/muhammad-farhan-650b7828a/' },
    { icon: <FaPhone size={20} />, url: 'tel:+923185410340' },
    { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/farhanabbasi4t4/' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center  pt-16 pb-10 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="container mx-auto px-16">
        <div className="flex flex-col-reverse mt-12 md:mt-8 md:flex-row items-center justify-between">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-blue-400">Farhan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 min-h-[70px]">
              <Typewriter
                words={[
                  'Full Stack JavaScript Developer',
                  'MERN Stack Specialist',
                  'React.js & Node.js Developer',
                  'Building Real-Time Web Applications',
                  'Expert in Responsive UI/UX Design',
                  'Scalable & Secure Web Solutions',
                ]}
                
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              I build exceptional digital experiences with modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-blue-700 text-white font-medium rounded-full transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 border-2  text-blue-400 border-blue-400 font-medium rounded-full transition-colors hover:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Image (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 mb-4 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400 to-green-400 rounded-full overflow-hidden shadow-2xl">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                <img src={Pic} alt='MF' className='z-20'/>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden md:flex fixed left-8 bottom-8 flex-col space-y-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;