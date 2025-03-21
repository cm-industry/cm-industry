'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isHome, setIsHome] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsHome(pathname === '/');
  }, [pathname]);

  const scrollToTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = async (event) => {
    event.preventDefault();
    if (pathname !== '/') {
      await router.push('/');
      setTimeout(scrollToTopSmooth, 300);
    } else {
      scrollToTopSmooth();
    }
    setMenuOpen(false);
  };

  const handleContactClick = async (event) => {
    event.preventDefault();
    if (isHome) {
      const contactElem = document.getElementById('contact');
      if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      await router.push('/');
      setTimeout(() => {
        const contactElem = document.getElementById('contact');
        if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
    setMenuOpen(false);
  };

  const linkStyle = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: '700',
    textTransform: 'uppercase',
    transform: 'scaleY(0.85)',
    transformOrigin: 'center',
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#151515] bg-opacity-95 backdrop-blur-md shadow z-50">
      <nav className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center p-4 md:p-8 gap-4 hidden md:grid">
        <div className="flex justify-start md:-ml-20">
          <a href="/" onClick={handleHomeClick}>
            <Image
              src="/logos/cm-logo-white.png"
              alt="CM Industry Logo"
              width={180}
              height={60}
              priority
            />
          </a>
        </div>
        <div className="flex justify-center whitespace-nowrap">
          <div className="flex flex-wrap justify-center gap-16">
            <a
              href="/"
              onClick={handleHomeClick}
              className="text-center text-xl text-[#f0f0f0] transition underline-hover py-3 cursor-pointer"
              style={linkStyle}
            >
              Home
            </a>
            <a
              href="/gallery"
              className="text-center text-xl text-[#f0f0f0] transition underline-hover py-3"
              style={linkStyle}
            >
              Gallery
            </a>
            <a
              href="/about"
              className="text-center text-xl text-[#f0f0f0] transition underline-hover py-3"
              style={linkStyle}
            >
              About us
            </a>
            <a
              href="/#contact"
              onClick={handleContactClick}
              className="text-center text-xl text-[#f0f0f0] transition underline-hover py-3 cursor-pointer"
              style={linkStyle}
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex justify-end space-x-6">
          <a href="https://www.instagram.com/cm.industry/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="hover:opacity-75 transition"
            />
          </a>
          <a href="https://www.facebook.com/people/Cmindustry/61572195043938/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/facebook.png"
              alt="Facebook"
              width={24}
              height={24}
              className="hover:opacity-75 transition"
            />
          </a>
          <a href="https://www.pinterest.com/cm_industry/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/pinterest.png"
              alt="Pinterest"
              width={24}
              height={24}
              className="hover:opacity-75 transition"
            />
          </a>
        </div>
      </nav>

      <nav className="max-w-6xl mx-auto md:hidden flex items-center justify-between px-4 py-3">
        {/* Логотип: чуть меньше, например 140×50 */}
        <a href="/" onClick={handleHomeClick} className="flex-shrink-0">
          <Image
            src="/logos/cm-logo-white.png"
            alt="CM Industry Logo"
            width={140}
            height={50}
            priority
          />
        </a>

        <div className="flex items-center gap-3">
          {/* Иконки соцсетей: 24×24 */}
          <a href="https://www.instagram.com/cm.industry/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="hover:opacity-75 transition"
            />
          </a>
          <a href="https://www.facebook.com/people/Cmindustry/61572195043938/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/facebook.png"
              alt="Facebook"
              width={24}
              height={24}
              className="hover:opacity-75 transition"
            />
          </a>
          <a href="https://www.pinterest.com/cm_industry/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/pinterest.png"
              alt="Pinterest"
              width={24}
              height={24}
              className="hover:opacity-75 transition"
            />
          </a>

          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="md:hidden bg-[#151515] origin-top overflow-hidden"
          >
            <ul className="flex flex-col">
              <li>
                <a
                  href="/"
                  onClick={handleHomeClick}
                  className="block py-4 px-6 text-xl text-[#f0f0f0] transition underline-hover"
                  style={linkStyle}
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="/gallery"
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 px-6 text-xl text-[#f0f0f0] transition underline-hover"
                  style={linkStyle}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 px-6 text-xl text-[#f0f0f0] transition underline-hover"
                  style={linkStyle}
                >
                  About us
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={handleContactClick}
                  className="block py-4 px-6 text-xl text-[#f0f0f0] transition underline-hover cursor-pointer"
                  style={linkStyle}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
