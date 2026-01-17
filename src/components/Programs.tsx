import React, { useState } from 'react';

const Programs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const programs = [
    {
      title: 'School Basketball Programs',
      icon: 'bi-building',
      description: 'Curriculum-based basketball training integrated into school schedules',
      features: [
        'Age-wise structured curriculum (6-18 years)',
        '2-3 sessions per week during/after school hours',
        'Certified coaches with school experience',
        'Progress tracking and regular assessments',
        'Integration with school academic calendar',
        'Parent-teacher-coach communication system'
      ],
      benefits: [
        'Improved student fitness and health',
        'Enhanced discipline and focus in academics',
        'Reduced screen time and increased physical activity',
        'Team building and social skills development'
      ],
      image: '/images/74113a346586e52c8f08f464598d53f8.jpg'
    },
    {
      title: 'After-School Basketball Academy',
      icon: 'bi-clock',
      description: 'Voluntary enrollment program for serious basketball development',
      features: [
        'Limited batch sizes for personalized attention',
        'Advanced skill development modules',
        'Competitive team formation and tournaments',
        'Professional pathway guidance',
        'Fitness and nutrition education',
        'Mental conditioning and sports psychology'
      ],
      benefits: [
        'Elite skill development opportunities',
        'Pathway to competitive basketball',
        'Leadership and teamwork skills',
        'College scholarship preparation'
      ],
      image: '/images/c5c64e21d1e56abffd9554c6a91bb522.jpg'
    },
    {
      title: 'PPP Sports Facility Model',
      icon: 'bi-building-gear',
      description: 'Public-Private Partnership for comprehensive sports facility management',
      features: [
        'Complete facility design and setup',
        'Professional equipment procurement',
        'Revenue optimization strategies',
        'Community engagement programs',
        'Multi-sport facility management',
        'Long-term maintenance and upgrades'
      ],
      benefits: [
        'Sustainable revenue generation',
        'Community sports development',
        'Professional facility management',
        'Government partnership opportunities'
      ],
      image: '/images/74113a346586e52c8f08f464598d53f8.jpg'
    }
  ];

  return (
    <section id="programs" className="py-16 sm:py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary-100 rounded-full text-secondary-700 text-sm font-medium mb-6">
            <i className="bi bi-grid-3x3-gap-fill mr-2"></i>
            Our Programs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-6">
            Comprehensive Sports Development Programs
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From curriculum-based school programs to professional facility management, 
            we offer complete solutions for every sports development need.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row bg-white rounded-2xl p-2 shadow-lg">
            {programs.map((program, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-neutral-600 hover:text-primary-500 hover:bg-primary-50'
                }`}
              >
                <i className={`${program.icon} mr-2`}></i>
                <span className="hidden sm:inline">{program.title}</span>
                <span className="sm:hidden">{program.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 sm:p-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                  <i className={`${programs[activeTab].icon} text-primary-500 text-xl`}></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900">
                  {programs[activeTab].title}
                </h3>
              </div>
              
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                {programs[activeTab].description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-heading font-semibold text-primary-900 mb-4">
                  Program Features
                </h4>
                <ul className="space-y-3">
                  {programs[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className="bi bi-check-circle-fill text-primary-500 mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-heading font-semibold text-primary-900 mb-4">
                  Key Benefits
                </h4>
                <ul className="space-y-3">
                  {programs[activeTab].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <i className="bi bi-star-fill text-secondary-500 mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-neutral-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={programs[activeTab].image}
                alt={programs[activeTab].title}
                crossOrigin="anonymous"
                className="w-full h-full object-cover min-h-[400px] lg:min-h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
