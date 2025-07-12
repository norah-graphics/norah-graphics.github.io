import React from "react";

const InfoBox = ({ children }) => {
     {/* min-h-[80vh] h-[calc(100vh-5rem)] */}

  return (
    
    <div className="rounded-2xl border-2 pt-6 pr-6 pl-6 text-black border-[#D14D72]  h-[43vh]  min-h-[310px] bg-gradient-to-br from-[#C510C5]/10 to-[#381DFF]/10">
      {children}
    </div>
  );
};

export default InfoBox;
