import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

const LocationContactSection = () => {
  const serviceAreas = [
  "Palm Springs", "Desert Hot Springs", "Cathedral City", "Rancho Mirage",
  "Palm Desert", "Indian Wells", "La Quinta", "Indio", "Coachella Valley"];


  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Visit Our Palm Springs Location
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Conveniently located in the heart of Palm Springs, serving patients throughout the Coachella Valley.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-[#572670] mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        560 S. Paseo Dorotea #4B<br />
                        Palm Springs, CA 92264
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-[#572670] mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:760-760-5675" className="text-[#572670] hover:underline font-semibold text-lg">
                        760-760-5675
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-[#572670] mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-[#572670] mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:info@karmatms.com" className="text-[#572670] hover:underline">
                        info@karmatms.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-[#572670] hover:bg-[#572670]/90 text-white px-8 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white px-8 flex items-center gap-2">
                      <Navigation className="h-4 w-4" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Areas We Serve</h4>
                <p className="text-gray-600 mb-4">
                  Proudly serving patients throughout the Coachella Valley and surrounding communities:
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, index) =>
                  <Badge key={index} variant="outline" className="border-[#572670] text-[#572670]">
                      {area}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Map */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gray-200 relative">
                  {/* Placeholder for interactive map */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#572670]/20 to-[#572670]/10">
                    <div className="text-center p-8">
                      <MapPin className="h-16 w-16 text-[#572670] mx-auto mb-4" />
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Interactive Map</h4>
                      <p className="text-gray-600 mb-4">
                        Click to view full map and get directions
                      </p>
                      <Button className="bg-[#572670] hover:bg-[#572670]/90 text-white">
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-[#572670] text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold mb-1">Free</div>
                  <div className="text-sm text-white/80">Parking Available</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-[#572670] to-[#572670]/80 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold mb-1">ADA</div>
                  <div className="text-sm text-white/80">Accessible</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default LocationContactSection;