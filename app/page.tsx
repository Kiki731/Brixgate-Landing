import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import ProgramsSection from "@/components/ProgramsSection";
// import CTASection from "@/components/CTASection"; // hidden — replaced by NewCTASection
import NewCTASection from "@/components/NewCTASection";
// import WaitlistSection from "@/components/WaitlistSection"; // hidden — replaced by NewWaitlistSection
import NewWaitlistSection from "@/components/NewWaitlistSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <CoursesSection />
      <ProgramsSection />
      <NewCTASection />
      <NewWaitlistSection />
      <WhyChooseSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
