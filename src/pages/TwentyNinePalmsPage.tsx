import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Phone, Clock, Mail, Navigation as NavIcon, Building2, CheckCircle, Star, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const TwentyNinePalmsPage = () => {
  const treatments = [
  { name: 'TMS Therapy', desc: 'FDA-approved treatment for depression and PTSD' },
  { name: 'PR-TMS', desc: 'Personalized protocol for military mental health' },
  { name: 'Brain Mapping', desc: 'qEEG analysis for precise treatment' },
  { name: 'PTSD Treatment', desc: 'Specialized care for combat trauma' },
  { name: 'Medication Management', desc: 'Expert psychiatric medication monitoring' },
  { name: 'Psychiatric Evaluations', desc: 'Comprehensive mental health assessments' }];


  const faqs = [
  {
    q: 'Do you treat veterans and active military at your Twentynine Palms location?',
    a: 'Absolutely! We proudly serve active duty military and veterans from MCAGCC Twentynine Palms. We accept Tricare and VA benefits, and our team has specialized training in treating PTSD, combat-related trauma, and military mental health conditions.'
  },
  {
    q: 'Where is KarmaTMS Twentynine Palms located?',
    a: 'We are conveniently located at 72724 29 Palms Hwy, Suite 107-B in Twentynine Palms, CA 92277. Our facility is easily accessible from the Marine Corps base and throughout the High Desert region.'
  },
  {
    q: 'How effective is TMS therapy for PTSD?',
    a: 'TMS therapy has shown significant effectiveness for PTSD treatment, particularly when combined with other therapies. Many veterans experience substantial reduction in PTSD symptoms including intrusive thoughts, hypervigilance, and anxiety.'
  },
  {
    q: 'What insurance do you accept in Twentynine Palms?',
    a: 'We accept Tricare, VA benefits, Medicare, and most major insurance plans. Our team specializes in working with military insurance and will handle all authorization for you.'
  },
  {
    q: 'How long does TMS treatment take?',
    a: 'A typical TMS treatment course is 4-6 weeks with sessions 5 days per week. Each session takes about 20-30 minutes, and you can return to duty or normal activities immediately afterward.'
  },
  {
    q: 'Do you serve other communities besides Twentynine Palms?',
    a: 'Yes! We serve the entire High Desert region including Yucca Valley, Joshua Tree, Desert Hot Springs, and surrounding communities. Many patients also come from Palm Springs and Coachella Valley.'
  }];


  const benefits = [
  { icon: Shield, text: 'Veterans Specialized Care' },
  { icon: Award, text: 'Tricare Accepted' },
  { icon: Star, text: 'PTSD Expertise' },
  { icon: CheckCircle, text: 'Military Friendly' }];


  return (
    <div className="min-h-screen">
      <SEO
        title="KarmaTMS Twentynine Palms | TMS Therapy for Veterans & Military | (760) 760-5675"
        description="TMS therapy in Twentynine Palms, CA near MCAGCC. Specialized PTSD treatment for veterans and active military. Depression and anxiety care. Tricare accepted."
        keywords="TMS therapy 29 Palms, Twentynine Palms mental health, PTSD treatment Marines, veterans TMS therapy, Tricare TMS, MCAGCC mental health"
        canonical="/29-palms"
        ogImage="https://images.unsplash.com/photo-1706203644358-9a16606dcff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2NlbmljJTIwdmlldyUyMG9mJTIwYSUyMGRlc2VydCUyMGxhbmRzY2FwZSUyMHdpdGglMjBtb3VudGFpbnMlMjBpbiUyMHRoZSUyMGJhY2tncm91bmQlMjBhbmQlMjBhJTIwY2xlYXIlMjBibHVlJTIwc2t5LnxlbnwwfHx8fDE3NjM3MjYxNTR8MA&ixlib=rb-4.1.0&q=80&w=200$w=1920" />


      <StructuredData
        type="localBusiness"
        locations={[
        {
          name: 'KarmaTMS Twentynine Palms',
          address: {
            streetAddress: '72724 29 Palms Hwy. Suite 107-B',
            addressLocality: 'Twentynine Palms',
            addressRegion: 'CA',
            postalCode: '92277'
          },
          telephone: '+1-760-760-5675'
        }]
        } />


      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://i.ibb.co/ZtXDgxm/4188f2c2-city-909-15b5d69d8f7.jpg" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-4 bg-purple-500/20 text-white border-purple-300">Twentynine Palms Location</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            TMS Therapy in Twentynine Palms, CA
          </h1>
          <p className="text-xl lg:text-2xl text-purple-100 max-w-3xl mb-8">
            Specialized mental health treatment for military families and the High Desert community - PTSD, depression, and anxiety care
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8">
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Serving the High Desert & Military Community</h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                KarmaTMS Twentynine Palms is proud to serve active duty military, veterans, and families from Marine Corps Air Ground Combat Center and throughout the Morongo Basin.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Military Families Choose KarmaTMS</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Located conveniently on 29 Palms Highway, our facility provides easy access for those stationed at MCAGCC and residents throughout the High Desert. We understand the unique mental health challenges faced by military personnel and their families.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our team has specialized experience treating <Link to="/conditions/ptsd" className="text-purple-600 hover:underline">PTSD</Link>, combat-related trauma, <Link to="/depression" className="text-purple-600 hover:underline">depression</Link>, and <Link to="/anxiety" className="text-purple-600 hover:underline">anxiety</Link> common among service members. We accept Tricare and work seamlessly with military insurance.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, idx) =>
                  <div key={idx} className="flex items-center gap-2">
                      <benefit.icon className="w-5 h-5 text-purple-600" />
                      <span className="font-medium">{benefit.text}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763039658/2_miiwgx.jpg"
                  alt="Advanced TMS therapy equipment at Twentynine Palms facility"
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Mental Health Services for Military Families</h2>
              <p className="text-xl text-gray-700">
                Comprehensive, evidence-based treatments designed for service members
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((treatment, idx) =>
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-purple-600">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{treatment.name}</h3>
                    <p className="text-gray-600">{treatment.desc}</p>
                  </CardContent>
                </Card>
              )}
            </div>
            <div className="text-center mt-10 space-y-4">
              <Link to="/veterans">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 mr-4">
                  Veterans Services
                </Button>
              </Link>
              <Link to="/tms-therapy">
                <Button size="lg" variant="outline">
                  Learn About TMS
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
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Twentynine Palms Facility</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="https://i.ibb.co/fYtrMmJQ/entrance.webp"
                  alt="Professional and welcoming entrance at Twentynine Palms location"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-semibold">Facility Entrance</p>
              </div>
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="https://i.ibb.co/bR2VwFzY/help-desk.webp"
                  alt="State-of-the-art TMS treatment chair for veteran care"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-semibold">Help Desk</p>
              </div>
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="https://i.ibb.co/675zy4wB/treatment.webp"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-semibold">Treatment Room</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gradient-to-br from-purple-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Twentynine Palms Trusts KarmaTMS</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Military-Focused Care</h3>
                  <p className="text-gray-700">Our team specializes in treating service members and <Link to="/veterans" className="text-purple-600 hover:underline">understands military culture</Link> and the challenges of active duty life.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Award className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Tricare Experts</h3>
                  <p className="text-gray-700">We handle all <Link to="/insurance-pricing" className="text-purple-600 hover:underline">Tricare authorization and paperwork</Link> to make your care seamless and stress-free.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Star className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">PTSD Specialists</h3>
                  <p className="text-gray-700">Proven success treating combat trauma, PTSD, and deployment-related mental health conditions with TMS therapy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Convenient Location</h3>
                  <p className="text-gray-700">Easy access from MCAGCC and throughout the High Desert with ample parking and flexible scheduling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Get Here */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Visit Our Twentynine Palms Location</h2>
          
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden shadow-xl mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl font-bold">Twentynine Palms Office</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">72724 29 Palms Hwy. Suite 107-B</p>
                      <p className="text-gray-600">Twentynine Palms, CA 92277</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <a href="tel:7607605675" className="hover:text-purple-600 transition-colors font-medium">
                      (760) 760-5675
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <a href="mailto:contact@karmatms.com" className="hover:text-purple-600 transition-colors">
                      contact@karmatms.com
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://www.google.com/maps/dir//72724+29+Palms+Hwy.+Suite+107-B,+Twentynine+Palms,+CA+92277"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062016.4517834329!2d-116.0506014535588!3d34.38433374709146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dac7321e9b6815%3A0x62c554cae9215d22!2s72724%2029%20Palms%20Hwy%20%23107%2C%20Twentynine%20Palms%2C%20CA%2092277!5e0!3m2!1sen!2sus!4v1756473308013!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of KarmaTMS Twentynine Palms Location" />

            </div>

            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Driving Directions</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>From MCAGCC Main Gate:</strong> Head north on Adobe Road to Highway 62, turn right (east), continue to 29 Palms Hwy, we're on the right in Suite 107-B.</p>
                  <p><strong>From Yucca Valley:</strong> Take Highway 62 east toward Twentynine Palms, location is on 29 Palms Highway just past the main commercial district.</p>
                  <p><strong>From Palm Springs:</strong> Take I-10 east to Highway 62 north, follow through Yucca Valley to Twentynine Palms.</p>
                  <p className="text-sm italic mt-4">Ample free parking available • Easy access from base</p>
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
                  <AccordionTrigger className="text-left font-semibold hover:text-purple-600">
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
      <div className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Proud to Serve Those Who Serve</h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            If you're a service member, veteran, or military family member struggling with PTSD, depression, or anxiety, we're here to help. Schedule your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-10">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/tms-quiz">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-10 bg-black text-white">
                Take TMS Quiz
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-purple-200">
            <a href="tel:7607605675" className="hover:text-white transition-colors font-semibold text-xl">
              Call (760) 760-5675
            </a>
          </p>
        </div>
      </div>

      <FooterSection />
    </div>);

};

export default TwentyNinePalmsPage;