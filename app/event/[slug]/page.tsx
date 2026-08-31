import React from "react";
import { notFound } from "next/navigation";
import EventDetailClient from "./EventDetailClient";

// Event data with all images
const eventDetails: Record<string, {
  title: string;
  date: string;
  location: string;
  description: string;
  images: { src: string; title: string }[];
}> = {
  "session-at-aid-noida-27th-aug-2026": {
    title: "Session at AID Noida - 27th Aug 2026",
    date: "27th Aug 2026",
    location: "AID Noida, Noida",
    description: "A meaningful session at AID Noida, bringing together participants for learning, interaction, and engagement.",
    images: [
      { src: "/event/Session%20at%20AID%20Noida%20-%2027th%20Aug%202026/aid%201.jpg", title: "Session at AID Noida - 27th Aug 2026" },
      { src: "/event/Session%20at%20AID%20Noida%20-%2027th%20Aug%202026/aid%202.jpg", title: "Session at AID Noida - 27th Aug 2026" },
      { src: "/event/Session%20at%20AID%20Noida%20-%2027th%20Aug%202026/aid%203.jpg", title: "Session at AID Noida - 27th Aug 2026" },
      { src: "/event/Session%20at%20AID%20Noida%20-%2027th%20Aug%202026/aid%204.jpg", title: "Session at AID Noida - 27th Aug 2026" },
      { src: "/event/Session%20at%20AID%20Noida%20-%2027th%20Aug%202026/aid%205.jpg", title: "Session at AID Noida - 27th Aug 2026" },
    ],
  },
  "sessions-at-schools-rairangpur-odisha": {
    title: "Sessions at schools, Rairangpur, Odisha",
    date: "10th Aug 2026",
    location: "Rairangpur, Odisha",
    description: "An engaging session with teachers and students at schools in Rairangpur, Odisha, focused on meaningful learning and interaction.",
    images: [
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/1.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/2.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/3.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/4.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/5.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/6.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/7.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/8.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/9.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/10.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/11.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/12.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/13.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/14.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/15.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/16.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/17.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/18.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/19.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/20.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/21.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/22.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/23.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/24.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/25.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/26.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
      { src: "/event/Sessions%20at%20schools%2C%20Rairangpur%2C%20Odisha/27.jpeg", title: "Sessions at schools, Rairangpur, Odisha" },
    ],
  },
  "session-at-aid-noida-centre-july-2026": {
    title: "Session at AID Noida Centre July 2026",
    date: "July 2026",
    location: "AID Noida Centre, Noida",
    description: "A session held at AID Noida Centre, bringing together participants for meaningful learning and engagement.",
    images: [
      { src: "/event/Session%20at%20AID%20Noida%20Centre%20July%202026/WhatsApp%20Image%202026-07-18%20at%2011.22.13%20%20%20AM.jpeg", title: "Session at AID Noida Centre" },
      { src: "/event/Session%20at%20AID%20Noida%20Centre%20July%202026/WhatsApp%20Image%202026-07-18%20at%2011.22.13%20%20AM.jpeg", title: "Session at AID Noida Centre" },
      { src: "/event/Session%20at%20AID%20Noida%20Centre%20July%202026/WhatsApp%20Image%202026-07-18%20at%2011.22.13%20AM.jpeg", title: "Session at AID Noida Centre" },
    ],
  },
  "session-at-sankalp-education-centre-delhi-july-2026": {
    title: "Session at Sankalp Education Centre, Delhi",
    date: "July 2026",
    location: "Sankalp Education Centre, Delhi",
    description: "A session held at Sankalp Education Centre, Delhi, with engaging activities and shared learning experiences.",
    images: [
      { src: "/event/Session%20at%20Sankalp%20Education%20Centre%2C%20Delhi%20July%202026/WhatsApp%20Image%202026-07-15%20at%206.34.59%20PM%20%281%29.jpeg", title: "Session at Sankalp Education Centre, Delhi" },
      { src: "/event/Session%20at%20Sankalp%20Education%20Centre%2C%20Delhi%20July%202026/WhatsApp%20Image%202026-07-15%20at%206.34.59%20PM.jpeg", title: "Session at Sankalp Education Centre, Delhi" },
      { src: "/event/Session%20at%20Sankalp%20Education%20Centre%2C%20Delhi%20July%202026/WhatsApp%20Image%202026-07-15%20at%206.35.00%20PM%20%281%29.jpeg", title: "Session at Sankalp Education Centre, Delhi" },
      { src: "/event/Session%20at%20Sankalp%20Education%20Centre%2C%20Delhi%20July%202026/WhatsApp%20Image%202026-07-15%20at%206.35.00%20PM%20%282%29.jpeg", title: "Session at Sankalp Education Centre, Delhi" },
      { src: "/event/Session%20at%20Sankalp%20Education%20Centre%2C%20Delhi%20July%202026/WhatsApp%20Image%202026-07-15%20at%206.35.00%20PM.jpeg", title: "Session at Sankalp Education Centre, Delhi" },
    ],
  },
  "life-skill-session-noida": {
    title: "Life Skill Session at Lotus Krishna Vidya Bhawan, Noida",
    date: "November 2025",
    location: "Lotus Krishna Vidya Bhawan, Noida",
    description: "Conducted an engaging life skill session at Lotus Krishna Vidya Bhawan, Noida. The session focused on developing essential life skills among students, including communication, problem-solving, and emotional intelligence.",
    images: [
      { src: "/skill-session/lifeskill-noida-1.jpeg", title: "Students participating in group activities" },
      { src: "/skill-session/lifeskill-noida-2.jpeg", title: "Interactive learning session" },
      { src: "/skill-session/lifeskill-noida-3.jpeg", title: "Team building exercises" },
      { src: "/skill-session/lifeskill-noida-4.jpeg", title: "Students engaged in discussions" },
      { src: "/skill-session/lifeskill-noida-5.jpeg", title: "Practical skill demonstration" },
      { src: "/skill-session/lifeskill-noida-6.jpeg", title: "Group presentation" },
      { src: "/skill-session/lifeskill-noida-7.jpeg", title: "Session highlights and learnings" },
    ],
  },
  "children-day-celebration": {
    title: "Interaction with students at S.G Public School. ",
    date: "November 2025",
    location: "Various Locations",
    description: "A joyful celebration of Children's Day with various activities, games, and cultural programs. The event brought smiles to hundreds of children and created memorable moments for everyone involved.",
    images: [
      { src: "/children-day/children-day-1.jpeg", title: "Children enjoying the celebration" },
      { src: "/children-day/children-day-2.jpeg", title: "Cultural performances by children" },
      { src: "/children-day/children-day-3.jpeg", title: "Fun games and activities" },
      { src: "/children-day/children-day-4.jpeg", title: "Group celebrations" },
      { src: "/children-day/children-day-5.jpeg", title: "Happy moments captured" },
    ],
  },
  "lifeskills-session-bhubaneswar": {
    title: "Lifeskills Session at Mother's Public School, Bhubaneswar",
    date: "November 2025",
    // location: "S G Public School",
    location:"Mother's Public School, Bhubaneswar",
    // description: "An enriching educational program conducted at S G Public School, focusing on holistic development of students through interactive sessions and practical learning experiences.",
    description:"An exciting lifeskills session at Mother's Public School, Bhubaneswar. The children showed tremendous enthusiasm and actively participated in various skill-building activities.",
    images: [
      { src: "/sg-school/sg-school-1.jpeg", title: "Students in classroom session" },
      { src: "/sg-school/sg-school-2.jpeg", title: "Interactive learning activities" },
      { src: "/sg-school/sg-school-3.jpeg", title: "Group discussions" },
      { src: "/sg-school/sg-school-4.jpeg", title: "Practical demonstrations" },
      { src: "/sg-school/sg-school-6.jpeg", title: "Educational materials distribution" },
      { src: "/sg-school/sg-school-7.jpeg", title: "Team activities" },
      { src: "/sg-school/sg-school-8.jpeg", title: "Learning through play" },
      { src: "/sg-school/sg-school-9.jpeg", title: "Creative sessions" },
      { src: "/sg-school/sg-school-10.jpeg", title: "Students showcasing their work" },
      { src: "/sg-school/sg-school-11.jpeg", title: "Program highlights" },
    ],
  },
  "sg-public-school-program": {
    title: "Lifeskills Session at Mother's Public School, Bhubaneswar",
    date: "February 2026",
    location: "Mother's Public School, Bhubaneswar",
    description: "An exciting lifeskills session at Mother's Public School, Bhubaneswar. The children showed tremendous enthusiasm and actively participated in various skill-building activities.",
    images: [
      { src: "/lifeskills-session/lifeskills-bhubaneswar-1.jpeg", title: "Enthusiastic participation from students" },
      { src: "/lifeskills-session/lifeskills-bhubaneswar-2.jpeg", title: "Interactive skill-building activities" },
    ],
  },
  "winter-donation-drive-delhi": {
    title: "Winter Donation Drive at Gandhi Kusthashram, Delhi",
    date: "November 2025",
    location: "Gandhi Kusthashram, Delhi",
    description: "A heartwarming winter donation drive at Gandhi Kusthashram, Delhi. We distributed warm clothes, blankets, and essential items to those in need during the cold winter months.",
    images: [
      { src: "/winter-donation/winter-donation-1.jpeg", title: "Distribution of winter clothes" },
      { src: "/winter-donation/winter-donation-2.jpeg", title: "Blankets and warm clothing" },
      { src: "/winter-donation/winter-donation-3.jpeg", title: "Community gathering" },
      { src: "/winter-donation/winter-donation-4.jpeg", title: "Volunteers helping with distribution" },
      { src: "/winter-donation/winter-donation-5.jpeg", title: "Beneficiaries receiving donations" },
      { src: "/winter-donation/winter-donation-6.jpeg", title: "Spreading warmth and care" },
    ],
  },
  "child-development-centre-jamia": {
    title: "Child Development Centre at Jamia University Campus",
    date: "Ongoing",
    location: "Jamia University Campus, Delhi",
    description: "This child development centre is being run in the Jamia University Campus for disabled children. The centre provides specialized care, therapy, and educational support to help children with disabilities reach their full potential.",
    images: [
      { src: "/child-development/child-development-1.jpeg", title: "Children in therapy session" },
      { src: "/child-development/child-development-2.jpeg", title: "Specialized care and support" },
      { src: "/child-development/child-development-3.jpeg", title: "Educational activities" },
      { src: "/child-development/child-development-4.jpeg", title: "Interactive learning environment" },
      { src: "/child-development/child-development-5.jpeg", title: "Children engaged in activities" },
      { src: "/child-development/child-development-6.jpeg", title: "Therapeutic exercises" },
      { src: "/child-development/child-development-7.jpeg", title: "Group activities" },
      { src: "/child-development/child-development-8.jpeg", title: "Skill development sessions" },
      { src: "/child-development/child-development-9.jpeg", title: "Centre facilities and programs" },
    ],
  },
"blossoms-school-bhubaneswar": {
    title: "Interaction with Blossoms School, Bhubaneswar",
    date: "November 2025",
    location: "Mother's Public School, Bhubaneswar",
    description: "An engaging interaction session with students of Blossoms School, Bhubaneswar. The session included fun activities, educational games, and meaningful discussions to foster learning and development.",
    images: [
      { src: "/blossoms/img1.jpeg", title: "Students participating in activities" },
      { src: "/blossoms/img2.jpeg", title: "Interactive learning session" },
      { src: "/blossoms/img3.jpeg", title: "Group discussions and games" },
      { src: "/blossoms/img4.jpeg", title: "Educational activities" },
      { src: "/blossoms/img5.jpeg", title: "Engaging with students" },
      { src: "/blossoms/img6.jpeg", title: "Session highlights" },
      { src: "/blossoms/img7.jpeg", title: "Session highlights" },
       { src: "/lifeskills-session/lifeskills-bhubaneswar-1.jpeg", title: "Enthusiastic participation from students" },
      { src: "/lifeskills-session/lifeskills-bhubaneswar-2.jpeg", title: "Interactive skill-building activities" },

    ],
  },
    "interaction-session": {
      title: "Interaction with students of Lotus Krishna Vidya Bhawan, Noida",
      date: "May 2026",
      location: "Lotus Krishna Vidya Bhawan, Noida",
      description: "An interactive session with students at Lotus Krishna Vidya Bhawan, focusing on engagement and life skills.",
      images: [
        { src: "/krishna-vidya-bhawan/image-1.png", title: "" },
        { src: "/krishna-vidya-bhawan/image-2.png", title: "" },
        { src: "/krishna-vidya-bhawan/image-3.png", title: "" },
        { src: "/krishna-vidya-bhawan/image-4.png", title: "" },
        { src: "/krishna-vidya-bhawan/image-5.png", title: "" },
      ],
    },
    "rainbow-school-interaction": {
      title: "Interaction with students of Rainbow School",
      date: "May 2026",
      location: "Rainbow School",
      description: "A friendly interactive program held at Rainbow School.",
      images: [
        { src: "/rainbow-school/image-1.png", title: "" },
        { src: "/rainbow-school/image-2.png", title: "" },
        { src: "/rainbow-school/image-3.png", title: "" },
        { src: "/rainbow-school/image-4.png", title: "" },
        { src: "/rainbow-school/image-5.png", title: "" },
        { src: "/rainbow-school/image-6.png", title: "" },
        { src: "/rainbow-school/image-7.png", title: "" },
      ],
    },
    "sankalp-education-interaction": {
      title: "Interaction with students of Sankalp Education",
      date: "May 2026",
      location: "Sankalp Education, Delhi",
      description: "An interactive session held at Sankalp Education.",
      images: [
        { src: "/sankalp-education/image-1.png", title: "" },
        { src: "/sankalp-education/image-2.png", title: "" },
        { src: "/sankalp-education/image-3.png", title: "" },
        { src: "/sankalp-education/image-4.png", title: "" },
        { src: "/sankalp-education/image-5.png", title: "" },
        { src: "/sankalp-education/image-6.png", title: "" },
        { src: "/sankalp-education/image-7.png", title: "" },
        { src: "/sankalp-education/image-8.png", title: "" },
        { src: "/sankalp-education/image-9.png", title: "" },
        { src: "/sankalp-education/image-10.png", title: "" },
        { src: "/sankalp-education/image-11.png", title: "" },
      ],
    },
  "interactive-session":{
     title: "Interactive session with students of Navyug School, Delhi",
    date: "April 2026",
    location: "Navyug School, Delhi",
    description: "An engaging interaction session with students of Navyug School, Delhi. The session included fun activities, educational games, and meaningful discussions to foster learning and development.",
    images: [
      { src: '/navyug-school/img1.jpeg', title: "" },
      { src: '/navyug-school/img2.jpeg', title: "" },
      { src: '/navyug-school/img3.jpeg', title: "" },
      { src: '/navyug-school/img4.jpeg', title: "" },
      { src: '/navyug-school/img5.jpeg', title: "" },
      { src: '/navyug-school/img6.jpeg', title: "" },
      { src: '/navyug-school/img7.jpeg', title: "" },
       { src:'/navyug-school/img8.jpeg', title: "" },
      { src: '/navyug-school/img9.jpeg', title: "" },
      { src: '/navyug-school/img10.jpeg', title: "" },
      { src: '/navyug-school/img11.jpeg', title: "" },

    ],
  }


};

export async function generateStaticParams() {
  return Object.keys(eventDetails).map((slug) => ({
    slug: slug,
  }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = eventDetails[slug];

  if (!event) {
    notFound();
  }

  return <EventDetailClient event={event} />;
}
