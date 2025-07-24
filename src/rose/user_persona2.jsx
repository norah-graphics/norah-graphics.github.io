import React from 'react';

const UserPersona2Section = () => {
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
             <img src='/assets/rose/ahmed.svg'/> 
            <div className='rounded-full w-full bg-[#D14D72] py-1 text text-center'> 
                <p className='font-zain font-bold text-white text-xl md:text-2xl '>
                الاســـم
                </p>
            </div>
            <p className='font-zain font-bold text-[#6A1A7D] text-xl md:text-2xl text-center'>احمد</p>

            <div className='rounded-full w-full bg-[#D14D72] py-1 text text-center'> 
                <p className='font-zain font-bold text-white text-xl md:text-2xl '>
                العمــــر
                </p>
            </div>
            <p className='font-zain font-bold text-[#6A1A7D] text-xl md:text-2xl text-center'>35 سنـــة</p>

            <div className='rounded-full w-full bg-[#D14D72] py-1 text text-center'> 
                <p className='font-zain font-bold text-white text-xl md:text-2xl '>
                الوظيفـــة
                </p>
            </div>
            <p className='font-zain font-bold text-[#6A1A7D] text-xl md:text-2xl text-center'>صاحب عدة متاجر ورد</p>

            <div className='rounded-full w-full bg-[#D14D72] py-1 text text-center'> 
                <p className='font-zain font-bold text-white text-xl md:text-2xl '>
                الحالة الإجتماعية
                </p>
            </div>
            <p className='font-zain font-bold text-[#6A1A7D] text-xl md:text-2xl text-center'>متزوج، ولدية ٤ اطفال</p>
            
           <div className='flex flex-row justify-around w-full'>
             <div className='w-fit px-4 rounded-full bg-[#D14D72] text text-center'> 
                <p className='font-zain font-bold text-white text-base md:text-lg '>
                شغوف بالعمل
                </p>
            </div>
            <div className='w-fit px-4 rounded-full bg-[#D14D72] text text-center'> 
                <p className='font-zain font-bold text-white text-base md:text-lg '>
                    استراتيجي الأفكار                
                    </p>
            </div>
           </div>

            <div className='w-fit px-4 rounded-full bg-[#D14D72] text text-center'> 
                <p className='font-zain font-bold text-white text-base md:text-lg '>
                    طموح ولديه اهداف للتوسع والإنتشار
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
                    احمد صاحب عدة متاجر لبيع الورود داخل مدينه الرياض، مهتم جدًا في عمله الرسمي وعمله الخاص، يطمح للتوسع والإنتشار خارج مدينة الرياض، ولكن لديه عدة مشاكل داخليه في متاجره يرغب في تحسينها وتطويرها من الناحيه التسويقيه واللوجستية وخدمات التواصل مع العملاء
                </p>
            </div>
            {/* Goals */}
            <div className='relative bg-[rgba(255,196,213,0.5)] p-4 rounded-lg'> 
                <div className="absolute -top-4 right-0 bg-[#D14D72] rounded-l-full pl-8 font-zain">
                    <h2 className="text-[#FFFFFF] font-bold font-zain text-lg md:text-xl px-2 text-right">الأهداف والإحتياجات:</h2>
                </div>
                <ul className="list-disc font-bold font-zain text-[#686565] text-base md:text-lg space-y-1 rtl pr-8">
                    <li>طريقة احترافية في تواصل مع الزبائن دون اخذ الوقت في الإستفسارات من غير الجدية في الطلب</li>
                    <li>معرفة الزبائن بأهم العروض الحصرية/ الورود النادرة</li>
                    <li>القدرة على حفظ الورود دون الهدر فيها عند طلب تنسيق ثم الإلغاء</li>
                    <li>تحقيق الهدف وهو إرضاء العميل في صناعة باقات وإستلامها بالوقت دون تأخير او تعطيل</li>
              </ul>
            </div>
            {/* Problems */}
             <div className='relative bg-[rgba(255,196,213,0.5)] p-4 rounded-lg'> 
                <div className="absolute -top-4 right-0 bg-[#D14D72] rounded-l-full pl-8 font-zain">
                    <h2 className="text-[#FFFFFF] font-bold font-zain text-lg md:text-xl px-2 text-right">التحديات والمشكلات:</h2>
                </div>
                <ul className="list-disc font-bold font-zain text-[#686565] text-base md:text-lg space-y-1 rtl pr-8">
                    <li>عدم إلتزام الزبون في تحويل المبلغ واستلام الطلبية</li>
                    <li>قلة صبر الزبائن عند الإنتظار وعدم استيعاب اهمية الوقت عند تنسيق الورد</li>
                    <li>إنتهاء صلاحية الورود في المستودعات دون القدرة على بيعها </li>
                    <li>انخفاض معدل البيع في مواسم الإعتيادية بعكس مواسم الإحتفالات</li>
              </ul>
            </div>
            {/* Behavior */}
            <div className='relative bg-[rgba(255,196,213,0.5)] p-4 rounded-lg'> 
                <div className="absolute -top-4 right-0 bg-[#D14D72] rounded-l-full pl-8 font-zain">
                    <h2 className="text-[#FFFFFF] font-bold font-zain text-lg md:text-xl px-2 text-right">السلوك وردود الأفعال:</h2>
                </div>
                <ul className="list-disc font-bold font-zain text-[#686565] text-base md:text-lg space-y-1 rtl pr-8">
                    <li>حدوث سوء فهم من الزبون وموظف المتجر بسبب الوقت في تنسيق الهدايا</li>
                    <li>الرغبة في طريقه توفر الجهد والمال المبذول على طريقه البيع الإعتيادية</li>
                    <li>احيانًا يسبب هدر ورمي كميات وفيرة من الورود</li>
                    <li> تكدس رسائل الواتس اب مع العملاء دون المقدرة على تصنيف الطلبات الأكيدة والمدفوعة بينها وبين الإستفسارات اليومية</li>
              </ul>
            </div>

          </div>
        </div>

       
      </div>
    </section>
  );
}

export default UserPersona2Section;