
import React, { useState, useEffect } from 'react';
import { profileData } from '../data/profile';
import { Link, useLocation } from 'react-router-dom';
import { scrollIntoView } from '@/lib/utils';

const Navbar = ({ skillRef, contactRef, cirtificatesRef, topRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade-in transition on route change
  useEffect(() => {
    const main = document.querySelector('main');
    if (main) {
      main.classList.remove('animate-fade-in');
      // Force reflow to allow the animation to re-trigger
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      void main.offsetWidth;
      main.classList.add('animate-fade-in');
    }
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      } animate-fade-in`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollIntoView(topRef)} className={`${isScrolled ? "text-purple" : 'text-gray-600'} uppercase text-lg font-bold`}>
            {profileData.name}
          </button>
          <nav className="hidden md:block text-gray-800">
            <ul className="flex space-x-8">
              {/* <li>
                <Link to="#about" className="nav-link">
                  About
                </Link>
              </li> */}
              <li>
                <button onClick={() => scrollIntoView(skillRef)} className="nav-link">
                  Skills
                </button>
              </li>
              {/* <li>
                <Link to="#experience" className="nav-link">
                  Experience
                </Link>
              </li> */}
              {/* <li>
                <Link to="#education" className="nav-link">
                  Education
                </Link>
              </li> */}
              <li>
                <button onClick={() => scrollIntoView(cirtificatesRef)} className="nav-link">
                  Certifications
                </button>
              </li>
              <li>
                <button onClick={() => scrollIntoView(contactRef)} className="nav-link">
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          <button className="block md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

