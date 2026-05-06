import { AboutSection } from "../sections/home/about-section";
import { ContactSection } from "../sections/home/contact-section";
import { EngageSection } from "../sections/home/engage-section";
import { HeroSection } from "../sections/home/hero-section";
import { ProcessSection } from "../sections/home/process-section";
import { ServicesSection } from "../sections/home/services-section";

export function HomeExperience() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <EngageSection />
      <ContactSection />
    </main>
  );
}
