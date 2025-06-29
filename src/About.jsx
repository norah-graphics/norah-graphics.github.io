import React from 'react';
import HeaderSection from './comps/header';
import BioSection from './comps/bio';
import MainSection from './comps/main_section';
import FooterSection from './comps/footer';
import SkillsSection from './comps/skills_section';
import CoursesAchievementsSection from './comps/course';
import SideCircleLeft from './comps/side_circle_left';

const About = () => {

  return (

    <div className="min-h-screen bg-[#F3F3F3]  overflow-x-hidden max-w-full">
     <HeaderSection/>
       <MainSection/>
       <SideCircleLeft/>
       <BioSection/>
       <SkillsSection/>
       <CoursesAchievementsSection/>
      <FooterSection
      title="SOCIAL MEDIUM!"
      link="https://linktr.ee/Norah_accounts"/>
    </div>
  );
};

export default About;