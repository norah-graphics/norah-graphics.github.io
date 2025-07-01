import React from 'react';
import SideCircleRight from './side_circle_right';
import SideCircleLeft from './side_circle_left';

const ChatBoxComponent = () => {
  return (
  <div className='overflow-hidden relative'>

     <SideCircleLeft/>

          <SideCircleRight/>


    <img src="/assets/c1-new.svg" className="w-full py-12"/>
    
    <div className="flex items-center justify-center p-12">
      <div className="relative max-w-md w-full group">
        {/* Left SVG Character */}
        <div className="absolute -left-12 top-[-6rem] z-10">
          <div className="w-[7rem] rounded-lg flex items-center justify-center text-xs text-gray-500">
            <img src='/assets/sitleft.svg' alt="Left character"/>
          </div>
        </div>

        {/* Right SVG Character */}
        <div className="absolute -right-0 top-[-3.5rem] z-10">
          <div className="w-[7rem]  rounded-lg flex items-center justify-center text-xs text-gray-500">
            <img src='/assets/sitright.svg' alt="Right character"/>
          </div>
        </div>

        {/* Chat Bubble */}
        <div className="relative bg-[#D9D9D980] rounded-t-2xl px-6 py-3 shadow-sm border border-[#454949] mb-0">
          <p className="text-[#454949] text-center font-medium tracking-wide text-2xl" >
            Let's chat?
          </p>
        </div>

        {/* Main Content Box */}
        <div className="bg-[#D9D9D980] rounded-b-2xl rounded-t-none px-8 py-6 shadow-lg border border-[#454949] border-t-0 cursor-pointer transition-all duration-300">
           <div className="min-h-[8rem] md:min-h-[7rem] flex items-center justify-center">
            <h2 className="leading-none my-[-1rem] text-[6rem] md:text-[5rem] font-medium text-[#45494980] text-center tracking-wide font-jomhuria transition-all duration-300 group-hover:text-[7rem] md:group-hover:text-[7rem] group-hover:text-[#454949]">
              Get in touch
            </h2>
          </div>
          
          {/* Email Button - Hidden by default, shows on hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
            <button 
              onClick={() => window.location = 'mailto:norah20402040@gmail.com'}
              className="bg-[#D9D9D9] hover:bg-white hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)] text-[#454949] px-14 py-3 rounded-full transition-all duration-200">
              My Email
            </button>
          </div>
        </div>
      </div>
    </div>

    <img src="/assets/c2-new.svg" className="w-full py-12"/>


    
</div>
   
  );
};

export default ChatBoxComponent;