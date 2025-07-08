import React from 'react';

const HeroSection = ({source,alt}) => {
  return (
    <section className="w-full flex items-center justify-center pt-[5.7rem] md:pt-[4rem]">
      <img
                src={source} 
                alt={alt}
                className="w-full h-full object-contain object-center"
              />
    </section>
  );
};

export default HeroSection;