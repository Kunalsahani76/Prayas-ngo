
"use client"

import ContributaionPage from "@/app/event/ContributaionPage";
import Image from "next/image";
import {  useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
 type TeamMember = {
  name: string;
  title: string;
  image: string;
  slug: string;
  bio: string;
};
 const teamData: TeamMember[] = [
  {
    name: "Suvralina Mohanty",
    title: "Founder, Trustee",
    image: "/team/suvralina.png",
    slug: "suvralina-mohanty",
    bio: "With around three decades of progressive leadership in Human Resources, our Founder Trustee brings a deep commitment to people development, strategic thinking, and community empowerment. A firm believer in empathy, collaboration, and lifelong learning, she has designed and led impactful programs in life skills, leadership development, and career counselling for students, educators, and parents. She has been actively engaged in civic initiatives, including founding a Children's Club in 2011 and contributing to youth development through the Theosophical Society. Her vision for Prayas is rooted in trust, respect, and the belief that every individual has the potential to grow and give back meaningfully to society.",
  },
  {
    name: "Pradeep Mohanta",
    title: "Trustee",
    image: "/team/pradeep.png",
    slug: "pradeep-mohanty",
    bio: `With over three decades of national and international experience in engineering and project management, he brings deep expertise in planning, execution, and leadership. He has led critical projects across India and abroad. His strategic vision, hands-on experience in project execution, and global training exposure make him a vital pillar in guiding Prayas’s development initiatives with precision and impact. His commitment to structured implementation, sustainable outcomes, and capacity building ensures that every initiative is rooted in long-term value. With a strong belief in community empowerment through well-managed infrastructure and systems, he contributes not just technical excellence but also a deep sense of responsibility towards inclusive growth and social development.`,
  },
  {
    name: "Pranshee Mohanta",
    title: "Trustee",
    image: "/team/pranshee.png",
    slug: "pranshee-mohanty",
    bio: `She is a student of Design, a passionate learner, cultural enthusiast, and community builder who believes in the unique potential of every individual. Rooted in the values of lifelong learning and purposeful action, she has actively contributed to diverse initiatives — from designing impactful newsletters to leading youth-driven campaigns. As a young trustee at Prayas, she has helped shape social programs and community outreach efforts. Through every experience, she strives to ask the right questions, embrace progress over perfection, and make meaningful use of the time and talents she has been given.`,
  },
   {
    name: "Manisha Singh",
    title: "Program Coordinator",
    image: "/team/manisha-singh.jpeg",
    slug: "manisha-singh",
    bio:"Manisha Singh is a trained psychologist with a specialization in clinical psychology and extensive experience in counseling, coaching, and developmental support. She brings a strong psychological lens to all initiatives at Prayas Foundation, particularly in designing programs that address emotional well-being, behavioral patterns, and personal growth. Her work spans individual counseling, addiction and distress support, and student guidance across academic institutions. At Prayas, Manisha plays a key role in program design from a psychological perspective, ensuring that each intervention is thoughtful, structured, and aligned with human development principles. Her approach integrates empathy, scientific understanding, and practical application to create meaningful and lasting change."
  },
   {
    name: "Atasi Nayak",
    title: "Program Coordinator",
    image: "/team/atasi-nayak.jpeg",
    slug: "atasi-nayak",
    bio:"Atasi Nayak brings a diverse professional background combining law, finance, and the arts, contributing a unique perspective to  Prayas Foundation’s initiatives. Having practiced law and managed financial operations in an educational institution, she brings structure, discipline, and attention to detail in her work. Alongside, she reflects her deep connection with culture and creative expression. At Prayas, Atasi contributes to program conceptualization and session coordination, ensuring that ideas are thoughtfully translated into well-executed sessions. Her ability to organize and support program delivery makes her a key pillar in the smooth functioning of initiatives."
  },
   {
    name: "Pallabi Sen Sahoo",
    title: "Program Coordinator",
    image: "/team/pallabi-sen-sahoo.png",
    slug: "pallabi-sen-sahoo",
    bio:"Pallavi Sahoo brings energy, creativity, and strong interpersonal skills to Prayas Foundation, playing a vital role in driving engagement and ensuring seamless coordination across programs. With a background in arts and history, along with professional experience in computer education and student training, she has developed a natural ability to connect with diverse groups. Her involvement in performing arts have further enhanced her expressive abilities. At Prayas, Pallavi leads engagement initiatives, participant interaction, and program coordination, ensuring that every session is vibrant, inclusive, and well-managed. She is instrumental in building connections with participants, fostering a positive learning environment, and maintaining smooth communication across all stakeholders."
  },
    {
    name: "Anil Tiwari",
    title: "Program Coordinator",
    image: "/team/anil.png",
    slug: "anil-tiwari",
    bio:"Anil Tiwari is a retired banker with 38 years of experience across India — from Dibrugarh in the Northeast to Baroda in the West, and in major cities like Kolkata and Mumbai. This exposure deepened his understanding of diverse cultures, customs, and ways of life across the country. Academically, he holds an LLB, MBA, and MA in Economics — qualifications that shaped his decision-making and prepared him for senior responsibilities. Anil has a lifelong commitment to education. During school, he actively volunteered in _प्रौढ़ शिक्षा अभियान_, teaching literacy to laborers and vendors. In college, he continued this work with an NGO focused on educating children, domestic workers, and daily wage earners."
  },
   {
    name: "Suruchi Bassi",
    title: "Program Coordinator",
    image: "/team/suruchi-bassi.png",
    slug: "suruchi-bassi",
    bio:"Suruchi Bassi is a Wellness Coach, Life Coach, Energy Healer, and Grand Reiki Master dedicated to helping people create balance in mind, body, and soul. Through her online fitness and wellness community, she inspires people of all age groups to embrace a healthier, happier, and more conscious lifestyle. Her sessions beautifully combine fitness, yoga, meditation, breathwork, chakra healing, Reiki, and spiritual awareness to support holistic well-being. She is especially passionate about guiding people toward self-discovery, emotional healing, inner confidence, and positive transformation."
  },
];





export default function TeamDetailPage() {

  const searchParams = useSearchParams();
  console.log(">>>>>>>>>searchParams",searchParams);
  
  const slug = searchParams.get("slug");
  const [member, setMember] = useState<any | null>(null);

  useEffect(() => {
    if (slug) {
        console.log(">>>>>>slug",slug);
        
      const found = teamData.find((m) => m.slug === slug);
      setMember(found || null);
    }
  }, [slug]);
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  return (
    <div className="w-full">
    
  


    <div className="flex pt-[120px] w-full md:pt-[150px] lg:pt-[200px] flex-col items-center justify-center py-10 bg-[#fdfdfb] text-left container  mx-auto px-4">
     <div className="flex items-center w-full">
       <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
        <Image
          src={member?.image} // Place your image in the public folder as `public/founder.jpg`
          alt={member?.name}
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
       
      </div>

       <div className="pl-4">
           <h1 className="text-2xl sm:text-3xl font-bold text-[#1b2230]">{member?.name}</h1>
      <h2 className="text-lg sm:text-xl text-gray-500 font-semibold mb-6">{member?.title}</h2>
        </div>
     </div>
     
      <div className="w-full bg-white rounded-lg shadow-sm p-6 text-gray-700 text-base leading-relaxed">
        <p className="text-[16px] md:text-[22px]">
         {member?.bio}
        </p>
      </div>
    </div>
    <ContributaionPage
              title="At Prayas, we turn dreams into action—
empowering youth, building conscious
communities, and creating real impact with
integrity. Join us in shaping a brighter, inclusive
future."
            />
    </div>
  );
}
