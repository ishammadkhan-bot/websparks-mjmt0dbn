import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    message: '',
    programInterest: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    window.setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        role: '',
        message: '',
        programInterest: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: 'bi-telephone',
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      action: 'Call Now'
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      details: ['info@athletesportslab.com', 'partnerships@athletesportslab.com'],
      action: 'Send Email'
    },
    {
      icon: 'bi-geo-alt',
      title: 'Office',
      details: ['123 Sports Complex Road', 'Bangalore, Karnataka 560001'],
      action: 'Get Directions'
    },
    {
      icon: 'bi-clock',
      title: 'Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      action: 'Schedule Meeting'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary-100 rounded-full text-secondary-700 text-sm font-medium mb-6">
            <i className="bi bi-chat-dots mr-2"></i>
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-6">
            Contact & Partnership
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your school's sports program? Let's discuss how we can create 
            a customized basketball development program for your institution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900 mb-8">
              Let's Start the Conversation
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-neutral-50 p-6 rounded-2xl hover:bg-neutral-100 transition-colors">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
                    <i className={`${info.icon} text-white text-lg`}></i>
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-primary-900 mb-3">
                    {info.title}
                  </h4>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-neutral-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <button className="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors">
                    {info.action} <i className="bi bi-arrow-right ml-1"></i>
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-heading font-bold mb-4">
                Quick Response Guarantee
              </h4>
              <p className="text-white/90 mb-6">
                We understand that school decisions require quick turnaround. 
                We guarantee a response within 24 hours for all partnership inquiries.
              </p>
              <div className="flex items-center">
                <i className="bi bi-clock text-2xl mr-3"></i>
                <span className="font-semibold">24-Hour Response Time</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-3xl p-8">
            <h3 className="text-2xl font-heading font-bold text-primary-900 mb-6">
              Partnership Inquiry Form
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="bi bi-check-lg text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-heading font-bold text-primary-900 mb-2">
                  Thank You!
                </h4>
                <p className="text-neutral-600">
                  Your inquiry has been submitted. We'll contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="your.email@school.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-900 mb-2">
                      Your Role *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select your role</option>
                      <option value="principal">Principal</option>
                      <option value="sports-coordinator">Sports Coordinator</option>
                      <option value="administrator">Administrator</option>
                      <option value="facility-owner">Facility Owner</option>
                      <option value="parent">Parent</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    School/Organization Name *
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your school or organization name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    Program Interest
                  </label>
                  <select
                    name="programInterest"
                    value={formData.programInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select program of interest</option>
                    <option value="school-program">School Basketball Program</option>
                    <option value="after-school">After-School Academy</option>
                    <option value="ppp-facility">PPP Sports Facility</option>
                    <option value="pilot-program">Pilot Program</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-<think>
I need to continue from where I left off in the Contact component. I was in the middle of creating the form textarea label and need to complete the Contact component, then finish the remaining components and files for the Athlete Sports Lab website.
</think>

900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your requirements, student count, facilities, and any specific questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  <i className="bi bi-send mr-2"></i>
                  Send Partnership Inquiry
                </button>

                <p className="text-xs text-neutral-500 text-center">
                  By submitting this form, you agree to be contacted by our team regarding partnership opportunities.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
              Ready to Start Your Pilot Program?
            </h3>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the ASL difference with a 4-6 week pilot program. 
              No long-term commitment required - just results you can see.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-secondary-500 rounded-lg hover:bg-neutral-100 transition-colors font-semibold">
                <i className="bi bi-play-circle mr-2"></i>
                Start Pilot Program
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold">
                <i className="bi bi-calendar-check mr-2"></i>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
