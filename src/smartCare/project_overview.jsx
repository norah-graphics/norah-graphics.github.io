import { Section } from 'lucide-react';
import React from 'react';

const ProjectOverViewGlassCard = () => {
  return (
 <section className="w-full md:py-16 py-12 px-4 relative w-full max-w-6xl mx-auto p-8">
      {/* First box - positioned slightly left top */}
      <div 
        className="absolute w-full rounded-2xl md:rounded-full transform -translate-x-10 -translate-y-8 p-1"
        style={{
    background: 'linear-gradient(170deg, rgba(56, 29, 255, 0.4) 0%, rgba(197, 16, 197, 0.2) 100%)'
        }}
      >
        <div className="w-full h-full rounded-2xl md:rounded-full bg-[#F3F3F3] " >
             <div className='opacity-0'>
                 {innerCard()}
             </div>

        </div>
      </div>
      
      {/* Second box - positioned slightly right bottom */}
    <div 
        className="absolute w-full rounded-2xl md:rounded-full transform translate-x-8 translate-y-14 p-1"
        style={{
    background: 'linear-gradient(170deg, rgba(56, 29, 255, 0.4) 0%, rgba(197, 16, 197, 0.2) 100%)'
        
//    background: 'linear-gradient(170deg, #C40CC4 4%, #381DFF 75%, #1DFFE8 100%)'
            
        }}
        >
        <div className="w-full h-full rounded-2xl md:rounded-full bg-[#F3F3F3]" >
              <div className='opacity-0'>
                 {innerCard()}
             </div>
        </div>
    </div>
      
      {/* Third box - gradient background */}
     {innerCard()}
    </section>
  );
};

export default ProjectOverViewGlassCard;



const innerCard= ()=>{
    return (
    <div 
        className="relative w-full h-full rounded-2xl md:rounded-full backdrop-blur-xl p-4"
        style={{
  background: 'linear-gradient(170deg, rgba(196, 12, 196, 0.9) 10%, rgba(56, 29, 255, 0.9) 75%, rgba(29, 255, 232, 0.9) 100%)',
        }}
      >
        {/* Fourth box - content container */}
        <div 
          className="rounded-2xl md:rounded-full backdrop-blur-5xl m-0"
          style={{
            background: 'linear-gradient(170deg, rgba(255, 255, 255, 0.2) 3%, rgba(250, 250, 250, 0.1) 100%)'
          }}
        >
          <div className="text-center text-white p-2">
            {/* Header */}
            <div className="flex justify-center items-center gap-8 mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold font-inter">3 Months</h1>
                <p className="text-lg  font-inter font-medium">Time Line</p>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold font-inter">Project</h1>
                <p className="text-lg  font-inter font-medium">Mobile&web design</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center items-center gap-12 flex-wrap">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-inter">40</div>
                <div className="text-sm font-medium">Interview</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-inter">15+</div>
                <div className="text-sm font-medium">Components</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-inter">1</div>
                <div className="text-sm font-medium">User Flow</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-inter">2</div>
                <div className="text-sm font-medium">Persona</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-inter">60+</div>
                <div className="text-sm font-medium">Screens</div>
              </div>
            </div>
          </div>
        </div>
      </div>);
};
