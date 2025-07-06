import React from 'react';

const FutureImpactSection = () => {

  return (
   <section className="max-w-6xl mx-auto relative">
      <div className="flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full">
          {/* Gradient container with responsive rounded corners */}
          <div 
            className="rounded-[6rem] sm:rounded-[10rem] md:rounded-[10rem] xl:rounded-[20rem]  w-full px-4 sm:px-6 md:px-12 py-2 sm:py-3 md:py-4 relative overflow-hidden"
            style={{
            background: 'linear-gradient(170deg,  rgba(0, 160, 255, 0.3)  0%, rgba(235, 240, 243, 0) 50%, rgba(64, 207, 197, 0.3) 100%)',
            }}
          >
            <div className="flex justify-center">
              <div className="text-center md:text-center" dir="rtl">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold font-open-sans text-[#285AFF]" dir='rtl'>
                    الأثر المستقبلي للتطبيق - The Future Impact
                </h1>
              </div>
            </div>
            <div className='w-full flex justify-start' dir='rtl'>
            <div className='w-full sm:w-[80%]  md:w-[80] lg:w-[60%]' dir='rtl'>
                <ul className="list-disc font-regular font-open-sans text-[#000000] text-right text-sm sm:text-base md:text-lg space-y-1 rtl pr-6 sm:pr-12 md:pr-[5rem] lg:pr-[6rem] pt-2 sm:pt-3 md:pt-4" dir='rtl'>
                <li>تحسين جودة حياة كبار السن.</li>
                <li>تقليل نسب نسيان الأدوية وبالتالي تقليل حالات التدهور الصحي بسبب الإهمال الغير المقصود.</li>
                <li>تخفيف العبء عن العائلة ومقدمي الرعاية، فالتطبيق يتكفّل بالمتابعة اليومية البسيطة.</li>
                <li>نشر الوعي التقني الصحي بين فئة عادة ما تُهمّش رقمياً، عبر تجربة مخصصة لهم.</li>
                <li>فتح مجال أوسع للذكاء الاصطناعي في الرعاية الشخصية خاصة لكبار السن والمرضى المزمنين.</li>
              </ul>
                <div className="text-right pt-4 sm:pt-6 md:pt-8" dir="rtl">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold font-open-sans text-[#285AFF]" dir='rtl'>
                        تطوير التطبيق مستقبلًا - Future Expansion Ideas:
                    </h1>
                </div>
                  <ul className="list-disc font-regular font-open-sans text-[#000000] text-right text-sm sm:text-base md:text-lg space-y-1 rtl pr-6 sm:pr-12 md:pr-[5rem] lg:pr-[6rem] pt-2 sm:pt-3 md:pt-4 pb-8 sm:pb-12 md:pb-[5rem]" dir='rtl'>
            
                        <li>ربط مع أجهزة قابلة للارتداء (smartwatches) لتنبيه فوري وتسجيل الحالة الصحية لحظيًا.</li>
                        <li> إضافة ميزة "المرافق الرقمي": دردشة صوتية مع الرفيق الذكي، تحاكي محادثة مريحة مع شخص يهتم.</li>
                        <li> إرسال تقارير ذكية تلقائية للأبناء أو الأطباء عن التزام بالأدوية.</li>
                        <li> دعم لغات ولهجات مختلفة لتوسيع الوصول لفئات أكثر.</li>
                        <li> تقديم الدعم العاطفي للمريض بإستخدام خدمات الذكاء الاصطناعي لمتابعة التأثير النفسي.</li>
                    
                    </ul>
            </div>
            </div>
            
         
           
            
          </div>
        </div>
            <div className="absolute md:top-[10rem] lg:top-[5rem] w-full md:max-w-[350px] lg:max-w-[500px] mx-auto md:left-[1rem] lg:left-[-3rem] bg-opacity-20 rounded-full md:block hidden">
                <img src='/assets/three_phones.svg' className='w-full h-auto rounded-xl '/>
            </div>
      </div>
    </section>
  );
};

export default FutureImpactSection;