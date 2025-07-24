import React from 'react';

const UserPersona1Section = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 relative'>
      <div className="relative gradient-rose-box p-2 border-t-[3px] border-t-[#D14D72]"
       
      >
         {/* Title Box - Top center  */}
         <div className="absolute -top-6 right-[40%] md:right-[25%] lg:right-[20%] bg-[#D14D72]  pr-16 rounded-full px-6 font-zain  ">
          <h2 className="text-[#FFFFFF] font-extrabold font-zain text-2xl md:text-3xl px-2">User Persona</h2>
        </div>
        {/* Title Box - Top right*/}
        <div className="absolute -top-8 -right-[1px] bg-[#D14D72] rounded-l-full px-6 py-2 font-zain  ">
          <h2 className="text-[#FFFFFF] font-extrabold font-zain text-2xl md:text-3xl px-2">شخصيـة المستخــدم</h2>
        </div>
       

       {/* Main Body */}
        <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto p-4 gap-6">
          {/* Right Section - Shows first on mobile, right on desktop */}
        <div className="relative lg:w-1/3 w-full  lg:h-full overflow-hidden lg:order-2 bg-[rgba(255,196,213,0.5)] py-4">
        <div className='flex flex-col items-center justify-center px-6 space-y-4'>
             <img src='/assets/rose/noran.svg'/> 
            <div className='rounded-full w-full bg-[#D14D72] py-1 text text-center'> 
                <p className='font-zain font-bold text-white text-xl md:text-2xl '>
                الاســـم
                </p>
            </div>
            <p className='font-zain font-bold text-[#6A1A7D] text-xl md:text-2xl text-center'>نـــوران</p>

            <div className='rounded-full w-full bg-[#D14D72] py-1 text text-center'> 
                <p className='font-zain font-bold text-white text-xl md:text-2xl '>
                العمــــر
                </p>
            </div>
            <p className='font-zain font-bold text-[#6A1A7D] text-xl md:text-2xl text-center'>٢٦ سنـــة</p>

            <div className='rounded-full w-full bg-[#D14D72] py-1 text text-center'> 
                <p className='font-zain font-bold text-white text-xl md:text-2xl '>
                الوظيفـــة
                </p>
            </div>
            <p className='font-zain font-bold text-[#6A1A7D] text-xl md:text-2xl text-center'>مسؤولة إدارة مشاريع</p>

            <div className='rounded-full w-full bg-[#D14D72] py-1 text text-center'> 
                <p className='font-zain font-bold text-white text-xl md:text-2xl '>
                الحالة الإجتماعية
                </p>
            </div>
            <p className='font-zain font-bold text-[#6A1A7D] text-xl md:text-2xl text-center'>متزوجة ، ام لثلاث اطفال</p>
            
            <div className='w-fit px-4 rounded-full bg-[#D14D72] py-1 text text-center'> 
                <p className='font-zain font-bold text-white text-xl md:text-2xl '>
                إجتماعية، مرحة 
                </p>
            </div>

            <div className='w-fit px-4 rounded-full bg-[#D14D72] py-1 text text-center'> 
                <p className='font-zain font-bold text-white text-xl md:text-2xl '>
                    كثيرة المناسبات في العمل 
                </p>
            </div>
        </div>
        </div>

          {/* Left Text Content - Shows after image on mobile, left on desktop */}
          <div className="lg:w-2/3 w-full space-y-8 lg:order-1 py-6" dir='rtl'>
            {/* Resume part */}
            <div className='relative bg-[rgba(255,196,213,0.5)] p-4 rounded-lg'> 
                <div className="absolute -top-4 right-0 bg-[#D14D72] rounded-l-full pl-8  font-zain">
                    <h2 className="text-[#FFFFFF] font-bold font-zain text-lg md:text-xl px-2 text-right">السيـرة الذاتية:</h2>
                </div>
                <p className="font-bold font-zain text-[#686565] text-lg">
                نوران شخصية اجتماعية محبة للجمعات العائلية والمناسبات، تهتم في انتقاء اجمل الهدايا والورود ، تفضل بأن تهدي الورود الجميلة والباقات المثالية ، ولكن تجاربها السيئة في تطبيقات التوصيل من ارتفاع الأسعار وعدم وجود مصداقية عالية في الطلبات يجعلها تتخذ اجراء الذهاب بنفسها الى متاجر الورود، ويأخذ منها وقت كبير في انتظار اكتمال الطلب وتنسيق الموظف للهدية ومع وضع التزاماتها الأسرية ترى صعوبة في الإنتظار.              
                </p>
            </div>
            {/* Goals */}
            <div className='relative bg-[rgba(255,196,213,0.5)] p-4 rounded-lg'> 
                <div className="absolute -top-4 right-0 bg-[#D14D72] rounded-l-full pl-8 font-zain">
                    <h2 className="text-[#FFFFFF] font-bold font-zain text-lg md:text-xl px-2 text-right">الأهداف والإحتياجات:</h2>
                </div>
                <ul className="list-disc font-bold font-zain text-[#686565] text-base md:text-lg space-y-1 rtl pr-8">
                    <li>القدرة على شراء الورد من المتاجر القريبة من المنزل</li>
                    <li>الحصول على باقة الورد المطلوبه دون تأخير او وصول شكل مختلف</li>
                    <li>معرفة العروض الحصرية من متاجر الورد </li>
                    <li>التواصل السريع مع متجر الورد ومناقشه الطلب المراد</li>
                    <li>القدره على الدفع إلكتروني بعد اعتماد الطلب مع متجر الورد</li>

              </ul>
            </div>
            {/* Problems */}
             <div className='relative bg-[rgba(255,196,213,0.5)] p-4 rounded-lg'> 
                <div className="absolute -top-4 right-0 bg-[#D14D72] rounded-l-full pl-8 font-zain">
                    <h2 className="text-[#FFFFFF] font-bold font-zain text-lg md:text-xl px-2 text-right">التحديات والمشكلات:</h2>
                </div>
                <ul className="list-disc font-bold font-zain text-[#686565] text-base md:text-lg space-y-1 rtl pr-8">
                    <li>تأخر التوصيل أو عدم الالتزام بالمواعيد</li>
                    <li>الإنتظار الطويل عند متاجر الورد لأجل تنسيق الباقة المطلوبة</li>
                    <li>عدم المعرفه في حال وجود عروض من متاجر الورود </li>
                    <li>عدم وجود تطبيق يوفر توصيل الورد في نفس اليوم </li>
                    <li>انعدام المصداقيه من جودة الورود عند الطلب من التطبيقات</li>
              </ul>
            </div>
            {/* Behavior */}
            <div className='relative bg-[rgba(255,196,213,0.5)] p-4 rounded-lg'> 
                <div className="absolute -top-4 right-0 bg-[#D14D72] rounded-l-full pl-8 font-zain">
                    <h2 className="text-[#FFFFFF] font-bold font-zain text-lg md:text-xl px-2 text-right">السلوك وردود الأفعال:</h2>
                </div>
                <ul className="list-disc font-bold font-zain text-[#686565] text-base md:text-lg space-y-1 rtl pr-8">
                    <li>غالباً لايوجود تطبيق يوفر مناقشه الطلب  مع منسق الورود </li>
                    <li>الرغبة في عدم الخروج من المنزل فقط لأجل شراء الورد</li>
                    <li>الرغبة في عدم الخروج من المنزل فقط لأجل شراء الورد</li>
                    <li> احيانا يتم توصيل الطلب بشكل خاطئ</li>
                    <li>تفويت فرصة الإستفاده من عرض حصري لدى متجر معين </li>
              </ul>
            </div>

          </div>
        </div>

       
      </div>
    </section>
  );
}

export default UserPersona1Section;