'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ui', name: 'UI/UX Design' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '/placeholder-dark.jpg',
      description: 'A full-featured e-commerce platform built with Next.js and Node.js',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Financial Dashboard',
      category: 'web',
      image: '/placeholder-dark.jpg',
      description: 'Interactive dashboard for financial data visualization',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 3,
      title: 'Travel Companion App',
      category: 'mobile',
      image: '/placeholder-dark.jpg',
      description: 'Mobile application for travelers to plan and track their journeys',
      technologies: ['React Native', 'Firebase', 'Google Maps API'],
      link: '#'
    },
    {
      id: 4,
      title: 'Streaming Service Redesign',
      category: 'ui',
      image: '/placeholder-dark.jpg',
      description: 'Complete UI/UX redesign for a popular streaming service',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
      link: '#'
    },
    {
      id: 5,
      title: 'Productivity Tool',
      category: 'web',
      image: '/placeholder-dark.jpg',
      description: 'Web-based productivity and task management application',
      technologies: ['Vue.js', 'Vuex', 'Laravel', 'MySQL'],
      link: '#'
    },
    {
      id: 6,
      title: 'Health Tracking App',
      category: 'mobile',
      image: '/placeholder-dark.jpg',
      description: 'Mobile app for tracking health metrics and fitness goals',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      link: '#'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="work" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">My Work</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's a selection of my recent projects. Each project represents challenges I've overcome and skills I've developed.
          </p>
        </motion.div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-blue-600/20 hover:shadow-xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: project.id * 0.1 }}
            >
              <div className="h-48 bg-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-6xl font-light">
                  {project.title.charAt(0)}
                </div>
                {/* Replace with actual project images when available */}
                {/* <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover" 
                /> */}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-700 text-blue-400 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}