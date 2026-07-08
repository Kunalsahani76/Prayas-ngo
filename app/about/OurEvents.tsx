"use client"
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';


import React from 'react'
const events = [
  {
    date: "",
    month: "May and Jun 2025",
    title: "Summer Workshop (offline and online)",
  },
  {
    date: "",
    month: "3rd-6th JUN 2025",
    title: "Youth Camp facilitation at Bangalore",
  },
  
  {
    date: "",
    month: "AUG 2025",
    title: "Library set up – donation of books and setting up libraries",
  },
  {
    date: "",
    month: "AUG 2025",
    title: "Opening of leaning centre for the unprivileged children",
  },
];

export default function OurEvents() {
  const router = useRouter()
  return (
     <div className="w-full mx-auto ">
        <h2 className="text-2xl md:text-4xl heading font-semibold mb-10 flex items-center whitespace-pre">Our Events

          <div className="h-[1px] w-full bg-gray-500"></div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-[#c0e6c9] p-8 rounded-[20px] flex flex-col justify-between min-h-[150px]"
            >
              {/* Date & Month */}
              <div className="flex justify-between space-x-3 items-center">
                <div className="flex">

                  {/* <div className="text-center">
                  <div className="text-3xl md:text-5xl font-bold leading-tight">{event.date}</div>
                  <div className="text-xs md:text-[20px] uppercase tracking-wide font-semibold text-gray-800 pt-[5px]">{event.month}</div>

                  
                </div> */}
                <div className="text-xs  text-gray-700 tracking-wide font-medium pl-4">
                 <div className="flex items-center">
                   <h2 className="subheading pr-[20px] text-[20px] uppercase">
                   {event.month}
                   </h2>
                   {/* <div className="h-[2px] w-[40px] bg-black"></div> */}
                 </div>

                    <div className=" medium flex justify-between items-center pt-[10px]">
              <h2 className="text-[15px] md:text-[28px] max-w-md text-gray-800 leading-snug font-bold" >
                  {event.title}
              </h2>

               
              </div>
                </div>
                
                </div>

                  <div >
                <button onClick={()=>router.push("/event")} className="ml-auto bg-white rounded-full p-4 hover:bg-gray-100 transition">
                  <ArrowRight size={20} className="text-black" />
                </button>
              </div>
               
                
                 
              </div>

              
             
            </div>
          ))}
        </div>
      </div>
  )
}
