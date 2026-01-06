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

    <div className="grid lg:grid-cols-2 gap-12 items-stretch">
      {/* Left Column - Unified Contact Info */}
      <Card className="shadow-xl border-0 flex flex-col justify-between">
        <CardContent className="p-8 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
          
          <div className="space-y-6 mb-8">
            {[
              {
                label: "Address 1",
                lines: ["560 S. Paseo Dorotea #4B", "Palm Springs, CA 92264"]
              },
              {
                label: "Address 2",
                lines: ["560 S. Paseo Dorotea, Suite 4A", "Palm Springs, CA 92264"]
              },
              {
                label: "Address 3",
                lines: ["72724 29 Palms Hwy Ste 107", "Twentynine Palms, CA 92277"]
              }
            ].map((addr, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#572670] mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{addr.label}</h4>
                  <p className="text-gray-600 whitespace-pre-line">
                    {addr.lines.join("\n")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {[
            {
              Icon: Phone,
              label: "Phone",
              value: "760-760-5675",
              href: "tel:7607605675"
            },
            {
              Icon: Clock,
              label: "Hours",
              value: "Monday - Friday: 9:00 AM - 5:00 PM\nSaturday - Sunday: Closed"
            },
            {
              Icon: Mail,
              label: "Email",
              value: "info@karmatms.com",
              href: "mailto:info@karmatms.com"
            }
          ].map(({ Icon, label, value, href }, idx) => (
            <div key={idx} className="flex items-start gap-4 mb-6 last:mb-0">
              <Icon className="h-6 w-6 text-[#572670] mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{label}</h4>
                {href ? (
                  <a href={href} className="text-[#572670] hover:underline font-semibold text-lg whitespace-pre-line">
                    {value}
                  </a>
                ) : (
                  <p className="text-gray-600 whitespace-pre-line">{value}</p>
                )}
              </div>
            </div>
          ))}

          {/* CTA Buttons */}
          <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
            <Button className="bg-[#572670] hover:bg-[#572670]/90 text-white px-8 flex items-center gap-2 justify-center">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white px-8 flex items-center gap-2 justify-center">
              <Navigation className="h-4 w-4" />
              Get Directions
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Right Column - 3 stacked iframes with equal height */}
      <div className="flex flex-col gap-6 h-full">
        {[
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d424310.5120877356!2d-116.4998743!3d33.8142259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db1c9045959abb%3A0xc2bd31e818075a39!2s560%20S%20Paseo%20Dorotea%20Suite%204B%2C%20Palm%20Springs%2C%20CA%2092264%2C%20USA!5e0!3m2!1sen!2sin!4v1756392856101!5m2!1sen!2sin",
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d424309.85087984125!2d-116.4998861!3d33.8143592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db1c90466d7ad5%3A0xa80f0108a79bdc4a!2s560%20S%20Paseo%20Dorotea%20%23%204%2C%20Palm%20Springs%2C%20CA%2092264%2C%20USA!5e0!3m2!1sen!2sin!4v1756392958791!5m2!1sen!2sin",
          "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d422708.5929338998!2d-116.0756245!3d34.1358287!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1756393003558!5m2!1sen!2sin"
        ].map((src, idx) => (
          <Card key={idx} className="shadow-xl border-0 flex-grow overflow-hidden rounded-lg">
            <CardContent className="p-0 h-full">
              <div className="w-full h-full relative">
                <iframe
                  src={src}
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0, border: 0, borderRadius: "0.5rem" }}
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