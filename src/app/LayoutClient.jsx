'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function LayoutClient({ children }) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
      <motion.div variants={itemVariants}>
        <Header />
      </motion.div>
      <motion.div variants={itemVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
}