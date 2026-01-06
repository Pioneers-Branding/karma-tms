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

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyChooseKarmaSection />
      <ConditionsSection />
      <HowTMSWorks />
      <TestimonialsSection />
      <DoctorSection />
      <TreatmentProcessSection />
      <LocationContactSection />
      <QuickAccessSection />
      <FooterSection />
    </div>);

};

export default HomePage;