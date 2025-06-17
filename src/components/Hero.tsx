import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="gradient-text">Adarsh</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Software Engineer & Full-Stack Developer passionate about creating innovative digital solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-6"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-700 hover:text-primary-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ad-adarsh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-700 hover:text-primary-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-700 hover:text-primary-600"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-gray-600 hover:text-primary-600 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;