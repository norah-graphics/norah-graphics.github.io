import SemiCircleHeader from "../shared_comps/semi_circle_header";
const LandingPagesSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16'>
        <SemiCircleHeader title="واجهات صفحة الهبوط" subtitle="Landing Page" />

        <div className="w-full py-8 flex flex-col justify-center items-center">
            <img src="/assets/rose/landing1.png"/>
            <img src="/assets/rose/landing2.png" className="-mt-4"/>
            <img src="/assets/rose/landing3.svg"/>
        </div>
    </section>
    );
}

export default LandingPagesSection;