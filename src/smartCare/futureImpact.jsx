import ViewLinkButton from "../shared_comps/view_link_button";



const FutureImpactSection = () => {
  return (
 <section className="w-full md:py-16 py-12 px-4 relative w-full max-w-7xl mx-auto p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className='flex-col '>
            <div className='md:max-w-6xl md:mx-auto'>
            <h2 className='font-bold text-[#9511CB] pb-1 md:text-3xl text-xl font-cairo'>The Future Impact</h2>
            <p className='pb-4 text-base font-inter  md:text-lg font-normal text-[#78767D]'>of “Smart Care” on Sports and Saudi Arabia’s Vision for the World Cup.</p>
            <p className='font-inter  text-base md:text-lg font-normal text-[#78767D] pb-4'>
                Smart Care is set to revolutionize the future of sports through AI-driven health analysis, enabling early injury prediction, personalized recommendations, and performance optimization for athletes at all levels.
As Saudi Arabia prepares to host the FIFA World Cup in 2034, the need for innovative digital health solutions is more critical than ever. Smart Care aligns with this vision by offering:
            </p>
            <ul className="text-base md:text-lg font-normal font-inter text-[#78767D] pb-4">
                <li>• Predictive insights to detect early signs of injuries before they occur</li>
                <li>• Personalized recovery and training suggestions based on real-time data</li>
                <li>• AI-powered support for coaches and medical staff to make informed decisions</li>
            </ul>

            <p className='font-inter  text-base md:text-lg font-normal text-[#78767D] pb-4'>
                For sports academies across various disciplines, Smart Care provides a scalable and intelligent tool to:
            </p>
            <ul className="text-base md:text-lg font-normal font-inter text-[#78767D] pb-4">
                <li>• Track the physical progress and readiness of young athletes</li>
                <li>• Identify fatigue and overtraining early</li>
                <li>• Tailor training programs to each player’s physical condition</li>
            </ul>
            <p className="text-base md:text-lg font-normal font-inter text-[#78767D] pb-4">
                This technology not only supports elite athletes but also empowers the next generation with the knowledge and tools to stay healthy, train smarter, and compete stronger.<br/>Smart Care bridges the gap between health and performance, and positions Saudi Arabia at the forefront of tech-driven sports innovation.
            </p>
            </div>
        </div>
        <div className="flex-col flex ">
            <img src='/assets/smartCare/futureImpact.svg' className="pb-8 "/>
            <div className="flex-col flex items-center">
                <ViewLinkButton link="/assets/demos/Smart Care Demo.mov"/>

            </div>
        </div>

    </div>
   
    </section>
  );
};

export default FutureImpactSection;
