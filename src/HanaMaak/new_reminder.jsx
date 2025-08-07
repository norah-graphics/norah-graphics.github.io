import React from 'react';

const NewReminderSection = () => {
   const phones = [
    { src: "/assets/phone1.svg", alt: "phone1" },
    { src: "/assets/phone2.svg", alt: "phone2" },
    { src: "/assets/phone3.svg", alt: "phone3" },
    { src: "/assets/phone4.svg", alt: "phone4" },
    { src: "/assets/phone5.svg", alt: "phone5" },

  ];
   const phoneReminders = [
    { src: "/assets/phone_reminder1.svg", alt: "phone1" },
    { src: "/assets/phone_reminder2.svg", alt: "phone2" },
    { src: "/assets/phone_reminder3.svg", alt: "phone3" },
    { src: "/assets/phone_reminder4.svg", alt: "phone4" },
    { src: "/assets/phone_reminder5.svg", alt: "phone5" },

  ];
    const phoneAi = [
    { src: "/assets/ai1.svg", alt: "phone1" },
    { src: "/assets/ai2.svg", alt: "phone2" },
    { src: "/assets/ai3.svg", alt: "phone3" },
    { src: "/assets/ai4.svg", alt: "phone4" },
  ];
  
  return (
    <section className='max-w-6xl mx-auto px-4'>

        <div className="p-8">
         <div className="py-12">
           
            <div className="grid gap-4 
                    grid-cols-1 
                    xs:grid-cols-2 
                    sm:grid-cols-2 
                    md:grid-cols-2 
                    lg:grid-cols-4 
                    xl:grid-cols-5">
        {phones.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden duration-300 hover:scale-105 transition-all"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full max-w-xs mx-auto h-auto object-contain"
            />
          </div>
        ))}
            </div>
             <h2 className="text-3xl font-regular text-center text-[#40CFC4] font-noto-sans ">
               تجربة خدمة منبة تذكيري ذكي للأودية الطبية
            </h2>

            <div class="max-w-6xl mx-auto">
              {/* <!-- Fixed height container --> */}
              <div class=" flex items-center justify-center">
                  <div class="h-full flex items-center justify-center ">
                      
                      {/* <!-- Right text (Arabic) --> */}
                      <div class="flex-1 text-right">
                          <div class="text-[#01A0FF] font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-noto-sans">
                              <div>نقـــــــرات</div>
                              <div class="mt-1">لإتمـــــــام</div>
                              <div class="mt-1">لإتمـــــــام</div>
                          </div>
                      </div>
                      
                      {/* <!-- Center number 5 --> */}
                      <div class="flex-shrink-0 mx-4 sm:mx-8 flex items-center h-full">
  <div class="text-[20vh] sm:text-[15vh] lg:text-[18vh] xl:text-[21vh]
              leading-none bg-gradient-to-b from-[#40CEC4] to-[#01A0FF]  from-75% to-100%
              bg-clip-text text-transparent font-black select-none font-noto-sans">
    5
  </div>
</div>
                      
                      {/* <!-- Left text (Arabic) --> */}
                      <div class="flex-1 text-left">
                          <div class="text-[#01A0FF] font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-noto-sans">
                              <div>لبناء تجـربة</div>
                              <div class="mt-1">استخــــدام</div>
                              <div class="mt-1">ســلســــة</div>
                          </div>
                      </div>
                      
                  </div>
              </div>
            </div>
          </div>
        </div>

        
         <div className="py-8">
           
            <div className="grid gap-4 
                    grid-cols-1 
                    xs:grid-cols-2 
                    sm:grid-cols-2 
                    md:grid-cols-2 
                    lg:grid-cols-4 
                    xl:grid-cols-5">
        {phoneReminders.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden duration-300 hover:scale-105 transition-all"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full max-w-xs mx-auto h-auto object-contain"
            />
          </div>
        ))}
            </div>
             <h2 className="text-3xl font-regular text-center text-[#01A0FF] font-noto-sans ">
               تجربة خدمة منبة تذكيري ذكي للمواعيد الطبية عن طريق التسجيل الصوتي
            </h2>

            
          </div>

           <div className="py-8">
           
            <div className="grid gap-4 
                    grid-cols-1 
                    xs:grid-cols-2 
                    sm:grid-cols-2 
                    md:grid-cols-2 
                    lg:grid-cols-4 
                    xl:grid-cols-4">
        {phoneAi.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden duration-300 hover:scale-105 transition-all"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full max-w-xs mx-auto h-auto object-contain"
            />
          </div>
        ))}
            </div>
             <h2 className="md:text-3xl font-regular text-center text-[#01A0FF] font-noto-sans ">
             ربط المستخدم مع الذكاء الإصطناعي (الرفيق الذكي) بإنسجام مثالي عن طريق اختيار
الشخصية المرغوب التحدث معها
            </h2>

            
          </div>

    </section>
  );
};

export default NewReminderSection;