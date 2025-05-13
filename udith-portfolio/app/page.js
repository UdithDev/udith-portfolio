import HeroSection from "./sections/HeroSection"
import AboutSection from "./sections/AboutSection"
import ProjectSection from "./sections/ProjectSection"
import ServicerSection from "./sections/ServicerSection"
import ContactSection from "./sections/ContactSection"
export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ServicerSection/>
      <ContactSection/>
    </main>
  );
}
