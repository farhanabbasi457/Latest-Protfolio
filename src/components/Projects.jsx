import React, { useState ,useEffect} from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Billing from '../Pictures/Projects/BillingDesktopApp.jpg';
import BookApp from '../Pictures/Projects/BookApp.jpg';
import FoodApp from '../Pictures/Projects/FoodApp.jpg';
import Mintronix from '../Pictures/Projects/Minitronix.jpg';
import Netflix from '../Pictures/Projects/Netflix.jpg';
import UiitLabXperts from '../Pictures/Projects/UIITLabXperts.jpg';

const Projects = () => {
  const [ShowProject, setShowProject] = useState(false);
  const projects = [
    {
      id: 1,
      title: 'UIIT LabXperts',
      description: 'Developed  a  real-time  lab  management  system  using  React  and  Node.įs,  adopted  by  10+  university  departments. ',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Render'],
      github: '#',
      live: 'https://uiitlabxperts.com/',
      image: UiitLabXperts
    },
    {
      id: 2,
      title: 'Electronics E-Commerce Website ',
      description: 'Built  a  scalable  MERN  stack  platform  supporting  500+  monthly  users  with  secure  payment  integration.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Render'],
      github: '#',
      live: 'https://minitronix.org/',
      image: Mintronix
    },
    {
      id: 3,
      title: 'Netflix Clone',
      description: 'Responsive media streaming web app built using React.įs.',
      tags: ['React.js', 'CSS3', 'Netlify'],
      github: 'https://github.com/farhanabbasi457/Netflix',
      live: 'https://abbasinnf.netlify.app/',
      image: Netflix
    },
    {
      id: 4,
      title: 'Book Library App',
      description: 'Full  Stack  app  to store and manage book collections with user accounts.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'CSS3'],
      github: 'https://github.com/farhanabbasi457/BookApp',
      live: '#',
      image: BookApp
    },

    {
      id: 5,
      title: 'Food App',
      description: 'Full Stack food ordering application with real-time order management.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'CSS3'],
      github: 'https://github.com/farhanabbasi457/Abbasifoods',
      live: '#',
      image: FoodApp
    },
    {
      id: 6,
      title: 'Auto Spare Parts Management System',
      description: 'Built a Windows app to manage spare parts inventory, print bills, and store data in SQL Server. .',
      tags: ['React.js', 'CSS3', 'Netlify'],
      github: '#',
      live: '#',
      image: Billing
    }
  ];

  

  return (
    <>
      <div id="projects" className='w-full h-8'></div>
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            My <span className="text-blue-400">Projects</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${project.id > 3 && !ShowProject ? 'hidden' : 'block'}`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-900 text-blue-200 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {
                      project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          <FiGithub className="mr-2" /> Code
                        </a>
                      )
                    }
                    {
                      project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          <FiExternalLink className="mr-2" /> Live Demo
                        </a>
                      )
                    }
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href={!ShowProject && '#projects'}
              onClick={() => setShowProject(!ShowProject)}
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-lg"
            >
              {
                !ShowProject ? 'View All Projects' : 'Minimize'
              }

            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;