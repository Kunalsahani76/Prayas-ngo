'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Monika Tyagi',
    title: 'Director, NSERD',
    image: '/gallery/whatpeople.jpeg',
    image1: '/gallery/whatpeople.jpeg',

    message:
      'As an implementation partner with NSERD, Prayas has played a pivotal role in driving impactful education and community service initiatives at the grassroots level. Together, we have worked to bridge gaps in access, build life skills among youth, and foster inclusive development through sustainable, community-led approaches.',
  },
  {
    name: 'Seema Singh',
    title: 'Director, Ujjwal Bhavishya',
    image: '/gallery/ujjwal.jpg',
    image1: '/gallery/ujjwal2.jpg',

    message:
      'Prayas has been an inspiring force in our mission at Ujjwal Bhavishya. Their active participation in vocational training programs for women and their unwavering dedication to educating underprivileged communities have made a measurable difference on the ground.',
  },
  {
    name: 'Nandini Singh',
    title: 'Secretary, Khushi Foundation',
    image: '/gallery/khushi2.jpg',
    image1: '/gallery/khushi.jpg',

    message:
      'Partnering with Prayas has significantly strengthened our efforts to bring education to children in marginalized communities. Their commitment to inclusive learning and their hands-on facilitation of educational support programs reflect a deep sense of purpose and compassion. Prayas has not only delivered resources but has also brought hope and continuity to children’s learning journeys. We value their partnership in creating brighter futures.',
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { name, title, image,image1, message } = testimonials[current];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <section className="flex flex-col xl:flex-row bg-[#c9e8ce] min-h-screen w-full">
      {/* Left Side */}
      <div className="xl:w-1/2 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={image1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={image1}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute inset-0 bg-[#2ca45c] bg-opacity-70 z-10" />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-20 flex items-center justify-start md:justify-center h-full p-10">
          <h2 className="text-white text-3xl md:text-6xl font-bold leading-tight">
            What People
            <br />
            Say About
            <br />
            Us
          </h2>
        </div>
      </div>

      {/* Right Side */}
      <div className="xl:w-1/2 flex flex-col justify-center items-start p-10 gap-6">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            <img
              src={image}
              alt={name}
              className="rounded-full w-[180px] h-[180px] object-cover"
            />
            <p className="text-[16px] md:text-[25px] text-left max-w-3xl subheading">
              {message}
            </p>

            {/* Mobile Name/Title */}
            <div className="text-left block md:hidden">
              <p className="text-[30px] font-semibold heading">{name}</p>
              <p className="text-[20px] sunheading">{title}</p>
            </div>

            {/* Desktop Name/Title + Controls */}
            <div className="flex justify-between w-full items-center relative pt-[50px]">
              <div className="text-left hidden md:block">
                <p className="text-[40px] font-semibold heading">{name}</p>
                <p className="text-[30px] sunheading">{title}</p>
              </div>
              <div className="flex gap-4 mt-4 bg-[#2ca45c] px-6 py-4 absolute right-[-40px] bottom-0 w-[300px]">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-white text-white text-xl flex items-center justify-center"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-white text-white text-xl flex items-center justify-center"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
