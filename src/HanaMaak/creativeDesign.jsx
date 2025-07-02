const DesignThinkingSection = () => {
  return (
    <div className="w-full py-8">
      {/* Title Section */}
    <div className="text-center mb-6">
        <div className="inline-block px-6 py-3  relative ">
            <h2 className="text-6xl font-bold text-white bg-white pl-[1px]" 
            style={{
            fontFamily: ' sans-serif',
            WebkitTextStroke: '1px #3B0996',
            textShadow: 'calc(-0.1em) calc(0.1em) 0px #40CFC5',
            }}>
                 DESIGN THINKING
             </h2>
        </div>
    </div>

      {/* Description Text */}
      <div className="max-w-4xl mx-auto text-center mb-8 px-4">
        <p className="text-black leading-relaxed font-cabin">
          هو منهجية تركز على فهم احتياجات المستخدم الحقيقي، وتقديم حلول مبتكرة لمشكلاته من خلال خطوات متسلسلة بدءا بالتعاطف وتنتهي بالاختبار.
        في مشروع "حنّا معاك"، استخدمنا التفكير التصميمي لفهم التحديات الصحية اليومية للمستخدمين، وتطوير فكرة تطبيق ذكي يساعدهم على التذكير
        بمواعيدهم وأدويتهم بطريقة مخصصة وسهلة
        </p>

      </div>

      {/* Design Thinking Process Image */}
      <div className="max-w-6xl mx-auto px-4">
        <img 
          src="/assets/ideas.svg" 
          alt="Design Thinking Process" 
          className="w-full h-auto "
        />
      </div>
    </div>
  );
};

export default DesignThinkingSection;