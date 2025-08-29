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
<section className='py-8 max-w-7xl mx-auto '>
    <div className="flex items-center justify-ceneter">
      <img src='assets/hanamaak/overview.png'/>
     
    </div>
</section>
  );
};

export default ProjectOverview;
