import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Brain, Heart, CheckCircle, ArrowRight, Calendar, Shield, Award, Zap } from 'lucide-react';

const AddictionPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#572670] to-[#7B4D9E] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Addiction Support</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                TMS for Addiction Recovery Support
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Innovative brain stimulation therapy that can support addiction recovery by targeting 
                the neural circuits involved in cravings, decision-making, and impulse control.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Link to="/tms-quiz">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#572670] bg-black text-white">
                    Take Assessment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=800"
                alt="Recovery and healing journey"
                className="rounded-lg shadow-2xl" />

            </div>
          </div>
        </div>
      </section>

      {/* What is Addiction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Addiction & Recovery</h2>
              <p className="text-lg text-gray-700 mb-6">
                Addiction is a complex brain disorder that affects the neural circuits involved in reward, 
                motivation, and decision-making. It's characterized by compulsive engagement in rewarding 
                behaviors despite harmful consequences, and recovery requires addressing both the behavioral 
                and neurological aspects of the condition.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Addiction Challenges:</h3>
              <div className="space-y-4 mb-8">
                {[
                { challenge: 'Cravings & Urges', impact: 'Persistent thoughts and desires for substances or behaviors' },
                { challenge: 'Impulse Control', impact: 'Difficulty resisting immediate gratification' },
                { challenge: 'Decision Making', impact: 'Impaired ability to make healthy choices' },
                { challenge: 'Co-occurring Disorders', impact: 'Depression, anxiety, and other mental health conditions' }].
                map((item, index) =>
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.challenge}</h4>
                        <p className="text-gray-700 text-sm">{item.impact}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621623400803-eb543c652996?q=80&w=800"
                alt="Brain pathways in addiction"
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
              <Heart className="h-16 w-16 text-[#572670] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Support Your Recovery Journey
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Explore how TMS therapy could complement your addiction recovery program. 
                Take our confidential assessment to learn about this innovative treatment approach.
              </p>
              <Link to="/tms-quiz">
                <Button size="lg" className="bg-[#572670] hover:bg-[#572670]/90">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Take the Recovery Assessment
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How TMS Works for Addiction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How TMS Supports Addiction Recovery</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              TMS therapy can be a valuable addition to comprehensive addiction treatment by targeting 
              the brain circuits involved in cravings, impulse control, and decision-making processes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
            {
              title: 'Craving Reduction',
              description: 'Targets brain areas involved in cravings and reward processing, potentially reducing substance or behavioral urges.',
              icon: Brain
            },
            {
              title: 'Impulse Control',
              description: 'Strengthens prefrontal cortex function, improving decision-making and resistance to immediate gratification.',
              icon: Shield
            },
            {
              title: 'Mood Stabilization',
              description: 'Addresses co-occurring depression and anxiety that often complicate addiction recovery.',
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Research & Applications</h3>
            <p className="text-lg text-gray-700 mb-6">
              Research on TMS for addiction is rapidly evolving, with promising results for various substances 
              including alcohol, cocaine, nicotine, and other addictive behaviors. TMS is typically used as part 
              of a comprehensive treatment program alongside therapy, support groups, and other interventions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">Growing</div>
                <div className="text-sm text-gray-600">Research Evidence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">Multiple</div>
                <div className="text-sm text-gray-600">Addiction Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">Adjunctive</div>
                <div className="text-sm text-gray-600">Treatment Role</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Karma TMS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Karma TMS for Addiction Support?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We understand that addiction recovery is a journey that requires compassionate, non-judgmental care 
              and innovative treatment approaches tailored to each individual's unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
            {
              title: 'Recovery-Focused',
              description: 'Specialized understanding of addiction and recovery processes with compassionate care.',
              icon: Heart
            },
            {
              title: 'Integrated Approach',
              description: 'Coordination with addiction counselors, therapists, and other recovery professionals.',
              icon: Shield
            },
            {
              title: 'Evidence-Based',
              description: 'Treatment protocols based on the latest addiction neuroscience research.',
              icon: Brain
            },
            {
              title: 'Judgment-Free Care',
              description: 'Safe, supportive environment that respects your recovery journey.',
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of TMS in Addiction Recovery</h2>
              <div className="space-y-6">
                {[
                {
                  title: 'Complement Existing Treatment',
                  description: 'Works alongside traditional addiction therapies, counseling, and support groups.'
                },
                {
                  title: 'Non-Addictive Treatment',
                  description: 'No risk of dependency or abuse potential, making it safe for those in recovery.'
                },
                {
                  title: 'Address Root Causes',
                  description: 'Targets the neurological aspects of addiction rather than just managing symptoms.'
                },
                {
                  title: 'Improve Treatment Engagement',
                  description: 'May help reduce cravings and improve ability to participate in recovery programs.'
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recovery Support Protocol</h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">Customized</div>
                        <div className="text-gray-600">Treatment plan</div>
                      </div>
                      <Heart className="h-8 w-8 text-[#572670]" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">2-6 weeks</div>
                        <div className="text-gray-600">Variable duration</div>
                      </div>
                      <Calendar className="h-8 w-8 text-[#572670]" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">Coordinated</div>
                        <div className="text-gray-600">With recovery team</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect During Recovery Support Treatment</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our approach to addiction recovery support is compassionate, respectful, and designed to 
              complement your existing recovery program while addressing the neurological aspects of addiction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-8">
                {[
                {
                  step: '1',
                  title: 'Recovery Assessment',
                  description: 'Comprehensive evaluation of your addiction history, recovery goals, and current treatment plan.'
                },
                {
                  step: '2',
                  title: 'Team Coordination',
                  description: 'Collaboration with your existing recovery team to ensure TMS complements your current treatment.'
                },
                {
                  step: '3',
                  title: 'Supportive Treatment',
                  description: 'Gentle, non-judgmental treatment sessions designed to support your recovery journey.'
                },
                {
                  step: '4',
                  title: 'Recovery Integration',
                  description: 'Ongoing support and monitoring to ensure treatment enhances your overall recovery process.'
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
                src="https://images.unsplash.com/photo-1620147512372-9e00421556bb?q=80&w=800"
                alt="Supportive recovery environment"
                className="rounded-lg shadow-lg" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Strengthen Your Recovery</h3>
            <p className="text-lg text-gray-700 mb-6">
              Recovery is a journey that deserves every possible support. Discover how TMS therapy 
              can complement your recovery program and help strengthen your path to lasting wellness.
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

export default AddictionPage;