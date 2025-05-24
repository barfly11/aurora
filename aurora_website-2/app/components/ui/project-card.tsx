"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  stats?: { label: string; value: string }[];
  link?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  stats,
  link,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden"
    >
      <div className="aspect-video relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-lg font-bold text-primary-blue dark:text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        )}
        
        {link && (
          <Link href={link} className="inline-flex items-center text-primary-blue dark:text-blue-400 font-medium hover:underline mt-2">
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}