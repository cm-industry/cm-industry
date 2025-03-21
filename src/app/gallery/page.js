export const metadata = {
  title: 'Gallery',
};

import Head from 'next/head';
import { Suspense } from 'react';
import GalleryContent from './GalleryContent'; // Импорт обычным способом

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