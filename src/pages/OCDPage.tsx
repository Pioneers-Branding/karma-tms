import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Brain, RefreshCw, CheckCircle, ArrowRight, Calendar, Shield, Award, Zap } from 'lucide-react';

const OCDPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#572670] to-[#7B4D9E] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">OCD Treatment</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                TMS Therapy for OCD
              </h1>
              <p className="text-xl text-white/90 mb-8">
                FDA-approved treatment that specifically targets the brain circuits involved in 
                obsessive-compulsive disorder, offering hope for breaking the cycle of OCD symptoms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Link to="/tms-quiz">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#572670]">
                    Take Assessment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1743767588082-e754fc9874be?q=80&w=800"
                alt="Brain imaging for OCD treatment"
                className="rounded-lg shadow-2xl" />

            </div>
          </div>
        </div>
      </section>

      {/* What is OCD Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is OCD?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Obsessive-Compulsive Disorder (OCD) is a chronic mental health condition characterized by 
                unwanted, intrusive thoughts (obsessions) and repetitive behaviors or mental acts (compulsions). 
                These symptoms can significantly interfere with daily activities and cause considerable distress.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common OCD Patterns:</h3>
              <div className="space-y-4 mb-8">
                {[
                { type: 'Contamination/Cleaning', example: 'Fear of germs leading to excessive handwashing' },
                { type: 'Doubt/Checking', example: 'Repeatedly checking locks, appliances, or safety' },
                { type: 'Symmetry/Ordering', example: 'Need for things to be perfectly arranged' },
                { type: 'Forbidden Thoughts', example: 'Intrusive thoughts causing intense anxiety' },
                { type: 'Hoarding', example: 'Inability to discard items due to distress' }].
                map((item, index) =>
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <RefreshCw className="h-5 w-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.type}</h4>
                        <p className="text-gray-700 text-sm">{item.example}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1709651669999-57741c9bf085?q=80&w=800"
                alt="OCD brain circuit visualization"
                className="rounded-lg shadow-lg" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Take Assessment CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-[#572670]/20 shadow-lg">
            <CardContent className="p-12">
              <RefreshCw className="h-16 w-16 text-[#572670] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Break Free from OCD Cycles
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Take our specialized OCD assessment to determine if TMS therapy could help you 
                overcome obsessive thoughts and compulsive behaviors. Recovery is possible.
              </p>
              <Link to="/tms-quiz">
                <Button size="lg" className="bg-[#572670] hover:bg-[#572670]/90">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Take the OCD Assessment
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How TMS Works for OCD */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How TMS Works for OCD</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              TMS therapy for OCD targets specific brain circuits involved in the disorder, particularly 
              the orbitofrontal cortex and anterior cingulate cortex, helping to reduce obsessive thoughts and compulsive behaviors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
            {
              title: 'Circuit Modulation',
              description: 'TMS modulates hyperactive brain circuits that drive obsessive thoughts and compulsive behaviors in OCD.',
              icon: Brain
            },
            {
              title: 'Supplementary Motor Area',
              description: 'Deep TMS targets the supplementary motor area, a key region in OCD pathophysiology.',
              icon: Zap
            },
            {
              title: 'Neural Flexibility',
              description: 'Treatment promotes neural plasticity, allowing the brain to develop healthier response patterns.',
              icon: RefreshCw
            }].
            map((item, index) =>
            <Card key={index} className="text-center h-full">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-[#572670] mx-auto mb-4" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">FDA Approval & Clinical Evidence</h3>
            <p className="text-lg text-gray-700 mb-6">
              Deep TMS received FDA approval for OCD treatment in 2018, making it one of the most recent 
              and exciting advances in OCD therapy. Clinical trials demonstrate significant symptom reduction 
              in patients with treatment-resistant OCD.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">45-50%</div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">2018</div>
                <div className="text-sm text-gray-600">FDA Approval</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">30%</div>
                <div className="text-sm text-gray-600">Average Symptom Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Karma TMS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Karma TMS for OCD Treatment?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our specialized OCD treatment program utilizes the latest deep TMS technology and 
              evidence-based protocols specifically designed for obsessive-compulsive disorder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
            {
              title: 'OCD Expertise',
              description: 'Specialized training and experience in treating OCD with deep TMS protocols.',
              icon: Brain
            },
            {
              title: 'Deep TMS Technology',
              description: 'Advanced H-coil technology that reaches deeper brain structures involved in OCD.',
              icon: Zap
            },
            {
              title: 'Comprehensive Care',
              description: 'Integration with therapy and other OCD treatments for optimal outcomes.',
              icon: Shield
            },
            {
              title: 'Research-Based',
              description: 'Treatment protocols based on the latest OCD research and FDA-approved parameters.',
              icon: Award
            }].
            map((item, index) =>
            <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-[#572670] mx-auto mb-3" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of TMS for OCD</h2>
              <div className="space-y-6">
                {[
                {
                  title: 'Targets Root Causes',
                  description: 'Directly addresses the hyperactive brain circuits that drive OCD symptoms rather than just managing symptoms.'
                },
                {
                  title: 'No Medication Side Effects',
                  description: 'Avoid the weight gain, sexual dysfunction, and other side effects common with OCD medications.'
                },
                {
                  title: 'Maintains Daily Function',
                  description: 'Treatment doesn\'t impair cognitive function or daily activities - patients can work and drive normally.'
                },
                {
                  title: 'Durable Results',
                  description: 'Many patients maintain improvement for months to years after completing treatment.'
                }].
                map((benefit, index) =>
                <div key={index} className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-[#572670] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">OCD Treatment Protocol</h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">6 weeks</div>
                        <div className="text-gray-600">Treatment duration</div>
                      </div>
                      <Calendar className="h-8 w-8 text-[#572670]" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">30 sessions</div>
                        <div className="text-gray-600">Total treatments</div>
                      </div>
                      <RefreshCw className="h-8 w-8 text-[#572670]" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">20 min</div>
                        <div className="text-gray-600">Session length</div>
                      </div>
                      <Award className="h-8 w-8 text-[#572670]" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect During OCD Treatment</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our OCD treatment protocol is specifically designed to target the brain circuits involved 
              in obsessive-compulsive disorder while ensuring your comfort and understanding throughout the process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-8">
                {[
                {
                  step: '1',
                  title: 'OCD Assessment',
                  description: 'Comprehensive evaluation using validated OCD rating scales to understand your specific symptoms and severity.'
                },
                {
                  step: '2',
                  title: 'Deep TMS Mapping',
                  description: 'Precise positioning of the deep H-coil to target the supplementary motor area involved in OCD.'
                },
                {
                  step: '3',
                  title: 'Intensive Protocol',
                  description: '5 sessions per week for 6 weeks, with each session lasting approximately 20 minutes.'
                },
                {
                  step: '4',
                  title: 'Progress Tracking',
                  description: 'Regular assessment of OCD symptom improvement using standardized measures throughout treatment.'
                }].
                map((item, index) =>
                <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#572670] text-white rounded-full flex items-center justify-center font-bold">
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
                src="https://images.unsplash.com/photo-1566669419640-ae09e20a18d8?q=80&w=800"
                alt="Deep TMS treatment for OCD"
                className="rounded-lg shadow-lg" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Freedom from OCD is Possible</h3>
            <p className="text-lg text-gray-700 mb-6">
              Don't let OCD control your life. Our FDA-approved deep TMS treatment offers new hope 
              for breaking free from the cycle of obsessions and compulsions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#572670] hover:bg-[#572670]/90">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Your Consultation
              </Button>
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

      <FooterSection />
    </div>);

};

export default OCDPage;