import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyChooseKarmaSection from '@/components/WhyChooseKarmaSection';
import ConditionsSection from '@/components/ConditionsSection';
import HowTMSWorks from '@/components/HowTMSWorks';
import TestimonialsSection from '@/components/TestimonialsSection';
import DoctorSection from '@/components/DoctorSection';
import TreatmentProcessSection from '@/components/TreatmentProcessSection';
import LocationContactSection from '@/components/LocationContactSection';
import QuickAccessSection from '@/components/QuickAccessSection';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="KarmaTMS | TMS Therapy for Depression & Mental Health | Palm Springs, CA"
        description="Leading TMS therapy center in Palm Springs. FDA-approved depression treatment, anxiety therapy & mental health services. 85% success rate. Call (760) 760-5675."
        keywords="KarmaTMS, Karma mental health, TMS therapy Palm Springs, depression treatment California, anxiety treatment, mental health Palm Springs, transcranial magnetic stimulation"
        canonical="/" />

      <StructuredData type="organization" />
      <Navigation />
      {/* Hero - Dark background with images */}
      <HeroSection />
      
      {/* Why Choose Karma - Gray background */}
      <div className="bg-gray-50">
        <WhyChooseKarmaSection />
      </div>
      
      {/* Conditions - White background */}
      <div className="bg-white">
        <ConditionsSection />
      </div>
      
      {/* How TMS Works - Gray background */}
      <div className="bg-gray-50">
        <HowTMSWorks />
      </div>
      
      {/* Testimonials - White background */}
      <div className="bg-white">
        <TestimonialsSection />
      </div>
      
      {/* Doctor Section - Gray background */}
      <div className="bg-gray-50">
        <DoctorSection />
      </div>
      
      {/* Treatment Process - White background */}
      <div className="bg-white">
        <TreatmentProcessSection />
      </div>
      
      {/* Location & Contact - Gray background */}
      <div className="bg-gray-50">
        <LocationContactSection />
      </div>
      
      {/* Quick Access Resources - Gray background (removed emergency section) */}
      <div className="bg-gray-50">
        <QuickAccessSection />
      </div>
      
      {/* Footer - Dark background */}
      <FooterSection />
    </div>);

};

export default HomePage;