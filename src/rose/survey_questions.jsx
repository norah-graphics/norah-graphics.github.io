import React from 'react';




const SurveyQuestionsSection = () => {
    const questions = [
  {
    question: 'هل تفضلين إهداء الورود عند ذهابك إلى مناسبة اجتماعية؟',
    subQuestion: '(معرفة مدى نجاح البحث لعدة المشاركين)',
    answerNumber: '8 إجابات',
    image: '/assets/rose/q1.svg',
  },
  {
    question: 'ما كيفية شرائك المعتادة لهدايا الورود؟',
    subQuestion: '( معرفة مدى نجاح البحث لهذة المشارك)',
    answerNumber: '8 إجابات',
    image: '/assets/rose/q2.svg',
  },
  {
    question: 'عند حاجتك لباقة ورد في اقرب وقت ممكن، هل واجهت مشكلة عدم توفر وقت ممكن للتسليم من تطبيقات بيع الورود؟',
    subQuestion: '( معرفة تجارب المستخدم السابقة في التطبيقات المشابه )',
    answerNumber: '8 إجابات',
    image: '/assets/rose/q3.svg',
  },
  {
    question: 'هل قد واجهت موقف الحاجة الى شراء الورد بشكل عاجل من متجر تنسيق الورود؟',
    subQuestion: '( معرفة هل تكثر مشكلة الإنتظار بشكل متكرر ام لا)',
    answerNumber: '7 إجابات',
    image: '/assets/rose/q4.svg',
  },
  {
    question: 'اذا كانت اجابتك بـ نعم ( هل واجهت مشكلة الإنتظار المزعج لدى متجر الورد لكي يقوم بتنسيق باقتك؟ ',
    subQuestion: '(معرفة مدى نجاح فكرة التطبيق للمشاركين)',
    answerNumber: '8 إجابات',
    image: '/assets/rose/q5.svg',
  },
];
  return (
 <section className="w-full md:py-16 py-12 md:px-12 px-6 relative w-full mx-auto p-8">
    <div className='flex-col font-zain justify-center items-center gradient-rose-box border border-[#D14D72] border-[3.5px] rounded-3xl py-8'>
         {/* title */}
       <div className=' justify-center items-center text-center'>
         <p className='font-merriweather text-[#6A1A7D] font-bold text-3xl md:text-4xl '>اسئلة الإستبيان</p>
        <p className='font-zain text-[#6A1A7D] font-extrabold text-3xl md:text-4xl'>Survey Questions</p>
       </div>
       {/* Questions with piechart*/}
        <div className="space-y-12" dir='rtl'>
      {questions.map((q, idx) => (
        <div key={idx} className="space-y-6">
          {/* Row: Question and Image */}
          <div className="flex flex-col lg:flex-row  justify-between items-center md:items-start gap-8 px-8">
            {/* Text Column */}
            <div className="text-right font-zain space-y-2 w-[80%] lg:w-1/2" dir="rtl">
              <h2 className="text-2xl font-extrabold text-[#4B494C]">{q.question}</h2>
              <p className="text-[#909090] text-lg md:text-xl">{q.subQuestion}</p>
              <p className="text-[#6A1A7D] text-lg md:text-xl font-bold">{q.answerNumber}</p>
            </div>

            {/* Image Column */}
            <div className="flex justify-center md:justify-end">
              <img src={q.image} alt="Survey Chart" className=" w-full" />
            </div>
          </div>

          {/* Separator lines */}
          <div className="space-y-2">
            <div className="h-[2px] bg-[#D14D72] w-5/12"></div>
            <div className="h-[2px] bg-[#6A1A7D] w-6/12"></div>
            <div className="h-[2px] bg-[#D14D72] w-7/12"></div>
          </div>
        </div>
      ))}
        </div>
        {/* questions with column chart */}
       <div className="space-y-12 pt-12 flex-col justify-between items-center md:items-start gap-8" dir='rtl'>
    {/* q6 */}
    <div>
        <div className="text-right font-zain space-y-2 w-[80%] lg:w-1/2 px-8" dir="rtl">
            <h2 className="text-2xl font-extrabold text-[#4B494C]">ما مدى رغبتك في شراء ورد من محل تتعامل معه بشكل مستمر، وترغب في توصيل الباقة
لمنزلك دون الحاجه الى الذهاب بنفسك والإنتظار؟</h2>
            <p className="text-[#909090] text-lg md:text-xl">(معرفة الى اي درجة يشجع المشارك في فكرة التطبيق)</p>
            <p className="text-[#6A1A7D] text-lg md:text-xl font-bold">8 إجابات</p>
        </div>
        <div className="flex justify-center py-4">
            <img src="/assets/rose/q6.svg" alt="Survey Chart" className="" />
        </div>
    </div>
    <div className="space-y-2">
            <div className="h-[2px] bg-[#D14D72] w-5/12"></div>
            <div className="h-[2px] bg-[#6A1A7D] w-6/12"></div>
            <div className="h-[2px] bg-[#D14D72] w-7/12"></div>
          </div>
    {/* q7 */}
    <div className='w-full'>
        <div className="text-right font-zain space-y-2 w-[80%] lg:w-1/2 px-8" dir="rtl">
            <h2 className="text-2xl font-extrabold text-[#4B494C]">ما مدى اهتمامك في شراء انواع نادرة من الورود ؟
لمنزلك دون الحاجه الى الذهاب بنفسك والإنتظار؟</h2>
            <p className="text-[#909090] text-lg md:text-xl">(معرفة اهتمام المشاركين في اقتناء انواع نادرة من الورد)</p>
            <p className="text-[#6A1A7D] text-lg md:text-xl font-bold">8 إجابات</p>
        </div>
        <div className="flex justify-center py-4">
            <img src="/assets/rose/q7.svg" alt="Survey Chart" className="" />
        </div>
    </div>
        </div>
    </div>
    </section>
  );
};

export default SurveyQuestionsSection;
