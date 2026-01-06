import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Heart, Award, Brain, Users, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const VeteransPage = () => {
  const benefits = [
  {
    icon: Shield,
    title: 'Specialized PTSD Treatment',
    description: 'Evidence-based TMS therapy specifically effective for combat-related PTSD and trauma'
  },
  {
    icon: Brain,
    title: 'Non-Invasive Solution',
    description: 'FDA-cleared treatment with no medication side effects or systemic impact'
  },
  {
    icon: Heart,
    title: 'Understanding Care',
    description: 'Staff trained in military culture and the unique challenges faced by veterans'
  },
  {
    icon: Users,
    title: 'Family Support',
    description: 'Resources and guidance for family members supporting veterans through treatment'
  }];


  const conditions = [
  'Post-Traumatic Stress Disorder (PTSD)',
  'Major Depressive Disorder',
  'Anxiety Disorders',
  'Combat-Related Trauma',
  'Treatment-Resistant Depression',
  'Adjustment Disorders'];


  const whyTMS = [
  'No medication interactions',
  'Non-systemic treatment',
  'Proven effective for PTSD',
  'Minimal side effects',
  'Outpatient procedure',
  'Can continue daily activities'];


  return (
    <div className="min-h-screen">
      <SEO
        title="KarmaTMS Veterans Services | TMS Therapy for PTSD & Military Mental Health"
        description="Specialized KarmaTMS therapy for veterans and military personnel. PTSD treatment, depression care near Marine Corps Base. TRICARE accepted. Call (760) 760-5675."
        keywords="KarmaTMS veterans, TMS therapy PTSD, veterans mental health, military PTSD treatment, TRICARE TMS therapy, Marine Corps mental health"
        canonical="/veterans"
        ogImage="https://images.unsplash.com/photo-1627994094951-8ce028677fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2VyZW5lJTIwYW5kJTIwcHJvZmVzc2lvbmFsJTIwaW1hZ2UlMjByZXByZXNlbnRpbmclMjBtZW50YWwlMjBoZWFsdGglMjBzZXJ2aWNlcyUyMGZvciUyMHZldGVyYW5zJTJDJTIwZmVhdHVyaW5nJTIwYSUyMGNhbG0lMjBhbmQlMjBzdXBwb3J0aXZlJTIwZW52aXJvbm1lbnQufGVufDB8fHx8MTc2MjQ5OTQyOXww&ixlib=rb-4.1.0&q=80&w=200$w=1920" />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Veterans Services", url: "/veterans" }]
        } />

      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1627994094951-8ce028677fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2VyZW5lJTIwYW5kJTIwcHJvZmVzc2lvbmFsJTIwaW1hZ2UlMjByZXByZXNlbnRpbmclMjBtZW50YWwlMjBoZWFsdGglMjBzZXJ2aWNlcyUyMGZvciUyMHZldGVyYW5zJTJDJTIwZmVhdHVyaW5nJTIwYSUyMGNhbG0lMjBhbmQlMjBzdXBwb3J0aXZlJTIwZW52aXJvbm1lbnQufGVufDB8fHx8MTc2MjQ5OTQyOXww&ixlib=rb-4.1.0&q=80&w=200$w=1920')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-12 h-12" />
              <Badge className="bg-blue-500/20 text-white border-blue-300">Veterans Services</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6">KarmaTMS Veterans Services - TMS Therapy for PTSD & Mental Health</h1>
            <p className="text-xl text-blue-100 mb-8">
              Specialized TMS therapy for veterans and active military personnel dealing with PTSD, 
              depression, and service-related mental health challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-gray-100">
                  Schedule Consultation
                </Button>
              </Link>
              <a href="tel:7607605675">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-black text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  760-760-5675
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">TMS Therapy for Veterans</h2>
            <p className="text-lg text-gray-700">
              At Karma TMS, we recognize the sacrifices made by our military personnel and their families. 
              Our TMS therapy offers a proven, non-invasive solution for mental health conditions that 
              often affect veterans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) =>
            <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100">
                        <benefit.icon className="w-7 h-7 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Conditions Treated */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Conditions We Treat</h2>
                <p className="text-lg text-gray-700 mb-8">
                  TMS therapy has shown significant effectiveness in treating various mental health 
                  conditions commonly experienced by veterans and military personnel.
                </p>
                <div className="space-y-3">
                  {conditions.map((condition, idx) =>
                  <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-lg font-medium">{condition}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1570105954248-fa0c1376edfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwVE1TJTIwdHJlYXRtZW50JTIwY2hhaXIlMjBpbiUyMGElMjBjbGluaWNhbCUyMHNldHRpbmclMkMlMjBzaG93Y2FzaW5nJTIwYSUyMGNvbWZvcnRhYmxlJTIwYW5kJTIwcHJvZmVzc2lvbmFsJTIwZW52aXJvbm1lbnQlMjBmb3IlMjB0aGVyYXB5JTIwc2Vzc2lvbnMufGVufDB8fHx8MTc2MjQ5OTYyM3ww&ixlib=rb-4.1.0&q=80&w=200$w=1920"
                  alt="TMS Treatment Chair"
                  className="w-full h-full object-cover" />

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why TMS for Veterans */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Why TMS for Veterans?</h2>
              <p className="text-lg text-gray-700">
                TMS therapy offers unique advantages for military personnel seeking mental health treatment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {whyTMS.map((item, idx) =>
              <Card key={idx} className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <p className="font-medium text-lg">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Clinical Evidence</h3>
                <p className="text-gray-700 mb-4">
                  Multiple studies have demonstrated TMS therapy's effectiveness in treating PTSD and 
                  depression in veteran populations. Research shows significant symptom reduction and 
                  improved quality of life for veterans who complete TMS treatment protocols.
                </p>
                <Link to="/research">
                  <Button variant="outline" className="mt-4">
                    View Research
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Insurance & Access */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Insurance & Access</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Insurance Coverage</h3>
                    <p className="text-gray-700">
                      We accept most major insurance plans, including TRICARE and VA benefits. Our staff 
                      will work with you to verify coverage and explore all available options for financing 
                      your treatment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Convenient Locations</h3>
                    <p className="text-gray-700 mb-4">
                      We operate facilities near Marine Corps Base Twentynine Palms and throughout the 
                      Coachella Valley, making it convenient for active duty personnel and veterans to 
                      access treatment.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/29-palms">
                        <Button variant="outline">29 Palms Location</Button>
                      </Link>
                      <Link to="/palm-springs">
                        <Button variant="outline">Palm Springs Locations</Button>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
                    <p className="text-gray-700">
                      We understand military schedules can be demanding. We offer flexible appointment times 
                      to accommodate training schedules, deployments, and other service obligations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-900 to-teal-700 text-white">
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-6">"</div>
                <p className="text-xl mb-6 italic">
                  After struggling with PTSD for years following my deployment, I finally found relief 
                  through TMS therapy at Karma TMS. The staff understood what I was going through, and the 
                  treatment has given me my life back. I can't recommend them enough for fellow veterans.
                </p>
                <p className="font-bold">— Marine Corps Veteran</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-blue-900 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">Take the First Step Toward Healing</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            You've served your country with honor. Now let us serve you with the advanced mental health 
            care you deserve. Contact us today for a confidential consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-gray-100">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
            <a href="tel:7607605675">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-black text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call: 760-760-5675
              </Button>
            </a>
            <Link to="/tms-quiz">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-black text-white">
                Take TMS Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>);

};

export default VeteransPage;