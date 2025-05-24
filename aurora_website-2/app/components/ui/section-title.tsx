import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  highlight?: string;
  children?: ReactNode;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  highlight,
  children,
}: SectionTitleProps) {
  // If highlight is provided, replace that word with a highlighted version
  const titleWithHighlight = highlight
    ? title.replace(
        new RegExp(`(${highlight})`, 'gi'),
        '<span class="text-gradient font-bold">$1</span>'
      )
    : title;

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-title"
        dangerouslySetInnerHTML={{ __html: titleWithHighlight }}
      />
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      
      {children}
    </div>
  );
}