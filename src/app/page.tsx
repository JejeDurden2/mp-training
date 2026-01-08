import {
  Navigation,
  HeroSection,
  StudioSection,
  ServicesSection,
  CoachesSection,
  ContactSection,
  FooterSection,
} from "@/components/sections";

export default function MPTrainingLanding() {
  return (
    <div className="min-h-screen font-inter overflow-x-hidden bg-black text-white">
      <Navigation />
      <main>
        <HeroSection />
        <StudioSection />
        <ServicesSection />
        <CoachesSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
