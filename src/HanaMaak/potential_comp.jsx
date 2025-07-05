import React from 'react';

const PotentialCompetitorsSection = () => {
  return (
    <section className='max-w-6xl mx-auto px-4 py-16 relative'>

        <div className="bg-gradient-to-b from-[#CEEBEB] to-white p-8 rounded-2xl">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-top">
            {/* Text Content - Right side on desktop, first on mobile */}
            <div className="text-right lg:order-2 order-1 font-merriweather">
                <h2 className="text-3xl lg:text-5xl font-bold text-[#3876BF]">
                المنافسين المحتملين
                </h2>
                <p className=" text-xl lg:text-2xl text-[#3876BF] font-bold mb-8">
                Potential competitors
                </p>
                
                <div className="space-y-3 text-[#041219] font-regular text-lg">
                <div className="flex items-center justify-end gap-3">
                    <span className="text-right">تطبيق يدعم اللغه العربية </span>
                    <div className="w-1 h-1 bg-[#041219] rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-end gap-3">
                    <span className="text-right">مراعاة الفروق الفردية/العمرية</span>
                    <div className="w-1 h-1 bg-[#041219] rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-end gap-3">
                    <span className="text-right">الإهتمام بالجانب البصري للتطبيق</span>
                    <div className="w-1 h-1 bg-[#041219] rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-end gap-3">
                    <span className="text-right">تقديم خدمات بإستخدام الذكاء الاصطناعي</span>
                    <div className="w-1 h-1 bg-[#041219] rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-end gap-3">
                    <span className="text-right">توفير خدمات متنوعة داخل التطبيق بنفس النطاق</span>
                    <div className="w-1 h-1 bg-[#041219] rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-end gap-3">
                    <span className="text-right">تحقيق تجربة مستخدم بسلسة ومبسطة</span>
                    <div className="w-1 h-1 bg-[#041219] rounded-full"></div>
                </div>
                </div>
            </div>

            {/* Image Content - Left side on desktop, second on mobile */}
            <div className="lg:order-1 order-2 flex justify-center">
                <div className="w-full max-w-md">
                <img 
                    src="/assets/ptcomp.svg" 
                    alt="Potential Competitors Comparison" 
                    className="w-full md:h-[90%] object-contain rounded-lg "
                />
                </div>
            </div>
            </div>
        </div>
        </div>
  </section>
  );
};

export default PotentialCompetitorsSection;