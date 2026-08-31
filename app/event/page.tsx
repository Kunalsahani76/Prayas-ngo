// pages/events.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContributeBanner from "./ContributeBanner";
import ContributaionPage from "./ContributaionPage";
import OurEvents from "../about/OurEvents";
import { title } from "node:process";




const events = [
  {
    image: '/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/1.jpeg',
    imagePosition: 'center',
    title: 'Sessions at schools, Rairangpur, Odisha',
    date: '10th Aug 2026',
    location: 'Chandra Sekhar Academy, Puri',
    slug: 'sessions-at-schools-rairangpur-odisha',
    hasDetails: true,
  },
  {
    image: '/event/Session%20at%20AID%20Noida%20-%2027th%20Aug%202026/aid%201.jpg',
    imagePosition: 'center',
    title: 'Session at AID Noida - 27th Aug 2026',
    date: '27th Aug 2026',
    location: 'AID Noida, Noida',
    slug: 'session-at-aid-noida-27th-aug-2026',
    hasDetails: true,
  },
  {
    image: '/event/Session%20at%20AID%20Noida%20Centre%20July%202026/WhatsApp%20Image%202026-07-18%20at%2011.22.13%20%20%20AM.jpeg',
    imagePosition: 'center 30%',
    title: 'Session at AID Noida Centre July 2026',
    date: 'July 2026',
    location: 'AID Noida Centre, Noida',
    slug: 'session-at-aid-noida-centre-july-2026',
    hasDetails: true,
  },
  {
    image: '/event/Session%20at%20Sankalp%20Education%20Centre%2C%20Delhi%20July%202026/WhatsApp%20Image%202026-07-15%20at%206.34.59%20PM%20%281%29.jpeg',
    title: 'Session at Sankalp Education Centre, Delhi',
    date: 'July 2026',
    location: 'Sankalp Education Centre, Delhi',
    slug: 'session-at-sankalp-education-centre-delhi-july-2026',
    hasDetails: true,
  },
    {
    image: '/krishna-vidya-bhawan/image-1.png',
    title: 'Interaction with students of Lotus Krishna Vidya Bhawan, Noida',
    date: 'May 2026',
    location: 'Lotus Krishna Vidya Bhawan, Noida',
    slug: 'interaction-session',
    hasDetails: true,
  },
    {
    image: '/rainbow-school/image-1.png',
    title: 'Interaction with students of Rainbow School',
    date: 'May 2026',
    location: 'Rainbow School',
    slug: 'rainbow-school-interaction',
    hasDetails: true,
  },
   {
    image: '/sankalp-education/image-1.png',
    title: 'Interaction with students of Sankalp Education',
    date: 'May 2026',
    location: 'Sankalp Education, Delhi',
    slug: 'sankalp-education-interaction',
    hasDetails: true,
  },
    {
    image: '/navyug-school/img1.jpeg',
    title: 'Interactive session with students of Navyug School, Delhi',
    date: 'April 2026',
    location: 'Navyug School, Delhi',
    slug: 'interactive-session',
    hasDetails: true,
  },
   {
    image: '/child-development/child-development-1.jpeg',
    title: 'Donation Drive at Child Development Centre in Jamia University Campus',
    date: 'February 2026',
    location: 'Jamia University Campus, Delhi',
    slug: 'child-development-centre-jamia',
    hasDetails: true,
  },
  
   {
    image: '/sg-school/sg-school-1.jpeg',
    // title: 'Educational Program at S G Public School ',
    title:`Lifeskills Session at Mother's Public School, Bhubaneswar`,
    date: 'November 2025',
    location: 'S G Public School',
    slug: 'lifeskills-session-bhubaneswar',
    hasDetails: true,
  },
  {
    image: '/winter-donation/winter-donation-1.jpeg',
    title: 'Winter Donation Drive at Gandhi Kusthashram, Delhi',
    date: 'November 2025',
    location: 'Gandhi Kusthashram, Delhi',
    slug: 'winter-donation-drive-delhi',
    hasDetails: true,
  },
  {
    image: '/skill-session/lifeskill-noida-1.jpeg',
    title: 'Life Skill Session at Lotus Krishna Vidya Bhawan, Noida',
    date: 'November 2025',
    location: 'Lotus Krishna Vidya Bhawan, Noida',
    slug: 'life-skill-session-noida',
    hasDetails: true,
  },
  {
    image: '/children-day/children-day-1.jpeg',
    title: 'Interaction with students at S.G Public School, Ghaziabad',
    date: 'November 2025',
    location: 'Various Locations',
    slug: 'children-day-celebration',
    hasDetails: true,
  },
 
  {
    image: '/blossoms/img1.jpeg',
    title: 'Interaction with Blossoms School, Bhubaneswar',
    date: 'November 2025',
    location: 'Mother\'s Public School, Bhubaneswar',
    slug: 'blossoms-school-bhubaneswar',
    hasDetails: true,
  },
  
 
 
];

const EventsPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Image */}
      <div className="w-full h-[600px] relative">
        <Image
          src="/children-day/children-day-3.jpeg"
          alt="Our Events"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      

      {/* Events Section */}
      <div className="w-full container px-4 mx-auto   pt-6">
       <h2 className="text-2xl md:text-4xl heading font-semibold mb-10 flex items-center whitespace-pre">Our Events

          <div className="h-[1px] w-full bg-gray-500"></div>
        </h2>
  <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
  {events.map((event, index) => {
    const EventCard = (
      <div
        key={index}
        className="flex flex-col bg-white shadow-sm rounded-lg overflow-hidden border h-[400px] cursor-pointer hover:shadow-lg transition-shadow"
      >
        <div className="relative h-[340px] overflow-hidden group">
          <Image
            src={event.image}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            style={{ objectPosition: event.imagePosition ?? 'center' }}
            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="flex-1 px-4 flex flex-col justify-center">
          <h3 className="font-semibold text-lg text-gray-800">{event.title}</h3>
          <p className="text-sm text-gray-600">{event.date}</p>
        </div>
      </div>
    );

    return event.hasDetails && event.slug ? (
      <Link key={index} href={`/event/${event.slug}`}>
        {EventCard}
      </Link>
    ) : (
      EventCard
    );
  })}
</div>
       
      </div>
      <ContributeBanner />
      <ContributaionPage />
    </div>
  );
};

export default EventsPage;
