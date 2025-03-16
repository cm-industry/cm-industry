'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(pathname === '/');
  }, [pathname]);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = async (event) => {
    event.preventDefault();
    if (isHome) {
      scrollToElement('contact');
    } else {
      await router.push('/');
      setTimeout(() => scrollToElement('contact'), 500);
    }
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  const linkStyle = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: '700',
    textTransform: 'uppercase',
    transform: 'scaleY(0.85)',
    transformOrigin: 'center',
  };

  return (
    <footer className="w-full bg-[#101010] shadow z-10 -mt-10">
      <nav className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center p-4 md:p-8 gap-4">
        {/* Левая колонка – Логотип */}
        <div className="flex justify-start md:-ml-20">
          <Link href="/">
            <Image
              src="/logos/cm-logo-white.png"
              alt="CM Industry Logo"
              width={180}
              height={60}
              priority
            />
          </Link>
        </div>

        {/* Центральная колонка – Навигация */}
        <div className="flex justify-center whitespace-nowrap">
          <div className="flex flex-wrap justify-center gap-16">
            <a
              href="/"
              onClick={handleHomeClick}
              className="text-center text-xl text-[#f0f0f0] transition underline-hover py-4 cursor-pointer"
              style={linkStyle}
            >
              Home
            </a>
            <Link href="/gallery" className="text-center text-xl text-[#f0f0f0] transition underline-hover py-4" style={linkStyle}>
              Gallery
            </Link>
            <Link href="/about" className="text-center text-xl text-[#f0f0f0] transition underline-hover py-4" style={linkStyle}>
              About us
            </Link>
            <a
              href="/#contact"
              onClick={handleContactClick}
              className="text-center text-xl text-[#f0f0f0] transition underline-hover py-4 cursor-pointer"
              style={linkStyle}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Правая колонка – Иконки соцсетей */}
        <div className="flex justify-end space-x-6">
          <a href="https://www.instagram.com/cm.industry/" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} className="hover:opacity-75 transition" />
          </a>
          <a href="https://www.facebook.com/people/Cmindustry/61572195043938/" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/facebook.png" alt="Facebook" width={24} height={24} className="hover:opacity-75 transition" />
          </a>
          <a href="https://www.pinterest.com/cm_industry/" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/pinterest.png" alt="Pinterest" width={24} height={24} className="hover:opacity-75 transition" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
