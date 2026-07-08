"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const journeyData = [
  {
    title: "Monthly Meet for engagement activities -",
    description:
      "Our monthly engagement meets offer a platform for children and youth to connect, express themselves, and participate in creative and skill-based activities that nurture teamwork, confidence, and a sense of belonging.",
    bgColor: "bg-yellow-400",
    image: "/gallery/93.jpg",
  },
  {
    title: "Summer Camps -",
    description:
      "We organize enriching summer camps that blend fun with learning, helping children explore their interests, discover new talents, and build life skills in a joyful and supportive environment.",
    bgColor: "bg-cyan-500",
    image: "/gallery/21.jpg",
  },
  {
    title: "Teachers workshop -",
    description:
      "Our capacity-building workshops for educators focus on innovative teaching methods, emotional intelligence, and child-centered learning, ensuring they are equipped to inspire and guide every student effectively.",
    bgColor: "bg-fuchsia-600 ",
    image: "/gallery/teachers.jpeg",
  },
  {
    title: "Parents workshop -",
    description:
      "We engage parents through interactive sessions that build awareness about child development, emotional well-being, and positive parenting, fostering a stronger support system at home.",
    bgColor: "bg-purple-500",
    image: "/gallery/teachers.jpeg",
  },
  {
    title: "Development of Park at Vaishali,Ghaziabad -",
    description:
      "Prayas proudly contributed to the development of a community park in Vaishali, Ghaziabad by developing a barren land into a safe, green, and engaging space that encourages physical activity and community bonding.",
    bgColor: "bg-green-500",
    image: "/gallery/90.jpg",
  },
  {
    title: "Youth Camp at Bhowali, Uttarakhand -",
    description:
      "Our residential youth camp in the serene hills of Bhowali offered young participants a unique blend of leadership training, nature-based learning, and team-building experiences.",
    bgColor: "bg-pink-600",
    image: "/gallery/25.jpg",
  },
];

export default function OurJourney() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % journeyData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 2 + journeyData.length) % journeyData.length
    );
  };

  // Get the two visible items
  const visibleItems = [
    journeyData[currentIndex],
    journeyData[(currentIndex + 1) % journeyData.length],
  ];

  return (
    <section className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-[#C7E7D0] p-6 md:p-10 rounded-[1.5rem] flex flex-col md:flex-row items-start gap-10 shadow-xl"
      >
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="uppercase text-sm font-semibold tracking-wider text-black"
          >
            Our Journey
          </motion.h4>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl font-bold leading-tight text-black"
          >
            Lighting Paths, Shaping Lives
          </motion.h1>

          <div className="space-y-6 relative min-h-[300px]">
            <AnimatePresence mode="wait">
              {visibleItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className={`${item.bgColor} text-white p-3 rounded-lg transition-transform duration-300 group-hover:rotate-6`}
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2h2V5h2V3H5zm12 0v2h2v2h2V5a2 2 0 00-2-2h-2zm2 16h-2v2h2a2 2 0 002-2v-2h-2v2zM5 19v-2H3v2a2 2 0 002 2h2v-2H5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 mt-1 whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-lg text-white bg-gray-800 hover:bg-gray-700 transition"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-lg text-white bg-gray-800 hover:bg-gray-700 transition"
            >
              Next
            </button>
          </div>
        </div>

        {/* Dynamic Image Section */}
        <motion.div
          key={visibleItems[0].image}
          initial={{ opacity: 0.3, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out">
            <Image
              src={visibleItems[0].image}
              alt="Journey Image"
              width={500}
              height={600}
              className="object-cover h-[430px] rounded-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
