import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Zap, TrendingUp, CheckCircle } from 'lucide-react';

const HowTMSWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20">
                Scientific Breakthrough
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                How TMS Works
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">It's not you, it's the brain.</strong> Depression is caused by insufficient activity in the left dorsolateral prefrontal cortex.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  TMS uses precisely targeted magnetic pulses to stimulate this area, improving mood, working memory, and attention. This non-invasive treatment literally rewires your brain for better mental health.
                </p>
              </div>

              <Card className="bg-gradient-to-r from-[#572670]/5 to-[#572670]/10 border-[#572670]/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <TrendingUp className="h-8 w-8 text-[#572670]" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Success Statistics</h3>
                      <p className="text-[#572670] font-medium">Clinical Trial Results</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>About 50% experience complete remission of symptoms</strong>
                  </p>
                  <p className="text-gray-600">
                    75% of patients show clinically meaningful improvement in their depression scores.
                  </p>
                </CardContent>
              </Card>

              <Button className="bg-[#572670] hover:bg-[#572670]/90 text-white px-8">
                Learn More About the Science
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Explanation */}
          <div className="space-y-6">
            {/* Brain Illustration Card */}
            <Card className="overflow-hidden">
              <CardContent className="p-8 bg-gradient-to-br from-[#572670]/5 to-[#572670]/10">
                <div className="text-center space-y-4">
                  <Brain className="h-24 w-24 text-[#572670] mx-auto" />
                  <h3 className="text-2xl font-bold text-gray-900">Targeted Brain Stimulation</h3>
                  <p className="text-gray-600">
                    Precise magnetic pulses target the left dorsolateral prefrontal cortex
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Process Steps */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                <div className="p-2 rounded-full bg-[#572670] text-white font-bold text-sm min-w-[2rem] h-8 flex items-center justify-center">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Magnetic Field Generation</h4>
                  <p className="text-sm text-gray-600">Powerful magnetic coil creates targeted pulses</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                <div className="p-2 rounded-full bg-[#572670] text-white font-bold text-sm min-w-[2rem] h-8 flex items-center justify-center">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Neural Stimulation</h4>
                  <p className="text-sm text-gray-600">Stimulates underactive brain regions safely</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                <div className="p-2 rounded-full bg-[#572670] text-white font-bold text-sm min-w-[2rem] h-8 flex items-center justify-center">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Neuroplasticity Changes</h4>
                  <p className="text-sm text-gray-600">Brain forms new, healthier neural pathways</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-[#572670]/10 border-2 border-[#572670]/20">
                <CheckCircle className="h-6 w-6 text-[#572670] mt-1" />
                <div>
                  <h4 className="font-semibold text-[#572670]">Lasting Improvement</h4>
                  <p className="text-sm text-gray-700">Sustained mood and cognitive enhancement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTMSWorks;