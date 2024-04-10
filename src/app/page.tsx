import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestomonialCards";
import UpcomingWebinars from "@/components/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased">
     <HeroSection/>
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
   </main>
  );
}
