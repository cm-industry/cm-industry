'use client';

import dynamic from 'next/dynamic';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false,
});

export default LightGallery;
export { lgZoom, lgThumbnail };
