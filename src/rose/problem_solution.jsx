import React from 'react';

const ProblemSolutionSection = () => {
    const problems=["تأخر التوصيل أو عدم الالتزام بالمواعيد","الإنتظار الطويل عند محلات الورد لأجل تنسيق الباقة المطلوبة","عدم وجود تطبيق يوفر توصيل الورد بتنسيق خاص في نفس اليوم", "قلة المصداقيه من جودة الورود عند الطلب من التطبيقات"];

    const solutions=["القدرة على طلب الورود من المحلات القريبة من المنزل","التواصل السريع مع محل الورد ومناقشه الطلب المراد", "الحصول على باقة الورد المختارة دون تأخير او وصول شكل مختلف","القدره على الدفع إلكتروني للعربون بعد اعتماد الطلب مع موظف المحل"];
    return (
    <section className="w-full flex items-center justify-center pt-[5.7rem] md:pt-[4rem]">
    <div className='flex-col'>
        {/* problems */}
      <div className=''>
          <div className='border-l-[6px] border-r-[6px] border-[#D14D72] px-4 w-fit flex justify-center items-center mx-auto'>
            <p className='text-[#6A1A7D] font-zain font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl'>Problem المشاكل</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 " dir='rtl'>
            {problems.map((problem, index) => (
            <div class="relative flex justify-center items-center">
            {/*Background SVG */}
            <img className='w-full' src='/assets/rose/pink_box.svg'/>

            {/* Text bubble  */}
            <div class="absolute px-8 py-4 text-center text-[#6A1A7D] font-zain font-bold text-base md:text-lg ">
                {problem}
            </div>
            </div>
            ))}
        </div>
      </div>
      {/* solutions */}
      <div className='pt-8'>
          <div className='border-l-[6px] border-r-[6px] border-[#D14D72] px-4 w-fit flex justify-center items-center mx-auto'>
            <p className='text-[#6A1A7D] font-zain font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl'>Solutions الحلـــــول</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 " dir='rtl'>
            {solutions.map((solution, index) => (
            <div class="relative flex justify-center items-center">
            {/*Background SVG */}
            <img className='w-full' src='/assets/rose/pink_box.svg'/>

            {/* Text bubble  */}
            <div class="absolute px-8 py-4 text-center text-[#6A1A7D] font-zain font-bold text-base md:text-lg ">
                {solution}
            </div>
            </div>
            ))}
        </div>
      </div>

    </div>
    </section>
  );
};

export default ProblemSolutionSection;