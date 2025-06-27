import React from 'react';

const ChatBoxComponent = () => {
  return (
  <div>

     <div className="w-30 h-30 absolute left-[-45rem] lg:left-[-45rem] "> 
        <img className="w-30 h-30 "src='src/assets/circle.svg'/>
        </div>

          <div className="w-30 h-30 absolute right-[-45rem] lg:right-[-45rem] "> 
          <img className="w-30 h-30 "src='src/assets/circle.svg'/>
        </div>


    <img src="src/assets/c1-new.svg" className="w-full py-12"/>
    
    <div className="flex items-center justify-center p-12">
      <div className="relative max-w-md w-full group">
        {/* Left SVG Character */}
        <div className="absolute -left-8 top-0 z-10">
          <div className="w-16 h-20 rounded-lg flex items-center justify-center text-xs text-gray-500">
            <img src='src/assets/sitleft.svg' alt="Left character"/>
          </div>
        </div>

        {/* Right SVG Character */}
        <div className="absolute -right-8 top-4 z-10">
          <div className="w-16 h-20 rounded-lg flex items-center justify-center text-xs text-gray-500">
            <img src='src/assets/sitright.svg' alt="Right character"/>
          </div>
        </div>

        {/* Chat Bubble */}
        <div className="relative bg-[#D9D9D980] rounded-t-2xl px-6 py-3 shadow-sm border border-[#454949] mb-0">
          <p className="text-[#454949] text-center font-medium tracking-wide text-2xl" >
            Let's chat?
          </p>
        </div>

        {/* Main Content Box */}
        <div className="bg-[#D9D9D980] rounded-b-2xl rounded-t-none px-8 py-12 shadow-lg border border-[#454949] border-t-0 cursor-pointer transition-all duration-300">
          <h2 className="text-[6rem] md:text-[5rem] font-medium text-[#454949] text-center tracking-wide font-jomhuria transition-all duration-300 group-hover:text-[7rem] md:group-hover:text-[7rem] group-hover:text-[#454949] mb-6">
            Get in touch
          </h2>
          
          {/* Email Button - Hidden by default, shows on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
            <button className="bg-[#D9D9D9] hover:bg-[#454949] text-gray-700 hover:text-white px-8 py-3 rounded-full transition-all duration-200">
              My Email
            </button>
          </div>
        </div>
      </div>
    </div>

    <img src="src/assets/c2-new.svg" className="w-full py-12"/>


    
</div>
   
  );
};

export default ChatBoxComponent;