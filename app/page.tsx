import HomeSection from "./components/home";
import Education from "./components/education";
import ExperienceSection from "./components/experience";
import ProjectSection from "./components/project";

export default function page() {
  return (
    <main >
      <HomeSection />
      <Education />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
}
