'use client'
import { motion } from 'framer-motion';
import { Code, Layers, Smartphone, PenTool, Database, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code size={36} />,
      title: "Web Development",
      description: "Creating responsive and performant websites and web applications using modern technologies."
    },
    {
      icon: <Layers size={36} />,
      title: "Frontend Development",
      description: "Building interactive user interfaces with React, Next.js, and other modern frameworks."
    },
    {
      icon: <Database size={36} />,
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs with Node.js, Express, and databases."
    },
    {
      icon: <Smartphone size={36} />,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications using React Native and Flutter."
    },
    {
      icon: <PenTool size={36} />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences that delight users."
    },
    {
      icon: <BarChart size={36} />,
      title: "Web Analytics",
      description: "Implementing analytics solutions to track user behavior and optimize performance."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Services</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I offer a wide range of services to help businesses and individuals establish their presence online and create exceptional digital experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="text-blue-500 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}