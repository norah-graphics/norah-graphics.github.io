import React from 'react';
import HeaderSection from '../comps/header';
import FooterSection from '../comps/footer';
import HeroSection from '../shared_comps/hero';
import ProjectOverViewSection from './project_overview';
import ProblemSolutionSection from './problem_solution';
import ResearchGoalsSection from './research_goals';
import ResearchQuestionSection from './research_question';
import InterviewQuestionsSection from './interview_questions';
import SurveyQuestionsSection from './survey_questions';
import CompetitorsAnalysisSection from './competitors_analysis';


const RosePage = () => {
  return (
    <div className="min-h-screen bg-[#F3F3F3]  overflow-x-hidden max-w-full">
        <HeaderSection/>
        <HeroSection source="/assets/rose/roseheader.svg" alt="rose"/>
        <ProjectOverViewSection/>
        <ProblemSolutionSection/>
        <ResearchGoalsSection/>
        <ResearchQuestionSection/>
        <InterviewQuestionsSection/>
        <SurveyQuestionsSection/>
        <CompetitorsAnalysisSection/>
   
    

      <FooterSection
         title="SOCIAL MEDIUM!"
      link="https://linktr.ee/Norah_accounts"
      />
    </div>
  );
};

export default RosePage;