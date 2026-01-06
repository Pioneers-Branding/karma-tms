import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Mail, Navigation as NavIcon, Building2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const PalmSpringsPage = () => {
  const addresses = [
    {
      label: 'Main Office',
      line1: '560 S. Paseo Dorotea Suite 4-B',
      line2: 'Palm Springs, CA 92264',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d424310.5120877356!2d-116.4998743!3d33.8142259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db1c9045959abb%3A0xc2bd31e818075a39!2s560%20S%20Paseo%20Dorotea%20Suite%204B%2C%20Palm%20Springs%2C%20CA%2092264%2C%20USA!5e0!3m2!1sen!2sin!4v1756392856101!5m2!1sen!2sin'
    },
    {
      label: 'Rancho Mirage Office',
      line1: '35400 Bob Hope Dr. Suite 206-B',
      line2: 'Rancho Mirage, CA 92270',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229186.20144231617!2d-116.58782004243615!3d33.797083618942274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dafd449b434721%3A0xf3719bcb5804db!2s35400%20Bob%20Hope%20Dr%20STE%20206%2C%20Rancho%20Mirage%2C%20CA%2092270!5e0!3m2!1sen!2sus!4v1756473962862!5m2!1sen!2sus'
    }
  ];

  const serviceAreas = [
    'Palm Springs', 'Desert Hot Springs', 'Cathedral City', 'Rancho Mirage',
    'Palm Desert', 'Indian Wells', 'La Quinta', 'Indio', 'Coachella Valley'
  ];

  const services = [
    'TMS Therapy',
    'PR-TMS (Personalized Repetitive TMS)',
    'Brain Mapping (qEEG)',
    'Neurofeedback',
    'Medication Management',
    'Psychiatric Evaluations'
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="KarmaTMS Palm Springs | TMS Therapy & Depression Treatment | (760) 760-5675"
        description="KarmaTMS Palm Springs - Premier TMS therapy center serving Coachella Valley. Depression treatment, anxiety therapy. Two convenient locations. Call (760) 760-5675."
        keywords="KarmaTMS Palm Springs, TMS therapy Palm Springs, depression treatment Palm Springs, mental health Palm Springs, Coachella Valley TMS"
        canonical="/palm-springs"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b65c46ad-dd56-4c76-bfc8-9fbe25e9b7af.jpg"
      />
      <StructuredData 
        type="localBusiness"
        locations={[
          {
            name: "Palm Springs Main Office",
            address: {
              streetAddress: "560 S. Paseo Dorotea Suite 4-B",
              addressLocality: "Palm Springs",
              addressRegion: "CA",
              postalCode: "92264"
            },
            telephone: "+1-760-760-5675"
          },
          {
            name: "Rancho Mirage Office",
            address: {
              streetAddress: "35400 Bob Hope Dr. Suite 206-B",
              addressLocality: "Rancho Mirage",
              addressRegion: "CA",
              postalCode: "92270"
            },
            telephone: "+1-760-760-5675"
          }
        ]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b65c46ad-dd56-4c76-bfc8-9fbe25e9b7af.jpg')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-4 bg-blue-500/20 text-white border-blue-300">Palm Springs Location</Badge>
          <h1 className="text-5xl font-bold mb-6">KarmaTMS Palm Springs - TMS Therapy Center</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Premier TMS therapy center serving the Coachella Valley with advanced mental health treatments
          </p>
        </div>
      </div>

      {/* Location Overview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Welcome to Our Palm Springs Locations</h2>
              <p className="text-lg text-gray-700 mb-6">
                Karma TMS operates two state-of-the-art facilities in the Palm Springs area, providing 
                convenient access to cutting-edge mental health treatment for residents throughout the 
                Coachella Valley.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our facilities are designed with your comfort and privacy in mind, featuring modern 
                treatment rooms, relaxing waiting areas, and the latest TMS technology to ensure the 
                best possible outcomes for your mental health journey.
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d85b7133-76b3-47d9-8904-c6b4ffc09e40.jpeg"
                alt="Karma TMS Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Location Details</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {addresses.map((address, idx) => (
              <Card key={idx} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold">{address.label}</h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{address.line1}</p>
                        <p className="text-gray-600">{address.line2}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <a href="tel:7607605675" className="hover:text-blue-600 transition-colors">
                        760-760-5675
                      </a>
                    </div>
                    
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

                  <Button variant="outline" className="w-full group">
                    <NavIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Maps */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {addresses.map((address, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={address.mapUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${address.label}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Services Available</h2>
              <p className="text-lg text-gray-700">
                Comprehensive mental health treatments available at our Palm Springs locations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {services.map((service, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <p className="font-medium text-lg">{service}</p>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {serviceAreas.map((area) => (
                    <Badge key={area} variant="secondary" className="px-3 py-1">
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-blue-900 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Us in Palm Springs</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward better mental health. Contact us today to schedule your consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-gray-100">
                Book Appointment
              </Button>
            </Link>
            <Link to="/tms-quiz">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Take TMS Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default PalmSpringsPage;
