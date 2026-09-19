'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionCardProps {
  children: ReactNode;
  className?: string;
}

export default function MotionCard({ children, className = '' }: MotionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
