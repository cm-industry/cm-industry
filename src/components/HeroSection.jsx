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
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Определяем ширину окна для адаптивной высоты
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Смена слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, cycleDuration * 1000);
    return () => clearInterval(interval);
  }, [images.length, cycleDuration]);

  // Отслеживаем скролл для эффекта сжатия
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const variants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: {
      opacity: 1,
      scale: 1.15,
      transition: {
        opacity: { duration: 1, ease: 'linear' },
        scale: { duration: cycleDuration, ease: 'linear' },
      },
    },
    exit: {
      opacity: 0,
      scale: 1.16,
      transition: { duration: 1, ease: 'linear' },
    },
  };

  // Новые настройки высоты:
  // Мобильные (ширина < 768px): maxHeight = 350px, minHeight = 150px.
  // Десктоп: maxHeight = 600px, minHeight = 250px.
  const maxHeight = windowWidth < 768 ? 175 : 600;
  const minHeight = windowWidth < 768 ? 100 : 250;

  // Уменьшаем влияние скролла: коэффициент 0.2 вместо 0.5
  const currentHeight = Math.max(maxHeight - scrollY * 0.2, minHeight);

  return (
    <section
    className="relative w-full overflow-hidden mt-10 md:mt-[80px]"
    style={{ height: `${currentHeight}px` }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
