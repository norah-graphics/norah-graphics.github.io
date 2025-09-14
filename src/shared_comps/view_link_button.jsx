import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';

const ViewLinkButton = ({link}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

  return (
    <div>
      <button 
        onClick={openVideo} 
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

      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X size={32} />
          </button>

          <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
            <video
              ref={videoRef}
              className="w-full h-auto max-h-[90vh] rounded-lg"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            >
              <source src={link} type="video/quicktime" />
              <source src={link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewLinkButton;

// const ViewLinkButton = ({link}) => {
//   const onClick = () => {
//     // This would navigate to the case study page
//     window.open(link, '_blank');
//   };

// return (
//    <div >
//        <button 
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
//     </div>
//   );
// };

// export default ViewLinkButton;
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