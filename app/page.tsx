import HomeSection from "./components/home";
import Education from "./components/education";
import SkillSelection from "./components/skill";
import ExperienceSection from "./components/experience";
import ProjectSection from "./components/project";

export default function page() {
  return (
    <main >
      <HomeSection />
      <Education />
      <SkillSelection />        
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
}
