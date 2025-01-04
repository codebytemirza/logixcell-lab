"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center pt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="text-center lg:text-left" variants={itemVariants}>
            <motion.div
              className="inline-block px-4 py-2 bg-blue-100 rounded-full text-primary font-medium mb-6"
              variants={itemVariants}
            >
              Welcome to Logixcell Lab
            </motion.div>
            
            <motion.h1
              className="heading-1 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
              variants={itemVariants}
            >
              Transforming Ideas into Intelligent Solutions
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Empowering businesses with cutting-edge AI solutions, expert web development, 
              and intelligent chatbot services. Your vision, our innovation.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <button className="btn-primary">
                Get Started
              </button>
              <button className="px-6 py-2 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Animated Illustration */}
          <motion.div
            className="relative h-[400px] lg:h-[500px]"
            variants={itemVariants}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Add any custom SVG or image here */}
              <Image
                src="/globe.svg"
                alt="AI Technology Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-200 rounded-xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-cyan-200 rounded-full"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {['Python', 'Machine Learning', 'Deep Learning', 'Web Development', 'Chatbots', 'Generative AI'].map((tech) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600"
              variants={itemVariants}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;