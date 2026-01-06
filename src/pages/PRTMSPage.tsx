import React, { useState } from 'react';
import { ArrowRight, Brain, Target, CheckCircle, Clock, Users, Award, ChevronRight, ChevronLeft, Play, FileText, Phone, Star, Zap, Heart, Activity, BarChart3, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';

const PRTMSPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const algorithmSteps = [
  {
    step: 1,
    title: 'Brain Mapping Analysis',
    description: 'Advanced qEEG analysis identifies your unique brain patterns and dysfunctional networks',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-blue-600 to-purple-600'
  },
  {
    step: 2,
    title: 'Symptom Profiling',
    description: 'Comprehensive assessment of depression severity, anxiety levels, and cognitive function',
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'from-purple-600 to-pink-600'
  },
  {
    step: 3,
    title: 'Treatment History',
    description: 'Analysis of previous medication responses and therapy outcomes to avoid ineffective approaches',
    icon: <FileText className="w-6 h-6" />,
    color: 'from-pink-600 to-red-600'
  },
  {
    step: 4,
    title: 'AI Algorithm Processing',
    description: 'Machine learning analyzes 50+ variables to determine optimal stimulation parameters',
    icon: <Activity className="w-6 h-6" />,
    color: 'from-red-600 to-orange-600'
  },
  {
    step: 5,
    title: 'Personalized Protocol',
    description: 'Custom treatment plan with specific frequency, intensity, and target locations',
    icon: <Target className="w-6 h-6" />,
    color: 'from-orange-600 to-yellow-600'
  },
  {
    step: 6,
    title: 'Continuous Optimization',
    description: 'Real-time adjustments based on treatment response and symptom improvement',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-yellow-600 to-green-600'
  }];


  const caseStudies = [
  {
    id: 1,
    title: 'Treatment-Resistant Depression Success',
    patient: 'Sarah, 34',
    condition: 'Major Depression + Anxiety',
    background: 'Failed 6 antidepressants over 8 years, severe anxiety, unable to work',
    treatment: 'Personalized bilateral rTMS protocol based on qEEG findings',
    outcome: '85% symptom reduction after 4 weeks, returned to work, sustained improvement at 12 months',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
    metrics: {
      'PHQ-9 Score': '23 → 4',
      'GAD-7 Score': '18 → 3',
      'Treatment Duration': '6 weeks'
    }
  },
  {
    id: 2,
    title: 'Bipolar Depression Breakthrough',
    patient: 'Michael, 42',
    condition: 'Bipolar II Disorder',
    background: 'Chronic depressive episodes, medication intolerance, family history',
    treatment: 'Low-frequency right-sided stimulation with mood stabilizer continuation',
    outcome: '70% improvement in depressive symptoms, no manic episodes, improved quality of life',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
    metrics: {
      'MADRS Score': '28 → 8',
      'Quality of Life': '40% → 85%',
      'Remission Duration': '18+ months'
    }
  },
  {
    id: 3,
    title: 'Postpartum Depression Recovery',
    patient: 'Lisa, 29',
    condition: 'Postpartum Depression',
    background: 'Severe depression following childbirth, breastfeeding complications with medications',
    treatment: 'Accelerated rTMS protocol, medication-free approach',
    outcome: 'Complete remission in 3 weeks, successful bonding with baby, medication-free',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    metrics: {
      'EPDS Score': '22 → 2',
      'Bonding Score': '30% → 95%',
      'Treatment Time': '3 weeks'
    }
  }];


  const eligibilityChecklist = [
  {
    category: 'Clinical Requirements',
    items: [
    'Diagnosed with Major Depressive Disorder',
    'Failed to respond to 2+ antidepressant medications',
    'Currently experiencing moderate to severe depression',
    'Stable on current medications (if any) for 4+ weeks']

  },
  {
    category: 'Medical Clearance',
    items: [
    'No metallic implants in head/neck region',
    'No history of seizures or epilepsy',
    'No cochlear implants or hearing aids',
    'No deep brain stimulators or vagus nerve stimulators']

  },
  {
    category: 'Psychological Readiness',
    items: [
    'Committed to 6-8 week treatment schedule',
    'No active substance abuse (sober 30+ days)',
    'Stable living situation during treatment',
    'Support system available for treatment period']

  },
  {
    category: 'Age & Health Status',
    items: [
    'Age 18-70 years old',
    'No pregnancy (current or planned)',
    'No severe medical conditions affecting treatment',
    'Able to sit comfortably for 45-minute sessions']

  }];


  const handleCheckItem = (item: string) => {
    setCheckedItems((prev) =>
    prev.includes(item) ?
    prev.filter((i) => i !== item) :
    [...prev, item]
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#572670]/5 via-transparent to-blue-600/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-[#572670] to-purple-600 text-white px-6 py-2 text-sm font-semibold">
              <Target className="w-4 h-4 mr-2" />
              Next-Generation Treatment
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#572670] via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Personalized rTMS
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
              Revolutionary AI-driven repetitive Transcranial Magnetic Stimulation that analyzes your unique brain patterns, treatment history, and symptoms to create a completely personalized treatment protocol with superior outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-[#572670] to-purple-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Get Personalized Assessment
              </Button>
              <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white text-lg px-8 py-4 rounded-full">
                <FileText className="w-5 h-5 mr-2" />
                Download Clinical Data
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Algorithm Diagram */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2">
              <Activity className="w-4 h-4 mr-2" />
              AI-Powered Personalization
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              How Our Algorithm Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proprietary AI algorithm analyzes over 50 variables to create a treatment protocol uniquely tailored to your brain, symptoms, and medical history.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {algorithmSteps.map((step, index) =>
            <div key={index} className="relative">
                <Card className="h-full bg-gradient-to-br from-white to-purple-50/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.color} opacity-10 rounded-full -translate-y-12 translate-x-12`}></div>
                  
                  <CardHeader className="text-center pb-4 relative">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 mx-auto mb-3 bg-gradient-to-br from-[#572670] to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Flow arrow */}
                {index < algorithmSteps.length - 1 && index % 3 !== 2 &&
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-[#572670] opacity-60" />
                  </div>
              }
                
                {/* Down arrow for row break */}
                {index === 2 &&
              <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-6 h-6 rotate-90">
                      <ChevronRight className="w-6 h-6 text-[#572670] opacity-60" />
                    </div>
                  </div>
              }
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#572670]/10 to-purple-600/10 rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                85% Higher Success Rate
              </h3>
              <p className="text-gray-600 mb-6">
                Personalized rTMS protocols show significantly higher remission rates compared to standard TMS treatments, with faster onset and longer-lasting results.
              </p>
              <Link to="/brain-mapping">
                <Button className="bg-gradient-to-r from-[#572670] to-purple-600 hover:from-purple-700 hover:to-blue-700 rounded-full">
                  Learn About Brain Mapping Process
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Slider */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Real Patient Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Transformative Results
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how personalized rTMS has changed lives through our documented case studies and patient outcomes.
            </p>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-white to-purple-50/30 border-0 shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="relative">
                  <img
                    src={caseStudies[currentSlide].image}
                    alt="Patient success story"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg" />

                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#572670] to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Case Study {caseStudies[currentSlide].id}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <Badge className="mb-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      {caseStudies[currentSlide].condition}
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {caseStudies[currentSlide].title}
                    </h3>
                    <p className="text-[#572670] font-semibold mb-4">
                      Patient: {caseStudies[currentSlide].patient}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Background:</h4>
                      <p className="text-gray-600 text-sm">
                        {caseStudies[currentSlide].background}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Treatment:</h4>
                      <p className="text-gray-600 text-sm">
                        {caseStudies[currentSlide].treatment}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Outcome:</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        {caseStudies[currentSlide].outcome}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {Object.entries(caseStudies[currentSlide].metrics).map(([key, value]) =>
                    <div key={key} className="bg-gradient-to-r from-[#572670]/10 to-purple-600/10 rounded-lg p-3 text-center">
                        <p className="text-xs text-gray-600 mb-1">{key}</p>
                        <p className="font-bold text-[#572670]">{value}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="rounded-full border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white">

                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2">
                {caseStudies.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ?
                  'bg-[#572670] w-8' :
                  'bg-gray-300 hover:bg-gray-400'}`
                  } />

                )}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="rounded-full border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white">

                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Checklist */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-[#572670] to-purple-600 text-white px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Eligibility Assessment
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Are You a Candidate?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Use our comprehensive checklist to assess your eligibility for personalized rTMS therapy. Check all items that apply to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {eligibilityChecklist.map((category, categoryIndex) =>
            <Card key={categoryIndex} className="bg-gradient-to-br from-white to-purple-50/30 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#572670] to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      {categoryIndex + 1}
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((item, itemIndex) =>
                <div key={itemIndex} className="flex items-center space-x-3">
                      <Checkbox
                    id={`${categoryIndex}-${itemIndex}`}
                    checked={checkedItems.includes(item)}
                    onCheckedChange={() => handleCheckItem(item)}
                    className="data-[state=checked]:bg-[#572670] data-[state=checked]:border-[#572670]" />

                      <label
                    htmlFor={`${categoryIndex}-${itemIndex}`}
                    className="text-gray-700 text-sm leading-relaxed cursor-pointer">

                        {item}
                      </label>
                    </div>
                )}
                </CardContent>
              </Card>
            )}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#572670]/10 to-purple-600/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Checked Items: {checkedItems.length} / {eligibilityChecklist.reduce((sum, category) => sum + category.items.length, 0)}
              </h3>
              <p className="text-gray-600 mb-6">
                {checkedItems.length >= 12 ?
                'Great! You appear to be an excellent candidate for personalized rTMS therapy. Schedule your consultation to get started.' :
                checkedItems.length >= 8 ?
                'You may be a good candidate for personalized rTMS. Our medical team can provide a thorough evaluation.' :
                'Some criteria may need to be addressed. Our specialists can help determine the best treatment approach for you.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-[#572670] to-purple-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4 rounded-full shadow-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Professional Assessment
                  </Button>
                </Link>
                <Link to="/tms-quiz">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white text-lg px-8 py-4 rounded-full">
                    Take Detailed TMS Quiz
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/tms-therapy">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full">
                  Compare with Standard TMS
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/neurofeedback">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full">
                  Explore Neurofeedback Options
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default PRTMSPage;