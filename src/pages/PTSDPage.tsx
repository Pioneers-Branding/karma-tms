import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Brain, Shield, CheckCircle, ArrowRight, Calendar, Heart, Award, Zap } from 'lucide-react';

const PTSDPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#572670] to-[#7B4D9E] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">PTSD Treatment</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                TMS Therapy for PTSD
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Compassionate, evidence-based treatment that helps heal trauma's impact on the brain, 
                offering new hope for recovery from post-traumatic stress disorder.
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
                src="https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?q=80&w=800"
                alt="PTSD therapy and support"
                className="rounded-lg shadow-2xl" />

            </div>
          </div>
        </div>
      </section>

      {/* What is PTSD Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is PTSD?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Post-Traumatic Stress Disorder (PTSD) is a mental health condition triggered by experiencing 
                or witnessing a traumatic event. It affects millions of people, including veterans, first responders, 
                accident survivors, and those who have experienced abuse, violence, or other life-threatening situations.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core PTSD Symptoms:</h3>
              <div className="space-y-4 mb-8">
                {[
                { category: 'Re-experiencing', symptoms: 'Flashbacks, nightmares, intrusive memories' },
                { category: 'Avoidance', symptoms: 'Avoiding triggers, places, people, or thoughts' },
                { category: 'Negative Changes', symptoms: 'Negative thoughts, mood, and beliefs' },
                { category: 'Hyperarousal', symptoms: 'Hypervigilance, irritability, sleep problems' }].
                map((item, index) =>
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.category}</h4>
                        <p className="text-gray-700 text-sm">{item.symptoms}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <p className="text-gray-700">
                PTSD is not a sign of weakness - it's a natural response to abnormal situations. 
                With proper treatment, recovery is possible.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1703449481095-bb99a6928f1d?q=80&w=800"
                alt="Trauma therapy and healing"
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
                Healing is Possible
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Take our confidential PTSD assessment to explore if TMS therapy could be part of your 
                healing journey. You deserve to live free from trauma's grip.
              </p>
              <Link to="/tms-quiz">
                <Button size="lg" className="bg-[#572670] hover:bg-[#572670]/90">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Take the PTSD Assessment
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How TMS Works for PTSD */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How TMS Works for PTSD</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              TMS therapy for PTSD targets brain regions affected by trauma, helping to restore normal functioning 
              and reduce the hyperactivity in areas responsible for fear responses and emotional regulation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
            {
              title: 'Prefrontal Cortex',
              description: 'Strengthens the brain\'s executive control center, improving emotional regulation and reducing trauma responses.',
              icon: Brain
            },
            {
              title: 'Fear Circuit Modulation',
              description: 'Helps regulate the amygdala and hippocampus, reducing hypervigilance and intrusive memories.',
              icon: Shield
            },
            {
              title: 'Neuroplasticity',
              description: 'Promotes healing by encouraging new neural connections that support recovery and resilience.',
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Emerging Research</h3>
            <p className="text-lg text-gray-700 mb-6">
              While TMS for PTSD is still being researched, preliminary studies show promising results for 
              veterans and civilians with treatment-resistant PTSD. Research indicates improvements in 
              sleep, nightmares, hypervigilance, and overall quality of life.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">Promising</div>
                <div className="text-sm text-gray-600">Early Results</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">Veterans</div>
                <div className="text-sm text-gray-600">Primary Research Focus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">Off-Label</div>
                <div className="text-sm text-gray-600">Current FDA Status</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Karma TMS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Karma TMS for PTSD Treatment?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We understand that PTSD treatment requires special sensitivity and expertise. 
              Our team is trained to provide trauma-informed care in a safe, supportive environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
            {
              title: 'Trauma-Informed Care',
              description: 'Specialized training in working with trauma survivors with sensitivity and understanding.',
              icon: Heart
            },
            {
              title: 'Veteran Experience',
              description: 'Extensive experience treating veterans and first responders with PTSD.',
              icon: Shield
            },
            {
              title: 'Comprehensive Support',
              description: 'Integration with therapy and other trauma treatments for holistic healing.',
              icon: Brain
            },
            {
              title: 'Safe Environment',
              description: 'Creating a secure, comfortable space where healing can take place.',
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of TMS for PTSD</h2>
              <div className="space-y-6">
                {[
                {
                  title: 'No Re-Traumatization',
                  description: 'Unlike some therapies, TMS doesn\'t require detailed discussion of traumatic events.'
                },
                {
                  title: 'Medication Alternative',
                  description: 'Avoid the side effects of psychiatric medications while addressing trauma symptoms.'
                },
                {
                  title: 'Improves Therapy Outcomes',
                  description: 'Can enhance the effectiveness of trauma-focused psychotherapy when used together.'
                },
                {
                  title: 'Daily Functioning',
                  description: 'Helps restore the ability to work, maintain relationships, and enjoy life activities.'
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">PTSD Treatment Approach</h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">Individualized</div>
                        <div className="text-gray-600">Treatment protocol</div>
                      </div>
                      <Heart className="h-8 w-8 text-[#572670]" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">4-8 weeks</div>
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
                        <div className="text-2xl font-bold text-[#572670]">Gradual</div>
                        <div className="text-gray-600">Symptom improvement</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect During PTSD Treatment</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We understand that seeking treatment for PTSD takes courage. Our process is designed to 
              ensure you feel safe, informed, and supported every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-8">
                {[
                {
                  step: '1',
                  title: 'Safe Initial Assessment',
                  description: 'Trauma-informed evaluation in a secure environment, focusing on your current symptoms and treatment goals.'
                },
                {
                  step: '2',
                  title: 'Personalized Protocol',
                  description: 'Development of a customized treatment plan based on your specific PTSD symptoms and trauma history.'
                },
                {
                  step: '3',
                  title: 'Gentle Treatment',
                  description: 'Comfortable sessions where you remain in control. Many patients find the treatment relaxing and peaceful.'
                },
                {
                  step: '4',
                  title: 'Ongoing Support',
                  description: 'Regular check-ins to monitor progress and provide support throughout your healing journey.'
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
                src="https://images.unsplash.com/photo-1631558553269-03a775c388b5?q=80&w=800"
                alt="Safe and supportive treatment environment"
                className="rounded-lg shadow-lg" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">You Don't Have to Live with PTSD</h3>
            <p className="text-lg text-gray-700 mb-6">
              Healing from trauma is possible. Take the first step toward reclaiming your life with 
              compassionate, evidence-based TMS treatment for PTSD.
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

export default PTSDPage;