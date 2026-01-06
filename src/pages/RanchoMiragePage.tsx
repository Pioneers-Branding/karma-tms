import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Phone, Clock, Mail, Navigation as NavIcon, Building2, CheckCircle, Star, Award, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const RanchoMiragePage = () => {
  const treatments = [
  { name: 'TMS Therapy', desc: 'Advanced treatment for treatment-resistant depression' },
  { name: 'PR-TMS', desc: 'Personalized protocols based on brain mapping' },
  { name: 'Brain Mapping (qEEG)', desc: 'Precision diagnostics for optimal outcomes' },
  { name: 'Neurofeedback', desc: 'Non-invasive brain training therapy' },
  { name: 'Medication Management', desc: 'Board-certified psychiatric care' },
  { name: 'Anxiety & OCD Treatment', desc: 'Specialized care for anxiety disorders' }];


  const faqs = [
  {
    q: 'Where is KarmaTMS Rancho Mirage located?',
    a: 'We are located at 35400 Bob Hope Dr. Suite 206-B in Rancho Mirage, CA 92270. Our office is easily accessible from Palm Desert, Indian Wells, La Quinta, and throughout the Coachella Valley.'
  },
  {
    q: 'What makes Rancho Mirage location different?',
    a: 'Our Rancho Mirage office offers the same exceptional care as our Palm Springs location with convenient access for residents of the eastern Coachella Valley. We feature state-of-the-art facilities in a luxurious, comfortable setting.'
  },
  {
    q: 'Do you accept Medicare and private insurance?',
    a: 'Yes! We accept Medicare, most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, and many others. Our staff will verify your coverage and handle all pre-authorization.'
  },
  {
    q: 'How effective is TMS therapy for depression?',
    a: 'TMS therapy has an 80%+ success rate for treatment-resistant depression. Many patients experience significant improvement or complete remission of symptoms. Results are long-lasting with proper maintenance.'
  },
  {
    q: 'What conditions do you treat at Rancho Mirage?',
    a: 'We specialize in treating depression, anxiety disorders, OCD, PTSD, bipolar disorder, and other mental health conditions. We also offer medication management and comprehensive psychiatric evaluations.'
  },
  {
    q: 'Is TMS therapy painful?',
    a: 'No, TMS therapy is non-invasive and well-tolerated. You may feel a tapping sensation during treatment, but most patients find it comfortable. There is no anesthesia or sedation required, and no downtime.'
  }];


  const benefits = [
  { icon: Award, text: 'Luxury Facilities' },
  { icon: Star, text: 'Concierge Care' },
  { icon: Shield, text: 'Privacy Focused' },
  { icon: Heart, text: 'Holistic Approach' }];


  return (
    <div className="min-h-screen">
      <SEO
        title="KarmaTMS Rancho Mirage | TMS Therapy & Mental Health Clinic | (760) 760-5675"
        description="Premier TMS therapy in Rancho Mirage, CA. Advanced depression treatment, anxiety therapy, and psychiatric care. Luxury mental health services in Coachella Valley."
        keywords="TMS therapy Rancho Mirage, depression treatment Rancho Mirage, mental health Rancho Mirage, psychiatrist Rancho Mirage, anxiety treatment Coachella Valley"
        canonical="/rancho-mirage"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b65c46ad-dd56-4c76-bfc8-9fbe25e9b7af.jpg" />


      <StructuredData
        type="localBusiness"
        locations={[
        {
          name: 'KarmaTMS Rancho Mirage',
          address: {
            streetAddress: '35400 Bob Hope Dr. Suite 206-B',
            addressLocality: 'Rancho Mirage',
            addressRegion: 'CA',
            postalCode: '92270'
          },
          telephone: '+1-760-760-5675'
        }]
        } />


      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ab4091f6-2a9f-4462-909c-148d587ba88f.jpg')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-4 bg-blue-500/20 text-white border-blue-300">Rancho Mirage Location</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            TMS Therapy in Rancho Mirage, California
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mb-8">
            Luxury mental health care with advanced TMS therapy for depression, anxiety, and treatment-resistant conditions
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/tms-quiz">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 bg-black text-white">
                Take TMS Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Premier Mental Health Care in Rancho Mirage</h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                KarmaTMS Rancho Mirage provides world-class mental health treatment in an exclusive, comfortable setting. Located on Bob Hope Drive, we serve Palm Desert, Indian Wells, La Quinta, and the entire Coachella Valley.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Exceptional Care in a Luxury Setting</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Our Rancho Mirage location combines cutting-edge <Link to="/tms-therapy" className="text-blue-600 hover:underline">TMS therapy technology</Link> with personalized, concierge-level care. We understand that mental health treatment requires privacy, comfort, and expertise.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you're dealing with <Link to="/depression" className="text-blue-600 hover:underline">treatment-resistant depression</Link>, <Link to="/anxiety" className="text-blue-600 hover:underline">anxiety disorders</Link>, or other mental health challenges, our experienced team provides compassionate, evidence-based care in a luxurious, discrete environment.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, idx) =>
                  <div key={idx} className="flex items-center gap-2">
                      <benefit.icon className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">{benefit.text}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d85b7133-76b3-47d9-8904-c6b4ffc09e40.jpeg"
                  alt="Elegant KarmaTMS Rancho Mirage facility entrance"
                  className="w-full h-full object-cover" />

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treatments Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive Mental Health Services</h2>
              <p className="text-xl text-gray-700">
                Advanced treatments tailored to your individual needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((treatment, idx) =>
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-600">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{treatment.name}</h3>
                    <p className="text-gray-600">{treatment.desc}</p>
                  </CardContent>
                </Card>
              )}
            </div>
            <div className="text-center mt-10">
              <Link to="/tms-therapy">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 mr-4">
                  Learn About TMS
                </Button>
              </Link>
              <Link to="/team">
                <Button size="lg" variant="outline">
                  Meet Our Doctors
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Experience Our Rancho Mirage Facility</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d85b7133-76b3-47d9-8904-c6b4ffc09e40.jpeg"
                  alt="Luxurious reception area at Rancho Mirage mental health clinic"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-semibold">Elegant Reception</p>
              </div>
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/031012db-9570-41de-bb30-96c6fa482330.png"
                  alt="Premium TMS therapy equipment in Rancho Mirage"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-semibold">Advanced Technology</p>
              </div>
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/e3bc971e-e2ab-4334-ac23-0b9876309934.webp"
                  alt="Comfortable private treatment room for TMS therapy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-semibold">Private Treatment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose KarmaTMS Rancho Mirage?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="flex gap-4">
                <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Leading Experts</h3>
                  <p className="text-gray-700"><Link to="/team" className="text-blue-600 hover:underline">Board-certified psychiatrists</Link> with extensive experience in TMS therapy and treatment-resistant conditions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Star className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Concierge Service</h3>
                  <p className="text-gray-700">Personalized care with dedicated support staff who manage every aspect of your treatment journey.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Privacy & Discretion</h3>
                  <p className="text-gray-700">Confidential care in a private, luxurious setting designed for your comfort and peace of mind.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Heart className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Comprehensive Care</h3>
                  <p className="text-gray-700">Integrated approach combining TMS, <Link to="/medication-management" className="text-blue-600 hover:underline">medication management</Link>, and therapeutic support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Get Here */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Visit Our Rancho Mirage Location</h2>
          
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden shadow-xl mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold">Rancho Mirage Office</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">35400 Bob Hope Dr. Suite 206-B</p>
                      <p className="text-gray-600">Rancho Mirage, CA 92270</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <a href="tel:7607605675" className="hover:text-blue-600 transition-colors font-medium">
                      (760) 760-5675
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <a href="mailto:contact@karmatms.com" className="hover:text-blue-600 transition-colors">
                      contact@karmatms.com
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://www.google.com/maps/dir//35400+Bob+Hope+Dr.+Suite+206-B,+Rancho+Mirage,+CA+92270"
                    target="_blank"
                    rel="noopener noreferrer">

                    <Button variant="outline" className="w-full group">
                      <NavIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Get Directions
                    </Button>
                  </a>
                  <a
                    href="https://g.page/r/your-google-business-link"
                    target="_blank"
                    rel="noopener noreferrer">

                    <Button variant="outline" className="w-full">
                      <Star className="w-4 h-4 mr-2" />
                      View on Google
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg overflow-hidden shadow-xl mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229186.20144231617!2d-116.58782004243615!3d33.797083618942274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dafd449b434721%3A0xf3719bcb5804db!2s35400%20Bob%20Hope%20Dr%20STE%20206%2C%20Rancho%20Mirage%2C%20CA%2092270!5e0!3m2!1sen!2sus!4v1756473962862!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of KarmaTMS Rancho Mirage Location" />

            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Driving Directions</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>From Palm Desert:</strong> Head east on Highway 111, turn left on Bob Hope Drive, our office is on the right in Suite 206-B.</p>
                  <p><strong>From Indian Wells:</strong> Take Highway 111 north to Bob Hope Drive, turn right, location is on the right side.</p>
                  <p><strong>From La Quinta:</strong> Take Washington Street north to Highway 111, turn right, then left on Bob Hope Drive.</p>
                  <p><strong>From Palm Springs:</strong> Take Highway 111 southeast through Cathedral City toward Rancho Mirage, turn right on Bob Hope Drive.</p>
                  <p className="text-sm italic mt-4">Ample covered parking • Easily accessible from all Coachella Valley communities</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) =>
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-lg px-6 border shadow-sm">
                  <AccordionTrigger className="text-left font-semibold hover:text-blue-600">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pt-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
            <div className="text-center mt-8">
              <Link to="/faqs">
                <Button variant="outline" size="lg">View All FAQs</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Begin Your Journey to Better Mental Health</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Experience the difference that personalized, luxury mental health care can make. Schedule your consultation at KarmaTMS Rancho Mirage today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-10">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/tms-quiz">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-10 bg-black text-white">
                Take TMS Quiz
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-blue-200">
            <a href="tel:7607605675" className="hover:text-white transition-colors font-semibold text-xl">
              Call (760) 760-5675
            </a>
          </p>
        </div>
      </div>

      <FooterSection />
    </div>);

};

export default RanchoMiragePage;