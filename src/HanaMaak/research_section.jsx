import React from 'react';

 const ResearchSection=()=> {
  return (

    <section className=' max-w-6xl mx-auto px-4 py-20 '>
 <div className="bg-[#b6e7e3] p-8 rounded-2xl">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:px-20">
        {/* SVG - Top on mobile, Right on desktop */}
 <div className="order-first lg:order-last flex-shrink-0 lg:w-1/4">
          <img src="/assets/research_section.svg" alt="Research Icon" className="w-40 h-40 lg:w-full lg:h-auto" />
        </div>
        
        {/* Content */}
        <div className="flex-1 text-right" dir="rtl">
          {/* Research Question */}
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-[#43B7FC] mb-2 font-open-sans">سؤال البحث :</h2>
            <ul className="text-[#323232] font-open-sans font-regular text-lg">
              <li>• هل يحتاج المريض الى تطبيق مساعد له في جدولة الأدوية والأنشطة المستقبلية قبل الموعد؟</li>
              <li>• هل يساعد التطبيق الأفراد من انتشارها في الأمور الحياتية والمهنية ؟</li>
            </ul>
          </div>
          
          {/* Target Audience */}
          <div>
            <h2 className="text-4xl font-bold text-[#43B7FC] mb-2">الفئة المستهدفة :</h2>
            <ul className="text-[#323232] font-regular text-lg">
              <li>• كبار السن الذين يعانون من أمراض مزمنة</li>
              <li>• الآباء الأمهات ومقدمي الرعاية الذين يعانون صحة أطفال أو أفراد الأسرة</li>
              <li>• الأشخاص المسلمون الذين يقومون بتناول معادلات غذائية</li>
              <li>• الخبراء المتخصصون بالتغذية العلاجية</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    </section>
   
  );
}
export default ResearchSection;