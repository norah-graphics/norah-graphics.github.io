import React from 'react';




const WireFramesSection = () => {
  return (
 <section className="w-full md:py-16 py-12 px-4 relative w-full max-w-6xl mx-auto p-8">
    <div className='flex-col font-cairo'>
       <div className=''>
         <h2 className='font-bold text-[#9511CB] pb-1 md:text-3xl text-xl'>Low - Mid Fidelity Wireframes</h2>
        <p className='pb-4 text-lg md:text-xl font-semibold text-[#78767D]'>I started using low-fidelity wireframes to explore different layouts and navigation options, after working with the AI ​​development team for smart healthcare services and the user flow.</p>
       </div>
        <img src='/assets/smartCare/wireframes.svg'/>
    </div>
    </section>
  );
};

export default WireFramesSection;
