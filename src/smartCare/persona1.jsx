import React from 'react';

const SmartCarePersona1Section = () => {
  return (
    <section className='max-w-6xl mx-auto px-4 py-16 relative'>
      <div className="relative  p-2 rounded-br-[3.5rem]  bg-gradient-to-br from-[#C510C5]/10 to-[#baa2fa] rounded-bl-[3.5rem] rounded-tr-[3.5rem] rounded-tl-[3.5rem] border border-[#9511CB]">
        {/* Title Box - Top */}
        <div className="absolute top-12 left-[-3%] w-[2%] h-[60%] px-6 py-2 font-cairo rounded-xl border border-[#9511CB] lg:block hidden"
          style={{
  background: 'linear-gradient(80deg, rgba(196, 12, 196, 1) 10%, rgba(56, 29, 255, 1) 75%, rgba(29, 255, 232, 1) 100%)',
        }}
        >
        </div>
        {/* Profile image hiddent in small screens */}
         <div className="absolute top-[0%] -left-14 lg:block hidden" 
           style={{
            // left: `calc(-25vw + 300px)` // Responsive positioning: larger screens = closer to edge
          }}
        >
        <img src='/assets/smartCare/ahmed.svg'className='' />
        </div>
        {/* Quote Bubble - right Side - Hidden on small screens */}
        <div className="absolute top-[60%]  lg:block hidden" 
           style={{
            right: `calc(-25vw + 250px)` // Responsive positioning: larger screens = closer to edge
          }}
        >
          <div className=" lg:block hidden bg-white bg-gradient-to-br from-[#C510C5]/10 to-[#baa2fa] rounded-[2rem] px-8 py-6 lg:w-[500px] border border-[#FFFFFF]">
            <div className="text-[#9511CB] text-center text-8xl font-medium leading-[0.5] font-carter-one">
              &ldquo;
            </div>
            <p className="text-black  font-medium leading-relaxed text-center" dir="ltr">
              I just want to know how much the players need rest and stress. The presence of the medical staff helps, but it slows down the results. Unlike if there was an application that analyzes injury predictions faster and guides me in every step, to build a healthy team with ideal achievements.
            </p>
          </div>
        </div>
        
        {/* full main section */}
        <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto p-4 gap-6">
         

          {/* Left Text Content - Shows after image on mobile, left on desktop */}
        <div className="w-full space-y-6 lg:order-1" dir='ltr'>
      <div className='flex flex-col justify-center items-center space-y-4'>
        <div className="px-6 py-2 font-cairo rounded-full border border-[#9511CB] w-fit"
          style={{
            background: 'linear-gradient(345deg, rgba(196, 12, 196, 0.9) 10%, rgba(56, 29, 255, 0.9) 75%, rgba(29, 255, 232, 0.9) 100%)',
          }}
        >
          <h2 className="text-[#FFFFFF] font-bold font-cairo text-3xl">Coach Ahmad</h2>
        </div>
       <div className='md:w-3/6 w-4/5 flext'> 
         <p className="font-medium font-cairo text-[#041219] text-lg text-start">
          Ahmad Al-Malki is a football coach who needs a smarter way to track his players' health and prevent injuries, as manual methods and basic tools no longer meet his needs.
        </p>
       </div>
      </div>
{/* column of pain points */}
 <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
        {/* First Column - Pain Points & Smart Care */}
        <div className=" rounded-2xl  overflow-hidden">
          <div className="p-4 md:p-8 lg:p-12">
            <div className="mb-8">
              <div 
                className="w-fit rounded-xl  px-6 mb-2"
                style={{
                  background: 'linear-gradient(174deg, rgba(196, 12, 196, 0.9) 10%, rgba(56, 29, 255, 0.9) 75%, rgba(29, 255, 232, 0.9) 100%)'
                }}
              >
                <h2 className="text-white text-2xl font-bold font-cairo text-center">
                  Pain Points & Challenges:
                </h2>
              </div>
              <ul className="text-[#000000] ">
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Difficulty tracking individual player conditions on a daily basis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">No clear system for detecting when a player needs rest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Reliance on how players “feel” instead of objective data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Time wasted checking each player manually</span>
                </li>
              </ul>
            </div>

            {/* Smart Care Section */}
            <div>
              <div 
                className="w-fit rounded-xl  px-6 mb-2"
                style={{
                  background: 'linear-gradient(174deg, rgba(196, 12, 196, 0.9) 10%, rgba(56, 29, 255, 0.9) 75%, rgba(29, 255, 232, 0.9) 100%)'
                }}
              >
                <h2 className="text-white text-2xl font-bold font-cairo text-center">
                  How Smart Care Helps:
                </h2>
              </div>
              <ul className="text-[#000000] ">
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Provides daily AI-based health reports for each player</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Sends early alerts when risk indicators are detected</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Offers personalized recommendations for rest and recovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Simplifies team health management and enables easy sharing with therapists or guardians</span>
                </li>
               
              </ul>
            </div>
          </div>
        </div>

        {/* Second Column - Add your content here */}
        <div className=" rounded-2xl  overflow-hidden">
          <div className="px-8 lg:p-0">
               <div className="mb-8">
              <div 
                className="w-fit rounded-xl  px-6 mb-2"
                style={{
                  background: 'linear-gradient(174deg, rgba(196, 12, 196, 0.9) 10%, rgba(56, 29, 255, 0.9) 75%, rgba(29, 255, 232, 0.9) 100%)'
                }}
              >
                <h2 className="text-white text-2xl font-bold font-cairo text-center">
                  Goals:
                </h2>
              </div>
              <ul className="text-[#000000] ">
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Maintain the fitness and readiness of all players</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Reduce unexpected injuries that affect training or game performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Make data-driven decisions about who should rest or participate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Improve communication with medical staff and parents regarding player health</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>

        {/* Quote Bubble - Bottom on small screens */}
        <div className="lg:hidden mt-6 mx-4">
          <div className="relative rounded-[2rem]  px-8 py-6 ">
            <div className="text-center text-[#9511CB] text-8xl font-medium leading-[0.5] font-carter-one">
             &ldquo;
            </div>
            <p className="text-black  font-medium leading-relaxed text-center" dir="ltr">
I just want to know how much the players need rest and stress. The presence of the medical staff helps, but it slows down the results. Unlike if there was an application that analyzes injury predictions faster and guides me in every step, to build a healthy team with ideal achievements. </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmartCarePersona1Section;