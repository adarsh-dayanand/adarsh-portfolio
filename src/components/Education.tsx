import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Star } from 'lucide-react';

const Education = () => {
  const education = {
    degree: "Bachelor of Engineering, Computer Science",
    institution: "Malnad College of Engineering, HASSAN",
    location: "Hassan, Karnataka, India",
    period: "Aug 2017 - Aug 2021",
    grade: "8.4",
    activities: [
      "Best Outgoing Student of the Year - 2021",
      "Technical Head of Science Association"
    ],
    description: "At Malnad College of Engineering, I pursued a Bachelor's degree in Computer Science and Engineering, graduating with a commendable GPA of 8.4. The institution's robust academic curriculum and expert faculty in the field influenced my choice.",
    achievements: [
      "During my tenure, I received recognition as the Best Outgoing Student in 2021.",
      "Additionally, I was honored by the Superintendent of Police, Hassan, for developing a COVID monitoring and Leave Management System for the Police Department, acknowledged with a copyright (Copyright No: 3575/2021-CO/SW).",
      "Choosing Malnad College of Engineering provided me with a solid foundation in key subjects like Data Structures, Database Management, Cloud Computing, and more. This educational journey not only enriched my technical prowess but also nurtured a problem-solving mindset critical for my career in technology."
    ],
    skills: ["Computer Network", "Computer Science", "+5 skills"]
  };

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My academic foundation in computer science and engineering, 
            building the knowledge base for my professional journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{education.degree}</h3>
                    <p className="text-lg font-semibold text-primary-600">{education.institution}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} />
                    <span className="font-semibold">Grade: {education.grade}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Activities and Societies</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {education.activities.map((activity, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium flex items-center gap-1"
                  >
                    <Award size={14} />
                    {activity}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">{education.description}</p>
              
              <div className="space-y-3">
                {education.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {education.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;