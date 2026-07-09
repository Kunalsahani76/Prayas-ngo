// components/TeamSection.tsx

import { useRouter } from "next/navigation";



type TeamMember = {
  name: string;
  title: string;
  image: string;
  slug: string;
};

const team: TeamMember[] = [
  {
    name: "Suvralina Mohanty",
    title: "Founder, Trustee",
    image: "/team/1.png",
    slug: "suvralina-mohanty",
  },
  {
    name: "Pradeep Mohanta",
    title: "Trustee",
    image: "/team/2.png",
    slug: "pradeep-mohanty",
  },
  {
    name: "Pranshee Mohanta",
    title: "Trustee",
    image: "/team/3.png",
    slug: "pranshee-mohanty",
  },
  {
    name: "Manisha Singh",
    title: "Program Coordinator",
    image: "/team/manisha-singh.jpeg",
    slug: "manisha-singh",
  },
   {
    name: "Atasi Nayak",
    title: "Program Coordinator",
    image: "/team/atasi-nayak.jpeg",
    slug: "atasi-nayak",
  },
   {
    name: "Pallabi Sen Sahoo",
    title: "Program Coordinator",
    image: "/team/pallabi-sen-sahoo.png",
    slug: "pallabi-sen-sahoo",
  },

   {
    name: "Anil Tiwari",
    title: "Program Coordinator",
    image: "/team/anil.png",
    slug: "anil-tiwari",
  },
  {
    name: "Anamika Kamal",
    title: "Program Coordinator",
    image: "/team/Anamika Kamal.jpg",
    slug: "anamika-kamal",
  },
  {
    name: "Suruchi Bassi",
    title: "Program Coordinator",
    image: "/team/suruchi-bassi.png",
    slug: "suruchi-bassi",
  }
];

const imagePositionBySlug: Record<string, string> = {
  "anil-tiwari": "center 18%",
  "anamika-kamal": "center 28%",
  "suruchi-bassi": "center 18%",
};

export default function TeamSection() {
  const router = useRouter();
  const handleClick = (member:any) => {
  router.push(`/team/?slug=${member.slug}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  return (
    <section className="bg-[#fafafa] py-16 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 heading">Meet our team</h2>
      <p className="text-lg md:text-4xl text-gray-500 mt-4 subheading">The hearts behind the mission.</p>

      <div className="mt-12 grid grid-cols-1 container sm:grid-cols-2 md:grid-cols-3 gap-10 w-full mx-auto">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center overflow-hidden">

            <div className="rounded-full overflow-hidden  w-[300px] h-[300px] border border-gray-600">
 <div
  onClick={()=>handleClick(member)}
  className="rounded-full overflow-hidden h-full cursor-pointer"
>
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    style={{ objectPosition: imagePositionBySlug[member.slug] || "center" }}
  />
</div>
            </div>
           
           
            <h3 className="mt-4 text-xl md:text-3xl xl:text-4xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-lg text-gray-500 font-semibold pt-2">{member.title}</p>
            {/* <div className="flex space-x-6 mt-3 text-gray-700">
              <a href="#" aria-label="Facebook">
                <FaFacebookF className="hover:text-blue-600 w-[30px] h-[30px] " />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="hover:text-blue-400 w-[30px] h-[30px]" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="hover:text-blue-700 w-[30px] h-[30px]" />
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
