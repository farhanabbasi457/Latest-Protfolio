import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone,FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/farhanabbasi457' },
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/muhammad-farhan-650b7828a/' },
    { icon: <FaPhone size={20} />, url: 'tel:+923185410340' },
    { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/farhanabbasi4t4/' },
  ];

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Footer Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Muhammad Farhan</h2>
            <p className="mb-4">Frontend Developer creating modern web experiences.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 grid grid-cols-2 md:grid-rows-3 md:grid-cols-1"> 
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className='hover:text-white'><a href='mailto:mfarhanabbasi99@gmail.com' target="_blank" rel="noopener noreferrer">mfarhanabbasi99@gmail.com</a></li>
              <li className='hover:text-white'><a href='tel:923185410340' target="_blank" rel="noopener noreferrer">+92 318 5410340</a></li>
              <li className='hover:text-white'><a href='https://www.google.com/maps/place/Barakahu,+Pakistan/@33.7359521,73.1722123,15z/data=!3m1!4b1!4m15!1m8!3m7!1s0x38dfc17f8188becb:0xc5ed03400aeb4c4d!2sBarakahu,+Islamabad,+Pakistan!3b1!8m2!3d33.7399377!4d73.1800644!16s%2Fg%2F11f36t7jg0!3m5!1s0x38dfc180bf8c3149:0xfce8071e61b2e505!8m2!3d33.7380556!4d73.1851121!16s%2Fg%2F1tdp7_lc?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D' target="_blank" rel="noopener noreferrer" >Bharakahu, Islamabad, Pakistan </a> </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p>&copy; {new Date().getFullYear()} Muhammad Farhan. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;