import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We meet with school administration to understand your specific needs, facilities, and student demographics.',
      icon: 'bi-chat-dots',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Pilot Program Launch',
      description: 'Start with a 4-6 week pilot program to demonstrate our methodology and measure student engagement.',
      icon: 'bi-rocket-takeoff',
      duration: '4-6 weeks'
    },
    {
      step: '03',
      title: 'Assessment & Feedback',
      description: 'Comprehensive evaluation of pilot results with feedback from students, parents, and school administration.',
      icon: 'bi-clipboard-data',
      duration: '1 week'
    },
    {
      step: '04',
      title: 'Full Program Implementation',
      description: 'Roll out the complete program with certified coaches, structured curriculum, and ongoing support.',
      icon: 'bi-gear-wide-connected',
      duration: 'Ongoing'
    },
    {
      step: '05',
      title: 'Long-term Partnership',
      description: 'Continuous program enhancement, coach training, facility upgrades, and expansion opportunities.',
      icon: 'bi-infinity',
      duration: 'Long-term'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent-100 rounded-full text-accent-700 text-sm font-medium mb-6">
            <i className="bi bi-arrow-right-circle mr-2"></i>
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our proven 5-step process ensures smooth implementation and long-term success 
            of your school's basketball program.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                <div className="flex-1 max-w-lg">
                  <div className={`text-center ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-flex items-center px-3 py-1 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
                      <i className="bi bi-clock mr-2"></i>
                      {step.duration}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <i className={`${step.icon} text-white text-2xl lg:text-3xl`}></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                
                <div className="flex-1 max-w-lg lg:block hidden"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-3xl p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900 mb-4">
                Roles & Responsibilities
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Clear division of responsibilities ensures smooth program operation and accountability.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <i className="bi bi-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">ASL Responsibilities</h4>
                    <p className="text-neutral-600 text-sm">Certified coaches, curriculum, equipment, training materials, progress tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <i className="bi bi-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">School Responsibilities</h4>
                    <p className="text-neutral-600 text-sm">Facility access, student enrollment, scheduling coordination, administrative support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Team collaboration"
                crossOrigin="anonymous"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
