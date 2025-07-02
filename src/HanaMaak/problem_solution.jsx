
const ProblemSolutionSection = () => {
    var text1="١. الرفيق";
    var text2="الذكي"
    var text3=" (نموذج AI)";
    var text4=" يقرأ صور وصفات الأدوية سواء كانت خطية أم إلكترونية.";
  return (
    <section className="max-w-6xl mx-auto py-10">

          <div className="py-8" dir="rtl">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Right Section - الحلول */}
        <div className="flex gap-2">
          {/* Small gradient column */}
          <div 
            className="w-3 h-full "
            style={{
              background: 'linear-gradient(-90deg, #00A0FF 0%, #40CFC5 50%, transparent 100%)'
            }}
          />
          
          {/* Text content box */}
          <div 
            className="  p-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(-90deg, #40CFC5 0%, transparent 100%)'
            }}
          >

            <div className="">
              <h2 className="text-4xl font-bold mb-4 text-right text-white font-open-sans">المشكلات:</h2>
              <div className="text-sm leading-relaxed font-open-sans text-black font-regular">
                <p>١. نسيان المواعيد الطبية وأوقات الأدوية بشكل متكرر.</p>
                <p>٢. الإشارات التقليدية غير فعالة أو يتم تجاهلها.</p>
                <p>٣. صعوبة استخدام التطبيقات الحديثة لدى كبار السن.</p>
                <p>٤. التذكيرات لا تتكيف مع تغيرات روتين المستخدم اليومي.</p>
                <p>٥. صعوبة قراءة أو تتبع وصفات الأدوية، خاصة الخطية منها.</p>
                <p>٦. الحاجة لتذكيرات صوتية واضحة تساعد المستخدم على</p>
                <p>معرفة وقت ونوع الدواء بسهولة.</p>
              </div>
            </div>
            
          </div>
        </div>

        {/* Left Section - المشكلات */}
        <div className="flex gap-2">
          {/* Small gradient column */}
          <div 
            className="w-3 h-full "
            style={{
              background: 'linear-gradient(-90deg, #00A0FF 0%, #40CFC5 50%, transparent 100%)'
            }}
          />
          
          {/* Text content box */}
          <div 
            className="  p-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(-90deg, #40CFC5 0%,transparent 100%)'
            }}
          >
           

            <div className="">
              <h2 className="text-4xl font-bold mb-4 text-white text-right font-open-sans">الحلول:</h2>
              <div className=" text-sm text-black leading-relaxed  text-right font-open-sans font-regular">
                <p>{text1} {text2}{text3}{text4}</p>
                <p>٢. إنشاء منبه تلقائي للعلاج بناء على مكونات الوصفة وتوقيتها.</p>
                <p>٣. دعم التذكيرات الصوتية المسجلة بصوت المستخدم أو بصوت واضح ومفهوم.</p>
                <p>٤. تصميم واجهات مبسطة وسهلة الاستخدام لكبار السن، بخط كبير وأزرار واضحة.</p>
                <p>٥. تذكيرات ذكية تتغير تلقائياً حسب جدول ونمط حياة المستخدم.</p>
                <p>٦. إرسال تنبيهات في الوقت المناسب وبالطريقة التي تناسب المستخدم</p>
                <p>(نص، صوت، اشعار خفيف...).</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
    </section>
  
  );
};

export default ProblemSolutionSection;
