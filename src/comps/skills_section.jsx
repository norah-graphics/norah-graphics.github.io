import React from 'react';

const SkillsSection = () => {
  return (
    <section className="px-8 md:px-16 py-10 ">
      <div className="w-full">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Key Skills Column */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#454949] mb-8">KEY SKILLS:</h2>
              
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <span className="mr-3">-</span>
                  <span>UX/UI Design</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">-</span>
                  <span>Visual identity Design</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">-</span>
                  <span>Social Media Design</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">-</span>
                  <span>Design AI Images</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">-</span>
                  <span>Profiles Design</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">-</span>
                  <span>Designing Books and Publications</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">-</span>
                  <span>Packaging Design</span>
                </div>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px  transform -translate-x-1/2"></div>
            
            <div className="space-y-6 relative">
              <h2 className="text-xl font-semibold text-[#454949] mb-8">SOFTWARE SKILLS:</h2>
              
              <div className="w-full">
              
                <div className="w-full h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-center">
                    <img src="src/assets/skills.svg" className="w-full h-auto" alt="Software Skills" />
                  </span>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;