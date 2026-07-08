// app/events/page.tsx (or pages/events.tsx)
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import OurEvents from '@/app/about/OurEvents';



export default function EventsPage() {
  return (
    <div className="py-[60px] md:py-[130px] w-full container mx-auto px-4">
      {/* Top Section */}
      <div className="flex flex-col  gap-12 items-start pb-[50px]">
        {/* Left Side */}
        <div className="flex-1 ">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 leading-snug heading">
            Events, Camps & Workshops
          </h2>
          <p className="text-gray-600 mb-6 subheading text-[16px] md:text-[20px]">
            Join us for a series of engaging workshops and conferences designed to inspire, educate, and connect individuals from across communities.
          </p>
         
          <Button className="bg-[#299E58] hover:bg-emerald-700 text-white ">
            <Link className='text-white' href="/event"> View All Events</Link>&nbsp;&nbsp;
           <ChevronRight />
          </Button>
        </div>

        {/* Right Side */}
         <OurEvents />

      </div>

      {/* Statistics */}
      {/* <div className="grid heading grid-cols-1 md:grid-cols-3 gap-8 pt-[50px] text-center">
        <div >
          <h3 className="text-6xl font-bold text-gray-900">520k</h3>
          <p className="text-4xl font-semibold text-gray-800 mt-4">Poor People</p>
        </div>
        <div>
          <h3 className="text-6xl font-bold text-gray-900">842M</h3>
          <p className="text-4xl font-semibold text-gray-800 mt-4">Fund Rise</p>
        </div>
        <div>
          <h3 className="text-6xl font-bold text-gray-900">24k</h3>
          <p className="text-4xl font-semibold text-gray-800 mt-4">Active Member</p>
        </div>
      </div> */}
    </div>
  );
}
