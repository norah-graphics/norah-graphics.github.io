

const TimelineCircle = ({ className = "", color = "#56BCC7" }) => {
  return (
    <div className={`hidden md:block absolute ${className}`}>
      <div className="relative">
        {/* Outer white circle */}
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
          {/* Middle blue circle with dynamic color */}
          <div 
            className="w-4 h-4 rounded-full flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            {/* Inner black circle */}
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCircle;