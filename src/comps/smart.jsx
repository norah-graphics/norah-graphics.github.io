import React from 'react';

const SmartRapsodyShowcase = () => {
  const handleViewCaseStudy = () => {
    // This would navigate to the case study page
    window.open('/Smart.pdf', '_blank');
  };

  return (
    <div className=" flex items-center justify-center p-12">
      <div className="max-w-6xl w-full rounded-3xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
            
          {/* Left Side */}
 <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img src='/assets/smartLogo.svg' alt="Smart Rapsody Logo"/>
            </div>

            {/* Description */}
            <div className="mb-8 relative">
              {/* Star Icon - Positioned above first line of text */}
              <div className="absolute -top-6 left-[-1.5rem]">
                <div className="w-9 h-9 rounded flex items-center justify-center">
                  <img src='/assets/star.svg' alt="Star"/>
                </div>
              </div>
              
              <p className="text-[#454949] leading-relaxed mb-4">
                Smart Care is an AI-powered application that analyzes player data to predict injuries early, aiming to reduce risks and enhance athletic performance. The user interface was designed to be simple and practical, making it easy to display medical data and alerts clearly and effectively—enhancing the user experience and enabling faster response.              </p>
              
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Project Type:</strong>  Mobile App + Web Design + Brand Identity Design</p>
                <p><strong>Job:</strong>  UX/UI Designer + Brand Identity Designer</p>
                <p><strong>Field:</strong> Technology, Artificial Intelligence</p>
              </div>
            </div>

            {/* View Case Study Button */}
             <button 
              onClick={handleViewCaseStudy} 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D9D9D9] text-[#454949] transition-all duration-300 hover:bg-[#454949] hover:text-white w-fit"
            >
              <svg 
                className="w-6 h-6 group-hover:rotate-[135deg] transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
              VIEW CASE STUDY
            </button>
          </div>

         

          {/* Right Side  */}
           <div className="lg:w-1/2 flex items-center justify-center p-8">
            <div className="w-full h-96 rounded-2xl flex items-center justify-center text-gray-500">
              <img src='/assets/smartApp.svg' alt="Smart App"/>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SmartRapsodyShowcase;