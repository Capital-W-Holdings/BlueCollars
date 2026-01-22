"use client";

import React, { useState, useEffect } from 'react';
import { Phone, Clock, Shield, Wrench, Droplets, Wind, Flame, MapPin, Star, ChevronRight, Menu, X, CheckCircle, Zap, Award, Users, ChevronDown } from 'lucide-react';

const BlueCollarsPatriotic = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Droplets, title: 'Plumbing', desc: 'Complete residential & commercial plumbing solutions', items: ['Water Heater Repair', 'Drain Cleaning', 'Sewer Line Repair', 'Leak Detection'] },
    { icon: Wind, title: 'HVAC', desc: 'Climate control experts for year-round comfort', items: ['AC Installation', 'Heating Repair', 'Heat Pumps', 'Maintenance Plans'] },
    { icon: Flame, title: 'Gas Services', desc: 'Safe, certified gas line installation & repair', items: ['Gas Piping', 'Leak Repair', 'Appliance Hookup', 'Safety Inspections'] },
    { icon: Zap, title: 'Emergency 24/7', desc: 'Round-the-clock rapid response team', items: ['Burst Pipes', 'No Heat/AC', 'Gas Leaks', 'Flooding'] },
  ];

  const stats = [
    { value: '24/7', label: 'Service' },
    { value: '1000+', label: 'Jobs Done' },
    { value: '100%', label: 'Satisfaction' },
    { value: '<30', label: 'Min Response' },
  ];

  const testimonials = [
    { name: 'Michael R.', location: 'Downtown Charleston', text: 'Called at 2 AM with a burst pipe. They were here in 30 minutes. Absolute lifesavers.', rating: 5 },
    { name: 'Sarah K.', location: 'Mount Pleasant', text: 'Professional, clean, and honest pricing. Finally found my go-to HVAC company.', rating: 5 },
    { name: 'David L.', location: 'North Charleston', text: 'Heat pump installation was flawless. Team explained everything clearly.', rating: 5 },
  ];

  const areas = ['Charleston', 'North Charleston', 'Mount Pleasant', 'Summerville', 'Goose Creek', 'James Island', 'West Ashley', 'Ladson', 'Hanahan', 'Isle of Palms'];

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bebas+Neue&display=swap');

        * { -webkit-tap-highlight-color: transparent; }

        .font-display { font-family: 'Bebas Neue', sans-serif; }

        .text-navy { color: #0a2463; }
        .bg-navy { background-color: #0a2463; }
        .text-red { color: #c8102e; }
        .bg-red { background-color: #c8102e; }
        .border-navy { border-color: #0a2463; }
        .border-red { border-color: #c8102e; }

        .hero-pattern {
          background-color: #ffffff;
          background-image:
            linear-gradient(135deg, rgba(10, 36, 99, 0.03) 25%, transparent 25%),
            linear-gradient(225deg, rgba(10, 36, 99, 0.03) 25%, transparent 25%),
            linear-gradient(45deg, rgba(10, 36, 99, 0.03) 25%, transparent 25%),
            linear-gradient(315deg, rgba(10, 36, 99, 0.03) 25%, transparent 25%);
          background-size: 40px 40px;
        }

        .btn-red {
          background: linear-gradient(180deg, #d91a3c 0%, #c8102e 100%);
          box-shadow: 0 4px 14px rgba(200, 16, 46, 0.3);
          transition: all 0.2s ease;
        }

        .btn-red:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(200, 16, 46, 0.4);
        }

        .btn-red:active {
          transform: translateY(0);
        }

        .btn-navy {
          background: linear-gradient(180deg, #0d2d7a 0%, #0a2463 100%);
          box-shadow: 0 4px 14px rgba(10, 36, 99, 0.3);
          transition: all 0.2s ease;
        }

        .btn-navy:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(10, 36, 99, 0.4);
        }

        .card-shadow {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        }

        .card-shadow-lg {
          box-shadow: 0 10px 40px -10px rgba(10, 36, 99, 0.15);
        }

        .emergency-banner {
          background: linear-gradient(90deg, #c8102e 0%, #d91a3c 50%, #c8102e 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        .stripe-accent {
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(200, 16, 46, 0.05) 10px,
            rgba(200, 16, 46, 0.05) 20px
          );
        }

        .star-bg {
          position: relative;
        }

        .star-bg::before {
          content: '★';
          position: absolute;
          font-size: 200px;
          color: rgba(10, 36, 99, 0.03);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        /* Mobile-first responsive utilities */
        .touch-target {
          min-height: 48px;
          min-width: 48px;
        }

        .safe-top { padding-top: env(safe-area-inset-top); }
        .safe-bottom { padding-bottom: env(safe-area-inset-bottom); }

        /* Smooth scroll on iOS */
        .scroll-smooth { -webkit-overflow-scrolling: touch; }

        /* Service accordion */
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }

        .accordion-content.open {
          max-height: 300px;
        }
      `}</style>

      {/* Emergency Banner - Mobile Sticky */}
      <div className="emergency-banner text-white py-2 px-4 text-center safe-top">
        <a href="tel:8433756680" className="flex items-center justify-center gap-2 text-sm font-semibold">
          <Phone className="w-4 h-4" />
          <span>24/7 Emergency: (843) 375-6680</span>
        </a>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-xl text-navy tracking-wide">BLUE COLLARS</div>
                <div className="text-[10px] text-red font-semibold tracking-wider">24HR PLUMBING & HVAC</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {['Services', 'About', 'Areas', 'Reviews'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-navy transition-colors">
                  {item}
                </a>
              ))}
              <a href="tel:8433756680" className="btn-red text-white px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden touch-target flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-navy" /> : <Menu className="w-6 h-6 text-navy" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {['Services', 'About', 'Areas', 'Reviews'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-4 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-lg touch-target"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <a
                  href="tel:8433756680"
                  className="btn-red text-white w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Call (843) 375-6680
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-pattern relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-navy" />
              <span className="text-sm font-medium text-navy">Licensed & Insured in South Carolina</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-navy leading-none tracking-wide mb-4">
              CHARLESTON&apos;S
              <span className="block text-red">TRUSTED</span>
              PLUMBING & HVAC
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto">
              Professional service when you need it most. Available 24/7 for emergencies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <a
                href="tel:8433756680"
                className="btn-red text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 touch-target"
              >
                <Phone className="w-5 h-5" />
                (843) 375-6680
              </a>
              <a
                href="#services"
                className="btn-navy text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 touch-target"
              >
                View Services
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Icons */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-navy" />
                <span>NATE Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red" />
                <span>&lt;30 Min Response</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-navy">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl md:text-4xl text-white">{stat.value}</div>
                  <div className="text-xs md:text-sm text-blue-200 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-red/10 text-red text-sm font-semibold px-4 py-1 rounded-full mb-4">
              OUR SERVICES
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy mb-4">
              COMPLETE HOME SERVICES
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From routine maintenance to emergency repairs, our certified technicians have you covered.
            </p>
          </div>

          {/* Mobile: Accordion | Desktop: Grid */}
          <div className="md:hidden space-y-3">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white rounded-xl card-shadow overflow-hidden">
                <button
                  className="w-full px-5 py-4 flex items-center justify-between touch-target"
                  onClick={() => setActiveService(activeService === index ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${index === 3 ? 'bg-red' : 'bg-navy'}`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-navy">{service.title}</div>
                      <div className="text-sm text-gray-500">{service.items.length} services</div>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeService === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`accordion-content ${activeService === index ? 'open' : ''}`}>
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-red rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white rounded-2xl p-6 card-shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${index === 3 ? 'bg-red' : 'bg-navy'}`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-navy mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-red rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 md:py-24 star-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-navy/10 text-navy text-sm font-semibold px-4 py-1 rounded-full mb-4">
                WHY BLUE COLLARS
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-navy mb-6">
                BUILT ON TRUST<br />& RELIABILITY
              </h2>
              <p className="text-gray-600 mb-8">
                Since 2023, we&apos;ve been Charleston&apos;s go-to team for plumbing and HVAC emergencies. Our commitment to quality and customer satisfaction sets us apart.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Clock, title: 'Rapid Response', desc: 'Average 23-minute arrival for emergencies', color: 'bg-red' },
                  { icon: Shield, title: 'Licensed & Insured', desc: 'Fully certified in South Carolina', color: 'bg-navy' },
                  { icon: Award, title: 'Extended Warranties', desc: "Industry's longest warranties on parts & labor", color: 'bg-red' },
                  { icon: Users, title: 'Satisfaction Guaranteed', desc: '100% commitment to your satisfaction', color: 'bg-navy' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-white p-4 rounded-xl card-shadow">
                    <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image/Stats Card */}
            <div className="relative">
              <div className="bg-navy rounded-3xl p-8 md:p-10 text-white">
                <div className="text-center mb-8">
                  <div className="font-display text-6xl md:text-7xl">24/7</div>
                  <div className="text-blue-200 text-lg">Emergency Service</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="font-display text-3xl">1000+</div>
                    <div className="text-sm text-blue-200">Jobs Done</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="font-display text-3xl">100%</div>
                    <div className="text-sm text-blue-200">Satisfaction</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="font-display text-3xl">&lt;30</div>
                    <div className="text-sm text-blue-200">Min Response</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="font-display text-3xl">5.0</div>
                    <div className="text-sm text-blue-200">Star Rating</div>
                  </div>
                </div>
                <a
                  href="tel:8433756680"
                  className="btn-red w-full mt-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Decorative Badge */}
              <div className="absolute -top-4 -right-4 bg-red text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
                <Star className="w-5 h-5 fill-white" />
                <span className="text-xs font-bold">TOP RATED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red/10 text-red text-sm font-semibold px-4 py-1 rounded-full mb-4">
              <MapPin className="w-4 h-4" />
              SERVICE AREAS
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy mb-4">
              SERVING GREATER CHARLESTON
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-white border-2 border-gray-100 hover:border-navy rounded-xl py-4 px-4 text-center font-medium text-gray-700 hover:text-navy transition-colors cursor-pointer"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              <Star className="w-4 h-4 fill-yellow-500" />
              CUSTOMER REVIEWS
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy mb-4">
              WHAT OUR CUSTOMERS SAY
            </h2>
          </div>

          {/* Mobile: Horizontal Scroll | Desktop: Grid */}
          <div className="md:hidden overflow-x-auto scroll-smooth -mx-4 px-4 pb-4">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white border-2 border-gray-100 rounded-2xl p-6 w-80 flex-shrink-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">&quot;{t.text}&quot;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-navy">{t.name}</div>
                      <div className="text-sm text-gray-500">{t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-navy/20 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-navy">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-navy mb-4">
            NEED EMERGENCY SERVICE?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-xl mx-auto">
            Our technicians are standing by 24/7. Don&apos;t wait – call now for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8433756680"
              className="btn-red text-white px-10 py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-3 touch-target"
            >
              <Phone className="w-6 h-6" />
              (843) 375-6680
            </a>
            <a
              href="mailto:Office@bluecollars.com"
              className="bg-white text-navy px-10 py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-2 touch-target hover:bg-gray-100 transition-colors"
            >
              Email Us
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-navy" />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-xl tracking-wide">BLUE COLLARS</div>
                  <div className="text-[10px] text-gray-400">24HR PLUMBING & HVAC</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Charleston&apos;s trusted partner for professional plumbing and HVAC services.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <a href="tel:8433756680" className="block hover:text-white">(843) 375-6680</a>
                <a href="mailto:Office@bluecollars.com" className="block hover:text-white">Office@bluecollars.com</a>
                <p>2157 Rich St, Ste 203<br />North Charleston, SC 29405</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <div className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
                {['Plumbing', 'HVAC', 'Emergency', 'Commercial', 'Gas Lines', 'Maintenance'].map((item) => (
                  <a key={item} href="#services" className="hover:text-white">{item}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 Blue Collars 24hr Plumbing & HVAC. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 safe-bottom z-40">
        <a
          href="tel:8433756680"
          className="btn-red text-white w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3"
        >
          <Phone className="w-5 h-5" />
          Call Now: (843) 375-6680
        </a>
      </div>

      {/* Spacer for mobile sticky CTA */}
      <div className="md:hidden h-20" />
    </div>
  );
};

export default function Home() {
  return <BlueCollarsPatriotic />;
}
