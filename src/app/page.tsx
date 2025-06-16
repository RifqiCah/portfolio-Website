import HomeSection from '../components/sections/home';
import EducationSection from '../components/sections/education';
import SkillSection from '../components/sections/skill'; // Saya asumsikan maksud Anda SkillSection, bukan SkillSelection :)
import ExperienceSection from '../components/sections/experience';
import ProjectSection from '../components/sections/project';

export default function Page() {
  return (
    <main >
      <HomeSection />
      <EducationSection />
      <SkillSection />        
      {/* <ExperienceSection /> */}
      <ProjectSection />
    </main>
  );
}
