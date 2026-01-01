import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 sm:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary-500/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <i className="bi bi-award-fill mr-2"></i>
              Professional Sports Development Partner
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Structured Basketball Training
              <span className="block text-secondary-400">Inside Schools</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Long-term sports development partnerships with schools through curriculum-based programs, 
              after-school academies, and PPP sports facility management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <i className="bi bi-handshake mr-2"></i>
                Partner With Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg"
              >
                <i className="bi bi-play-circle mr-2"></i>
                Start Pilot Program
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Students Trained</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">25+</div>
                <div className="text-white/80 text-sm">School Partners</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">10+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Basketball training in school gymnasium"
                crossOrigin="anonymous"
                className="rounded-2xl shadow-2xl w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary-500 rounded-2xl flex items-center justify-center shadow-xl">
              <i className="bi bi-trophy-fill text-white text-2xl"></i>
            </div>
            
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <i className="bi bi-shield-check-fill text-primary-500 text-xl"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
