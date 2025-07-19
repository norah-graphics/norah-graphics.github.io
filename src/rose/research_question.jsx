import '../index.css'

const ResearchQuestionSection = ({source,alt}) => {
  return (
    <section className="py-8 md:py-16">
        <div className='gradient-topleft-bottomright w-full  md:mt-[8rem] py-4'>
           {/* first box */}
           <div className='flex my-8 items-center'>
                <div className='hidden md:flex flex-1 justify-center items-center'>
                    <img src='/assets/rose/mail.svg' alt='mail' className='w-[0%] md:w-[35%]'/>
                </div>
             <div className='flex border-t border-l border-b border-[#6A1A7D] rounded-l-full bg-[#FFC4D5] md:w-[65%] lg:w-[55%] md:h-[20%]' dir='rtl'>
                <div className='bg-white  rounded-l-full px-16 py-8 border-t border-l border-b border-[#D14D72] flex items-center'>
                    <p className='font-inter font-bold text-[#6A1A7D] text-3xl'>
                        سؤال <br/>البحث
                    </p>
                </div>
                <div className='px-8 flex justify-center items-center'>
                    <p className='font-inter font-semibold text-[#757575] text-lg'>كيف يمكن تحسين تجربة المستخدم في توفير تطبيق يوفر خدمات بيع الورد بطريقه مبتكرة ومصداقية عالية حيث ربط العميل مع متجر الورد دون حصول مشاكل لوجستيه وتطوير خدمات  لإقتناء الورود بأي وقت واي مكان</p>
                </div>

            </div>
           </div>
            {/* second box */}
             <div className='flex my-8 items-center'>
    <div className='flex justify-end border-t border-r border-b border-[#6A1A7D] rounded-r-full bg-[#FFC4D5] md:md:w-[65%] lg:w-[55%] md:h-[20%]' dir='rtl'>
        <div className='px-8 flex justify-center items-center'>
            <ul className="font-inter font-semibold text-[#757575] text-lg text-right  space-y-1 rtl" dir='rtl'>
            <li>• الأشخاص المهتمين بإقتناء الورود او اهداء الورود</li>
            <li>• اصحاب متاجر الورود او الموظفين في متاجر بيع الورد</li>
            </ul>
        </div>
        
        <div className='bg-white  rounded-r-full px-16 py-8 border-t border-r border-b border-[#D14D72] items-center flex'>
            <p className='font-inter font-bold text-[#6A1A7D] text-3xl text-center'>
                تجـنيد <br/> المشاركين
            </p>
        </div>
    </div>
    
    {/* Create a flex container for the remaining 45% space */}
    <div className='hidden md:flex flex-1 justify-center items-center'>
                    <img src='/assets/rose/phone_inbox.svg' alt='phone_inbox' className='w-[0%] md:w-[35%]'/>
                </div>
</div>
        </div>
    </section>
  );
};

export default ResearchQuestionSection;
