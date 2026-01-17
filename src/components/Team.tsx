import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Head Coach & Program Director',
      experience: '12+ years',
      certifications: ['FIBA Certified', 'Youth Development Specialist'],
      image: '/images/74113a346586e52c8f08f464598d53f8.jpg',
      specialties: ['Team Building', 'Skill Development', 'Leadership Training']
    },
    {
      name: 'Priya Sharma',
      role: 'Sports Management Director',
      experience: '10+ years',
      certifications: ['Sports Management MBA', 'School Partnership Specialist'],
      image: '/images/c5c64e21d1e56abffd9554c6a91bb522.jpg',
      specialties: ['Program Management', 'School Relations', 'Strategic Planning']
    },
    {
      name: 'Arjun Patel',
      role: 'Senior Basketball Coach',
      experience: '8+ years',
      certifications: ['Basketball India Certified', 'First Aid Certified'],
      image: '/images/74113a346586e52c8f08f464598d53f8.jpg',
      specialties: ['Technical Skills', 'Game Strategy', 'Player Development']
    },
    {
      name: 'Sneha Reddy',
      role: 'Youth Development Coach',
      experience: '6+ years',
      certifications: ['Child Psychology', 'Sports Coaching Level 2'],
      image: '/images/c5c64e21d1e56abffd9554c6a91bb522.jpg',
      specialties: ['Age-Group Training', 'Character Building', 'Safety Protocols']
    }
  ];

  const stats = [
    { number: '25+', label: 'Certified Coaches', icon: 'bi-award' },
    { number: '500+', label: 'Students Trained', icon: 'bi-people' },
    { number: '15+', label: 'Years Combined Experience', icon: 'bi-clock-history' },
    { number: '100%', label: 'Safety Record', icon: 'bi-shield-check' }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            <i className="bi bi-people-fill mr-2"></i>
            Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our team of certified coaches and sports management professionals brings together 
            decades of experience in youth development and school partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={member.image}
                  alt={member.name}
                  crossOrigin="anonymous"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-heading font-bold mb-1">{member.name}</h3>
                  <p className="text-white/90 text-sm">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary-500 font-semibold">{member.experience}</span>
                  <i className="bi bi-award text-secondary-500"></i>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary-900 mb-2">Certifications</h4>
                  <div className="space-y-1">
                    {member.certifications.map((cert, certIndex) => (
                      <span key={certIndex} className="inline-block text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded mr-1 mb-1">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary-900 mb-2">Specialties</h4>
                  <ul className="space-y-1">
                    {member.specialties.map((specialty, specIndex) => (
                      <li key={specIndex} className="text-xs text-neutral-600 flex items-center">
                        <i className="bi bi-check-circle-fill text-primary-500 mr-2"></i>
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-primary-500 text-2xl`}></i>
              </div>
              <div className="text-3xl font-heading font-bold text-primary-900 mb-2">{stat.number}</div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
            Development-Focused Mindset
          </h3>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our team is united by a shared commitment to long-term athlete development, 
            character building, and creating positive impact in every student's life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <i className="bi bi-heart-fill text-3xl mb-3 block"></i>
              <h4 className="font-semibold mb-2">Passion for Development</h4>
              <p className="text-white/80 text-sm">Every coach is passionate about nurturing young talent</p>
            </div>
            <div>
              <i className="bi bi-mortarboard-fill text-3xl mb-3 block"></i>
              <h4 className="font-semibold mb-2">Continuous Learning</h4>
              <p className="text-white/80 text-sm">Regular training and certification updates</p>
            </div>
            <div>
              <i className="bi bi-people-fill text-3xl mb-3 block"></i>
              <h4 className="font-semibold mb-2">Community Focus</h4>
              <p className="text-white/80 text-sm">Building stronger communities through sports</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
