import React from 'react';

const BrandingSection = () => {

  return (
    <section className='max-w-6xl mx-auto px-4 py-16'>
    <div className='flex justify-center py-16'>
            <img src='/assets/branding.svg'/>
    </div>
<div className="relative bg-white  rounded-br-[3.5rem] rounded-bl-[3.5rem] rounded-tr-[3.5rem] rounded-tl-[3.5rem] border border-[#3876BF]"
        style={{
          background: 'linear-gradient(120deg,   rgba(64, 207, 197, 0.25)  0%, rgba(235, 240, 243, 0) 50%, rgba(0, 160, 255, 0.25) 100%)'
        }}
      >
     <div className='flex justify-center'> 
                    <img src='/assets/hanaLogo.svg'/>
        </div>
        <div className='py-4'>
            {/* Paragraphs */}
            <div className='text-right font-inter font-regular text-xl px-12' dir='rtl'>
            <p>
                في زحمة الحياة، كثير ينسى نفسه، ويمكن ينسى حتى دواءه...
            </p>
            <p>
                ومن هنا، جا اسم التطبيق: "حنّا معاك".
            </p>
            <p>
                اخترنا الاسم لأنه ما هو بس اسم تطبيق، هو وعد.
            </p>

            <p>
                وعد إنك ما راح تكون لحالك، وإن فيه شي يوقف معك بلحظة احتياجك، يذكّرك، ويطمنك.
            </p>
            </div>

            <div className='text-center font-inter font-semibold text-2xl text-[#1F6BFF] py-6 px-12 mt-8 mb-6 md:mt-12 md:mb-8' dir='rtl' style={{
                  background: 'linear-gradient(to left, rgba(255, 255, 255, 0.8) 13%, rgba(235, 240, 243, 0.4) 20%,  rgba(235, 240, 243, 0.4) 80%, rgba(255, 255, 255, 0.8) 90%)'
            }}>
                <p>
                    "حنّا معاك" جملة نقولها من القلب، وفيها دفء المرافق، وصدق العناية<br/>
وحتى لو كانت من تطبيق!.
                </p>
            </div>

              <div className='text-center font-inter font-semibold text-4xl text-[#40CFC5] py-4 px-12' dir='rtl'>
                <p>
                   يتكوّن من 3 عناصر رمزية:
                </p>
                <div className='px-12'>
                  
                  <img src='/assets/hanamaak_items.svg' className='py-2 md:px-16'/>

                </div>
            </div>
        </div>   
      </div>
    </section>
  );
};

export default BrandingSection;