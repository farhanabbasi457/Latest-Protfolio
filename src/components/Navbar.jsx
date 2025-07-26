import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
<header className={`fixed w-full min-h-16 md:min-h-24 bg-gray-900 shadow-md z-50 transition-colors duration-300`}>
  <div className="container p-4 md:p-8 flex  text-xl justify-between items-center">
    {/* Name on the left */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-bold text-blue-400"
    >
      Muhammad Farhan
    </motion.div>

    {/* Navigation container pushed to the right */}
    <div className="flex items-center gap-4">
      {/* Desktop Navigation - now aligned to the right */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className="text-gray-200 hover:text-blue-400 font-medium text-xl transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.a>
        ))}
      </nav>

      {/* Dark mode toggle would go here if you had one */}
      
      {/* Mobile menu button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden p-2 rounded-full text-gray-200 hover:bg-gray-700 transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    {mobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 shadow-lg py-4 px-6"
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-200 hover:text-blue-400 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </motion.div>
    )}
  </div>
</header>
  );
};

export default Header;