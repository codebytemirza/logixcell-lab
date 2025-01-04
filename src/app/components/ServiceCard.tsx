// src/app/components/ServiceCard.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
  imageUrl?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link = '/services',
  imageUrl 
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        {imageUrl ? (
          <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="text-4xl mb-4">
            {icon}
          </div>
        )}

        <h3 className="text-xl font-bold mb-2 text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <Link 
          href={link}
          className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors duration-200"
        >
          Learn More
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;