import React from 'react';




const FlowSection = () => {
  return (
 <section className="w-full md:py-16 py-12 px-4 relative w-full max-w-7xl mx-auto p-8">
    <div className='flex-col font-cairo'>
       <div className='md:max-w-6xl md:mx-auto'>
         <h2 className='font-bold text-[#9511CB] pb-1 md:text-3xl text-xl'>User Flow</h2>
        <p className='pb-4 text-lg md:text-xl font-semibold text-[#78767D]'>I then mapped out the user flow, focusing on not taking too long for the user to complete their desired service.</p>
       </div>
        <img src='/assets/smartCare/userflow.svg'/>
    </div>
    </section>
  );
};

export default FlowSection;
