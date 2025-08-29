import React from 'react';




const InterviewQuestionsSection = () => {
  return (
 <section className="w-full md:py-16 py-12 px-4 relative w-full max-w-6xl  mx-auto p-8">
    <div className='flex-col font-zain justify-center items-center md:px-0 px-12'>
        {/* title */}
       <div className=' justify-center items-center text-center'>
         <p className='font-merriweather text-[#6A1A7D] font-bold text-3xl md:text-4xl '>مقابلات المستخدمين</p>
        <p className='font-zain text-[#6A1A7D] font-extrabold text-3xl md:text-4xl'>User Interview Questions</p>
       </div>
       {/* list */}
       <div className='grid  grid-cols-1 md:grid-cols-[auto_1fr] '>
        <div className=' h-full hidden md:flex flex-col justify-center items-center'>
            <img src='/assets/rose/flowers.svg' className=''/>
        </div>
        <div className='flex-col font-zain justify-start items-start md:w-[90%]'>
            <ul className="font-extrabold font-zain text-[#4B494C] text-right text-lg sm:text-lg md:text-xl space-y-8 pt-8" dir='rtl'>
                <li> <span className='mx-2'>•</span>اوصف تجربتك الأخيرة عند ذهابك لمتجر الورد وشراء الورود <br/><span className='font-zain font-extrabold text-[#909090]'>(معرفة تجربة المشارك في متاجر الورود)</span>  </li>
                <li> <span className='mx-2'>•</span>ما اكثر تطبيق تفضلة لطلب ورد؟ وماهي ايجابية التطبيق وسلبياته ان وجد؟<br/><span className='font-zain font-extrabold text-[#909090]'>(معرفة التطبيق المفضل وتجربة المستخدم مع التطبيقات)</span>  </li>
                <li> <span className='mx-2'>•</span>ماهي تجاربك السابقة السيئة عن طلبك ورد من تطبيقات الورد، مع ذكر التطبيق؟<br/><span className='font-zain font-extrabold text-[#909090]'>(معرفة سلبيات التطبيقات)</span>  </li>
                <li> <span className='mx-2'>•</span>كيف تتصرف عند رغبتك في شراء ورد بشكل عاجل جدًا؟<br/><span className='font-zain font-extrabold text-[#909090]'>(معرفة كيفيه تصرف المستخدم عند حدوث هذا الموقف العاجل)</span>  </li>
                <li> <span className='mx-2'>•</span>كم الوقت المستقطع الذي يتخذه متجر الورد لتنسيق باقة لك بالعادة؟ <br/><span className='font-zain font-extrabold text-[#909090]'>(معرفة قابلية نجاح فكره التطبيق للمستخدم)</span>  </li>
                <li> <span className='mx-2'>•</span>ماذا تفعل عن ذهابك لمتجر الورد واخذ وقت طويل لتنفيذ طلبك؟ <br/><span className='font-zain font-extrabold text-[#909090]'>(معرفة سلوك المستخدم في هذا الموقف)</span>  </li>
                <li> <span className='mx-2'>•</span>اذكر متجر ورد مميز بالنسبة لك، ومدى قربه منك ومايميزه عن غيره؟<br/><span className='font-zain font-extrabold text-[#909090]'>(ايجابية متاجر الورد عند المشارك)</span>  </li>

            </ul>

       </div>

       </div>
       {/* position dashed */}
       <div className='absolute  md:py-16 py-12  top-[3rem] md:top-0 md:-right-[7%] -right-[10%]'>
        <img src='/assets/rose/interview_dashline.svg' className='md:w-full w-[70%]'/>
       </div>
       
    </div>
    </section>
  );
};

export default InterviewQuestionsSection;
