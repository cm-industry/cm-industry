export const metadata = {
  title: 'Gallery',
};

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const GalleryContent = dynamic(() => import('./GalleryContent'), { ssr: false });

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery - CM Industry</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Suspense fallback={<div>Loading gallery...</div>}>
        <GalleryContent />
      </Suspense>
    </>
  );
}
