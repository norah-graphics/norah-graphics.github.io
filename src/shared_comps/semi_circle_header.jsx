const SemiCircleHeader = ({title,subtitle}) => {
  return (
    
<div className="relative w-full flex justify-start flex-col">
        {/* Main curved container - outer border layer */}
        <div
          className="bg-[#6A1A7D] w-full relative flex justify-center items-center"
          style={{
            clipPath: 'ellipse(50% 100% at 50% 0%)',
            height: 'clamp(150px, 20vw, 200px)',
            aspectRatio: '3/1',
          }}
        >
          {/* Inner content layer - using percentage-based reduction for consistent border */}
          <div
            className="bg-[#d9d9d9] border border-t-[3px] border-[#6A1A7D] flex justify-center items-center"
            style={{
              clipPath: 'ellipse(calc(50% - 3px) calc(100% - 3px) at 50% 0%)',
              width: '100%',
              height: '100%',
              aspectRatio: '3/1',
            }}
          >
            {/* Centered content */}
            <div className="text-center flex flex-col justify-center items-center z-10">
              <h1
                className="text-[#D14D72] text-xl sm:text-2xl md:text-3xl font-extrabold font-zain mb-2"
                dir="rtl"
              >
                {title}
              </h1>
              <h2 className="text-[#D14D72] text-lg sm:text-2xl md:text-3xl font-extrabold font-zain">
                {subtitle}
              </h2>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SemiCircleHeader;
