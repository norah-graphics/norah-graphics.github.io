import React from 'react';
import '../index.css';  



const FooterSection = ({ title = "SOCIAL MEDIUM!", link = "" }) => {
  const handleClick = () => {
        window.location.href = link;
  };

  return (
    <footer className="relative md:pl-[14rem] md:pr-[12rem] py-12 overflow-hidden linear-bg">
      {/* Background SVG Placeholder */}
      <div className="absolute inset-0 opacity-30">
        {/* Optional background SVG or gradient */}
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Row */}
          <div className="flex flex-row justify-between items-center gap-6 mb-6">
            
            <div className="flex-shrink-0">
              <div className="w-20 h-16 rounded-lg flex items-center justify-center">
                <img className="text-white font-bold text-xl" src="/assets/Norah.svg" alt="Logo" />
              </div>
            </div>
            
            {/* Dynamic Title */}
            <button
              className="flex-shrink-0"
              onClick={handleClick}
            >
              <h3 className={`text-4xl md:text-5xl font-bold text-[#454949] transition-all font-jomhuria duration-300 hover:text-white hover:scale-110 transform tracking-wide ${title === 'in' ? 'text-6xl md:text-7xl' : ''}`}>
                {title}
              </h3>
            </button>

          </div>

          {/* Horizontal Line */}
          <div className="w-full h-px bg-[#454949]"></div>

        </div>
      </div>
    </footer>
  );
};

export default FooterSection;