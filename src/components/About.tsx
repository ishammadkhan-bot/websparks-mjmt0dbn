import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-6">
            About Athlete Sports Lab
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We are not just a coaching academy — we are a long-term sports development partner 
            committed to building structured, safe, and professional basketball programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <img 
              src="https://images/74113a346586e52c8f08f464598d53f8.jpg" 
              alt="Professional basketball coaching session"
              crossOrigin="anonymous"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900 mb-4">
                Our Vision
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                To create a comprehensive sports ecosystem where every student has access to structured, 
                professional basketball training that develops not just athletic skills, but character, 
                discipline, and life values.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900 mb-4">
                Our Mission
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                To partner with schools and institutions in building sustainable sports programs that 
                prioritize safety, progressive development, and long-term athlete growth through 
                curriculum-based training and professional facility management.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="bi bi-bullseye text-primary-500 text-2xl"></i>
            </div>
            <h4 className="text-xl font-heading font-semibold text-primary-900 mb-3">Discipline</h4>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Building character through structured training and consistent practice routines.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="bi bi-shield-check text-secondary-500 text-2xl"></i>
            </div>
            <h4 className="text-xl font-heading font-semibold text-primary-900 mb-3">Safety</h4>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Age-appropriate training with certified coaches and comprehensive safety protocols.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="bi bi-graph-up-arrow text-accent-500 text-2xl"></i>
            </div>
            <h4 className="text-xl font-heading font-semibold text-primary-900 mb-3">Growth</h4>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Progressive development pathways from beginner to advanced competitive levels.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="bi bi-people text-primary-500 text-2xl"></i>
            </div>
            <h4 className="text-xl font-heading font-semibold text-primary-900 mb-3">Community</h4>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Building strong relationships between schools, parents, and the broader community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
