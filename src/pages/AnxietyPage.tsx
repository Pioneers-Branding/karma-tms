import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import { Brain, Shield, CheckCircle, ArrowRight, Calendar, Heart, Award, Zap } from 'lucide-react';

const AnxietyPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Anxiety Treatment Center in Palm Springs | Karma TMS PC"
        description="Karma TMS PC offers personalized and effective anxiety treatment in Palm Springs using advanced therapy to help you regain calm, balance, and emotional well-being."
        keywords="anxiety therapy Palm Springs, CA, anxiety treatment palm springs, anxiety treatment center in palm springs"
        canonical="https://www.karmatms.com/conditions/anxiety" />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Conditions", url: "/conditions" },
        { name: "Anxiety Treatment", url: "/anxiety" }]
        } />

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#572670] to-[#7B4D9E] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Anxiety Treatment</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                KarmaTMS Therapy for Anxiety Disorders
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Innovative, non-invasive treatment that targets the root causes of anxiety in the brain, 
                offering lasting relief from persistent worry and fear.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/tms-quiz">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#572670] bg-black text-white">
                    Take Assessment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763029482/Exomind_PIC_Female-Model2_0125_ENUS100_rxgzxk.jpg"
                alt="KarmaTMS anxiety therapy and treatment with advanced TMS technology"
                className="rounded-lg shadow-2xl h-full w-full max-h-[400px] object-cover" />

            </div>
          </div>
        </div>
      </section>

      {/* What is Anxiety Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Anxiety Disorders?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Anxiety disorders represent a group of mental health conditions characterized by excessive fear, 
                worry, or nervousness that significantly impacts daily functioning. Unlike normal anxiety that 
                everyone experiences, anxiety disorders involve persistent, overwhelming feelings that don't match 
                the actual threat level of situations.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Types and Symptoms:</h3>
              <div className="space-y-4 mb-8">
                {[
                { type: 'Generalized Anxiety', symptoms: 'Excessive worry, restlessness, fatigue' },
                { type: 'Panic Disorder', symptoms: 'Sudden panic attacks, heart palpitations' },
                { type: 'Social Anxiety', symptoms: 'Fear of social situations, avoidance behavior' },
                { type: 'Specific Phobias', symptoms: 'Intense fear of specific objects or situations' }].
                map((item, index) =>
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.type}</h4>
                        <p className="text-gray-700 text-sm">{item.symptoms}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/9705b922-d0fc-4d29-be10-acd507ce308c.webp"
                alt="Brain imaging for anxiety treatment"
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
              <Shield className="h-16 w-16 text-[#572670] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Is TMS Right for Your Anxiety?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our specialized anxiety assessment evaluates your symptoms and treatment history 
                to determine if TMS therapy could provide the relief you've been seeking.
              </p>
              <Link to="/tms-quiz">
                <Button size="lg" className="bg-[#572670] hover:bg-[#572670]/90">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Take the Anxiety Assessment
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How TMS Works for Anxiety */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How TMS Works for Anxiety Disorders</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              TMS therapy for anxiety targets specific brain regions responsible for fear processing 
              and emotional regulation, helping to reduce overactive anxiety responses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
            {
              title: 'Amygdala Regulation',
              description: 'TMS helps modulate the amygdala, the brain\'s fear center, reducing hypervigilance and excessive worry responses.',
              icon: Brain
            },
            {
              title: 'Prefrontal Cortex Enhancement',
              description: 'Stimulation strengthens the prefrontal cortex\'s ability to regulate emotional responses and rational thinking.',
              icon: Zap
            },
            {
              title: 'Neural Network Balance',
              description: 'Treatment helps restore balance between excitatory and inhibitory neural networks involved in anxiety.',
              icon: Heart
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Research & Effectiveness</h3>
            <p className="text-lg text-gray-700 mb-6">
              Emerging research demonstrates TMS therapy's effectiveness for various anxiety disorders, 
              with many patients experiencing significant symptom reduction when traditional treatments haven't provided adequate relief.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">50-60%</div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">Off-Label</div>
                <div className="text-sm text-gray-600">FDA Status</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">Growing</div>
                <div className="text-sm text-gray-600">Evidence Base</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Karma TMS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Karma TMS for Anxiety Treatment?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our specialized approach to anxiety treatment combines evidence-based protocols with 
              personalized care to address your unique anxiety symptoms and triggers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
            {
              title: 'Anxiety Specialization',
              description: 'Extensive experience treating various anxiety disorders with customized TMS protocols.',
              icon: Shield
            },
            {
              title: 'Comprehensive Assessment',
              description: 'Thorough evaluation of anxiety symptoms, triggers, and co-occurring conditions.',
              icon: Brain
            },
            {
              title: 'Individualized Protocols',
              description: 'Treatment parameters adjusted specifically for your anxiety type and severity.',
              icon: Heart
            },
            {
              title: 'Ongoing Support',
              description: 'Continuous monitoring and adjustment throughout your anxiety treatment journey.',
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of TMS for Anxiety Disorders</h2>
              <div className="space-y-6">
                {[
                {
                  title: 'Medication-Free Option',
                  description: 'Avoid the side effects of anti-anxiety medications while achieving symptom relief.'
                },
                {
                  title: 'Target Root Causes',
                  description: 'Address the underlying neural circuits involved in anxiety rather than just symptoms.'
                },
                {
                  title: 'Preserve Cognitive Function',
                  description: 'Unlike some medications, TMS doesn\'t impair memory, concentration, or alertness.'
                },
                {
                  title: 'Complementary Treatment',
                  description: 'Can be combined safely with therapy and other anxiety management strategies.'
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Anxiety Treatment Facts</h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">4-6 weeks</div>
                        <div className="text-gray-600">Typical treatment duration</div>
                      </div>
                      <Calendar className="h-8 w-8 text-[#572670]" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">20 sessions</div>
                        <div className="text-gray-600">Standard anxiety protocol</div>
                      </div>
                      <Zap className="h-8 w-8 text-[#572670]" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">Gradual</div>
                        <div className="text-gray-600">Improvement timeline</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect During Anxiety Treatment</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our anxiety-focused treatment approach is designed to help you feel comfortable and informed 
              while targeting the specific neural circuits involved in your anxiety symptoms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-8">
                {[
                {
                  step: '1',
                  title: 'Anxiety Assessment',
                  description: 'Comprehensive evaluation of your anxiety symptoms, triggers, and impact on daily life to customize treatment.'
                },
                {
                  step: '2',
                  title: 'Treatment Planning',
                  description: 'Development of personalized TMS protocol targeting the specific brain regions involved in your anxiety type.'
                },
                {
                  step: '3',
                  title: 'Gradual Improvement',
                  description: 'Regular sessions help reduce anxiety symptoms progressively, with many patients noticing changes within 2-3 weeks.'
                },
                {
                  step: '4',
                  title: 'Long-term Management',
                  description: 'Development of strategies to maintain improvements and prevent anxiety symptoms from returning.'
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/66e6e1ae-8cc3-4469-bfaf-b1f3f3d07006.webp"
                alt="Anxiety treatment session"
                className="rounded-lg shadow-lg max-h-[600px] mx-auto" />

              
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Take Control of Your Anxiety</h3>
            <p className="text-lg text-gray-700 mb-6">
              Don't let anxiety control your life. Discover how TMS therapy can help you regain confidence 
              and peace of mind with our specialized anxiety treatment protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#572670] hover:bg-[#572670]/90">
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
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Related Karma Mental Health Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/depression" className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Depression Treatment</h3>
              <p className="text-sm text-gray-600">TMS therapy for major depression</p>
            </Link>
            <Link to="/conditions/ptsd" className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">PTSD Treatment</h3>
              <p className="text-sm text-gray-600">Specialized care for trauma</p>
            </Link>
            <Link to="/29-palms" className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Twentynine Palms</h3>
              <p className="text-sm text-gray-600">Serving military families</p>
            </Link>
            <Link to="/veterans" className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Veterans Services</h3>
              <p className="text-sm text-gray-600">Specialized veteran care</p>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default AnxietyPage;