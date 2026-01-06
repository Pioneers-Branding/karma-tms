import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Brain, Zap, CheckCircle, ArrowRight, Calendar, Shield, Award, Activity } from 'lucide-react';

const BipolarPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#572670] to-[#7B4D9E] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Bipolar Treatment</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                TMS Therapy for Bipolar Depression
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Specialized treatment approach for the depressive episodes of bipolar disorder, 
                offering hope for mood stabilization when traditional treatments fall short.
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/8131cc49-7899-46f0-abe3-cdbb89395242.webp"
                alt="Bipolar disorder brain activity"
                className="rounded-lg shadow-2xl" />

            </div>
          </div>
        </div>
      </section>

      {/* What is Bipolar Depression Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Bipolar Depression?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Bipolar depression refers to the depressive episodes experienced by individuals with bipolar disorder. 
                These episodes can be particularly challenging because they often don't respond as well to traditional 
                antidepressants and may require specialized treatment approaches to avoid triggering manic episodes.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Characteristics:</h3>
              <div className="space-y-4 mb-8">
                {[
                { aspect: 'Mood Episodes', description: 'Alternating periods of depression and mania/hypomania' },
                { aspect: 'Treatment Resistance', description: 'May not respond to standard antidepressants alone' },
                { aspect: 'Mood Switches', description: 'Risk of antidepressants triggering manic episodes' },
                { aspect: 'Complex Management', description: 'Requires careful balance of mood stabilization' }].
                map((item, index) =>
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.aspect}</h4>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/a8f14621-4fc8-4a11-8fdc-19637df2d5cb.webp"
                alt="Brain patterns in bipolar disorder"
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
              <Activity className="h-16 w-16 text-[#572670] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stabilize Your Mood
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Take our specialized bipolar assessment to see if TMS therapy could help manage your 
                depressive episodes while maintaining mood stability.
              </p>
              <Link to="/tms-quiz">
                <Button size="lg" className="bg-[#572670] hover:bg-[#572670]/90">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Take the Bipolar Assessment
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How TMS Works for Bipolar Depression */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How TMS Works for Bipolar Depression</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              TMS for bipolar depression requires specialized protocols to treat depressive symptoms while 
              minimizing the risk of inducing mania, making it a valuable option for this complex condition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
            {
              title: 'Targeted Stimulation',
              description: 'Carefully calibrated magnetic pulses target specific brain regions while avoiding areas that might trigger mania.',
              icon: Brain
            },
            {
              title: 'Mood Stabilization',
              description: 'Helps regulate neurotransmitter systems involved in both depression and mood stability.',
              icon: Shield
            },
            {
              title: 'Reduced Medication Load',
              description: 'May allow for reduction in multiple psychiatric medications while maintaining stability.',
              icon: Zap
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Considerations</h3>
            <p className="text-lg text-gray-700 mb-6">
              TMS for bipolar depression requires specialized expertise and careful monitoring. Treatment protocols 
              are modified to reduce the risk of switching to mania while effectively treating depressive symptoms. 
              Close collaboration with your psychiatrist is essential.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">Specialized</div>
                <div className="text-sm text-gray-600">Protocol Required</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">Careful</div>
                <div className="text-sm text-gray-600">Monitoring Needed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">Promising</div>
                <div className="text-sm text-gray-600">Research Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Karma TMS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Karma TMS for Bipolar Depression?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Managing bipolar depression requires specialized knowledge and careful treatment protocols. 
              Our team has the expertise to provide safe, effective TMS treatment for bipolar patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
            {
              title: 'Bipolar Expertise',
              description: 'Specialized training in treating bipolar depression with modified TMS protocols.',
              icon: Brain
            },
            {
              title: 'Safety Protocols',
              description: 'Advanced safety measures to prevent mood switching while treating depression.',
              icon: Shield
            },
            {
              title: 'Collaborative Care',
              description: 'Close coordination with your existing psychiatric team for optimal outcomes.',
              icon: Activity
            },
            {
              title: 'Continuous Monitoring',
              description: 'Careful tracking of mood changes throughout the treatment process.',
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of TMS for Bipolar Depression</h2>
              <div className="space-y-6">
                {[
                {
                  title: 'Reduced Medication Burden',
                  description: 'May allow for simplification of complex medication regimens while maintaining stability.'
                },
                {
                  title: 'Lower Switch Risk',
                  description: 'Unlike antidepressants, TMS has a lower risk of triggering manic episodes when properly administered.'
                },
                {
                  title: 'Cognitive Preservation',
                  description: 'Doesn\'t cause the cognitive side effects often associated with multiple mood medications.'
                },
                {
                  title: 'Enhanced Quality of Life',
                  description: 'Helps reduce depressive symptoms while maintaining the ability to function normally.'
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bipolar Treatment Protocol</h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">Modified</div>
                        <div className="text-gray-600">Treatment parameters</div>
                      </div>
                      <Brain className="h-8 w-8 text-[#572670]" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">4-6 weeks</div>
                        <div className="text-gray-600">Typical duration</div>
                      </div>
                      <Calendar className="h-8 w-8 text-[#572670]" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">Enhanced</div>
                        <div className="text-gray-600">Monitoring protocol</div>
                      </div>
                      <Shield className="h-8 w-8 text-[#572670]" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect During Bipolar Treatment</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our specialized approach to bipolar depression ensures safety while maximizing the therapeutic 
              benefits of TMS treatment for your specific condition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-8">
                {[
                {
                  step: '1',
                  title: 'Comprehensive Assessment',
                  description: 'Thorough evaluation of your bipolar history, current medications, and mood patterns to design a safe protocol.'
                },
                {
                  step: '2',
                  title: 'Collaborative Planning',
                  description: 'Work closely with your psychiatrist to coordinate TMS treatment with your existing medication regimen.'
                },
                {
                  step: '3',
                  title: 'Enhanced Monitoring',
                  description: 'Increased frequency of mood assessments to ensure treatment remains safe and effective.'
                },
                {
                  step: '4',
                  title: 'Gradual Progress',
                  description: 'Careful titration of treatment parameters to achieve depression relief while maintaining mood stability.'
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/a5282574-816a-449c-bb06-db229b0bf423.webp"
                alt="Medical monitoring and care"
                className="rounded-lg shadow-lg" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Achieve Mood Stability</h3>
            <p className="text-lg text-gray-700 mb-6">
              Don't let bipolar depression control your life. Discover how specialized TMS treatment 
              can help you achieve better mood stability and improved quality of life.
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

export default BipolarPage;