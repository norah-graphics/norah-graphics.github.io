import React, { useState, useEffect, useRef } from 'react';

const ProjectOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    months: 0,
    userFlow: 0,
    interviews: 0,
    screens: 0,
    personas: 0
  });

  const sectionRef = useRef(null);

  // Target values
  const targetValues = {
    months: 3,
    userFlow: 2,
    interviews: 180,
    screens: 30,
    personas: 2
  };

  // Custom durations (smaller values = faster)
  const animationDurations = {
    months: 700,
    userFlow: 700,
    interviews: 1500,
    screens: 1500,
    personas: 700
  };

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation function
  useEffect(() => {
    if (!isVisible) return;

    const animateValue = (key, targetValue, duration = 2000) => {
      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);

        setAnimatedValues(prev => ({
          ...prev,
          [key]: currentValue
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    };

    Object.entries(targetValues).forEach(([key, value]) => {
      animateValue(key, value, animationDurations[key]);
    });
  }, [isVisible]);

  return (
<section className='py-16'>
    <div className="justify-end relative" ref={sectionRef}>
      <div className="flex flex-col space-y-6">
        {/* Top pill - Timeline and Project */}
        <div className='flex items-center justify-center'>
          <div className="rounded-full w-[90%] sm:w-1/2 md:w-[35%] px-8 sm:px-16 py-4 flex items-center justify-center md:justify-end bg-[#82c9f5] space-x-4 sm:space-x-7">
            <div className="text-center">
              <div className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold font-inter text-[#F3F3F3]">
                {animatedValues.months} Months
              </div>
              <div className="text-base sm:text-base md:text-lg lg:text-lg font-medium font-inter text-[#303030]">
                TimeLine
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold font-inter text-[#F3F3F3]">
                Project
              </div>
              <div className="text-base sm:text-base md:text-lg lg:text-lg font-medium font-inter text-[#303030]">
                Mobile App
              </div>
            </div>
          </div>
        </div>

        {/* Bottom pill - All stats in one row */}
        <div className='flex items-center justify-center'>
          <div className="ml-4 sm:ml-16 md:ml-[20rem] rounded-full w-[95%] sm:w-1/2 md:w-[50%] px-6 sm:px-10 py-6 flex items-center justify-center md:justify-end bg-[#82c9f5] space-x-3 sm:space-x-7">
            
            {/* User Flow */}
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter  text-[#F3F3F3]">
                {animatedValues.userFlow}+
              </div>
              <div className="text-base sm:text-base md:text-lg lg:text-lg  font-medium text-[#303030] font-inter">
                User Flow
              </div>
            </div>

            {/* Interviews */}
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-[#F3F3F3] font-inter">
                {animatedValues.interviews}
              </div>
              <div className="text-base sm:text-base md:text-lg lg:text-lg  font-medium text-[#303030] font-inter">
                Interview
              </div>
            </div>

            {/* Screens */}
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-[#F3F3F3] font-inter">
                +{animatedValues.screens}
              </div>
              <div className="text-base sm:text-base md:text-lg lg:text-lg  font-medium text-[#303030] font-inter">
                Screens
              </div>
            </div>

            {/* Personas */}
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F3F3F3] font-inter">
                {animatedValues.personas}
              </div>
              <div className="text-base sm:text-base md:text-lg lg:text-lg  font-medium text-[#303030] font-inter">
                Persona
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Absolutely positioned SVG on top */}
      <div className="absolute top-[-5rem] left-[5%] transform h-[18rem] 
                      sm:top-[-5.5rem] sm:left-[8%] sm:h-[20rem]
                      md:top-[-6rem] md:left-[18%] md:h-[24rem]
                      lg:top-[-6.5rem] lg:left-[22%] lg:h-[28rem]
                      xl:top-[-7rem] xl:left-[30%] xl:h-[30rem]
                      flex items-start z-10 pointer-events-none hidden sm:flex">
        <img src="/assets/dualMobiles.svg" className="h-full object-contain" />
      </div>

    </div>
</section>
  );
};

export default ProjectOverview;
