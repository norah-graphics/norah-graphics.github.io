
const SwotSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 relative'>
        <div className="w-full mx-auto relative rounded-2xl relative" dir="rtl">

        
      {/* Center Image for Small Screens */}
      <div className="flex md:hidden justify-center mb-6 mt-10">
        <div className="w-40 h-40 ">
          <img
            src="/assets/rose/swot.svg"
            alt="SWOT"
            className="w-full h-full "
          />
        </div>
      </div>

      {/* Center Lines and Image for Medium+ Screens */}
      <div className="hidden md:block absolute inset-0 z-0">
       {/* LINES */}
         <div>
        {/* Vertical Line */}
       <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-4">
            {/* Line itself */}
            <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-[#909090] z-10 swot-box-shadow "></div>

            {/* Top Circle - Shadow layer (below line) */}
            <div className="absolute top-0 left-[13px] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#909090] rounded-full swot-box-shadow z-0"></div>

            {/* Top Circle - Clean layer on top */}
            <div className="absolute top-0 left-[13px] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#909090] rounded-full z-20"></div>

            {/* Bottom Circle - Shadow layer (below line) */}
            <div className="absolute bottom-0 left-[13px] transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-[#909090] rounded-full swot-box-shadow z-0"></div>

            {/* Bottom Circle - Clean layer on top */}
            <div className="absolute bottom-0 left-[13px] transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-[#909090] rounded-full z-20"></div>
            </div>

        
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-4">
            {/* Line (on top of shadow layers) */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-[3px] bg-[#909090] swot-box-shadow  z-10"></div>

            {/* Left Circle - Shadow layer (below line) */}
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#909090] rounded-full swot-box-shadow z-0"></div>

            {/* Left Circle - Clean layer (above line) */}
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#909090] rounded-full z-20"></div>

            {/* Right Circle - Shadow layer (below line) */}
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#909090] rounded-full swot-box-shadow z-0"></div>

            {/* Right Circle - Clean layer (above line) */}
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#909090] rounded-full z-20"></div>
        </div>

         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-40 h-40 ">
            <img
              src="/assets/rose/swot.svg"
              alt="SWOT"
              className="w-full h-full"
            />
          </div>
        </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 relative z-10">
        {/* Top right */}
        <div className="space-y-4 md:p-12 px-4 flex flex-col justify-center items-center">
          <h2 className="font-merriweather text-[#6A1A7D] text-xl md:text-2xl font-bold">Weaknesses</h2>
          <ul className=" pr-5 text-[#686565] font-zain font-bold text-lg text-center">
            <li><span className="px-2">•</span>صعوبة في إقناع المتاجر بالتسجيل في التطبيق </li>
            <li><span className="px-2">•</span>
              تفاوت مستوى الجودة والخدمة بين المتاجر المختلفة
            </li>
            <li><span className="px-2">•</span>مشاكل تنسيق أو التزام بالمواعيد من بعض البائعين</li>
            <li><span className="px-2">•</span>بعض المتاجر من الممكن تواجه صعوبة في التعامل مع الطلبات الإلكترونية وقد تحتاج الى تدريبات مكثفة </li>
          </ul>
        </div>

        {/* Top left */}
        <div className="space-y-4 md:p-12 px-4 flex flex-col justify-center items-center">
          <h2 className="font-merriweather text-[#6A1A7D] text-xl md:text-2xl font-bold">Strengths</h2>
          <ul className=" pr-5 text-[#686565] font-zain font-bold text-lg text-center">
            <li><span className="px-2">•</span>التطبيق يربط المستخدمين بمتاجر الورد القريبة مباشرة </li>
            <li><span className="px-2">•</span>
             مرونة عالية في اختيار الطلب (تصميم شخصي)
            </li>
            <li><span className="px-2">•</span>
                خيارات توصيل أو استلام في نفس اليوم حسب الرغبة
            </li>
            <li><span className="px-2">•</span>
                يدعم المتاجر الصغيرة ويخلق تجربة محلية
            </li>
            <li><span className="px-2">•</span>
                سرعة في الخدمة وتوفير الوقت للمستخدم
            </li>
          </ul>
        </div>

        {/* Bottom Left */}
        <div className="space-y-4 md:p-12 px-4 flex flex-col justify-center items-center">
          <h2 className="font-merriweather text-[#6A1A7D] text-xl md:text-2xl font-bold">Opportunities</h2>
          <ul className=" pr-5 text-[#686565] font-zain font-bold text-lg text-center">
            <li><span className="px-2">•</span>
              توجه كبير نحو دعم المنتجات المحلية والشراء من المتاجر القريبة
            </li>
            <li><span className="px-2">•</span>
              إضافة نظام تقييم ومراجعات يساعد في بناء الثقة بين العميل والمتجر
            </li>
            <li><span className="px-2">•</span>
              استهداف المواسم  (عيد الحب، يوم الأم، تخرج...) قد يساعد على مبيعات عالية لمتاجر الورد
            </li>
            <li><span className="px-2">•</span>
                 التوسع لخدمات إضافية مثل توصيل الهدايا من متاجر الورد الى الشخص المهدى إليه
            </li>
          </ul>
        </div>

        {/* Bottom Right */}
        <div className="space-y-4 md:p-12 px-4 flex flex-col justify-center items-center">
          <h2 className="font-merriweather text-[#6A1A7D] text-xl md:text-2xl font-bold">Threats</h2>
          <ul className=" pr-5 text-[#686565] font-zain font-bold text-lg text-center">
            <li><span className="px-2">•</span>
                دخول منافسين كبار بنفس الفكرة ممكن يصعب المنافسة 
            </li>
            <li><span className="px-2">•</span>
                مشاكل في توصيل الطلبات في وقت الذروة أو الأيام المزدحمة
            </li>
            <li><span className="px-2">•</span>
                ارتفاع الأسعار من بعض المتاجر يضعف التنافسية
            </li>
            <li><span className="px-2">•</span>
                مشاكل تقنية أو ضعف الإنترنت عند المتاجر قد  تسبب تأخير في الطلبات او المحادثات المباشرة من الزبون
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    </section>
  );
}

export default SwotSection;