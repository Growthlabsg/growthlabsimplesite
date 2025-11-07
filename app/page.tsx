import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CursorFollower from "@/components/CursorFollower";
import Hero from "@/components/Hero";
import About from "@/components/About_old";
import Features from "@/components/Features";
import Announcements from "@/components/Announcements";
import CommunityGalleryCompact from "@/components/CommunityGalleryCompact";
import CommunityFeed from "@/components/CommunityFeed";
import EventsPreview from "@/components/EventsPreview";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import FounderPreview from "@/components/FounderPreview";
import SportsClubPreview from "@/components/SportsClubPreview";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-x-hidden">
      <CursorFollower />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Announcements />
      <CommunityGalleryCompact />
      <CommunityFeed />
      <EventsPreview />
      <StatsSection />
      <Partners />
      <HowItWorks />
      <Benefits />
      <FounderPreview />
      <SportsClubPreview />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
