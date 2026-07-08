'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="py-20 md:py-22 pt-[120px] md:pt-[150px] lg:pt-[200px] relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            className="space-y-8 order-2  md:order-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-[50px] lg:text-[80px] font-bold tracking-tighter heading md:leading-[60px] lg:leading-[90px]">
              We Need Your{" "}
              <span className="block">Powerful Hands To</span>
              <motion.span
                className="text-emerald-600 inline-block"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              >
                Change
              </motion.span>{" "}
              The World.
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring' }}>
                <Button className="bg-[#299E58] hover:bg-emerald-700 text-white transition-all duration-300 ease-in-out">
                  <Link className="text-white" href="/causes">
                    All Causes
                  </Link>
                  &nbsp;&nbsp;
                  <ChevronRight />
                </Button>
              </motion.div> */}

              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring' }}>
                <Button
                  variant="outline"
                  className="border-[#299E58] bg-transparent text-[#299E58] hover:bg-emerald-700 hover:text-white transition-all duration-300 ease-in-out"
                >
                  <Link href="/donate">Donate Now</Link>&nbsp;&nbsp;
                  <ChevronRight />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative md:order-none order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-white shadow-[0_20px_25px_-5px_rgba(41,158,88,0.6),0_8px_10px_-6px_rgba(41,158,88,0.5)]">
              <img
             
                src="/gallery/khushi.jpg"
                alt="Children in classroom"
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>

            <motion.div
              className=" hidden md:block absolute -top-10 -right-5 w-[480px] h-[480px] md:w-[580px] md:h-[580px] border-[2px] border-[#299E58] rounded-full z-0"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            />

            
             <motion.div
              className="hidden md:block absolute top-8 -right-3 h-24 w-24 bg-[#299E58] rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
