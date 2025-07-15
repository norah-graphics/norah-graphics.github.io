import React from 'react';

const swotData = {
  left: [
    {
      title: 'STRENGTHS',
      points: [
        'Smart health analysis',
        'Personalized recommendations',
        'Serves players and coaches',
        'Simple, user-friendly interface',
        'Integration with smart devices',
      ],
      image:"/assets/smartCare/strength.svg"
    },
    {
      title: 'OPPORTUNITIES',
      points: [
        'Growing focus on injury prevention',
        'Partnerships with sports academies',
        'Integration with wearable tech',
        'Expansion to other sports',
      ],
            image:"/assets/smartCare/opp.svg"

    },
  ],
  right: [
    {
      title: 'WEAKNESSES',
      points: [
        'Requires accurate data input',
        'Limited trust in AI decisions',
        'Depends on stable internet',
        'Limited reach without partnerships',
      ],
            image:"/assets/smartCare/weakness.svg"

    },
    {
      title: 'THREATS',
      points: [
        'Competition from similar apps',
        'Data privacy concerns',
        'Shifting user needs and trends',
        'Slow adoption without official support',
      ],
            image:"/assets/smartCare/threats.svg"

    },
  ],
};

const SWOTBox = ({ title, points, image }) => (
  <div className="relative w-[320px] h-[200px] mt-8">
    {/* Pink stacked top-left border box */}
    <div className="absolute top-0 left-0 w-full h-full rounded-xl border-[3px] border-[#CD54FF] translate-x-[-4px] translate-y-[-4px] z-0"></div>

    {/* Main white box with black border */}
    <div className="relative z-10 border border-black rounded-xl border-[2px] p-4 w-full h-full overflow-hidden">
      {/* Header with icon */}
      <div className="flex items-center gap-2 mb-2">
        <div className="">
          <img src={image} alt={`${title} icon`} />
        </div>
        <h3 className=" text-xl font-light font-san-serif uppercase tracking-wide">{title}</h3>
      </div>

      {/* Bullet points */}
      <ul className="text-black font-cairo font-medium space-y-1 ">
        {points.map((point, i) => (
          <li key={i} className="flex gap-2 leading-tight font-medium">
            <span className="text-[#000] font-medium">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);



const SWOTSection = () => {
  return (
 <section className="w-full md:py-16 py-12 px-4 relative w-full max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-2">
        {/* Left Column */}
        <div className="flex flex-col gap-2 md:justify-end md:items-end items-center">
          {swotData.left.map((item, index) => (
            <SWOTBox key={index} title={item.title} points={item.points}  image={item.image} />
          ))}
        </div>

        {/* Middle SVG Placeholder */}
        <div className="flex justify-center items-center py-6">
          <img src='/assets/smartCare/swot.svg'/>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2  items-center">
          {swotData.right.map((item, index) => (
            <SWOTBox key={index} title={item.title} points={item.points} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SWOTSection;
