import React from 'react';
import HeaderSection from './comps/header';
import BioSection from './comps/bio';
import MainSection from './comps/main_section';
import FooterSection from './comps/footer';
import SkillsSection from './comps/skills_section';
import CoursesAchievementsSection from './comps/course';
import PortfolioSection from './comps/portfolio';
import RoseRapsodyShowcase from './comps/rose';
import ProjectsSection from './comps/projects_body';
import SmartRapsodyShowcase from './comps/smart';
import HannaRapsodyShowcase from './comps/hannah';
import ChatBoxComponent from './comps/contact';
const Projects = () => {
  return (
    <div className="min-h-screen bg-[#F3F3F3]  overflow-x-hidden max-w-full">
     <HeaderSection/>
     <PortfolioSection/>
     <ProjectsSection/>
     <RoseRapsodyShowcase/>
     <SmartRapsodyShowcase/>
     <HannaRapsodyShowcase/>
     <ChatBoxComponent/>
      <FooterSection
       title="in"
      link="https://www.linkedin.com/in/norah-mohammed-110253206/"
      />
    </div>
  );
};

export default Projects;