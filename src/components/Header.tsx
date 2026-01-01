import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500 rounded-lg flex items-center justify-center">
              <i className="bi bi-trophy-fill text-white text-lg sm:text-xl"></i>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-heading font-bold text-primary-900">
                Athlete Sports Lab
              </h1>
              <p className="text-xs text-neutral-600 hidden sm:block">Professional Sports Development</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-neutral-700 hover:text-primary-500 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-neutral-700 hover:text-primary-500 font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('why-asl')} className="text-neutral-700 hover:text-primary-500 font-medium transition-colors">
              Why ASL
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-neutral-700 hover:text-primary-500 font-medium transition-colors">
              Programs
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-neutral-700 hover:text-primary-500 font-medium transition-colors">
              Benefits
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-neutral-700 hover:text-primary-500 font-medium transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 text-primary-500 border border-primary-500 rounded-lg hover:bg-primary-50 transition-colors font-medium"
            >
              Start Pilot Program
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              Partner With Us
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-xl text-neutral-700`}></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-neutral-700 hover:text-primary-500 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-neutral-700 hover:text-primary-500 font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('why-asl')} className="block w-full text-left py-2 text-neutral-700 hover:text-primary-500 font-medium">
              Why ASL
            </button>
            <button onClick={() => scrollToSection('programs')} className="block w-full text-left py-2 text-neutral-700 hover:text-primary-500 font-medium">
              Programs
            </button>
            <button onClick={() => scrollToSection('benefits')} className="block w-full text-left py-2 text-neutral-700 hover:text-primary-500 font-medium">
              Benefits
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-neutral-700 hover:text-primary-500 font-medium">
              Contact
            </button>
            <div className="pt-4 space-y-3">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full px-4 py-3 text-primary-500 border border-primary-500 rounded-lg hover:bg-primary-50 transition-colors font-medium"
              >
                Start Pilot Program
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
