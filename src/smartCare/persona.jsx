import SmartCarePersona1Section from "./persona1";
import SmartCarePersona2Section from "./persona2";
import React from 'react';
const PesrsonaSection = () => {
  return (
 <section className="w-full md:py-16 py-12 px-4 relative w-full max-w-6xl mx-auto p-8">
     {/* list text */}
     <div>
        <p className='font-cairo text-[#9511CB] font-bold md:text-3xl text-xl text-left pb-2'>
            User Personas
        </p>
        <p  className='font-cairo text-[#78767D] font-semibold text-lg md:text-xl'>
Based on the information gathered from the interviews, we developed personas representing key user groups. These personas helped us understand the unique characteristics, preferences, and behaviors of smart care users.        </p>
     </div>
     <SmartCarePersona1Section/>
     <SmartCarePersona2Section/>


     
    </section>
  );
};

export default PesrsonaSection;



