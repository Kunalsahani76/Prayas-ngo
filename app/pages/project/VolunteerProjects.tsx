import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Organized life skills workshops for school-going children and underprivileged youth.',
    image: '/gallery/62.jpg', // Replace with actual image path
    alt: 'Smiling children',  
  },
  {
    title: 'Conducted vocational skill development sessions in collaboration with local trainers.',
    image: '/gallery/85.jpg', // Replace with actual image path
    alt: 'Skill development session',
  },
  {
    title: 'Led environmental awareness campaigns on climate change and sustainable living.',
    image: '/gallery/68.jpg', // Replace with actual image path
    alt: 'Environmental awareness campaign',
  },

   {
    title: 'Supported community clean-up drives and waste management initiatives.',
    image: '/gallery/81.jpg', // Replace with actual image path
    alt: 'Supported community',
  },
   {
    title: 'Facilitated educational support programs for children in marginalized communities.',
    image: '/gallery/63.jpg', // Replace with actual image path
    alt: 'Facilitated educational support',
  },
  {
    title: 'Promoted eco-friendly practices and distributed reusable and recyclable products.',
    image: '/gallery/59.jpg', // Replace with actual image path
    alt: 'Promoted eco-friendly',
  },
];

export default function VolunteerProjects() {
  return (
    <section className="px-4 md:px-20 lg:py-16 bg-white text-[#0f172a] w-full">
      <div className="md:pb-8 pt-[40px] md:pt-[100px]">
        <div className='flex'>
         <div className="h-[3px] w-[100px] bg-black mr-[20px] mt-[10px]"></div>

          <div>
            <p className="text-md subheading font-semibold tracking-widest uppercase mb-2">Projects we have done</p>
        <h2 className="hidden md:block text-3xl md:text-5xl font-semibold leading-tight subheading">
          Things Prayas has <br />
        </h2>
        <h2 className="hidden md:block text-3xl md:text-5xl font-semibold leading-tight subheading pt-[15px]">
           volunteered till now.
        </h2>
          </div>

        </div>

          <h2 className="block md:hidden text-2xl md:text-5xl font-semibold leading-tight subheading">
          Things Prayas has <br />
        </h2>
        <h2 className="block md:hidden text-2xl md:text-5xl font-semibold leading-tight subheading pt-[10px]">
           volunteered till now.
        </h2>
        
      </div>
     <div className="pt-[30px] md:pt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.alt}
          className="w-full h-[300px] object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex-grow flex items-end">
        <p className="text-black text-[20px] lg:text-[20px] xl:text-[20px] leading-snug subheading">
          {project.title}
        </p>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
