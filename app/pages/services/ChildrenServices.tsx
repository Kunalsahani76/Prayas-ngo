"use client";
import React from "react";

const services = [
  {
    icon: "🏢",
    title: "Holistic Development Focus",
    description: "Combines education, skill-building, and life coaching.",
  },
  {
    icon: "🧘‍♂️",
    title: "Community-Centric Approach",
    description: "Engages youth in meaningful social initiatives.",
  },
  {
    icon: "🌊",
    title: "Sustainability-Driven",
    description: "Prioritizes environmental education and resource management.",
  },
  {
    icon: "🐾",
    title: "Collaborative Model",
    description: "Works with local communities, volunteers, and partners.",
  },
];

export default function ChildrenServices() {
  return (
    <div className="bg-[#c0e1c8] relative  py-[100px]   w-full flex flex-col items-center text-center">
      <div className="w-full container mx-auto px-4">
        <h1 className="text-2xl heading xl:text-5xl font-bold text-[#1e293b]">
          Some services we
        </h1>
        <h1 className="text-2xl heading xl:text-5xl font-bold text-[#1e293b] md:pt-[20px] pb-6">
          provide for our children
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-green-100 text-green-600 p-4 rounded-full text-3xl">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-xl xl:text-2xl text-[#1e293b]">
                  {service.title}
                </h3>
                <p className="text-gray-700 xl:text-lg pt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
