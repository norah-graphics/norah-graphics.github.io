import React from 'react';

const SmartCarePersona2Section = () => {
  return (
    <section className='max-w-6xl mx-auto px-4 py-16 relative'>
      <div className="relative  p-2 rounded-br-[3.5rem]  bg-gradient-to-br from-[#C510C5]/10 to-[#baa2fa] rounded-bl-[3.5rem] rounded-tr-[3.5rem] rounded-tl-[3.5rem] border border-[#9511CB]">
        {/* Title Box - Top */}
        <div className="absolute top-12 left-[-2.5%] w-[2%] h-[60%] px-6 py-2 font-cairo rounded-xl border border-[#9511CB] lg:block hidden"
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
        <img src='/assets/smartCare/yousif.svg'className='' />
        </div>
        {/* Quote Bubble - right Side - Hidden on small screens */}
        <div className="absolute top-[60%]  lg:block hidden" 
           style={{
            right: `calc(-25vw + 250px)` // Responsive positioning: larger screens = closer to edge
          }}
        >
          <div className=" lg:block hidden bg-white bg-gradient-to-br from-[#C510C5]/10 to-[#baa2fa] rounded-2xl px-8 py-6 lg:w-[400px] border border-[#FFFFFF]">
            <div className="text-[#9511CB] text-center text-8xl font-medium leading-[0.5] font-carter-one">
              &ldquo;
            </div>
            <p className="text-black  font-medium leading-relaxed text-center" dir="ltr">
              I would like an application that helps me analyze my playing data and movements on the field. I fear that
I might get injured without knowing it.
I aspire to develop and play with the Saudi national team.
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
          <h2 className="text-[#FFFFFF] font-bold font-cairo text-3xl">Player Youssef</h2>
        </div>
          <div className='lg:hidden'>
        <img src='/assets/smartCare/yousif.svg'className='' />

        </div>
       <div className='lg:w-3/6 w-4/5 flext'> 
         <p className="font-medium font-cairo text-[#041219] text-lg text-start">
          Youssef Al-Fahad is a football، ambitious footballer who trains hard but needs a smart way to monitor his health and avoid overtraining.
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
                  <span className="text-[#000000] font-cairo font-semibold">Doesn’t always know when to rest or slow down</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Afraid of losing progress if he reduces training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Relies on feelings instead of reliable data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Lacks an easy way to monitor his health consistently</span>
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
                  <span className="text-[#000000] font-cairo font-semibold">Uses AI to analyze his physical and behavioral performance data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Provides detailed reports on his health status and fatigue level</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Sends alerts when injury risks are detected</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Offers personalized recommendations for rest or adjusted training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Helps him make smart decisions to protect his health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">and improve long-term performance</span>
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
                  <span className="text-[#000000] font-cairo font-semibold">Improve performance and reach the professional level</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Stay physically fit and avoid injuries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Understand his physical limits and avoid overtraining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#000000] mr-3 mt-1 font-cairo font-semibold">•</span>
                  <span className="text-[#000000] font-cairo font-semibold">Receive accurate and ongoing health insights</span>
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
I would like an application that helps me analyze my playing data and movements on the field. I fear that
I might get injured without knowing it.
I aspire to develop and play with the Saudi national team. </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmartCarePersona2Section;