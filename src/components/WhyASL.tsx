import React from 'react';

const WhyASL: React.FC = () => {
  const features = [
    {
      icon: 'bi-journal-text',
      title: 'Structured Curriculum',
      description: 'Age-appropriate, progressive training modules designed specifically for school environments with clear learning objectives and skill development milestones.'
    },
    {
      icon: 'bi-mortarboard',
      title: 'School-Focused Experience',
      description: 'Extensive experience working within school systems, understanding administrative requirements, safety protocols, and educational integration.'
    },
    {
      icon: 'bi-shield-shaded',
      title: 'Safety & Discipline First',
      description: 'Comprehensive safety protocols, certified coaching staff, and emphasis on discipline, respect, and sportsmanship in every session.'
    },
    {
      icon: 'bi-infinity',
      title: 'Long-term Partnership',
      description: 'Not just a service provider, but a committed partner in building sustainable sports programs that grow with your institution.'
    },
    {
      icon: 'bi-award',
      title: 'Professional Standards',
      description: 'Certified coaches, standardized training methods, regular assessments, and transparent reporting to school administration.'
    },
    {
      icon: 'bi-graph-up',
      title: 'Proven Track Record',
      description: 'Successful partnerships with 25+ schools, 500+ students trained, and measurable improvements in student engagement and fitness.'
    }
  ];

  return (
    <section id="why-asl" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            <i className="bi bi-star-fill mr-2"></i>
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-6">
            Why Athlete Sports Lab is Different
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We understand that schools need more than just coaching — they need a reliable, 
            professional partner who shares their commitment to student development and safety.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 bg-neutral-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-100">
              <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${feature.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
            Ready to Transform Your School's Sports Program?
          </h3>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 25+ schools that have already partnered with us to create structured, 
            safe, and engaging basketball programs for their students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-500 rounded-lg hover:bg-neutral-100 transition-colors font-semibold">
              <i className="bi bi-calendar-check mr-2"></i>
              Schedule a Meeting
            </button>
            <button className="px-8 py-4 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors font-semibold">
              <i className="bi bi-download mr-2"></i>
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyASL;
