import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Mail, Navigation as NavIcon, Shield, Heart, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const TwentyNinePalmsPage = () => {
  const services = [
    'TMS Therapy',
    'PR-TMS (Personalized Repetitive TMS)',
    'Brain Mapping (qEEG)',
    'Neurofeedback',
    'Medication Management',
    'PTSD Treatment'
  ];

  const features = [
    {
      icon: Shield,
      title: 'Veterans Welcome',
      description: 'Proud to serve military personnel and their families with specialized care'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Understanding the unique challenges faced by military communities'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Serving Twentynine Palms and the High Desert region'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="KarmaTMS Twentynine Palms | TMS Therapy for Veterans & Military | (760) 760-5675"
        description="KarmaTMS Twentynine Palms - TMS therapy near Marine Corps Base. PTSD treatment for veterans and military families. Depression & mental health services."
        keywords="KarmaTMS Twentynine Palms, TMS therapy 29 Palms, veterans mental health, PTSD treatment military, Marine Corps Base mental health"
        canonical="/29-palms"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/031012db-9570-41de-bb30-96c6fa482330.png"
      />
      <StructuredData 
        type="localBusiness"
        locations={[
          {
            name: "Twentynine Palms",
            address: {
              streetAddress: "72724 29 Palms Hwy. Suite 107-B",
              addressLocality: "Twentynine Palms",
              addressRegion: "CA",
              postalCode: "92277"
            },
            telephone: "+1-760-760-5675"
          }
        ]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/031012db-9570-41de-bb30-96c6fa482330.png')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-4 bg-blue-500/20 text-white border-blue-300">29 Palms Location</Badge>
          <h1 className="text-5xl font-bold mb-6">KarmaTMS Twentynine Palms - Military TMS Therapy Center</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Advanced TMS therapy serving the High Desert community and military families near MCAGCC
          </p>
        </div>
      </div>

      {/* Location Overview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Serving the High Desert Community</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our Twentynine Palms location is strategically positioned to serve military families 
                stationed at Marine Corps Air Ground Combat Center and the broader High Desert community. 
                We understand the unique mental health challenges faced by service members and their families.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Located conveniently on 29 Palms Highway, our facility offers easy access and ample parking. 
                We provide the same cutting-edge TMS therapy and comprehensive mental health services as our 
                Palm Springs locations, with a special focus on PTSD and military-related mental health conditions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">Schedule Consultation</Button>
                </Link>
                <a href="tel:7607605675">
                  <Button variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    760-760-5675
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/e3bc971e-e2ab-4334-ac23-0b9876309934.webp"
                alt="TMS Therapy Equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our 29 Palms Location</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {features.map((feature, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Location Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">72724 29 Palms Hwy. Suite 107-B</p>
                        <p className="text-gray-600">Twentynine Palms, CA 92277</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <a href="tel:7607605675" className="hover:text-blue-600 transition-colors">
                        760-760-5675
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Monday - Friday</p>
                        <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                        <p className="text-gray-600 mt-1">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <a href="mailto:contact@karmatms.com" className="hover:text-blue-600 transition-colors">
                        contact@karmatms.com
                      </a>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full group">
                  <NavIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062016.4517834329!2d-116.0506014535588!3d34.38433374709146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dac7321e9b6815%3A0x62c554cae9215d22!2s72724%2029%20Palms%20Hwy%20%23107%2C%20Twentynine%20Palms%2C%20CA%2092277!5e0!3m2!1sen!2sus!4v1756473308013!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Twentynine Palms Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Services Available</h2>
              <p className="text-lg text-gray-700">
                Comprehensive mental health treatments at our Twentynine Palms location
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <p className="font-medium text-lg">{service}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Veterans CTA */}
      <div className="py-16 bg-gradient-to-br from-blue-900 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">Proud to Serve Those Who Serve</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Special support available for veterans and active military personnel. Learn more about our 
            specialized services for the military community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/veterans">
              <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-gray-100">
                Veterans Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Visit
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default TwentyNinePalmsPage;
