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

const WomensMoodPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Women's Mood Disorders Treatment in Palm Springs | Karma TMS PC"
        description="Karma TMS PC offers specialized treatment for women's mood disorders including postpartum depression, PMDD, and perinatal mood conditions with expert, compassionate care."
        keywords="women's mood disorders palm springs, postpartum depression treatment, PMDD treatment palm springs, perinatal mood disorders"
        canonical="https://www.karmatms.com/conditions/womens-mood" />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Conditions", url: "/conditions" },
        { name: "Women's Mood Disorders", url: "/conditions/womens-mood" }]
        } />

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Women's Mood Treatment</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                TMS Therapy for Women's Mood Disorders
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Specialized, safe treatment for women's unique mental health needs including postpartum depression, 
                perinatal mood disorders, and hormone-related mood conditions.
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763029482/Exomind_PIC_Female-Model2_0125_ENUS100_rxgzxk.jpg"
                alt="Women's mental health and wellness support"
                className="rounded-lg shadow-2xl" />

            </div>
          </div>
        </div>
      </section>

      {/* What is Women's Mood Disorder Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Women's Mood Disorders?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Women's mood disorders encompass a range of mental health conditions that are influenced by hormonal changes, 
                reproductive events, and unique biological factors. These conditions can occur during pregnancy, postpartum, 
                menstrual cycles, or menopause and significantly impact emotional well-being and daily functioning.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Types Include:</h3>
              <div className="space-y-4 mb-8">
                {[
                { type: 'Postpartum Depression', desc: 'Mood changes after childbirth affecting mother-infant bonding' },
                { type: 'Perinatal Mood Disorders', desc: 'Depression and anxiety during pregnancy and after delivery' },
                { type: 'Premenstrual Dysphoric Disorder (PMDD)', desc: 'Severe mood symptoms before menstruation' },
                { type: 'Perimenopausal Depression', desc: 'Mood changes during menopausal transition' }].
                map((item, index) =>
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.type}</h4>
                        <p className="text-gray-700 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763031168/Exomind_PIC_Unit_0943_ENUS100_lmh0bj.jpg"
                alt="Women's mental health support and understanding"
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
                Could TMS Help Your Women's Mood Condition?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Take our confidential assessment to explore whether TMS therapy could provide the relief 
                you need during this important time in your life.
              </p>
              <Link to="/tms-quiz">
                <Button size="lg" className="bg-[#572670] hover:bg-[#572670]/90">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Take the Women's Health Assessment
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Understanding Women's Mood Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Women's Mood Disorders</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Women experience unique mental health challenges influenced by hormonal fluctuations, 
              reproductive life stages, and biological factors that require specialized understanding and care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
            {
              title: 'Hormonal Influences',
              description: 'Fluctuations in estrogen, progesterone, and other hormones can significantly impact mood, anxiety, and emotional regulation.',
              icon: Brain
            },
            {
              title: 'Reproductive Events',
              description: 'Pregnancy, childbirth, menstruation, and menopause represent critical periods when mood disorders may emerge or worsen.',
              icon: Heart
            },
            {
              title: 'Unique Symptoms',
              description: 'Women may experience different symptom presentations requiring specialized diagnostic and treatment approaches.',
              icon: Shield
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Symptoms</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
              'Persistent sadness or tearfulness',
              'Severe mood swings',
              'Anxiety and excessive worry',
              'Difficulty bonding with baby (postpartum)',
              'Changes in appetite or sleep',
              'Fatigue and low energy',
              'Feelings of guilt or inadequacy',
              'Difficulty concentrating'].
              map((symptom, index) =>
              <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#572670] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{symptom}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How TMS Works for Women's Mood */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">TMS Therapy for Women's Mood Disorders</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              TMS therapy offers a safe, non-medication approach to treating women's mood disorders, 
              particularly beneficial during pregnancy, postpartum, and for those who want to avoid medications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
            {
              title: 'Safe for Pregnancy',
              description: 'Non-invasive treatment with no systemic effects, making it suitable for pregnant and breastfeeding women.',
              icon: Shield
            },
            {
              title: 'Hormone-Friendly',
              description: 'Works independently of hormonal systems while addressing mood regulation in the brain.',
              icon: Brain
            },
            {
              title: 'Medication-Free Option',
              description: 'Provides relief without the concerns of medication side effects or interactions during reproductive years.',
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

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Clinical Evidence for Women</h3>
            <p className="text-lg text-gray-700 mb-6">
              Research demonstrates TMS therapy's effectiveness for perinatal and postpartum depression, 
              with studies showing significant improvement in maternal mood without adverse effects on fetal development or breastfeeding.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">Safe</div>
                <div className="text-sm text-gray-600">During Pregnancy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">70%</div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#572670] mb-2">No</div>
                <div className="text-sm text-gray-600">Medication Needed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* During Recovery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">During Recovery: What to Expect</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our specialized approach to women's mood treatment is designed to support you through 
              every stage of your journey with compassionate, evidence-based care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-8">
                {[
                {
                  step: '1',
                  title: "Women's Health Assessment",
                  description: 'Comprehensive evaluation considering reproductive history, hormonal factors, and life stage-specific concerns.'
                },
                {
                  step: '2',
                  title: 'Personalized Treatment Plan',
                  description: 'Customized TMS protocol designed for your specific condition, whether pregnancy-related, hormonal, or life-stage specific.'
                },
                {
                  step: '3',
                  title: 'Gentle Treatment Sessions',
                  description: 'Regular sessions in a comfortable, supportive environment. Safe during pregnancy and while breastfeeding.'
                },
                {
                  step: '4',
                  title: 'Ongoing Support',
                  description: 'Continuous monitoring and adjustment, with coordination of care with your OB-GYN or other healthcare providers as needed.'
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1765797976/neurocare-TMS3407_Clinician-Patient-Apollo-Greiner_wglqfe.jpg"
                alt="Supportive women's mental health treatment"
                className="rounded-lg shadow-lg" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Care Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Care for Women's Mental Health</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our team specializes in women's mental health, understanding the unique challenges and providing 
              compassionate, expert care throughout all life stages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
            {
              title: 'Women\'s Health Specialists',
              description: 'Extensive experience treating mood disorders specific to women\'s reproductive health.',
              icon: Users
            },
            {
              title: 'Perinatal Expertise',
              description: 'Specialized training in pregnancy and postpartum mental health care.',
              icon: Heart
            },
            {
              title: 'Coordinated Care',
              description: 'Collaboration with OB-GYNs, midwives, and other women\'s health providers.',
              icon: Shield
            },
            {
              title: 'Comprehensive Support',
              description: 'Holistic approach addressing physical, emotional, and lifestyle factors.',
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

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits for Women's Mental Health</h2>
              <div className="space-y-6">
                {[
                {
                  title: 'Safe During Pregnancy & Breastfeeding',
                  description: 'Non-invasive treatment with no medication exposure to baby during pregnancy or through breast milk.'
                },
                {
                  title: 'Preserve Fertility Plans',
                  description: 'No concerns about medication effects on fertility or future pregnancies.'
                },
                {
                  title: 'No Hormonal Interference',
                  description: 'TMS doesn\'t interact with birth control, hormone therapy, or natural hormonal cycles.'
                },
                {
                  title: 'Rapid Symptom Relief',
                  description: 'Many women notice improvement within weeks, crucial during time-sensitive periods like postpartum.'
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Treatment Timeline</h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">4-6 weeks</div>
                        <div className="text-gray-600">Typical treatment course</div>
                      </div>
                      <Calendar className="h-8 w-8 text-[#572670]" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">2-3 weeks</div>
                        <div className="text-gray-600">Initial improvement</div>
                      </div>
                      <Brain className="h-8 w-8 text-[#572670]" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-[#572670]">Safe</div>
                        <div className="text-gray-600">All reproductive stages</div>
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

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Take the First Step Toward Feeling Like Yourself Again</h3>
            <p className="text-lg text-gray-700 mb-6">
              You don't have to struggle alone. Our specialized women's mental health team is here to provide 
              the compassionate, expert care you deserve during this important time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"><Button size="lg" className="bg-[#572670] hover:bg-[#572670]/90">
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
          <h2 className="text-2xl font-bold text-center mb-8">Related Mental Health Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/depression" className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Depression Treatment</h3>
              <p className="text-sm text-gray-600">TMS therapy for major depression</p>
            </Link>
            <Link to="/anxiety" className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Anxiety Treatment</h3>
              <p className="text-sm text-gray-600">Relief from anxiety disorders</p>
            </Link>
            <Link to="/conditions" className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">All Conditions</h3>
              <p className="text-sm text-gray-600">View all treatments we offer</p>
            </Link>
            <Link to="/contact" className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Contact Us</h3>
              <p className="text-sm text-gray-600">Schedule your consultation</p>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default WomensMoodPage;