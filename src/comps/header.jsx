import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openResume = () => {
    window.open('/Norah_Mohammed_Senior_Graphic_Designer_&_UX_UI_Specialist.pdf', '_blank');
    setIsMenuOpen(false); // Close menu after action
  };

  const handleProjectsClick = () => {
    setIsMenuOpen(false); // Close menu after action
    
    // Check if we're on the home page
    if (location.pathname === '/') {
      // We're on home page, scroll to projects section
      const projectsSection = document.getElementById('projects-section');
      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      // We're on another page, navigate to home and then scroll
      navigate('/');
      // Wait a bit for navigation to complete, then scroll
      setTimeout(() => {
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
          projectsSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <>
      <header className="w-full py-6 px-8 md:px-16 bg-[#FFFFFF] fixed z-50">
        <div className="flex justify-between items-center">
          {/* Logo - Always visible */}
          <div className="text-2xl font-bold text-[#454949]">
            <img src="/assets/Norah.svg" alt="Norah" />
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex gap-2">
            <button 
              onClick={() => navigate('/')}
              className="px-6 py-2 rounded-full bg-[#D9D9D9] text-gray-700 transition-all duration-300 hover:bg-[#454949] hover:text-white"
            >
              Home
            </button>
             <button 
              onClick={() => navigate('/About')}
              className="px-6 py-2 rounded-full bg-[#D9D9D9] text-gray-700 transition-all duration-300 hover:bg-[#454949] hover:text-white"
            >
              About me!
            </button>
            <button 
              onClick={handleProjectsClick}
              className="px-6 py-2 rounded-full bg-[#D9D9D9] text-gray-700 transition-all duration-300 hover:bg-[#454949] hover:text-white"
            >
              Projects
            </button>
            <button 
              onClick={openResume}
              className="px-6 py-2 rounded-full bg-[#D9D9D9] text-gray-700 transition-all duration-300 hover:bg-[#454949] hover:text-white"
            >
              Resume
            </button>
          </nav>

          {/* Mobile Hamburger Button - Only visible on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#454949] hover:text-gray-600 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Side Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Side Menu */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div className="text-xl font-bold text-[#454949]">Menu</div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-[#454949] hover:text-gray-600 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col p-6 space-y-4">
          <button 
            onClick={() => {
              navigate('/');
              setIsMenuOpen(false);
            }}
            className="w-full px-6 py-3 rounded-full bg-[#D9D9D9] text-gray-700 transition-all duration-300 hover:bg-[#454949] hover:text-white text-left"
          >
            Home
          </button>

           <button 
            onClick={() => {
              navigate('/About');
              setIsMenuOpen(false);
            }}
            className="w-full px-6 py-3 rounded-full bg-[#D9D9D9] text-gray-700 transition-all duration-300 hover:bg-[#454949] hover:text-white text-left"
          >
            About me!
          </button>
          <button 
            onClick={handleProjectsClick}
            className="w-full px-6 py-3 rounded-full bg-[#D9D9D9] text-gray-700 transition-all duration-300 hover:bg-[#454949] hover:text-white text-left"
          >
            Projects
          </button>
          <button 
            onClick={openResume}
            className="w-full px-6 py-3 rounded-full bg-[#D9D9D9] text-gray-700 transition-all duration-300 hover:bg-[#454949] hover:text-white text-left"
          >
            Resume
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;