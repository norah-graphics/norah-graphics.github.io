import React from 'react';

const SurveyQuestionSection=()=> {
  return (

        <section className=' max-w-6xl mx-auto px-4 py-16 '>
              <div className="relative bg-white p-2  rounded-br-[3.5rem] rounded-bl-[3.5rem] rounded-tl-[3.5rem]">
      {/* Title Box - Top Right */}
      <div className="absolute -top-4 right-0 bg-white px-6 py-2 font-inter rounded-tl-full rounded-bl-full border border-[#B6E7E3]">
        <h2 className="text-[#00A0FF] font-bold text-xl">Survey Questions</h2>
      </div>
      
      {/* Gradient Content Box */}
      <div 
        className="md:p-8  text-right rounded-[3.5rem]"
        style={{
          background: 'linear-gradient(120deg,  rgba(0, 160, 255, 0.25)  0%, rgba(235, 240, 243, 0) 50%, rgba(64, 207, 197, 0.25) 100%)'
        }}
        dir=""
      >

    <div className="p-6 max-w-6xl mx-auto" >
      {/* Questions 1 and 2 - Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" dir='rtl'>
        
        {/* Question 1 */}
        <div className="space-y-4">
          <h2 className=" font-semibold font-inter text-3xl text-[#3876BF] text-right"  dir='rtl'>
            1. هل تستخدم أدوية بشكل يومي؟
          </h2>
          <div className="flex justify-center">
            <img src="/assets/q1.svg" alt="Daily medication usage chart" className="w-auto h-auto" />
          </div>
        </div>

        {/* Question 2 */}
        <div className="space-y-4">
          <h2 className=" font-semibold font-inter text-3xl text-[#3876BF] text-right"  dir='rtl'>
            2. كم عدد الأدوية التي تستخدمها؟
          </h2>
          <div className="flex justify-center">
            <img src="/assets/q2.svg" alt="Number of medications chart" className="w-auto h-auto" />
          </div>
        </div>
      </div>

      {/* Question 3 - Full width */}
      <div className="py-6 space-y-6">
        <h2 className=" font-semibold font-inter text-3xl text-[#3876BF] text-right"  dir='rtl'>
          3. ما نوع الأدوية التي تستخدمها؟ (اختر جميع ما ينطبق)
        </h2>
        
        <div className="space-y-4">
          {/* Survey results */}
          <div className="">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">أمراض مزمنة (مثل الضغط، السكري)</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '58%'}}></div>
                <span className="text-sm text-[#3876BF]  ml-2">(58) 23.2%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">أمراض نفسية</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '7%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(7) 3.9%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">مكملات غذائية</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '100%'}}></div>
                <span className="text-sm text-[#3876BF]  ml-2">(102) 56.2%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">مضادات حيوية</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '37%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(37) 20.9%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">علاجات قصيرة المدى</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '5%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(5) 2.9%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">مسكنات</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '2%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(2) 1.9%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">غير ذلك</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '2%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(2) 1.9%</span>
              </div>
            </div>
          </div>
        </div>
    </div>

       {/* Questions 4 and 5 - Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" dir='rtl'>
        
        {/* Question 4 */}
        <div className="space-y-4">
          <h2 className=" font-semibold font-inter text-3xl text-[#3876BF] text-right"  dir='rtl'>
            4. هل واجهت صعوبات في اخذ الأدوية
          </h2>
          <div className="flex justify-center ">
            <img src="/assets/q4.svg" alt="answer 4" className="w-auto h-auto" />
          </div>
        </div>

        {/* Question 5 */}
        <div className="space-y-4">
          <h2 className=" font-semibold font-inter text-3xl text-[#3876BF] text-right"  dir='rtl'>
            5. ماهي اسبابك التي تؤدي الى نسيان
  <br/> الأدوية؟ (اختر ماينطبق)
          </h2>
          <div className="">
           
            {/* Survey results */}
          <div className="" dir='ltr'>
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">الانشغال</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '70%'}}></div>
                <span className="text-sm text-[#3876BF]  ml-2">(124) 68.9%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">كثرة عدد الأدوية</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '10%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(9) 5.9%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">عدم وضوح التعليمات</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                    <div className="bg-[#00A0FF] h-3" style={{width: '10%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(9) 5.9%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">نسيان متكرر</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '32%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(75) 41.9%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">لا أشعر بأهمية الانتظام</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '15%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(22) 12.9%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">غير ذلك</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '4%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(2) 1.9%</span>
              </div>
            </div>
            



          </div>
          </div>
        </div>
      </div>




     {/* Questions 5 and 6 - Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" dir='rtl'>
        
        {/* Question 5 */}
        <div className="space-y-4">
          <h2 className=" font-semibold font-inter text-3xl text-[#3876BF] text-right"  dir='rtl'>
            5. هل سبق واخذت وسائل تذكيرية للدواء ؟
          </h2>
          <div className="flex justify-center">
            <img src="/assets/q5.svg" alt="answer 5" className="w-auto h-auto" />
          </div>
        </div>

        {/* Question 2 */}
        <div className="space-y-4">
          <h2 className=" font-semibold font-inter text-3xl text-[#3876BF] text-right"  dir='rtl'>
            6. اذا كانت الاجابة نعم، ماهي الطرق
  <br/>المستخدمة؟
          </h2>
          <div className="flex justify-center">
            <img src="/assets/q6.svg" alt="answer 6" className="w-auto h-auto" />
          </div>
        </div>
      </div>

    {/* Questions 7 and 8 - Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" dir='rtl'>
        
        {/* Question 7 */}
        <div className="space-y-4">
          <h2 className=" font-semibold font-inter text-3xl text-[#3876BF] text-right"  dir='rtl'>
            7. هل تعتقد بوجود احتياج تطبيق تذكيري
 للعلاجات يدعم اللغة العربية؟<br/>
          </h2>
          <div className="flex justify-center ">
            <img src="/assets/q7.svg" alt="answer 7" className="w-auto h-auto" />
          </div>
        </div>

        {/* Question 8 */}
        <div className="space-y-4">
          <h2 className=" font-semibold font-inter text-3xl text-[#3876BF] text-right"  dir='rtl'>
            8. ما الميزات التي ترغب بوجودها في تطبيق
  <br/>تذكير الأدوية؟ (يمكن اختيار أكثر من خيار)
          </h2>
          <div className="">
           
            {/* Survey results */}
          <div className="" dir='ltr'>
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">تنبيه بمواعيد جرعات الدواء</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '160%'}}></div>
                <span className="text-sm text-[#3876BF]  ml-2">(146) 81.1%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">متابعة الالتزام بالأدوية</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '70%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(100) 55.1%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">تقارير دورية للاستخدام</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '30%'}}></div>
                <span className="text-sm text-[#3876BF]  ml-2">(54) 30%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">مشاركة الخطة العلاجية مع الطبيب</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '37%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(71) 81.1%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">تواصل مباشر مع الطبيب او الصيدلي</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '40%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(73) 41.1%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">تعليمات حول الأدوية</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '37%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(67) 37%</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">الابلاغ عن آثار جانبية للدواء</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                  <div className="bg-[#00A0FF] h-3" style={{width: '37%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(83) 47%</span>
              </div>
            </div>

   <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">تذكير بالفحوصات الدورية</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '60%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(77) 87%</span>
              </div>
            </div>

               <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">تذكير بمواعيد المتابعة في المستشفيات</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '60%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(54) 30%</span>
              </div>
            </div>

               <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-right font-bold  text-black">دعم لغات متعدد</span>
              <div className="w-full md:flex-1  ml-4 flex items-center">
                <div className="bg-[#00A0FF] h-3" style={{width: '35%'}}></div>
                <span className="text-sm text-[#3876BF] ml-2">(66) 60%</span>
              </div>
            </div>



          </div>
          </div>
        </div>
      </div>

        {/* Question 9 - Full width */}
      <div className="py-6 space-y-6">
        <h2 className=" font-semibold font-inter text-3xl text-[#3876BF] text-right"  dir='rtl'>
          9. هل تهتم بأن يكون التطبيق موثوق ومُشرف عليه من مختصين صحيين؟
        </h2>
        
        <div className="flex justify-center md:justify-end">
            <img src="/assets/q9.svg" alt="q9" className="w-auto h-auto" />
          </div>
    </div>



    </div>
  
      </div>
    </div>
    </section>
  
  );
}

 export default SurveyQuestionSection;