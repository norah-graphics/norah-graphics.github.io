import SemiCircleHeader from "../shared_comps/semi_circle_header";
const DashboardSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16'>
        <SemiCircleHeader title="واجهات لوحة التحكم" subtitle="Dash Board" />

        <div className="w-full py-8 flex flex-col justify-center items-center">
            <img src="/assets/rose/dashboard.svg"/>
        </div>
    </section>
    );
}

export default DashboardSection;