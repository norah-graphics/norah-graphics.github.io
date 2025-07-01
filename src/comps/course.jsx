import React from 'react';

const CoursesAchievementsSection = () => {
  return (
    <section className="px-8 md:pl-[14rem] md:pr-[12rem] py-10">
      <div className="w-full">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Courses and Certificate Column */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-[#454949]">Courses and Certificate:</h2>
              
              <div className=" text-[#454949]">
                <div className="flex items-start">
                  <span className="mr-3 mt-1">-</span>
                  <span>User Experience Design Course</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 mt-1">-</span>
                  <span>UI/UX Design Course</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 mt-1">-</span>
                  <span>Emotional UX Design Workshop</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 mt-1">-</span>
                  <span>Image Generation AI Course</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 mt-1">-</span>
                  <span>Photoshop Design Course</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 mt-1">-</span>
                  <span>Digital Marketing Workshop</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 mt-1">-</span>
                  <span>Graphic Design Principles Course</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 mt-1">-</span>
                  <span>Successful Communication Skills in the Workplace</span>
                </div>
              </div>
            </div>
            
            {/* Achievements Column */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-[#454949]">Achievements:</h2>
              
              <div className="space-y-1 text-[#454949]">
                <div className="">
                  <div className="flex items-start">
                    <span className="mr-3 mt-1">-</span>
                    <span>Health Innovation Hackathon 2025</span>
                  </div>
                  <div className="ml-6 text-sm text-[#454949]">
                   <span className='font-semibold'> My role:</span> Brand identity design - UX/UI Design
                  </div>
                </div>
                
                <div className="">
                  <div className="flex items-start">
                    <span className="mr-3 mt-1">-</span>
                    <span>AI League 2025</span>
                  </div>
                  <div className="ml-6 text-sm text-[#454949]">
                    <span className='font-semibold'> My role:</span>  Brand identity design - UX/UI Design
                  </div>
                </div>
                
                <div className="">
                  <div className="flex items-start">
                    <span className="mr-3 mt-1">-</span>
                    <span>Industry Hackathon 2024</span>
                  </div>
                  <div className="ml-6 text-sm text-[#454949]">
                   <span className='font-semibold'> My role:</span>  Graphic design
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CoursesAchievementsSection;