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

const PalmSpringsPage = () => {
  const treatments = [
  { name: 'TMS Therapy', desc: 'FDA-approved treatment for depression and anxiety' },
  { name: 'PR-TMS', desc: 'Personalized Repetitive TMS for optimized results' },
  { name: 'Brain Mapping (qEEG)', desc: 'Advanced brain analysis for targeted treatment' },
  { name: 'Neurofeedback', desc: 'Brain training for improved mental wellness' },
  { name: 'Medication Management', desc: 'Expert psychiatric care and monitoring' },
  { name: 'Psychiatric Evaluations', desc: 'Comprehensive mental health assessments' }];


  const faqs = [
  {
    q: 'Where is KarmaTMS Palm Springs located?',
    a: 'We have two convenient locations in the Coachella Valley: our main office at 560 S. Paseo Dorotea Suite 4-B in Palm Springs, and our Rancho Mirage office at 35400 Bob Hope Dr. Suite 206-B.'
  },
  {
    q: 'What insurance do you accept in Palm Springs?',
    a: 'We accept most major insurance plans including Medicare, Tricare, Blue Cross Blue Shield, Aetna, Cigna, and many more. Contact us to verify your specific coverage.'
  },
  {
    q: 'How long does a TMS therapy session take?',
    a: 'Each TMS session typically takes 20-30 minutes. Most patients receive treatment 5 days per week for 4-6 weeks. You can return to normal activities immediately after each session.'
  },
  {
    q: 'Do you treat veterans at your Palm Springs location?',
    a: 'Yes! We proudly serve veterans and accept Tricare and VA benefits. Our team has specialized experience treating PTSD, depression, and anxiety in military personnel.'
  },
  {
    q: 'What areas does KarmaTMS Palm Springs serve?',
    a: 'We serve the entire Coachella Valley including Palm Springs, Desert Hot Springs, Cathedral City, Rancho Mirage, Palm Desert, Indian Wells, La Quinta, Indio, and surrounding communities.'
  },
  {
    q: 'Is TMS therapy covered by insurance in California?',
    a: 'Yes, TMS therapy is FDA-approved and covered by most insurance plans for treatment-resistant depression. We handle all insurance verification and pre-authorization for you.'
  }];


  const benefits = [
  { icon: Award, text: 'Expert TMS Specialists' },
  { icon: Shield, text: 'FDA-Approved Treatment' },
  { icon: Star, text: '80%+ Success Rate' },
  { icon: CheckCircle, text: 'Insurance Accepted' }];


  return (
    <div className="min-h-screen">
      <SEO
        title="KarmaTMS Palm Springs | TMS Therapy & Depression Treatment | (760) 760-5675"
        description="Leading TMS therapy center in Palm Springs, CA. FDA-approved depression treatment, anxiety therapy, and mental health services. Two locations in Coachella Valley. Veterans welcome."
        keywords="TMS therapy Palm Springs, depression treatment Palm Springs, mental health Palm Springs, TMS Coachella Valley, psychiatrist Palm Springs, anxiety treatment Palm Springs"
        canonical="/palm-springs"
        ogImage="https://images.unsplash.com/photo-1754197530512-20fc23520937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2NlbmljJTIwdmlldyUyMG9mJTIwYSUyMG1vZGVybiUyMGJ1aWxkaW5nJTIwc3Vycm91bmRlZCUyMGJ5JTIwZ3JlZW5lcnklMkMlMjBjYXB0dXJlZCUyMGluJTIwYSUyMGhpZ2gtcmVzb2x1dGlvbiUyMGltYWdlLnxlbnwwfHx8fDE3NjM3MjYxNTd8MA&ixlib=rb-4.1.0&q=80&w=200$w=1920" />


      <StructuredData
        type="localBusiness"
        locations={[
        {
          name: 'KarmaTMS Palm Springs',
          address: {
            streetAddress: '560 S. Paseo Dorotea Suite 4-B',
            addressLocality: 'Palm Springs',
            addressRegion: 'CA',
            postalCode: '92264'
          },
          telephone: '+1-760-760-5675'
        },
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
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1754197530512-20fc23520937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2NlbmljJTIwdmlldyUyMG9mJTIwYSUyMG1vZGVybiUyMGJ1aWxkaW5nJTIwc3Vycm91bmRlZCUyMGJ5JTIwZ3JlZW5lcnklMkMlMjBjYXB0dXJlZCUyMGluJTIwYSUyMGhpZ2gtcmVzb2x1dGlvbiUyMGltYWdlLnxlbnwwfHx8fDE3NjM3MjYxNTd8MA&ixlib=rb-4.1.0&q=80&w=200$w=1920')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-4 bg-purple-500/20 text-white border-purple-300">Palm Springs Location</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            TMS Therapy in Palm Springs, California
          </h1>
          <p className="text-xl lg:text-2xl text-purple-100 max-w-3xl mb-8">
            Advanced TMS treatment for depression and anxiety serving the Coachella Valley with compassionate, evidence-based care
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">About KarmaTMS Palm Springs</h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                KarmaTMS is proud to serve the Palm Springs and Coachella Valley communities with cutting-edge mental health treatment. Our two state-of-the-art facilities offer convenient access to FDA-approved TMS therapy and comprehensive psychiatric care.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Palm Springs Chooses KarmaTMS</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Located in the heart of the Coachella Valley, our <Link to="/tms-therapy" className="text-purple-600 hover:underline">TMS therapy centers</Link> combine advanced technology with personalized care. We understand the unique needs of our desert community and provide treatments specifically designed for lasting results.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you're from Palm Springs, Desert Hot Springs, Cathedral City, or anywhere in the valley, our experienced team is here to help you overcome <Link to="/depression" className="text-purple-600 hover:underline">depression</Link>, <Link to="/anxiety" className="text-purple-600 hover:underline">anxiety</Link>, and other mental health challenges.
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
                  src="https://images.unsplash.com/photo-1731510861193-cb13e86436ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwbW9kZXJuJTIwYnVpbGRpbmclMjBzdXJyb3VuZGVkJTIwYnklMjBncmVlbmVyeSUyQyUyMGNhcHR1cmVkJTIwaW4lMjBhJTIwaGlnaC1yZXNvbHV0aW9uJTIwaW1hZ2UufGVufDB8fHx8MTc2MzcyNjE2NHww&ixlib=rb-4.1.0&q=80&w=200$w=1920"
                  alt="KarmaTMS Palm Springs Facility Entrance"
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Mental Health Services in Palm Springs</h2>
              <p className="text-xl text-gray-700">
                Comprehensive treatment options tailored to your unique needs
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
            <div className="text-center mt-10">
              <Link to="/tms-therapy">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Learn More About TMS Therapy
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
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Palm Springs Facilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1731510861193-cb13e86436ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwbW9kZXJuJTIwYnVpbGRpbmclMjBzdXJyb3VuZGVkJTIwYnklMjBncmVlbmVyeSUyQyUyMGNhcHR1cmVkJTIwaW4lMjBhJTIwaGlnaC1yZXNvbHV0aW9uJTIwaW1hZ2UufGVufDB8fHx8MTc2MzcyNjE2NHww&ixlib=rb-4.1.0&q=80&w=200$w=1920"
                  alt="KarmaTMS Palm Springs entrance and reception area"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-semibold">Welcoming Reception</p>
              </div>
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1709418354370-082f0359a03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBbiUyMGFkdmFuY2VkJTIwVE1TJTIwdGhlcmFweSUyMGNoYWlyJTIwYXQlMjB0aGUlMjBQYWxtJTIwU3ByaW5ncyUyMGxvY2F0aW9uJTJDJTIwc2hvd2Nhc2luZyUyMGElMjBtb2Rlcm4lMjBhbmQlMjBjb21mb3J0YWJsZSUyMHNldHVwJTIwZm9yJTIwbWVudGFsJTIwaGVhbHRoJTIwdHJlYXRtZW50cy58ZW58MHx8fHwxNzYzNzI2MTU5fDA&ixlib=rb-4.1.0&q=80&w=200$w=1920"
                  alt="Advanced TMS therapy chair at Palm Springs location"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-semibold">TMS Treatment Room</p>
              </div>
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1723152928488-d10054adb893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcGF0aWVudCUyMHJlY2VpdmluZyUyMFRNUyUyMHRoZXJhcHklMjB0cmVhdG1lbnQlMjBpbiUyMFBhbG0lMjBTcHJpbmdzLnxlbnwwfHx8fDE3NjM3MjYxNTJ8MA&ixlib=rb-4.1.0&q=80&w=200$w=1920"
                  alt="Patient receiving TMS therapy treatment in Palm Springs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-semibold">Comfortable Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gradient-to-br from-purple-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose KarmaTMS in Palm Springs?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="flex gap-4">
                <Award className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Board-Certified Experts</h3>
                  <p className="text-gray-700">Our <Link to="/team" className="text-purple-600 hover:underline">experienced psychiatrists and clinicians</Link> specialize in TMS therapy and treatment-resistant depression.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Veterans Welcome</h3>
                  <p className="text-gray-700">Proud to serve <Link to="/veterans" className="text-purple-600 hover:underline">military members and veterans</Link> with Tricare and VA benefits accepted.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Insurance Accepted</h3>
                  <p className="text-gray-700">We accept most major insurance plans. Our team handles all <Link to="/insurance-pricing" className="text-purple-600 hover:underline">insurance verification and authorization</Link>.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Star className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                  <p className="text-gray-700">Over 80% of our patients experience significant improvement in depression symptoms with TMS therapy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Get Here */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Visit Our Palm Springs Locations</h2>
          
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Main Palm Springs Office */}
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl font-bold">Palm Springs Main Office</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">560 S. Paseo Dorotea Suite 4-B</p>
                      <p className="text-gray-600">Palm Springs, CA 92264</p>
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
                    href="https://www.google.com/maps/dir//560+S.+Paseo+Dorotea+Suite+4-B,+Palm+Springs,+CA+92264"
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

                <div className="mt-6 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d424310.5120877356!2d-116.4998743!3d33.8142259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db1c9045959abb%3A0xc2bd31e818075a39!2s560%20S%20Paseo%20Dorotea%20Suite%204B%2C%20Palm%20Springs%2C%20CA%2092264%2C%20USA!5e0!3m2!1sen!2sin!4v1756392856101!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map of KarmaTMS Palm Springs Main Office" />

                </div>
              </CardContent>
            </Card>

            {/* Rancho Mirage Office */}
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl font-bold">Rancho Mirage Office</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">35400 Bob Hope Dr. Suite 206-B</p>
                      <p className="text-gray-600">Rancho Mirage, CA 92270</p>
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

                <div className="mt-6 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229186.20144231617!2d-116.58782004243615!3d33.797083618942274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dafd449b434721%3A0xf3719bcb5804db!2s35400%20Bob%20Hope%20Dr%20STE%20206%2C%20Rancho%20Mirage%2C%20CA%2092270!5e0!3m2!1sen!2sus!4v1756473962862!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map of KarmaTMS Rancho Mirage Office" />

                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Driving Directions</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>From I-10:</strong> Take the Gene Autry Trail exit, head south, turn right on Ramon Road, then left on Paseo Dorotea.</p>
                  <p><strong>From Downtown Palm Springs:</strong> Head south on Palm Canyon Drive, turn left on Ramon Road, right on Paseo Dorotea.</p>
                  <p><strong>From Palm Desert:</strong> Take Highway 111 west toward Palm Springs, turn right on Gene Autry Trail, then follow above directions.</p>
                  <p className="text-sm italic mt-4">Free parking available at both locations</p>
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your TMS Therapy Journey?</h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Take the first step toward better mental health. Schedule your consultation at our Palm Springs or Rancho Mirage location today.
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

export default PalmSpringsPage;