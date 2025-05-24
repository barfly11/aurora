"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './animated-counter';

interface StatCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
  icon?: React.ReactNode;
  decimals?: number;
}

export default function StatCard({
  title,
  value,
  suffix = '',
  prefix = '',
  description,
  icon,
  decimals = 0,
}: StatCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="stat-card flex flex-col items-center text-center p-6"
    >
      {icon && <div className="text-primary-blue mb-4">{icon}</div>}
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{title}</h3>
      <p className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-2">
        <AnimatedCounter 
          end={value} 
          suffix={suffix} 
          prefix={prefix} 
          decimals={decimals} 
        />
      </p>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </motion.div>
  );
}