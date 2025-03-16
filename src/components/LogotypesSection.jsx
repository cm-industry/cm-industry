'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LightGallery, { lgZoom, lgThumbnail } from '@/components/LightGalleryWrapper';

export default function LogotypesSection() {
  const galleryRef = useRef(null);

  const logos = [
    { src: "/logos/logotype1.jpg", title: "@cm.industry" },
    { src: "/logos/logotype2.jpg", title: "Clown" },
    { src: "/logos/logotype3.jpg", title: "@onetouchaudioandvideo" },
    { src: "/logos/logotype4.jpg", title: "@spctrblt" },
    { src: "/logos/logotype5.jpg", title: "@twenty4racing" },
    { src: "/logos/logotype6.jpg", title: "@burghart_motorsports" },
    { src: "/logos/logotype7.jpg", title: "@bpd_performance" },
    { src: "/logos/logotype8.jpg", title: "@randaludriftteam" },
  ];

  return (
    <>
      <section className="w-full bg-[#101010] py-1 mt-1">
        <div className="max-w-6xl mx-auto text-center px-4">
          <Image
            src="/titles/logotypes.png"
            alt="Logotypes"
            width={500}
            height={100}
            className="mx-auto"
            priority
          />
        </div>
      </section>

      <section className="w-full bg-[#101010] py-8">
        <div className="max-w-6xl mx-auto mt-4 px-4">
          <LightGallery
            
            onInit={(detail) => {
              galleryRef.current = detail.instance;
            }}
            speed={500}
            plugins={[lgZoom, lgThumbnail]}
            elementClassNames="gallery-grid"
          >
            {logos.map((item, idx) => (
              <a
                key={idx}
                href={item.src}
                className="gallery-grid-item card-container"
                data-sub-html={item.title}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-101"
                />
              </a>
            ))}
          </LightGallery>
        </div>
      </section>

      <div className="text-center px-4">
        <Link
          href="/gallery?tab=logos"
          className="inline-block text-xl text-[#f0f0f0] transition py-2 px-6 underline-hover"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: '700',
            textTransform: 'uppercase',
            transform: 'scaleY(0.9)',
            transformOrigin: 'center',
          }}
        >
          SEE MORE
        </Link>
      </div>
    </>
  );
}
