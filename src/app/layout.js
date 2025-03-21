'use client';

import './globals.css';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const containerVariants = { ... };
const itemVariants = { ... };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CM Industry</title>
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
