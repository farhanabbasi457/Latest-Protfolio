import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    const result = emailjs.send("service_vfn0ezo", "template_nzu20qe", {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }, "J5-D4YGTUJGA9DLms");
    console.log(result);
    if (result) {
      setIsSubmitting(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Email Sucessfully Send",
        showConfirmButton: false,
        timer: 1500
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      content: 'mfarhanabbasi99@gmail.com',
      link: 'mailto:mfarhanabbasi99@gmail.com'
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      content: '+92 318 5410340',
      link: 'tel:+923185410340'
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      content: 'Touheed Abad ,Bharakahu, Islamabad, Pakistan',
      link: 'https://www.google.com/maps/place/Barakahu,+Pakistan/@33.7359521,73.1722123,15z/data=!3m1!4b1!4m15!1m8!3m7!1s0x38dfc17f8188becb:0xc5ed03400aeb4c4d!2sBarakahu,+Islamabad,+Pakistan!3b1!8m2!3d33.7399377!4d73.1800644!16s%2Fg%2F11f36t7jg0!3m5!1s0x38dfc180bf8c3149:0xfce8071e61b2e505!8m2!3d33.7380556!4d73.1851121!16s%2Fg%2F1tdp7_lc?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  return (
    <>
      <div id="contact" className='w-full h-8'></div>
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            Get In <span className="text-blue-400">Touch</span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 bg-gray-700 p-6 rounded-lg shadow-md"
                  >
                    <div className="p-3 bg-blue-900 text-blue-300 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {item.content}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13271.824279755228!2d73.17221230588557!3d33.73595207243973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc180bf8c3149%3A0xfce8071e61b2e505!2sBarakahu%2C%20Pakistan!5e0!3m2!1sen!2s!4v1753530920285!5m2!1sen!2s" allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade" className='w-full h-60 mt-4'></iframe>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-gray-700 p-6 md:p-8 rounded-xl shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-800 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-800 text-white"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-800 text-white"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-800 text-white"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowedy my-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;