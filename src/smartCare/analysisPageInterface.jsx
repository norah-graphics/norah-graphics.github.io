// AnalysisPageInterface

const AnalysisPageInterfaceSection = () => {
  return (
    <section className="w-full md:pt-16 pt-12 px-4 relative max-w-6xl mx-auto">
      <div>
        {/* <p>analysis screen</p> */}
         <div className='flex-col font-cairo'>
         <h2 className='font-bold text-[#9511CB] pb-1 md:text-3xl text-xl'>Analysis page</h2>
        <p className='pb-4  text-base md:text-lg lg:text-xl font-semibold text-[#78767D]'>Real-life performance analysis</p>
    </div>
      </div>
      {/* analysis */}
      <div className="">
        {/* Main container with content and custom border */}
        <div className="relative ">
          
          {/* Single element creating both top and right borders seamlessly */}
          <div
            className="absolute"
            style={{
              top: 0,
              left: 0,
              right: 0,
              height: '100px',
              borderTop: '2px solid #8B5CF6',
              borderRight: '2px solid #8B5CF6',
              borderTopRightRadius: '20px',
              pointerEvents: 'none',
            }}
          />

          {/* Title positioned over the top border */}
          <h1 className="absolute -top-4 left-0 bg-[#F3F3F3]  pr-4 text-base md:text-lg lg:text-xl  text-[#78767D]">
            experience (football match) using artificial intelligence
          </h1>

          {/* Content */}
         <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-6 gap-4 md:pt-0 pt-8">
            {[1, 2, 3, 4,5,6].map((num) => (
                <div key={num} className="w-full overflow-hidden duration-300 hover:scale-105 transition-all">
                <img
                    src={`/assets/smartCare/analysis${num}.svg`}
                    alt={`analysis screen ${num}`}
                    className="w-full h-auto object-contain"
                />
                </div>
            ))}
            </div>
        </div>
      </div>


        {/* Settings page */}
      <div className=" p-8">
        {/* Main container with content and custom border */}
        <div className="relative max-w-4xl mx-auto ">
          
          {/* Single element creating both top and right borders seamlessly */}
          <div
            className="absolute"
            style={{
              top: 0,
              left: 0,
              right: 0,
              height: '100px',
              borderTop: '2px solid #8B5CF6',
              borderRight: '2px solid #8B5CF6',
              borderTopRightRadius: '20px',
              pointerEvents: 'none',
            }}
          />

          {/* Title positioned over the top border */}
          <h1 className="absolute -top-4 left-0 text-xl md:text-2xl font-bold text-[#9511CB]  bg-[#F3F3F3]   pr-4">
            Settings Page
          </h1>

          {/* Content */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
                <div key={num} className="w-full overflow-hidden duration-300 hover:scale-105 transition-all">
                <img
                    src={`/assets/smartCare/settings${num}.svg`}
                    alt={`Settings screen ${num}`}
                    className="w-full h-auto object-contain"
                />
                </div>
            ))}
            </div>
        </div>
      </div>

    
    </section>
  );
};




export default AnalysisPageInterfaceSection;
