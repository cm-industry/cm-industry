'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ourclients() {
  const logos = [
    { src: "/ourclients/1.png", title: "Feal Suspension", link: "https://fealsuspensionstore.com/" },
    { src: "/ourclients/2.png", title: "Spec Tuned", link: "https://www.spectuned.com/" },
    { src: "/ourclients/3.png", title: "Specter", link: "https://www.spctrblt.com/" },
    { src: "/ourclients/4.png", title: "Clint96", link: "https://clint96.com/" },
    { src: "/ourclients/5.png", title: "Randalu Drift Team", link: "https://randaludriftteam.com/" },
    { src: "/ourclients/6.png", title: "Brute", link: "https://brute.gg/" },
    { src: "/ourclients/7.png", title: "Bill Mitchell Products", link: "https://billmitchellproducts.com/" },
    { src: "/ourclients/8.png", title: "Grindle Garage", link: "https://www.grindlegarage.com/" },
    { src: "/ourclients/9.png", title: "Richards Racing", link: "https://www.instagram.com/colerichardz/" },
    { src: "/ourclients/10.png", title: "Bitlook", link: "http://bitlook.net/en/" },
    { src: "/ourclients/11.png", title: "Drift Chat", link: "https://www.instagram.com/driftchat/" },
    { src: "/ourclients/12.png", title: "AOM", link: "https://www.instagram.com/art_of_motion_drift/" },
    { src: "/ourclients/13.png", title: "Crazy Lab", link: "https://www.instagram.com/crazy.lab._drift_taxi/" },
    { src: "/ourclients/14.png", title: "Everstake", link: "https://everstake.one/" },
    { src: "/ourclients/15.png", title: "Team Wonder", link: "https://www.instagram.com/driftteamwonder/" },
    { src: "/ourclients/16.png", title: "Speedgate Motorsports", link: "https://speedgatemotorsports.com/" },
    { src: "/ourclients/17.png", title: "INTENT", link: "https://intent.ltd/" },
    { src: "/ourclients/18.png", title: "Stuart Drifting Fam", link: "https://www.instagram.com/stuartfamdrifting/" },
    { src: "/ourclients/19.png", title: "No Spec", link: "https://www.instagram.com/nospec.drift/" },
    { src: "/ourclients/20.png", title: "13 partners", link: "https://13partners.net/en" },
  ];

  return (
    <>
      <section className="w-full bg-[#101010] py-0 md:py-1 mt-4">
        <div className="max-w-6xl mx-auto text-center px-4">
          <Image
            src="/titles/our-clients.png"
            alt="Some of Our s"
            width={1000}
            height={100}
            className="mx-auto"
            priority
          />
        </div>
      </section>

      <section className="w-full bg-[#101010] py-8">
        <div className="max-w-5xl mx-auto mt-4 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 place-items-center">
            {logos.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full max-w-[240px] h-[100px] inline-block transition-transform duration-300 hover:scale-103"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
