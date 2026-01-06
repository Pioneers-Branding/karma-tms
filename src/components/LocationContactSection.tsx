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
                  lines: ["35400 Bob Hope Dr, Rancho Mirage, CA 92270"]
                },
                {
                  label: "Address 3",
                  lines: ["72724 29 Palms Hwy Ste 107", "Twentynine Palms, CA 92277"]
                }].
                map((addr, idx) =>
                <div key={idx} className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#572670] mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{addr.label}</h4>
                  <p className="text-gray-600 whitespace-pre-line">
                    {addr.lines.join("\n")}
                  </p>
                </div>
              </div>
                )}
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
              }].
              map(({ Icon, label, value, href }, idx) =>
              <div key={idx} className="flex items-start gap-4 mb-6 last:mb-0">
              <Icon className="h-6 w-6 text-[#572670] mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{label}</h4>
                {href ?
                  <a href={href} className="text-[#572670] hover:underline font-semibold text-lg whitespace-pre-line">
                    {value}
                  </a> :

                  <p className="text-gray-600 whitespace-pre-line">{value}</p>
                  }
              </div>
            </div>
              )}

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
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229186.20144231617!2d-116.58782004243615!3d33.797083618942274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dafd449b434721%3A0xf3719bcb5804db!2s35400%20Bob%20Hope%20Dr%20STE%20206%2C%20Rancho%20Mirage%2C%20CA%2092270!5e0!3m2!1sen!2sus!4v1756473962862!5m2!1sen!2sus",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062016.4517834329!2d-116.0506014535588!3d34.38433374709146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dac7321e9b6815%3A0x62c554cae9215d22!2s72724%2029%20Palms%20Hwy%20%23107%2C%20Twentynine%20Palms%2C%20CA%2092277!5e0!3m2!1sen!2sus!4v1756473308013!5m2!1sen!2sus"].
            map((src, idx) =>
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
                    title={`Location map ${idx + 1}`} />

              </div>
            </CardContent>
          </Card>
            )}
      </div>
    </div>
  </div>
    </section>);



};

export default LocationContactSection;