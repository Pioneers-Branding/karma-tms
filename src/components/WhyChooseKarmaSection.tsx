import React from 'react';
import { CheckCircle, Shield, Clock, Brain, Users, Award } from 'lucide-react';

const WhyChooseKarmaSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "FDA-Approved Treatment",
      description: "Non-invasive, scientifically proven therapy with no medication side effects",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center"
    },
    {
      icon: Clock,
      title: "Convenient 20-Minute Sessions",
      description: "Quick treatments that fit into your schedule - drive yourself to and from appointments",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&crop=center"
    },
    {
      icon: Users,
      title: "75% Success Rate",
      description: "Clinically meaningful improvement in 3 out of 4 patients with treatment-resistant depression",
      image: "https://images.unsplash.com/photo-1623410439361-22ac19216577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwZnJvbSUyMFVuc3BsYXNoJTIwd2l0aCUyMGElMjBmb2N1cyUyMG9uJTIwdGhlJTIwY2VudGVyJTJDJTIwZGltZW5zaW9ucyUyMDgwMHg2MDAlMjBwaXhlbHMufGVufDB8fHx8MTc1NTAwMTk3OXww&ixlib=rb-4.1.0&q=80&w=200$w=800"
    },
    {
      icon: Brain,
      title: "Advanced Technology",
      description: "State-of-the-art TMS equipment with precise targeting and personalized treatment protocols",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center"
    },
    {
      icon: CheckCircle,
      title: "Insurance Coverage",
      description: "Covered by major insurance providers when you've tried multiple antidepressants and therapy",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center"
    },
    {
      icon: Award,
      title: "Expert Care Team",
      description: "Led by Dr. Keerthy Sunder, double board-certified in Psychiatry and Addiction Medicine",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose Karma TMS?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Experience the difference of personalized, evidence-based TMS therapy in the heart of the Coachella Valley
          </p>
        </div>

        {/* Benefits Grid with Alternating Layout */}
        <div className="space-y-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Side */}
                <div className="lg:w-1/2 relative group overflow-hidden rounded-2xl shadow-2xl">
                  <div
                    className="h-80 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${benefit.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#572670]/60 via-[#572670]/20 to-transparent" />
                  <div className={`absolute ${isEven ? 'bottom-6 left-6' : 'bottom-6 right-6'} p-4 bg-white/10 backdrop-blur-md rounded-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#572670]/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-[#572670]" />
                    </div>
                    <div className="text-sm font-medium text-[#572670] bg-[#572670]/10 px-3 py-1 rounded-full">
                      {index < 2 ? 'Core Benefit' : index < 4 ? 'Clinical Advantage' : 'Professional Excellence'}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <div className="pt-4">
                    <button className="text-[#572670] font-semibold hover:text-[#572670]/80 transition-colors flex items-center gap-2 group">
                      Learn More 
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#572670] to-[#7c3d90] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-6 text-white/90">
              Join the thousands who have transformed their lives with TMS therapy
            </p>
            <button className="bg-white text-[#572670] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Your Consultation Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKarmaSection;