// src/app/services/page.tsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const ServicesPage = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Custom AI solutions leveraging Machine Learning and Deep Learning for your business needs.",
      image: "/api/placeholder/600/400",
      features: [
        "Custom ML Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics"
      ]
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      image: "/api/placeholder/600/400",
      features: [
        "Full-Stack Development",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Custom CMS"
      ]
    },
    {
      title: "Chatbot Services",
      description: "Intelligent chatbots powered by advanced NLP for enhanced customer engagement.",
      image: "/api/placeholder/600/400",
      features: [
        "Custom Chatbot Development",
        "Integration Services",
        "Training & Optimization",
        "Analytics & Reporting"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="heading-1 mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Comprehensive solutions tailored to your business needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="heading-2 mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;