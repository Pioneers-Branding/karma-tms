import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import { Brain, CheckCircle, Calendar, MapPin, Phone, Shield, Clock, Zap, Heart, Award, TrendingUp, Users } from 'lucide-react';

const ExomindKarmaTMSPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Exomind TMS Rancho Mirage | Unlock Your Brain's Potential at KarmaTMS"
        description="Experience Exomind TMS at KarmaTMS Rancho Mirage - Advanced ExoTMS™ technology for brain fog, burnout, and cognitive enhancement. 30-minute sessions, FDA-cleared for MDD."
        keywords="Exomind TMS Rancho Mirage, KarmaTMS, Transcranial Magnetic Stimulation, brain fog treatment, cognitive enhancement TMS, ExoTMS technology, perimenopausal anxiety treatment"
        canonical="https://www.karmatms.com/resources/exomind-karmatms" />


      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/de4kw1t2i/image/upload/v1763031168/Exomind_PIC_Unit_0943_ENUS100_lmh0bj.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4 px-4 py-1">Exomind at KarmaTMS</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Unlock Your Brain's Potential with Exomind TMS in Rancho Mirage
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Experience the ultimate "Workout for Your Mind" at KarmaTMS
              </p>
              <p className="text-lg text-white/80 mb-8">
                Transform brain fog into mental clarity, burnout into resilience, and anxiety into calm confidence 
                with cutting-edge ExoTMS™ technology in our luxurious Rancho Mirage spa-like setting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Your Consultation
                  </Button>
                </Link>
                <Link to="/rancho-mirage">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 bg-black text-white">
                    <MapPin className="h-5 w-5 mr-2" />
                    Visit Rancho Mirage
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763029481/Exomind_PIC_Female-Model1_0961_ENUS100_zflpcx.jpg"
                alt="Exomind TMS Chair at KarmaTMS Rancho Mirage - Advanced brain stimulation therapy"
                className="rounded-lg shadow-2xl" />

              <div className="absolute -bottom-6 -left-6 bg-white text-purple-600 p-6 rounded-lg shadow-xl hidden lg:block">
                <div className="text-3xl font-bold">30 min</div>
                <div className="text-sm">Per Session</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Exomind Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What is Exomind TMS?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Exomind represents the future of brain health and cognitive enhancement. Using advanced 
                <strong> ExoTMS™ technology</strong>, our non-invasive treatment precisely targets the 
                dorsolateral prefrontal cortex (DLPFC) - the brain's command center for executive function, 
                emotional regulation, and cognitive performance.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                {
                  icon: Clock,
                  title: '30-Minute Sessions',
                  description: 'Quick, convenient treatments that fit your busy lifestyle'
                },
                {
                  icon: Zap,
                  title: 'No Downtime',
                  description: 'Return to work or daily activities immediately after treatment'
                },
                {
                  icon: Shield,
                  title: 'FDA-Cleared for MDD',
                  description: 'Proven safe and effective for Major Depressive Disorder'
                },
                {
                  icon: Brain,
                  title: 'DLPFC Stimulation',
                  description: 'Precision targeting of brain regions responsible for mood and cognition'
                }].
                map((item, index) =>
                <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763031147/Exomind_PIC_Unit_0943_ENUS100_ocbm6q.jpg"
                alt="Exomind TMS technology in action"
                className="rounded-lg shadow-lg" />

            </div>
          </div>
        </div>
      </section>

      {/* Celebrity Reviews Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Wellness Leaders
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From Hollywood icons to world-class athletes, leaders in wellness are discovering 
              the transformative power of Exomind TMS for brain fog, burnout, and anxiety.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
              {
                name: 'Gwyneth Paltrow',
                title: 'Wellness Icon & Entrepreneur',
                condition: 'Brain Fog & Burnout',
                quote: 'Revolutionary approach to mental clarity and cognitive wellness',
                videoPlaceholder: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop'
              },
              {
                name: 'Serena Williams',
                title: 'Champion Athlete',
                condition: 'Performance Optimization',
                quote: 'Game-changing technology for mental resilience and focus',
                videoPlaceholder: 'https://images.unsplash.com/photo-1587691592099-24045742c181?w=800&h=600&fit=crop'
              },
              {
                name: 'Wellness Leader',
                title: 'Health Advocate',
                condition: 'Perimenopausal Anxiety',
                quote: 'Natural solution for hormonal mood changes and anxiety',
                videoPlaceholder: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop'
              }].
              map((testimonial, index) =>
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        <img
                        src={testimonial.videoPlaceholder}
                        alt={testimonial.name}
                        className="w-full h-full object-cover" />

                      </div>
                      <Badge className="mb-3">{testimonial.condition}</Badge>
                      <h3 className="font-bold text-lg mb-1">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{testimonial.title}</p>
                      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              <em>Celebrity endorsements are for illustrative purposes. Individual results may vary.</em>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits & Results Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits & Clinical Results
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Backed by clinical research and real-world results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {[
                {
                  icon: Heart,
                  title: 'Emotional Resilience',
                  description: 'Build lasting capacity to handle stress, setbacks, and daily challenges with greater ease'
                },
                {
                  icon: TrendingUp,
                  title: 'Cognitive Edge',
                  description: 'Enhanced focus, memory, decision-making, and mental processing speed for peak performance'
                },
                {
                  icon: Shield,
                  title: 'Craving Control',
                  description: 'Reduce impulse-driven behaviors and gain better control over cravings and urges'
                }].
                map((benefit, index) =>
                <div key={index} className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-purple-600 mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-700 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Clinical Data Table */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Clinical Outcomes</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="text-center pb-6 border-b">
                      <div className="text-5xl font-bold text-purple-600 mb-2">90%</div>
                      <div className="text-sm text-gray-600">Improved Mental Well-Being</div>
                      <p className="text-xs text-gray-500 mt-2">Patients reporting significant improvement</p>
                    </div>
                    
                    <div className="text-center pb-6 border-b">
                      <div className="text-5xl font-bold text-purple-600 mb-2">50%</div>
                      <div className="text-sm text-gray-600">Reduction in Depression</div>
                      <p className="text-xs text-gray-500 mt-2">Within 4 weeks of treatment</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-5xl font-bold text-purple-600 mb-2">87%</div>
                      <div className="text-sm text-gray-600">Increase in Self-Control</div>
                      <p className="text-xs text-gray-500 mt-2">Better impulse regulation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* KarmaTMS Difference Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The KarmaTMS Difference
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience Exomind in the perfect setting for transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d85b7133-76b3-47d9-8904-c6b4ffc09e40.jpeg"
                alt="KarmaTMS Rancho Mirage entrance"
                className="rounded-lg shadow-xl" />

            </div>
            <div className="space-y-6">
              {[
              {
                icon: MapPin,
                title: 'Rancho Mirage Location',
                description: 'Nestled in the heart of Coachella Valley, our premier location offers serene desert beauty and easy accessibility'
              },
              {
                icon: Award,
                title: 'Spa-Like Environment',
                description: 'Luxurious, calming treatment rooms designed for your comfort and relaxation during every session'
              },
              {
                icon: Users,
                title: 'Dr. Keerthy Sunder',
                description: 'Double board-certified psychiatrist with specialized expertise in advanced brain stimulation therapies',
                link: '/team'
              },
              {
                icon: CheckCircle,
                title: '15+ Years Valley Experience',
                description: 'Deep roots in Coachella Valley mental health care with thousands of successful patient outcomes'
              }].
              map((item, index) =>
              <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                    {item.link &&
                  <Link to={item.link} className="text-purple-600 text-sm font-medium hover:underline mt-1 inline-block">
                        Meet the team →
                      </Link>
                  }
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Exomind Journey at KarmaTMS
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A seamless, personalized path to better brain health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            {
              step: '1',
              title: 'Initial Consultation',
              description: 'Comprehensive evaluation with Dr. Sunder to assess your needs, review history, and create your personalized treatment plan',
              icon: Users
            },
            {
              step: '2',
              title: 'Personalized Protocol',
              description: 'Custom-designed treatment parameters based on your unique brain mapping and specific wellness goals',
              icon: Brain
            },
            {
              step: '3',
              title: 'The Session',
              description: 'Relax in our spa-like environment during your comfortable 30-minute session. Read, listen to music, or simply unwind',
              icon: Clock
            },
            {
              step: '4',
              title: 'Ongoing Support',
              description: 'Regular progress monitoring, protocol adjustments, and continued care to ensure lasting results',
              icon: Heart
            }].
            map((item, index) =>
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <item.icon className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="text-center mt-12">
            <Link to="/tms-therapy">
              <Button size="lg" variant="outline" className="mr-4">
                Learn More About TMS
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Your Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ & Location Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Does Exomind TMS hurt?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      No! Exomind TMS is a comfortable, non-invasive treatment. Most patients describe a gentle tapping 
                      sensation on the scalp during treatment. There's no pain, and you remain fully awake and alert. 
                      Any initial sensitivity typically diminishes after the first few sessions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Is Exomind TMS covered by insurance?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 mb-3">
                      Yes! TMS therapy is FDA-cleared and covered by most major insurance plans, including Medicare, 
                      for the treatment of Major Depressive Disorder (MDD) when certain criteria are met. Coverage 
                      typically requires documentation of treatment-resistant depression.
                    </p>
                    <p className="text-gray-700">
                      Our dedicated team at KarmaTMS will verify your benefits and work with your insurance provider 
                      to maximize coverage. We also offer flexible payment options for out-of-pocket expenses.
                    </p>
                    <Link to="/insurance-pricing" className="text-purple-600 font-medium hover:underline inline-block mt-2">
                      View Insurance Information →
                    </Link>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How long does treatment take?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Each Exomind session lasts approximately 30 minutes. A typical treatment course consists of 
                      daily sessions (Monday through Friday) for 4-6 weeks, though your personalized protocol may vary 
                      based on your specific needs and response to treatment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What conditions does Exomind treat?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 mb-2">
                      Exomind TMS is FDA-cleared for Major Depressive Disorder and has shown promising results for:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Treatment-resistant depression</li>
                      <li>Brain fog and cognitive decline</li>
                      <li>Burnout and chronic stress</li>
                      <li>Anxiety disorders</li>
                      <li>Perimenopausal mood changes</li>
                      <li>Cognitive performance optimization</li>
                    </ul>
                    <Link to="/conditions" className="text-purple-600 font-medium hover:underline inline-block mt-2">
                      View All Conditions →
                    </Link>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Are there any side effects?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Exomind TMS is very well-tolerated with minimal side effects. The most common is mild scalp 
                      discomfort or headache during or after treatment, which typically resolves quickly. Unlike 
                      medications, TMS has no systemic side effects like weight gain, sexual dysfunction, or sedation. 
                      There's no downtime, and you can drive and return to normal activities immediately after each session.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Us in Rancho Mirage</h2>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">KarmaTMS Rancho Mirage</h3>
                      <p className="text-gray-700">
                        35400 Bob Hope Dr. Suite 206<br />
                        Rancho Mirage, CA 92270
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <Phone className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                      <a href="tel:760-760-5675" className="text-[#4e4e4e] font-medium text-lg hover:underline">
                        (760) 760-5675
                      </a>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Office Hours</h3>
                    <div className="space-y-1 text-gray-700 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday - Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link to="/contact">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        <Calendar className="h-5 w-5 mr-2" />
                        Book Consultation
                      </Button>
                    </Link>
                    <Link to="/rancho-mirage">
                      <Button variant="outline" className="w-full">
                        <MapPin className="h-5 w-5 mr-2" />
                        Get Directions
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Location Image */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                




              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Explore More KarmaTMS Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/team" className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Our Providers</h3>
              <p className="text-sm text-gray-600">Meet Dr. Keerthy Sunder and our expert team</p>
            </Link>
            <Link to="/tms-therapy" className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">TMS Therapy</h3>
              <p className="text-sm text-gray-600">Learn about our comprehensive TMS treatments</p>
            </Link>
            <Link to="/conditions/depression" className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Depression Treatment</h3>
              <p className="text-sm text-gray-600">FDA-cleared for treatment-resistant depression</p>
            </Link>
            <Link to="/contact" className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Contact Us</h3>
              <p className="text-sm text-gray-600">Schedule your consultation today</p>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default ExomindKarmaTMSPage;