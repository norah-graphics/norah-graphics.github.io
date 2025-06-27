import '../index.css';  
import SideCircle from './side_circle_right';
const PortfolioSection = () => {
  const handleClick = () => {
    // Get the current section height (assuming full viewport height)
    const sectionHeight = window.innerHeight;
    
    // Smooth scroll to next section
    window.scrollTo({
      top: sectionHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="pt-20 pb-32 flex-col items-center justify-center px-6 overflow-hidden flex ">
      
      {/* Main content container */}
      <div className="max-w-6xl w-full flex items-center justify-center">
        
        {/* Portfolio SVG and overlapping mission text */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
          {/* Portfolio SVG */}
          <div className="relative mb-8 lg:mb-0">
            <img src='/assets/portfolio.svg' alt="Portfolio" className="max-w-full h-auto"/>
          </div>

          {/* Mission text - responsive positioning */}
          <div
           className="[position:static] lg:absolute max-w-md rounded-lg text-center lg:text-left 
             mx-auto lg:mx-0 lg:right-[-15%] lg:top-[72%]" 
          // className="relative lg:absolute max-w-md rounded-lg text-center lg:text-left"
          //  style={{
          //    // Only apply custom positioning on large screens
          //    right: window.innerWidth >= 1024 ? "-15%" : "auto",
          //    top: window.innerWidth >= 1024 ? "72%" : "auto",
          //  }}
          >
            <h3 className="text-gray-800 font-meduim text-lg leading-relaxed mb-6">
              <span className="font-black">My mission?</span> To craft designs that are not only visually stunning but also deliver real impact and memorable experiences.
            </h3>
            
            {/* More details button */}
            <button 
              onClick={handleClick}
              className="inline-flex items-center gap-3 px-8 rounded-full text-[#454949] font-medium transition-all duration-300 group"
            >
              <div className="w-10 h-10 border border-[#454949] bg-[#D9D9D9] rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-[#454949] transition-colors duration-300">
                <svg 
                  className="w-5 h-5 group-hover:rotate-[135deg] transition-transform duration-300 text-[#454949] group-hover:text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>

              {/* Text with hover style */}
              <span 
              className="transition-all text-2xl variable-font"
              >
                MORE DETAILS
              </span>
            </button>


          </div>
        </div>
      </div>

        <SideCircle/>
    </div>
  );
}

export default PortfolioSection;