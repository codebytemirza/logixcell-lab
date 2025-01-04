// src/app/about/page.tsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "Lead AI Engineer",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 variants={itemVariants} className="heading-1 mb-6">
              About Logixcell Lab
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8">
              We are passionate about leveraging cutting-edge technology to solve complex business challenges and drive innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Logixcell Lab, we're on a mission to transform the technological landscape by creating innovative AI solutions that empower businesses to thrive in the digital age.
              </p>
              <p className="text-lg text-gray-600">
                We believe in combining human creativity with artificial intelligence to solve complex challenges and create meaningful impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px]"
            >
              <Image
                src="/api/placeholder/600/400"
                alt="Our Mission"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind Logixcell Lab's innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;