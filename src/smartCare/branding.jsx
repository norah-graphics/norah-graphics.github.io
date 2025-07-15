import React from 'react';




const BrandingSection = () => {
  return (
 <section className="w-full md:py-16 py-12 px-4 relative w-full max-w-6xl mx-auto p-8">
    <div className='flex-col font-cairo'>
         <h2 className='font-bold text-[#9511CB] pb-1 md:text-3xl text-xl'>Branding</h2>
        <p className='pb-4 text-lg md:text-xl font-semibold text-[#78767D]'>The app's branding was designed to reflect its AI services, with colors and fonts that evoke strength, warmth, energy, and hope, cleverly combining them with intelligence and various forms of kinetic mathematics, in line with the app's mission and diverse services.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 items-start gap-2 pt-6'>
            <div className='flex justify-center items-center  h-full'>
                <img src='/assets/smartLogo.svg'/>
            </div>
                    <div className=''>
                        <p className='font-bold text-[#9511CB] pb-4 md:text-3xl text-xl'>The Logo</p>
                        <p className='pb-6 text-lg md:text-xl font-semibold text-[#78767D]'>I designed the logo by drawing a simple figure of a person enjoying excellent health and fitness, with a medical telescope passing through it to reflect the core service of the app. The design is kept minimal and clean without unnecessary details, ensuring the logo clearly represents the main field of the app in a sustainable way.</p>
                        <p className='pb-6 text-lg md:text-xl font-semibold text-[#78767D]'>The chosen colors for the app—strong shades of blue, purple, and vibrant fuchsia—are blended together to create a fresh, modern look for both the logo and the app overall. These colors are uniquely tied to the concept of artificial intelligence through bold and attractive tones.</p>
                        <p className='pb-6 text-lg md:text-xl font-semibold text-[#78767D]'>The app’s name, "Smart Care," was created along with the brand slogan "Smart Health for Better Performance," which is displayed alongside the app name in the logo.</p>
                    </div>

        </div>
        <div className='md:py-16 py-12 px-4'>
            <img src='/assets/smartCare/cairoFont.svg'/>
        </div>
        <div className='md:py-16 py-12 px-4'>
            <img src='/assets/smartCare/components.svg'/>
        </div>

    </div>
    </section>
  );
};

export default BrandingSection;
