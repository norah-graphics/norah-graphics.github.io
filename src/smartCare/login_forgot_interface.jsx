const LoginAndForgotPasswordAppInterfaceSection = () => {
  return (
    <section className="w-full px-8">
      <div className="flex  flex-col lg:flex-row w-full">
      {/* Login Page/Sign Up Page */}

        <div className="p-2">
            {/* Main container with content and custom border */}
            {/* <div className="relative max-w-4xl mx-auto "> */}
            <div className="relative ">
            
            {/* Single element creating both top and right borders seamlessly */}
            <div
                className="absolute"
                style={{
                top: 0,
                left: 0,
                right: 0,
                height: '100px',
                borderTop: '2px solid #8B5CF6',
                borderRight: '2px solid #8B5CF6',
                borderTopRightRadius: '20px',
                pointerEvents: 'none',
                }}
            />

            {/* Title positioned over the top border */}
            <h1 className="absolute -top-4 left-0 text-xl md:text-2xl font-bold text-[#9511CB]  bg-[#F3F3F3]   pr-4">
                Login Page/Sign Up Page
            </h1>

            {/* Content */}
            <div className="flex flex-row w-full"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="w-full overflow-hidden duration-300 hover:scale-105 transition-all">
                    <img
                        src={`/assets/smartCare/login${num}.svg`}
                        alt={`Login Page/Sign Up Page ${num}`}
                        className="w-full h-auto object-contain"
                    />
                    </div>
                ))}
                </div>
            </div>
        </div>
      {/* Lforgot password Page */}

         <div className="p-2">
            {/* Main container with content and custom border */}
            {/* <div className="relative max-w-4xl mx-auto "> */}
            <div className="relative ">
            
            {/* Single element creating both top and right borders seamlessly */}
            <div
                className="absolute"
                style={{
                top: 0,
                left: 0,
                right: 0,
                height: '100px',
                borderTop: '2px solid #8B5CF6',
                borderRight: '2px solid #8B5CF6',
                borderTopRightRadius: '20px',
                pointerEvents: 'none',
                }}
            />

            {/* Title positioned over the top border */}
            <h1 className="absolute -top-4 left-0 text-xl md:text-2xl font-bold text-[#9511CB]  bg-[#F3F3F3]   pr-4">
                Forgot Password Page
            </h1>

            {/* Content */}
            <div className="flex flex-row w-full"></div>
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
                {[1, 2 ].map((num) => (
                    <div key={num} className="w-full overflow-hidden duration-300 hover:scale-105 transition-all">
                    <img
                        src={`/assets/smartCare/forgot${num}.svg`}
                        alt={`forgot Page ${num}`}
                        className="w-full h-auto object-contain"
                    />
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
    </section>
  );
};




export default LoginAndForgotPasswordAppInterfaceSection;
