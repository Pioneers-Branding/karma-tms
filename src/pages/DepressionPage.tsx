import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import { Brain, Heart, CheckCircle, ArrowRight, Calendar, Shield, Award, Users } from 'lucide-react';

const DepressionPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Depression Treatment Center in Palm Springs | Karma TMS PC"
        description="Karma TMS PC offers advanced and compassionate Depression Treatment in Palm Springs, providing personalized and expert mental health care for lasting recovery."
        keywords="depression treatment center Palm Springs, depression Palm Springs, CA, depression therapy Palm Springs,CA"
        canonical="https://www.karmatms.com/conditions/depression" />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Conditions", url: "/conditions" },
        { name: "Depression Treatment", url: "/depression" }]
        } />

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Depression Treatment</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Therapy for Depression Treatment in KarmaTMS
              </h1>
              <p className="text-xl text-white/90 mb-8">
                FDA-approved, non-invasive treatment that offers new hope for those with treatment-resistant depression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/tms-quiz">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 bg-black text-white">
                    Take Assessment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763029481/Exomind_PIC_Female-Model1_0961_ENUS100_zflpcx.jpg"
                alt="KarmaTMS depression therapy session with TMS therapy equipment for treatment-resistant depression"
                className="rounded-lg shadow-2xl" />

            </div>
          </div>
        </div>
      </section>

      {/* What is Depression Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Depression?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Depression is more than just feeling sad or going through a rough patch. It's a serious mental health condition 
                that affects how you feel, think, and handle daily activities. Major depressive disorder impacts millions of 
                people worldwide and can significantly interfere with work, relationships, and overall quality of life.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Symptoms Include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                'Persistent sadness or emptiness',
                'Loss of interest in activities',
                'Fatigue and decreased energy',
                'Difficulty concentrating',
                'Sleep disturbances',
                'Changes in appetite',
                'Feelings of worthlessness',
                'Thoughts of self-harm'].
                map((symptom, index) =>
                <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{symptom}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/460c9673-d421-40be-a576-8470fafd54e6.webp"
                alt="Brain scan showing depression treatment"
                className="rounded-lg shadow-lg max-h-[600px]" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Take Assessment CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-purple-600/20 shadow-lg">
            <CardContent className="p-12">
              <Brain className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Could TMS Help Your Depression?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Take our comprehensive assessment to determine if you're a candidate for TMS therapy. 
                This confidential evaluation takes just 5 minutes and can be the first step toward recovery.
              </p>
              <Link to="/tms-quiz">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Take the TMS Assessment
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How TMS Works for Depression */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How TMS Works for Depression</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Transcranial Magnetic Stimulation (TMS) uses targeted magnetic pulses to stimulate specific areas 
              of the brain associated with mood regulation, offering hope where traditional treatments may have failed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
            {
              title: 'Targeted Brain Stimulation',
              description: 'TMS precisely targets the prefrontal cortex, the brain region responsible for mood regulation and often underactive in depression.',
              icon: Brain
            },
            {
              title: 'Neuroplasticity Enhancement',
              description: 'Magnetic pulses promote the growth of new neural connections, helping restore healthy brain function over time.',
              icon: Heart
            },
            {
              title: 'Chemical Balance Restoration',
              description: 'Treatment helps normalize neurotransmitter levels, particularly serotonin and norepinephrine, which regulate mood.',
              icon: Shield
            }].
            map((item, index) =>
            <Card key={index} className="text-center h-full">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Clinical Evidence</h3>
            <p className="text-lg text-gray-700 mb-6">
              TMS therapy has been extensively studied and proven effective for depression treatment. 
              Clinical trials show that approximately 60-70% of patients with treatment-resistant depression 
              experience significant improvement with TMS therapy.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">60-70%</div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
                <div className="text-sm text-gray-600">Remission Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">FDA</div>
                <div className="text-sm text-gray-600">Approved Since 2008</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Karma TMS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Karma TMS for Depression Treatment?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our specialized approach combines cutting-edge technology with compassionate care, 
              tailored specifically for your unique depression treatment needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
            {
              title: 'Depression Expertise',
              description: 'Specialized experience treating various forms of depression, including treatment-resistant cases.',
              icon: Brain
            },
            {
              title: 'Advanced Technology',
              description: 'State-of-the-art TMS equipment with precise targeting for optimal depression treatment outcomes.',
              icon: Shield
            },
            {
              title: 'Personalized Care',
              description: 'Individualized treatment protocols designed specifically for your depression symptoms and history.',
              icon: Heart
            },
            {
              title: 'Proven Results',
              description: 'Track record of helping patients achieve lasting recovery from depression symptoms.',
              icon: Award
            }].
            map((item, index) =>
            <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Benefits & Key Facts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits of TMS for Depression</h2>
              <div className="space-y-6">
                {[
                {
                  title: 'Non-Invasive Treatment',
                  description: 'No surgery, anesthesia, or sedation required. Patients remain fully conscious and alert during treatment.'
                },
                {
                  title: 'Minimal Side Effects',
                  description: 'Unlike medications, TMS has no systemic side effects. Most patients experience only mild scalp discomfort.'
                },
                {
                  title: 'Outpatient Convenience',
                  description: 'Treatment sessions last 20-40 minutes. Patients can drive themselves and return to normal activities immediately.'
                },
                {
                  title: 'Insurance Coverage',
                  description: 'Most insurance plans cover TMS therapy for treatment-resistant depression.'
                }].
                map((benefit, index) =>
                <div key={index} className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Treatment Statistics</h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">6-8 weeks</div>
                        <div className="text-gray-600">Typical treatment course</div>
                      </div>
                      <Calendar className="h-8 w-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">36 sessions</div>
                        <div className="text-gray-600">Standard protocol</div>
                      </div>
                      <Brain className="h-8 w-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">12+ months</div>
                        <div className="text-gray-600">Average duration of benefit</div>
                      </div>
                      <Award className="h-8 w-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect During Treatment */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect During Depression Treatment</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our comprehensive approach ensures you feel informed, comfortable, and supported throughout your TMS journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-8">
                {[
                {
                  step: '1',
                  title: 'Initial Consultation',
                  description: 'Comprehensive evaluation of your depression history, symptoms, and previous treatments to determine TMS candidacy.'
                },
                {
                  step: '2',
                  title: 'Brain Mapping',
                  description: 'Precise measurement and mapping to identify the optimal treatment location specific to your brain anatomy.'
                },
                {
                  step: '3',
                  title: 'Treatment Sessions',
                  description: 'Daily 20-minute sessions for 6-8 weeks. You\'ll remain awake and can read, listen to music, or relax.'
                },
                {
                  step: '4',
                  title: 'Progress Monitoring',
                  description: 'Regular assessments track your improvement and adjust treatment parameters as needed for optimal results.'
                }].
                map((item, index) =>
                <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1765370575/apollo-patient_uniuqb.webp"
                alt="TMS treatment chair"
                className="rounded-lg shadow-lg max-h-[600px] w-fit" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Recovery Journey?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Take the first step toward overcoming depression with TMS therapy at Karma TMS. 
              Our compassionate team is here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Your Consultation
                </Button>
              </Link>
              <Link to="/tms-quiz">
                <Button size="lg" variant="outline">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Take the Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Explore More KarmaTMS Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/anxiety" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Anxiety Treatment</h3>
              <p className="text-sm text-gray-600">TMS therapy for anxiety disorders</p>
            </Link>
            <Link to="/conditions" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">All Conditions</h3>
              <p className="text-sm text-gray-600">View all mental health conditions we treat</p>
            </Link>
            <Link to="/palm-springs" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Palm Springs Location</h3>
              <p className="text-sm text-gray-600">Visit our Coachella Valley center</p>
            </Link>
            <Link to="/contact" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Contact Us</h3>
              <p className="text-sm text-gray-600">Schedule your consultation today</p>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default DepressionPage;