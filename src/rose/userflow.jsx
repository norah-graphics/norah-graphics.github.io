const UserFlowSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 relative'>
        <div className="w-full mx-auto relative border border-[#D14D72] border-[3px] rounded-2xl relative" dir="rtl">
            <div className="w-fit flex flex-col absolute  bg-[#F3F3F3] px-4 md:px-10 rounded-full -top-10 -translate-x-1/2 left-1/2 py-2 justify-center items-center">
                <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2">تدفق المستخدم</h2>
                <h2 className="text-[#6A1A7D] font-extrabold font-zain text-2xl md:text-3xl px-2 pb-2">User Flow</h2>
            </div>
            <div className="py-8 px-2 flex">
                <img src="/assets/rose/userflow.svg"/>
            </div>
        </div>
    </section>
    );
}

export default UserFlowSection;