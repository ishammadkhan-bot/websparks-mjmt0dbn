import React from 'react';

const Safety: React.FC = () => {
  const safetyFeatures = [
    {
      icon: 'bi-shield-check',
      title: 'Certified Coaching Staff',
      description: 'All coaches are certified with background checks and specialized training in youth sports development.'
    },
    {
      icon: 'bi-heart-pulse',
      title: 'Age-Appropriate Training',
      description: 'Curriculum designed specifically for different age groups with appropriate intensity and skill progression.'
    },
    {
      icon: 'bi-clipboard-check',
      title: 'Attendance Tracking',
      description: 'Digital attendance system with real-time parent notifications and school administration updates.'
    },
    {
      icon: 'bi-telephone',
      title: 'Emergency Protocols',
      description: 'Comprehensive emergency response procedures with trained first aid personnel on-site.'
    },
    {
      icon: 'bi-people',
      title: 'Code of Conduct',
      description: 'Clear behavioral guidelines for students, coaches, and parents ensuring a positive environment.'
    },
    {
      icon: 'bi-building-check',
      title: 'School Control',
      description: 'School administration maintains full oversight and approval authority over all program activities.'
    }
  ];

  const governancePoints = [
    'Regular safety audits and compliance checks',
    'Parent-teacher-coach communication channels',
    'Transparent reporting and feedback systems',
    'Continuous coach training and development',
    'Equipment safety standards and maintenance',
    'Insurance coverage for all activities'
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            <i className="bi bi-shield-shaded mr-2"></i>
            Safety & Governance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-6">
            Safety, Discipline & Governance
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Student safety and program integrity are our top priorities. We maintain the highest 
            standards of safety, discipline, and transparent governance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {safetyFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mb-6">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900 mb-6">
              Governance Framework
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Our governance framework ensures transparency, accountability, and continuous 
              improvement in all aspects of program delivery.
            </p>
            
            <ul className="space-y-4">
              {governancePoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <i className="bi bi-check-circle-fill text-primary-500 mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-neutral-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Safe basketball training environment"
              crossOrigin="anonymous"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="bi bi-award text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900">Safety First Approach</h4>
                  <p className="text-neutral-600 text-sm">Zero tolerance for unsafe practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
