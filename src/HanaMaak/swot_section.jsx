import React from 'react';

const SwotSection = () => {
    const swotData = [
    {
      letter: 'S',
      title: 'STRENGTHS',
      titleAr: 'نقاط القوة',
      points: [
        '• ذكاء اصطناعي يقرأ الوصفات تلقائيًا',
        '• تذكيرات صوتية مخصصة وواضحة',
        '• واجهة بسيطة وسهلة لكبار السن',
        '• دعم كامل للغة العربية',
        '• لا يحتاج إدخال يدوي معقد'
      ]
    },
    {
      letter: 'W',
      title: 'WEAKNESS',
      titleAr: 'نقاط الضعف',
      points: [
        '• قد يحتاج إلى الإنترنت لمعالجة الصور',
        '• اعتماد كبير على دقة قراءة الوصفات',
        '• محدودية التوسع النقدي بدون فريق نفس دائم',
        '• التطبيق ما زال في مرحلة ما قبل الإطلاق'
      ]
    },
    {
      letter: 'O',
      title: 'OPPORTUNITIES',
      titleAr: 'الفرص',
      points: [
        '• قلة التطبيقات المصممة لكبار السن',
        '• قابلية الدمج مع أنظمة صحية أو عيادات',
        '• إمكانية التوسع لتشمل خدمات دعم إضافية (مكالمات، مرافقة طبية...)',
        '• الطلب المتزايد على الحلول الصحية الرقمية في المملكة'
      ]
    },
    {
      letter: 'T',
      title: 'THREATS',
      titleAr: 'التهديدات',
      points: [
        '• صعوبة إقناع كبار السن بالتقنية',
        '• تغير السياسات أو متطلبات الخصوصية الصحية',
        '• احتمالية تقليد الفكرة من منافسين',
        '• بدون حماية فكرية'
      ]
    }
  ];
  return (
    <section className='max-w-6xl mx-auto px-4 py-16 relative'>
       <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <h1 
        className="text-center text-4xl md:text-5xl lg:text-6xl font-normal mb-12 font-krona-one"
        style={{ 
          color: '#39DACD',
          textShadow: '2px 2px 4px #00A0FF'
        }}
      >
        SWOT ANALYSIS
      </h1>

      {/* SWOT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
        {swotData.map((section, index) => (
          <div key={section.letter} className="relative">
            {/* Desktop Divider - Only show on large screens and not for last item */}
            {index < swotData.length - 1 && (
              <div 
                className="hidden lg:block absolute right-0 top-0 w-px h-full"
                style={{ backgroundColor: '#00A0FF' }}
              />
            )}
            
            {/* Content */}
            <div className="px-6 lg:px-8">
              {/* Letter (as styled text instead of PNG) */}
              <div className="text-center mb-4">
                <div 
                  className="inline-block text-8xl md:text-9xl font-bold font-krona-one text-[#0EA5E9] font-krona-one"
                >
                  {section.letter}
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-6">
                <h2 
                  className="text-lg md:text-xl font-bold mb-1 text-[#0EA5E9] font-krona-one"
                >
                  {section.title}
                </h2>
               
              </div>

              {/* Points */}
<div className="space-y-1" dir="rtl">
  {section.points.map((point, pointIndex) => (
    <div 
      key={pointIndex}
      className="flex text-center items-center justify-center"
    >
      <p className="text-sm md:text-base text-[#041219] leading-relaxed">
        {point}
      </p>
    </div>
  ))}
</div>



            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default SwotSection;