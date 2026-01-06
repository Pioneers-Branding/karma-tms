import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Heart } from
'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
  {
    title: 'Advanced TMS at KarmaTMS',
    image:
    'https://res.cloudinary.com/de4kw1t2i/image/upload/v1761742451/IMG_9537_VSCO_uw6qok.jpg',
    alt: 'KarmaTMS mental health center entrance in Palm Springs offering advanced TMS therapy for depression treatment'
  },
  {
    title: 'Find us in Palm Springs',
    image:
    'https://res.cloudinary.com/de4kw1t2i/image/upload/v1759239428/ktms_irodne.jpg',
    alt: 'Palm Springs California location for KarmaTMS depression and anxiety treatment center'
  },
  {
    title: 'Best TMS in Palm Springs',
    image:
    'https://res.cloudinary.com/de4kw1t2i/image/upload/v1759239508/pssunset_zbbsur.jpg',
    alt: 'Palm Springs sunset view near Karma mental health TMS therapy center'
  },
  {
    title: 'Advanced TMS Setup',
    image:
    'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763029482/Exomind_PIC_Female-Model3_0342_ENUS100_qx29w9.jpg',
    alt: 'Advanced TMS therapy chair for depression treatment at KarmaTMS mental health center'
  }];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const conditions = [
  'Depression (Treatment-Resistant)',
  'Anxiety Disorders',
  'OCD (Obsessive Compulsive Disorder)',
  'PTSD (Post-Traumatic Stress)',
  'Bipolar Depression',
  'Addiction Recovery Support'];


  return (
    <section>
      <div className="mx-auto max-w-[1500px] px-4 mt-4">
        <div className="grid lg:grid-cols-2 xl:grid-cols-5 items-center min-h-[75vh]">
          {/* Left Section */}
          <div className="xl:col-span-3 py-4 lg:p-6 xl:p-8 flex flex-col justify-center space-y-6 lg:space-y-8 max-w-4xl">
            <div className="space-y-3">
              <div className="flex flex-row gap-2">
                <a
                  href="https://share.google/5d1EU2i2b6WbjZLQc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[11px] flex flex-row bg-blue-magenta p-1 px-4 rounded-xl w-fit items-center hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">


                  <MapPin className="w-5 h-5 text-white mr-2" />
                  Palm Springs, CA
                </a>
                <a
                  href="https://share.google/e8yhlNFFaLaN8z1d1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[11px] flex flex-row bg-blue-magenta p-1 px-4 rounded-xl w-fit items-center hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">


                  <MapPin className="w-5 h-5 text-white mr-2" />
                  TwentyNine Palms
                </a>
                <a
                  href="https://maps.app.goo.gl/6wyxkwnGZ5g2ua1a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[11px] flex flex-row bg-blue-magenta p-1 px-4 rounded-xl w-fit items-center hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">


                  <MapPin className="w-5 h-5 text-white mr-2" />
                  Rancho Mirage
                </a>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                Effective
                <span className="bg-gradient-to-r from-blue-magenta via-blue-magenta/70 to-blue-magenta bg-clip-text text-transparent">
                  {' '}
                  TMS Therapy{' '}
                </span>
                for Mental Health in Palm Springs
              </h1>
              <p className="text-sm sm:text-base lg:text-lg max-w-2xl">
                Revolutionary FDA-cleared treatment for depression, anxiety, OCD,
                and PTSD. Our mental health facilities in Palm Springs provide
                breakthrough results with advanced TMS technology, offering
                comprehensive mental health care in Palm Springs, CA, through our
                experienced mental health counselors.
              </p>
            </div>
            {/* Image Slider */}
            <div className="relative bg-white rounded-3xl overflow-hidden group">
              <div className="relative h-64 sm:h-72 lg:h-80 xl:h-96">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg lg:text-xl drop-shadow-lg">
                    {slides[currentSlide].title}
                  </h3>
                </div>
              </div>
              {/* Slider Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl backdrop-blur-sm">


                <ChevronLeft className="w-5 h-5 text-indigo-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl backdrop-blur-sm">


                <ChevronRight className="w-5 h-5 text-indigo-600" />
              </button>
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ?
                  'bg-white scale-125 shadow-lg' :
                  'bg-white/60 hover:bg-white/80'}`
                  } />

                )}
              </div>
            </div>
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <Link to="/quiz" className="flex-1">
                <button className="w-full bg-gradient-to-r from-blue-magenta via-blue-magenta/70 to-blue-magenta text-white font-semibold py-2 lg:py-3 px-4 rounded-full transform hover:-translate-y-1 transition-all duration-300 text-center text-base lg:text-lg hover:scale-[1.02]">
                  Take Mental Health Quiz
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="xl:col-span-2 flex flex-col justify-center min-h-[75vh]">
            <div className="w-full flex flex-col ">
              <div className="bg-gradient-to-br from-blue-magenta via-blue-magenta/70 to-blue-magenta rounded-3xl max-w-xl w-full ml-auto p-6 flex flex-col">
                {/* Contact Form */}
                <form method="post" accept-charset="UTF-8" action='https://app.formester.com/forms/3KjFtZ7yT/submissions' autoComplete="on" className="bg-white/95 backdrop-blur-lg rounded-3xl w-full p-6 shadow-2xl border border-white/20">
                  <div className="flex justify-between items-center mb-4 lg:mb-6">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center">
                      <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-violet-600 mr-2" />
                      Get In Touch
                    </h2>
                    <button type="submit" className="bg-gradient-to-r from-blue-magenta via-blue-magenta/70 to-blue-magenta text-white font-semibold py-2 px-4 lg:px-6 rounded-full transform hover:-translate-y-0.5 transition-all duration-300 text-sm lg:text-base hover:scale-105">
                      Send
                    </button>
                  </div>
                  <div className="space-y-4 lg:space-y-5">
                    <div>
                      <label htmlFor="hero-full-name" className="sr-only">Full Name</label>
                      <input
                        id="hero-full-name"
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full px-4 lg:px-5 py-3 lg:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white text-sm lg:text-base" />

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="hero-email" className="sr-only">Email Address</label>
                        <input
                          id="hero-email"
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          required
                          className="w-full px-4 lg:px-5 py-3 lg:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white text-sm lg:text-base" />

                      </div>
                      <div>
                        <label htmlFor="hero-phone" className="sr-only">Phone Number</label>
                        <input
                          id="hero-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="Phone Number"
                          className="w-full px-4 lg:px-5 py-3 lg:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white text-sm lg:text-base" />

                      </div>
                    </div>
                    <div>
                      <label htmlFor="hero-condition" className="sr-only">Condition</label>
                      <select id="hero-condition" name="condition" className="w-full px-4 lg:px-5 py-3 lg:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white text-sm lg:text-base">
                        <option value="">Select Condition</option>
                        {conditions.map((condition, index) =>
                        <option key={index} value={condition}>
                            {condition}
                          </option>
                        )}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="hero-message" className="sr-only">Message</label>
                      <textarea
                        id="hero-message"
                        name="message"
                        placeholder="Tell us about your situation and how we can help. Our mental health counselors in Palm Springs, CA are here to support you..."
                        required
                        rows={4}
                        className="w-full px-4 lg:px-5 py-3 lg:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-300 resize-none bg-white/90 backdrop-blur-sm hover:bg-white text-sm lg:text-base">
                      </textarea>
                    </div>
                  </div>
                </form>
                {/* Stats Section */}
                <div className="w-full mt-4 space-y-4 lg:space-y-6">
                  <div className="grid grid-cols-2 gap-4 lg:gap-6">
                    <div className="bg-white/90 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-4 lg:p-6 text-center shadow-xl border border-white/20 hover:bg-white/95 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                        85%
                      </div>
                      <div className="text-xs lg:text-sm font-semibold text-gray-700 mt-1 lg:mt-2">
                        Success Rate
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-4 lg:p-6 text-center shadow-xl border border-white/20 hover:bg-white/95 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                        10K+
                      </div>
                      <div className="text-xs lg:text-sm font-semibold text-gray-700 mt-1 lg:mt-2">
                        Patients Treated
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                    <div className="bg-white/80 backdrop-blur-lg rounded-xl lg:rounded-2xl p-3 lg:p-4 text-center shadow-lg border border-white/10 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-center mb-1 lg:mb-2">
                        <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-500 mr-1" />
                        <span className="text-base lg:text-lg font-bold text-gray-800">4.9</span>
                      </div>
                      <div className="text-[10px] lg:text-xs font-medium text-gray-600">Rating</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-lg rounded-xl lg:rounded-2xl p-3 lg:p-4 text-center shadow-lg border border-white/10 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-center mb-1 lg:mb-2">
                        <Shield className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-1" />
                        <span className="text-base lg:text-lg font-bold text-gray-800">FDA</span>
                      </div>
                      <div className="text-[10px] lg:text-xs font-medium text-gray-600">Cleared</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-lg rounded-xl lg:rounded-2xl p-3 lg:p-4 text-center shadow-lg border border-white/10 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-center mb-1 lg:mb-2">
                        <Clock className="w-3 h-3 lg:w-4 lg:h-4 text-indigo-500 mr-1" />
                        <span className="text-base lg:text-lg font-bold text-gray-800">15+</span>
                      </div>
                      <div className="text-[10px] lg:text-xs font-medium text-gray-600">Years Exp.</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-lg rounded-xl lg:rounded-2xl p-3 lg:p-4 text-center shadow-lg border border-white/10 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-center mb-1 lg:mb-2">
                        <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-violet-500 mr-1" />
                        <span className="text-base lg:text-lg font-bold text-gray-800">92%</span>
                      </div>
                      <div className="text-[10px] lg:text-xs font-medium text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;