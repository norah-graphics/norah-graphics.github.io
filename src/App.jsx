import React from 'react';
import HeaderSection from './comps/header';
import BioSection from './comps/bio';
import MainSection from './comps/main_section';
import FooterSection from './comps/footer';
import SkillsSection from './comps/skills_section';
import CoursesAchievementsSection from './comps/course';

const App = () => {

  return (

    <div className="min-h-screen bg-[#F3F3F3]">
     <HeaderSection/>
       <MainSection/>
       <BioSection/>
       <SkillsSection/>
       <CoursesAchievementsSection/>
      <FooterSection/>
    </div>
  );
};

export default App;