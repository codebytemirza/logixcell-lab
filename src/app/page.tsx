"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Bot, Brain, ChevronRight, ExternalLink } from 'lucide-react';

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    {
      title: "AI Solutions",
      description: "Custom AI solutions leveraging Machine Learning and Deep Learning for your business needs.",
      icon: <Brain className="w-8 h-8 text-primary" />,
      features: ["Custom ML Models", "NLP", "Computer Vision"]
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      icon: <Code className="w-8 h-8 text-primary" />,
      features: ["Full-Stack Development", "PWA", "E-commerce"]
    },
    {
      title: "Chatbot Services",
      description: "Intelligent chatbots powered by advanced NLP for enhanced customer engagement.",
      icon: <Bot className="w-8 h-8 text-primary" />,
      features: ["Custom Development", "Integration", "Analytics"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "The AI solutions provided by Logixcell Lab transformed our business operations significantly.",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Michael Chen",
      role: "CEO, Innovation Inc",
      content: "Their web development expertise helped us achieve a 200% increase in online conversions.",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Emma Wilson",
      role: "Product Manager, AI Ventures",
      content: "The chatbot service revolutionized our customer support, available 24/7 with 98% accuracy.",
      image: "/api/placeholder/64/64"
    }
  ];

  const stats = [
    { label: "Clients Worldwide", value: "200+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Team Members", value: "50+" },
    { label: "Success Rate", value: "98%" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-100 rounded-full text-primary font-medium mb-6"
              >
                Leading AI & Web Solutions
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="heading-1 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
              >
                Transform Your Business with Intelligent Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Empower your business with cutting-edge AI solutions, expert web development, 
                and intelligent chatbot services. Your vision, our innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  View Services <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="relative h-[500px]"
            >
              <Image
                src="/api/placeholder/600/500"
                alt="AI Technology"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to transform your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <ChevronRight className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${service.title.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                >
                  Learn More <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what our clients have to say about working with us
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <div className="font-bold">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
              <p className="text-lg text-gray-600 italic">"{testimonials[activeTestimonial].content}"</p>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-primary scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-accent rounded-2xl text-white p-12 text-center"
          >
            <h2 className="heading-2 mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions and web development expertise can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-primary hover:bg-gray-100 btn-primary"
            >
              Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;