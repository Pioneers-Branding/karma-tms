import React, { useState } from 'react';
import { ArrowRight, Brain, Heart, Shield, TrendingDown, Clock, CheckCircle, AlertTriangle, Phone, FileText, Users, Target, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';

const MedicationManagementPage = () => {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [trackedSideEffects, setTrackedSideEffects] = useState<{[key: string]: boolean;}>({});

  const philosophyPrinciples = [
  {
    principle: 'Patient-Centered Care',
    description: 'Every decision prioritizes your individual needs, preferences, and quality of life',
    icon: <Heart className="w-8 h-8" />,
    details: 'We believe you are the expert on your own experience. Our role is to provide medical expertise while honoring your personal values, goals, and concerns about medication treatment.',
    color: 'from-red-500 to-pink-500'
  },
  {
    principle: 'Minimal Effective Dose',
    description: 'Using the lowest dose that provides maximum benefit with minimal side effects',
    icon: <Target className="w-8 h-8" />,
    details: 'Rather than following one-size-fits-all protocols, we carefully titrate medications to find your optimal therapeutic window, avoiding both under-treatment and over-medication.',
    color: 'from-[#572670] to-purple-600'
  },
  {
    principle: 'Informed Collaboration',
    description: 'Transparent communication about benefits, risks, and alternatives',
    icon: <Users className="w-8 h-8" />,
    details: 'We provide comprehensive information about your treatment options, including potential side effects, drug interactions, and alternative approaches, empowering you to make informed decisions.',
    color: 'from-blue-500 to-purple-500'
  },
  {
    principle: 'Holistic Integration',
    description: 'Combining medication with therapy, lifestyle changes, and complementary treatments',
    icon: <Brain className="w-8 h-8" />,
    details: 'Medication is just one tool in your healing journey. We integrate pharmaceutical interventions with psychotherapy, nutrition, exercise, and other evidence-based approaches.',
    color: 'from-green-500 to-blue-500'
  }];


  const taperPhases = [
  {
    phase: 'Pre-Taper Assessment',
    duration: '2-4 weeks',
    description: 'Comprehensive evaluation and preparation',
    activities: [
    'Complete medical and psychiatric evaluation',
    'Review current medication regimen',
    'Assess readiness for tapering',
    'Establish support systems',
    'Create detailed tapering plan'],

    considerations: [
    'Symptom stability (6+ months)',
    'Life stressor assessment',
    'Support system evaluation',
    'Alternative coping strategies'],

    successCriteria: 'Patient feels prepared and has comprehensive support plan'
  },
  {
    phase: 'Initial Reduction',
    duration: '4-8 weeks',
    description: 'Begin gradual dose reduction with close monitoring',
    activities: [
    'Reduce dose by 10-25% from baseline',
    'Daily symptom and side effect tracking',
    'Weekly check-ins with medical team',
    'Implement coping strategies',
    'Adjust taper speed as needed'],

    considerations: [
    'Monitor for withdrawal symptoms',
    'Track mood and anxiety levels',
    'Assess sleep quality',
    'Watch for cognitive changes'],

    successCriteria: 'Minimal withdrawal symptoms and maintained stability'
  },
  {
    phase: 'Progressive Tapering',
    duration: '3-12 months',
    description: 'Continue systematic dose reductions',
    activities: [
    'Reduce dose by 10-25% every 2-4 weeks',
    'Regular monitoring appointments',
    'Adjust tapering schedule based on response',
    'Implement additional support as needed',
    'Track functional improvements'],

    considerations: [
    'Slower tapering may be needed',
    'Some doses may need to be held',
    'Additional therapeutic support',
    'Lifestyle modification support'],

    successCriteria: 'Successful dose reductions without significant symptom return'
  },
  {
    phase: 'Final Discontinuation',
    duration: '4-8 weeks',
    description: 'Complete medication withdrawal with intensive support',
    activities: [
    'Final dose reductions to zero',
    'Intensive monitoring protocol',
    'Emergency support plan activation',
    'Alternative treatment optimization',
    'Transition planning'],

    considerations: [
    'Highest risk period for symptoms',
    'May require temporary dose increases',
    'Enhanced therapeutic support',
    'Family/support system involvement'],

    successCriteria: 'Complete discontinuation with maintained wellness'
  },
  {
    phase: 'Post-Discontinuation Monitoring',
    duration: '3-6 months',
    description: 'Long-term follow-up and relapse prevention',
    activities: [
    'Regular monitoring appointments',
    'Symptom tracking and management',
    'Relapse prevention planning',
    'Alternative treatment optimization',
    'Long-term wellness planning'],

    considerations: [
    'Risk of protracted withdrawal',
    'Delayed symptom emergence',
    'Need for ongoing support',
    'Lifestyle sustainability'],

    successCriteria: 'Sustained wellness without medication dependence'
  }];


  const sideEffectCategories = [
  {
    category: 'Physical Symptoms',
    effects: [
    'Nausea/Digestive issues',
    'Headaches',
    'Dizziness',
    'Fatigue',
    'Weight changes',
    'Sleep disturbances',
    'Sexual side effects',
    'Muscle tension/pain'],

    color: 'from-red-500 to-orange-500'
  },
  {
    category: 'Cognitive Effects',
    effects: [
    'Memory problems',
    'Concentration difficulties',
    'Mental fog',
    'Confusion',
    'Slow thinking',
    'Word-finding problems',
    'Decision-making issues',
    'Reduced creativity'],

    color: 'from-blue-500 to-purple-500'
  },
  {
    category: 'Emotional Changes',
    effects: [
    'Emotional numbing',
    'Increased anxiety',
    'Mood swings',
    'Irritability',
    'Apathy',
    'Feeling disconnected',
    'Reduced empathy',
    'Emotional instability'],

    color: 'from-[#572670] to-pink-500'
  },
  {
    category: 'Social/Behavioral',
    effects: [
    'Social withdrawal',
    'Relationship difficulties',
    'Reduced motivation',
    'Loss of interest',
    'Personality changes',
    'Impulsive behaviors',
    'Work/school performance',
    'Daily functioning issues'],

    color: 'from-green-500 to-blue-500'
  }];


  const handleSideEffectCheck = (effect: string, checked: boolean) => {
    setTrackedSideEffects((prev) => ({
      ...prev,
      [effect]: checked
    }));
  };

  const totalTracked = Object.values(trackedSideEffects).filter(Boolean).length;
  const totalEffects = sideEffectCategories.reduce((sum, category) => sum + category.effects.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      <SEO
        title="Medication Management in Palm Springs | Karma TMS PC"
        description="Karma TMS PC offers expert Medication Management in Palm Springs, providing personalized treatment plans to ensure safe, effective, and balanced mental health care."
        keywords="Medication Management"
        canonical="https://www.karmatms.com/medication-management" />

      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-[#572670] to-blue-600 text-white">
              Personalized Approach
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-[#572670] via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Medication Management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Expert psychiatric medication management focused on optimizing your treatment while minimizing side effects. We support safe transitions, careful tapering, and finding your optimal therapeutic approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-[#572670] to-purple-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white text-lg px-8 py-3">
                <FileText className="w-5 h-5 mr-2" />
                Request Medication Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              Our Approach
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Medication Management Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our medication management is guided by evidence-based practices, individualized care, and a deep respect for your autonomy and wellbeing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {philosophyPrinciples.map((item, index) =>
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {item.principle}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {item.details}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="bg-gradient-to-r from-[#572670]/10 to-purple-600/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Our Commitment to You
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We believe that optimal psychiatric care combines medical expertise with genuine partnership, ensuring you feel heard, respected, and empowered throughout your treatment journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-[#572670] mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Safety First</h4>
                <p className="text-gray-600 text-sm">Prioritizing your safety through careful monitoring and evidence-based protocols</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-[#572670] mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Compassionate Care</h4>
                <p className="text-gray-600 text-sm">Understanding that medication decisions deeply impact your quality of life</p>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 text-[#572670] mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Personalized Treatment</h4>
                <p className="text-gray-600 text-sm">Tailoring medication strategies to your unique biology and circumstances</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Taper Plan Flowchart */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-[#572670] to-purple-600 text-white">
              Safe Discontinuation
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Medication Tapering Process
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach to safely reducing and discontinuing psychiatric medications while minimizing withdrawal symptoms and maintaining stability.
            </p>
          </div>

          <div className="space-y-6">
            {taperPhases.map((phase, index) =>
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-300 border-0 ${
              selectedPhase === index ?
              'bg-gradient-to-br from-[#572670]/10 to-purple-600/10 shadow-xl scale-105' :
              'bg-gradient-to-br from-white to-purple-50 shadow-md hover:shadow-lg'}`
              }
              onClick={() => setSelectedPhase(index)}>

                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4 transition-all duration-300 ${
                      selectedPhase === index ?
                      'bg-gradient-to-r from-[#572670] to-purple-600 scale-110' :
                      'bg-gradient-to-r from-gray-500 to-gray-600'}`
                      }>
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{phase.phase}</h3>
                          <Badge className="mt-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            {phase.duration}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{phase.description}</p>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <h4 className="font-bold text-gray-900 mb-3">Key Activities:</h4>
                      <ul className="space-y-2">
                        {phase.activities.slice(0, 3).map((activity, activityIndex) =>
                      <li key={activityIndex} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-[#572670] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{activity}</span>
                          </li>
                      )}
                        {phase.activities.length > 3 &&
                      <li className="text-xs text-gray-500">+{phase.activities.length - 3} more activities</li>
                      }
                      </ul>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <h4 className="font-bold text-gray-900 mb-3">Considerations:</h4>
                      <ul className="space-y-2">
                        {phase.considerations.map((consideration, considerationIndex) =>
                      <li key={considerationIndex} className="flex items-start space-x-2 text-sm">
                            <AlertTriangle className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{consideration}</span>
                          </li>
                      )}
                      </ul>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4">
                        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          Success Criteria
                        </h4>
                        <p className="text-gray-700 text-sm">{phase.successCriteria}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="mt-12">
            <Card className="bg-gradient-to-r from-[#572670]/10 to-purple-600/10 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Important Safety Information
                </h3>
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Never Abruptly Stop</h4>
                    <p className="text-gray-600 text-sm">
                      Suddenly discontinuing psychiatric medications can cause dangerous withdrawal symptoms and symptom rebound. Always work with your healthcare provider.
                    </p>
                  </div>
                  <div>
                    <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Professional Supervision</h4>
                    <p className="text-gray-600 text-sm">
                      Our medical team provides careful monitoring throughout the tapering process, adjusting the plan based on your individual response and needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-[#572670] to-purple-600 hover:from-purple-700 hover:to-blue-700">
                      <Phone className="w-4 h-4 mr-2" />
                      Discuss Tapering Options
                    </Button>
                  </Link>
                  <Link to="/tms-therapy">
                    <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white">
                      Explore Alternative Treatments
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Side Effect Tracker */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-red-600 to-purple-600 text-white">
              Monitoring Tool
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Side Effect Tracker
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Monitor and track potential medication side effects to optimize your treatment and maintain quality of life. Check any symptoms you're currently experiencing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sideEffectCategories.map((category, categoryIndex) =>
            <Card key={categoryIndex} className="bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-white text-sm font-bold mr-3`}>
                      {categoryIndex + 1}
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.effects.map((effect, effectIndex) =>
                <div key={effectIndex} className="flex items-start space-x-3">
                      <Checkbox
                    id={`${categoryIndex}-${effectIndex}`}
                    checked={trackedSideEffects[effect] || false}
                    onCheckedChange={(checked) => handleSideEffectCheck(effect, checked as boolean)}
                    className="mt-0.5 border-[#572670] data-[state=checked]:bg-[#572670] data-[state=checked]:border-[#572670]" />

                      <label
                    htmlFor={`${categoryIndex}-${effectIndex}`}
                    className="text-sm text-gray-700 leading-relaxed cursor-pointer">

                        {effect}
                      </label>
                    </div>
                )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Tracking Summary */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-[#572670]/10 to-purple-600/10 border-0">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Side Effect Summary
                  </h3>
                  <p className="text-gray-600">
                    You've reported {totalTracked} out of {totalEffects} potential side effects
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>None</span>
                    <span>Mild</span>
                    <span>Moderate</span>
                    <span>Severe</span>
                  </div>
                  <Progress
                    value={totalTracked / totalEffects * 100}
                    className={`h-4 ${
                    totalTracked === 0 ? 'text-green-500' :
                    totalTracked <= totalEffects * 0.25 ? 'text-yellow-500' :
                    totalTracked <= totalEffects * 0.5 ? 'text-orange-500' : 'text-red-500'}`
                    } />

                </div>
                
                <div className="space-y-4">
                  {totalTracked === 0 &&
                  <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                      <p className="text-green-800 font-semibold text-center">
                        ✅ Excellent! No significant side effects reported.
                      </p>
                    </div>
                  }
                  
                  {totalTracked > 0 && totalTracked <= totalEffects * 0.25 &&
                  <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                      <p className="text-yellow-800 font-semibold text-center">
                        ⚠️ Mild side effects - Let's discuss optimization strategies.
                      </p>
                    </div>
                  }
                  
                  {totalTracked > totalEffects * 0.25 && totalTracked <= totalEffects * 0.5 &&
                  <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                      <p className="text-orange-800 font-semibold text-center">
                        ⚠️ Moderate side effect burden - Medication review recommended.
                      </p>
                    </div>
                  }
                  
                  {totalTracked > totalEffects * 0.5 &&
                  <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                      <p className="text-red-800 font-semibold text-center">
                        🚨 Significant side effects - Urgent medication review needed.
                      </p>
                    </div>
                  }
                </div>

                <div className="text-center mt-8">
                  <div className="bg-white rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-gray-900 mb-4">Recommended Next Steps:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="text-left">
                        <h5 className="font-semibold text-gray-900 mb-2">For Mild-Moderate Effects:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Discuss timing and dosing adjustments</li>
                          <li>• Consider alternative medications</li>
                          <li>• Explore complementary treatments</li>
                          <li>• Lifestyle modification strategies</li>
                        </ul>
                      </div>
                      <div className="text-left">
                        <h5 className="font-semibold text-gray-900 mb-2">For Significant Effects:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Immediate medication review</li>
                          <li>• Consider medication discontinuation</li>
                          <li>• Explore non-medication alternatives</li>
                          <li>• Comprehensive treatment planning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                      <Button className="bg-gradient-to-r from-[#572670] to-purple-600 hover:from-purple-700 hover:to-blue-700">
                        <Phone className="w-4 h-4 mr-2" />
                        Schedule Medication Review
                      </Button>
                    </Link>
                    <Link to="/tms-therapy">
                      <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white">
                        Explore TMS Alternative
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default MedicationManagementPage;