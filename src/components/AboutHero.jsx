'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative w-full h-[20vh] md:h-[63.9vh] overflow-hidden bg-[#151515] mt-10">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: 1,
            scale: 1.1,
            transition: {
              opacity: { duration: 1, ease: 'linear' },
              scale: { duration: 9, ease: 'linear' },
            },
          }}
          exit={{
            opacity: 0,
            scale: 1.11,
            transition: { duration: 1, ease: 'linear' },
          }}
          className="absolute inset-0"
        >
          <Image
            src="/hero/image8.jpg"
            alt="About Us Hero"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}