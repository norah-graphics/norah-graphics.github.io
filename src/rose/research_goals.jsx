import React from 'react';

const ResearchGoalsSection = ({source,alt}) => {
  return (
    <section className="py-8 md:py-16">
        <div className='justify-end relative'>
        {/* first list */}
        <div className='flex justify-end'>
            <div className='bg-gradient-to-l from-[rgba(255,196,213,1)] to-transparent px-8 py-4 w-[80%]' dir='rtl'>
                <p className='font-bold font-inter text-[#6A1A7D] text-xl'>هدف البحث :</p>
                <ul className="font-extrabold font-zain text-[#000000] text-right text-sm sm:text-base md:text-lg space-y-1 rtl" dir='rtl'>
                    <li>• جمع التجارب من المشاركين ومستخدمين تطبيقات توصيل الورد</li>
                    <li>• معرفة مدى اهتمام المشاركين في وجود تطبيق يوفر التواصل المباشر من متاجر الورود</li>
                    <li>• التحقق من فعالية التطبيق مع اهداف المستخدمين الإعتيادية عند الرغبة في شراء الهدايا</li>
                    <li>• دراسة مشاكل المستخدمين مع تطبيقات توصيل الورد  الموجودة حاليًا</li>
                    <li>• معرفة ردود افعال متاجر الورود من جانب تجاربهم مع الزبائن</li>
              </ul>

            </div>
        </div>
        {/* bottom box */}
        <div className='flex items-center justify-center pt-8 md:mx-16'>
          <div className="py-3 ml-4 sm:ml-16 md:ml-[10rem] lg:ml-[20rem] rounded-full w-[75%] sm:w-1/2 md:w-[90%] px-6 sm:px-10 py-6 flex items-center justify-center md:justify-end space-x-3 sm:space-x-7 bg-gradient-to-r from-[rgba(255,196,213,1)] via-[rgba(255,196,213,0.70)] to-transparent [background-image:linear-gradient(to_right,rgba(255,196,213,1)_0%,rgba(255,196,213,0.70)_70%,transparent_100%)]">
            
            {/* User Flow */}
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter  text-[#6A1A7D]">
                2
              </div>
              <div className="text-base sm:text-base md:text-lg lg:text-lg  font-medium text-[#000000] font-inter">
                 Persona
              </div>
            </div>

            {/* Interviews */}
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-[#6A1A7D] font-inter">
                4+
              </div>
              <div className="text-base sm:text-base md:text-lg lg:text-lg  font-medium text-[#000000] font-inter">
                User Flow
              </div>
            </div>

            {/* Screens */}
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-[#6A1A7D] font-inter">
                20+
              </div>
              <div className="text-base sm:text-base md:text-lg lg:text-lg  font-medium text-[#000000] font-inter">
                Components
              </div>
            </div>

            {/* Personas */}
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A1A7D] font-inter">
                7+
              </div>
              <div className="text-base sm:text-base md:text-lg lg:text-lg  font-medium text-[#000000] font-inter">
                Interview
              </div>
            </div>
          </div>
        </div>

        {/* image */}
    <div className="absolute -top-[5rem] lg:left-[15vw]  md:left-[-2rem] transform 
                    pointer-events-none overflow-hidden
                      flex z-10 sm:hidden hidden md:block">
        <img src="/assets/rose/research_goal.svg" alt="research_goal" className="md:w-[65%] lg:w-[90%]" />
      </div>
        </div>

    </section>
  );
};

export default ResearchGoalsSection;