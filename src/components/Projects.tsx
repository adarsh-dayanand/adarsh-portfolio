import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, secure payments, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      date: "2023"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      date: "2023"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      date: "2022"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with data visualization and reporting features.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      date: "2022"
    },
    {
      title: "Fitness Tracker",
      description: "A mobile-first fitness tracking application with workout plans, progress tracking, and social features.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      date: "2021"
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, video streaming, quizzes, and progress tracking for students and instructors.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Prisma", "MySQL", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      date: "2021"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{project.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Other <span className="gradient-text">Projects</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <Calendar size={14} />
                  <span>{project.date}</span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-700 text-sm font-medium"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;