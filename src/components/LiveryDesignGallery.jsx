'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import LightGallery, { lgZoom, lgThumbnail } from './LightGalleryWrapper';

const Masonry = dynamic(() => import('react-masonry-css'), { ssr: false });

export default function LiveryDesignGallery() {
  const galleryRef = useRef(null);

  const header = (
    <section className="w-full bg-[#151515] py-12 -mt-5 md:-mt-13">
      <div className="max-w-6xl mx-auto text-center px-4">
        <Image
          src="/titles/livery-designs.png"
          alt="Livery Designs"
          width={600}
          height={100}
          className="mx-auto"
          priority
        />
      </div>
    </section>
  );

  const images = [
    { src: "/livery/1.jpg", title: "@kkaabel - Nissan Silvia S13" },
    { src: "/livery/2.jpg", title: "@projektbartlett - Nissan 350z" },
    { src: "/livery/3.jpg", title: "@tom.murphy.69.showman - Toyota Verossa" },
    { src: "/livery/4.jpg", title: "@tldn.350z - Nissan 350z" },
    { src: "/livery/5.jpg", title: "@dugs_s2k - Honda Civic" },
    { src: "/livery/6.jpg", title: "@sidewayzshawn - Nissan 350z" },
    { src: "/livery/7.jpg", title: "@cory_seward_ - Chevrolet Corvette C6" },
    { src: "/livery/8.jpg", title: "@stuartfamdrifting - Chevrolet Corvette C6" },
    { src: "/livery/9.jpg", title: "@sidewayzshawn - Nissan 350z" },
    { src: "/livery/10.jpg", title: "@bennyphillips13 - Nissan Silvia S13.4" },
    { src: "/livery/11.jpg", title: "@speedgate_motorsports - Nissan Skyline R32 GT-R" },
    { src: "/livery/12.jpg", title: "@_gageeee - BMW E92" },
    { src: "/livery/13.jpg", title: "@christiancotrone - Chevrolet Corvette C6" },
    { src: "/livery/14.jpg", title: "@nateee_ - Nissan Silvia S13 Onevia" },
    { src: "/livery/15.jpg", title: "@purple_drift - BMW E36" },
    { src: "/livery/16.jpg", title: "@veselaho - Toyota GT86" },
    { src: "/livery/17.jpg", title: "@stanislaff57 - Mercedes AMG GT" },
    { src: "/livery/18.jpg", title: "@fayette_kong - Nissan 180sx" },
    { src: "/livery/19.jpg", title: "@stanislaff57 - Ferrari 599XX Evo" },
    { src: "/livery/20.jpg", title: "For sale" },
  ];

  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    480: 2,
  };

  const dynamicEl = images.map(({ src, title }) => ({
    src,
    thumb: src,
    subHtml: title,
  }));

  const handleClick = (idx) => {
    if (galleryRef.current) {
      galleryRef.current.openGallery(idx);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-4 px-4">
      {header}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((item, idx) => (
          <div
            key={idx}
            className="card-container cursor-pointer"
            onClick={() => handleClick(idx)}
          >
            <Image
              src={item.src}
              alt={item.title || `Livery ${idx + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Masonry>

      <LightGallery
        
        onInit={(detail) => {
          galleryRef.current = detail.instance;
        }}
        dynamic={true}
        dynamicEl={dynamicEl}
        speed={500}
        mode="lg-slide"
        plugins={[lgZoom, lgThumbnail]}
      />

      <div className="mt-2 md:mt-8 py-8 md:py-0 text-center">
        <Link
          href="/gallery?tab=livery"
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
    </div>
  );
}
