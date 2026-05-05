import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { EngageSection } from "./engage-section";
import { HeroSection } from "./hero-section";
import { ProcessSection } from "./process-section";
import { ServicesSection } from "./services-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <EngageSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
