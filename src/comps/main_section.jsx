import { useState } from 'react';

const MainSection = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (

 <main className="px-8 md:px-16 py-12 min-h-[80vh] flex items-center" >
        <div className="w-full" >
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 max-w-6xl mx-auto">
          
          {/* Text Section */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-6xl md:text-9xl font-bold text-[#454949] font-jomhuria tracking-wide leading-none "   
            style={{ lineHeight: 0.7 }}>
              Hello!<br/>
              I'm Norah
            </h1>
            
            <div className="text-lg text-[#454949] leading-relaxed">
              <div className="mb-4">
                <span className="font-semibold text-[#454949] relative inline-block">
                  Five years
                  {/* Custom SVG line - replace with your own */}
                  {/* <img src="/path-to-your-svg.svg" className="absolute -bottom-2 left-0 w-20 h-1" alt="" /> */
                  }
                  <img src="src/assets/smalline.svg" className="absolute -bottom-2 left-0 w-20 h-3" alt="" />

                  {/* <div className="absolute -bottom-1 left-0 w-20 h-0.5 bg-orange-400 rounded"></div> */}
                </span>
                <span className="ml-1">in graphic design, evolving into</span>
              </div>
              
              <div className="mb-4">
                <span>a passion for </span>
                <span className="font-semibold text-[#454949] relative inline-block">
                  exceptional user experiences
                  {/* Custom SVG line - replace with your own */}
                  {/* <img src="/path-to-your-svg.svg" className="absolute -bottom-2 left-0 w-full h-1" alt="" /> */}
                  {/* <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 rounded"></div> */}
                  <img src="src/assets/bigline.svg"className="absolute -bottom-2 left-0 w-full h-3" alt="" />

                </span>
              </div>
            </div>
          </div>

          {/* Illustration Section */}
           <div className="flex-1 flex justify-center lg:justify-end">
            <div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img 
                src={isHovered ? "src/assets/face3.svg" : "src/assets/face1.svg"}
                className="transition-opacity duration-300 ease-in-out"
                alt="Face"
              />
            </div>
          </div>
        </div>
        </div>

        <div className="w-30 h-30 absolute right-[-45rem] lg:right-[-45rem]"> 
          <img className="w-30 h-30 "src='src/assets/circle.svg'/>
        </div>
      

      </main>

        );
};

export default MainSection;