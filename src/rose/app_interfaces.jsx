const AppInterfaceSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 pb-16 relative'>
    <div className="flex flex-col justify-center items-center lg:px-0 md:px-4 px-4">
      <div className="relative w-full flex justify-start flex-col">
        {/* Main curved container - outer border layer */}
        <div
          className="bg-[#6A1A7D] w-full relative flex justify-center items-center"
          style={{
            clipPath: 'ellipse(50% 100% at 50% 0%)',
            height: 'clamp(150px, 20vw, 200px)',
            aspectRatio: '3/1',
          }}
        >
          {/* Inner content layer - using percentage-based reduction for consistent border */}
          <div
            className="bg-[#d9d9d9] border border-t-[3px] border-[#6A1A7D] flex justify-center items-center"
            style={{
              clipPath: 'ellipse(calc(50% - 3px) calc(100% - 3px) at 50% 0%)',
              width: '100%',
              height: '100%',
              aspectRatio: '3/1',
            }}
          >
            {/* Centered content */}
            <div className="text-center flex flex-col justify-center items-center z-10">
              <h1
                className="text-[#D14D72] text-xl sm:text-2xl md:text-3xl font-extrabold font-zain mb-2"
                dir="rtl"
              >
                واجهات التطبيق
              </h1>
              <h2 className="text-[#D14D72] text-lg sm:text-2xl md:text-3xl font-extrabold font-zain">
                Application interfaces
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 grid md:grid-cols-2 grid-cols-1">
       {/* first */}
        <div className="flex order-1 md:order-1">
            <div className="flex flex-col space-y-1 md:space-y-3 items-center md:items-end justify-center">
                <div className="flex flex-row justify-start items-start">
                    <div className="flex flex-col space-y-1 md:space-y-3 items-center md:items-end justify-center">
                        <p className="font-zain font-bold text-[#6A1A7D] md:text-3xl text-2xl md:pt-0 pt-4">واجهات التعريف</p>
                        <p className="font-zain font-bold text-[#D14D72] md:text-lg text-xl text-center md:text-end md:pl-[20%] lg:pl-[30%]">
                    تُقدم تجربة إرشادية لتوضيح خدمات التطبيق
للمستخدمين، لضمان بداية مثالية وامتيازيه لجميع المستخدمين المحتملين  
                </p>
                    </div>
                    <img src="/assets/rose/small_rose.svg" className="pl-4"/>
                </div>
                
            </div>
        </div>
        <img src="/assets/rose/interface1.svg" className="order-2 md:order-2"/>
        
        {/* second */}
        <div className="flex md:-mt-20 lg:-mt-24 order-3 md:order-4">
            <div className="flex flex-col  space-y-1 md:space-y-3 items-center md:items-start justify-center">
                <div className="flex flex-row justify-start items-start">
                    <img src="/assets/rose/small_rose.svg" className="pr-4"/>
                    <div className="flex flex-col  space-y-1 md:space-y-3 items-center md:items-start justify-center">
                        <p className="font-zain font-bold text-[#6A1A7D] md:text-3xl text-2xl md:pt-0 pt-4"> واجهات تسجيل الدخول</p>
                        <p className="font-zain font-bold text-[#D14D72] md:text-lg text-xl text-center md:text-start">
                    واجهات تسجيل الدخول تلي الواجهات التعريفية لضمان تسجيل المستخدمين وحفظ موقع المستخدم لإيجاد مواقع متاجر الورد القريبة منه
                </p>
                    </div>
                    
                </div>
                <br/>
                
            </div>
        </div>
        <img src="/assets/rose/interface2.svg" className="md:-mt-20 lg:-mt-24 order-4 md:order-3"/>

        {/* third */}
        <div className="flex md:-mt-20 lg:-mt-24 order-5 md:order-5">
            <div className="flex flex-col space-y-1 md:space-y-3 items-center md:items-end justify-center">
                <div className="flex flex-row items-start">
                    <div className="flex flex-col space-y-1 md:space-y-3 items-center md:items-end justify-center">
                        <p className="font-zain font-bold text-[#6A1A7D] md:text-3xl text-2xl md:pt-0 pt-4"> واجهات الصفحة الرئيسية</p>
                        <p className="font-zain font-bold text-[#D14D72] md:text-lg text-xl text-center md:text-end md:pl-[20%] lg:pl-[30%]">
                            تشمل الصفحة الرئيسية جميع المحتويات الاساسية للتطبيق من الأفضل مبيعًا الى منتجات أغنية الورد ومتاجر الورد 
                        </p>
                    </div>
                    
                <img src="/assets/rose/small_rose.svg" className="pl-4"/>
                </div>
                
            </div>
        </div>
        <img src="/assets/rose/interface3.svg" className="md:-mt-20 lg:-mt-24 order-6 md:order-6"/>
        
        {/* forth */}
        <div className="flex md:-mt-20 lg:-mt-24 order-7 md:order-8">
            <div className="flex flex-col  space-y-1 md:space-y-3 items-center md:items-start justify-center">
                <div className="flex flex-row items-start">
                    <img src="/assets/rose/small_rose.svg" className="pr-4"/>
                    
                    <div className="flex flex-col  space-y-1 md:space-y-3 items-center md:items-start justify-center">
                        <p className="font-zain font-bold text-[#6A1A7D] md:text-3xl text-2xl md:pt-0 pt-4"> واجهات منتجات أغنية الورد</p>
                        
                        <p className="font-zain font-bold text-[#D14D72] md:text-lg text-xl text-center md:text-start">
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
                        <p className="font-zain font-bold text-[#6A1A7D] md:text-3xl text-2xl md:pt-0 pt-4">واجهات متاجر الورود</p>
                        <p className="font-zain font-bold text-[#D14D72] md:text-lg text-xl text-center md:text-end md:pl-[20%] lg:pl-[30%]">
                            متاجر الورود تربط المستخدم بجميع متاجر الورد القريبة من الموقع، حيث يمكنه تصفح المتاجر واتخاذ القرار في اكمال تجربة الشراء المتجر او البحث عن متجر آخر                
                        </p>
                        
                    </div>
                    
                    <img src="/assets/rose/small_rose.svg" className="pl-4"/>
                </div>
                
            </div>
        </div>
        <img src="/assets/rose/interface5.svg" className="md:-mt-20 lg:-mt-24 order-10 md:order-10"/>
      </div>
    </div>

    </section>
    );
}

export default AppInterfaceSection;