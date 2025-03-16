'use client';

export const dynamic = 'force-dynamic'; // Отключаем статический prerendering

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import LightGallery, { lgZoom, lgThumbnail } from '@/components/LightGalleryWrapper';

const Masonry = dynamic(() => import('react-masonry-css'), { ssr: false });

export default function GalleryPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('livery');
  const galleryRef = useRef(null);

  useEffect(() => {
    const tabFromURL = searchParams.get('tab');
    if (tabFromURL && ['livery', 'logos', 'merch', 'others'].includes(tabFromURL)) {
      setSelectedTab(tabFromURL);
    }
  }, [searchParams]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    router.push(`/gallery?tab=${tab}`, { scroll: false });
    scrollToTop();
  };

  const liveryImages = [
    { src: "/gallery/liveries/1.jpg", title: "@kkaabel - Nissan Silvia S13" },
    { src: "/gallery/liveries/2.jpg", title: "@kkaabel - Nissan Silvia S13" },
    { src: "/gallery/liveries/3.jpg", title: "@kkaabel - Nissan Silvia S13" },
    { src: "/gallery/liveries/4.jpg", title: "@kkaabel - Nissan Silvia S13" },
    { src: "/gallery/liveries/5.jpg", title: "@projektbartlett - Nissan 350z" },
    { src: "/gallery/liveries/6.jpg", title: "@projektbartlett - Nissan 350z" },
    { src: "/gallery/liveries/7.jpg", title: "@projektbartlett - Nissan 350z" },
    { src: "/gallery/liveries/8.jpg", title: "@projektbartlett - Nissan 350z" },
    { src: "/gallery/liveries/9.jpg", title: "@tom.murphy.69.showman - Toyota Verossa" },
    { src: "/gallery/liveries/10.jpg", title: "@tom.murphy.69.showman - Toyota Verossa" },
    { src: "/gallery/liveries/11.jpg", title: "@tom.murphy.69.showman - Toyota Verossa" },
    { src: "/gallery/liveries/12.jpg", title: "@tom.murphy.69.showman - Toyota Verossa" },
    { src: "/gallery/liveries/13.jpg", title: "@tldn.350z - Nissan 350z" },
    { src: "/gallery/liveries/14.jpg", title: "@tldn.350z - Nissan 350z" },
    { src: "/gallery/liveries/15.jpg", title: "@tldn.350z - Nissan 350z" },
    { src: "/gallery/liveries/16.jpg", title: "@tldn.350z - Nissan 350z" },
    { src: "/gallery/liveries/17.jpg", title: "@bennyphillips13 - Nissan Silvia S13.4" },
    { src: "/gallery/liveries/18.jpg", title: "@bennyphillips13 - Nissan Silvia S13.4" },
    { src: "/gallery/liveries/19.jpg", title: "@bennyphillips13 - Nissan Silvia S13.4" },
    { src: "/gallery/liveries/20.jpg", title: "@bennyphillips13 - Nissan Silvia S13.4" },
    { src: "/gallery/liveries/21.jpg", title: "@cory_seward_ - Chevrolet Corvette C6" },
    { src: "/gallery/liveries/22.jpg", title: "@cory_seward_ - Chevrolet Corvette C6" },
    { src: "/gallery/liveries/23.jpg", title: "@cory_seward_ - Chevrolet Corvette C6" },
    { src: "/gallery/liveries/24.jpg", title: "@cory_seward_ - Chevrolet Corvette C6" },
    { src: "/gallery/liveries/25.jpg", title: "@sidewayzshawn - Nissan 350z" },
    { src: "/gallery/liveries/26.jpg", title: "@sidewayzshawn - Nissan 350z" },
    { src: "/gallery/liveries/27.jpg", title: "@sidewayzshawn - Nissan 350z" },
    { src: "/gallery/liveries/28.jpg", title: "@sidewayzshawn - Nissan 350z" },
    { src: "/gallery/liveries/29.jpg", title: "@stuartfamdrifting - Chevrolet Corvette C6" },
    { src: "/gallery/liveries/30.jpg", title: "@stuartfamdrifting - Chevrolet Corvette C6" },
    { src: "/gallery/liveries/31.jpg", title: "@stuartfamdrifting - Chevrolet Corvette C6" },
    { src: "/gallery/liveries/32.jpg", title: "@stuartfamdrifting - Chevrolet Corvette C6" },
    { src: "/gallery/liveries/33.jpg", title: "@dugs_s2k - Honda Civic" },
    { src: "/gallery/liveries/34.jpg", title: "@dugs_s2k - Honda Civic" },
    { src: "/gallery/liveries/35.jpg", title: "@dugs_s2k - Honda Civic" },
    { src: "/gallery/liveries/36.jpg", title: "@dugs_s2k - Honda Civic" },
    { src: "/gallery/liveries/37.jpg", title: "@speedgate_motorsports - Nissan Skyline R32 GT-R" },
    { src: "/gallery/liveries/38.jpg", title: "@speedgate_motorsports - Nissan Skyline R32 GT-R" },
    { src: "/gallery/liveries/39.jpg", title: "@speedgate_motorsports - Nissan Skyline R32 GT-R" },
    { src: "/gallery/liveries/40.jpg", title: "@speedgate_motorsports - Nissan Skyline R32 GT-R" },
    { src: "/gallery/liveries/41.jpg", title: "@christiancotrone - Chevrolet Corvette C6" },
    { src: "/gallery/liveries/42.jpg", title: "@christiancotrone - Chevrolet Corvette C6" },
    { src: "/gallery/liveries/43.jpg", title: "@christiancotrone - Chevrolet Corvette C6" },
    { src: "/gallery/liveries/44.jpg", title: "@christiancotrone - Chevrolet Corvette C6" },
    { src: "/gallery/liveries/45.jpg", title: "@nateee_ - Nissan Silvia S13 Onevia" },
    { src: "/gallery/liveries/46.jpg", title: "@nateee_ - Nissan Silvia S13 Onevia" },
    { src: "/gallery/liveries/47.jpg", title: "@nateee_ - Nissan Silvia S13 Onevia" },
    { src: "/gallery/liveries/48.jpg", title: "@nateee_ - Nissan Silvia S13 Onevia" },
    { src: "/gallery/liveries/49.jpg", title: "@purple_drift" },
    { src: "/gallery/liveries/50.jpg", title: "@purple_drift" },
    { src: "/gallery/liveries/51.jpg", title: "@purple_drift" },
    { src: "/gallery/liveries/52.jpg", title: "@purple_drift" },
    { src: "/gallery/liveries/53.jpg", title: "@86senseii - Toyota GT86" },
    { src: "/gallery/liveries/54.jpg", title: "@86senseii - Toyota GT86" },
    { src: "/gallery/liveries/55.jpg", title: "@86senseii - Toyota GT86" },
    { src: "/gallery/liveries/56.jpg", title: "@86senseii - Toyota GT86" },
    { src: "/gallery/liveries/57.jpg", title: "@colerichardz - BMW E36" },
    { src: "/gallery/liveries/58.jpg", title: "@colerichardz - BMW E36" },
    { src: "/gallery/liveries/59.jpg", title: "@crizzyrios - Nissan 350z" },
    { src: "/gallery/liveries/60.jpg", title: "@crizzyrios - Nissan 350z" },
    { src: "/gallery/liveries/61.jpg", title: "For sale" },
    { src: "/gallery/liveries/62.jpg", title: "For sale" },
    { src: "/gallery/liveries/63.jpg", title: "@veselaho - Toyota GT86" },
    { src: "/gallery/liveries/64.jpg", title: "@veselaho - Toyota GT8" },
    { src: "/gallery/liveries/65.jpg", title: "@fayette_kong - Nissan 180sx" },
    { src: "/gallery/liveries/66.jpg", title: "@fayette_kong - Nissan 180sx" },
    { src: "/gallery/liveries/67.jpg", title: "For Sale" },
    { src: "/gallery/liveries/68.jpg", title: "For sale" },
    { src: "/gallery/liveries/69.jpg", title: "@jaydenwelsh - Nissan Silvia S14" },
    { src: "/gallery/liveries/70.jpg", title: "@jaydenwelsh - Nissan Silvia S14" },
    { src: "/gallery/liveries/71.jpg", title: "@_gageeee - BMW E92" },
    { src: "/gallery/liveries/72.jpg", title: "@_gageeee - BMW E92" },
    { src: "/gallery/liveries/73.jpg", title: "@streetversiontouge - Nissan Silvia S15" },
    { src: "/gallery/liveries/74.jpg", title: "@streetversiontouge - Nissan Silvia S15" },
    { src: "/gallery/liveries/75.jpg", title: "@stanislaff57 - Mercedes AMG GT" },
    { src: "/gallery/liveries/76.jpg", title: "@stanislaff57 - Mercedes AMG GT" },
    { src: "/gallery/liveries/77.jpg", title: "@lgt_jhook - Mazda RX-7" },
    { src: "/gallery/liveries/78.jpg", title: "@lgt_jhook - Mazda RX-7" },
    { src: "/gallery/liveries/79.jpg", title: "@stanislaff57 - Ferrari 599XX Evo" },
    { src: "/gallery/liveries/80.jpg", title: "@stanislaff57 - Ferrari 599XX Evo" },
    { src: "/gallery/liveries/81.jpg", title: "@_therealcarzilla - Nissan Silvia S13" },
    { src: "/gallery/liveries/82.jpg", title: "@_therealcarzilla - Nissan Silvia S13" },
    { src: "/gallery/liveries/83.jpg", title: "@riley.drift - Nissan Silvia S15" },
    { src: "/gallery/liveries/84.jpg", title: "@riley.drift - Nissan Silvia S15" },
  ];
  
  const logosImages = [
    { src: "/gallery/logos/1.jpg", title: "@twenty4racing" },
    { src: "/gallery/logos/2.jpg", title: "@cm.industry" },
    { src: "/gallery/logos/3.jpg", title: "@onetouchaudioandvideo" },
    { src: "/gallery/logos/4.jpg", title: "@bpd_performance" },
    { src: "/gallery/logos/5.jpg", title: "@spctrblt" },
    { src: "/gallery/logos/6.jpg", title: "Clown" },
    { src: "/gallery/logos/7.jpg", title: "@nospec.drift" },
    { src: "/gallery/logos/8.jpg", title: "@randaludriftteam" },
    { src: "/gallery/logos/9.jpg", title: "@intent_co" },
    { src: "/gallery/logos/10.jpg", title: "@burghart_motorsports" },
    { src: "/gallery/logos/11.jpg", title: "@midnightcustomcars" },
    { src: "/gallery/logos/12.jpg", title: "@stuartfamdrifting" },
  ];

  const merchImages = [
    { src: "/gallery/arts/1.jpg", title: "@braddgill" },
    { src: "/gallery/arts/2.jpg", title: "@randaludriftteam" },
    { src: "/gallery/arts/3.jpg", title: "@ariannnp" },
    { src: "/gallery/arts/4.jpg", title: "@clintvanoort96" },
    { src: "/gallery/arts/5.jpg", title: "@cos57" },
    { src: "/gallery/arts/6.jpg", title: "@selldesigns_" },
    { src: "/gallery/arts/7.jpg", title: "@randaludriftteam" },
    { src: "/gallery/arts/8.jpg", title: "@driftfactoryofficial" },
    { src: "/gallery/arts/9.jpg", title: "@randaludriftteam" },
    { src: "/gallery/arts/10.jpg", title: "@christiancotrone" },
    { src: "/gallery/arts/11.jpg", title: "@clintvanoort96" },
    { src: "/gallery/arts/12.jpg", title: "@billymitchell559" },
    { src: "/gallery/arts/13.jpg", title: "@_brandonmarina_" },
    { src: "/gallery/arts/14.jpg", title: "@doubek_racing_team" },
    { src: "/gallery/arts/15.jpg", title: "@carsenruger" },
    { src: "/gallery/arts/16.jpg", title: "CM Industry" },
    { src: "/gallery/arts/17.jpg", title: "CM Industry" },
    { src: "/gallery/arts/18.jpg", title: "@christiancotrone" },
  ];

  const othersImages = [
    { src: "/gallery/others/1.jpg", title: "Gum packaging design" },
    { src: "/gallery/others/2.jpg", title: "Poster Nissan Silvia S14" },
    { src: "/gallery/others/3.jpg", title: "Racing suit @clintvanoort96" },
    { src: "/gallery/others/4.jpg", title: "Poster Toyota GT86" },
    { src: "/gallery/others/5.jpg", title: "Poster Nissan Silvia S14" },
    { src: "/gallery/others/6.jpg", title: "Racing suit @sidewayzshawn" },
    { src: "/gallery/others/7.jpg", title: "Poster Nissan Silvia S13" },
    { src: "/gallery/others/8.jpg", title: "Poster @riley.drift" },
    { src: "/gallery/others/9.jpg", title: "Poster The Reason" },
    { src: "/gallery/others/10.jpg", title: "Poster @riley.drift" },
    { src: "/gallery/others/11.jpg", title: "Stickers @bmw_family_lviv_" },
    { src: "/gallery/others/12.jpg", title: "Poster Nissan 180SX" },
    { src: "/gallery/others/13.jpg", title: "Poster Nissan Silvia S13" },
    { src: "/gallery/others/14.jpg", title: "Poster Nissan Silvia S15" },
  ];

  let currentImages = [];
  if (selectedTab === 'livery') currentImages = liveryImages;
  else if (selectedTab === 'logos') currentImages = logosImages;
  else if (selectedTab === 'merch') currentImages = merchImages;
  else if (selectedTab === 'others') currentImages = othersImages;

  const dynamicEl = currentImages.map(({ src, title }) => ({
    src,
    thumb: src,
    subHtml: title,
  }));

  const handleClick = (idx) => {
    if (galleryRef.current) {
      galleryRef.current.openGallery(idx);
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
    <Suspense fallback={<div>Loading gallery...</div>}>
      <div className="bg-[#101010] min-h-screen text-white pt-20 md:pt-[170px] px-4">
        {/* Навигация вкладок с gap-16 */}
        <nav className="fixed top-[104.8px] w-full bg-[#101010] z-10 flex flex-wrap justify-center gap-16 text-base md:text-xl py-4 md:py-8 shadow-md px-4">
          {['livery', 'logos', 'merch', 'others'].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => handleTabChange(tab)}
              className={`py-2 transition ${selectedTab === tab ? 'underline-active' : 'underline-hover'}`}
              style={linkStyle}
            >
              {tab === 'livery'
                ? 'Livery Designs'
                : tab === 'logos'
                ? 'Logotypes'
                : tab === 'merch'
                ? 'Illustrations & Merch'
                : 'Others'}
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <Masonry
              breakpointCols={{ default: 4, 1024: 3, 768: 2, 480: 1 }}
              className="my-masonry-grid px-2"
              columnClassName="my-masonry-grid_column"
            >
              {currentImages.map((item, idx) => (
                <div key={idx} className="card-container cursor-pointer mb-2" onClick={() => handleClick(idx)}>
                  <Image
                    src={item.src}
                    alt={item.title || `Image ${idx + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300"
                  />
                </div>
              ))}
            </Masonry>

            <LightGallery
              onInit={(detail) => { galleryRef.current = detail.instance; }}
              dynamic={true}
              dynamicEl={dynamicEl}
              speed={500}
              mode="lg-slide"
              plugins={[lgZoom, lgThumbnail]}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </Suspense>
  );
}