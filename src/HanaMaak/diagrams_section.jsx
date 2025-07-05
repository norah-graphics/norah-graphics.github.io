import React from 'react';

const DiagramsSections = () => {
  // Data structure with text and image paths
  const sectionsData = [
    {
      text: "مسار تسجيل الدخول/تسجيل جديد",
      imagePath: "/assets/diagram1.svg"
    },
    {
      text: "مسار اضافة منبة تذكيري عن طريق تصوير الوصفة",
      imagePath: "/assets/diagram2.svg"
    },
    {
      text: "مسار بدء محادثة جديدة مع الرفيق الذكي (خلود)",
      imagePath: "/assets/diagram3.svg"
    }
  ];

  return (
    <section className='max-w-6xl mx-auto px-4'>

        <div className="p-8">
        {sectionsData.map((section, index) => (
            <div key={index} className="py-12">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#01A0FF] font-open-sans ">
                {section.text}
            </h2>
            <img 
                src={section.imagePath} 
                alt={section.text}
                className="w-full"
            />
            </div>
        ))}
        </div>
        <img src='/assets/sketches.svg'/>
    </section>
  );
};

export default DiagramsSections;