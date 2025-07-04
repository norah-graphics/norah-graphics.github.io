import React from 'react';

const UserInterviewSection=()=> {
  return (

        <section className=' max-w-6xl mx-auto px-4 py-16 '>
              <div className="relative bg-white p-2  rounded-br-[3.5rem] rounded-bl-[3.5rem] rounded-tl-[3.5rem]">
      {/* Title Box - Top Right */}
      <div className="absolute -top-4 right-0 bg-white px-6 py-2 font-inter rounded-tl-full rounded-bl-full border border-[#B6E7E3]">
        <h2 className="text-[#00A0FF] font-bold text-xl">User interview questions</h2>
      </div>
      
      {/* Gradient Content Box */}
      <div 
        className="p-8  text-right rounded-[3.5rem]"
        style={{
          background: 'linear-gradient(160deg,  rgba(0, 160, 255, 0.25)  0%, rgba(235, 240, 243, 0) 50%, rgba(64, 207, 197, 0.25) 100%)'
        }}
        dir="rtl"
      >
        <div className="space-y-2 text-[#717475]">
          <div className="flex items-start gap-1">
            <span className="text-[#717475] font-semibold font-open-sans text-lg ">1-</span>
            <p className= "text-[#717475] font-semibold font-open-sans text-lg " >هل يمكن أن نشرح لنا كيف تقوم بتنظيم و ترتيب و جدولة مواعيد تناول أدويتك؟</p>
          </div>
          
          <div className="flex items-start gap-1">
            <span className="text-[#717475] font-semibold font-open-sans text-lg ">2-</span>
            <p className= "text-[#717475] font-semibold font-open-sans text-lg ">هل يمكن أن نخبرنا إذا كان مرة سبت تناول الأدوية في مواعيدها وكيف تصرفت حيال ذلك؟</p>
          </div>
          
          <div className="flex items-start gap-1">
            <span className="text-[#717475] font-semibold font-open-sans text-lg ">3-</span>
            <p className= "text-[#717475] font-semibold font-open-sans text-lg ">كم مقدار الأهمية لديك عند وجود جهة أذكى إستشارى يساعد عليك إضافة مته لذكرى بنل سهولة في التطبيق؟        <br/>     (معرفة اهتمام المستخدمين بالجدولة تم لا)
</p>
       
          
          </div>
          
          <div className="flex items-start gap-1">
            <span className="text-[#717475] font-semibold font-open-sans text-lg ">4-</span>
            <p className= "text-[#717475] font-semibold font-open-sans text-lg ">هل واجهت مشاكل عند نسيان تناول الدواء؟ كيف من مرة؟ <br/>(معرفة كمية حول المستخدم عند نسيان وكيفية التعامل) </p>
          </div>
          
          <div className="flex items-start gap-1">
            <span className="text-[#717475] font-semibold font-open-sans text-lg ">5-</span>
            <p className= "text-[#717475] font-semibold font-open-sans text-lg " >هل ترى أن التطبيق يساعدك على تبسيط نضام الحياة وكثرة الانشغال؟ <br/> (معرفة نظرة المستخدم وتقبل التطبيق تم لا) </p>
          </div>
          
          <div className="flex items-start gap-1">
            <span className="text-[#717475] font-semibold font-open-sans text-lg ">6-</span>
            <p className= "text-[#717475] font-semibold font-open-sans text-lg ">هل لديك تجارب سابقة في تطبيقات توفر خدمات بإستخدام الذكاء الاصطناعي؟ <br/> (معرفة تجارب المستخدمين السابقة مع الذكاء الاصطناعي)</p>
          </div>
          
          <div className="flex items-start gap-1">
            <span className="text-[#717475] font-semibold font-open-sans text-lg ">7-</span>
            <p className= "text-[#717475] font-semibold font-open-sans text-lg ">هل حصلت لك صعوبات تقنية في إستخدام التطبيقات الحديثة إذا كان أكثر المعلومات أو وحدات؟ <br/> (معرفة المعلومات التقنية مع المستخدمين) </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  
  );
}

 export default UserInterviewSection;