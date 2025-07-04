import React from 'react';
import HeaderSection from '../comps/header';
import FooterSection from '../comps/footer';
import HeroSection from './hero';
import DesignThinkingSection from './creativeDesign';
import TimelineSection from './timeline';
import ProblemSolutionSection from './problem_solution';
import ProjectOverview from './project_overview';
import ResearchSection from './research_section';
import UserInterviewSection from './userinterview_questions';
import SurveyQuestionSection from './survey_questions';
import ClockSection from './clock_section';
import UserPersona1Section from './user_presona1';
import UserPersona2Section from './user_persona2';
import EmpathyMapSection from './empathy_map';
import SwotSection from './swot_section';
import PotentialCompetitorsSection from './potential_comp';
import HanaChanceSection from './chance';
import SiteMapSection from './sitemap_section';
import DiagramsSections from './diagrams_section';
import BrandingSection from './branding';
import MobileDiagramsSections from './mobile_diagrams';

const HanaMaak = () => {
  return (
    <div className="min-h-screen bg-[#F3F3F3]  overflow-x-hidden max-w-full">
     <HeaderSection/>
    <HeroSection/>
    <TimelineSection/>
    <DesignThinkingSection/>
    <ProblemSolutionSection/>
    <ProjectOverview/>
    <ResearchSection/>
    <UserInterviewSection/>
    <SurveyQuestionSection/>
    <ClockSection/>
    <UserPersona1Section/>
    <UserPersona2Section/>
    <EmpathyMapSection/>
    <SwotSection/>
    <PotentialCompetitorsSection/>
    <HanaChanceSection/>
    <SiteMapSection/>
    <DiagramsSections/>
    <BrandingSection/>
    <MobileDiagramsSections/>

      <FooterSection
         title="SOCIAL MEDIUM!"
      link="https://linktr.ee/Norah_accounts"
      />
    </div>
  );
};

export default HanaMaak;