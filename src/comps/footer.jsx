import React from 'react';
import '../index.css';  // adjust the path if needed

const FooterSection = () => {
  return (
    <footer className="relative px-8 md:px-16 py-12  overflow-hidden linear-bg ">
      {/* Background SVG Placeholder */}
      <div className="absolute inset-0 opacity-30">
        {/* Replace this div with your background SVG */}
        {/* <img src="/path-to-your-background.svg" className="w-full h-full object-cover" alt="" /> */}
        {/* <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-400"></div> */}
        {/* <img src="src/assets/footer.svg" className="w-full h-full object-cover" alt="XXXX" /> */}
      </div>
      
      {/* Footer Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Row */}
          <div className="flex flex-row justify-between items-center gap-6 mb-6">
            
            <div className="flex-shrink-0">
              <div className="w-20 h-16 rounded-lg flex items-center justify-center">
                <img className="text-white font-bold text-xl" src="src/assets/Norah.svg" />
              </div>
            </div>
            
            {/* Social Medium Text with Hover Effect */}
            <div className="flex-shrink-0">
              <h3 className="text-4xl md:text-5xl font-bold text-[#454949] cursor-pointer transition-all font-jomhuria duration-300 hover:text-white hover:scale-110 transform tracking-wide">
                SOCIAL MEDIUM!
              </h3>
            </div>
            
          </div>
          
          {/* Horizontal Line */}
          <div className="w-full h-px bg-[#454949]"></div>
          
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;