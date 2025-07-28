import ViewLinkButton from "../shared_comps/view_link_button";
const FutureImpactsSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 relative'>
        <div className="font-zain text-[#D14D72] flex flex-col w-full items-start" dir="rtl">
            <div className="w-full md:w-[70%]  lg:w-[60%]">
                <p className="md:text-3xl text-2xl font-extrabold pb-2">The Future Impact الأثر المستقبلي لتطبيق  ــــ</p>
                <p className="text-[#6A1A7E] font-extrabold md:text-2xl text-xl">1. على مستوى السوق (الاقتصادي):</p>
                <p className="text-[#D14D72] font-normal md:text-2xl text-xl">تحفيز قطاع الزهور المحلي:</p>
                <ul className="text-[#D14D72] font-normal md:text-2xl text-xl pr-3">
                <li>•&nbsp;&nbsp;&nbsp; التطبيق يفتح قناة بيع جديدة لأصحاب المحلات الصغيرة والمتوسطة.</li>
                <li>•&nbsp;&nbsp;&nbsp; يسهل على الموردين الوصول إلى جمهور أوسع دون الحاجة لتكاليف إضافية في التسويق.</li>
                </ul>
                <p className="text-[#6A1A7E] font-extrabold md:text-2xl text-xl">2. على المستوى البيئي والمستدام:</p>
                <p className="text-[#D14D72] font-normal md:text-2xl text-xl">تشجيع على استخدام مواد تغليف صديقة للبيئة:</p>
                <ul className="text-[#D14D72] font-normal md:text-2xl text-xl pr-3">
                <li>•&nbsp;&nbsp;&nbsp; مع الوعي البيئي المتزايد، يمكن للتطبيق اعتماد مواد تغليف قابلة لإعادة التدوير أو قابلة للتحلل.</li>
                </ul>
                <p className="text-[#D14D72] font-normal md:text-2xl text-xl"> إدارة ذكية للمخزون:</p>
                <ul className="text-[#D14D72] font-normal md:text-2xl text-xl pr-3">
                <li>•&nbsp;&nbsp;&nbsp; الطلب الرقمي يسهل التنبؤ بالكميات المطلوبة، ما يقلل من هدر الزهور.</li>
                </ul>
                <p className="text-[#6A1A7E] font-extrabold md:text-2xl text-xl"> 3. على مستوى تجربة المستخدم والتكنولوجيا:</p>
                <p className="text-[#D14D72] font-normal md:text-2xl text-xl"> استخدام الذكاء الاصطناعي لتخصيص التجربة:</p>
                <ul className="text-[#D14D72] font-normal md:text-2xl text-xl pr-3">
                <li>•&nbsp;&nbsp;&nbsp; يمكن للتطبيق أن يتعلم تفضيلات المستخدم ويقترح باقات أو رسائل مخصصة.</li>
                
                
                </ul>
                <p className="text-[#D14D72] font-normal md:text-2xl text-xl"> إدارة ذكية للمخزون:</p>
                <ul  className="text-[#D14D72] font-normal md:text-2xl text-xl pr-3">
                    <li>•&nbsp;&nbsp;&nbsp; من خلال دمج التقويمات (مثل Google Calendar)، يمكن للتطبيق اقتراح باقات أو إرسال تذكيرات تلقائية قبل المناسبات المهمة.</li>
                </ul>
                <div className="flex w-full py-4 md:justify-end justify-center">
                    <ViewLinkButton link="https://google.com"/>

                </div>
            </div>
        </div>
        <img src="/assets/rose/cta_phone.svg"
         className="absolute lg:top-4 top-10 lg:left-0 md:-left-6 bottom-0 w-1/2 sm:w-1/3 md:w-2/7 lg:w-2/5 object-contain  bottom-0 md:block hidden"
        />
       
    </section>
    );
}

export default FutureImpactsSection;