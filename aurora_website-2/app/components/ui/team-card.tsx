"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamCardProps {
  name: string;
  position: string;
  imageSrc: string;
  description: string;
  index: number;
}

export default function TeamCard({ name, position, imageSrc, description, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden"
    >
      <div className="aspect-[3/4] relative">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-blue dark:text-white">{name}</h3>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">{position}</p>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}