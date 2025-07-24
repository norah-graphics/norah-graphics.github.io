
const EmpathyMapSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 relative'>
        <div className="w-full mx-auto relative border border-[#D14D72] rounded-2xl relative" dir="rtl">
            <div className="w-fit flex flex-col absolute  bg-[#F3F3F3] px-4 rounded-full -top-10 -translate-x-1/2 left-1/2 py-2">
                <h2 className="text-[#6A1A7D] font-extrabold font-merriweather text-2xl md:text-3xl px-2">خريطة التعاطف</h2>
                <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2 pb-2">Empathy map</h2>
            </div>
        
      {/* Center Image for Small Screens */}
      <div className="flex md:hidden justify-center mb-6 mt-10">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
          <img
            src="/assets/rose/noran_circle.svg"
            alt="شخصية المستخدم"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Center Lines and Image for Medium+ Screens */}
      <div className="hidden md:block absolute inset-0 z-0">
        <div className="absolute top-[7%] bottom-[7%] left-1/2 transform -translate-x-1/2 w-px border-l-2 border-dashed border-[#D14D72]"></div>
        <div className="absolute left-[5%] right-[5%] top-1/2 transform -translate-y-1/2 h-px border-t-2 border-dashed border-[#D14D72]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
            <img
              src="/assets/rose/noran_circle.svg"
              alt="شخصية المستخدم"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 relative z-10">
        {/* Top right */}
        <div className="space-y-4 md:p-12 px-4">
          <h2 className="font-merriweather text-[#6A1A7D] text-xl md:text-2xl font-bold">ما يفكر به:</h2>
          <ul className="list-disc pr-5 text-[#686565] font-zain font-bold text-lg md:-mr-6">
            <li>تتساءل عن كيف يمكنها شراء باقة ورد قبل المناسبة بوقت قصير</li>
            <li>
              تفكر كيف تتواصل مع متجر الورد وضمان تنسيق الباقة  بالشكل المرغوب
            </li>
            <li>تفكر هل المتجر فهم تطلعاتها في الباقة ام لا</li>
          </ul>
        </div>

        {/* Top left */}
        <div className="space-y-4 md:p-12 px-4">
          <h2 className="font-merriweather text-[#6A1A7D] text-xl md:text-2xl font-bold">ما يقوله:</h2>
          <ul className="list-disc pr-5 text-[#686565] font-zain font-bold text-lg md:-mr-6">
            <li>“احتاج إلى متجر ورد لديه عروض توصيل جيدة”</li>
            <li>
             “اريد ان اتواصل مع موظف المتجر وتوضيح الفكرة التي اريدها في هديتي” 
            </li>
            <li>
                “وقتي ضيق جدًا ولا اريد الانتظار عند المتجر لأكثر من ٣٠ دقيقه لعمل ما اريد”
            </li>
          </ul>
        </div>

        {/* Bottom Left */}
        <div className="space-y-4 md:p-12 px-4">
          <h2 className="font-merriweather text-[#6A1A7D] text-xl md:text-2xl font-bold">ما يفعله:</h2>
          <ul className="list-disc pr-5 text-[#686565] font-zain font-bold text-lg md:-mr-6">
            <li>
              تتواصل مع اقرب متاجر الورود التي بقربها وتبحث عن فرصة توصيلها للمنزل
            </li>
            <li>
              تبحث عن تطبيقات توفر امكانية بالتوصيل في نفس اليوم
            </li>
            <li>
              تسأل اصدقائها وزملائها عن افضل المنصات التي توفر خدمة توفير ازهار نادرة وموسمية
            </li>
          </ul>
        </div>

        {/* Bottom Right */}
        <div className="space-y-4 md:p-12 px-4">
          <h2 className="font-merriweather text-[#6A1A7D] text-xl md:text-2xl font-bold">ما يشعر به:</h2>
          <ul className="list-disc pr-5 text-[#686565] font-zain font-bold text-lg md:-mr-6">
            <li>
                تشعر بالقلق من ضيق الوقت عند انتـظار المتجر لتنسيق الورد
            </li>
            <li>
              تشعر بالإحباط عن وصول باقة مختلفة عن المرغوب
            </li>
            <li>
                تشعر بالحماس  في عكس مشاعر المحبة التي بداخلها وايصالها مناسبتها المنتظرة بمثالية تامة
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    </section>
  );
}

export default EmpathyMapSection;