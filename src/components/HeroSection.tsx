import React, { useState } from 'react';
import { ChevronLeft, ChevronRight,Pin, Star, Users, Award, TrendingUp, Brain, Shield, Clock, Heart } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
  {
    title: "Advanced Deep TMS at KarmaTMS",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d85b7133-76b3-47d9-8904-c6b4ffc09e40.jpeg",
    alt: "Karma TMS entrance"
  },
  {
    title: "Find us in Palm Springs",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b65c46ad-dd56-4c76-bfc8-9fbe25e9b7af.jpg",
    alt: "Palm Springs view"
  },
  {
    title: "Best Deep TMS in Palm Springs",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ab4091f6-2a9f-4462-909c-148d587ba88f.jpg",
    alt: "Palm Springs"
  },
  {
    title: "Advanced TMS Setup",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/031012db-9570-41de-bb30-96c6fa482330.png",
    alt: "TMS-Chair"
  }];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const conditions = [
  "Depression (Treatment-Resistant)",
  "Anxiety Disorders",
  "OCD (Obsessive Compulsive Disorder)",
  "PTSD (Post-Traumatic Stress)",
  "Bipolar Depression",
  "Addiction Recovery Support"];


  return (
    <div className=" ">
      <div className=" w-full mt-4">
        <div className="w-full overflow-hidden">
          <div className="grid lg:grid-cols-2 xl:grid-cols-5 ">
            
            {/* Left Section - Content */}
            <div className="xl:col-span-3 p-4 lg:p-6 xl:p-8 flex flex-col justify-center">
              <div className="space-y-6 lg:space-y-8">
                
                {/* Heading */}
                <div className="space-y-4 lg:space-y-6">
                  <div>
                  <Pin className="w-5 h-5 text-violet-500 mr-2"/> Palm Springs , CA
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                    Advanced <span className="bg-gradient-to-r from-blue-magenta via-blue-magenta/70 to-blue-magenta bg-clip-text text-transparent">Deep TMS</span> Therapy
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl">
                    Revolutionary FDA-approved treatment for depression, anxiety, OCD, and PTSD. Experience breakthrough results with our advanced Deep TMS technology at Karma TMS.
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

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                  <button className="flex-1 bg-gradient-to-r from-blue-magenta via-blue-magenta/70 to-blue-magenta text-white font-semibold py-2 lg:py-3 px-4 rounded-full  transform hover:-translate-y-1 transition-all duration-300 text-center text-base lg:text-lg hover:scale-[1.02]">
                    Take Mental Health Quiz
                  </button>
                  <button className="flex-1 bg-white border-2 border-blue-magenta text-blue-magenta font-semibold py-2 lg:py-3 px-4 rounded-full transform hover:-translate-y-1 transition-all duration-300 text-center text-base lg:text-lg hover:scale-[1.02] hover:border-blue-magenta/30 hover:text-white hover:bg-blue-magenta/70">
                    View Treatments
                  </button>
                </div>

              </div>
            </div>

            {/* Right Section - Form & Stats */}
            <div className="xl:col-span-2 bg-gradient-to-br from-blue-magenta via-blue-magenta/70 to-blue-magenta rounded-3xl m-2 p-2 sm:p-2 md:p-2 lg:p-4 xl:p-6 flex flex-col">
              
              {/* Contact Form */}
              <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-4 shadow-2xl flex-grow border border-white/20">
                <div className="flex justify-between items-center mb-4 lg:mb-8">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center">
                    <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-violet-600 mr-2" />
                    Get In Touch
                  </h2>
                  <button className="bg-gradient-to-r from-blue-magenta via-blue-magenta/70 to-blue-magenta text-white font-semibold py-2 px-4 lg:px-6 rounded-full  transform hover:-translate-y-0.5 transition-all duration-300 text-sm lg:text-base hover:scale-105">
                    Send
                  </button>
                </div>
                
                <div className="space-y-4 lg:space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 lg:px-5 py-3 lg:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white text-sm lg:text-base" />

                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 lg:px-5 py-3 lg:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white text-sm lg:text-base" />

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 lg:px-5 py-3 lg:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white text-sm lg:text-base" />

                  </div>
                  
                  <div>
                    <select className="w-full px-4 lg:px-5 py-3 lg:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white text-sm lg:text-base">
                      <option value="">Select Condition</option>
                      {conditions.map((condition, index) =>
                      <option key={index} value={condition}>{condition}</option>
                      )}
                    </select>
                  </div>
                  
                  <div>
                    <textarea
                      placeholder="Tell us about your situation and how we can help..."
                      rows={4}
                      className="w-full px-4 lg:px-5 py-3 lg:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-300 resize-none bg-white/90 backdrop-blur-sm hover:bg-white text-sm lg:text-base">
                    </textarea>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mt-6 lg:mt-8 space-y-4 lg:space-y-6">
                
                {/* Main Stats */}
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <div className="bg-white/90 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-4 lg:p-6 text-center shadow-xl border border-white/20 hover:bg-white/95 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">85%</div>
                    <div className="text-xs lg:text-sm font-semibold text-gray-700 mt-1 lg:mt-2">Success Rate</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-4 lg:p-6 text-center shadow-xl border border-white/20 hover:bg-white/95 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">10K+</div>
                    <div className="text-xs lg:text-sm font-semibold text-gray-700 mt-1 lg:mt-2">Patients Treated</div>
                  </div>
                </div>

                {/* Additional Stats */}
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
                    <div className="text-[10px] lg:text-xs font-medium text-gray-600">Approved</div>
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
    </div>);

};

export default HeroSection;