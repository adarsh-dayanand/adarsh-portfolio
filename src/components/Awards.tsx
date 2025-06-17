import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Calendar, Building, Star } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "The Best Outgoing Student of the Year - 2021",
      issuer: "Malnad College of Engineering",
      date: "Dec 2021",
      type: "Academic Excellence",
      description: "I'm honoured and awarded as 'The Best Outgoing Student of the year 2021'",
      icon: <Trophy className="w-6 h-6" />,
      featured: true
    },
    {
      title: "Designing and developing 'Leave Management System' for Police Department",
      issuer: "Super Intendent of Police, Hassan",
      date: "Feb 2021",
      type: "Innovation Award",
      description: "Me and Manoj Kumar H R designed and developed a web app under the guidance of Dr. Geetha Kiran madam for Leave Management in the Police Department. The S. P of Hassan honoured us.",
      icon: <Award className="w-6 h-6" />,
      featured: true
    },
    {
      title: "Designing and developing app for Covid-19 pandemic",
      issuer: "Super Intendent of Police, Hassan",
      date: "Apr 2020",
      type: "Public Service Award",
      description: "Me and Manoj Kumar H R designed and developed a web app under the guidance of Dr. Geetha Kiran madam for monitoring the people under home quarantine for the COVID-19 pandemic. The S. P of Hassan honoured us.",
      icon: <Award className="w-6 h-6" />,
      featured: true
    },
    {
      title: "Sports Achievement",
      issuer: "School Games Federation of India",
      date: "May 2017",
      type: "Sports Excellence",
      description: "I'm a Karnataka State Champion in Netball for 9 times and represented the state twice.",
      icon: <Star className="w-6 h-6" />,
      featured: false
    }
  ];

  const featuredAwards = awards.filter(award => award.featured);
  const otherAwards = awards.filter(award => !award.featured);

  const getTypeColor = (type: string) => {
    const colors = {
      'Academic Excellence': 'bg-blue-100 text-blue-700',
      'Innovation Award': 'bg-purple-100 text-purple-700',
      'Public Service Award': 'bg-green-100 text-green-700',
      'Sports Excellence': 'bg-orange-100 text-orange-700'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Honors & <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recognition for academic excellence, innovation, and contributions to 
            technology and community service.
          </p>
        </motion.div>

        {/* Featured Awards */}
        <div className="space-y-8 mb-16">
          {featuredAwards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-[120px]">
                  <div className="p-4 bg-primary-100 rounded-full text-primary-600">
                    {award.icon}
                  </div>
                  <div className="lg:mt-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(award.type)}`}>
                      {award.type}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{award.title}</h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Building size={16} />
                      <span className="font-medium">{award.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{award.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{award.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Awards */}
        {otherAwards.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 text-center mb-12"
            >
              Other <span className="gradient-text">Achievements</span>
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {otherAwards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary-100 rounded-full text-primary-600">
                      {award.icon}
                    </div>
                    <div className="flex-1">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${getTypeColor(award.type)}`}>
                        {award.type}
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h4>
                      <div className="flex flex-col gap-2 text-gray-600 text-sm mb-3">
                        <div className="flex items-center gap-2">
                          <Building size={14} />
                          <span>{award.issuer}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{award.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Awards;