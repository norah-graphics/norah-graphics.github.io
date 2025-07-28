import SemiCircleHeader from "../shared_comps/semi_circle_header";

const AppInterfaceSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 pb-16 relative'>
    <div className="flex flex-col justify-center items-center lg:px-0 md:px-4 px-4">
      <SemiCircleHeader title="واجهات التطبيق" subtitle="Application interfaces" />
      <div className="py-8 grid md:grid-cols-2 grid-cols-1">
       {/* first */}
        <div className="flex order-1 md:order-1">
            <div className="flex flex-col space-y-1 md:space-y-3 items-center md:items-end justify-center">
                <div className="flex flex-row justify-start items-start">
                    <div className="flex flex-col space-y-1 md:space-y-3 items-center md:items-end justify-center">
                      <div className="flex">
                        <p className="font-zain font-bold text-[#6A1A7D] lg:text-3xl text-2xl md:pt-0 pt-4">واجهات التعريف</p>
                        <img src="/assets/rose/small_rose.svg" className="px-4 md:hidden block"/>
                      </div>
                        
                        <p className="font-zain font-bold text-[#D14D72] lg:text-lg text-base text-center md:text-end md:pl-[20%] lg:pl-[30%]">
                    تُقدم تجربة إرشادية لتوضيح خدمات التطبيق
