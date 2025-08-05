import React from 'react';

const ProblemsAndSolutions = () => {
  return (
    <div className="w-full md:py-16 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Layout */}
        <div className='lg:min-h-[85vh] md:min-h-[100vh]' >
    <div className="hidden md:block relative" >
          {/* Problems Section - 3/4 width */}
          <div className="w-1/2">
            <div className="flex items-start gap-2">
              {/* Text Content - 60% of section width */}
              <div className="w-3/5">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#9511CB] font-cairo mb-4">Problems</h1>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black font-cairo mr-2">•</span>
                    <span className='font-cairo font-semibold text-black'>Athletes lack accurate awareness of their physical condition and continue training despite fatigue or minor injuries.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-cairo mr-2">•</span>
                    <span className='font-cairo font-semibold text-black'>Difficulty predicting injuries before they occur, leading to long absences from training or competitions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-cairo mr-2">•</span>
                    <span className='font-cairo font-semibold text-black'>Ineffective communication between athletes, coaches, and therapists regarding health status.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-cairo mr-2">•</span>
                    <span className='font-cairo font-semibold text-black'>No simple and quick tool for daily physical condition assessment.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-cairo mr-2">•</span>
                    <span className='font-cairo font-semibold text-black'>Difficulty tracking health progress and recovery after injury.</span>
                  </li>
                </ul>
              </div>
              
              {/* Image - 40% of section width */}
              <div className=" flex justify-center mt-2">
                <img src='/assets/smartCare/problemSettings.svg' alt="Problems" className="max-w-full h-auto"/>
              </div>
            </div>
          </div>

          {/* Solutions Section - 3/4 width, positioned absolutely below and to the right of Problems */}
          <div className="absolute top-[10rem] right-14 w-1/2 ">
            <div className="flex items-start gap-2">
              {/* Text Content - 60% of section width */}
              <div className="w-3/5">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#9511CB] font-cairo mb-4">Solutions</h1>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-black font-cairo mr-2">•</span>
                    <span className='font-cairo font-semibold text-black'>Provide daily physical condition assessments and analyze vital signs to determine fatigue levels and injury risk.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-cairo mr-2">•</span>
                    <span className='font-cairo font-semibold text-black'>Use AI to analyze data and predict injuries early, with proactive rest and intervention recommendations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-cairo mr-2">•</span>
                    <span className='font-cairo font-semibold text-black'>Offer shareable reports for coaches and therapists to improve communication and decision-making.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-cairo mr-2">•</span>
                    <span className='font-cairo font-semibold text-black'>Design an easy and fast interface with daily surveys and a visual dashboard showing risk indicators.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-cairo mr-2">•</span>
                    <span className='font-cairo font-semibold text-black'>Maintain a personal health record to track progress over time with customized notifications.</span>
                  </li>
                </ul>
              </div>
              
              {/* Image - 40% of section width */}
              <div className=" flex justify-center mt-2">
                <img src='/assets/smartCare/solution.svg' alt="Solutions" className="max-w-full h-auto"/>
              </div>
            </div>
          </div>
        </div>

        </div>
    
        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Problems Section Mobile */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              {/* Settings Image Mobile */}
              <img src='/assets/smartCare/problemSettings.svg' alt="Problems" className="w-20 h-20 flex-shrink-0"/>
              <h1 className="text-4xl font-bold text-[#9511CB] font-cairo">Problems</h1>
            </div>
            
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-start">
                <span className="text-black font-cairo mr-2">•</span>
                <span className='font-cairo font-semibold text-black'>Athletes lack accurate awareness of their physical condition and continue training despite fatigue or minor injuries.</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-cairo mr-2">•</span>
                <span className='font-cairo font-semibold text-black'>Difficulty predicting injuries before they occur, leading to long absences from training or competitions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-cairo mr-2">•</span>
                <span className='font-cairo font-semibold text-black'>Ineffective communication between athletes, coaches, and therapists regarding health status.</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-cairo mr-2">•</span>
                <span className='font-cairo font-semibold text-black'>No simple and quick tool for daily physical condition assessment.</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-cairo mr-2">•</span>
                <span className='font-cairo font-semibold text-black'>Difficulty tracking health progress and recovery after injury.</span>
              </li>
            </ul>
          </div>

          {/* Solutions Section Mobile */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              {/* Light Bulb Image Mobile */}
              <img src='/assets/smartCare/solution.svg' alt="Solutions" className="w-20 h-20 flex-shrink-0"/>
              <h1 className="text-4xl font-bold text-[#9511CB] font-cairo">Solutions</h1>
            </div>
            
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-start">
                <span className="text-black font-cairo mr-2">•</span>
                <span className='font-cairo font-semibold text-black'>Provide daily physical condition assessments and analyze vital signs to determine fatigue levels and injury risk.</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-cairo mr-2">•</span>
                <span className='font-cairo font-semibold text-black'>Use AI to analyze data and predict injuries early, with proactive rest and intervention recommendations.</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-cairo mr-2">•</span>
                <span className='font-cairo font-semibold text-black'>Offer shareable reports for coaches and therapists to improve communication and decision-making.</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-cairo mr-2">•</span>
                <span className='font-cairo font-semibold text-black'>Design an easy and fast interface with daily surveys and a visual dashboard showing risk indicators.</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-cairo mr-2">•</span>
                <span className='font-cairo font-semibold text-black'>Maintain a personal health record to track progress over time with customized notifications.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsAndSolutions;