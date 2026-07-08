'use client';

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { X } from 'lucide-react';

const images = Array.from({ length: 94 }, (_, i) => i + 1);
const ITEMS_PER_BATCH = 10;
const BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjY2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMmUyZTIiLz48L3N2Zz4=';

const TABS = {
  IMAGES: 'images',
  VIDEOS: 'videos',
};

const videoList = [
  {
    title: 'Opening Ceremony',
    url: '/gallery/short1.mp4',
  },
  {
    title: 'Activities Highlights',
   url: '/gallery/short.mp4',
  },
 
];


const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS.IMAGES);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
const [activeVideo, setActiveVideo] = useState<null | typeof videoList[0]>(null);

  const topImages = images.slice(0, 56);
  const bottomImages = images.slice(56);

  useEffect(() => {
    if (activeTab !== TABS.IMAGES) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + ITEMS_PER_BATCH, bottomImages.length)
            );
            setLoading(false);
          }, 1000);
        }
      },
      { rootMargin: '100px' }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loading, activeTab]);

  return (
    <>
      <Head>
        <title>Gallery - Summer Camp by Prayas</title>
        <meta
          name="description"
          content="Gallery page for Summer Camp by Prayas May 2025"
        />
      </Head>

      <div className="min-h-screen px-4 py-10">
        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab(TABS.IMAGES)}
            className={`px-6 py-2 rounded-l-full font-semibold ${
              activeTab === TABS.IMAGES
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Images
          </button>
          <button
            onClick={() => setActiveTab(TABS.VIDEOS)}
            className={`px-6 py-2 rounded-r-full font-semibold ${
              activeTab === TABS.VIDEOS
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Videos
          </button>
        </div>

        {/* IMAGE TAB SECTION */}
        {activeTab === TABS.IMAGES && (
          <>
            {/* Top Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl uppercase tracking-wider heading text-black font-bold">
                Summer Camp by Prayas May 2025
              </h2>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                Learn. Laugh. Lead.
              </h1>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-10 gap-6 mb-20">
              {[
                'latest.jpeg',
                'latest1.jpeg',
                'latest2.jpeg',
                'latest3.jpeg',
                'latest4.jpeg',
                '1.jpg',
                '2.jpg',
                '10.jpg',
                '12.jpg',
                '15.jpg',
                '18.jpg',
                '20.jpg',
                '21.jpg',
                '22.jpg',
                '23.jpg',
                '24.jpg',
                '25.jpg',
                '27.jpg',
                '28.jpg',
                '29.jpg',
                '30.jpg',
                '31.jpg',
                '32.jpg',
                '33.jpg',
                '40.jpg',
                '41.jpg',
                '42.jpg',
                '44.jpg',
                '45.jpg',
                '48.jpg',
                '50.jpg',
                '51.jpg',
                '52.jpg',
                '55.jpg',
              ].map((src, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl shadow-lg h-[120px] cursor-pointer"
                  onClick={() => setModalImage(`/gallery/${src}`)}
                >
                  <Image
                    src={`/gallery/${src}`}
                    alt={`Gallery image ${index + 1}`}
                    width={600}
                    height={400}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className="transform duration-300 h-[120px] group-hover:scale-110 rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Hearts in Action: 10 Years of Hope and Help
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-10 gap-6">
              {bottomImages.slice(0, visibleCount).map((src, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl shadow-lg h-[120px] cursor-pointer"
                  onClick={() => setModalImage(`/gallery/${src}.jpg`)}
                >
                  <Image
                    src={`/gallery/${src}.jpg`}
                    alt={`Gallery image ${src}`}
                    width={600}
                    height={400}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className="transform duration-300 h-[120px] group-hover:scale-110 rounded-xl object-cover"
                  />
                </div>
              ))}

              {loading &&
                Array.from({ length: ITEMS_PER_BATCH }).map((_, i) => (
                  <div
                    key={`skeleton-bottom-${i}`}
                    className="w-full h-[120px] bg-gray-300 animate-pulse rounded-xl"
                  ></div>
                ))}
            </div>

            {visibleCount < bottomImages.length && (
              <div ref={loaderRef} className="h-10 mt-6"></div>
            )}
          </>
        )}

        {/* VIDEO TAB SECTION */}
        {activeTab === TABS.VIDEOS && (
  <div className="text-center mt-10">
    <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
      Summer Camp Highlights (Videos)
    </h2>

    {/* If a video is selected, show the player */}
    {activeVideo ? (
      <div className="flex flex-col items-center">
        <div className="w-full max-w-4xl aspect-video rounded-lg shadow-xl overflow-hidden">
          
                    <video
            src={activeVideo.url}
            controls
            autoPlay={true} // 👈 no autoplay
            className="w-full h-full object-contain rounded-lg"
          />

        </div>
        {/* <p className="mt-4 text-xl font-semibold text-gray-800">{activeVideo.title}</p> */}
        <button
          onClick={() => setActiveVideo(null)}
          className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          Back to All Videos
        </button>
      </div>
    ) : (
      // Otherwise, show the list of video thumbnails or titles
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {videoList.map((video, index) => (
          <div
            key={index}
            // onClick={() => setActiveVideo(video)}
            className="cursor-pointer bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <div className="w-full aspect-video bg-black rounded-md overflow-hidden mb-3">
              
                <video
            src={video.url}
            controls
            autoPlay={false} // 👈 no autoplay
            className="w-full h-full object-contain rounded-lg"
          />
            </div>
            {/* <p className="text-lg font-semibold text-gray-800">{video.title}</p> */}
          </div>
        ))}
      </div>
    )}
  </div>
)}

      </div>

      {/* Fullscreen Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-5 right-5 text-white text-3xl p-2 hover:bg-white hover:text-black rounded-full transition"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="max-w-full max-h-full p-4">
            <Image
              src={modalImage}
              alt="Full view"
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] max-w-[90vw] rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
