import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Siemens",
      location: "Bengaluru, Karnataka, India",
      period: "Jun 2024 - Present",
      type: "Full-time · Hybrid",
      description: [
        "Driving innovation at the intersection of AI and full-stack development",
        "Leading cross-functional teams to build intelligent, scalable, and user-centric applications using Python, React, and cutting-edge tools",
        "Passionate about turning complex problems into elegant solutions through clean architecture, automation, and a relentless focus on performance",
        "Spearheaded AI-powered solutions from concept to deployment",
        "Integrated machine learning models into production-grade systems",
        "Built modular, scalable APIs and front-end architectures",
        "Mentored devs and fostered a high-performance team culture",
        "Leveraging cloud, DevOps, and CI/CD for seamless delivery"
      ],
      technologies: ["AI/ML", "Python", "React", "Node.js", "Cloud", "DevOps", "CI/CD"]
    },
    {
      title: "Senior Software Developer",
      company: "Centre for e-Governance",
      location: "Bengaluru, Karnataka, India",
      period: "Aug 2023 - Aug 2024",
      type: "Full-time · On-site",
      description: [
        "Led the development of robust and scalable applications handling millions of daily requests and managing vast datasets",
        "Spearheaded full-stack development initiatives using cutting-edge technologies",
        "Architected and implemented high-performance solutions for government e-governance platforms",
        "Collaborated with cross-functional teams to deliver mission-critical applications",
        "Optimized system performance and scalability for large-scale deployments"
      ],
      technologies: ["React Native", "Node.js", "Full-Stack Development", "Scalable Architecture", "Performance Optimization"]
    },
    {
      title: "Full Stack Engineer",
      company: "Centre for e-Governance",
      location: "Bengaluru, Karnataka, India",
      period: "Sep 2022 - Nov 2023",
      type: "Full-time",
      description: [
        "Developed robust and scalable applications handling millions of daily requests and managing vast datasets",
        "Implemented full-stack solutions using modern web technologies",
        "Contributed to the architecture and design of large-scale government applications",
        "Ensured high availability and performance of critical e-governance systems",
        "Collaborated with government stakeholders to understand and implement complex requirements"
      ],
      technologies: ["React Native", "Node.js", "Database Management", "System Architecture", "Government Applications"]
    },
    {
      title: "Junior Software Engineer",
      company: "SpurTree Technologies",
      location: "Bengaluru, Karnataka, India",
      period: "Aug 2021 - Aug 2022",
      type: "Full-time",
      description: [
        "Contributed extensively to Agile product development processes",
        "Played a pivotal role in fostering collaborative environments for efficient project iterations",
        "Developed and maintained web applications using modern JavaScript frameworks",
        "Participated in code reviews and implemented best practices for software development",
        "Worked closely with senior developers to learn and implement industry standards"
      ],
      technologies: ["React Native", "Node.js", "Agile Development", "JavaScript", "Web Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development, building innovative solutions 
            and contributing to impactful projects across various domains.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Building size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  {exp.type && (
                    <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {exp.type}
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;