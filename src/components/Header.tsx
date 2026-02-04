import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../images/Untitled design (3).png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div
        className={`max-w-6xl w-full pointer-events-auto rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'bg-white border-neutral-200 shadow-xl'
            : 'bg-white/95 border-neutral-100 shadow-md'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo + Brand */}
            <Link to="/" className="flex items-center space-x-3 lg:space-x-4">
              <img
                src={Logo}
                alt="Athlete Sports Lab logo"
                className="h-14 w-auto lg:h-16 object-contain"
              />
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-heading font-extrabold text-primary-900 tracking-tight">
                  Athlete Sports Lab
                </h1>
                <p className="text-[10px] sm:text-[11px] text-neutral-600 hidden sm:block uppercase tracking-[0.18em]">
                  Professional Sports Development
                </p>
              </div>
            </Link>

            {/* Desktop Nav - centered like SFL */}
            <nav className="hidden lg:flex flex-1 items-center justify-center space-x-6 xl:space-x-8 text-[13px] font-semibold uppercase tracking-[0.16em]">
              <button
                onClick={() => scrollToSection('home')}
                className="text-neutral-700 hover:text-primary-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary-500 after:transition-all"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-neutral-700 hover:text-primary-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary-500 after:transition-all"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('why-asl')}
                className="text-neutral-700 hover:text-primary-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary-500 after:transition-all"
              >
                Why ASL
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-neutral-700 hover:text-primary-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary-500 after:transition-all"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-neutral-700 hover:text-primary-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary-500 after:transition-all"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-neutral-700 hover:text-primary-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary-500 after:transition-all"
              >
                Contact
              </button>
            </nav>

            {/* Desktop CTA (Book Free Trial style, aligned right) */}
            <div className="hidden lg:flex items-center ml-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold shadow-sm transition-colors"
              >
                Book Free Trial
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-xl text-neutral-700`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white rounded-b-full shadow-md">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-2 text-neutral-700 hover:text-primary-500 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 text-neutral-700 hover:text-primary-500 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('why-asl')}
                className="block w-full text-left py-2 text-neutral-700 hover:text-primary-500 font-medium"
              >
                Why ASL
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="block w-full text-left py-2 text-neutral-700 hover:text-primary-500 font-medium"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="block w-full text-left py-2 text-neutral-700 hover:text-primary-500 font-medium"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 text-neutral-700 hover:text-primary-500 font-medium"
              >
                Contact
              </button>
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-4 py-3 text-primary-500 border border-primary-500 rounded-lg hover:bg-primary-50 transition-colors font-medium"
                >
                  Start Pilot Program
                </button>
                <Link
                  to="/partnership"
                  className="block w-full px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-center"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
