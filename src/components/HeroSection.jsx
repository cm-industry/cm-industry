'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const images = [
    '/hero/image1.jpg',
    '/hero/image2.jpg',
    '/hero/image3.jpg',
    '/hero/image4.jpg',
    '/hero/image5.jpg',
    '/hero/image6.jpg',
    '/hero/image7.jpg',
    '/hero/image8.jpg',
  ];

  const cycleDuration = 9;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, cycleDuration * 1000);
    return () => clearInterval(interval);
  }, [images.length, cycleDuration]);

  const variants = {
    initial: { opacity: 0, scale: 1 },
    animate: {
      opacity: 1,
      scale: 1.1,
      transition: {
        opacity: { duration: 1, ease: 'linear' },
        scale: { duration: cycleDuration, ease: 'linear' },
      }
    },
    exit: {
      opacity: 0,
      scale: 1.11,
      transition: { duration: 1, ease: 'linear' }
    },
  };

  return (
    <section className="relative w-full h-[63.9vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
          layoutId="heroImage"
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
