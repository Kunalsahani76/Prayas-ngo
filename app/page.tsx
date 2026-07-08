import AboutUsSection from "./pages/about/AboutUsSection";
import BlogPage from "./pages/blog/BlogPage";
import EventsPage from "./pages/event/EventsPage";
import HelpSection from "./pages/help/HelpSection";
import HeroSection from "./pages/home/HomePage";
import VolunteerProjects from "./pages/project/VolunteerProjects";
import ChildrenServices from "./pages/services/ChildrenServices";
import TestimonialSection from "./pages/TestimonialSection/TestimonialSection";


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full">
     

      <main className="flex-1 container mx-auto">
      <HeroSection />
      <HelpSection />
      

        
      </main>
      <AboutUsSection />

      <VolunteerProjects />

      <ChildrenServices />

      <EventsPage />
      <TestimonialSection />
      {/* <BlogPage /> */}

     
    </div>
  );
}