const DesignSystemSection = () => {
    const icons=["trash.svg","home.svg","heart.svg","settings.svg","cart.svg","grid.svg","g_translate.svg","rose_icon.svg","share.svg","add_to_cart.svg"];
//   const sketches=[1,2,3,4,5,6,7];
    const images = Array.from({ length: 7 }, (_, i) => `/assets/rose/sketch${i + 1}.svg`);

    return (
    <section className='max-w-7xl mx-auto px-4 py-16 relative'>
        <div className="w-full mx-auto gradient-rose-box py-8 flex  flex-col justify-center items-center" dir="rtl">
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2">نظام التصميم</h2>
                <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2 pb-2">Design System</h2>
            </div>
            {/* Color section */}
            <div className="w-full flex flex-col">
                {/* Title Part */}
                <div className="w-full flex flex-col justify-center items-center bg-white border border-[#D14D72] border-2 my-4">
                    <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2">Colors </h2>
                </div> 
                <div className="flex justify-around py-2">
                    <img className="w-1/4 md:w-1/5" src="/assets/rose/grey_rose.svg"/>
                    <img className="w-1/4 md:w-1/5" src="/assets/rose/pink_rose.svg"/>
                    <img className="w-1/4 md:w-1/5" src="/assets/rose/purple_rose.svg"/>
                </div>

            </div>
            {/* Font section */}
            <div className="w-full flex flex-col">
                {/* Title Part */}
                <div className="w-full flex flex-col justify-center items-center bg-white border border-[#D14D72] border-2 my-4">
                    <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2">Font </h2>
                </div> 
                <div className="flex md:flex-row flex-col justify-around py-2 md:space-y-0 space-y-4 items-center">
                    <p className="text-[#6A1A7D] font-extrabold font-zain text-4xl md:text-6xl px-2">Zain Font</p>
                   
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 items-center">
                        <div className="text-left">
                            <span className="text-[#909090] font-normal text-xl md:text-2xl">Regular</span>
                        </div>
                        <div className="text-right">
                            <span className="text-[#D14D72] font-normal text-3xl md:text-4xl" dir="rtl">أغنية الورد</span>
                        </div>  
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 items-center">
                        
                        <div className="text-left">
                            <span className="text-[#909090] font-bold text-xl md:text-2xl">Bold</span>
                        </div>
                        <div className="text-right">
                            <span className="text-[#D14D72] font-bold text-3xl md:text-4xl" dir="rtl">أغنية الورد</span>
                        </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 items-center">
                        <div className="text-left">
                            <span className="text-[#909090] font-extrabold text-xl md:text-2xl">Extra Bold</span>
                        </div>
                        <div className="text-right">
                            <span className="text-[#D14D72] font-extrabold text-3xl md:text-4xl" dir="rtl">أغنية الورد</span>
                        </div>
                        </div>
                    </div>

                    <img className="w-1/4 md:w-1/5" src="/assets/rose/arabic.svg"/>
                </div>

            </div>
            {/* Icons */}
            <div className="w-full flex flex-col">
                 {/* Title Part */}
                <div className="w-full flex flex-col justify-center items-center bg-white border border-[#D14D72] border-2 my-4">
                    <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2">Icons</h2>
                </div> 
                {/* all icons */}
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 lg:gap-0 p-4 lg:px-12 py-12">
                    {icons.map((icon, index) => (
                        <div key={index} className="flex justify-center items-center">
                        <img src={`/assets/rose/${icon}`} alt={icon} className="w-10 h-10" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Component */}
            <div className="w-full flex flex-col">
                 {/* Title Part */}
                <div className="w-full flex flex-col justify-center items-center bg-white border border-[#D14D72] border-2 my-4">
                    <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2">Components</h2>
                </div> 
                {/* all Component */}
               <div className="flex flex-col py-12 px-4 space-y-8">
                    {/* first row */}
                    <div className="flex md:flex-row flex-col space-x-4 md:space-y-0 space-y-4">
                        <div className="md:flex hidden items-center gap-4">
                            <img src="/assets/rose/comp11.svg" className="h-auto" />
                            <img src="/assets/rose/comp12.svg" className="h-auto" />
                            <img src="/assets/rose/comp13.svg" className="h-auto" />
                            <img src="/assets/rose/comp14.svg" className="h-auto" />
                        </div>
                        {/* small screen */}
                        <div className="flex-1 grid grid-cols-4 gap-4  items-center md:hidden">
                            <img src="/assets/rose/comp11.svg" className="h-auto" />
                            <img src="/assets/rose/comp12.svg" className="h-auto" />
                            <img src="/assets/rose/comp13.svg" className="h-auto" />
                            <img src="/assets/rose/comp14.svg" className="h-auto" />
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4 px-2 items-center">
                            <img src="/assets/rose/comp15.svg" className="w-full h-auto object-contain" />
                            <img src="/assets/rose/comp16.svg" className="w-full h-auto object-contain" />
                        </div>
                    </div>

                    {/* second row */}
                    <div className="flex md:flex-row flex-col space-x-4 md:space-y-0 space-y-4  justify-center md:items-center items-center md:pr-4 ">
                        <div className="flex justify-center items-center">
                            <img src="/assets/rose/comp21.svg" className="h-auto pl-4" />
                            <img src="/assets/rose/comp22.svg" className="h-auto  " />
                        </div>
                        <div className=" flex-1 grid grid-cols-2 gap-4 px-2 items-center">
                            <img src="/assets/rose/comp23.svg" className="md:h-auto  pl-4" />
                            <img src="/assets/rose/comp24.svg" className="md:h-auto" />
                        </div>
                    </div>
                    {/* third row */}
                    <div className="flex md:flex-row flex-col space-x-4 md:space-y-0 space-y-4  justify-center md:items-center items-center md:pr-4 ">
                        <div className=" flex-1 grid grid-cols-2 gap-4 px-2 items-center">
                            <img src="/assets/rose/comp31.svg" className="md:h-auto  pl-4" />
                            <img src="/assets/rose/comp32.svg" className="md:h-auto" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/assets/rose/comp33.svg" className="h-auto pl-4" />
                            <img src="/assets/rose/comp34.svg" className="h-auto  " />
                        </div>
                    </div>
                    {/* forth row */}
                    <div className="flex md:flex-row flex-col space-x-4 md:space-y-0 space-y-4  justify-center md:items-center items-center md:pr-4 ">
                        <div className=" flex-1 grid md:grid-cols-3 grid-cols-1 gap-4 px-2 items-center">
                            <img src="/assets/rose/comp41.svg" className="md:h-auto  pl-4" />
                            <img src="/assets/rose/comp42.svg" className="md:h-auto" />
                            <img src="/assets/rose/comp43.svg" className="md:h-auto" />
                        </div>
                        
                    </div>

                </div>                              
            </div>
            {/* Mobile/PC grid */}
            <div className="w-full flex flex-col">
                 {/* Title Part */}
                <div className="w-full flex flex-col justify-center items-center bg-white border border-[#D14D72] border-2 my-4">
                    <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2">Mobile/Web Grid</h2>
                </div> 
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
                    <img src="/assets/rose/pc_grid.svg"/>
                    <img src="/assets/rose/phone_grid.svg"/>
                </div>
            
            </div>
            {/* sketches */}
            <div className="w-full flex flex-col bg-white relative ">
                {/* Lines... */}
                <div className="flex flex-row justify-between">
                    {/* Right line */}
                    <div className="h-full space-x-2 flex">
                        <div className="w-[3px] h-[100vh] bg-[#D14D72] ml-2"></div>
                        <div className="w-[3px] h-[80vh] bg-[#6A1A7D]"></div>
                        <div className="w-[3px] h-[70vh] bg-[#D14D72]"></div>
                    </div>
                    
                    
                    {/* Body */}
                    <div className="py-6">
                        <div className="py-6 flex flex-col items-center justify-center">
                            <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2">النمــاذج الورقية</h2>
                            <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2"> Sketchs</h2>
                        </div>
                    
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                            {images.map((src, index) => {
                                // If it's the last item and the number of items is odd
                                const isLast = index === images.length - 1;
                                const isOdd = images.length % 2 !== 0;

                                return (
                                <div
                                    key={index}
                                    className={
                                    isLast && isOdd
                                        ? 'md:col-span-2 flex justify-center' // Center the last item on medium screens
                                        : ''
                                    }
                                >
                                    <img src={src} alt={`Sketch ${index + 1}`} className="w-full" />
                                </div>
                                );
                            })}
                        </div>
                    </div>
                    {/* left line */}
                     <div className="h-full flex">
                        <div className="w-[3px] h-[70vh] bg-[#D14D72] ml-2"></div>
                        <div className="w-[3px] h-[80vh] bg-[#6A1A7D]"></div>
                        <div className="w-[3px] h-[100vh] bg-[#D14D72] mr-2"></div>
                    </div>
                </div>
                

            </div>
            {/* wireframe */}
             <div className="w-full flex flex-col gradient-rose-box ">

                <div className="py-6">
                        <div className="py-6 flex flex-col items-center justify-center">
                            <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2"> التخطيط الشبكي</h2>
                            <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2"> Mid-Fidelity Wireframe</h2>
                        </div>
                </div>
                <div className="w-full grid grid-cols-1 gap-6 justify-items-center">
                    <img src="/assets/rose/wireframe1.svg"/>
                    <img src="/assets/rose/wireframe2.svg"/>
                    <img src="/assets/rose/wireframe3.svg"/>
                </div>

             </div>

            

           
        </div>
    </section>
    );
}

export default DesignSystemSection;