import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import CoursesSection from "@/components/CoursesSection";
import AIInMyFieldSection from "@/components/AIInMyFieldSection";
import ProgramsSection from "@/components/ProgramsSection";
import CTASection from "@/components/CTASection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <StatsBar />
      <CoursesSection />
      <AIInMyFieldSection />
      <ProgramsSection />
      <CTASection />
      <WhyChooseSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
