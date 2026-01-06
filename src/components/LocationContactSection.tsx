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
        Visit Our Locations
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Conveniently located serving patients throughout the Coachella Valley and surrounding areas.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left Column - Contact Info for all 3 locations */}
      <div className="space-y-8">
        {[{
          title: "Palm Springs Location #1",
          addressLines: [
            "560 S. Paseo Dorotea #4B",
            "Palm Springs, CA 92264"
          ],
          phone: "760-760-5675",
          email: "info@karmatms.com",
          hours: [
            "Monday - Friday: 9:00 AM - 5:00 PM",
            "Saturday - Sunday: Closed"
          ]
        },{
          title: "Palm Springs Location #2",
          addressLines: [
            "560 S. Paseo Dorotea, Suite 4A",
            "Palm Springs, CA 92264"
          ],
          phone: "760-760-5676",
          email: "info@karmatms.com",
          hours: [
            "Monday - Friday: 9:00 AM - 5:00 PM",
            "Saturday - Sunday: Closed"
          ]
        },{
          title: "Twentynine Palms Location",
          addressLines: [
            "72724 29 Palms Hwy Ste 107",
            "Twentynine Palms, CA 92277"
          ],
          phone: "760-760-5677",
          email: "info@karmatms.com",
          hours: [
            "Monday - Friday: 9:00 AM - 5:00 PM",
            "Saturday - Sunday: Closed"
          ]
        }].map((loc, idx) => (
          <Card key={idx} className="shadow-xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{loc.title}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#572670] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {loc.addressLines.join("\n")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#572670] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href={`tel:${loc.phone.replace(/-/g, '')}`} className="text-[#572670] hover:underline font-semibold text-lg">
                      {loc.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-[#572670] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {loc.hours.join("\n")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#572670] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href={`mailto:${loc.email}`} className="text-[#572670] hover:underline">
                      {loc.email}
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Right Column - Maps for all 3 locations */}
      <div className="space-y-6">
        {[
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d424310.5120877356!2d-116.4998743!3d33.8142259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db1c9045959abb%3A0xc2bd31e818075a39!2s560%20S%20Paseo%20Dorotea%20Suite%204B%2C%20Palm%20Springs%2C%20CA%2092264%2C%20USA!5e0!3m2!1sen!2sin!4v1756392856101!5m2!1sen!2sin",
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d424309.85087984125!2d-116.4998861!3d33.8143592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db1c90466d7ad5%3A0xa80f0108a79bdc4a!2s560%20S%20Paseo%20Dorotea%20%23%204%2C%20Palm%20Springs%2C%20CA%2092264%2C%20USA!5e0!3m2!1sen!2sin!4v1756392958791!5m2!1sen!2sin",
          "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d422708.5929338998!2d-116.0756245!3d34.1358287!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1756393003558!5m2!1sen!2sin"
        ].map((src, idx) => (
          <Card key={idx} className="shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src={src}
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0, border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Location map ${idx + 1}`}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>
);

};

export default LocationContactSection;