import React from 'react';
import HeaderSection from '../comps/header';
import FooterSection from '../comps/footer';
import HeroSection from '../shared_comps/hero';
import TimeLineSection from './timeline_section';
import DesignThinkingSection from './designThinking';
import ProblemsAndSolutionSection from './problemSolution';
import ProjectOverViewGlassCard from './project_overview';
import MarketAnalysesSection from './maket_analysis';
import WhatMakesUsUniqueSection from './unique';
import UserInterviewSection from './userInterview';
import PesrsonaSection from './persona';

const SmartCare = () => {
  return (
    <div className="min-h-screen bg-[#F3F3F3]  overflow-x-hidden max-w-full">
     <HeaderSection/>
    <HeroSection source="/assets/smartCare/smartCare.png" alt="smartCare"/>
    <TimeLineSection/>
    <DesignThinkingSection/>
    <ProblemsAndSolutionSection/>
    <ProjectOverViewGlassCard/>
    <MarketAnalysesSection/>
    <WhatMakesUsUniqueSection/>
    <UserInterviewSection/>
    <PesrsonaSection/>
    

      <FooterSection
         title="SOCIAL MEDIUM!"
      link="https://linktr.ee/Norah_accounts"
      />
    </div>
  );
};

export default SmartCare;