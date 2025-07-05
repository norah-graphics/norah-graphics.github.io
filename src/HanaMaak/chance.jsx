import React from 'react';

const HanaChanceSection = () => {
  return (
    <section className="max-w-6xl mx-auto  relative">
      <div className="flex items-center justify-center p-8">
        <div className="">
          {/* Gradient container with rounded corners */}
          <div 
            className="rounded-full md:px-12  py-16  relative overflow-hidden"
            style={{
            background: 'linear-gradient(170deg,  rgba(0, 160, 255, 0.3)  0%, rgba(235, 240, 243, 0) 50%, rgba(64, 207, 197, 0.3) 100%)',
              borderRadius: '80px'
            }}
          >
            {/* Arabic text content on the right - 60% width */}
            <div className="flex justify-center md:justify-end">
              <div className="md:w-3/5 text-center md:text-right" dir="rtl">
                <h1 className="text-3xl md:text-6xl font-bold font-inter text-[#3876BF] mb-6">
                    فـرصة “حنّا معاك”
                </h1>
                
                <p className="text-base md:text-lg text-black leading-relaxed mb-8">
                  لا يوجد حاليًا تطبيق محلي يوفر خدمة منبة تذكيري طبي بإستخدام خدمات الذكاء الاصطناعي، وخدمة المحادثة السريعة مع الذكاء الاصطناعي عن الادويه المضافة في التطبيق، يقوم تطبيقنا بسد هذه الفجوة في السوق مع التركيز على مراعاة الفروق الفردية والعمرية لمستخدمين التطبيق
                </p>
              </div>
            </div>
            
           
            
          </div>
        </div>
         {/* Optional decorative elements */}
            <div className="absolute  md:top-[10rem] lg:top-[5rem] w-full md:max-w-[350px] lg:max-w-[500px] mx-auto md:left-[1rem] lg:left-[-3rem] bg-opacity-20 rounded-full md:block hidden">
                <img src='/assets/chance.svg' className='w-full h-auto rounded-xl '/>
            </div>
      </div>
    </section>
  );
};

export default HanaChanceSection;