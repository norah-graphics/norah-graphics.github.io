import React from 'react';

const MobileDiagramsSections = () => {
   const images = [
    { src: "/assets/splash1.svg", alt: "splash1" },
    { src: "/assets/splash2.svg", alt: "splash2" },
    { src: "/assets/splash3.svg", alt: "splash3" },
    { src: "/assets/splash4.svg", alt: "splash4" },
  ];
    const auth = [
    { src: "/assets/auth1.svg", alt: "auth" },
    { src: "/assets/auth2.svg", alt: "auth2" },
    { src: "/assets/auth3.svg", alt: "auth3" },
    { src: "/assets/auth4.svg", alt: "auth4" },
  ];
    const screens = [
    { src: "/assets/setting_screen.svg", alt: "screens",text:"Setting Screen"},
    { src: "/assets/home_screen.svg", alt: "screens" ,text:"Home Screen"},
    { src: "/assets/health_screen.svg", alt: "screens",text:"Healthy exercise" },
    { src: "/assets/profile_screen.svg", alt: "screens",text:"Profile Screen" },
  ];
  return (
    <section className='max-w-6xl mx-auto px-4'>

        <div className="p-8">
         <div className="py-12">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#01A0FF] font-open-sans ">
               Splach Screen / On Boarding Screen
            </h2>
             <div className="grid gap-4 
                    grid-cols-1 
                    xs:grid-cols-2 
                    sm:grid-cols-2 
                    md:grid-cols-2 
                    lg:grid-cols-4 
                    xl:grid-cols-4">
        {images.map((image, index) => (
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
            </div>
        </div>

         <div className="p-8">
         <div className="py-12">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#01A0FF] font-open-sans ">
              Login Page/Sign Up Page
            </h2>
             <div className="grid gap-4 
                    grid-cols-1 
                    xs:grid-cols-2 
                    sm:grid-cols-2 
                    md:grid-cols-2 
                    lg:grid-cols-4 
                    xl:grid-cols-4">
        {auth.map((image, index) => (
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
            </div>
        </div>

    <div className="p-8">
         <div className="py-12">
             <div className="grid gap-4 
                    grid-cols-1 
                    xs:grid-cols-2 
                    sm:grid-cols-2 
                    md:grid-cols-2 
                    lg:grid-cols-4 
                    xl:grid-cols-4">
        {screens.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden duration-300 hover:scale-105 transition-all"
          >
            <p className='font-bold text-[#039BFF] text-2xl text-center' > {image.text}</p>
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full max-w-xs mx-auto h-auto object-contain"
            />
          </div>
        ))}
      </div>
            </div>
        </div>
        <img src='/assets/sketches.svg'/>
    </section>
  );
};

export default MobileDiagramsSections;