import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContributaionPage({title}:{title?:string}) {
  return (
    <section className="relative min-h-[600px] flex items-center container mx-auto px-4 rounded-[20px] overflow-hidden mb-[50px] md:mb-[50px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/935835/pexels-photo-935835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
            backgroundPosition: "center 35%"
          }}
        >
          <div className="w-full h-full bg-black/40"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-6xl mx-auto text-center ">
          <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold text-white mb-6 subheading leading-snug">
          {title ? title:"You can contribute to provide a place for children with special needs!"}  
          </h1>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button 
              size="lg" 
              className="bg-[#299E58] hover:bg-green-700 text-white text-lg py-6 px-8"
            >
              Join as a donor
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-[#299E58] hover:bg-[#299E58] border-white text-lg py-6 px-8"
            >
                <Link  href="/donate">
              Donate
            </Link>
             
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}