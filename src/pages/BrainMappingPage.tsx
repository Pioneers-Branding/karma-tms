import React, { useState } from 'react';
import { ArrowRight, Brain, Zap, Activity, Eye, Target, TrendingUp, Download, Phone, FileText, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';

const BrainMappingPage = () => {
  const [currentHeatmap, setCurrentHeatmap] = useState(0);
  const [reportStep, setReportStep] = useState(0);

  const heatmapExamples = [
  {
    title: 'Depression - Before Treatment',
    description: 'Decreased activity in prefrontal regions (blue areas)',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/62abea2f-775f-47a7-ad22-2bfc58d01038.webp',
    regions: ['DLPFC Hypoactivity', 'Anterior Cingulate Changes', 'Limbic Dysregulation'],
    severity: 'Severe'
  },
  {
    title: 'Depression - After 6 Weeks TMS',
    description: 'Normalized activity patterns (green/yellow areas)',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b3740a3e-1c6d-4eb7-8300-432f7cb4655c.webp',
    regions: ['DLPFC Activation', 'Restored Connectivity', 'Balanced Networks'],
    severity: 'Mild'
  },
  {
    title: 'Anxiety - Overactivation Pattern',
    description: 'Hyperactivity in amygdala and fear circuits (red areas)',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/5a26ae21-6fa8-4af4-8fba-bc048cb7cc0f.webp',
    regions: ['Amygdala Hyperactivity', 'Heightened Fear Network', 'Stress Response'],
    severity: 'Moderate'
  },
  {
    title: 'ADHD - Attention Networks',
    description: 'Underactivity in attention and executive regions',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/af090a18-4a23-42f8-b29e-c141c5f0de51.webp',
    regions: ['Prefrontal Hypoactivity', 'Default Network Issues', 'Executive Dysfunction'],
    severity: 'Moderate'
  }];


  const reportSteps = [
  {
    title: 'Patient Information & History',
    description: 'Demographic data, clinical history, medications, and presenting symptoms',
    content: 'This section includes your complete medical history, current medications, symptom timeline, and treatment goals to provide context for the brain mapping results.',
    icon: <FileText className="w-6 h-6" />,
    duration: '5 minutes to review'
  },
  {
    title: 'Raw EEG Data Analysis',
    description: 'Detailed frequency analysis across all brain regions with statistical comparisons',
    content: 'Your brain wave patterns are analyzed across Delta, Theta, Alpha, Beta, and Gamma frequencies, compared to age-matched normative databases.',
    icon: <Activity className="w-6 h-6" />,
    duration: '10 minutes to review'
  },
  {
    title: 'Brain Maps & Visualizations',
    description: 'Colorful topographic maps showing brain activity patterns and abnormalities',
    content: 'Visual representations of your brain activity using heat maps, with red areas showing overactivity and blue areas showing underactivity.',
    icon: <Brain className="w-6 h-6" />,
    duration: '15 minutes to review'
  },
  {
    title: 'Clinical Interpretation',
    description: 'Professional analysis of findings and their relationship to your symptoms',
    content: 'Our neurologists explain what the patterns mean for your specific condition and how they relate to your symptoms and treatment options.',
    icon: <Eye className="w-6 h-6" />,
    duration: '20 minutes to review'
  },
  {
    title: 'Treatment Recommendations',
    description: 'Personalized treatment plan based on your unique brain patterns',
    content: 'Specific recommendations for TMS protocols, neurofeedback training, medication considerations, and lifestyle modifications.',
    icon: <Target className="w-6 h-6" />,
    duration: '15 minutes to review'
  }];


  const qeegBenefits = [
  {
    title: 'Objective Measurement',
    description: 'Unlike subjective assessments, qEEG provides measurable brain activity data',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Treatment Precision',
    description: 'Identifies exact brain regions that need stimulation or regulation',
    icon: <Target className="w-8 h-8" />,
    color: 'from-[#572670] to-purple-600'
  },
  {
    title: 'Progress Tracking',
    description: 'Monitors how your brain responds to treatment over time',
    icon: <Activity className="w-8 h-8" />,
    color: 'from-green-500 to-blue-500'
  },
  {
    title: 'Personalized Protocols',
    description: 'Creates custom treatment parameters based on your unique patterns',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500'
  }];


  const nextHeatmap = () => {
    setCurrentHeatmap((prev) => (prev + 1) % heatmapExamples.length);
  };

  const prevHeatmap = () => {
    setCurrentHeatmap((prev) => (prev - 1 + heatmapExamples.length) % heatmapExamples.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-[#572670] to-blue-600 text-white">
              Advanced Brain Assessment
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-[#572670] via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Brain Mapping
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Quantitative EEG (qEEG) brain mapping provides detailed insights into your brain's electrical activity, revealing patterns that guide personalized treatment for optimal outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-[#572670] to-purple-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Brain Map
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is qEEG Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              Understanding qEEG
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              What is Quantitative EEG?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              qEEG is a sophisticated analysis of brain wave patterns that provides objective, measurable data about your brain's electrical activity and function.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">The Science Behind qEEG</h3>
                  <p className="text-gray-600 mb-4">
                    Your brain produces electrical activity through billions of neurons communicating. qEEG captures this activity using 19-32 electrodes placed on your scalp, recording brain waves across different frequency bands.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#572670] rounded-full mr-3"></div>
                      Delta waves (0.5-4 Hz) - Deep sleep and healing
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      Theta waves (4-8 Hz) - Creativity and deep states
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Alpha waves (8-12 Hz) - Relaxation and flow
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Beta waves (12-30 Hz) - Active thinking and focus
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      Gamma waves (30-100 Hz) - High-level cognition
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {qeegBenefits.map((benefit, index) =>
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        {benefit.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#572670]/10 to-purple-600/10 rounded-2xl p-8">
            <div className="grid lg:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-[#572670] mb-2">19-32</h3>
                <p className="text-gray-600">Electrode Sensors</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#572670] mb-2">45 min</h3>
                <p className="text-gray-600">Recording Time</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#572670] mb-2">95%</h3>
                <p className="text-gray-600">Diagnostic Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heat-map Gallery */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              Brain Activity Visualizations
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Heat Map Gallery
            </h2>
            <p className="text-lg text-gray-600">
              See how different conditions appear on brain maps and how treatment can normalize activity patterns.
            </p>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-white to-purple-50 border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-96">
                  <img
                    src={heatmapExamples[currentHeatmap].image}
                    alt={heatmapExamples[currentHeatmap].title}
                    className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className={`mb-2 ${
                    heatmapExamples[currentHeatmap].severity === 'Severe' ? 'bg-red-500' :
                    heatmapExamples[currentHeatmap].severity === 'Moderate' ? 'bg-yellow-500' : 'bg-green-500'} text-white`
                    }>
                      {heatmapExamples[currentHeatmap].severity}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {heatmapExamples[currentHeatmap].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {heatmapExamples[currentHeatmap].description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-bold text-gray-900">Key Findings:</h4>
                    {heatmapExamples[currentHeatmap].regions.map((region, index) =>
                    <div key={index} className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-[#572670] to-purple-600 rounded-full mr-3"></div>
                        <span className="text-gray-700">{region}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Button
                onClick={prevHeatmap}
                variant="outline"
                className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white">

                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <div className="flex space-x-2">
                {heatmapExamples.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setCurrentHeatmap(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentHeatmap ?
                  'bg-[#572670]' :
                  'bg-gray-300 hover:bg-gray-400'}`
                  } />

                )}
              </div>
              
              <Button
                onClick={nextHeatmap}
                variant="outline"
                className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white">

                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Report Walkthrough */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-[#572670] to-purple-600 text-white">
              Understanding Your Results
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Report Walkthrough
            </h2>
            <p className="text-lg text-gray-600">
              Learn how to read and understand your comprehensive qEEG brain mapping report.
            </p>
          </div>

          <Tabs value={reportStep.toString()} onValueChange={(value) => setReportStep(parseInt(value))}>
            <TabsList className="grid grid-cols-5 w-full mb-8 bg-gradient-to-r from-[#572670]/10 to-purple-600/10">
              {reportSteps.map((step, index) =>
              <TabsTrigger
                key={index}
                value={index.toString()}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#572670] data-[state=active]:to-purple-600 data-[state=active]:text-white bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373] bg-white text-[#737373]">

                  Step {index + 1}
                </TabsTrigger>
              )}
            </TabsList>

            {reportSteps.map((step, index) =>
            <TabsContent key={index} value={index.toString()}>
                <Card className="bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#572670] to-purple-600 rounded-full flex items-center justify-center text-white mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900">{step.title}</CardTitle>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <Badge className="w-fit bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      {step.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {step.content}
                    </p>
                    
                    {index === 0 &&
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6">
                        <h4 className="font-bold text-gray-900 mb-4">What We'll Review:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-gray-700">
                            <li>• Medical history</li>
                            <li>• Current medications</li>
                            <li>• Symptom timeline</li>
                          </ul>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Previous treatments</li>
                            <li>• Family history</li>
                            <li>• Treatment goals</li>
                          </ul>
                        </div>
                      </div>
                  }

                    {index === 2 &&
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                        <h4 className="font-bold text-gray-900 mb-4">Map Color Guide:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                              <span className="text-gray-700">High Activity (Red)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-4 h-4 bg-yellow-500 rounded mr-3"></div>
                              <span className="text-gray-700">Elevated Activity (Yellow)</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                              <span className="text-gray-700">Normal Activity (Green)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                              <span className="text-gray-700">Low Activity (Blue)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  }

                    {index === 4 &&
                  <div className="bg-gradient-to-r from-[#572670]/10 to-purple-600/10 rounded-lg p-6">
                        <h4 className="font-bold text-gray-900 mb-4">Recommended Next Steps:</h4>
                        <div className="space-y-4">
                          <Link to="/prtms">
                            <Button className="w-full bg-gradient-to-r from-[#572670] to-purple-600 hover:from-purple-700 hover:to-blue-700 justify-start">
                              <ArrowRight className="w-4 h-4 mr-2" />
                              Personalized rTMS Protocol
                            </Button>
                          </Link>
                          <Link to="/neurofeedback">
                            <Button variant="outline" className="w-full border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white justify-start">
                              <ArrowRight className="w-4 h-4 mr-2" />
                              Neurofeedback Training
                            </Button>
                          </Link>
                        </div>
                      </div>
                  }
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#572670]/10 to-purple-600/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Ready for Your Brain Map?
              </h3>
              <p className="text-gray-600 mb-6">
                Get detailed insights into your brain function and discover personalized treatment options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-[#572670] to-purple-600 hover:from-purple-700 hover:to-blue-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule Assessment
                  </Button>
                </Link>
                <Link to="/tms-therapy">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white">
                    Learn About TMS
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default BrainMappingPage;