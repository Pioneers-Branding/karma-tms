import React, { useState } from 'react';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Clock, CheckCircle, Play, Phone, FileText, Activity, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';

const NeurofeedbackPage = () => {
  const [selectedMechanism, setSelectedMechanism] = useState(0);

  const mechanismSteps = [
  {
    title: 'Real-Time Monitoring',
    description: 'EEG sensors continuously track your brain wave activity',
    icon: <Activity className="w-8 h-8" />,
    details: 'High-precision sensors placed on your scalp detect electrical activity from neurons in real-time, measuring brain waves across different frequency bands.',
    visual: '📡'
  },
  {
    title: 'Pattern Recognition',
    description: 'Advanced algorithms identify optimal and suboptimal brain states',
    icon: <Brain className="w-8 h-8" />,
    details: 'Our software compares your current brain activity to healthy, optimal patterns, identifying when your brain is in states associated with focus, calm, or peak performance.',
    visual: '🧠'
  },
  {
    title: 'Instant Feedback',
    description: 'Visual and audio cues guide your brain toward healthier patterns',
    icon: <Zap className="w-8 h-8" />,
    details: 'When your brain produces desired patterns, you receive positive feedback through games, music, or visual displays, reinforcing these healthy neural pathways.',
    visual: '⚡'
  },
  {
    title: 'Neural Plasticity',
    description: 'Repeated training creates lasting changes in brain function',
    icon: <TrendingUp className="w-8 h-8" />,
    details: 'Through consistent practice, your brain learns to maintain optimal states more easily, creating permanent positive changes in neural networks and function.',
    visual: '🎯'
  }];


  const benefits = [
  {
    category: 'Cognitive Enhancement',
    items: [
    'Improved focus and attention span',
    'Enhanced memory and learning',
    'Better executive function',
    'Increased mental clarity',
    'Faster information processing'],

    icon: <Brain className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-500'
  },
  {
    category: 'Emotional Regulation',
    items: [
    'Reduced anxiety and stress',
    'Better mood stability',
    'Improved emotional control',
    'Enhanced resilience',
    'Greater self-awareness'],

    icon: <Shield className="w-8 h-8" />,
    color: 'from-[#572670] to-purple-600'
  },
  {
    category: 'Performance Optimization',
    items: [
    'Enhanced creativity',
    'Improved decision-making',
    'Better problem-solving skills',
    'Increased peak flow states',
    'Superior mental endurance'],

    icon: <Target className="w-8 h-8" />,
    color: 'from-green-500 to-blue-500'
  },
  {
    category: 'Sleep & Recovery',
    items: [
    'Improved sleep quality',
    'Faster sleep onset',
    'Deeper restorative sleep',
    'Better recovery from stress',
    'Enhanced daytime alertness'],

    icon: <Clock className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500'
  }];


  const sessionTimeline = [
  {
    phase: 'Initial Assessment',
    duration: '60 minutes',
    sessions: 1,
    description: 'Comprehensive brain mapping and baseline establishment',
    activities: [
    'Complete qEEG brain mapping',
    'Cognitive and behavioral assessment',
    'Treatment goal setting',
    'Protocol customization'],

    outcomes: 'Understanding of current brain patterns and optimal training targets'
  },
  {
    phase: 'Foundation Training',
    duration: '45 minutes',
    sessions: 10,
    description: 'Basic neurofeedback skills and protocol familiarization',
    activities: [
    'Learn neurofeedback basics',
    'Simple attention training',
    'Relaxation protocols',
    'Progress monitoring'],

    outcomes: 'Initial brain training skills and early improvements in target areas'
  },
  {
    phase: 'Intensive Training',
    duration: '45 minutes',
    sessions: 20,
    description: 'Advanced protocols targeting specific goals and conditions',
    activities: [
    'Advanced cognitive training',
    'Emotion regulation protocols',
    'Peak performance training',
    'Customized interventions'],

    outcomes: 'Significant improvements in symptoms and enhanced brain function'
  },
  {
    phase: 'Integration',
    duration: '45 minutes',
    sessions: 10,
    description: 'Skill consolidation and real-world application',
    activities: [
    'Advanced skill refinement',
    'Real-world application training',
    'Maintenance strategies',
    'Long-term planning'],

    outcomes: 'Stable improvements and self-regulation skills for ongoing benefits'
  },
  {
    phase: 'Maintenance',
    duration: '45 minutes',
    sessions: '2-4 monthly',
    description: 'Ongoing support and skill reinforcement',
    activities: [
    'Progress monitoring',
    'Skill refreshers',
    'Protocol adjustments',
    'Continued optimization'],

    outcomes: 'Long-term maintenance of gains and continued improvement'
  }];


  const totalSessions = sessionTimeline.slice(0, 4).reduce((sum, phase) =>
  sum + (typeof phase.sessions === 'number' ? phase.sessions : 0), 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-[#572670] to-blue-600 text-white">
              Brain Training Technology
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-[#572670] via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Neurofeedback
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Train your brain to achieve optimal performance through real-time monitoring and feedback. Neurofeedback helps you develop better brain wave patterns for improved focus, emotional regulation, and cognitive function.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
              <Button className="bg-gradient-to-r from-[#572670] to-purple-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Start Training
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanism Explainer */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              How It Works
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              The Neurofeedback Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understand how neurofeedback trains your brain to achieve optimal states through real-time feedback and neural plasticity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              {mechanismSteps.map((step, index) =>
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 border-0 ${
                selectedMechanism === index ?
                'bg-gradient-to-br from-[#572670]/10 to-purple-600/10 shadow-xl scale-105' :
                'bg-gradient-to-br from-white to-purple-50 shadow-md hover:shadow-lg'}`
                }
                onClick={() => setSelectedMechanism(index)}>

                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                    selectedMechanism === index ?
                    'bg-gradient-to-r from-[#572670] to-purple-600 scale-110' :
                    'bg-gradient-to-r from-gray-500 to-gray-600'}`
                    }>
                        {step.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-gray-900">
                          {step.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )}
            </div>
            
            <div className="text-center">
              <div className="text-8xl mb-6">
                {mechanismSteps[selectedMechanism].visual}
              </div>
              <Card className="bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {mechanismSteps[selectedMechanism].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {mechanismSteps[selectedMechanism].details}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#572670]/10 to-purple-600/10 rounded-2xl p-8">
            <div className="grid lg:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-[#572670] mb-2">Real-Time</h3>
                <p className="text-gray-600">Instant Brain Feedback</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#572670] mb-2">Non-Invasive</h3>
                <p className="text-gray-600">Safe & Drug-Free</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#572670] mb-2">Lasting</h3>
                <p className="text-gray-600">Permanent Changes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
              Proven Benefits
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Transform Your Brain Function
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Neurofeedback training provides comprehensive benefits across cognitive, emotional, and performance domains.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((category, index) =>
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) =>
                  <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                  )}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#572670]/10 to-purple-600/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Who Can Benefit?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Students & Professionals</h4>
                  <p className="text-gray-600 text-sm">Enhance focus, memory, and cognitive performance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#572670] to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                    <Target className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Athletes & Performers</h4>
                  <p className="text-gray-600 text-sm">Achieve peak performance and flow states</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Anyone Seeking Wellness</h4>
                  <p className="text-gray-600 text-sm">Improve emotional regulation and mental clarity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-[#572670] to-purple-600 text-white">
              Training Journey
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Your Neurofeedback Timeline
            </h2>
            <p className="text-lg text-gray-600">
              Follow a structured training program designed to maximize your brain's potential through progressive skill development.
            </p>
          </div>

          <div className="space-y-8">
            {sessionTimeline.map((phase, index) =>
            <Card key={index} className="bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#572670] to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                              {phase.duration}
                            </Badge>
                            <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                              {typeof phase.sessions === 'number' ? `${phase.sessions} sessions` : phase.sessions}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <div className="bg-gradient-to-r from-[#572670]/10 to-purple-600/10 rounded-lg p-4">
                        <h4 className="font-bold text-gray-900 mb-2">Expected Outcomes:</h4>
                        <p className="text-gray-700 text-sm">{phase.outcomes}</p>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h4 className="font-bold text-gray-900 mb-4">Session Activities:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {phase.activities.map((activity, activityIndex) =>
                      <div key={activityIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#572670] rounded-full"></div>
                            <span className="text-gray-700">{activity}</span>
                          </div>
                      )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Progress Summary */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-[#572670]/10 to-purple-600/10 border-0">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Complete Training Program
                  </h3>
                  <p className="text-gray-600">
                    Total of {totalSessions} core sessions over 12-16 weeks, plus ongoing maintenance
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Assessment</span>
                    <span>Foundation</span>
                    <span>Intensive</span>
                    <span>Integration</span>
                    <span>Maintenance</span>
                  </div>
                  <Progress value={100} className="h-3" />
                </div>
                
                <div className="text-center space-y-4">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-[#572670] text-2xl">95%</h4>
                      <p className="text-gray-600">Success Rate</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#572670] text-2xl">12-16</h4>
                      <p className="text-gray-600">Weeks Duration</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#572670] text-2xl">Long-term</h4>
                      <p className="text-gray-600">Lasting Benefits</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link to="/contact">
                      <Button className="bg-gradient-to-r from-[#572670] to-purple-600 hover:from-purple-700 hover:to-blue-700">
                        <Phone className="w-4 h-4 mr-2" />
                        Start Your Journey
                      </Button>
                    </Link>
                    <Link to="/brain-mapping">
                      <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white">
                        Get Brain Assessment
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

export default NeurofeedbackPage;