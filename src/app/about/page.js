'use client';

import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const MotionLink = motion.create(Link);

export default function AboutPage() {
  return (
    <>
      {/* Hero-секция */}
      <section className="relative w-screen h-[20vh] md:h-[63.9vh] overflow-hidden bg-[#151515] mt-10">
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

      {/* Основная текстовая секция */}
      <main className="bg-[#151515] text-white py-16 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 uppercase"
            style={{ color: '#df2c2c', fontFamily: 'Arial, sans-serif' }}
          >
            Turning a car into a real piece of art
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Turning a car into a real piece of art and putting a smile on our client’s face — that’s what defines{' '}
            <span className="font-bold">CM Industry</span>. We’re a small team of two passionate creators who specialize in
            designing eye-catching liveries, crafting logos, banners, and clothing, and bringing our clients’ most imaginative
            ideas to life.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-8">
            Our mission is to make the creative process a joy for everyone involved: delivering standout results that thrill our
            clients while we pour dedication and heart into every detail.
          </p>

          {/* Секция специализаций */}
          <section className="mt-16">
            <h2
              className="text-3xl md:text-4xl font-bold uppercase mb-8"
              style={{ color: '#df2c2c', fontFamily: 'Arial, sans-serif' }}
            >
              OUR SPECIALIZATIONS
            </h2>
            <div className="flex flex-col items-center gap-4 mb-10">
              <MotionLink
                href="/gallery?tab=livery"
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  boxShadow: "0 4px 15px rgba(223,44,44,0.5)",
                }}
                transition={{ type: 'spring', stiffness: 700, damping: 15 }}
                style={{ backfaceVisibility: 'hidden', willChange: 'transform' }}
                className="w-full max-w-xs text-2xl md:text-2xl font-bold uppercase py-3 px-6 border border-transparent transition-colors"
              >
                Livery Designs
              </MotionLink>
              <MotionLink
                href="/gallery?tab=logos"
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  boxShadow: "0 4px 15px rgba(223,44,44,0.5)",
                }}
                transition={{ type: 'spring', stiffness: 700, damping: 15 }}
                style={{ backfaceVisibility: 'hidden', willChange: 'transform' }}
                className="w-full max-w-xs text-2xl md:text-2xl font-bold uppercase py-3 px-6 border border-transparent transition-colors"
              >
                Branding
              </MotionLink>
              <MotionLink
                href="/gallery?tab=merch"
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  boxShadow: "0 4px 15px rgba(223,44,44,0.5)",
                }}
                transition={{ type: 'spring', stiffness: 700, damping: 15 }}
                style={{ backfaceVisibility: 'hidden', willChange: 'transform' }}
                className="w-full max-w-xs text-2xl md:text-2xl font-bold uppercase py-3 px-6 border border-transparent transition-colors"
              >
                Illustrations
              </MotionLink>
              <MotionLink
                href="/gallery?tab=merch"
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  boxShadow: "0 4px 15px rgba(223,44,44,0.5)",
                }}
                transition={{ type: 'spring', stiffness: 700, damping: 15 }}
                style={{ backfaceVisibility: 'hidden', willChange: 'transform' }}
                className="w-full max-w-xs text-2xl md:text-2xl font-bold uppercase py-3 px-6 border border-transparent transition-colors"
              >
                Merchandise
              </MotionLink>
              <MotionLink
                href="/gallery?tab=others"
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  boxShadow: "0 4px 15px rgba(223,44,44,0.5)",
                }}
                transition={{ type: 'spring', stiffness: 700, damping: 15 }}
                style={{ backfaceVisibility: 'hidden', willChange: 'transform' }}
                className="w-full max-w-xs text-2xl md:text-2xl font-bold uppercase py-3 px-6 border border-transparent transition-colors"
              >
                Posters
              </MotionLink>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
