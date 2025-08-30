import React from 'react';
import InfoBox from './userInterviewBox';
const UserInterviewSection = () => {
  return (
 <section className="w-full md:py-16 py-12 px-4 relative w-full max-w-6xl mx-auto p-8">
     {/* list text */}
     <div>
        <p className='font-cairo text-[#9511CB] font-bold md:text-3xl text-xl pb-2'>
            User Interviews
        </p>
        <p  className='font-cairo text-[#78767D] font-semibold text-lg md:text-xl'>
            A survey was conducted and responses were collected from 40 individuals,<br/> including athletes, coaches, and sports administrators from a football academy.
        </p>
     </div>
    <div className="grid md:grid-cols-2 gap-8 p-8 items-center ">
      
      {/* Box 1 */}
      <InfoBox>
        <h2 className="text-lg font-semibold md:m-4 md:my-0 my-4 font-cairo">What is your job title?</h2>
        <div className='md:pl-10'>

            <ul className=" text-[#7A00AA] font-semibold">
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">21 (52.5%)</span> <span className="px-1"> Coach</span></li>
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">2 (5%)</span> <span className="px-1">Academic Administrator</span></li>
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">13 (32.5%)</span> <span className="px-1">Doctor or Physiotherapist</span></li>
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">6 (15%)</span> <span className="px-1"> Player/Trainer</span></li>
            
            </ul>
        </div>
      </InfoBox>

      {/* Box 2 */}
      <InfoBox>
        <h2 className="text-lg font-semibold md:m-4 md:my-0 my-4 font-cairo">How many athletes do you work with directly?</h2>
        <div className='md:pl-10'>
         <ul className=" text-[#7A00AA] font-semibold">
          <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(77.5%)</span> <span className="px-1"> Less than 10</span></li>
          <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(17.5%)</span> <span className="px-1"> 10–30 </span></li>
          <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(2.5%)</span> <span className="px-1"> 31–50</span></li>
          <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(2.5%)</span> <span className="px-1"> More than 50</span> </li>
        </ul>
       </div>
      </InfoBox>
      {/* Box 3 */}
      <InfoBox>
        <h2 className="text-lg font-semibold md:m-4 md:my-0 my-4 font-cairo">What is the main age group you serve?</h2>
        <div className='md:pl-10'>

            <ul className=" text-[#7A00AA] font-semibold">
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(37.5%)</span> <span className="px-1"> Under 15 years old</span></li>
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(32.5%)</span> <span className="px-1">15-18 years old</span></li>
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(30%)</span> <span className="px-1">19 years old and above</span></li>
            
            </ul>
        </div>
      </InfoBox>

      {/* Box 4 */}
      <InfoBox>
        <h2 className="text-lg font-semibold md:m-4 md:my-0 my-4 font-cairo">Do you currently use any system to track <br/>players' physical performance?</h2>
        <div className='md:pl-10'>
         <ul className=" text-[#7A00AA] font-semibold">
          <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(67.5%)</span> <span className="px-1"> Yes</span></li>
          <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(32.5%)</span> <span className="px-1"> No </span></li>
        </ul>
       </div>
      </InfoBox>



      {/* Box 5 */}
      <InfoBox>
        <h2 className="text-lg font-semibold md:m-4 md:my-0 my-4 font-cairo">What are the biggest challenges you face<br/>
in tracking physical performance?</h2>
        <div className='md:pl-10'>

            <ul className=" text-[#7A00AA] font-semibold">
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(20%)</span> <span className="px-1"> Lack of data</span></li>
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(35%)</span> <span className="px-1">Inaccurate measurements</span></li>
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(20%)</span> <span className="px-1">Difficulty in manual analysis</span></li>
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(25%)</span> <span className="px-1"> Lack of alerts for potential injuries</span></li>
            
            </ul>
        </div>
      </InfoBox>

      {/* Box 6 */}
       <InfoBox>
        <h2 className="text-lg font-semibold md:m-4 md:my-0 my-4 font-cairo">What are the most important features you
would like to have in a smart system?</h2>
        <div className='md:pl-10'>

            <ul className=" text-[#7A00AA] font-semibold">
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(77.5%)</span> <span className="px-1"> Speed, effort, and fatigue analysis</span></li>
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(87.5%)</span> <span className="px-1">Predicting potential injuries</span></li>
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(75.5%)</span> <span className="px-1">Daily/weekly performance reports</span></li>
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(52.5%)</span> <span className="px-1"> Coach app to view analytics</span></li>
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(75.5%)</span> <span className="px-1"> Alert notifications when danger is present</span></li>
            <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(35%)</span> <span className="px-1"> Integration with wearable devices</span></li>
            </ul>
        </div>
      </InfoBox>

    
      {/* Box 7 */}
       <InfoBox>
        <h2 className="text-lg font-semibold md:m-4 md:my-0 my-4 font-cairo">Would you prefer the system to be?</h2>
        <div className='md:pl-10'>
         <ul className=" text-[#7A00AA] font-semibold">
          <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(60%)</span> <span className="px-1"> Mobile App</span></li>
          <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(0%)</span> <span className="px-1"> Web Platform </span></li>
          <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(40%)</span> <span className="px-1"> Both</span></li>
        </ul>
       </div>
      </InfoBox>

      {/* Box 8 */}
      <InfoBox>
        <h2 className="text-lg font-semibold md:m-4 md:my-0 my-4 font-cairo">Do you think this system could improve the
quality of training and reduce injuries?</h2>
        <div className='md:pl-10'>
         <ul className=" text-[#7A00AA] font-semibold">
          <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(95%)</span> <span className="px-1"> significantly</span></li>
          <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(2.5%)</span> <span className="px-1"> somewhat </span></li>
          <li className="text-base text-[#000000] font-semibold font-cairo leading-none" ><span className="text-2xl text-[#9511CB] font-bold font-cairo">(2.5%)</span> <span className="px-1"> slightly</span></li>
        </ul>
       </div>
      </InfoBox>
    </div>


     
    </section>
  );
};

export default UserInterviewSection;



