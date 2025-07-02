import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full flex items-center justify-center pt-[5.7rem] md:pt-[4rem]">
      <img
                src="/assets/hanamaak.png" // Replace with your actual image path
                alt="HanaMaaK"
                className="w-full h-full object-contain object-center"
              />
    </section>
  );
};

export default HeroSection;