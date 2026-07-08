// components/ContributeBanner.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";


const ContributeBanner = () => {
  return (
    <div className="flex justify-center py-16 bg-white">
      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-md">
        <Image
          src="/images/group_students.jpg"
          alt="Contribute Banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-6">
            You can contribute to provide a place <br />
            for children with special needs!
          </h2>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-green-600 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-green-700 transition">
              Join as a donor
            </button>
            <button className="bg-white text-green-600 text-sm font-medium px-5 py-2 rounded-md border border-green-600 hover:bg-green-50 transition">
               <Link  href="/donate">
              Donate
            </Link>
             
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeBanner;
