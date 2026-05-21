'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  interactive?: boolean;
}

export function Card({
  children,
  className = '',
  delay = 0,
  interactive = false,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={interactive ? { y: -4 } : {}}
      className={`card-float ${className}`}
    >
      {children}
    </motion.div>
  );
}