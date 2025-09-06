import { useState } from 'react';
import SideCircleRight from './side_circle_right';

const MainSection = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (

 <main className="md:pl-[14rem] md:pr-[12rem]  py-12 h-screen flex items-center overflow-hidden pt-40" >
        <div className="w-full" >
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-6xl mx-auto">
          
          {/* Text Section PC*/}
          <div className='px-8'>
          <div className="md:block hidden flex-1 max-w-2xl">
            <h1 className="text-6xl md:text-9xl font-regular text-[#454949] font-jomhuria tracking-wide leading-none "   
            style={{ lineHeight: 0.7 }}>
              Hello!<br/>
              I'm Norah
            </h1>
            
            <div className="text-xl text-[#454949] leading-relaxed">
              <div className="mb-4">
                <span className="font-extrabold text-[#454949] relative inline-block">
                  Five years
                  {/* Custom SVG line - replace with your own */}
                  {/* <img src="/path-to-your-svg.svg" className="absolute -bottom-2 left-0 w-20 h-1" alt="" /> */
                  }
                  <img src="/assets/smalline.svg" className="absolute -bottom-2 left-0 w-20 h-3" alt="" />

                  {/* <div className="absolute -bottom-1 left-0 w-20 h-0.5 bg-orange-400 rounded"></div> */}
                </span>
                <span className="ml-1">in graphic design, evolving into</span>
              </div>
              
              <div className="mb-4">
                <span>a passion for </span>
                <span className="text-[#454949] relative inline-block">
                  exceptional user experiences
                  {/* Custom SVG line - replace with your own */}
                  {/* <img src="/path-to-your-svg.svg" className="absolute -bottom-2 left-0 w-full h-1" alt="" /> */}
                  {/* <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 rounded"></div> */}
                  <img src="/assets/bigline.svg"className="absolute -bottom-2 left-0 w-full h-3" alt="" />

                </span>
              </div>
            </div>
          </div></div>


          {/* Text Phone */}
          <div className='md:hidden block w-full px-8'>
           <div className=" flex flex-row w-full px-4 -mb-20">
            <h1 className="text-6xl md:text-9xl font-regular text-[#454949] font-jomhuria tracking-wide leading-none "   
            style={{ lineHeight: 0.7 }}>
              Hello!
            </h1>
          </div></div>

          {/* Illustration Section */}
          <div className='px-8'>
           <div className="flex-1 flex justify-center md:px-0 px-8 md:ml-0 ml-4 md:mt-0 -mt-4">
            <div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img 
                src={isHovered ? "/assets/face3.svg" : "/assets/face1.svg"}
                className="transition-opacity duration-300 ease-in-out"
                alt="Face"
              />
            </div>
          </div>
          </div>
          {/* Norah Phone */}
          <div className='md:hidden block px-8 w-full '>
           <div className="md:hidden block flex flex-row justify-end px-4 pt-4">
            <h1 className="text-6xl md:text-9xl font-regular text-[#454949] font-jomhuria tracking-wide leading-none "   
            style={{ lineHeight: 0.7 }}>
               I'm Norah
            </h1>
          </div></div>


          {/* Description Phone */}
           
            <div id="projects-section" className="linear-bg pb-[4rem] rounded-b-[3rem] md:hidden block">
              <div className="text-start px-4">
                <div className="md:hidden block text-xl text-[#454949] leading-relaxed pt-8">
              <div className="mb-4">
                <span className="font-extrabold text-[#454949] text-3xl relative inline-block">
                  Five years
                  {/* Custom SVG line - replace with your own */}
                  {/* <img src="/path-to-your-svg.svg" className="absolute -bottom-2 left-0 w-20 h-1" alt="" /> */
                  }
                  <img src="/assets/smalline.svg" className="absolute -bottom-2 left-0 w-40 h-3" alt="" />

                </span>
                <span className="ml-1">in graphic design, evolving into a passion for exceptional user experiences</span>
              </div>
            </div>
              </div>
            </div>
         

            </div>
        </div>

        <SideCircleRight/>
      

      </main>

        );
};

export default MainSection;