للمستخدمين، لضمان بداية مثالية وامتيازيه لجميع المستخدمين المحتملين  
                </p>
                    </div>
                    <img src="/assets/rose/small_rose.svg" className="pl-4 hidden md:block"/>
                </div>
                
            </div>
        </div>
        <img src="/assets/rose/interface1.svg" className="order-2 md:order-2"/>
        
        {/* second */}
        <div className="flex md:-mt-20 lg:-mt-24 order-3 md:order-4">
            <div className="flex flex-col  space-y-1 md:space-y-3 items-center md:items-start justify-center">
                <div className="flex flex-row justify-start items-start">
                    <img src="/assets/rose/small_rose.svg" className="pr-4 hidden md:block"/>
                    <div className="flex flex-col  space-y-1 md:space-y-3 items-center md:items-start justify-center">
                        <div className="flex">
                          <p className="font-zain font-bold text-[#6A1A7D] lg:text-3xl text-2xl md:pt-0 pt-4"> واجهات تسجيل الدخول</p>
                          <img src="/assets/rose/small_rose.svg" className="px-4 md:hidden block"/>
                        </div>
                        
                        <p className="font-zain font-bold text-[#D14D72] lg:text-lg text-base text-center md:text-start">
                    واجهات تسجيل الدخول تلي الواجهات التعريفية لضمان تسجيل المستخدمين وحفظ موقع المستخدم لإيجاد مواقع متاجر الورد القريبة منه
                </p>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <img src="/assets/rose/interface2.svg" className="md:-mt-20 lg:-mt-24 order-4 md:order-3"/>

        {/* third */}
        <div className="flex md:-mt-20 lg:-mt-24 order-5 md:order-5">
            <div className="flex flex-col space-y-1 md:space-y-3 items-center md:items-end justify-center">
                <div className="flex flex-row items-start">
                    <div className="flex flex-col space-y-1 md:space-y-3 items-center md:items-end justify-center">
                        <div className="flex">
                          <p className="font-zain font-bold text-[#6A1A7D] lg:text-3xl text-2xl md:pt-0 pt-4"> واجهات الصفحة الرئيسية</p>
                          <img src="/assets/rose/small_rose.svg" className="px-4 md:hidden block"/>
                        </div>
                        
                        <p className="font-zain font-bold text-[#D14D72] lg:text-lg text-base text-center md:text-end md:pl-[20%] lg:pl-[30%]">
                            تشمل الصفحة الرئيسية جميع المحتويات الاساسية للتطبيق من الأفضل مبيعًا الى منتجات أغنية الورد ومتاجر الورد 
                        </p>
                    </div>
                    
                <img src="/assets/rose/small_rose.svg" className="pl-4 hidden md:block"/>
                </div>
                
            </div>
        </div>
        <img src="/assets/rose/interface3.svg" className="md:-mt-20 lg:-mt-24 order-6 md:order-6"/>
        
        {/* forth */}
        <div className="flex md:-mt-20 lg:-mt-24 order-7 md:order-8">
            <div className="flex flex-col  space-y-1 md:space-y-3 items-center md:items-start justify-center">
                <div className="flex flex-row items-start">
                    <img src="/assets/rose/small_rose.svg" className="pr-4 hidden md:block"/>
                    
                    <div className="flex flex-col  space-y-1 md:space-y-3 items-center md:items-start justify-center">
                        <div className="flex">
                          <p className="font-zain font-bold text-[#6A1A7D] lg:text-3xl text-2xl md:pt-0 pt-4"> واجهات منتجات أغنية الورد</p>
                        
                          <img src="/assets/rose/small_rose.svg" className="px-4 md:hidden block"/>
                        </div>
                        
                        <p className="font-zain font-bold text-[#D14D72] lg:text-lg text-base text-center md:text-start">
                            واجهات المنتجات تجمع كل المنتجات المحتملة للمستخدمين، حيث تأتي من المتاجر القريبة من موقع المستخدم
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
        <img src="/assets/rose/interface4.svg" className="md:-mt-20 lg:-mt-24 order-8 md:order-7"/>
        
        {/* Fifth */}
        <div className="flex md:-mt-20 lg:-mt-24 order-9 md:order-9">
            <div className="flex flex-col space-y-1 md:space-y-3 items-center md:items-end justify-center">
                <div className="flex flex-row items-start">
                    <div className="flex flex-col space-y-1 md:space-y-3 items-center md:items-end justify-center">
                        
                        <div className="flex">
                          <p className="font-zain font-bold text-[#6A1A7D] lg:text-3xl text-2xl md:pt-0 pt-4">واجهات متاجر الورود</p>
                          <img src="/assets/rose/small_rose.svg" className="px-4 md:hidden block"/>
                        </div>
                        <p className="font-zain font-bold text-[#D14D72] lg:text-lg text-base text-center md:text-end md:pl-[20%] lg:pl-[30%]">
                            متاجر الورود تربط المستخدم بجميع متاجر الورد القريبة من الموقع، حيث يمكنه تصفح المتاجر واتخاذ القرار في اكمال تجربة الشراء المتجر او البحث عن متجر آخر                
                        </p>
                        
                    </div>
                    
                    <img src="/assets/rose/small_rose.svg" className="pl-4 hidden md:block"/>
                </div>
                
            </div>
        </div>
        <img src="/assets/rose/interface5.svg" className="md:-mt-20 lg:-mt-24 order-10 md:order-10"/>
      </div>
      {/* Sixth */}
      <div className="py-4 relative">
        {/* Normal flex layout for small screens */}
        <div className="md:hidden p-2">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col space-y-1 items-center justify-center">
              <div className="flex">
                <p className="font-zain font-bold text-[#6A1A7D] lg:text-3xl text-2xl pt-4">واجهات تسجيل الدخول</p>
                <img src="/assets/rose/small_rose.svg" className="px-4 md:hidden block"/>
                        
              </div>
              
              <p className="font-zain font-bold text-[#D14D72] lg:text-lg text-base text-center">
                واجهات تسجيل الدخول تلي الواجهات التعريفية لضمان تسجيل المستخدمين وحفظ موقع المستخدم لإيجاد مواقع متاجر الورد القريبة منه
              </p>
            </div>
            <img src="/assets/rose/small_rose.svg" className="px-4 md:block hidden"/>
          </div>
        </div>
        <img src="/assets/rose/interface6.svg"/>
        
        

        {/* Positioned layout for medium screens and up */}
        <div className="hidden md:block absolute md:-top-4 md:right-0 lg:top-5 lg:right-[13vh] md:w-[55%] lg:w-[43%]">
          <div className="flex flex-row justify-start items-start">
            <img src="/assets/rose/small_rose.svg" className="px-4"/>
            <div className="flex flex-col space-y-1 md:space-y-3 items-center md:items-start justify-center">
              <p className="font-zain font-bold text-[#6A1A7D] lg:text-3xl text-2xl">واجهات تسجيل الدخول</p>
              <p className="font-zain font-bold text-[#D14D72] lg:text-lg text-base md:text-start">
                واجهات تسجيل الدخول تلي الواجهات التعريفية لضمان تسجيل المستخدمين وحفظ موقع المستخدم لإيجاد مواقع متاجر الورد القريبة منه
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Seventh */}
      <div className="py-8 relative w-full ">
        {/* Normal flex layout for small screens */}
        <div className="md:hidden p-2">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col space-y-1 items-center justify-center">
              <div className="flex">
                <p className="font-zain font-bold text-[#6A1A7D] lg:text-3xl text-2xl pt-4">  واجهات صمّم هديتك الأن</p>
                <img src="/assets/rose/small_rose.svg" className="px-4 md:hidden block"/>
              </div>
              
              <p className="font-zain font-bold text-[#D14D72] lg:text-lg text-base text-center">
                تتيح خدمة صمٌم هديتك الأن بالتواصل المباشر مع المتجر المختار وتنسيق هديتك تحت تطلباتك واختياراتك ومن ثم الدفع الإلكتروني واختيار توصيلها إليك او استلامها 
              </p>
            </div>
            <img src="/assets/rose/small_rose.svg" className="px-4 md:block hidden"/>
          </div>
        </div>
        <div className="flex w-full md:justify-start justify-center md:-mt-12">
          <img src="/assets/rose/interface7.svg"/>
        </div>
        
        

        {/* Positioned layout for medium screens and up */}
        <div className="hidden md:block absolute md:-top-2 md:right-0 lg:top-5 lg:right-[12%] md:w-[42%] lg:w-[40%]">
          <div className="flex flex-row justify-start items-start">
            <img src="/assets/rose/small_rose.svg" className="px-4 md:block hidden"/>
            <div className="flex flex-col space-y-1 md:space-y-3 items-center md:items-start justify-center">
              <div className="flex">
                <p className="font-zain font-bold text-[#6A1A7D] lg:text-3xl text-2xl">  واجهات صمّم هديتك الأن</p>
                <img src="/assets/rose/small_rose.svg" className="px-4 md:hidden block"/>
              </div>
              <p className="font-zain font-bold text-[#D14D72] lg:text-lg text-base md:text-start">
                تتيح خدمة صمٌم هديتك الأن بالتواصل المباشر مع المتجر المختار وتنسيق هديتك تحت تطلباتك واختياراتك ومن ثم الدفع الإلكتروني واختيار توصيلها إليك او استلامها 
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* eight */}
      <div className="py-8 relative w-full ">
        {/* Normal flex layout for small screens */}
        <div className="md:hidden p-2">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col space-y-1 items-center justify-center">
              <div className="flex">
                <p className="font-zain font-bold text-[#6A1A7D] lg:text-3xl text-2xl pt-4">واجهات الإعدادات</p>
                <img src="/assets/rose/small_rose.svg" className="px-4 md:hidden block"/>
              </div>
              
              <p className="font-zain font-bold text-[#D14D72] lg:text-lg text-base text-center">
                توفر  للمستخدم إمكانية التحكم في صفحته الشخصية وتعديل بياناته او تصفح الطلبات السابقه والحالية
              </p>
            </div>
            <img src="/assets/rose/small_rose.svg" className="px-4 md:bock hidden"/>
          </div>
        </div>
        <div className="flex w-full md:justify-end justify-center md:-mt-12 lg:-mt-[200px]">
          <img src="/assets/rose/interface8.svg"/>
        </div>
        
        

        {/* Positioned layout for medium screens and up */}
        <div className="hidden md:block absolute md:top-[17%] md:left-0 lg:top-[12%] lg:left-[12%] md:w-[43%] lg:w-[40%]">
          <div className="flex flex-row justify-start items-start">
            
            <div className="flex flex-col space-y-1 md:space-y-3 items-center md:items-end justify-center">
              <p className="font-zain font-bold text-[#6A1A7D] lg:text-3xl text-2xl">واجهات الإعدادات</p>
              <p className="font-zain font-bold text-[#D14D72] lg:text-lg text-base md:text-end">
                توفر  للمستخدم إمكانية التحكم في صفحته الشخصية وتعديل بياناته او تصفح الطلبات السابقه والحالية
              </p>
            </div>
            <img src="/assets/rose/small_rose.svg" className="px-4"/>
          </div>
        </div>
      </div>
    </div>

    </section>
    );
}

export default AppInterfaceSection;