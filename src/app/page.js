import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ExperienceTimeline from "./components/ExperienceSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-10 py-10">
        <HeroSection />
        {/* About Section */}
        <section id="about" className="py-16">
          <AboutSection />
        </section>
        {/* Experience Timeline */}
        <section id="experience" className="py-16">
          <ExperienceTimeline />
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-16">
          <ProjectSection />
        </section>
        <section id="contact" className="py-16">
          <EmailSection />
        </section>
      </div>
      <Footer />
    </main>
  );
}
