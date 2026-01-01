import React, { useState } from 'react';

const Benefits: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const benefitCategories = [
    {
      title: 'For Schools',
      icon: 'bi-building',
      color: 'primary',
      benefits: [
        {
          icon: 'bi-graph-up',
          title: 'Enhanced Student Engagement',
          description: 'Improved attendance and academic performance through structured physical activity'
        },
        {
          icon: 'bi-shield-check',
          title: 'Professional Program Management',
          description: 'Complete program oversight with certified coaches and safety protocols'
        },
        {
          icon: 'bi-currency-dollar',
          title: 'Cost-Effective Solution',
          description: 'Professional sports program without the overhead of hiring full-time staff'
        },
        {
          icon: 'bi-trophy',
          title: 'School Reputation Enhancement',
          description: 'Recognition as a progressive institution with comprehensive student development'
        }
      ]
    },
    {
      title: 'For Students',
      icon: 'bi-person-check',
      color: 'secondary',
      benefits: [
        {
          icon: 'bi-heart',
          title: 'Physical Fitness & Health',
          description: 'Improved cardiovascular health, strength, and overall physical development'
        },
        {
          icon: 'bi-people',
          title: 'Social Skills Development',
          description: 'Teamwork, communication, and leadership skills through team sports'
        },
        {
          icon: 'bi-bullseye',
          title: 'Discipline & Focus',
          description: 'Enhanced concentration and self-discipline that translates to academic success'
        },
        {
          icon: 'bi-star',
          title: 'Skill Development',
          description: 'Progressive basketball skills with potential pathways to competitive sports'
        }
      ]
    },
    {
      title: 'For Parents',
      icon: 'bi-house-heart',
      color: 'accent',
      benefits: [
        {
          icon: 'bi-clock',
          title: 'Structured After-School Time',
          description: 'Safe, productive environment for children during after-school hours'
        },
        {
          icon: 'bi-eye',
          title: 'Transparent Communication',
          description: 'Regular updates on child\'s progress and development milestones'
        },
        {
          icon: 'bi-piggy-bank',
          title: 'Value for Money',
          description: 'Professional coaching and development at affordable school-integrated rates'
        },
        {
          icon: 'bi-peace',
          title: 'Peace of Mind',
          description: 'Certified coaches, safety protocols, and school-supervised environment'
        }
      ]
    },
    {
      title: 'For Facility Owners',
      icon: 'bi-building-gear',
      color: 'primary',
      benefits: [
        {
          icon: 'bi-graph-up-arrow',
          title: 'Revenue Optimization',
          description: 'Maximize facility utilization with structured programs and community engagement'
        },
        {
          icon: 'bi-tools',
          title: 'Professional Management',
          description: 'Expert facility management with maintenance, upgrades, and operational efficiency'
        },
        {
          icon: 'bi-people-fill',
          title: 'Community Building',
          description: 'Become a hub for local sports development and community activities'
        },
        {
          icon: 'bi-handshake',
          title: 'Partnership Support',
          description: 'Long-term partnership with marketing, program development, and growth strategies'
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-500 text-white';
      case 'secondary':
        return 'bg-secondary-500 text-white';
      case 'accent':
        return 'bg-accent-500 text-white';
      default:
        return 'bg-primary-500 text-white';
    }
  };

  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary-100 rounded-full text-secondary-700 text-sm font-medium mb-6">
            <i className="bi bi-gift mr-2"></i>
            Benefits & Value
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-6">
            Benefits for Everyone
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach creates value for all stakeholders in the sports development ecosystem.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {benefitCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                  activeCategory === index
                    ? getColorClasses(category.color)
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-neutral-50 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${getColorClasses(benefitCategories[activeCategory].color)}`}>
              <i className={`${benefitCategories[activeCategory].icon} text-2xl`}></i>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900 mb-4">
              Benefits {benefitCategories[activeCategory].title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefitCategories[activeCategory].benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 ${getColorClasses(benefitCategories[activeCategory].color)}`}>
                    <i className={`${benefit.icon} text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-primary-900 mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-neutral-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
              Ready to Experience These Benefits?
            </h3>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our growing network of schools, students, parents, and facility partners 
              who are already experiencing the ASL advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-500 rounded-lg hover:bg-neutral-100 transition-colors font-semibold">
                <i className="bi bi-telephone mr-2"></i>
                Call Us Today
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold">
                <i className="bi bi-envelope mr-2"></i>
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
