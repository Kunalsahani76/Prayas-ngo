"use client"
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="bg-[#c4e3cd] py-16 px-6 md:px-20 w-full">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center container">
        {/* Text first */}
        <motion.div
          className="text-[#1b4332] lg:col-span-1 order-1 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading tracking-wide">
            About Us
          </h2>
          <p className="text-[16px] md:text-[22px] leading-relaxed mb-8 subheading">
            Prayas is a community-driven initiative committed to nurturing
            empowered, responsible, and self-sufficient individuals. We focus on
            life skills education, access to quality learning, and vocational
            training to support the holistic development of youth. Through
            community engagement, environmental awareness, and sustainable
            practices, we aim to instill a sense of social responsibility,
            ecological consciousness, and collective well-being. At Prayas, we
            believe that meaningful change begins with empowered individuals
            working together toward a better future.
          </p>
          <Button
            className="bg-[#299E58] hover:bg-emerald-700 text-white flex items-center gap-2 transition-colors duration-300"
            aria-label="Donate Now"
          >
            <Link href="/donate" className="focus:outline-none">
              Donate Now
            </Link>
            <ChevronRight size={20} />
          </Button>
        </motion.div>

        {/* Images second */}
        <motion.div
          className=" order-2 lg:order-1 gap-2 space-y-2 "
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/gallery/88.jpg"
              alt="Group of children with volunteers"
              width={500}
              height={400}
              className="rounded-xl w-full h-full md:h-[300px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex gap-4">
            <div className="rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 flex-1">
              <Image
                src="/gallery/71.jpg"
                alt="Children sitting on colorful mat"
                width={500}
                height={190}
                className="rounded-xl w-full  h-full md:h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 flex-1">
              <Image
                src="/gallery/70.jpg"
                alt="Group photo of children and volunteers"
                width={500}
                height={190}
                className="rounded-xl w-full  h-full md:h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
