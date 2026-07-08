import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const helpItems = [
  {
    title: "Life Skills & Education",
    description:
      "Empowering children and youth with essential life skills and access to quality education, enabling them to make informed decisions and build leadership qualities.",
    icon: "/help/education.avif",
    bgImage: "/gallery/1.jpg",
  },
  {
    title: "Skill Development",
    description:
      "Offering vocational training and practical workshops to enhance youth employability and encourage self-reliance.",
    icon:"/help/skill.png",
    bgImage:"/gallery/1.jpg",
  },
  {
    title: "Community & Environmental Engagement",
    description:
      "Through awareness campaigns and sustainability initiatives, we inspire individuals to participate in community development and environmental conservation.",
    icon: "/help/env.png",
    bgImage: "/gallery/1.jpg",
  },
];




const HelpSection = () => {
  return (
    <section className="py-16 text-center px-4">
      <h2 className="text-3xl  md:text-center md:text-5xl font-semibold mb-12 heading">
        How Could Prayas Help?
      </h2>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 subheading mx-auto w-full">
        {helpItems.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 p-[1px] transition-all duration-300 ease-in-out hover:scale-105"
          >
            <div className="relative rounded-xl h-full p-4 md:p-8 bg-white hover:bg-gradient-to-br from-green-100 to-emerald-100 transition-all duration-300 ease-in-out">
              <div className="flex justify-center mb-6 rounded-full">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  priority={true} // helps preloading
                  className="rounded-full"
                />
              </div>
              <h3 className="text-[22px] md:text-[26px] mb-4 font-bold ">{item.title}</h3>
              <p className="text-gray-600 mb-6 text-[18px] md:text-[22px]">
                {item.description}
              </p>

              {/* <Button
                variant="outline"
                className="border-[#299E58] bg-transparent text-[#299E58] hover:bg-emerald-700"
              >
                <Link href="/donate">Read More</Link>
              </Button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelpSection;
