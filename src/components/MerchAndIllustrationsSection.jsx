'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LightGallery, { lgZoom, lgThumbnail } from '@/components/LightGalleryWrapper';

export default function MerchAndIllustrationsSection() {
  const galleryRef = useRef(null);

  const merchIllustrations = [
    { src: "/merchandills/illustration1.jpg", title: "@braddgill" },
    { src: "/merchandills/illustration2.jpg", title: "@randaludriftteam" },
    { src: "/merchandills/illustration3.jpg", title: "@ariannnp" },
    { src: "/merchandills/illustration4.jpg", title: "@selldesigns_" },
    { src: "/merchandills/illustration5.jpg", title: "@cos57" },
    { src: "/merchandills/illustration6.jpg", title: "@clintvanoort96" },
    { src: "/merchandills/illustration7.jpg", title: "@driftfactoryofficial" },
    { src: "/merchandills/illustration8.jpg", title: "@randaludriftteam" },
  ];

  return (
    <>
      <section className="w-full bg-[#151515] py-1 mt-2">
        <div className="max-w-6xl mx-auto text-center px-4">
          <Image
            src="/titles/merchandillustrations.png"
            alt="Merch & Illustrations"
            width={1100}
            height={100}
            className="mx-auto"
            priority
          />
        </div>
      </section>
      <section className="w-full bg-[#151515] py-8">
        <div className="max-w-6xl mx-auto mt-4 px-4">
             <LightGallery
                onInit={(detail) => {
                  galleryRef.current = detail.instance;
                }}
                speed={500}
                plugins={[lgZoom, lgThumbnail]}
                elementClassNames="gallery-grid merch-grid"
              >
                {merchIllustrations.map((item, idx) => (
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

      <div className="text-center px-4 py-2 md:py-0">
        <Link
          href="/gallery?tab=merch"
          className="inline-block text-xl text-[#f0f0f0] transition py-4 px-6 -mt-1 underline-hover"
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
