'use client';

import './globals.css';
import Header from '../components/Header';
import { motion } from 'framer-motion';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-[#101010]">
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <motion.div variants={itemVariants}>
            <Header />
          </motion.div>
          <motion.div variants={itemVariants}>{children}</motion.div>
        </motion.div>
      </body>
    </html>
  );
}
