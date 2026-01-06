import React from 'react';

const WhyChooseKarmaSection = () => {
  const commitmentSections = [
  {
    title: "A Promise Reflected in Every Window",
    description: "Our windows are designed to enhance your home's beauty and functionality, ensuring quality and reliability in every installation.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center",
    overlay: true
  },
  {
    title: "Promise of Purposeful Innovation",
    description: "Experience the latest advancements in door and window technology, crafted to meet your needs for efficiency, security, and style.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
    overlay: true
  },
  {
    title: "Protecting Green Environment",
    description: "We prioritize eco-friendly materials and practices, making it easy for you to contribute to a healthier planet with every purchase.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center",
    overlay: false
  },
  {
    title: "Thinking For Customers Benefit",
    description: "We offer personalized solutions and exceptional service to make your home improvement journey seamless and rewarding.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center",
    overlay: true
  }];


  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Our Commitment to Excellence
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A Commitment to Sustainability and Customer Satisfaction
          </p>
        </div>

        {/* Image Grid Layout */}
        <div className="max-w-7xl mx-auto">
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