import React from 'react';

const ViewLinkButton = ({link}) => {
  const onClick = () => {
    // This would navigate to the case study page
    window.open(link, '_blank');
  };

return (
   <div >
       <button 
              onClick={onClick} 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D9D9D9] text-[#454949] transition-all duration-300 hover:bg-[#454949] hover:text-white w-fit"
            >
              <svg 
                className="w-6 h-6 group-hover:rotate-[135deg] transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
              VIEW PROTOTYPE
            </button>
    </div>
  );
};

export default ViewLinkButton;
//  <div>
//            <button 
//               onClick={onClick} 
//               className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D9D9D9] text-[#454949] transition-all duration-300 hover:bg-[#454949] hover:text-white w-fit"
//             >
//               <svg 
//                 className="w-6 h-6 group-hover:rotate-[135deg] transition-transform duration-300" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
//               </svg>
//               VIEW PROTOTYPE
//             </button>
//    </div>>