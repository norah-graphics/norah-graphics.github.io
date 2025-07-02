import React from 'react';
import TimelineCircle from './circle';
const TimelineSection = () => {
  return (
    <section className="w-full py-16 px-4">
       <div className="max-w-6xl mx-auto">
      {/* Timeline Title */}
      <div className="text-center">
        <h2 className="text-7xl font-thin " style={{ color: '#808080' }}>
          Timeline
        </h2>
        {/* Main timeline line with circles at ends */}
      <div className='pt-6 pb-8'>
          <div className="relative w-full">
          <div 
            className="h-0.5 w-full"
            style={{ backgroundColor: '#808080' }}
          ></div>
          {/* Start circle */}
          <div 
            className="absolute -left-1 top-[-0.2em] w-2 h-2 rounded-full border-2"
            style={{ backgroundColor: '#808080', borderColor: '#808080' }}
          ></div>
          {/* End circle */}
          <div 
            className="absolute -right-1 top-[-0.2em] w-2 h-2 rounded-full border-2"
            style={{ backgroundColor: '#808080', borderColor: '#808080' }}
          ></div>
        </div>
      </div>
      </div>

      {/* Timeline Content */}
       <div className="max-w-6xl mx-auto grid md:grid-cols-3 rtl relative">
      
      <TimelineCircle color="#00A0FF" className="top-1/2 -right-4 transform -translate-y-1/2 z-10" />
      
      <TimelineCircle color="#00A0FF" className="top-1/2 -left-4 transform -translate-y-1/2 z-10" />

      {/* Circle between Month 3 and Month 2 */}
      <TimelineCircle color='#56BCC7' className="top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10" />
      
      {/* Circle between Month 2 and Month 1 */}
      <TimelineCircle color='#56BCC7' className="top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-10" />

      {/* Month 3 */}
      <div className="flex flex-col items-center relative w-full">
        <div className="relative w-full flex justify-center items-end">
          <img src="/assets/month3.svg" alt="الشهر الثالث" className="w-full h-auto" />
          <div className="absolute bottom-2 bg-[#00A0FF] text-white text-4xl font-semibold  rounded-t-md">
            الشهر الثالث
          </div>
        </div>
        <div className="text-[#00A0FF] font-bold mt-2 text-2xl">تجربة المستخدم والتصميم</div>
        <ul className="text-gray-800 text-baseleading-tight text-center mt-2 px-2">
          <li>تصميم وايرفريم أولي للشاشات بناءً على احتياجات المستخدمين</li>
          <li>إجراء اختبارات تجربة المستخدم (User Testing) على النماذج الورقية أو التفاعلية</li>
          <li>جمع الملاحظات وتحسين التصميم بناءً عليها</li>
          <li>تصميم الواجهة النهائية مع مراعاة سهولة الاستخدام</li>
          <li>تهيئة نموذج تفاعلي (Prototype) باستخدام Figma</li>
        </ul>
      </div>

      {/* Month 2 */}
      <div className="flex flex-col items-center relative w-full">
        <div className="relative w-full">
          {/* Hidden image to determine height */}
          <img 
            src="/assets/month2.svg" 
            alt="الشهر الثاني" 
            className="w-full h-auto opacity-0 pointer-events-none" 
          />
          
          {/* Content div positioned absolutely to match image dimensions */}
          <div className="absolute inset-0 flex flex-col justify-end items-center pb-4">
            <ul className="text-black font-open-sans text-baseleading-tight text-center px-2 mb-2 font-medium">
              <li>تحديد نوع الذكاء الاصطناعي المناسب للتطبيق</li>
              <li>جمع البيانات اللازمة لتدريب النموذج (مثل عادات يومية، أوقات تناول أدوية.. إلخ)</li>
              <li>تدريب النموذج باستخدام خوارزميات مناسبة (بقيادة مهندس الذكاء الاصطناعي أو الفريق)</li>
              <li>اختبار مبدئي للنموذج وتقييم دقته</li>
              <li>توثيق طريقة عمل النموذج وآلية دمجه مستقبلاً في التطبيق</li>
            </ul>
            <div className="text-[#56BCC7] font-bold text-2xl">تطوير نموذج الذكاء الاصطناعي</div>
          </div>
        </div>
        <div className="relative w-full flex justify-center items-start">
          <div className="absolute top-2 bg-[#56BCC9] text-white text-4xl font-bold px-4 py-1 rounded-b-md z-10">
            الشهر الثاني
          </div>
          <img src="/assets/month2.png" alt="الشهر الثاني" className="w-full h-auto z-0" />
        </div>
      </div>

      {/* Month 1 */}
      <div className="flex flex-col items-center relative w-full">
        <div className="relative w-full flex justify-center items-end">
          <img src="/assets/month1.svg" alt="الشهر الأول" className="w-full h-auto" />
          <div className="absolute bottom-2 bg-[#00A0FF] text-white text-4xl font-semibold  rounded-t-md">
            الشهر الأول
          </div>
        </div>
        <div className="text-[#00A0FF] font-bold mt-2 text-2xl">البحث والتحليل</div>
        <ul className="text-gray-800 text-baseleading-tight text-center mt-2 px-2">
          <li>تحديد الفئة المستهدفة (مثل: كبار السن، أصحاب الأمراض المزمنة، مرضى العيادات)</li>
          <li>كتابة سيناريوهات لفهم احتياجات المستخدمين</li>
          <li>تحليل النتائج وتحديد أهم المشكلات التي يمكن حلها بالتطبيق</li>
          <li>إعداد استبيانات المشروع بناءً على البيانات</li>
          <li>دراسة التطبيقات المشابهة وتحليلها</li>
        </ul>
      </div>
    </div>

    </div>
    </section>
  );
};

export default TimelineSection;