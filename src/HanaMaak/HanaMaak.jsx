import React from 'react';
import HeaderSection from '../comps/header';
import FooterSection from '../comps/footer';
import HeroSection from './hero';
import DesignThinkingSection from './creativeDesign';
import TimelineSection from './timeline';
import ProblemSolutionSection from './problem_solution';

const HanaMaak = () => {
  return (
    <div className="min-h-screen bg-[#F3F3F3]  overflow-x-hidden max-w-full">
     <HeaderSection/>
    <HeroSection/>
    <TimelineSection/>
    <DesignThinkingSection/>
    <ProblemSolutionSection/>
      <FooterSection
         title="SOCIAL MEDIUM!"
      link="https://linktr.ee/Norah_accounts"
      />
    </div>
  );
};

export default HanaMaak;