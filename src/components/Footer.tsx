import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About ASL', section: 'about' },
    { name: 'Why Choose Us', section: 'why-asl' },
    { name: 'Programs', section: 'programs' },
    { name: 'Benefits', section: 'benefits' },
    { name: 'Contact', section: 'contact' }
  ];

  const programs = [
    'School Basketball Programs',
    'After-School Academy',
    'PPP Sports Facility',
    'Pilot Programs',
    'Coach Training'
  ];

  const contact = [
    { icon: 'bi-telephone', text: '+91 98676 75739' },
    { icon: 'bi-envelope', text: 'info@athletesportslab.com' },
    { icon: 'bi-geo-alt', text: 'mumbai, maharashtra' },
    { icon: 'bi-clock', text: 'Mon-Fri: 9AM-6PM' }
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center">
                <i className="bi bi-trophy-fill text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Athlete Sports Lab</h3>
                <p className="text-white/70 text-sm">Professional Sports Development</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Building structured, safe, and professional basketball programs through 
              long-term partnerships with schools and institutions.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <i className="bi bi-facebook text-white"></i>
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <i className="bi bi-instagram text-white"></i>
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <i className="bi bi-linkedin text-white"></i>
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <i className="bi bi-youtube text-white"></i>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index} className="text-white/80">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {contact.map((item, index) => (
                <li key={index} className="flex items-center">
                  <i className={`${item.icon} text-secondary-400 mr-3`}></i>
                  <span className="text-white/80">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Athlete Sports Lab. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </button>
              <div className="text-white/40">
                Powered by Athletesportslab
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
