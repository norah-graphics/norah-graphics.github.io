import React from "react";

const InfoBox = ({ children }) => {
     {/* min-h-[80vh] h-[calc(100vh-5rem)] */}

  return (
    
    <div className="rounded-2xl border-2 pt-6 md:pb-0 pb-6 pr-6 pl-6 text-black border-[#D14D72]  lg:h-[43vh]  lg:min-h-[310px] md:h-[60vh]  md:min-h-[450px] bg-gradient-to-br from-[#C510C5]/10 to-[#381DFF]/10">
      {children}
    </div>
  );
};

export default InfoBox;
