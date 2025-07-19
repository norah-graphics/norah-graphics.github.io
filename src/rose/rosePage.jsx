import React from 'react';
import HeaderSection from '../comps/header';
import FooterSection from '../comps/footer';
import HeroSection from '../shared_comps/hero';
import ProjectOverViewSection from './project_overview';
import SideCircleLeft from "../comps/side_circle_left";
import ProblemSolutionSection from './problem_solution';


const RosePage = () => {
  return (
    <div className="min-h-screen bg-[#F3F3F3]  overflow-x-hidden max-w-full">
        <HeaderSection/>
        <HeroSection source="/assets/rose/roseheader.svg" alt="rose"/>
        <ProjectOverViewSection/>
        <ProblemSolutionSection/>
   
    

      <FooterSection
         title="SOCIAL MEDIUM!"
      link="https://linktr.ee/Norah_accounts"
      />
    </div>
  );
};

export default RosePage;