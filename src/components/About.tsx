import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';
import Adarsh from '../assets/images/adarsh.jpg';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Always exploring new technologies and methodologies',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication skills',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      description: 'Optimizing applications for speed and user experience',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software engineer with expertise in full-stack
            development, specializing in modern web technologies and creating
            exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                A
              </div>
            </div> */}
            <img
              src={Adarsh}
              className="w-xl h-md object-center object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong foundation in computer science and years of hands-on
              experience, I specialize in building robust web applications using
              cutting-edge technologies. My journey in software development has
              been driven by curiosity and a passion for solving complex
              problems.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest industry trends. Whether it's frontend
              development with React, backend services with Node.js, or cloud
              infrastructure, I enjoy the entire development lifecycle.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="text-primary-600 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
