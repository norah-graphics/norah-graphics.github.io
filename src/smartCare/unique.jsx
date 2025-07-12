import React from 'react';

const WhatMakesUsUniqueSection = () => {
  return (
 <section className="w-full md:py-16 py-12 px-4 relative w-full max-w-6xl mx-auto p-8">
     {/* list text */}
    <div className='flex justify-center'>
        <div className='md:w-[70%]'>
        <p className='font-bold text-2xl md:text-3xl font-cairo text-[#4D34FF]'>What Makes Smart Care Unique:</p>
          <ul className=" font-regular font-cairo text-[#000000] text-left text-sm sm:text-base md:text-lg space-y-1  pr-6 sm:pr-12 md:pr-[5rem] lg:pr-[6rem] pt-2 sm:pt-3 md:pt-4" dir='ltr'>
                <li className="font-semibold font-cairo">
                    <span className="text-black font-cairo mr-2">•</span>
AI-powered injury prediction based on real-time data</li>
                <li className="font-semibold font-cairo"><span className="text-black font-cairo mr-2">•</span>
Daily self-check and physical condition tracking</li>
                <li className="font-semibold font-cairo"><span className="text-black font-cairo mr-2">•</span>
Personalized recommendations for rest and recovery</li>
                <li className="font-semibold font-cairo"><span className="text-black font-cairo mr-2">•</span>
Shareable health reports with coaches and therapists</li>
                <li className="font-semibold font-cairo"><span className="text-black font-cairo mr-2">•</span>
Easy, engaging user experience</li>
                <li className="font-semibold font-cairo"><span className="text-black font-cairo mr-2">•</span>
Integration with wearables + active alerts and insights</li>

              </ul>
        </div>
     

   </div>

      {/* image and text */}
      <div>
      {oppurtonity()}

      </div>
        {/* footer text */}
        
        <div className='flex justify-center pt-6'>
            <div className='md:w-[60%] '>
                <p className='font-cairo text-bold text-center text-[#9511CB] text-xl md:text-2xl'>
                    There is no current app that combines daily AI-driven injury risk detection, self-assessment, and collaborative health monitoring for athletes. Smart Care fills this market gap.
                </p>
            </div>
        </div>

  

     
    </section>
  );
};

export default WhatMakesUsUniqueSection;


const oppurtonity= () =>{
    return (
            <div className="md:pr-[0rem] lg:pr-0 flex md:justify-end relative py-8" >
   
   {/* md:ml-[20rem]   */}
     <div className="rounded-full ml-4 sm:ml-16 
     w-[95%] sm:w-[80%] md:w-[70%] 
          px-6 sm:px-10 md:py-6 py-3 
          flex items-center justify-center 
          md:justify-start space-x-3 sm:space-x-7"
           style={{
  background: 'linear-gradient(345deg, rgba(196, 12, 196, 0.9) 10%, rgba(56, 29, 255, 0.9) 75%, rgba(29, 255, 232, 0.9) 100%)',
        }}
          >
            
            <div className="text-center ">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-cairo  text-[#FFFFFF]">
                Opportunity
              </div>
            </div>
            {/* SVG */}
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F3F3F3] font-cairo">
                <img src='/assets/smartCare/lightbulb.svg'/>
              </div>
             
            </div>


          </div>

      {/* Absolutely positioned SVG on top */}
      {/* <div className="absolute md:top-[-13rem] top-[-5rem] md:opacity-0
      md:right-[-10rem] right-[-2rem] transform flex items-start z-10 pointer-events-none hidden sm:flex"> */}
        <div className="absolute  lg:top-[-13rem]  md:top-[-7rem]  top-[-5rem] 
       lg:right-[-12rem] md:right-[-4rem] right-[-2rem] transform  flex items-start z-10 pointer-events-none hidden sm:flex md:block hidden">

        <div className="w-[32vw]">
            <img src="/assets/smartCare/oppurtonityPhone.svg" className="w-full h-full object-contain" />
        </div>
      </div>

    </div>
    );
} ;