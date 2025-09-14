import SideCircleLeft from "../comps/side_circle_left";
const ProjectOverViewSection = () => {
    
  const steps = [
    {
      id: 1,
      title: 'النماذج الأولية',
      icon: "/assets/rose/prototype.svg",
      description: ['Prototype','\u00A0','\u00A0']
    },
    {
      id: 2,
      title: 'التصميم',
      icon: "/assets/rose/design.svg",
      description: ['رسومات السكيتش', 'التصميم الهيكلي', 'التصميم المرئي']
    },
    {
      id: 3,
      title: 'الفكرة',
      icon: "/assets/rose/idea.svg",

      description: ['خريطة الموقع', 'تدفق المستخدم', 'هندسة المعلومات']
    },
    {
      id: 4,
      title: 'التعريف',
      icon: "/assets/rose/discription.svg",

      description: ['الشخصية', 'خريطة التعاطف', 'تحليل SWOT']
    },
    {
      id: 5,
      title: 'الاستكشاف',
      icon: "/assets/rose/discovery.svg",

      description: ['مقابلات المستخدم', 'الاستبيان', 'دراسة المنافسين']
    }
  ];

  const ArrowIcon = () => (
    <img src="/assets/rose/arrow_left.svg"   className="-rotate-90 sm:-rotate-90 md:rotate-0  py-8 md:py-0"
/>
    
  );

  return (

<section className="w-full md:py-16 py-12 md:h-screen flex items-center justify-center ">
<div className=" relative w-full">

<div className="pointer-events-none overflow-hidden absolute -translate-y-1/2 z-0  left-[-45rem] top-[20rem]">
          <img className="w-30 h-30 "src='/assets/circle.svg'/>

  </div>  
<div className="relative w-full flex justify-center">
  {/* Container for pink box and purple line */}
  <div className="relative w-full flex justify-center">
  {/* Purple line centered behind pink box */}
  <div className="absolute top-1/2 left-0 w-full h-[17px] bg-[#6A1A7D] -translate-y-1/2 z-0" />

  {/* Pink rounded box */}
  <div className="relative z-10 rounded-full w-[90%] md:w-full px-6 sm:px-10 md:py-6 py-2 grid grid-cols-3 bg-[#FFC4D5] md:max-w-5xl">
    <div className="text-center">
      <div className="text-lg sm:text-lg md:text-2xl lg:text-3xl font-bold font-inter text-[#6A1A7D]">60+</div>
      <div className="text-base font-medium text-[#303030] font-inter">Screens</div>
    </div>

    <div className="text-center">
      <div className="text-lg sm:text-lg md:text-2xl lg:text-3xl font-bold text-[#6A1A7D] font-inter">3 Months</div>
      <div className="text-base font-medium text-[#303030] font-inter">Timeline</div>
    </div>

    <div className="text-center">
      <div className="text-lg md:text-2xl lg:text-3xl font-bold text-[#6A1A7D] font-inter">Project</div>
      <div className="text-base font-medium text-[#303030] font-inter">Mobile/Landing Page/Dashboard</div>
    </div>
  </div>
</div>

</div>

{/* White box below and behind pink box */}
<div className="px-6">
    <div className="relative -mt-5 w-full bg-white border border-[#6A1A7D] rounded-3xl z-0 px-4 pt-8" >
    <div className="flex justify-between   border-l-[6px] border-r-[6px] border-[#D14D72]">
        <p className="text-[#6A1A7D] font-zain font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl mx-2">
            Design process
        </p>
        <p className="text-[#6A1A7D] font-zain font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl mx-2">
            عملية التصميم 
        </p>
    </div>
    <div className="w-full p-6 " dir="ltr">
    <div className="flex  flex-col-reverse md:flex-row items-center justify-between">

        {/* Step 1 */}
        <div>
        <div className="flex flex-col items-center text-center min-w-0 flex-1">
            {/* Icon */}
            <div className="mb-4">
            <img src={steps[0].icon} alt={steps[0].title} className="" />
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-xl lg:text-2xl font-extrabold text-[#6A1A7D] font-zain mb-2">
            {steps[0].title}
            </h3>
            
            
            
            {/* Description */}
            <div className="space-y-1">
            {steps[0].description.map((desc, descIndex) => (
                <p key={descIndex} className="text-base md:text-lg lg:text-xl text-[#706D6D]">
                {desc}
                </p>
            ))}
            </div>
        </div>
        </div>
        <ArrowIcon/>

        {/* Step 2 */}
        <div>
        <div className="flex flex-col items-center text-center min-w-0 flex-1">
            {/* Icon */}
            <div className="mb-4">
            <img src={steps[1].icon} alt={steps[1].title} className="" />
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-xl lg:text-2xl font-extrabold text-[#6A1A7D] font-zain mb-2">
            {steps[1].title}
            </h3>
            
           
            
            {/* Description */}
            <div className="space-y-1">
            {steps[1].description.map((desc, descIndex) => (
                <p key={descIndex} className="text-base md:text-lg lg:text-xl text-[#706D6D]">
                {desc}
                </p>
            ))}
            </div>
        </div>
        </div>
        <ArrowIcon/>

        {/* Step 3 */}
        <div>
        <div className="flex flex-col items-center text-center min-w-0 flex-1">
            {/* Icon */}
            <div className="mb-4">
            <img src={steps[2].icon} alt={steps[2].title} className="" />
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-xl lg:text-2xl font-extrabold text-[#6A1A7D] font-zain mb-2">
            {steps[2].title}
            </h3>
            
            
            
            {/* Description */}
            <div className="space-y-1">
            {steps[2].description.map((desc, descIndex) => (
                <p key={descIndex} className="text-base md:text-lg lg:text-xl text-[#706D6D]">
                {desc}
                </p>
            ))}
            </div>
        </div>
        </div>
        <ArrowIcon/>

        {/* Step 4 */}
        <div>
        <div className="flex flex-col items-center text-center min-w-0 flex-1">
            {/* Icon */}
            <div className="mb-4">
            <img src={steps[3].icon} alt={steps[3].title} className="" />
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-xl lg:text-2xl font-extrabold text-[#6A1A7D] font-zain mb-2">
            {steps[3].title}
            </h3>
            
            
            
            {/* Description */}
            <div className="space-y-1">
            {steps[3].description.map((desc, descIndex) => (
                <p key={descIndex} className="text-base md:text-lg lg:text-xl text-[#706D6D]">
                {desc}
                </p>
            ))}
            </div>
        </div>
        </div>
        <ArrowIcon/>


        {/* Step 5 */}
        <div>
        <div className="flex flex-col items-center text-center min-w-0 flex-1">
            {/* Icon */}
            <div className="mb-4">
            <img src={steps[4].icon} alt={steps[4].title} className="" />
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-xl lg:text-2xl font-extrabold text-[#6A1A7D] font-zain mb-2">
            {steps[4].title}
            </h3>
                        
            {/* Description */}
            <div className="space-y-1">
            {steps[4].description.map((desc, descIndex) => (
                <p key={descIndex} className="text-base md:text-lg lg:text-xl text-[#706D6D]">
                {desc}
                </p>
            ))}
            </div>
        </div>
        </div>
    </div>
    </div>
    
</div>
</div>


</div>

 </section>
  );
};

export default ProjectOverViewSection;