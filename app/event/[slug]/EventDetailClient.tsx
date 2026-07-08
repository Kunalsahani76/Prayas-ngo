"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

interface EventDetailClientProps {
  event: {
    title: string;
    date: string;
    location: string;
    description: string;
    images: { src: string; title: string }[];
  };
}

export default function EventDetailClient({ event }: EventDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + event.images.length) % event.images.length);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % event.images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[70vh] min-h-[500px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={event.images[0].src}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-between py-8">
          {/* Back Button */}
          <Link 
            href="/event" 
            className="inline-flex items-center text-white hover:text-gray-200 transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit hover:bg-white/20"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Events
          </Link>

          {/* Title and Info */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
              {event.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-base md:text-lg">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 p-[2px] transition-all duration-300">
            <div className="bg-white rounded-xl p-8 md:p-12 lg:p-16">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-1.5 h-16 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full flex-shrink-0" />
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">About This Event</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full" />
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed pl-0 md:pl-8">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="container mx-auto px-4 pb-20 md:pb-32">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Event Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 text-lg md:text-xl">Capturing memorable moments from the event</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {event.images.map((image, index) => (
            <div 
              key={index} 
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-[350px] md:h-[400px]">
                <Image
                  src={image.src}
                  alt={image.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
           

              {/* Image Number Badge */}
              <div className="absolute top-5 right-5 bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                {index + 1}/{event.images.length}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-7xl max-h-full w-full h-full flex flex-col items-center justify-center">
              {/* Image */}
              <div className="relative w-full h-[80vh] flex items-center justify-center">
                <Image
                  src={event.images[selectedImageIndex].src}
                  alt={event.images[selectedImageIndex].title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>

              {/* Image Info */}
              <div className="mt-6 text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-3xl">
                <p className="text-white text-lg md:text-xl font-semibold mb-2">
                  {event.images[selectedImageIndex].title}
                </p>
                <p className="text-white/80 text-sm md:text-base">
                  Image {selectedImageIndex + 1} of {event.images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <div className="bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 text-white py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Want to be part of our next event?</h3>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-95 leading-relaxed">Join us in making a difference in the community</p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link 
                href="/contact" 
                className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-auto"
              >
                Contact Us
              </Link>
              <Link 
                href="/event" 
                className="bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 border-2 border-white/50 w-full sm:w-auto"
              >
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
