import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "DevOps on AWS",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2025",
      credentialId: "XUSLQBA7778W",
      skills: ["Cloud Computing", "Amazon Web Services (AWS)"],
      logo: "aws",
      featured: true
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services (AWS)",
      date: "Feb 2025",
      credentialId: "NKFT8RD3CJZ",
      skills: ["Amazon Web Services (AWS)"],
      logo: "aws",
      featured: true
    },
    {
      title: "DevOps on AWS: Code, Build, and Test",
      issuer: "Amazon Web Services (AWS)",
      date: "Feb 2025",
      skills: ["Amazon Web Services (AWS)", "Cloud Computing"],
      logo: "aws",
      featured: true
    },
    {
      title: "DevOps on AWS: Release and Deploy",
      issuer: "Amazon Web Services (AWS)",
      date: "Feb 2025",
      skills: ["Amazon Web Services (AWS)", "Cloud Computing"],
      logo: "aws",
      featured: true
    },
    {
      title: "Software Architecture: From Developer to Architect",
      issuer: "LinkedIn",
      date: "Feb 2025",
      credentialId: "404f97a78a5a5908a4f01dbdf0a1d70a07925b0a0124f7a4d6821f52d55ba81f",
      skills: ["Software Architecture"],
      logo: "linkedin",
      featured: true
    },
    {
      title: "Advanced React",
      issuer: "Meta",
      date: "Jan 2025",
      credentialId: "NFKMMMQ2KP8I",
      skills: ["React.js", "JavaScript"],
      logo: "meta",
      featured: false
    },
    {
      title: "Advanced prompt engineering techniques",
      issuer: "LinkedIn",
      date: "Dec 2024",
      credentialId: "7ed9de208a8ef42addbf576f2fd028b31ed55de8b305913e456ca090802cf2bd",
      skills: ["AI/ML", "Prompt Engineering"],
      logo: "linkedin",
      featured: false
    },
    {
      title: "Prompt Engineering: How to talk to AIs",
      issuer: "LinkedIn",
      date: "Dec 2024",
      credentialId: "c220a129a530bf916afef1b3f77c7db92ce265b4145c9e49106735162b7a161a",
      skills: ["AI/ML", "Prompt Engineering"],
      logo: "linkedin",
      featured: false
    },
    {
      title: "Practical GitHub Copilot",
      issuer: "LinkedIn",
      date: "Nov 2024",
      skills: ["GitHub", "GitHub Copilot"],
      logo: "linkedin",
      featured: false
    },
    {
      title: "JavaScript (Intermediate) Certificate",
      issuer: "HackerRank",
      date: "Aug 2023",
      credentialId: "e6392b160e39",
      skills: ["JavaScript", "Node.js"],
      logo: "hackerrank",
      featured: false
    },
    {
      title: "Angular Development",
      issuer: "LearnCodeOnline.in",
      date: "Jun 2022",
      credentialId: "157423563685241013008",
      skills: ["Angular", "Frontend Development"],
      logo: "learncodeOnline",
      featured: false
    },
    {
      title: "React Native",
      issuer: "LearnCodeOnline.in",
      date: "Jun 2022",
      credentialId: "157423582228241015533",
      skills: ["React Native"],
      logo: "learncodeOnline",
      featured: false
    },
    {
      title: "MERN Stack Development",
      issuer: "LearnCodeOnline.in",
      date: "May 2020",
      credentialId: "157423550332241010556",
      skills: ["React.js", "Node.js", "API Development"],
      logo: "learncodeOnline",
      featured: false
    },
    {
      title: "Node JS",
      issuer: "Udemy",
      date: "May 2020",
      credentialId: "UC-762759ad-4fd8-4f09-9dd4-98b7fba9806e",
      skills: ["Node.js", "API Development"],
      logo: "udemy",
      featured: false
    },
    {
      title: "Defence Tech Summit",
      issuer: "Indian Institute of Technology, Madras",
      date: "Jan 2020",
      skills: ["Technology", "Defense"],
      logo: "iit",
      featured: false
    },
    {
      title: "Android Development",
      issuer: "Udemy",
      date: "Feb 2019",
      credentialId: "UC-GOAT50VM",
      skills: ["Android Development"],
      logo: "udemy",
      featured: false
    },
    {
      title: "Python Certification",
      issuer: "Internshala",
      date: "Nov 2018",
      credentialId: "D6020DCA-3100-FE70-B62F-43EE8FB0CB29",
      skills: ["Python"],
      logo: "internshala",
      featured: false
    }
  ];

  const featuredCertifications = certifications.filter(cert => cert.featured);
  const otherCertifications = certifications.filter(cert => !cert.featured);

  const getLogoColor = (logo: string) => {
    const colors = {
      aws: 'bg-orange-100 text-orange-600',
      linkedin: 'bg-blue-100 text-blue-600',
      meta: 'bg-blue-100 text-blue-600',
      hackerrank: 'bg-green-100 text-green-600',
      learncodeOnline: 'bg-purple-100 text-purple-600',
      udemy: 'bg-purple-100 text-purple-600',
      iit: 'bg-red-100 text-red-600',
      internshala: 'bg-teal-100 text-teal-600'
    };
    return colors[logo as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized 
            certifications and specialized training programs.
          </p>
        </motion.div>

        {/* Featured Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Recent <span className="gradient-text">Certifications</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-full ${getLogoColor(cert.logo)}`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h4>
                    <p className="text-primary-600 font-medium mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                {cert.credentialId && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-1">Credential ID</p>
                    <p className="text-xs font-mono bg-gray-100 p-2 rounded text-gray-700 break-all">
                      {cert.credentialId}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm font-medium">
                  <ExternalLink size={14} />
                  Show credential
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            All <span className="gradient-text">Certifications</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-full ${getLogoColor(cert.logo)}`}>
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{cert.title}</h5>
                    <p className="text-primary-600 text-xs font-medium mb-1">{cert.issuer}</p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar size={12} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 2).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{cert.skills.length - 2}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;