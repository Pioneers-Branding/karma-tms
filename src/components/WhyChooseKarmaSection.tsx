import React from 'react';

const WhyChooseKarmaSection = () => {
  const commitmentSections = [
  {
    title: "Personalized Treatment Plans",
    description: "Our expert team designs a unique TMS therapy plan tailored to your specific needs, ensuring the most effective and targeted treatment possible.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center",
    overlay: true
  },
  {
    title: "Experienced and Compassionate Staff",
    description: "You'll be guided by our highly trained and caring professionals who are dedicated to making your TMS journey comfortable, safe, and successful.",
    image: "https://images.unsplash.com/photo-1682352689072-7b2c0b8580c2?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overlay: true
  },
  {
    title: "State-of-the-Art Technology",
    description: "We use the latest advancements in TMS technology to deliver precise and powerful therapy, maximizing therapeutic benefits with minimal discomfort.",
    image: "https://karmatms.com/wp-content/uploads/2024/09/64f261827ad091245bab5b5b-2.jpeg",
    overlay: false
  },
  {
    title: "Holistic and Integrated Care",
    description: "Our approach extends beyond TMS therapy. We integrate mental health support and resources to promote your overall well-being and long-term recovery.",
    image: "https://images.unsplash.com/photo-1567990064565-f1dababb97b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overlay: true
  }];



  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose Karma TMS?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Experience advanced, compassionate, and personalized TMS therapy for lasting change.
          </p>
        </div>

        {/* Image Grid Layout */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[800px]">
            {/* First large section */}
            <div className="lg:col-span-5 lg:row-span-2 relative group overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${commitmentSections[0].image})` }} />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  {commitmentSections[0].title}
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  {commitmentSections[0].description}
                </p>
              </div>
            </div>

            {/* Second section - top right */}
            <div className="lg:col-span-7 lg:row-span-1 relative group overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${commitmentSections[1].image})` }} />

              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-center p-8 text-white min-h-[300px] lg:min-h-0">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                  {commitmentSections[1].title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {commitmentSections[1].description}
                </p>
              </div>
            </div>

            {/* Third and fourth sections - bottom row */}
            <div className="lg:col-span-3 lg:row-span-1 relative group overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${commitmentSections[2].image})` }} />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white min-h-[300px] lg:min-h-0">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-tight">
                  {commitmentSections[2].title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {commitmentSections[2].description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:row-span-1 relative group overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${commitmentSections[3].image})` }} />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white min-h-[300px] lg:min-h-0">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-tight">
                  {commitmentSections[3].title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {commitmentSections[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default WhyChooseKarmaSection;