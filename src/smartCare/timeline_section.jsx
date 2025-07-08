const TimeLineSection = () => {
  return (
    <section className="w-full py-12 md:py-16 relative" >

            <div className="w-30 h-30 absolute bottom-[0rem] left-[-45rem] lg:left-[-45rem] pointer-events-none overflow-hidden"> 
                <img className="w-30 h-30 "src='/assets/circle.svg'/>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <img 
                src="/assets/smartCare/timeline.svg" 
                alt="timeline" 
                className="w-full h-auto "
                />
            </div>
       
    </section>
  );
};

export default TimeLineSection;