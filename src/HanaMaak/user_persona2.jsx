import React from 'react';

const UserPersona2Section = () => {
  return (
    <section className='max-w-6xl mx-auto px-4 py-16 relative'>
      <div className="relative bg-white p-2 rounded-br-[3.5rem] rounded-bl-[3.5rem] rounded-tr-[3.5rem] rounded-tl-[3.5rem] border border-[#3876BF]"
        style={{
          background: 'linear-gradient(120deg,   rgba(64, 207, 197, 0.25)  0%, rgba(235, 240, 243, 0) 50%, rgba(0, 160, 255, 0.25) 100%)'
        }}
      >
        {/* Title Box - Top */}
        <div className="absolute -top-8 left-[35%] bg-[#3876BF] px-6 py-2 font-inter rounded-full border border-[#3876BF] shadow-lg shadow-blue-500/50">
          <h2 className="text-[#FFFFFF] font-bold font-inter text-3xl">User Persona</h2>
        </div>

        {/* Quote Bubble - Left Side - Hidden on small screens */}
        <div className="hidden lg:block absolute bottom-10 -left-20 z-10 ">
          <div className="relative bg-[#3876BF] rounded-[2rem] px-8 py-6 max-w-[20%] shadow-lg shadow-blue-500/50">
            {/* Quote marks */}
            <div className="text-white text-center text-6xl font-medium leading-[0.5] font-carter-one" >
              &ldquo;
            </div>
            <p className="text-white text-lg font-medium leading-relaxed text-right" dir="rtl">
كوني ام لـ ست اطفال فهذة مسؤولية كبيرة، اتمنى ان اضل بصحة جيدة من اجل ابنائي اولا واخيرًا، لأن فقط شعور ان ابنائي يتحملون مسؤوليتي صحتي بشكل دائم مزعج ومحزن، فأتمنى تطبيق يوفر لي خدمات بسيطه تساعدني اقوم بنفسي ولو لجزء       </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto p-4 gap-6">
          {/* Image Section - Shows first on mobile, right on desktop */}
      <div className="relative lg:w-1/3 w-full h-[400px] lg:h-full overflow-hidden lg:order-2">
        {/* Large screens - original layout */}
        <div className="hidden lg:block w-full h-full">
            <img
            src="/assets/hasa.png"
            alt="Nada"
            className="w-full h-full object-cover rounded-2xl"
            />
            <div className="rounded-t-[2.5rem] absolute bottom-0 left-1/2 text-white transform -translate-x-1/2 text-center bg-[#ABDAF6] bg-opacity-30 pb-10 py-6 px-6 w-full" dir='rtl'>
            <h3 className="text-7xl font-inter font-extrabold">حصة</h3>
            <p className="text-xl font-medium text-right">متقاعدة/ ربة منزل</p>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <img src='/assets/profile.svg' alt="profile" />
                <p className="text-xl font-medium text-right">50 سنة - ام لـ ست اطفال</p>
            </div>
            </div>
        </div>

        {/* Small screens - circular profile with text below */}
        <div className="lg:hidden flex flex-col items-center justify-center h-full space-y-6">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#ABDAF6]">
            <img
                src="/assets/hasa.png"
                alt="حصة"
                className="w-full h-full object-cover"
            />
            </div>
            
            <div className="text-center text-[#041219] lg:text-white" dir='rtl'>
            <h3 className="text-4xl font-inter font-extrabold mb-2">حصة</h3>
            <p className="text-lg font-medium mb-2">متقاعدة/ ربة منزل</p>
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <img src='/assets/profile.svg' alt="profile" />
                <p className="text-lg font-medium">50 سنة - ام لـ ست اطفال</p>
            </div>
            </div>
        </div>
        </div>

          {/* Left Text Content - Shows after image on mobile, left on desktop */}
          <div className="lg:w-2/3 w-full space-y-6 lg:order-1" dir='rtl'>
            <div>
              <h2 className="font-bold font-inter text-3xl text-[#3876BF]">نبذة عن حصة:</h2>
              <p className="font-medium font-inter text-[#041219] text-lg">
فاطمة أم حنونة تهتم بأسرتها وصحتها. رغم بساطة استخدامها للتقنية، فهي تحاول التأقلم مع التطبيقات التي تساعدها في حياتها اليومية. بدأت تنسى مواعيد أدويتها وتبحث عن طريقة سهلة تخليها مرتاحة وواثقة أنها ملتزمة بعلاجها.              </p>
            </div>

            <div>
              <h2 className="font-bold font-inter text-3xl text-[#3876BF]">الأهداف و الاحتياجات:</h2>
              <ul className="list-disc font-medium font-inter text-[#041219] text-lg space-y-1 rtl pr-8">
                <li>تذكيرها بأوقات الأدوية والمواعيد الطبية بدقة</li>
                <li>وسيلة سهلة لإدخال الوصفة (يفضل بالتصوير وليس بالكتابة)</li>
                <li>إشعارات صوتية توضح اسم الدواء وطريقة استخدامه</li>
                <li>واجهة بسيطة وواضحة بدون تعقيد</li>
                <li>الأمان والخصوصية في حفظ معلوماتها الصحية</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold font-inter text-3xl text-[#3876BF]">التحديات و المشكلات التي تواجها:</h2>
              <ul className="list-disc font-medium font-inter text-[#041219] text-lg space-y-1 rtl pr-8" dir="rtl">
                <li>صعوبة قراءة الوصفات الخطية</li>
                <li>تنسى الأدوية إذا ما جاءها تنبيه واضح</li>
                <li>تنزعج من التطبيقات المعقدة أو الصغيرة الخط</li>
                <li>تشعر بعدم الثقة في إدخال بيانات الأدوية بنفسها</li>
               <li>أحيانًا ما تفهم التعليمات المكتوبة الطويلة</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold font-inter text-3xl text-[#3876BF]">السلوك و ردود الأفعال:</h2>
              <ul className="list-disc font-medium font-inter text-[#041219] text-lg space-y-1 rtl pr-8 ">
                <li>تتجاوب مع التطبيقات إذا كانت واجهتها مريحة وبالعربي</li>
                <li>قد تتجاهل التطبيق إذا واجهت صعوبة في أول استخدام</li>
                <li>ترتاح للتجربة إذا ساعدها أحد بالبداية، ثم تعتمد عليه</li>
                <li>إذا شعرَت أن التطبيق "فاهمها" بتستخدمه يوميًا بثقة</li>

              </ul>
            </div>
          </div>
        </div>

        {/* Quote Bubble - Bottom on small screens */}
        <div className="lg:hidden mt-6 mx-4">
          <div className="relative bg-[#3876BF] rounded-[2rem] px-8 py-6 shadow-lg">
            {/* Quote marks */}
            <div className="text-center text-white text-6xl font-medium leading-[0.5] font-carter-one">
             &ldquo;
            </div>
            <p className="text-white text-lg font-medium leading-relaxed text-right" dir="rtl">
كوني ام لـ ست اطفال فهذة مسؤولية كبيرة، اتمنى ان اضل بصحة جيدة من اجل ابنائي اولا واخيرًا، لأن فقط شعور ان ابنائي يتحملون مسؤوليتي صحتي بشكل دائم مزعج ومحزن، فأتمنى تطبيق يوفر لي خدمات بسيطه تساعدني اقوم بنفسي ولو لجزء 
  </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserPersona2Section;