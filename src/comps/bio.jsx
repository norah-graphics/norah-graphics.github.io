import SideCircleLeft from "./side_circle_left.jsx"
import '../index.css';  

const BioSection = () => {
  return (

  <section className="px-8 md:pl-[14rem] md:pr-[12rem] py-10 overflow-hidden relative">
        <div className="w-full">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-semibold text-[#454949] mb-4">BIO:</h2>
            
            <div className="space-y-6 text-[#454949] leading-relaxed">
              <p className="text-lg font-meduim">
                A creative Graphic Designer and UX/UI Designer driven by a passion for building beautiful, 
                meaningful, and seamless user experiences.I turn ideas into visual stories blending artistic vision 
                with user-centered thinking to create designs that truly connect.
              </p>
              
              <p className="text-lg font-meduim">
                With hands-on experience from concept to final execution, I pay close attention<br />
                to every technical detail and believe that listening deeply<br />
                to clients is the secret to achieving.
              </p>
            </div>
          </div>
        </div>

         <SideCircleLeft/>
      </section>

        );
};

export default BioSection;