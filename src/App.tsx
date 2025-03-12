import React, { useState } from 'react';
import { Truck, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, ChevronRight, Users, Building2, Globe2, Star, MapPin, Send, Package, Warehouse, Ship, Plane } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const renderView = () => {
    switch(currentView) {
      case 'services':
        return (
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive logistics and transportation solutions tailored to meet your business needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Plane className="w-12 h-12 text-blue-900" />,
                    title: "Air Freight",
                    description: "Express air freight services with global reach and real-time tracking capabilities."
                  },
                  {
                    icon: <Ship className="w-12 h-12 text-blue-900" />,
                    title: "Ocean Freight",
                    description: "Cost-effective sea freight solutions for international shipping needs."
                  },
                  {
                    icon: <Truck className="w-12 h-12 text-blue-900" />,
                    title: "Road Transport",
                    description: "Reliable ground transportation services across continents."
                  },
                  {
                    icon: <Warehouse className="w-12 h-12 text-blue-900" />,
                    title: "Warehousing",
                    description: "Secure storage solutions with advanced inventory management."
                  },
                  {
                    icon: <Package className="w-12 h-12 text-blue-900" />,
                    title: "Cargo Insurance",
                    description: "Comprehensive coverage for your valuable shipments."
                  },
                  {
                    icon: <Globe2 className="w-12 h-12 text-blue-900" />,
                    title: "Global Logistics",
                    description: "End-to-end supply chain solutions for international trade."
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <button className="text-blue-900 font-medium flex items-center hover:text-blue-700">
                      Learn More
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">About TransportCo</h1>
                  <p className="text-lg text-gray-600 mb-6">
                    With over 25 years of experience in the logistics industry, TransportCo has established itself as a global leader in transportation and supply chain solutions.
                  </p>
                  <p className="text-lg text-gray-600 mb-8">
                    Our commitment to innovation, sustainability, and customer satisfaction has earned us the trust of thousands of businesses worldwide.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Our Mission</h3>
                      <p className="text-gray-600">To provide reliable, efficient, and sustainable logistics solutions.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Our Vision</h3>
                      <p className="text-gray-600">To be the world's most trusted logistics partner.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                    alt="About TransportCo" 
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {[
                  {
                    title: "Global Network",
                    description: "Present in over 150 countries with 50+ offices worldwide."
                  },
                  {
                    title: "Expert Team",
                    description: "Highly skilled professionals with decades of industry experience."
                  },
                  {
                    title: "Sustainable Practices",
                    description: "Committed to reducing environmental impact through green initiatives."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover how we've helped businesses optimize their supply chains and transportation needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Global E-commerce Distribution",
                    category: "Air Freight",
                    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  },
                  {
                    title: "Automotive Parts Logistics",
                    category: "Road Transport",
                    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  },
                  {
                    title: "Pharmaceutical Supply Chain",
                    category: "Temperature Controlled",
                    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  },
                  {
                    title: "Retail Distribution Network",
                    category: "Warehousing",
                    image: "https://images.unsplash.com/photo-1586528116493-ce41e8a5a3ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  },
                  {
                    title: "International Food Supply",
                    category: "Ocean Freight",
                    image: "https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  },
                  {
                    title: "Technology Hardware Transport",
                    category: "Secure Logistics",
                    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  }
                ].map((project, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <div className="relative">
                      <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                      <div className="absolute top-4 left-4 bg-blue-900 text-white px-4 py-1 rounded-full text-sm">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <button className="text-blue-900 font-medium flex items-center hover:text-blue-700">
                        View Case Study
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Get in touch with our team for any inquiries about our services or to request a quote.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 text-blue-900 mr-4" />
                      <div>
                        <h3 className="font-bold text-gray-900">Head Office</h3>
                        <p className="text-gray-600">123 Logistics Way, Transport City, TC 12345</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-blue-900 mr-4" />
                      <div>
                        <h3 className="font-bold text-gray-900">Phone</h3>
                        <p className="text-gray-600">1-800-123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-blue-900 mr-4" />
                      <div>
                        <h3 className="font-bold text-gray-900">Email</h3>
                        <p className="text-gray-600">info@transportco.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-6 h-6 text-blue-900 mr-4" />
                      <div>
                        <h3 className="font-bold text-gray-900">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-300 flex items-center justify-center"
                    >
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <>
            {/* Hero Section */}
            <div 
              className="relative h-[600px] bg-cover bg-center flex items-center"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
              }}
            >
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h1 className="text-5xl font-bold text-white mb-6">
                    Global Logistics Solutions for Your Business
                  </h1>
                  <p className="text-xl text-white mb-8">
                    Reliable, efficient, and sustainable transportation services worldwide
                  </p>
                  <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition duration-300 flex items-center">
                    Get Started
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-blue-900 text-white py-16">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <Users className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2">2,500+</div>
                    <div className="text-blue-200">Happy Clients</div>
                  </div>
                  <div>
                    <Globe2 className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2">150+</div>
                    <div className="text-blue-200">Countries Served</div>
                  </div>
                  <div>
                    <Building2 className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="text-blue-200">Global Offices</div>
                  </div>
                  <div>
                    <Star className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2">25+</div>
                    <div className="text-blue-200">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                  <p className="text-xl text-gray-600">Comprehensive logistics solutions tailored to your needs</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Air Freight",
                      description: "Fast and reliable air transportation services worldwide",
                      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    },
                    {
                      title: "Ocean Freight",
                      description: "Cost-effective sea freight solutions for global trade",
                      image: "https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    },
                    {
                      title: "Road Transport",
                      description: "Efficient ground transportation across continents",
                      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                      <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                        <button className="mt-4 text-blue-900 font-medium flex items-center hover:text-blue-700">
                          Learn More
                          <ChevronRight className="ml-1 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>1-800-123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@transportco.com</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Mon - Fri: 8:00 - 17:00</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-300" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-300" />
            <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-300" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-blue-300" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentView('home')}>
              <Truck className="w-10 h-10 text-blue-900" />
              <span className="ml-2 text-2xl font-bold text-blue-900">TransportCo</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentView('home')}
                className={`text-gray-700 hover:text-blue-900 font-medium ${currentView === 'home' ? 'text-blue-900' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentView('services')}
                className={`text-gray-700 hover:text-blue-900 font-medium ${currentView === 'services' ? 'text-blue-900' : ''}`}
              >
                Services
              </button>
              <button 
                onClick={() => setCurrentView('about')}
                className={`text-gray-700 hover:text-blue-900 font-medium ${currentView === 'about' ? 'text-blue-900' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => setCurrentView('projects')}
                className={`text-gray-700 hover:text-blue-900 font-medium ${currentView === 'projects' ? 'text-blue-900' : ''}`}
              >
                Projects
              </button>
              <button 
                onClick={() => setCurrentView('contact')}
                className={`text-gray-700 hover:text-blue-900 font-medium ${currentView === 'contact' ? 'text-blue-900' : ''}`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {renderView()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Truck className="w-8 h-8" />
                <span className="ml-2 text-xl font-bold">TransportCo</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in global logistics and transportation solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentView('about')} className="text-gray-400 hover:text-white">About Us</button></li>
                <li><button onClick={() => setCurrentView('services')} className="text-gray-400 hover:text-white">Services</button></li>
                <li><button onClick={() => setCurrentView('projects')} className="text-gray-400 hover:text-white">Projects</button></li>
                <li><button onClick={() => setCurrentView('contact')} className="text-gray-400 hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Air Freight</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Ocean Freight</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Road Transport</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Warehousing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  1-800-123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@transportco.com
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Mon - Fri: 8:00 - 17:00
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 TransportCo. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;