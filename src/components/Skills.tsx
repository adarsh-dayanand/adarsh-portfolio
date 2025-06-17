import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Smartphone, Brain, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "React", "React Native", "TypeScript", "JavaScript", 
        "Angular", "HTML5/CSS3", "Tailwind CSS", "Next.js"
      ]
    },
    {
      title: "Backend Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        "Node.js", "Python", "Express.js", ".NET Core", 
        "RESTful APIs", "GraphQL", "Microservices"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        "AWS", "Docker", "CI/CD", "DevOps", "AWS Lambda", 
        "AWS S3", "AWS EC2", "Kubernetes"
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        "PostgreSQL", "MongoDB", "MySQL", "Firebase", 
        "Redis", "Prisma", "DynamoDB"
      ]
    },
    {
      title: "AI/ML & Emerging Tech",
      icon: <Brain className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      skills: [
        "Prompt Engineering", "AI Integration", "Machine Learning", 
        "GitHub Copilot", "OpenAI APIs", "LangChain"
      ]
    },
    {
      title: "Tools & Methodologies",
      icon: <Settings className="w-6 h-6" />,
      color: "from-gray-500 to-slate-500",
      skills: [
        "Git/GitHub", "Agile/Scrum", "Software Architecture", 
        "System Design", "Testing", "Code Review"
      ]
    }
  ];

  const coreSkills = [
    { name: "React", color: "bg-blue-500" },
    { name: "React Native", color: "bg-cyan-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "AWS", color: "bg-orange-500" },
    { name: "Python", color: "bg-green-600" },
    { name: "PostgreSQL", color: "bg-blue-700" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            A comprehensive overview of my technical expertise across various 
            technologies, tools, and methodologies.
          </p>
          
          {/* Core Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${skill.color} text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default`}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 text-center transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Professional <span className="gradient-text">Journey</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                With <span className="font-bold text-primary-600">3+ years</span> of professional experience, 
                I specialize in full-stack development with expertise in modern web technologies. 
                My recent focus on <span className="font-bold text-primary-600">AWS cloud services</span> and 
                <span className="font-bold text-primary-600"> AI integration</span> allows me to build 
                scalable, intelligent applications.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-gray-600">Technologies Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
                  <div className="text-gray-600">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;