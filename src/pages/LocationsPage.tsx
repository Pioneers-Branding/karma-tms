import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Navigation as NavIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const LocationsPage = () => {
  const locations = [
  {
    name: 'Palm Springs',
    slug: 'palm-springs',
    addresses: [
    { line1: '560 S. Paseo Dorotea Suite 4-B', line2: 'Palm Springs, CA 92264' },
    { line1: '35400 Bob Hope Dr. Suite 206-B', line2: 'Rancho Mirage, CA 92270' }],

    phone: '760-760-5675',
    hours: 'Monday - Friday: 8:00 AM - 6:00 PM',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b65c46ad-dd56-4c76-bfc8-9fbe25e9b7af.jpg',
    description: 'Serving Palm Springs, Desert Hot Springs, Cathedral City, Rancho Mirage, Palm Desert, Indian Wells, La Quinta, and surrounding areas.'
  },
  {
    name: '29 Palms',
    slug: '29-palms',
    addresses: [
    { line1: '72724 29 Palms Hwy. Suite 107', line2: 'Twentynine Palms, CA 92277' }],

    phone: '760-760-5675',
    hours: 'Monday - Friday: 8:00 AM - 6:00 PM',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d85b7133-76b3-47d9-8904-c6b4ffc09e40.jpeg',
    description: 'Conveniently located near Marine Corps Base Twentynine Palms, serving military families and the High Desert community.'
  }];


  return (
    <div className="min-h-screen">
      <SEO
        title="KarmaTMS Locations | TMS Therapy Centers in Palm Springs & Southern California"
        description="Find KarmaTMS locations in Palm Springs, Rancho Mirage, and Twentynine Palms. Multiple TMS therapy centers serving Southern California. Call (760) 760-5675."
        keywords="KarmaTMS locations, TMS therapy Palm Springs, TMS therapy Rancho Mirage, TMS therapy Twentynine Palms, mental health centers California"
        canonical="/locations"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ab4091f6-2a9f-4462-909c-148d587ba88f.jpg" />

      <StructuredData
        type="localBusiness"
        locations={[
        {
          name: "Palm Springs",
          address: {
            streetAddress: "560 S. Paseo Dorotea Suite 4-B",
            addressLocality: "Palm Springs",
            addressRegion: "CA",
            postalCode: "92264"
          },
          telephone: "+1-760-760-5675"
        },
        {
          name: "Twentynine Palms",
          address: {
            streetAddress: "72724 29 Palms Hwy. Suite 107-B",
            addressLocality: "Twentynine Palms",
            addressRegion: "CA",
            postalCode: "92277"
          },
          telephone: "+1-760-760-5675"
        }]
        } />

      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ab4091f6-2a9f-4462-909c-148d587ba88f.jpg')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">KarmaTMS Locations in Southern California</h1>
            <p className="text-xl text-blue-100">
              Karma TMS proudly serves the Coachella Valley and High Desert communities with multiple convenient locations.
            </p>
          </div>
        </div>
      </div>

      {/* Service Areas Overview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Accessible Mental Health Care</h2>
            <p className="text-lg text-gray-700">
              We're committed to making advanced TMS therapy accessible throughout Southern California. 
              Our locations are equipped with the latest technology and staffed by compassionate professionals 
              dedicated to your mental health journey.
            </p>
          </div>

          {/* Location Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {locations.map((location) =>
            <Card key={location.slug} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />

                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{location.name}</h3>
                  <p className="text-gray-600 mb-6">{location.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    {location.addresses.map((address, idx) =>
                  <div key={idx} className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">{address.line1}</p>
                          <p className="text-gray-600">{address.line2}</p>
                        </div>
                      </div>
                  )}
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="hover:text-blue-600 transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{location.hours}</p>
                    </div>
                  </div>

                  <Link to={`/${location.slug}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <NavIcon className="w-4 h-4 mr-2" />
                      View Location Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-blue-900 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation at the location most convenient for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <a href="tel:7607605675">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="w-4 h-4 mr-2" />
                Call: 760-760-5675
              </Button>
            </a>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>);

};

export default LocationsPage;