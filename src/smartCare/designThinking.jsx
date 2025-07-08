const DesignThinkingSection = () => {
  return (
    <div className="w-full py-8 px-4">
      {/* Title Section */}
    <div className="text-center mb-4">
        <div className="inline-block px-6 ">
            <h2 className="text-2xl md:text-5xl font-bold font-inter text-[#6816DB] pl-[1px]" >
                 Design Thinking
             </h2>
        </div>
    </div>

      {/* Description Text */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <p className="text-black font-bold leading-relaxed font-cairo">
          Design Thinking is a user-centered approach that focuses on understanding needs and creating innovative, practical solutions through creative and iterative steps.
        </p>

      </div>

      {/* Design Thinking Process Image */}
      <div className="max-w-6xl mx-auto px-4">
        <img 
          src="/assets/smartCare/designThinking.svg" 
          alt="Design Thinking Process" 
          className="w-full h-auto "
        />
      </div>
    </div>
  );
};

export default DesignThinkingSection;